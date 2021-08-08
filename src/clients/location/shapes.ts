/**
 * @schema LocationAssociateTrackerConsumerRequest
 */
export interface LocationAssociateTrackerConsumerRequest {
  /**
   * @schema LocationAssociateTrackerConsumerRequest#ConsumerArn
   */
  readonly consumerArn?: string;

  /**
   * @schema LocationAssociateTrackerConsumerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationAssociateTrackerConsumerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationAssociateTrackerConsumerRequest(obj: LocationAssociateTrackerConsumerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerArn': obj.consumerArn,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationAssociateTrackerConsumerResponse
 */
export interface LocationAssociateTrackerConsumerResponse {
}

/**
 * Converts an object of type 'LocationAssociateTrackerConsumerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationAssociateTrackerConsumerResponse(obj: LocationAssociateTrackerConsumerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteDevicePositionHistoryRequest
 */
export interface LocationBatchDeleteDevicePositionHistoryRequest {
  /**
   * @schema LocationBatchDeleteDevicePositionHistoryRequest#DeviceIds
   */
  readonly deviceIds?: string[];

  /**
   * @schema LocationBatchDeleteDevicePositionHistoryRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationBatchDeleteDevicePositionHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteDevicePositionHistoryRequest(obj: LocationBatchDeleteDevicePositionHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceIds': obj.deviceIds?.map(y => y),
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteDevicePositionHistoryResponse
 */
export interface LocationBatchDeleteDevicePositionHistoryResponse {
  /**
   * @schema LocationBatchDeleteDevicePositionHistoryResponse#Errors
   */
  readonly errors?: LocationBatchDeleteDevicePositionHistoryError[];

}

/**
 * Converts an object of type 'LocationBatchDeleteDevicePositionHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteDevicePositionHistoryResponse(obj: LocationBatchDeleteDevicePositionHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_LocationBatchDeleteDevicePositionHistoryError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteGeofenceRequest
 */
export interface LocationBatchDeleteGeofenceRequest {
  /**
   * @schema LocationBatchDeleteGeofenceRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationBatchDeleteGeofenceRequest#GeofenceIds
   */
  readonly geofenceIds?: string[];

}

/**
 * Converts an object of type 'LocationBatchDeleteGeofenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteGeofenceRequest(obj: LocationBatchDeleteGeofenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'GeofenceIds': obj.geofenceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteGeofenceResponse
 */
export interface LocationBatchDeleteGeofenceResponse {
  /**
   * @schema LocationBatchDeleteGeofenceResponse#Errors
   */
  readonly errors?: LocationBatchDeleteGeofenceError[];

}

/**
 * Converts an object of type 'LocationBatchDeleteGeofenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteGeofenceResponse(obj: LocationBatchDeleteGeofenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_LocationBatchDeleteGeofenceError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchEvaluateGeofencesRequest
 */
export interface LocationBatchEvaluateGeofencesRequest {
  /**
   * @schema LocationBatchEvaluateGeofencesRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationBatchEvaluateGeofencesRequest#DevicePositionUpdates
   */
  readonly devicePositionUpdates?: LocationDevicePositionUpdate[];

}

/**
 * Converts an object of type 'LocationBatchEvaluateGeofencesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchEvaluateGeofencesRequest(obj: LocationBatchEvaluateGeofencesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'DevicePositionUpdates': obj.devicePositionUpdates?.map(y => toJson_LocationDevicePositionUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchEvaluateGeofencesResponse
 */
export interface LocationBatchEvaluateGeofencesResponse {
  /**
   * @schema LocationBatchEvaluateGeofencesResponse#Errors
   */
  readonly errors?: LocationBatchEvaluateGeofencesError[];

}

/**
 * Converts an object of type 'LocationBatchEvaluateGeofencesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchEvaluateGeofencesResponse(obj: LocationBatchEvaluateGeofencesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_LocationBatchEvaluateGeofencesError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchGetDevicePositionRequest
 */
export interface LocationBatchGetDevicePositionRequest {
  /**
   * @schema LocationBatchGetDevicePositionRequest#DeviceIds
   */
  readonly deviceIds?: string[];

  /**
   * @schema LocationBatchGetDevicePositionRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationBatchGetDevicePositionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchGetDevicePositionRequest(obj: LocationBatchGetDevicePositionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceIds': obj.deviceIds?.map(y => y),
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchGetDevicePositionResponse
 */
export interface LocationBatchGetDevicePositionResponse {
  /**
   * @schema LocationBatchGetDevicePositionResponse#DevicePositions
   */
  readonly devicePositions?: LocationDevicePosition[];

  /**
   * @schema LocationBatchGetDevicePositionResponse#Errors
   */
  readonly errors?: LocationBatchGetDevicePositionError[];

}

/**
 * Converts an object of type 'LocationBatchGetDevicePositionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchGetDevicePositionResponse(obj: LocationBatchGetDevicePositionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevicePositions': obj.devicePositions?.map(y => toJson_LocationDevicePosition(y)),
    'Errors': obj.errors?.map(y => toJson_LocationBatchGetDevicePositionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchPutGeofenceRequest
 */
export interface LocationBatchPutGeofenceRequest {
  /**
   * @schema LocationBatchPutGeofenceRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationBatchPutGeofenceRequest#Entries
   */
  readonly entries?: LocationBatchPutGeofenceRequestEntry[];

}

/**
 * Converts an object of type 'LocationBatchPutGeofenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchPutGeofenceRequest(obj: LocationBatchPutGeofenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'Entries': obj.entries?.map(y => toJson_LocationBatchPutGeofenceRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchPutGeofenceResponse
 */
export interface LocationBatchPutGeofenceResponse {
  /**
   * @schema LocationBatchPutGeofenceResponse#Errors
   */
  readonly errors?: LocationBatchPutGeofenceError[];

  /**
   * @schema LocationBatchPutGeofenceResponse#Successes
   */
  readonly successes?: LocationBatchPutGeofenceSuccess[];

}

/**
 * Converts an object of type 'LocationBatchPutGeofenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchPutGeofenceResponse(obj: LocationBatchPutGeofenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_LocationBatchPutGeofenceError(y)),
    'Successes': obj.successes?.map(y => toJson_LocationBatchPutGeofenceSuccess(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchUpdateDevicePositionRequest
 */
export interface LocationBatchUpdateDevicePositionRequest {
  /**
   * @schema LocationBatchUpdateDevicePositionRequest#TrackerName
   */
  readonly trackerName?: string;

  /**
   * @schema LocationBatchUpdateDevicePositionRequest#Updates
   */
  readonly updates?: LocationDevicePositionUpdate[];

}

/**
 * Converts an object of type 'LocationBatchUpdateDevicePositionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchUpdateDevicePositionRequest(obj: LocationBatchUpdateDevicePositionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrackerName': obj.trackerName,
    'Updates': obj.updates?.map(y => toJson_LocationDevicePositionUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchUpdateDevicePositionResponse
 */
export interface LocationBatchUpdateDevicePositionResponse {
  /**
   * @schema LocationBatchUpdateDevicePositionResponse#Errors
   */
  readonly errors?: LocationBatchUpdateDevicePositionError[];

}

/**
 * Converts an object of type 'LocationBatchUpdateDevicePositionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchUpdateDevicePositionResponse(obj: LocationBatchUpdateDevicePositionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_LocationBatchUpdateDevicePositionError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCalculateRouteRequest
 */
export interface LocationCalculateRouteRequest {
  /**
   * @schema LocationCalculateRouteRequest#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationCalculateRouteRequest#CarModeOptions
   */
  readonly carModeOptions?: LocationCalculateRouteCarModeOptions;

  /**
   * @schema LocationCalculateRouteRequest#DepartNow
   */
  readonly departNow?: boolean;

  /**
   * @schema LocationCalculateRouteRequest#DeparturePosition
   */
  readonly departurePosition?: number[];

  /**
   * @schema LocationCalculateRouteRequest#DepartureTime
   */
  readonly departureTime?: string;

  /**
   * @schema LocationCalculateRouteRequest#DestinationPosition
   */
  readonly destinationPosition?: number[];

