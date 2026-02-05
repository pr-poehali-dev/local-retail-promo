import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    """API для работы с магазинами и промо-акциями"""
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        if method == 'GET':
            query_params = event.get('queryStringParameters') or {}
            action = query_params.get('action', 'list')
            
            if action == 'list':
                cur.execute("""
                    SELECT s.*, 
                           COUNT(p.id) as promos_count,
                           json_agg(
                               json_build_object(
                                   'id', p.id,
                                   'title', p.title,
                                   'description', p.description,
                                   'image_url', p.image_url,
                                   'end_date', p.end_date,
                                   'views_count', p.views_count,
                                   'clicks_count', p.clicks_count
                               )
                           ) FILTER (WHERE p.is_active = true) as active_promos
                    FROM stores s
                    LEFT JOIN promos p ON s.id = p.store_id
                    WHERE s.status = 'active'
                    GROUP BY s.id
                    ORDER BY s.promo_points DESC, s.rating DESC
                """)
                stores = cur.fetchall()
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'stores': stores}, default=str),
                    'isBase64Encoded': False
                }
            
            elif action == 'map':
                cur.execute("""
                    SELECT id, name, logo, address, latitude, longitude, rating, promo_points
                    FROM stores
                    WHERE status = 'active' 
                      AND latitude IS NOT NULL 
                      AND longitude IS NOT NULL
                    ORDER BY promo_points DESC
                """)
                stores = cur.fetchall()
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'stores': stores}, default=str),
                    'isBase64Encoded': False
                }
        
        elif method == 'POST':
            data = json.loads(event.get('body', '{}'))
            
            name = data.get('name', '').strip()
            description = data.get('description', '').strip()
            address = data.get('address', '').strip()
            phone = data.get('phone', '').strip()
            email = data.get('email', '').strip()
            website = data.get('website', '').strip()
            logo = data.get('logo', '🏪')
            latitude = data.get('latitude')
            longitude = data.get('longitude')
            
            if not name or not address or not phone or not email:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'error': 'Заполните обязательные поля: название, адрес, телефон, email'
                    }),
                    'isBase64Encoded': False
                }
            
            cur.execute("""
                INSERT INTO stores (name, logo, description, address, latitude, longitude, phone, email, website, status)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, 'pending')
                RETURNING id, name, status
            """, (name, logo, description, address, latitude, longitude, phone, email, website))
            
            store = cur.fetchone()
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Магазин успешно зарегистрирован! Заявка отправлена на модерацию.',
                    'store': dict(store)
                }),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
    
    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()
