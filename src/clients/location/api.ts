import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LocationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateTrackerConsumer(input: shapes.LocationAssociateTrackerConsumerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTrackerConsumer',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.AssociateTrackerConsumer'),
        parameters: {
          ConsumerArn: input.consumerArn,
          TrackerName: input.trackerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateTrackerConsumer', props);
  }

  public batchDeleteDevicePositionHistory(input: shapes.LocationBatchDeleteDevicePositionHistoryRequest): LocationResponsesBatchDeleteDevicePositionHistory {
    return new LocationResponsesBatchDeleteDevicePositionHistory(this, this.__resources, input);
  }

  public batchDeleteGeofence(input: shapes.LocationBatchDeleteGeofenceRequest): LocationResponsesBatchDeleteGeofence {
    return new LocationResponsesBatchDeleteGeofence(this, this.__resources, input);
  }

  public batchEvaluateGeofences(input: shapes.LocationBatchEvaluateGeofencesRequest): LocationResponsesBatchEvaluateGeofences {
    return new LocationResponsesBatchEvaluateGeofences(this, this.__resources, input);
  }

  public batchGetDevicePosition(input: shapes.LocationBatchGetDevicePositionRequest): LocationResponsesBatchGetDevicePosition {
    return new LocationResponsesBatchGetDevicePosition(this, this.__resources, input);
  }

  public batchPutGeofence(input: shapes.LocationBatchPutGeofenceRequest): LocationResponsesBatchPutGeofence {
    return new LocationResponsesBatchPutGeofence(this, this.__resources, input);
  }

  public batchUpdateDevicePosition(input: shapes.LocationBatchUpdateDevicePositionRequest): LocationResponsesBatchUpdateDevicePosition {
    return new LocationResponsesBatchUpdateDevicePosition(this, this.__resources, input);
  }

  public calculateRoute(input: shapes.LocationCalculateRouteRequest): LocationResponsesCalculateRoute {
    return new LocationResponsesCalculateRoute(this, this.__resources, input);
  }

  public createGeofenceCollection(input: shapes.LocationCreateGeofenceCollectionRequest): LocationResponsesCreateGeofenceCollection {
    return new LocationResponsesCreateGeofenceCollection(this, this.__resources, input);
  }

  public createMap(input: shapes.LocationCreateMapRequest): LocationResponsesCreateMap {
    return new LocationResponsesCreateMap(this, this.__resources, input);
  }

  public createPlaceIndex(input: shapes.LocationCreatePlaceIndexRequest): LocationResponsesCreatePlaceIndex {
    return new LocationResponsesCreatePlaceIndex(this, this.__resources, input);
  }

  public createRouteCalculator(input: shapes.LocationCreateRouteCalculatorRequest): LocationResponsesCreateRouteCalculator {
    return new LocationResponsesCreateRouteCalculator(this, this.__resources, input);
  }

  public createTracker(input: shapes.LocationCreateTrackerRequest): LocationResponsesCreateTracker {
    return new LocationResponsesCreateTracker(this, this.__resources, input);
  }

  public deleteGeofenceCollection(input: shapes.LocationDeleteGeofenceCollectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DeleteGeofenceCollection'),
        parameters: {
          CollectionName: input.collectionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGeofenceCollection', props);
  }

  public deleteMap(input: shapes.LocationDeleteMapRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DeleteMap'),
        parameters: {
          MapName: input.mapName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMap', props);
  }

  public deletePlaceIndex(input: shapes.LocationDeletePlaceIndexRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DeletePlaceIndex'),
        parameters: {
          IndexName: input.indexName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePlaceIndex', props);
  }

  public deleteRouteCalculator(input: shapes.LocationDeleteRouteCalculatorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DeleteRouteCalculator'),
        parameters: {
          CalculatorName: input.calculatorName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRouteCalculator', props);
  }

  public deleteTracker(input: shapes.LocationDeleteTrackerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DeleteTracker'),
        parameters: {
          TrackerName: input.trackerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTracker', props);
  }

  public describeGeofenceCollection(input: shapes.LocationDescribeGeofenceCollectionRequest): LocationResponsesDescribeGeofenceCollection {
    return new LocationResponsesDescribeGeofenceCollection(this, this.__resources, input);
  }

  public describeMap(input: shapes.LocationDescribeMapRequest): LocationResponsesDescribeMap {
    return new LocationResponsesDescribeMap(this, this.__resources, input);
  }

  public describePlaceIndex(input: shapes.LocationDescribePlaceIndexRequest): LocationResponsesDescribePlaceIndex {
    return new LocationResponsesDescribePlaceIndex(this, this.__resources, input);
  }

  public describeRouteCalculator(input: shapes.LocationDescribeRouteCalculatorRequest): LocationResponsesDescribeRouteCalculator {
    return new LocationResponsesDescribeRouteCalculator(this, this.__resources, input);
  }

  public describeTracker(input: shapes.LocationDescribeTrackerRequest): LocationResponsesDescribeTracker {
    return new LocationResponsesDescribeTracker(this, this.__resources, input);
  }

  public disassociateTrackerConsumer(input: shapes.LocationDisassociateTrackerConsumerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateTrackerConsumer',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DisassociateTrackerConsumer'),
        parameters: {
          ConsumerArn: input.consumerArn,
          TrackerName: input.trackerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateTrackerConsumer', props);
  }

  public fetchDevicePosition(input: shapes.LocationGetDevicePositionRequest): LocationResponsesFetchDevicePosition {
    return new LocationResponsesFetchDevicePosition(this, this.__resources, input);
  }

  public fetchDevicePositionHistory(input: shapes.LocationGetDevicePositionHistoryRequest): LocationResponsesFetchDevicePositionHistory {
    return new LocationResponsesFetchDevicePositionHistory(this, this.__resources, input);
  }

  public fetchGeofence(input: shapes.LocationGetGeofenceRequest): LocationResponsesFetchGeofence {
    return new LocationResponsesFetchGeofence(this, this.__resources, input);
  }

  public fetchMapGlyphs(input: shapes.LocationGetMapGlyphsRequest): LocationResponsesFetchMapGlyphs {
    return new LocationResponsesFetchMapGlyphs(this, this.__resources, input);
  }

  public fetchMapSprites(input: shapes.LocationGetMapSpritesRequest): LocationResponsesFetchMapSprites {
    return new LocationResponsesFetchMapSprites(this, this.__resources, input);
  }

  public fetchMapStyleDescriptor(input: shapes.LocationGetMapStyleDescriptorRequest): LocationResponsesFetchMapStyleDescriptor {
    return new LocationResponsesFetchMapStyleDescriptor(this, this.__resources, input);
  }

  public fetchMapTile(input: shapes.LocationGetMapTileRequest): LocationResponsesFetchMapTile {
    return new LocationResponsesFetchMapTile(this, this.__resources, input);
  }

  public listDevicePositions(input: shapes.LocationListDevicePositionsRequest): LocationResponsesListDevicePositions {
    return new LocationResponsesListDevicePositions(this, this.__resources, input);
  }

  public listGeofenceCollections(input: shapes.LocationListGeofenceCollectionsRequest): LocationResponsesListGeofenceCollections {
    return new LocationResponsesListGeofenceCollections(this, this.__resources, input);
  }

  public listGeofences(input: shapes.LocationListGeofencesRequest): LocationResponsesListGeofences {
    return new LocationResponsesListGeofences(this, this.__resources, input);
  }

  public listMaps(input: shapes.LocationListMapsRequest): LocationResponsesListMaps {
    return new LocationResponsesListMaps(this, this.__resources, input);
  }

  public listPlaceIndexes(input: shapes.LocationListPlaceIndexesRequest): LocationResponsesListPlaceIndexes {
    return new LocationResponsesListPlaceIndexes(this, this.__resources, input);
  }

  public listRouteCalculators(input: shapes.LocationListRouteCalculatorsRequest): LocationResponsesListRouteCalculators {
    return new LocationResponsesListRouteCalculators(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.LocationListTagsForResourceRequest): LocationResponsesListTagsForResource {
    return new LocationResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTrackerConsumers(input: shapes.LocationListTrackerConsumersRequest): LocationResponsesListTrackerConsumers {
    return new LocationResponsesListTrackerConsumers(this, this.__resources, input);
  }

  public listTrackers(input: shapes.LocationListTrackersRequest): LocationResponsesListTrackers {
    return new LocationResponsesListTrackers(this, this.__resources, input);
  }

  public putGeofence(input: shapes.LocationPutGeofenceRequest): LocationResponsesPutGeofence {
    return new LocationResponsesPutGeofence(this, this.__resources, input);
  }

  public searchPlaceIndexForPosition(input: shapes.LocationSearchPlaceIndexForPositionRequest): LocationResponsesSearchPlaceIndexForPosition {
    return new LocationResponsesSearchPlaceIndexForPosition(this, this.__resources, input);
  }

  public searchPlaceIndexForText(input: shapes.LocationSearchPlaceIndexForTextRequest): LocationResponsesSearchPlaceIndexForText {
    return new LocationResponsesSearchPlaceIndexForText(this, this.__resources, input);
  }

  public tagResource(input: shapes.LocationTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LocationUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateGeofenceCollection(input: shapes.LocationUpdateGeofenceCollectionRequest): LocationResponsesUpdateGeofenceCollection {
    return new LocationResponsesUpdateGeofenceCollection(this, this.__resources, input);
  }

  public updateMap(input: shapes.LocationUpdateMapRequest): LocationResponsesUpdateMap {
    return new LocationResponsesUpdateMap(this, this.__resources, input);
  }

  public updatePlaceIndex(input: shapes.LocationUpdatePlaceIndexRequest): LocationResponsesUpdatePlaceIndex {
    return new LocationResponsesUpdatePlaceIndex(this, this.__resources, input);
  }

  public updateRouteCalculator(input: shapes.LocationUpdateRouteCalculatorRequest): LocationResponsesUpdateRouteCalculator {
    return new LocationResponsesUpdateRouteCalculator(this, this.__resources, input);
  }

  public updateTracker(input: shapes.LocationUpdateTrackerRequest): LocationResponsesUpdateTracker {
    return new LocationResponsesUpdateTracker(this, this.__resources, input);
  }

}

export class LocationResponsesBatchDeleteDevicePositionHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchDeleteDevicePositionHistoryRequest) {
  }

  public get errors(): shapes.LocationBatchDeleteDevicePositionHistoryError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteDevicePositionHistory',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchDeleteDevicePositionHistory.Errors'),
        outputPath: 'Errors',
        parameters: {
          DeviceIds: this.__input.deviceIds,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteDevicePositionHistory.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchDeleteDevicePositionHistoryError[];
  }

}

export class LocationResponsesBatchDeleteGeofence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchDeleteGeofenceRequest) {
  }

  public get errors(): shapes.LocationBatchDeleteGeofenceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchDeleteGeofence.Errors'),
        outputPath: 'Errors',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceIds: this.__input.geofenceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteGeofence.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchDeleteGeofenceError[];
  }

}

export class LocationResponsesBatchEvaluateGeofences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchEvaluateGeofencesRequest) {
  }

  public get errors(): shapes.LocationBatchEvaluateGeofencesError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchEvaluateGeofences',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchEvaluateGeofences.Errors'),
        outputPath: 'Errors',
        parameters: {
          CollectionName: this.__input.collectionName,
          DevicePositionUpdates: this.__input.devicePositionUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchEvaluateGeofences.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchEvaluateGeofencesError[];
  }

}

