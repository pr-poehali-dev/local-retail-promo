declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void;
      Map: new (
        el: string,
        options: {
          center: [number, number];
          zoom: number;
          controls: string[];
        }
      ) => {
        geoObjects: {
          add: (placemark: unknown) => void;
        };
      };
      Placemark: new (
        coords: [number, number],
        properties: {
          balloonContentHeader: string;
          balloonContentBody: string;
          hintContent: string;
        },
        options: {
          preset: string;
        }
      ) => unknown;
    };
  }
}

export {};
