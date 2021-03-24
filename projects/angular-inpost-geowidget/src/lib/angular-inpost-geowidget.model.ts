export interface IGeoWidgetInitConfig {
  instance?: GeoWidgetInstanceEnum;
  apiEndpoint?: GeoWidgetInstanceUrlEnum;
  defaultLocale?: GeoWidgetLocaleEnum;
  locales?: GeoWidgetLocaleEnum[];
  mobileSize?: number;
  langSelection?: boolean;
  filters?: boolean;
  addressFormat?: string;
  listItemFormat?: string[];
  display?: {
    showTypesFilters?: boolean;
    showSearchBar?: boolean;
  };
  mapType?: GeoWidgetMapTypeEnum;
  searchType?: GeoWidgetMapTypeEnum;
  map?: {
    googleKey?: string;
    useGeolocation?: boolean;
    initialZoom?: number;
    detailsMinZoom?: number;
    autocompleteZoom?: number;
    visiblePointsMinZoom?: number;
    defaultLocation?: [number, number];
    initialTypes?: string[];
  };
  points?: {
    types?: string[];
    allowedToolTips: string[];
    functions: string[];
  };
  customMapAndListInRow?: {
    enabled?: boolean;
    itemsPerPage?: number;
  };
  mobileFiltersAsCheckbox?: boolean;
}

export enum GeoWidgetInstanceEnum {
  PL = 'pl',
  UK = 'uk',
  IT = 'it'
}

export enum GeoWidgetInstanceUrlEnum {
  PL = 'https://api-pl-points.easypack24.net/v1',
  UK = 'https://api-uk-points.easypack24.net/v1',
  IT = 'https://api-it-points.easypack24.net/v1',
}

export enum GeoWidgetLocaleEnum {
  PL = 'pl',
  UK = 'uk'
}

export enum GeoWidgetMapTypeEnum {
  OPEN_STREET_MAP = 'osm',
  GOOGLE_MAPS = 'google'
}