export class LocationResponsesBatchGetDevicePosition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchGetDevicePositionRequest) {
  }

  public get devicePositions(): shapes.LocationDevicePosition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchGetDevicePosition.DevicePositions'),
        outputPath: 'DevicePositions',
        parameters: {
          DeviceIds: this.__input.deviceIds,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDevicePosition.DevicePositions', props);
    return resource.getResponseField('DevicePositions') as unknown as shapes.LocationDevicePosition[];
  }

  public get errors(): shapes.LocationBatchGetDevicePositionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchGetDevicePosition.Errors'),
        outputPath: 'Errors',
        parameters: {
          DeviceIds: this.__input.deviceIds,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDevicePosition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchGetDevicePositionError[];
  }

}

export class LocationResponsesBatchPutGeofence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchPutGeofenceRequest) {
  }

  public get errors(): shapes.LocationBatchPutGeofenceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchPutGeofence.Errors'),
        outputPath: 'Errors',
        parameters: {
          CollectionName: this.__input.collectionName,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutGeofence.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchPutGeofenceError[];
  }

  public get successes(): shapes.LocationBatchPutGeofenceSuccess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchPutGeofence.Successes'),
        outputPath: 'Successes',
        parameters: {
          CollectionName: this.__input.collectionName,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutGeofence.Successes', props);
    return resource.getResponseField('Successes') as unknown as shapes.LocationBatchPutGeofenceSuccess[];
  }

}