  /**
   * @schema LocationCalculateRouteRequest#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema LocationCalculateRouteRequest#IncludeLegGeometry
   */
  readonly includeLegGeometry?: boolean;

  /**
   * @schema LocationCalculateRouteRequest#TravelMode
   */
  readonly travelMode?: string;

  /**
   * @schema LocationCalculateRouteRequest#TruckModeOptions
   */
  readonly truckModeOptions?: LocationCalculateRouteTruckModeOptions;

  /**
   * @schema LocationCalculateRouteRequest#WaypointPositions
   */
  readonly waypointPositions?: number[][];

}

/**
 * Converts an object of type 'LocationCalculateRouteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCalculateRouteRequest(obj: LocationCalculateRouteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
    'CarModeOptions': toJson_LocationCalculateRouteCarModeOptions(obj.carModeOptions),
    'DepartNow': obj.departNow,
    'DeparturePosition': obj.departurePosition?.map(y => y),
    'DepartureTime': obj.departureTime,
    'DestinationPosition': obj.destinationPosition?.map(y => y),
    'DistanceUnit': obj.distanceUnit,
    'IncludeLegGeometry': obj.includeLegGeometry,
    'TravelMode': obj.travelMode,
    'TruckModeOptions': toJson_LocationCalculateRouteTruckModeOptions(obj.truckModeOptions),
    'WaypointPositions': obj.waypointPositions?.map(y => y?.map(y => y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCalculateRouteResponse
 */
export interface LocationCalculateRouteResponse {
  /**
   * @schema LocationCalculateRouteResponse#Legs
   */
  readonly legs?: LocationLeg[];

  /**
   * @schema LocationCalculateRouteResponse#Summary
   */
  readonly summary?: LocationCalculateRouteSummary;

}

/**
 * Converts an object of type 'LocationCalculateRouteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCalculateRouteResponse(obj: LocationCalculateRouteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Legs': obj.legs?.map(y => toJson_LocationLeg(y)),
    'Summary': toJson_LocationCalculateRouteSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateGeofenceCollectionRequest
 */
export interface LocationCreateGeofenceCollectionRequest {
  /**
   * @schema LocationCreateGeofenceCollectionRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationCreateGeofenceCollectionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationCreateGeofenceCollectionRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LocationCreateGeofenceCollectionRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationCreateGeofenceCollectionRequest#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationCreateGeofenceCollectionRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationCreateGeofenceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateGeofenceCollectionRequest(obj: LocationCreateGeofenceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateGeofenceCollectionResponse
 */
export interface LocationCreateGeofenceCollectionResponse {
  /**
   * @schema LocationCreateGeofenceCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema LocationCreateGeofenceCollectionResponse#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationCreateGeofenceCollectionResponse#CreateTime
   */
  readonly createTime?: string;

}

/**
 * Converts an object of type 'LocationCreateGeofenceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateGeofenceCollectionResponse(obj: LocationCreateGeofenceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionArn': obj.collectionArn,
    'CollectionName': obj.collectionName,
    'CreateTime': obj.createTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateMapRequest
 */
export interface LocationCreateMapRequest {
  /**
   * @schema LocationCreateMapRequest#Configuration
   */
  readonly configuration?: LocationMapConfiguration;

  /**
   * @schema LocationCreateMapRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationCreateMapRequest#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationCreateMapRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationCreateMapRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationCreateMapRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateMapRequest(obj: LocationCreateMapRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_LocationMapConfiguration(obj.configuration),
    'Description': obj.description,
    'MapName': obj.mapName,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateMapResponse
 */
export interface LocationCreateMapResponse {
  /**
   * @schema LocationCreateMapResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationCreateMapResponse#MapArn
   */
  readonly mapArn?: string;

  /**
   * @schema LocationCreateMapResponse#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationCreateMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateMapResponse(obj: LocationCreateMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'MapArn': obj.mapArn,
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreatePlaceIndexRequest
 */
export interface LocationCreatePlaceIndexRequest {
  /**
   * @schema LocationCreatePlaceIndexRequest#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationCreatePlaceIndexRequest#DataSourceConfiguration
   */
  readonly dataSourceConfiguration?: LocationDataSourceConfiguration;

  /**
   * @schema LocationCreatePlaceIndexRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationCreatePlaceIndexRequest#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationCreatePlaceIndexRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationCreatePlaceIndexRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationCreatePlaceIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreatePlaceIndexRequest(obj: LocationCreatePlaceIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSource': obj.dataSource,
    'DataSourceConfiguration': toJson_LocationDataSourceConfiguration(obj.dataSourceConfiguration),
    'Description': obj.description,
    'IndexName': obj.indexName,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreatePlaceIndexResponse
 */
export interface LocationCreatePlaceIndexResponse {
  /**
   * @schema LocationCreatePlaceIndexResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationCreatePlaceIndexResponse#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema LocationCreatePlaceIndexResponse#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'LocationCreatePlaceIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreatePlaceIndexResponse(obj: LocationCreatePlaceIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'IndexArn': obj.indexArn,
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateRouteCalculatorRequest
 */
export interface LocationCreateRouteCalculatorRequest {
  /**
   * @schema LocationCreateRouteCalculatorRequest#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationCreateRouteCalculatorRequest#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationCreateRouteCalculatorRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationCreateRouteCalculatorRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationCreateRouteCalculatorRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationCreateRouteCalculatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateRouteCalculatorRequest(obj: LocationCreateRouteCalculatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateRouteCalculatorResponse
 */
export interface LocationCreateRouteCalculatorResponse {
  /**
   * @schema LocationCreateRouteCalculatorResponse#CalculatorArn
   */
  readonly calculatorArn?: string;

  /**
   * @schema LocationCreateRouteCalculatorResponse#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationCreateRouteCalculatorResponse#CreateTime
   */
  readonly createTime?: string;

}

/**
 * Converts an object of type 'LocationCreateRouteCalculatorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateRouteCalculatorResponse(obj: LocationCreateRouteCalculatorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorArn': obj.calculatorArn,
    'CalculatorName': obj.calculatorName,
    'CreateTime': obj.createTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateTrackerRequest
 */
export interface LocationCreateTrackerRequest {
  /**
   * @schema LocationCreateTrackerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationCreateTrackerRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LocationCreateTrackerRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationCreateTrackerRequest#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationCreateTrackerRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationCreateTrackerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationCreateTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateTrackerRequest(obj: LocationCreateTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCreateTrackerResponse
 */
export interface LocationCreateTrackerResponse {
  /**
   * @schema LocationCreateTrackerResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationCreateTrackerResponse#TrackerArn
   */
  readonly trackerArn?: string;