export class LocationResponsesBatchUpdateDevicePosition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationBatchUpdateDevicePositionRequest) {
  }

  public get errors(): shapes.LocationBatchUpdateDevicePositionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.BatchUpdateDevicePosition.Errors'),
        outputPath: 'Errors',
        parameters: {
          TrackerName: this.__input.trackerName,
          Updates: this.__input.updates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateDevicePosition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.LocationBatchUpdateDevicePositionError[];
  }

}

export class LocationResponsesCalculateRoute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCalculateRouteRequest) {
  }

  public get legs(): shapes.LocationLeg[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Legs'),
        outputPath: 'Legs',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Legs', props);
    return resource.getResponseField('Legs') as unknown as shapes.LocationLeg[];
  }

  public get summary(): LocationResponsesCalculateRouteSummary {
    return new LocationResponsesCalculateRouteSummary(this.__scope, this.__resources, this.__input);
  }

}

export class LocationResponsesCalculateRouteSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCalculateRouteRequest) {
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Summary.DataSource'),
        outputPath: 'Summary.DataSource',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Summary.DataSource', props);
    return resource.getResponseField('Summary.DataSource') as unknown as string;
  }

  public get distance(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Summary.Distance'),
        outputPath: 'Summary.Distance',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Summary.Distance', props);
    return resource.getResponseField('Summary.Distance') as unknown as number;
  }

  public get distanceUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Summary.DistanceUnit'),
        outputPath: 'Summary.DistanceUnit',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Summary.DistanceUnit', props);
    return resource.getResponseField('Summary.DistanceUnit') as unknown as string;
  }

  public get durationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Summary.DurationSeconds'),
        outputPath: 'Summary.DurationSeconds',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Summary.DurationSeconds', props);
    return resource.getResponseField('Summary.DurationSeconds') as unknown as number;
  }

  public get routeBBox(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'calculateRoute',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CalculateRoute.Summary.RouteBBox'),
        outputPath: 'Summary.RouteBBox',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          CarModeOptions: {
            AvoidFerries: this.__input.carModeOptions?.avoidFerries,
            AvoidTolls: this.__input.carModeOptions?.avoidTolls,
          },
          DepartNow: this.__input.departNow,
          DeparturePosition: this.__input.departurePosition,
          DepartureTime: this.__input.departureTime,
          DestinationPosition: this.__input.destinationPosition,
          DistanceUnit: this.__input.distanceUnit,
          IncludeLegGeometry: this.__input.includeLegGeometry,
          TravelMode: this.__input.travelMode,
          TruckModeOptions: {
            AvoidFerries: this.__input.truckModeOptions?.avoidFerries,
            AvoidTolls: this.__input.truckModeOptions?.avoidTolls,
            Dimensions: {
              Height: this.__input.truckModeOptions?.dimensions?.height,
              Length: this.__input.truckModeOptions?.dimensions?.length,
              Unit: this.__input.truckModeOptions?.dimensions?.unit,
              Width: this.__input.truckModeOptions?.dimensions?.width,
            },
            Weight: {
              Total: this.__input.truckModeOptions?.weight?.total,
              Unit: this.__input.truckModeOptions?.weight?.unit,
            },
          },
          WaypointPositions: this.__input.waypointPositions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CalculateRoute.Summary.RouteBBox', props);
    return resource.getResponseField('Summary.RouteBBox') as unknown as number[];
  }

}

export class LocationResponsesCreateGeofenceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCreateGeofenceCollectionRequest) {
  }

  public get collectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateGeofenceCollection.CollectionArn'),
        outputPath: 'CollectionArn',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeofenceCollection.CollectionArn', props);
    return resource.getResponseField('CollectionArn') as unknown as string;
  }

  public get collectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateGeofenceCollection.CollectionName'),
        outputPath: 'CollectionName',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeofenceCollection.CollectionName', props);
    return resource.getResponseField('CollectionName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateGeofenceCollection.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGeofenceCollection.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

}

export class LocationResponsesCreateMap {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCreateMapRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateMap.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          Configuration: {
            Style: this.__input.configuration.style,
          },
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMap.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get mapArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateMap.MapArn'),
        outputPath: 'MapArn',
        parameters: {
          Configuration: {
            Style: this.__input.configuration.style,
          },
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMap.MapArn', props);
    return resource.getResponseField('MapArn') as unknown as string;
  }

  public get mapName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateMap.MapName'),
        outputPath: 'MapName',
        parameters: {
          Configuration: {
            Style: this.__input.configuration.style,
          },
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMap.MapName', props);
    return resource.getResponseField('MapName') as unknown as string;
  }

}

export class LocationResponsesCreatePlaceIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCreatePlaceIndexRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreatePlaceIndex.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          DataSource: this.__input.dataSource,
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlaceIndex.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get indexArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreatePlaceIndex.IndexArn'),
        outputPath: 'IndexArn',
        parameters: {
          DataSource: this.__input.dataSource,
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlaceIndex.IndexArn', props);
    return resource.getResponseField('IndexArn') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreatePlaceIndex.IndexName'),
        outputPath: 'IndexName',
        parameters: {
          DataSource: this.__input.dataSource,
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePlaceIndex.IndexName', props);
    return resource.getResponseField('IndexName') as unknown as string;
  }

}

export class LocationResponsesCreateRouteCalculator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCreateRouteCalculatorRequest) {
  }

  public get calculatorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateRouteCalculator.CalculatorArn'),
        outputPath: 'CalculatorArn',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          DataSource: this.__input.dataSource,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteCalculator.CalculatorArn', props);
    return resource.getResponseField('CalculatorArn') as unknown as string;
  }

  public get calculatorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateRouteCalculator.CalculatorName'),
        outputPath: 'CalculatorName',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          DataSource: this.__input.dataSource,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteCalculator.CalculatorName', props);
    return resource.getResponseField('CalculatorName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateRouteCalculator.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          DataSource: this.__input.dataSource,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRouteCalculator.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

}

export class LocationResponsesCreateTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationCreateTrackerRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateTracker.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTracker.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get trackerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateTracker.TrackerArn'),
        outputPath: 'TrackerArn',
        parameters: {
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTracker.TrackerArn', props);
    return resource.getResponseField('TrackerArn') as unknown as string;
  }

  public get trackerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.CreateTracker.TrackerName'),
        outputPath: 'TrackerName',
        parameters: {
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          Tags: this.__input.tags,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTracker.TrackerName', props);
    return resource.getResponseField('TrackerName') as unknown as string;
  }

}

export class LocationResponsesDescribeGeofenceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribeGeofenceCollectionRequest) {
  }

  public get collectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.CollectionArn'),
        outputPath: 'CollectionArn',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.CollectionArn', props);
    return resource.getResponseField('CollectionArn') as unknown as string;
  }

  public get collectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.CollectionName'),
        outputPath: 'CollectionName',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.CollectionName', props);
    return resource.getResponseField('CollectionName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.Description'),
        outputPath: 'Description',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get pricingPlan(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.PricingPlan'),
        outputPath: 'PricingPlan',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.PricingPlan', props);
    return resource.getResponseField('PricingPlan') as unknown as string;
  }

  public get pricingPlanDataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.PricingPlanDataSource'),
        outputPath: 'PricingPlanDataSource',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.PricingPlanDataSource', props);
    return resource.getResponseField('PricingPlanDataSource') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.Tags'),
        outputPath: 'Tags',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeGeofenceCollection.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGeofenceCollection.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesDescribeMap {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribeMapRequest) {
  }

  public get configuration(): LocationResponsesDescribeMapConfiguration {
    return new LocationResponsesDescribeMapConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.DataSource'),
        outputPath: 'DataSource',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.DataSource', props);
    return resource.getResponseField('DataSource') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.Description'),
        outputPath: 'Description',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get mapArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.MapArn'),
        outputPath: 'MapArn',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.MapArn', props);
    return resource.getResponseField('MapArn') as unknown as string;
  }

  public get mapName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.MapName'),
        outputPath: 'MapName',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.MapName', props);
    return resource.getResponseField('MapName') as unknown as string;
  }

  public get pricingPlan(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.PricingPlan'),
        outputPath: 'PricingPlan',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.PricingPlan', props);
    return resource.getResponseField('PricingPlan') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.Tags'),
        outputPath: 'Tags',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesDescribeMapConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribeMapRequest) {
  }

  public get style(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeMap.Configuration.Style'),
        outputPath: 'Configuration.Style',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMap.Configuration.Style', props);
    return resource.getResponseField('Configuration.Style') as unknown as string;
  }

}

export class LocationResponsesDescribePlaceIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribePlaceIndexRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.DataSource'),
        outputPath: 'DataSource',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.DataSource', props);
    return resource.getResponseField('DataSource') as unknown as string;
  }

  public get dataSourceConfiguration(): LocationResponsesDescribePlaceIndexDataSourceConfiguration {
    return new LocationResponsesDescribePlaceIndexDataSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.Description'),
        outputPath: 'Description',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get indexArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.IndexArn'),
        outputPath: 'IndexArn',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.IndexArn', props);
    return resource.getResponseField('IndexArn') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.IndexName'),
        outputPath: 'IndexName',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.IndexName', props);
    return resource.getResponseField('IndexName') as unknown as string;
  }

  public get pricingPlan(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.PricingPlan'),
        outputPath: 'PricingPlan',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.PricingPlan', props);
    return resource.getResponseField('PricingPlan') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.Tags'),
        outputPath: 'Tags',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesDescribePlaceIndexDataSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribePlaceIndexRequest) {
  }

  public get intendedUse(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribePlaceIndex.DataSourceConfiguration.IntendedUse'),
        outputPath: 'DataSourceConfiguration.IntendedUse',
        parameters: {
          IndexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePlaceIndex.DataSourceConfiguration.IntendedUse', props);
    return resource.getResponseField('DataSourceConfiguration.IntendedUse') as unknown as string;
  }

}

export class LocationResponsesDescribeRouteCalculator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribeRouteCalculatorRequest) {
  }

  public get calculatorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.CalculatorArn'),
        outputPath: 'CalculatorArn',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.CalculatorArn', props);
    return resource.getResponseField('CalculatorArn') as unknown as string;
  }

  public get calculatorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.CalculatorName'),
        outputPath: 'CalculatorName',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.CalculatorName', props);
    return resource.getResponseField('CalculatorName') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.DataSource'),
        outputPath: 'DataSource',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.DataSource', props);
    return resource.getResponseField('DataSource') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.Description'),
        outputPath: 'Description',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get pricingPlan(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.PricingPlan'),
        outputPath: 'PricingPlan',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.PricingPlan', props);
    return resource.getResponseField('PricingPlan') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.Tags'),
        outputPath: 'Tags',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeRouteCalculator.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CalculatorName: this.__input.calculatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRouteCalculator.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesDescribeTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationDescribeTrackerRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.Description'),
        outputPath: 'Description',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get pricingPlan(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.PricingPlan'),
        outputPath: 'PricingPlan',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.PricingPlan', props);
    return resource.getResponseField('PricingPlan') as unknown as string;
  }

  public get pricingPlanDataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.PricingPlanDataSource'),
        outputPath: 'PricingPlanDataSource',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.PricingPlanDataSource', props);
    return resource.getResponseField('PricingPlanDataSource') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.Tags'),
        outputPath: 'Tags',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get trackerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.TrackerArn'),
        outputPath: 'TrackerArn',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.TrackerArn', props);
    return resource.getResponseField('TrackerArn') as unknown as string;
  }

  public get trackerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.TrackerName'),
        outputPath: 'TrackerName',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.TrackerName', props);
    return resource.getResponseField('TrackerName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.DescribeTracker.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTracker.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesFetchDevicePosition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetDevicePositionRequest) {
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePosition.DeviceId'),
        outputPath: 'DeviceId',
        parameters: {
          DeviceId: this.__input.deviceId,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePosition.DeviceId', props);
    return resource.getResponseField('DeviceId') as unknown as string;
  }

  public get position(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePosition.Position'),
        outputPath: 'Position',
        parameters: {
          DeviceId: this.__input.deviceId,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePosition.Position', props);
    return resource.getResponseField('Position') as unknown as number[];
  }

  public get receivedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePosition.ReceivedTime'),
        outputPath: 'ReceivedTime',
        parameters: {
          DeviceId: this.__input.deviceId,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePosition.ReceivedTime', props);
    return resource.getResponseField('ReceivedTime') as unknown as string;
  }

  public get sampleTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePosition.SampleTime'),
        outputPath: 'SampleTime',
        parameters: {
          DeviceId: this.__input.deviceId,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePosition.SampleTime', props);
    return resource.getResponseField('SampleTime') as unknown as string;
  }

}

export class LocationResponsesFetchDevicePositionHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetDevicePositionHistoryRequest) {
  }

  public get devicePositions(): shapes.LocationDevicePosition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePositionHistory',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePositionHistory.DevicePositions'),
        outputPath: 'DevicePositions',
        parameters: {
          DeviceId: this.__input.deviceId,
          EndTimeExclusive: this.__input.endTimeExclusive,
          NextToken: this.__input.nextToken,
          StartTimeInclusive: this.__input.startTimeInclusive,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePositionHistory.DevicePositions', props);
    return resource.getResponseField('DevicePositions') as unknown as shapes.LocationDevicePosition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePositionHistory',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetDevicePositionHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DeviceId: this.__input.deviceId,
          EndTimeExclusive: this.__input.endTimeExclusive,
          NextToken: this.__input.nextToken,
          StartTimeInclusive: this.__input.startTimeInclusive,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePositionHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesFetchGeofence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetGeofenceRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetGeofence.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeofence.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get geofenceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetGeofence.GeofenceId'),
        outputPath: 'GeofenceId',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeofence.GeofenceId', props);
    return resource.getResponseField('GeofenceId') as unknown as string;
  }

  public get geometry(): LocationResponsesFetchGeofenceGeometry {
    return new LocationResponsesFetchGeofenceGeometry(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetGeofence.Status'),
        outputPath: 'Status',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeofence.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetGeofence.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeofence.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesFetchGeofenceGeometry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetGeofenceRequest) {
  }

  public get polygon(): number[][][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetGeofence.Geometry.Polygon'),
        outputPath: 'Geometry.Polygon',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGeofence.Geometry.Polygon', props);
    return resource.getResponseField('Geometry.Polygon') as unknown as number[][][];
  }

}