  /**
   * @schema LocationCreateTrackerResponse#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationCreateTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCreateTrackerResponse(obj: LocationCreateTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'TrackerArn': obj.trackerArn,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteGeofenceCollectionRequest
 */
export interface LocationDeleteGeofenceCollectionRequest {
  /**
   * @schema LocationDeleteGeofenceCollectionRequest#CollectionName
   */
  readonly collectionName?: string;

}

/**
 * Converts an object of type 'LocationDeleteGeofenceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteGeofenceCollectionRequest(obj: LocationDeleteGeofenceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteGeofenceCollectionResponse
 */
export interface LocationDeleteGeofenceCollectionResponse {
}

/**
 * Converts an object of type 'LocationDeleteGeofenceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteGeofenceCollectionResponse(obj: LocationDeleteGeofenceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteMapRequest
 */
export interface LocationDeleteMapRequest {
  /**
   * @schema LocationDeleteMapRequest#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationDeleteMapRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteMapRequest(obj: LocationDeleteMapRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteMapResponse
 */
export interface LocationDeleteMapResponse {
}

/**
 * Converts an object of type 'LocationDeleteMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteMapResponse(obj: LocationDeleteMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeletePlaceIndexRequest
 */
export interface LocationDeletePlaceIndexRequest {
  /**
   * @schema LocationDeletePlaceIndexRequest#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'LocationDeletePlaceIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeletePlaceIndexRequest(obj: LocationDeletePlaceIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeletePlaceIndexResponse
 */
export interface LocationDeletePlaceIndexResponse {
}

/**
 * Converts an object of type 'LocationDeletePlaceIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeletePlaceIndexResponse(obj: LocationDeletePlaceIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteRouteCalculatorRequest
 */
export interface LocationDeleteRouteCalculatorRequest {
  /**
   * @schema LocationDeleteRouteCalculatorRequest#CalculatorName
   */
  readonly calculatorName?: string;

}

/**
 * Converts an object of type 'LocationDeleteRouteCalculatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteRouteCalculatorRequest(obj: LocationDeleteRouteCalculatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteRouteCalculatorResponse
 */
export interface LocationDeleteRouteCalculatorResponse {
}

/**
 * Converts an object of type 'LocationDeleteRouteCalculatorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteRouteCalculatorResponse(obj: LocationDeleteRouteCalculatorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteTrackerRequest
 */
export interface LocationDeleteTrackerRequest {
  /**
   * @schema LocationDeleteTrackerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationDeleteTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteTrackerRequest(obj: LocationDeleteTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDeleteTrackerResponse
 */
export interface LocationDeleteTrackerResponse {
}

/**
 * Converts an object of type 'LocationDeleteTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDeleteTrackerResponse(obj: LocationDeleteTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeGeofenceCollectionRequest
 */
export interface LocationDescribeGeofenceCollectionRequest {
  /**
   * @schema LocationDescribeGeofenceCollectionRequest#CollectionName
   */
  readonly collectionName?: string;

}

/**
 * Converts an object of type 'LocationDescribeGeofenceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeGeofenceCollectionRequest(obj: LocationDescribeGeofenceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeGeofenceCollectionResponse
 */
export interface LocationDescribeGeofenceCollectionResponse {
  /**
   * @schema LocationDescribeGeofenceCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationDescribeGeofenceCollectionResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationDescribeGeofenceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeGeofenceCollectionResponse(obj: LocationDescribeGeofenceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionArn': obj.collectionArn,
    'CollectionName': obj.collectionName,
    'CreateTime': obj.createTime,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeMapRequest
 */
export interface LocationDescribeMapRequest {
  /**
   * @schema LocationDescribeMapRequest#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationDescribeMapRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeMapRequest(obj: LocationDescribeMapRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeMapResponse
 */
export interface LocationDescribeMapResponse {
  /**
   * @schema LocationDescribeMapResponse#Configuration
   */
  readonly configuration?: LocationMapConfiguration;

  /**
   * @schema LocationDescribeMapResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationDescribeMapResponse#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationDescribeMapResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LocationDescribeMapResponse#MapArn
   */
  readonly mapArn?: string;

  /**
   * @schema LocationDescribeMapResponse#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationDescribeMapResponse#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationDescribeMapResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationDescribeMapResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationDescribeMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeMapResponse(obj: LocationDescribeMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': toJson_LocationMapConfiguration(obj.configuration),
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'MapArn': obj.mapArn,
    'MapName': obj.mapName,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribePlaceIndexRequest
 */
export interface LocationDescribePlaceIndexRequest {
  /**
   * @schema LocationDescribePlaceIndexRequest#IndexName
   */
  readonly indexName?: string;

}

/**
 * Converts an object of type 'LocationDescribePlaceIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribePlaceIndexRequest(obj: LocationDescribePlaceIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribePlaceIndexResponse
 */
export interface LocationDescribePlaceIndexResponse {
  /**
   * @schema LocationDescribePlaceIndexResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#DataSourceConfiguration
   */
  readonly dataSourceConfiguration?: LocationDataSourceConfiguration;