export class LocationResponsesFetchMapGlyphs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetMapGlyphsRequest) {
  }

  public get blob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapGlyphs',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapGlyphs.Blob'),
        outputPath: 'Blob',
        parameters: {
          FontStack: this.__input.fontStack,
          FontUnicodeRange: this.__input.fontUnicodeRange,
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapGlyphs.Blob', props);
    return resource.getResponseField('Blob') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapGlyphs',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapGlyphs.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          FontStack: this.__input.fontStack,
          FontUnicodeRange: this.__input.fontUnicodeRange,
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapGlyphs.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class LocationResponsesFetchMapSprites {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetMapSpritesRequest) {
  }

  public get blob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapSprites',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapSprites.Blob'),
        outputPath: 'Blob',
        parameters: {
          FileName: this.__input.fileName,
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapSprites.Blob', props);
    return resource.getResponseField('Blob') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapSprites',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapSprites.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          FileName: this.__input.fileName,
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapSprites.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class LocationResponsesFetchMapStyleDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetMapStyleDescriptorRequest) {
  }

  public get blob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapStyleDescriptor',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapStyleDescriptor.Blob'),
        outputPath: 'Blob',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapStyleDescriptor.Blob', props);
    return resource.getResponseField('Blob') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapStyleDescriptor',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapStyleDescriptor.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          MapName: this.__input.mapName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapStyleDescriptor.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class LocationResponsesFetchMapTile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationGetMapTileRequest) {
  }

  public get blob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapTile',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapTile.Blob'),
        outputPath: 'Blob',
        parameters: {
          MapName: this.__input.mapName,
          X: this.__input.x,
          Y: this.__input.y,
          Z: this.__input.z,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapTile.Blob', props);
    return resource.getResponseField('Blob') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapTile',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.GetMapTile.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          MapName: this.__input.mapName,
          X: this.__input.x,
          Y: this.__input.y,
          Z: this.__input.z,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapTile.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class LocationResponsesListDevicePositions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListDevicePositionsRequest) {
  }

  public get entries(): shapes.LocationListDevicePositionsResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevicePositions',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListDevicePositions.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevicePositions.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListDevicePositionsResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevicePositions',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListDevicePositions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevicePositions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListGeofenceCollections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListGeofenceCollectionsRequest) {
  }

  public get entries(): shapes.LocationListGeofenceCollectionsResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeofenceCollections',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListGeofenceCollections.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeofenceCollections.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListGeofenceCollectionsResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeofenceCollections',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListGeofenceCollections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeofenceCollections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListGeofences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListGeofencesRequest) {
  }

  public get entries(): shapes.LocationListGeofenceResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeofences',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListGeofences.Entries'),
        outputPath: 'Entries',
        parameters: {
          CollectionName: this.__input.collectionName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeofences.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListGeofenceResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGeofences',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListGeofences.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CollectionName: this.__input.collectionName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGeofences.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListMaps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListMapsRequest) {
  }

  public get entries(): shapes.LocationListMapsResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMaps',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListMaps.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMaps.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListMapsResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMaps',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListMaps.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMaps.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListPlaceIndexes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListPlaceIndexesRequest) {
  }

  public get entries(): shapes.LocationListPlaceIndexesResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaceIndexes',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListPlaceIndexes.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaceIndexes.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListPlaceIndexesResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlaceIndexes',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListPlaceIndexes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPlaceIndexes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListRouteCalculators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListRouteCalculatorsRequest) {
  }

  public get entries(): shapes.LocationListRouteCalculatorsResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRouteCalculators',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListRouteCalculators.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRouteCalculators.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListRouteCalculatorsResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRouteCalculators',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListRouteCalculators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRouteCalculators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class LocationResponsesListTrackerConsumers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListTrackerConsumersRequest) {
  }

  public get consumerArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrackerConsumers',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListTrackerConsumers.ConsumerArns'),
        outputPath: 'ConsumerArns',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrackerConsumers.ConsumerArns', props);
    return resource.getResponseField('ConsumerArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrackerConsumers',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListTrackerConsumers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrackerConsumers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesListTrackers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationListTrackersRequest) {
  }

  public get entries(): shapes.LocationListTrackersResponseEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrackers',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListTrackers.Entries'),
        outputPath: 'Entries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrackers.Entries', props);
    return resource.getResponseField('Entries') as unknown as shapes.LocationListTrackersResponseEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrackers',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.ListTrackers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrackers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LocationResponsesPutGeofence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationPutGeofenceRequest) {
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.PutGeofence.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
          Geometry: {
            Polygon: this.__input.geometry.polygon,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGeofence.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get geofenceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.PutGeofence.GeofenceId'),
        outputPath: 'GeofenceId',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
          Geometry: {
            Polygon: this.__input.geometry.polygon,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGeofence.GeofenceId', props);
    return resource.getResponseField('GeofenceId') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGeofence',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.PutGeofence.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          GeofenceId: this.__input.geofenceId,
          Geometry: {
            Polygon: this.__input.geometry.polygon,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutGeofence.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesSearchPlaceIndexForPosition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationSearchPlaceIndexForPositionRequest) {
  }

  public get results(): shapes.LocationSearchForPositionResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForPosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForPosition.Results'),
        outputPath: 'Results',
        parameters: {
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Position: this.__input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForPosition.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.LocationSearchForPositionResult[];
  }

  public get summary(): LocationResponsesSearchPlaceIndexForPositionSummary {
    return new LocationResponsesSearchPlaceIndexForPositionSummary(this.__scope, this.__resources, this.__input);
  }

}

export class LocationResponsesSearchPlaceIndexForPositionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationSearchPlaceIndexForPositionRequest) {
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForPosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForPosition.Summary.DataSource'),
        outputPath: 'Summary.DataSource',
        parameters: {
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Position: this.__input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForPosition.Summary.DataSource', props);
    return resource.getResponseField('Summary.DataSource') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForPosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForPosition.Summary.MaxResults'),
        outputPath: 'Summary.MaxResults',
        parameters: {
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Position: this.__input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForPosition.Summary.MaxResults', props);
    return resource.getResponseField('Summary.MaxResults') as unknown as number;
  }

  public get position(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForPosition',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForPosition.Summary.Position'),
        outputPath: 'Summary.Position',
        parameters: {
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Position: this.__input.position,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForPosition.Summary.Position', props);
    return resource.getResponseField('Summary.Position') as unknown as number[];
  }

}

export class LocationResponsesSearchPlaceIndexForText {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationSearchPlaceIndexForTextRequest) {
  }

  public get results(): shapes.LocationSearchForTextResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Results'),
        outputPath: 'Results',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.LocationSearchForTextResult[];
  }

  public get summary(): LocationResponsesSearchPlaceIndexForTextSummary {
    return new LocationResponsesSearchPlaceIndexForTextSummary(this.__scope, this.__resources, this.__input);
  }

}

export class LocationResponsesSearchPlaceIndexForTextSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationSearchPlaceIndexForTextRequest) {
  }

  public get biasPosition(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.BiasPosition'),
        outputPath: 'Summary.BiasPosition',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.BiasPosition', props);
    return resource.getResponseField('Summary.BiasPosition') as unknown as number[];
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.DataSource'),
        outputPath: 'Summary.DataSource',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.DataSource', props);
    return resource.getResponseField('Summary.DataSource') as unknown as string;
  }

  public get filterBBox(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.FilterBBox'),
        outputPath: 'Summary.FilterBBox',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.FilterBBox', props);
    return resource.getResponseField('Summary.FilterBBox') as unknown as number[];
  }

  public get filterCountries(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.FilterCountries'),
        outputPath: 'Summary.FilterCountries',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.FilterCountries', props);
    return resource.getResponseField('Summary.FilterCountries') as unknown as string[];
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.MaxResults'),
        outputPath: 'Summary.MaxResults',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.MaxResults', props);
    return resource.getResponseField('Summary.MaxResults') as unknown as number;
  }

  public get resultBBox(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.ResultBBox'),
        outputPath: 'Summary.ResultBBox',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.ResultBBox', props);
    return resource.getResponseField('Summary.ResultBBox') as unknown as number[];
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchPlaceIndexForText',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.SearchPlaceIndexForText.Summary.Text'),
        outputPath: 'Summary.Text',
        parameters: {
          BiasPosition: this.__input.biasPosition,
          FilterBBox: this.__input.filterBBox,
          FilterCountries: this.__input.filterCountries,
          IndexName: this.__input.indexName,
          MaxResults: this.__input.maxResults,
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchPlaceIndexForText.Summary.Text', props);
    return resource.getResponseField('Summary.Text') as unknown as string;
  }

}

export class LocationResponsesUpdateGeofenceCollection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationUpdateGeofenceCollectionRequest) {
  }

  public get collectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateGeofenceCollection.CollectionArn'),
        outputPath: 'CollectionArn',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGeofenceCollection.CollectionArn', props);
    return resource.getResponseField('CollectionArn') as unknown as string;
  }

  public get collectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateGeofenceCollection.CollectionName'),
        outputPath: 'CollectionName',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGeofenceCollection.CollectionName', props);
    return resource.getResponseField('CollectionName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGeofenceCollection',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateGeofenceCollection.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CollectionName: this.__input.collectionName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGeofenceCollection.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesUpdateMap {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationUpdateMapRequest) {
  }

  public get mapArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateMap.MapArn'),
        outputPath: 'MapArn',
        parameters: {
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMap.MapArn', props);
    return resource.getResponseField('MapArn') as unknown as string;
  }

  public get mapName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateMap.MapName'),
        outputPath: 'MapName',
        parameters: {
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMap.MapName', props);
    return resource.getResponseField('MapName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMap',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateMap.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          Description: this.__input.description,
          MapName: this.__input.mapName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMap.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesUpdatePlaceIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationUpdatePlaceIndexRequest) {
  }

  public get indexArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdatePlaceIndex.IndexArn'),
        outputPath: 'IndexArn',
        parameters: {
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePlaceIndex.IndexArn', props);
    return resource.getResponseField('IndexArn') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdatePlaceIndex.IndexName'),
        outputPath: 'IndexName',
        parameters: {
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePlaceIndex.IndexName', props);
    return resource.getResponseField('IndexName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePlaceIndex',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdatePlaceIndex.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          DataSourceConfiguration: {
            IntendedUse: this.__input.dataSourceConfiguration?.intendedUse,
          },
          Description: this.__input.description,
          IndexName: this.__input.indexName,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePlaceIndex.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesUpdateRouteCalculator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationUpdateRouteCalculatorRequest) {
  }

  public get calculatorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateRouteCalculator.CalculatorArn'),
        outputPath: 'CalculatorArn',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteCalculator.CalculatorArn', props);
    return resource.getResponseField('CalculatorArn') as unknown as string;
  }

  public get calculatorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateRouteCalculator.CalculatorName'),
        outputPath: 'CalculatorName',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteCalculator.CalculatorName', props);
    return resource.getResponseField('CalculatorName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRouteCalculator',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateRouteCalculator.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          CalculatorName: this.__input.calculatorName,
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRouteCalculator.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class LocationResponsesUpdateTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LocationUpdateTrackerRequest) {
  }

  public get trackerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateTracker.TrackerArn'),
        outputPath: 'TrackerArn',
        parameters: {
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTracker.TrackerArn', props);
    return resource.getResponseField('TrackerArn') as unknown as string;
  }

  public get trackerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateTracker.TrackerName'),
        outputPath: 'TrackerName',
        parameters: {
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTracker.TrackerName', props);
    return resource.getResponseField('TrackerName') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTracker',
        service: 'Location',
        physicalResourceId: cr.PhysicalResourceId.of('Location.UpdateTracker.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          Description: this.__input.description,
          PricingPlan: this.__input.pricingPlan,
          PricingPlanDataSource: this.__input.pricingPlanDataSource,
          TrackerName: this.__input.trackerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTracker.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