  /**
   * @schema LocationDescribePlaceIndexResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationDescribePlaceIndexResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationDescribePlaceIndexResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationDescribePlaceIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribePlaceIndexResponse(obj: LocationDescribePlaceIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'DataSourceConfiguration': toJson_LocationDataSourceConfiguration(obj.dataSourceConfiguration),
    'Description': obj.description,
    'IndexArn': obj.indexArn,
    'IndexName': obj.indexName,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeRouteCalculatorRequest
 */
export interface LocationDescribeRouteCalculatorRequest {
  /**
   * @schema LocationDescribeRouteCalculatorRequest#CalculatorName
   */
  readonly calculatorName?: string;

}

/**
 * Converts an object of type 'LocationDescribeRouteCalculatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeRouteCalculatorRequest(obj: LocationDescribeRouteCalculatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeRouteCalculatorResponse
 */
export interface LocationDescribeRouteCalculatorResponse {
  /**
   * @schema LocationDescribeRouteCalculatorResponse#CalculatorArn
   */
  readonly calculatorArn?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationDescribeRouteCalculatorResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationDescribeRouteCalculatorResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationDescribeRouteCalculatorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeRouteCalculatorResponse(obj: LocationDescribeRouteCalculatorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorArn': obj.calculatorArn,
    'CalculatorName': obj.calculatorName,
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeTrackerRequest
 */
export interface LocationDescribeTrackerRequest {
  /**
   * @schema LocationDescribeTrackerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationDescribeTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeTrackerRequest(obj: LocationDescribeTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDescribeTrackerResponse
 */
export interface LocationDescribeTrackerResponse {
  /**
   * @schema LocationDescribeTrackerResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationDescribeTrackerResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LocationDescribeTrackerResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LocationDescribeTrackerResponse#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationDescribeTrackerResponse#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationDescribeTrackerResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema LocationDescribeTrackerResponse#TrackerArn
   */
  readonly trackerArn?: string;

  /**
   * @schema LocationDescribeTrackerResponse#TrackerName
   */
  readonly trackerName?: string;

  /**
   * @schema LocationDescribeTrackerResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationDescribeTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDescribeTrackerResponse(obj: LocationDescribeTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'TrackerArn': obj.trackerArn,
    'TrackerName': obj.trackerName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDisassociateTrackerConsumerRequest
 */
export interface LocationDisassociateTrackerConsumerRequest {
  /**
   * @schema LocationDisassociateTrackerConsumerRequest#ConsumerArn
   */
  readonly consumerArn?: string;

  /**
   * @schema LocationDisassociateTrackerConsumerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationDisassociateTrackerConsumerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDisassociateTrackerConsumerRequest(obj: LocationDisassociateTrackerConsumerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerArn': obj.consumerArn,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDisassociateTrackerConsumerResponse
 */
export interface LocationDisassociateTrackerConsumerResponse {
}

/**
 * Converts an object of type 'LocationDisassociateTrackerConsumerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDisassociateTrackerConsumerResponse(obj: LocationDisassociateTrackerConsumerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetDevicePositionRequest
 */
export interface LocationGetDevicePositionRequest {
  /**
   * @schema LocationGetDevicePositionRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationGetDevicePositionRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationGetDevicePositionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetDevicePositionRequest(obj: LocationGetDevicePositionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetDevicePositionResponse
 */
export interface LocationGetDevicePositionResponse {
  /**
   * @schema LocationGetDevicePositionResponse#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationGetDevicePositionResponse#Position
   */
  readonly position?: number[];

  /**
   * @schema LocationGetDevicePositionResponse#ReceivedTime
   */
  readonly receivedTime?: string;

  /**
   * @schema LocationGetDevicePositionResponse#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationGetDevicePositionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetDevicePositionResponse(obj: LocationGetDevicePositionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Position': obj.position?.map(y => y),
    'ReceivedTime': obj.receivedTime,
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetDevicePositionHistoryRequest
 */
export interface LocationGetDevicePositionHistoryRequest {
  /**
   * @schema LocationGetDevicePositionHistoryRequest#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationGetDevicePositionHistoryRequest#EndTimeExclusive
   */
  readonly endTimeExclusive?: string;

  /**
   * @schema LocationGetDevicePositionHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LocationGetDevicePositionHistoryRequest#StartTimeInclusive
   */
  readonly startTimeInclusive?: string;

  /**
   * @schema LocationGetDevicePositionHistoryRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationGetDevicePositionHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetDevicePositionHistoryRequest(obj: LocationGetDevicePositionHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'EndTimeExclusive': obj.endTimeExclusive,
    'NextToken': obj.nextToken,
    'StartTimeInclusive': obj.startTimeInclusive,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetDevicePositionHistoryResponse
 */
export interface LocationGetDevicePositionHistoryResponse {
  /**
   * @schema LocationGetDevicePositionHistoryResponse#DevicePositions
   */
  readonly devicePositions?: LocationDevicePosition[];

  /**
   * @schema LocationGetDevicePositionHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationGetDevicePositionHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetDevicePositionHistoryResponse(obj: LocationGetDevicePositionHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevicePositions': obj.devicePositions?.map(y => toJson_LocationDevicePosition(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetGeofenceRequest
 */
export interface LocationGetGeofenceRequest {
  /**
   * @schema LocationGetGeofenceRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationGetGeofenceRequest#GeofenceId
   */
  readonly geofenceId?: string;

}

/**
 * Converts an object of type 'LocationGetGeofenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetGeofenceRequest(obj: LocationGetGeofenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'GeofenceId': obj.geofenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetGeofenceResponse
 */
export interface LocationGetGeofenceResponse {
  /**
   * @schema LocationGetGeofenceResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationGetGeofenceResponse#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationGetGeofenceResponse#Geometry
   */
  readonly geometry?: LocationGeofenceGeometry;

  /**
   * @schema LocationGetGeofenceResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LocationGetGeofenceResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationGetGeofenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetGeofenceResponse(obj: LocationGetGeofenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'GeofenceId': obj.geofenceId,
    'Geometry': toJson_LocationGeofenceGeometry(obj.geometry),
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapGlyphsRequest
 */
export interface LocationGetMapGlyphsRequest {
  /**
   * @schema LocationGetMapGlyphsRequest#FontStack
   */
  readonly fontStack?: string;

  /**
   * @schema LocationGetMapGlyphsRequest#FontUnicodeRange
   */
  readonly fontUnicodeRange?: string;

  /**
   * @schema LocationGetMapGlyphsRequest#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationGetMapGlyphsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapGlyphsRequest(obj: LocationGetMapGlyphsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FontStack': obj.fontStack,
    'FontUnicodeRange': obj.fontUnicodeRange,
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapGlyphsResponse
 */
export interface LocationGetMapGlyphsResponse {
  /**
   * @schema LocationGetMapGlyphsResponse#Blob
   */
  readonly blob?: any;

  /**
   * @schema LocationGetMapGlyphsResponse#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'LocationGetMapGlyphsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapGlyphsResponse(obj: LocationGetMapGlyphsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blob': obj.blob,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapSpritesRequest
 */
export interface LocationGetMapSpritesRequest {
  /**
   * @schema LocationGetMapSpritesRequest#FileName
   */
  readonly fileName?: string;

  /**
   * @schema LocationGetMapSpritesRequest#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationGetMapSpritesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapSpritesRequest(obj: LocationGetMapSpritesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileName': obj.fileName,
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapSpritesResponse
 */
export interface LocationGetMapSpritesResponse {
  /**
   * @schema LocationGetMapSpritesResponse#Blob
   */
  readonly blob?: any;

  /**
   * @schema LocationGetMapSpritesResponse#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'LocationGetMapSpritesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapSpritesResponse(obj: LocationGetMapSpritesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blob': obj.blob,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapStyleDescriptorRequest
 */
export interface LocationGetMapStyleDescriptorRequest {
  /**
   * @schema LocationGetMapStyleDescriptorRequest#MapName
   */
  readonly mapName?: string;

}

/**
 * Converts an object of type 'LocationGetMapStyleDescriptorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapStyleDescriptorRequest(obj: LocationGetMapStyleDescriptorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MapName': obj.mapName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapStyleDescriptorResponse
 */
export interface LocationGetMapStyleDescriptorResponse {
  /**
   * @schema LocationGetMapStyleDescriptorResponse#Blob
   */
  readonly blob?: any;

  /**
   * @schema LocationGetMapStyleDescriptorResponse#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'LocationGetMapStyleDescriptorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapStyleDescriptorResponse(obj: LocationGetMapStyleDescriptorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blob': obj.blob,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapTileRequest
 */
export interface LocationGetMapTileRequest {
  /**
   * @schema LocationGetMapTileRequest#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationGetMapTileRequest#X
   */
  readonly x?: string;

  /**
   * @schema LocationGetMapTileRequest#Y
   */
  readonly y?: string;

  /**
   * @schema LocationGetMapTileRequest#Z
   */
  readonly z?: string;

}

/**
 * Converts an object of type 'LocationGetMapTileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapTileRequest(obj: LocationGetMapTileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MapName': obj.mapName,
    'X': obj.x,
    'Y': obj.y,
    'Z': obj.z,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGetMapTileResponse
 */
export interface LocationGetMapTileResponse {
  /**
   * @schema LocationGetMapTileResponse#Blob
   */
  readonly blob?: any;

  /**
   * @schema LocationGetMapTileResponse#ContentType
   */
  readonly contentType?: string;

}

/**
 * Converts an object of type 'LocationGetMapTileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGetMapTileResponse(obj: LocationGetMapTileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blob': obj.blob,
    'ContentType': obj.contentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListDevicePositionsRequest
 */
export interface LocationListDevicePositionsRequest {
  /**
   * @schema LocationListDevicePositionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListDevicePositionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LocationListDevicePositionsRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationListDevicePositionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListDevicePositionsRequest(obj: LocationListDevicePositionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListDevicePositionsResponse
 */
export interface LocationListDevicePositionsResponse {
  /**
   * @schema LocationListDevicePositionsResponse#Entries
   */
  readonly entries?: LocationListDevicePositionsResponseEntry[];

  /**
   * @schema LocationListDevicePositionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListDevicePositionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListDevicePositionsResponse(obj: LocationListDevicePositionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListDevicePositionsResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofenceCollectionsRequest
 */
export interface LocationListGeofenceCollectionsRequest {
  /**
   * @schema LocationListGeofenceCollectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListGeofenceCollectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListGeofenceCollectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofenceCollectionsRequest(obj: LocationListGeofenceCollectionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofenceCollectionsResponse
 */
export interface LocationListGeofenceCollectionsResponse {
  /**
   * @schema LocationListGeofenceCollectionsResponse#Entries
   */
  readonly entries?: LocationListGeofenceCollectionsResponseEntry[];

  /**
   * @schema LocationListGeofenceCollectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListGeofenceCollectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofenceCollectionsResponse(obj: LocationListGeofenceCollectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListGeofenceCollectionsResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofencesRequest
 */
export interface LocationListGeofencesRequest {
  /**
   * @schema LocationListGeofencesRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationListGeofencesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListGeofencesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofencesRequest(obj: LocationListGeofencesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofencesResponse
 */
export interface LocationListGeofencesResponse {
  /**
   * @schema LocationListGeofencesResponse#Entries
   */
  readonly entries?: LocationListGeofenceResponseEntry[];

  /**
   * @schema LocationListGeofencesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListGeofencesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofencesResponse(obj: LocationListGeofencesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListGeofenceResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListMapsRequest
 */
export interface LocationListMapsRequest {
  /**
   * @schema LocationListMapsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListMapsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListMapsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListMapsRequest(obj: LocationListMapsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListMapsResponse
 */
export interface LocationListMapsResponse {
  /**
   * @schema LocationListMapsResponse#Entries
   */
  readonly entries?: LocationListMapsResponseEntry[];

  /**
   * @schema LocationListMapsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListMapsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListMapsResponse(obj: LocationListMapsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListMapsResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListPlaceIndexesRequest
 */
export interface LocationListPlaceIndexesRequest {
  /**
   * @schema LocationListPlaceIndexesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListPlaceIndexesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListPlaceIndexesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListPlaceIndexesRequest(obj: LocationListPlaceIndexesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListPlaceIndexesResponse
 */
export interface LocationListPlaceIndexesResponse {
  /**
   * @schema LocationListPlaceIndexesResponse#Entries
   */
  readonly entries?: LocationListPlaceIndexesResponseEntry[];

  /**
   * @schema LocationListPlaceIndexesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListPlaceIndexesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListPlaceIndexesResponse(obj: LocationListPlaceIndexesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListPlaceIndexesResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListRouteCalculatorsRequest
 */
export interface LocationListRouteCalculatorsRequest {
  /**
   * @schema LocationListRouteCalculatorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListRouteCalculatorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListRouteCalculatorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListRouteCalculatorsRequest(obj: LocationListRouteCalculatorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListRouteCalculatorsResponse
 */
export interface LocationListRouteCalculatorsResponse {
  /**
   * @schema LocationListRouteCalculatorsResponse#Entries
   */
  readonly entries?: LocationListRouteCalculatorsResponseEntry[];

  /**
   * @schema LocationListRouteCalculatorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListRouteCalculatorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListRouteCalculatorsResponse(obj: LocationListRouteCalculatorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListRouteCalculatorsResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTagsForResourceRequest
 */
export interface LocationListTagsForResourceRequest {
  /**
   * @schema LocationListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LocationListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTagsForResourceRequest(obj: LocationListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTagsForResourceResponse
 */
export interface LocationListTagsForResourceResponse {
  /**
   * @schema LocationListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTagsForResourceResponse(obj: LocationListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTrackerConsumersRequest
 */
export interface LocationListTrackerConsumersRequest {
  /**
   * @schema LocationListTrackerConsumersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListTrackerConsumersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LocationListTrackerConsumersRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationListTrackerConsumersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTrackerConsumersRequest(obj: LocationListTrackerConsumersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTrackerConsumersResponse
 */
export interface LocationListTrackerConsumersResponse {
  /**
   * @schema LocationListTrackerConsumersResponse#ConsumerArns
   */
  readonly consumerArns?: string[];

  /**
   * @schema LocationListTrackerConsumersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListTrackerConsumersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTrackerConsumersResponse(obj: LocationListTrackerConsumersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConsumerArns': obj.consumerArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTrackersRequest
 */
export interface LocationListTrackersRequest {
  /**
   * @schema LocationListTrackersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationListTrackersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListTrackersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTrackersRequest(obj: LocationListTrackersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTrackersResponse
 */
export interface LocationListTrackersResponse {
  /**
   * @schema LocationListTrackersResponse#Entries
   */
  readonly entries?: LocationListTrackersResponseEntry[];

  /**
   * @schema LocationListTrackersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LocationListTrackersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTrackersResponse(obj: LocationListTrackersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_LocationListTrackersResponseEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationPutGeofenceRequest
 */
export interface LocationPutGeofenceRequest {
  /**
   * @schema LocationPutGeofenceRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationPutGeofenceRequest#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationPutGeofenceRequest#Geometry
   */
  readonly geometry?: LocationGeofenceGeometry;

}

/**
 * Converts an object of type 'LocationPutGeofenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationPutGeofenceRequest(obj: LocationPutGeofenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'GeofenceId': obj.geofenceId,
    'Geometry': toJson_LocationGeofenceGeometry(obj.geometry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationPutGeofenceResponse
 */
export interface LocationPutGeofenceResponse {
  /**
   * @schema LocationPutGeofenceResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationPutGeofenceResponse#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationPutGeofenceResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationPutGeofenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationPutGeofenceResponse(obj: LocationPutGeofenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'GeofenceId': obj.geofenceId,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForPositionRequest
 */
export interface LocationSearchPlaceIndexForPositionRequest {
  /**
   * @schema LocationSearchPlaceIndexForPositionRequest#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationSearchPlaceIndexForPositionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationSearchPlaceIndexForPositionRequest#Position
   */
  readonly position?: number[];

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForPositionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForPositionRequest(obj: LocationSearchPlaceIndexForPositionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexName': obj.indexName,
    'MaxResults': obj.maxResults,
    'Position': obj.position?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForPositionResponse
 */
export interface LocationSearchPlaceIndexForPositionResponse {
  /**
   * @schema LocationSearchPlaceIndexForPositionResponse#Results
   */
  readonly results?: LocationSearchForPositionResult[];

  /**
   * @schema LocationSearchPlaceIndexForPositionResponse#Summary
   */
  readonly summary?: LocationSearchPlaceIndexForPositionSummary;

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForPositionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForPositionResponse(obj: LocationSearchPlaceIndexForPositionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_LocationSearchForPositionResult(y)),
    'Summary': toJson_LocationSearchPlaceIndexForPositionSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForTextRequest
 */
export interface LocationSearchPlaceIndexForTextRequest {
  /**
   * @schema LocationSearchPlaceIndexForTextRequest#BiasPosition
   */
  readonly biasPosition?: number[];

  /**
   * @schema LocationSearchPlaceIndexForTextRequest#FilterBBox
   */
  readonly filterBBox?: number[];

  /**
   * @schema LocationSearchPlaceIndexForTextRequest#FilterCountries
   */
  readonly filterCountries?: string[];

  /**
   * @schema LocationSearchPlaceIndexForTextRequest#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationSearchPlaceIndexForTextRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationSearchPlaceIndexForTextRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForTextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForTextRequest(obj: LocationSearchPlaceIndexForTextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BiasPosition': obj.biasPosition?.map(y => y),
    'FilterBBox': obj.filterBBox?.map(y => y),
    'FilterCountries': obj.filterCountries?.map(y => y),
    'IndexName': obj.indexName,
    'MaxResults': obj.maxResults,
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForTextResponse
 */
export interface LocationSearchPlaceIndexForTextResponse {
  /**
   * @schema LocationSearchPlaceIndexForTextResponse#Results
   */
  readonly results?: LocationSearchForTextResult[];

  /**
   * @schema LocationSearchPlaceIndexForTextResponse#Summary
   */
  readonly summary?: LocationSearchPlaceIndexForTextSummary;

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForTextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForTextResponse(obj: LocationSearchPlaceIndexForTextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_LocationSearchForTextResult(y)),
    'Summary': toJson_LocationSearchPlaceIndexForTextSummary(obj.summary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationTagResourceRequest
 */
export interface LocationTagResourceRequest {
  /**
   * @schema LocationTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LocationTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'LocationTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationTagResourceRequest(obj: LocationTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationTagResourceResponse
 */
export interface LocationTagResourceResponse {
}

/**
 * Converts an object of type 'LocationTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationTagResourceResponse(obj: LocationTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUntagResourceRequest
 */
export interface LocationUntagResourceRequest {
  /**
   * @schema LocationUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LocationUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LocationUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUntagResourceRequest(obj: LocationUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUntagResourceResponse
 */
export interface LocationUntagResourceResponse {
}

/**
 * Converts an object of type 'LocationUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUntagResourceResponse(obj: LocationUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateGeofenceCollectionRequest
 */
export interface LocationUpdateGeofenceCollectionRequest {
  /**
   * @schema LocationUpdateGeofenceCollectionRequest#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationUpdateGeofenceCollectionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationUpdateGeofenceCollectionRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationUpdateGeofenceCollectionRequest#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

}

/**
 * Converts an object of type 'LocationUpdateGeofenceCollectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateGeofenceCollectionRequest(obj: LocationUpdateGeofenceCollectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateGeofenceCollectionResponse
 */
export interface LocationUpdateGeofenceCollectionResponse {
  /**
   * @schema LocationUpdateGeofenceCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema LocationUpdateGeofenceCollectionResponse#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationUpdateGeofenceCollectionResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationUpdateGeofenceCollectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateGeofenceCollectionResponse(obj: LocationUpdateGeofenceCollectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionArn': obj.collectionArn,
    'CollectionName': obj.collectionName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateMapRequest
 */
export interface LocationUpdateMapRequest {
  /**
   * @schema LocationUpdateMapRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationUpdateMapRequest#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationUpdateMapRequest#PricingPlan
   */
  readonly pricingPlan?: string;

}

/**
 * Converts an object of type 'LocationUpdateMapRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateMapRequest(obj: LocationUpdateMapRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'MapName': obj.mapName,
    'PricingPlan': obj.pricingPlan,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateMapResponse
 */
export interface LocationUpdateMapResponse {
  /**
   * @schema LocationUpdateMapResponse#MapArn
   */
  readonly mapArn?: string;

  /**
   * @schema LocationUpdateMapResponse#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationUpdateMapResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationUpdateMapResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateMapResponse(obj: LocationUpdateMapResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MapArn': obj.mapArn,
    'MapName': obj.mapName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdatePlaceIndexRequest
 */
export interface LocationUpdatePlaceIndexRequest {
  /**
   * @schema LocationUpdatePlaceIndexRequest#DataSourceConfiguration
   */
  readonly dataSourceConfiguration?: LocationDataSourceConfiguration;

  /**
   * @schema LocationUpdatePlaceIndexRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationUpdatePlaceIndexRequest#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationUpdatePlaceIndexRequest#PricingPlan
   */
  readonly pricingPlan?: string;

}

/**
 * Converts an object of type 'LocationUpdatePlaceIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdatePlaceIndexRequest(obj: LocationUpdatePlaceIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceConfiguration': toJson_LocationDataSourceConfiguration(obj.dataSourceConfiguration),
    'Description': obj.description,
    'IndexName': obj.indexName,
    'PricingPlan': obj.pricingPlan,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdatePlaceIndexResponse
 */
export interface LocationUpdatePlaceIndexResponse {
  /**
   * @schema LocationUpdatePlaceIndexResponse#IndexArn
   */
  readonly indexArn?: string;

  /**
   * @schema LocationUpdatePlaceIndexResponse#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationUpdatePlaceIndexResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationUpdatePlaceIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdatePlaceIndexResponse(obj: LocationUpdatePlaceIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexArn': obj.indexArn,
    'IndexName': obj.indexName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateRouteCalculatorRequest
 */
export interface LocationUpdateRouteCalculatorRequest {
  /**
   * @schema LocationUpdateRouteCalculatorRequest#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationUpdateRouteCalculatorRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationUpdateRouteCalculatorRequest#PricingPlan
   */
  readonly pricingPlan?: string;

}

/**
 * Converts an object of type 'LocationUpdateRouteCalculatorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateRouteCalculatorRequest(obj: LocationUpdateRouteCalculatorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateRouteCalculatorResponse
 */
export interface LocationUpdateRouteCalculatorResponse {
  /**
   * @schema LocationUpdateRouteCalculatorResponse#CalculatorArn
   */
  readonly calculatorArn?: string;

  /**
   * @schema LocationUpdateRouteCalculatorResponse#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationUpdateRouteCalculatorResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationUpdateRouteCalculatorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateRouteCalculatorResponse(obj: LocationUpdateRouteCalculatorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorArn': obj.calculatorArn,
    'CalculatorName': obj.calculatorName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateTrackerRequest
 */
export interface LocationUpdateTrackerRequest {
  /**
   * @schema LocationUpdateTrackerRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LocationUpdateTrackerRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationUpdateTrackerRequest#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationUpdateTrackerRequest#TrackerName
   */
  readonly trackerName?: string;

}

/**
 * Converts an object of type 'LocationUpdateTrackerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateTrackerRequest(obj: LocationUpdateTrackerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'TrackerName': obj.trackerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationUpdateTrackerResponse
 */
export interface LocationUpdateTrackerResponse {
  /**
   * @schema LocationUpdateTrackerResponse#TrackerArn
   */
  readonly trackerArn?: string;

  /**
   * @schema LocationUpdateTrackerResponse#TrackerName
   */
  readonly trackerName?: string;

  /**
   * @schema LocationUpdateTrackerResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationUpdateTrackerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationUpdateTrackerResponse(obj: LocationUpdateTrackerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrackerArn': obj.trackerArn,
    'TrackerName': obj.trackerName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteDevicePositionHistoryError
 */
export interface LocationBatchDeleteDevicePositionHistoryError {
  /**
   * @schema LocationBatchDeleteDevicePositionHistoryError#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationBatchDeleteDevicePositionHistoryError#Error
   */
  readonly error?: LocationBatchItemError;

}

/**
 * Converts an object of type 'LocationBatchDeleteDevicePositionHistoryError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteDevicePositionHistoryError(obj: LocationBatchDeleteDevicePositionHistoryError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Error': toJson_LocationBatchItemError(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchDeleteGeofenceError
 */
export interface LocationBatchDeleteGeofenceError {
  /**
   * @schema LocationBatchDeleteGeofenceError#Error
   */
  readonly error?: LocationBatchItemError;

  /**
   * @schema LocationBatchDeleteGeofenceError#GeofenceId
   */
  readonly geofenceId?: string;

}

/**
 * Converts an object of type 'LocationBatchDeleteGeofenceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchDeleteGeofenceError(obj: LocationBatchDeleteGeofenceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Error': toJson_LocationBatchItemError(obj.error),
    'GeofenceId': obj.geofenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDevicePositionUpdate
 */
export interface LocationDevicePositionUpdate {
  /**
   * @schema LocationDevicePositionUpdate#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationDevicePositionUpdate#Position
   */
  readonly position?: number[];

  /**
   * @schema LocationDevicePositionUpdate#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationDevicePositionUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDevicePositionUpdate(obj: LocationDevicePositionUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Position': obj.position?.map(y => y),
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchEvaluateGeofencesError
 */
export interface LocationBatchEvaluateGeofencesError {
  /**
   * @schema LocationBatchEvaluateGeofencesError#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationBatchEvaluateGeofencesError#Error
   */
  readonly error?: LocationBatchItemError;

  /**
   * @schema LocationBatchEvaluateGeofencesError#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationBatchEvaluateGeofencesError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchEvaluateGeofencesError(obj: LocationBatchEvaluateGeofencesError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Error': toJson_LocationBatchItemError(obj.error),
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDevicePosition
 */
export interface LocationDevicePosition {
  /**
   * @schema LocationDevicePosition#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationDevicePosition#Position
   */
  readonly position?: number[];

  /**
   * @schema LocationDevicePosition#ReceivedTime
   */
  readonly receivedTime?: string;

  /**
   * @schema LocationDevicePosition#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationDevicePosition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDevicePosition(obj: LocationDevicePosition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Position': obj.position?.map(y => y),
    'ReceivedTime': obj.receivedTime,
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchGetDevicePositionError
 */
export interface LocationBatchGetDevicePositionError {
  /**
   * @schema LocationBatchGetDevicePositionError#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationBatchGetDevicePositionError#Error
   */
  readonly error?: LocationBatchItemError;

}

/**
 * Converts an object of type 'LocationBatchGetDevicePositionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchGetDevicePositionError(obj: LocationBatchGetDevicePositionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Error': toJson_LocationBatchItemError(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchPutGeofenceRequestEntry
 */
export interface LocationBatchPutGeofenceRequestEntry {
  /**
   * @schema LocationBatchPutGeofenceRequestEntry#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationBatchPutGeofenceRequestEntry#Geometry
   */
  readonly geometry?: LocationGeofenceGeometry;

}

/**
 * Converts an object of type 'LocationBatchPutGeofenceRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchPutGeofenceRequestEntry(obj: LocationBatchPutGeofenceRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeofenceId': obj.geofenceId,
    'Geometry': toJson_LocationGeofenceGeometry(obj.geometry),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchPutGeofenceError
 */
export interface LocationBatchPutGeofenceError {
  /**
   * @schema LocationBatchPutGeofenceError#Error
   */
  readonly error?: LocationBatchItemError;

  /**
   * @schema LocationBatchPutGeofenceError#GeofenceId
   */
  readonly geofenceId?: string;

}

/**
 * Converts an object of type 'LocationBatchPutGeofenceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchPutGeofenceError(obj: LocationBatchPutGeofenceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Error': toJson_LocationBatchItemError(obj.error),
    'GeofenceId': obj.geofenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchPutGeofenceSuccess
 */
export interface LocationBatchPutGeofenceSuccess {
  /**
   * @schema LocationBatchPutGeofenceSuccess#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationBatchPutGeofenceSuccess#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationBatchPutGeofenceSuccess#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationBatchPutGeofenceSuccess' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchPutGeofenceSuccess(obj: LocationBatchPutGeofenceSuccess | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'GeofenceId': obj.geofenceId,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchUpdateDevicePositionError
 */
export interface LocationBatchUpdateDevicePositionError {
  /**
   * @schema LocationBatchUpdateDevicePositionError#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationBatchUpdateDevicePositionError#Error
   */
  readonly error?: LocationBatchItemError;

  /**
   * @schema LocationBatchUpdateDevicePositionError#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationBatchUpdateDevicePositionError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchUpdateDevicePositionError(obj: LocationBatchUpdateDevicePositionError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Error': toJson_LocationBatchItemError(obj.error),
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCalculateRouteCarModeOptions
 */
export interface LocationCalculateRouteCarModeOptions {
  /**
   * @schema LocationCalculateRouteCarModeOptions#AvoidFerries
   */
  readonly avoidFerries?: boolean;

  /**
   * @schema LocationCalculateRouteCarModeOptions#AvoidTolls
   */
  readonly avoidTolls?: boolean;

}

/**
 * Converts an object of type 'LocationCalculateRouteCarModeOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCalculateRouteCarModeOptions(obj: LocationCalculateRouteCarModeOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvoidFerries': obj.avoidFerries,
    'AvoidTolls': obj.avoidTolls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCalculateRouteTruckModeOptions
 */
export interface LocationCalculateRouteTruckModeOptions {
  /**
   * @schema LocationCalculateRouteTruckModeOptions#AvoidFerries
   */
  readonly avoidFerries?: boolean;

  /**
   * @schema LocationCalculateRouteTruckModeOptions#AvoidTolls
   */
  readonly avoidTolls?: boolean;

  /**
   * @schema LocationCalculateRouteTruckModeOptions#Dimensions
   */
  readonly dimensions?: LocationTruckDimensions;

  /**
   * @schema LocationCalculateRouteTruckModeOptions#Weight
   */
  readonly weight?: LocationTruckWeight;

}

/**
 * Converts an object of type 'LocationCalculateRouteTruckModeOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCalculateRouteTruckModeOptions(obj: LocationCalculateRouteTruckModeOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvoidFerries': obj.avoidFerries,
    'AvoidTolls': obj.avoidTolls,
    'Dimensions': toJson_LocationTruckDimensions(obj.dimensions),
    'Weight': toJson_LocationTruckWeight(obj.weight),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationLeg
 */
export interface LocationLeg {
  /**
   * @schema LocationLeg#Distance
   */
  readonly distance?: number;

  /**
   * @schema LocationLeg#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema LocationLeg#EndPosition
   */
  readonly endPosition?: number[];

  /**
   * @schema LocationLeg#Geometry
   */
  readonly geometry?: LocationLegGeometry;

  /**
   * @schema LocationLeg#StartPosition
   */
  readonly startPosition?: number[];

  /**
   * @schema LocationLeg#Steps
   */
  readonly steps?: LocationStep[];

}

/**
 * Converts an object of type 'LocationLeg' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationLeg(obj: LocationLeg | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distance': obj.distance,
    'DurationSeconds': obj.durationSeconds,
    'EndPosition': obj.endPosition?.map(y => y),
    'Geometry': toJson_LocationLegGeometry(obj.geometry),
    'StartPosition': obj.startPosition?.map(y => y),
    'Steps': obj.steps?.map(y => toJson_LocationStep(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationCalculateRouteSummary
 */
export interface LocationCalculateRouteSummary {
  /**
   * @schema LocationCalculateRouteSummary#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationCalculateRouteSummary#Distance
   */
  readonly distance?: number;

  /**
   * @schema LocationCalculateRouteSummary#DistanceUnit
   */
  readonly distanceUnit?: string;

  /**
   * @schema LocationCalculateRouteSummary#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema LocationCalculateRouteSummary#RouteBBox
   */
  readonly routeBBox?: number[];

}

/**
 * Converts an object of type 'LocationCalculateRouteSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationCalculateRouteSummary(obj: LocationCalculateRouteSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSource': obj.dataSource,
    'Distance': obj.distance,
    'DistanceUnit': obj.distanceUnit,
    'DurationSeconds': obj.durationSeconds,
    'RouteBBox': obj.routeBBox?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationMapConfiguration
 */
export interface LocationMapConfiguration {
  /**
   * @schema LocationMapConfiguration#Style
   */
  readonly style?: string;

}

/**
 * Converts an object of type 'LocationMapConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationMapConfiguration(obj: LocationMapConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Style': obj.style,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationDataSourceConfiguration
 */
export interface LocationDataSourceConfiguration {
  /**
   * @schema LocationDataSourceConfiguration#IntendedUse
   */
  readonly intendedUse?: string;

}

/**
 * Converts an object of type 'LocationDataSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationDataSourceConfiguration(obj: LocationDataSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntendedUse': obj.intendedUse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationGeofenceGeometry
 */
export interface LocationGeofenceGeometry {
  /**
   * @schema LocationGeofenceGeometry#Polygon
   */
  readonly polygon?: number[][][];

}

/**
 * Converts an object of type 'LocationGeofenceGeometry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationGeofenceGeometry(obj: LocationGeofenceGeometry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Polygon': obj.polygon?.map(y => y?.map(y => y?.map(y => y))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListDevicePositionsResponseEntry
 */
export interface LocationListDevicePositionsResponseEntry {
  /**
   * @schema LocationListDevicePositionsResponseEntry#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema LocationListDevicePositionsResponseEntry#Position
   */
  readonly position?: number[];

  /**
   * @schema LocationListDevicePositionsResponseEntry#SampleTime
   */
  readonly sampleTime?: string;

}

/**
 * Converts an object of type 'LocationListDevicePositionsResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListDevicePositionsResponseEntry(obj: LocationListDevicePositionsResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'Position': obj.position?.map(y => y),
    'SampleTime': obj.sampleTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofenceCollectionsResponseEntry
 */
export interface LocationListGeofenceCollectionsResponseEntry {
  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#Description
   */
  readonly description?: string;

  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationListGeofenceCollectionsResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListGeofenceCollectionsResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofenceCollectionsResponseEntry(obj: LocationListGeofenceCollectionsResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CollectionName': obj.collectionName,
    'CreateTime': obj.createTime,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListGeofenceResponseEntry
 */
export interface LocationListGeofenceResponseEntry {
  /**
   * @schema LocationListGeofenceResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListGeofenceResponseEntry#GeofenceId
   */
  readonly geofenceId?: string;

  /**
   * @schema LocationListGeofenceResponseEntry#Geometry
   */
  readonly geometry?: LocationGeofenceGeometry;

  /**
   * @schema LocationListGeofenceResponseEntry#Status
   */
  readonly status?: string;

  /**
   * @schema LocationListGeofenceResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListGeofenceResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListGeofenceResponseEntry(obj: LocationListGeofenceResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'GeofenceId': obj.geofenceId,
    'Geometry': toJson_LocationGeofenceGeometry(obj.geometry),
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListMapsResponseEntry
 */
export interface LocationListMapsResponseEntry {
  /**
   * @schema LocationListMapsResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListMapsResponseEntry#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationListMapsResponseEntry#Description
   */
  readonly description?: string;

  /**
   * @schema LocationListMapsResponseEntry#MapName
   */
  readonly mapName?: string;

  /**
   * @schema LocationListMapsResponseEntry#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationListMapsResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListMapsResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListMapsResponseEntry(obj: LocationListMapsResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'MapName': obj.mapName,
    'PricingPlan': obj.pricingPlan,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListPlaceIndexesResponseEntry
 */
export interface LocationListPlaceIndexesResponseEntry {
  /**
   * @schema LocationListPlaceIndexesResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListPlaceIndexesResponseEntry#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationListPlaceIndexesResponseEntry#Description
   */
  readonly description?: string;

  /**
   * @schema LocationListPlaceIndexesResponseEntry#IndexName
   */
  readonly indexName?: string;

  /**
   * @schema LocationListPlaceIndexesResponseEntry#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationListPlaceIndexesResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListPlaceIndexesResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListPlaceIndexesResponseEntry(obj: LocationListPlaceIndexesResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'IndexName': obj.indexName,
    'PricingPlan': obj.pricingPlan,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListRouteCalculatorsResponseEntry
 */
export interface LocationListRouteCalculatorsResponseEntry {
  /**
   * @schema LocationListRouteCalculatorsResponseEntry#CalculatorName
   */
  readonly calculatorName?: string;

  /**
   * @schema LocationListRouteCalculatorsResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListRouteCalculatorsResponseEntry#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationListRouteCalculatorsResponseEntry#Description
   */
  readonly description?: string;

  /**
   * @schema LocationListRouteCalculatorsResponseEntry#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationListRouteCalculatorsResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListRouteCalculatorsResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListRouteCalculatorsResponseEntry(obj: LocationListRouteCalculatorsResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalculatorName': obj.calculatorName,
    'CreateTime': obj.createTime,
    'DataSource': obj.dataSource,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationListTrackersResponseEntry
 */
export interface LocationListTrackersResponseEntry {
  /**
   * @schema LocationListTrackersResponseEntry#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LocationListTrackersResponseEntry#Description
   */
  readonly description?: string;

  /**
   * @schema LocationListTrackersResponseEntry#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema LocationListTrackersResponseEntry#PricingPlanDataSource
   */
  readonly pricingPlanDataSource?: string;

  /**
   * @schema LocationListTrackersResponseEntry#TrackerName
   */
  readonly trackerName?: string;

  /**
   * @schema LocationListTrackersResponseEntry#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'LocationListTrackersResponseEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationListTrackersResponseEntry(obj: LocationListTrackersResponseEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'Description': obj.description,
    'PricingPlan': obj.pricingPlan,
    'PricingPlanDataSource': obj.pricingPlanDataSource,
    'TrackerName': obj.trackerName,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchForPositionResult
 */
export interface LocationSearchForPositionResult {
  /**
   * @schema LocationSearchForPositionResult#Place
   */
  readonly place?: LocationPlace;

}

/**
 * Converts an object of type 'LocationSearchForPositionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchForPositionResult(obj: LocationSearchForPositionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Place': toJson_LocationPlace(obj.place),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForPositionSummary
 */
export interface LocationSearchPlaceIndexForPositionSummary {
  /**
   * @schema LocationSearchPlaceIndexForPositionSummary#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationSearchPlaceIndexForPositionSummary#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationSearchPlaceIndexForPositionSummary#Position
   */
  readonly position?: number[];

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForPositionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForPositionSummary(obj: LocationSearchPlaceIndexForPositionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSource': obj.dataSource,
    'MaxResults': obj.maxResults,
    'Position': obj.position?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchForTextResult
 */
export interface LocationSearchForTextResult {
  /**
   * @schema LocationSearchForTextResult#Place
   */
  readonly place?: LocationPlace;

}

/**
 * Converts an object of type 'LocationSearchForTextResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchForTextResult(obj: LocationSearchForTextResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Place': toJson_LocationPlace(obj.place),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationSearchPlaceIndexForTextSummary
 */
export interface LocationSearchPlaceIndexForTextSummary {
  /**
   * @schema LocationSearchPlaceIndexForTextSummary#BiasPosition
   */
  readonly biasPosition?: number[];

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#DataSource
   */
  readonly dataSource?: string;

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#FilterBBox
   */
  readonly filterBBox?: number[];

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#FilterCountries
   */
  readonly filterCountries?: string[];

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#ResultBBox
   */
  readonly resultBBox?: number[];

  /**
   * @schema LocationSearchPlaceIndexForTextSummary#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'LocationSearchPlaceIndexForTextSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationSearchPlaceIndexForTextSummary(obj: LocationSearchPlaceIndexForTextSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BiasPosition': obj.biasPosition?.map(y => y),
    'DataSource': obj.dataSource,
    'FilterBBox': obj.filterBBox?.map(y => y),
    'FilterCountries': obj.filterCountries?.map(y => y),
    'MaxResults': obj.maxResults,
    'ResultBBox': obj.resultBBox?.map(y => y),
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationBatchItemError
 */
export interface LocationBatchItemError {
  /**
   * @schema LocationBatchItemError#Code
   */
  readonly code?: string;

  /**
   * @schema LocationBatchItemError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'LocationBatchItemError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationBatchItemError(obj: LocationBatchItemError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationTruckDimensions
 */
export interface LocationTruckDimensions {
  /**
   * @schema LocationTruckDimensions#Height
   */
  readonly height?: number;

  /**
   * @schema LocationTruckDimensions#Length
   */
  readonly length?: number;

  /**
   * @schema LocationTruckDimensions#Unit
   */
  readonly unit?: string;

  /**
   * @schema LocationTruckDimensions#Width
   */
  readonly width?: number;

}

/**
 * Converts an object of type 'LocationTruckDimensions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationTruckDimensions(obj: LocationTruckDimensions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Height': obj.height,
    'Length': obj.length,
    'Unit': obj.unit,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationTruckWeight
 */
export interface LocationTruckWeight {
  /**
   * @schema LocationTruckWeight#Total
   */
  readonly total?: number;

  /**
   * @schema LocationTruckWeight#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'LocationTruckWeight' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationTruckWeight(obj: LocationTruckWeight | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Total': obj.total,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationLegGeometry
 */
export interface LocationLegGeometry {
  /**
   * @schema LocationLegGeometry#LineString
   */
  readonly lineString?: number[][];

}

/**
 * Converts an object of type 'LocationLegGeometry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationLegGeometry(obj: LocationLegGeometry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LineString': obj.lineString?.map(y => y?.map(y => y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationStep
 */
export interface LocationStep {
  /**
   * @schema LocationStep#Distance
   */
  readonly distance?: number;

  /**
   * @schema LocationStep#DurationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema LocationStep#EndPosition
   */
  readonly endPosition?: number[];

  /**
   * @schema LocationStep#GeometryOffset
   */
  readonly geometryOffset?: number;

  /**
   * @schema LocationStep#StartPosition
   */
  readonly startPosition?: number[];

}

/**
 * Converts an object of type 'LocationStep' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationStep(obj: LocationStep | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Distance': obj.distance,
    'DurationSeconds': obj.durationSeconds,
    'EndPosition': obj.endPosition?.map(y => y),
    'GeometryOffset': obj.geometryOffset,
    'StartPosition': obj.startPosition?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationPlace
 */
export interface LocationPlace {
  /**
   * @schema LocationPlace#AddressNumber
   */
  readonly addressNumber?: string;

  /**
   * @schema LocationPlace#Country
   */
  readonly country?: string;

  /**
   * @schema LocationPlace#Geometry
   */
  readonly geometry?: LocationPlaceGeometry;

  /**
   * @schema LocationPlace#Label
   */
  readonly label?: string;

  /**
   * @schema LocationPlace#Municipality
   */
  readonly municipality?: string;

  /**
   * @schema LocationPlace#Neighborhood
   */
  readonly neighborhood?: string;

  /**
   * @schema LocationPlace#PostalCode
   */
  readonly postalCode?: string;

  /**
   * @schema LocationPlace#Region
   */
  readonly region?: string;

  /**
   * @schema LocationPlace#Street
   */
  readonly street?: string;

  /**
   * @schema LocationPlace#SubRegion
   */
  readonly subRegion?: string;

}

/**
 * Converts an object of type 'LocationPlace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationPlace(obj: LocationPlace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddressNumber': obj.addressNumber,
    'Country': obj.country,
    'Geometry': toJson_LocationPlaceGeometry(obj.geometry),
    'Label': obj.label,
    'Municipality': obj.municipality,
    'Neighborhood': obj.neighborhood,
    'PostalCode': obj.postalCode,
    'Region': obj.region,
    'Street': obj.street,
    'SubRegion': obj.subRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LocationPlaceGeometry
 */
export interface LocationPlaceGeometry {
  /**
   * @schema LocationPlaceGeometry#Point
   */
  readonly point?: number[];

}

/**
 * Converts an object of type 'LocationPlaceGeometry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LocationPlaceGeometry(obj: LocationPlaceGeometry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Point': obj.point?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
