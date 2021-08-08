/**
 * @schema IoTAnalyticsBatchPutMessageRequest
 */
export interface IoTAnalyticsBatchPutMessageRequest {
  /**
   * @schema IoTAnalyticsBatchPutMessageRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageRequest#messages
   */
  readonly messages: IoTAnalyticsMessage[];

}

/**
 * Converts an object of type 'IoTAnalyticsBatchPutMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsBatchPutMessageRequest(obj: IoTAnalyticsBatchPutMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'messages': obj.messages?.map(y => toJson_IoTAnalyticsMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsBatchPutMessageResponse
 */
export interface IoTAnalyticsBatchPutMessageResponse {
  /**
   * @schema IoTAnalyticsBatchPutMessageResponse#batchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: IoTAnalyticsBatchPutMessageErrorEntry[];

}

/**
 * Converts an object of type 'IoTAnalyticsBatchPutMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsBatchPutMessageResponse(obj: IoTAnalyticsBatchPutMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchPutMessageErrorEntries': obj.batchPutMessageErrorEntries?.map(y => toJson_IoTAnalyticsBatchPutMessageErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCancelPipelineReprocessingRequest
 */
export interface IoTAnalyticsCancelPipelineReprocessingRequest {
  /**
   * @schema IoTAnalyticsCancelPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsCancelPipelineReprocessingRequest#reprocessingId
   */
  readonly reprocessingId: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCancelPipelineReprocessingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCancelPipelineReprocessingRequest(obj: IoTAnalyticsCancelPipelineReprocessingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'reprocessingId': obj.reprocessingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCancelPipelineReprocessingResponse
 */
export interface IoTAnalyticsCancelPipelineReprocessingResponse {
}

/**
 * Converts an object of type 'IoTAnalyticsCancelPipelineReprocessingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCancelPipelineReprocessingResponse(obj: IoTAnalyticsCancelPipelineReprocessingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateChannelRequest
 */
export interface IoTAnalyticsCreateChannelRequest {
  /**
   * @schema IoTAnalyticsCreateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateChannelRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * Converts an object of type 'IoTAnalyticsCreateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateChannelRequest(obj: IoTAnalyticsCreateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'channelStorage': toJson_IoTAnalyticsChannelStorage(obj.channelStorage),
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateChannelResponse
 */
export interface IoTAnalyticsCreateChannelResponse {
  /**
   * @schema IoTAnalyticsCreateChannelResponse#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IoTAnalyticsCreateChannelResponse#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IoTAnalyticsCreateChannelResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateChannelResponse(obj: IoTAnalyticsCreateChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'channelArn': obj.channelArn,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatasetRequest
 */
export interface IoTAnalyticsCreateDatasetRequest {
  /**
   * @schema IoTAnalyticsCreateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#actions
   */
  readonly actions: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

  /**
   * @schema IoTAnalyticsCreateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatasetRequest(obj: IoTAnalyticsCreateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'actions': obj.actions?.map(y => toJson_IoTAnalyticsDatasetAction(y)),
    'triggers': obj.triggers?.map(y => toJson_IoTAnalyticsDatasetTrigger(y)),
    'contentDeliveryRules': obj.contentDeliveryRules?.map(y => toJson_IoTAnalyticsDatasetContentDeliveryRule(y)),
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'versioningConfiguration': toJson_IoTAnalyticsVersioningConfiguration(obj.versioningConfiguration),
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
    'lateDataRules': obj.lateDataRules?.map(y => toJson_IoTAnalyticsLateDataRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatasetResponse
 */
export interface IoTAnalyticsCreateDatasetResponse {
  /**
   * @schema IoTAnalyticsCreateDatasetResponse#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema IoTAnalyticsCreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema IoTAnalyticsCreateDatasetResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatasetResponse(obj: IoTAnalyticsCreateDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'datasetArn': obj.datasetArn,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatasetContentRequest
 */
export interface IoTAnalyticsCreateDatasetContentRequest {
  /**
   * @schema IoTAnalyticsCreateDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsCreateDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatasetContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatasetContentRequest(obj: IoTAnalyticsCreateDatasetContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatasetContentResponse
 */
export interface IoTAnalyticsCreateDatasetContentResponse {
  /**
   * @schema IoTAnalyticsCreateDatasetContentResponse#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatasetContentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatasetContentResponse(obj: IoTAnalyticsCreateDatasetContentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatastoreRequest
 */
export interface IoTAnalyticsCreateDatastoreRequest {
  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorage;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#fileFormatConfiguration
   */
  readonly fileFormatConfiguration?: IoTAnalyticsFileFormatConfiguration;

  /**
   * @schema IoTAnalyticsCreateDatastoreRequest#datastorePartitions
   */
  readonly datastorePartitions?: IoTAnalyticsDatastorePartitions;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatastoreRequest(obj: IoTAnalyticsCreateDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
    'datastoreStorage': toJson_IoTAnalyticsDatastoreStorage(obj.datastoreStorage),
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
    'fileFormatConfiguration': toJson_IoTAnalyticsFileFormatConfiguration(obj.fileFormatConfiguration),
    'datastorePartitions': toJson_IoTAnalyticsDatastorePartitions(obj.datastorePartitions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreateDatastoreResponse
 */
export interface IoTAnalyticsCreateDatastoreResponse {
  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#datastoreArn
   */
  readonly datastoreArn?: string;

  /**
   * @schema IoTAnalyticsCreateDatastoreResponse#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * Converts an object of type 'IoTAnalyticsCreateDatastoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreateDatastoreResponse(obj: IoTAnalyticsCreateDatastoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
    'datastoreArn': obj.datastoreArn,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreatePipelineRequest
 */
export interface IoTAnalyticsCreatePipelineRequest {
  /**
   * @schema IoTAnalyticsCreatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsCreatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: IoTAnalyticsPipelineActivity[];

  /**
   * @schema IoTAnalyticsCreatePipelineRequest#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * Converts an object of type 'IoTAnalyticsCreatePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreatePipelineRequest(obj: IoTAnalyticsCreatePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineActivities': obj.pipelineActivities?.map(y => toJson_IoTAnalyticsPipelineActivity(y)),
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCreatePipelineResponse
 */
export interface IoTAnalyticsCreatePipelineResponse {
  /**
   * @schema IoTAnalyticsCreatePipelineResponse#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema IoTAnalyticsCreatePipelineResponse#pipelineArn
   */
  readonly pipelineArn?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCreatePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCreatePipelineResponse(obj: IoTAnalyticsCreatePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineArn': obj.pipelineArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeleteChannelRequest
 */
export interface IoTAnalyticsDeleteChannelRequest {
  /**
   * @schema IoTAnalyticsDeleteChannelRequest#channelName
   */
  readonly channelName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeleteChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeleteChannelRequest(obj: IoTAnalyticsDeleteChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeleteDatasetRequest
 */
export interface IoTAnalyticsDeleteDatasetRequest {
  /**
   * @schema IoTAnalyticsDeleteDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeleteDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeleteDatasetRequest(obj: IoTAnalyticsDeleteDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeleteDatasetContentRequest
 */
export interface IoTAnalyticsDeleteDatasetContentRequest {
  /**
   * @schema IoTAnalyticsDeleteDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsDeleteDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeleteDatasetContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeleteDatasetContentRequest(obj: IoTAnalyticsDeleteDatasetContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeleteDatastoreRequest
 */
export interface IoTAnalyticsDeleteDatastoreRequest {
  /**
   * @schema IoTAnalyticsDeleteDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeleteDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeleteDatastoreRequest(obj: IoTAnalyticsDeleteDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeletePipelineRequest
 */
export interface IoTAnalyticsDeletePipelineRequest {
  /**
   * @schema IoTAnalyticsDeletePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeletePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeletePipelineRequest(obj: IoTAnalyticsDeletePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeChannelRequest
 */
export interface IoTAnalyticsDescribeChannelRequest {
  /**
   * @schema IoTAnalyticsDescribeChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsDescribeChannelRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeChannelRequest(obj: IoTAnalyticsDescribeChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'includeStatistics': obj.includeStatistics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeChannelResponse
 */
export interface IoTAnalyticsDescribeChannelResponse {
  /**
   * @schema IoTAnalyticsDescribeChannelResponse#channel
   */
  readonly channel?: IoTAnalyticsChannel;

  /**
   * @schema IoTAnalyticsDescribeChannelResponse#statistics
   */
  readonly statistics?: IoTAnalyticsChannelStatistics;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeChannelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeChannelResponse(obj: IoTAnalyticsDescribeChannelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channel': toJson_IoTAnalyticsChannel(obj.channel),
    'statistics': toJson_IoTAnalyticsChannelStatistics(obj.statistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeDatasetRequest
 */
export interface IoTAnalyticsDescribeDatasetRequest {
  /**
   * @schema IoTAnalyticsDescribeDatasetRequest#datasetName
   */
  readonly datasetName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeDatasetRequest(obj: IoTAnalyticsDescribeDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeDatasetResponse
 */
export interface IoTAnalyticsDescribeDatasetResponse {
  /**
   * @schema IoTAnalyticsDescribeDatasetResponse#dataset
   */
  readonly dataset?: IoTAnalyticsDataset;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeDatasetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeDatasetResponse(obj: IoTAnalyticsDescribeDatasetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataset': toJson_IoTAnalyticsDataset(obj.dataset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeDatastoreRequest
 */
export interface IoTAnalyticsDescribeDatastoreRequest {
  /**
   * @schema IoTAnalyticsDescribeDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsDescribeDatastoreRequest#includeStatistics
   */
  readonly includeStatistics?: boolean;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeDatastoreRequest(obj: IoTAnalyticsDescribeDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
    'includeStatistics': obj.includeStatistics,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeDatastoreResponse
 */
export interface IoTAnalyticsDescribeDatastoreResponse {
  /**
   * @schema IoTAnalyticsDescribeDatastoreResponse#datastore
   */
  readonly datastore?: IoTAnalyticsDatastore;

  /**
   * @schema IoTAnalyticsDescribeDatastoreResponse#statistics
   */
  readonly statistics?: IoTAnalyticsDatastoreStatistics;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeDatastoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeDatastoreResponse(obj: IoTAnalyticsDescribeDatastoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastore': toJson_IoTAnalyticsDatastore(obj.datastore),
    'statistics': toJson_IoTAnalyticsDatastoreStatistics(obj.statistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeLoggingOptionsRequest
 */
export interface IoTAnalyticsDescribeLoggingOptionsRequest {
}

/**
 * Converts an object of type 'IoTAnalyticsDescribeLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeLoggingOptionsRequest(obj: IoTAnalyticsDescribeLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribeLoggingOptionsResponse
 */
export interface IoTAnalyticsDescribeLoggingOptionsResponse {
  /**
   * @schema IoTAnalyticsDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: IoTAnalyticsLoggingOptions;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribeLoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribeLoggingOptionsResponse(obj: IoTAnalyticsDescribeLoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTAnalyticsLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribePipelineRequest
 */
export interface IoTAnalyticsDescribePipelineRequest {
  /**
   * @schema IoTAnalyticsDescribePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribePipelineRequest(obj: IoTAnalyticsDescribePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDescribePipelineResponse
 */
export interface IoTAnalyticsDescribePipelineResponse {
  /**
   * @schema IoTAnalyticsDescribePipelineResponse#pipeline
   */
  readonly pipeline?: IoTAnalyticsPipeline;

}

/**
 * Converts an object of type 'IoTAnalyticsDescribePipelineResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDescribePipelineResponse(obj: IoTAnalyticsDescribePipelineResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_IoTAnalyticsPipeline(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsGetDatasetContentRequest
 */
export interface IoTAnalyticsGetDatasetContentRequest {
  /**
   * @schema IoTAnalyticsGetDatasetContentRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsGetDatasetContentRequest#versionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsGetDatasetContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsGetDatasetContentRequest(obj: IoTAnalyticsGetDatasetContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsGetDatasetContentResponse
 */
export interface IoTAnalyticsGetDatasetContentResponse {
  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#entries
   */
  readonly entries?: IoTAnalyticsDatasetEntry[];

  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema IoTAnalyticsGetDatasetContentResponse#status
   */
  readonly status?: IoTAnalyticsDatasetContentStatus;

}

/**
 * Converts an object of type 'IoTAnalyticsGetDatasetContentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsGetDatasetContentResponse(obj: IoTAnalyticsGetDatasetContentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entries': obj.entries?.map(y => toJson_IoTAnalyticsDatasetEntry(y)),
    'timestamp': obj.timestamp,
    'status': toJson_IoTAnalyticsDatasetContentStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListChannelsRequest
 */
export interface IoTAnalyticsListChannelsRequest {
  /**
   * @schema IoTAnalyticsListChannelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListChannelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsListChannelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListChannelsRequest(obj: IoTAnalyticsListChannelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListChannelsResponse
 */
export interface IoTAnalyticsListChannelsResponse {
  /**
   * @schema IoTAnalyticsListChannelsResponse#channelSummaries
   */
  readonly channelSummaries?: IoTAnalyticsChannelSummary[];

  /**
   * @schema IoTAnalyticsListChannelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListChannelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListChannelsResponse(obj: IoTAnalyticsListChannelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelSummaries': obj.channelSummaries?.map(y => toJson_IoTAnalyticsChannelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatasetContentsRequest
 */
export interface IoTAnalyticsListDatasetContentsRequest {
  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#scheduledOnOrAfter
   */
  readonly scheduledOnOrAfter?: string;

  /**
   * @schema IoTAnalyticsListDatasetContentsRequest#scheduledBefore
   */
  readonly scheduledBefore?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatasetContentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatasetContentsRequest(obj: IoTAnalyticsListDatasetContentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'scheduledOnOrAfter': obj.scheduledOnOrAfter,
    'scheduledBefore': obj.scheduledBefore,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatasetContentsResponse
 */
export interface IoTAnalyticsListDatasetContentsResponse {
  /**
   * @schema IoTAnalyticsListDatasetContentsResponse#datasetContentSummaries
   */
  readonly datasetContentSummaries?: IoTAnalyticsDatasetContentSummary[];

  /**
   * @schema IoTAnalyticsListDatasetContentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatasetContentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatasetContentsResponse(obj: IoTAnalyticsListDatasetContentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetContentSummaries': obj.datasetContentSummaries?.map(y => toJson_IoTAnalyticsDatasetContentSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatasetsRequest
 */
export interface IoTAnalyticsListDatasetsRequest {
  /**
   * @schema IoTAnalyticsListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatasetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatasetsRequest(obj: IoTAnalyticsListDatasetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatasetsResponse
 */
export interface IoTAnalyticsListDatasetsResponse {
  /**
   * @schema IoTAnalyticsListDatasetsResponse#datasetSummaries
   */
  readonly datasetSummaries?: IoTAnalyticsDatasetSummary[];

  /**
   * @schema IoTAnalyticsListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatasetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatasetsResponse(obj: IoTAnalyticsListDatasetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetSummaries': obj.datasetSummaries?.map(y => toJson_IoTAnalyticsDatasetSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatastoresRequest
 */
export interface IoTAnalyticsListDatastoresRequest {
  /**
   * @schema IoTAnalyticsListDatastoresRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListDatastoresRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatastoresRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatastoresRequest(obj: IoTAnalyticsListDatastoresRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListDatastoresResponse
 */
export interface IoTAnalyticsListDatastoresResponse {
  /**
   * @schema IoTAnalyticsListDatastoresResponse#datastoreSummaries
   */
  readonly datastoreSummaries?: IoTAnalyticsDatastoreSummary[];

  /**
   * @schema IoTAnalyticsListDatastoresResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListDatastoresResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListDatastoresResponse(obj: IoTAnalyticsListDatastoresResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreSummaries': obj.datastoreSummaries?.map(y => toJson_IoTAnalyticsDatastoreSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListPipelinesRequest
 */
export interface IoTAnalyticsListPipelinesRequest {
  /**
   * @schema IoTAnalyticsListPipelinesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTAnalyticsListPipelinesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsListPipelinesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListPipelinesRequest(obj: IoTAnalyticsListPipelinesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListPipelinesResponse
 */
export interface IoTAnalyticsListPipelinesResponse {
  /**
   * @schema IoTAnalyticsListPipelinesResponse#pipelineSummaries
   */
  readonly pipelineSummaries?: IoTAnalyticsPipelineSummary[];

  /**
   * @schema IoTAnalyticsListPipelinesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListPipelinesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListPipelinesResponse(obj: IoTAnalyticsListPipelinesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineSummaries': obj.pipelineSummaries?.map(y => toJson_IoTAnalyticsPipelineSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListTagsForResourceRequest
 */
export interface IoTAnalyticsListTagsForResourceRequest {
  /**
   * @schema IoTAnalyticsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IoTAnalyticsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListTagsForResourceRequest(obj: IoTAnalyticsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsListTagsForResourceResponse
 */
export interface IoTAnalyticsListTagsForResourceResponse {
  /**
   * @schema IoTAnalyticsListTagsForResourceResponse#tags
   */
  readonly tags?: IoTAnalyticsTag[];

}

/**
 * Converts an object of type 'IoTAnalyticsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsListTagsForResourceResponse(obj: IoTAnalyticsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsPutLoggingOptionsRequest
 */
export interface IoTAnalyticsPutLoggingOptionsRequest {
  /**
   * @schema IoTAnalyticsPutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTAnalyticsLoggingOptions;

}

/**
 * Converts an object of type 'IoTAnalyticsPutLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsPutLoggingOptionsRequest(obj: IoTAnalyticsPutLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTAnalyticsLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsRunPipelineActivityRequest
 */
export interface IoTAnalyticsRunPipelineActivityRequest {
  /**
   * @schema IoTAnalyticsRunPipelineActivityRequest#pipelineActivity
   */
  readonly pipelineActivity: IoTAnalyticsPipelineActivity;

  /**
   * @schema IoTAnalyticsRunPipelineActivityRequest#payloads
   */
  readonly payloads: any[];

}

/**
 * Converts an object of type 'IoTAnalyticsRunPipelineActivityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsRunPipelineActivityRequest(obj: IoTAnalyticsRunPipelineActivityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineActivity': toJson_IoTAnalyticsPipelineActivity(obj.pipelineActivity),
    'payloads': obj.payloads?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsRunPipelineActivityResponse
 */
export interface IoTAnalyticsRunPipelineActivityResponse {
  /**
   * @schema IoTAnalyticsRunPipelineActivityResponse#payloads
   */
  readonly payloads?: any[];

  /**
   * @schema IoTAnalyticsRunPipelineActivityResponse#logResult
   */
  readonly logResult?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsRunPipelineActivityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsRunPipelineActivityResponse(obj: IoTAnalyticsRunPipelineActivityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payloads': obj.payloads?.map(y => y),
    'logResult': obj.logResult,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSampleChannelDataRequest
 */
export interface IoTAnalyticsSampleChannelDataRequest {
  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#maxMessages
   */
  readonly maxMessages?: number;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTAnalyticsSampleChannelDataRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsSampleChannelDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSampleChannelDataRequest(obj: IoTAnalyticsSampleChannelDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'maxMessages': obj.maxMessages,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSampleChannelDataResponse
 */
export interface IoTAnalyticsSampleChannelDataResponse {
  /**
   * @schema IoTAnalyticsSampleChannelDataResponse#payloads
   */
  readonly payloads?: any[];

}

/**
 * Converts an object of type 'IoTAnalyticsSampleChannelDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSampleChannelDataResponse(obj: IoTAnalyticsSampleChannelDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payloads': obj.payloads?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsStartPipelineReprocessingRequest
 */
export interface IoTAnalyticsStartPipelineReprocessingRequest {
  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IoTAnalyticsStartPipelineReprocessingRequest#channelMessages
   */
  readonly channelMessages?: IoTAnalyticsChannelMessages;

}

/**
 * Converts an object of type 'IoTAnalyticsStartPipelineReprocessingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsStartPipelineReprocessingRequest(obj: IoTAnalyticsStartPipelineReprocessingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'channelMessages': toJson_IoTAnalyticsChannelMessages(obj.channelMessages),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsStartPipelineReprocessingResponse
 */
export interface IoTAnalyticsStartPipelineReprocessingResponse {
  /**
   * @schema IoTAnalyticsStartPipelineReprocessingResponse#reprocessingId
   */
  readonly reprocessingId?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsStartPipelineReprocessingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsStartPipelineReprocessingResponse(obj: IoTAnalyticsStartPipelineReprocessingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reprocessingId': obj.reprocessingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsTagResourceRequest
 */
export interface IoTAnalyticsTagResourceRequest {
  /**
   * @schema IoTAnalyticsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTAnalyticsTagResourceRequest#tags
   */
  readonly tags: IoTAnalyticsTag[];

}

/**
 * Converts an object of type 'IoTAnalyticsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsTagResourceRequest(obj: IoTAnalyticsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_IoTAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsTagResourceResponse
 */
export interface IoTAnalyticsTagResourceResponse {
}

/**
 * Converts an object of type 'IoTAnalyticsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsTagResourceResponse(obj: IoTAnalyticsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUntagResourceRequest
 */
export interface IoTAnalyticsUntagResourceRequest {
  /**
   * @schema IoTAnalyticsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTAnalyticsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoTAnalyticsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUntagResourceRequest(obj: IoTAnalyticsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUntagResourceResponse
 */
export interface IoTAnalyticsUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTAnalyticsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUntagResourceResponse(obj: IoTAnalyticsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUpdateChannelRequest
 */
export interface IoTAnalyticsUpdateChannelRequest {
  /**
   * @schema IoTAnalyticsUpdateChannelRequest#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsUpdateChannelRequest#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsUpdateChannelRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

}

/**
 * Converts an object of type 'IoTAnalyticsUpdateChannelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUpdateChannelRequest(obj: IoTAnalyticsUpdateChannelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'channelStorage': toJson_IoTAnalyticsChannelStorage(obj.channelStorage),
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUpdateDatasetRequest
 */
export interface IoTAnalyticsUpdateDatasetRequest {
  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#datasetName
   */
  readonly datasetName: string;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#actions
   */
  readonly actions: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsUpdateDatasetRequest#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * Converts an object of type 'IoTAnalyticsUpdateDatasetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUpdateDatasetRequest(obj: IoTAnalyticsUpdateDatasetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'actions': obj.actions?.map(y => toJson_IoTAnalyticsDatasetAction(y)),
    'triggers': obj.triggers?.map(y => toJson_IoTAnalyticsDatasetTrigger(y)),
    'contentDeliveryRules': obj.contentDeliveryRules?.map(y => toJson_IoTAnalyticsDatasetContentDeliveryRule(y)),
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'versioningConfiguration': toJson_IoTAnalyticsVersioningConfiguration(obj.versioningConfiguration),
    'lateDataRules': obj.lateDataRules?.map(y => toJson_IoTAnalyticsLateDataRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUpdateDatastoreRequest
 */
export interface IoTAnalyticsUpdateDatastoreRequest {
  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#datastoreName
   */
  readonly datastoreName: string;

  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorage;

  /**
   * @schema IoTAnalyticsUpdateDatastoreRequest#fileFormatConfiguration
   */
  readonly fileFormatConfiguration?: IoTAnalyticsFileFormatConfiguration;

}

/**
 * Converts an object of type 'IoTAnalyticsUpdateDatastoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUpdateDatastoreRequest(obj: IoTAnalyticsUpdateDatastoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'datastoreStorage': toJson_IoTAnalyticsDatastoreStorage(obj.datastoreStorage),
    'fileFormatConfiguration': toJson_IoTAnalyticsFileFormatConfiguration(obj.fileFormatConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsUpdatePipelineRequest
 */
export interface IoTAnalyticsUpdatePipelineRequest {
  /**
   * @schema IoTAnalyticsUpdatePipelineRequest#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema IoTAnalyticsUpdatePipelineRequest#pipelineActivities
   */
  readonly pipelineActivities: IoTAnalyticsPipelineActivity[];

}

/**
 * Converts an object of type 'IoTAnalyticsUpdatePipelineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsUpdatePipelineRequest(obj: IoTAnalyticsUpdatePipelineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineActivities': obj.pipelineActivities?.map(y => toJson_IoTAnalyticsPipelineActivity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsMessage
 */
export interface IoTAnalyticsMessage {
  /**
   * @schema IoTAnalyticsMessage#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTAnalyticsMessage#payload
   */
  readonly payload: any;

}

/**
 * Converts an object of type 'IoTAnalyticsMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsMessage(obj: IoTAnalyticsMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsBatchPutMessageErrorEntry
 */
export interface IoTAnalyticsBatchPutMessageErrorEntry {
  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTAnalyticsBatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsBatchPutMessageErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsBatchPutMessageErrorEntry(obj: IoTAnalyticsBatchPutMessageErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelStorage
 */
export interface IoTAnalyticsChannelStorage {
  /**
   * @schema IoTAnalyticsChannelStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedChannelS3Storage;

  /**
   * @schema IoTAnalyticsChannelStorage#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedChannelS3Storage;

}

/**
 * Converts an object of type 'IoTAnalyticsChannelStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelStorage(obj: IoTAnalyticsChannelStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceManagedS3': toJson_IoTAnalyticsServiceManagedChannelS3Storage(obj.serviceManagedS3),
    'customerManagedS3': toJson_IoTAnalyticsCustomerManagedChannelS3Storage(obj.customerManagedS3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsRetentionPeriod
 */
export interface IoTAnalyticsRetentionPeriod {
  /**
   * @schema IoTAnalyticsRetentionPeriod#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema IoTAnalyticsRetentionPeriod#numberOfDays
   */
  readonly numberOfDays?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsRetentionPeriod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsRetentionPeriod(obj: IoTAnalyticsRetentionPeriod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unlimited': obj.unlimited,
    'numberOfDays': obj.numberOfDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsTag
 */
export interface IoTAnalyticsTag {
  /**
   * @schema IoTAnalyticsTag#key
   */
  readonly key: string;

  /**
   * @schema IoTAnalyticsTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTAnalyticsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsTag(obj: IoTAnalyticsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetAction
 */
export interface IoTAnalyticsDatasetAction {
  /**
   * @schema IoTAnalyticsDatasetAction#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IoTAnalyticsDatasetAction#queryAction
   */
  readonly queryAction?: IoTAnalyticsSqlQueryDatasetAction;

  /**
   * @schema IoTAnalyticsDatasetAction#containerAction
   */
  readonly containerAction?: IoTAnalyticsContainerDatasetAction;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetAction(obj: IoTAnalyticsDatasetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'queryAction': toJson_IoTAnalyticsSqlQueryDatasetAction(obj.queryAction),
    'containerAction': toJson_IoTAnalyticsContainerDatasetAction(obj.containerAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetTrigger
 */
export interface IoTAnalyticsDatasetTrigger {
  /**
   * @schema IoTAnalyticsDatasetTrigger#schedule
   */
  readonly schedule?: IoTAnalyticsSchedule;

  /**
   * @schema IoTAnalyticsDatasetTrigger#dataset
   */
  readonly dataset?: IoTAnalyticsTriggeringDataset;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetTrigger(obj: IoTAnalyticsDatasetTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schedule': toJson_IoTAnalyticsSchedule(obj.schedule),
    'dataset': toJson_IoTAnalyticsTriggeringDataset(obj.dataset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetContentDeliveryRule
 */
export interface IoTAnalyticsDatasetContentDeliveryRule {
  /**
   * @schema IoTAnalyticsDatasetContentDeliveryRule#entryName
   */
  readonly entryName?: string;

  /**
   * @schema IoTAnalyticsDatasetContentDeliveryRule#destination
   */
  readonly destination: IoTAnalyticsDatasetContentDeliveryDestination;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetContentDeliveryRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetContentDeliveryRule(obj: IoTAnalyticsDatasetContentDeliveryRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryName': obj.entryName,
    'destination': toJson_IoTAnalyticsDatasetContentDeliveryDestination(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsVersioningConfiguration
 */
export interface IoTAnalyticsVersioningConfiguration {
  /**
   * @schema IoTAnalyticsVersioningConfiguration#unlimited
   */
  readonly unlimited?: boolean;

  /**
   * @schema IoTAnalyticsVersioningConfiguration#maxVersions
   */
  readonly maxVersions?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsVersioningConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsVersioningConfiguration(obj: IoTAnalyticsVersioningConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unlimited': obj.unlimited,
    'maxVersions': obj.maxVersions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsLateDataRule
 */
export interface IoTAnalyticsLateDataRule {
  /**
   * @schema IoTAnalyticsLateDataRule#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema IoTAnalyticsLateDataRule#ruleConfiguration
   */
  readonly ruleConfiguration: IoTAnalyticsLateDataRuleConfiguration;

}

/**
 * Converts an object of type 'IoTAnalyticsLateDataRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsLateDataRule(obj: IoTAnalyticsLateDataRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
    'ruleConfiguration': toJson_IoTAnalyticsLateDataRuleConfiguration(obj.ruleConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreStorage
 */
export interface IoTAnalyticsDatastoreStorage {
  /**
   * @schema IoTAnalyticsDatastoreStorage#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedDatastoreS3Storage;

  /**
   * @schema IoTAnalyticsDatastoreStorage#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedDatastoreS3Storage;

  /**
   * @schema IoTAnalyticsDatastoreStorage#iotSiteWiseMultiLayerStorage
   */
  readonly iotSiteWiseMultiLayerStorage?: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreStorage(obj: IoTAnalyticsDatastoreStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceManagedS3': toJson_IoTAnalyticsServiceManagedDatastoreS3Storage(obj.serviceManagedS3),
    'customerManagedS3': toJson_IoTAnalyticsCustomerManagedDatastoreS3Storage(obj.customerManagedS3),
    'iotSiteWiseMultiLayerStorage': toJson_IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage(obj.iotSiteWiseMultiLayerStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsFileFormatConfiguration
 */
export interface IoTAnalyticsFileFormatConfiguration {
  /**
   * @schema IoTAnalyticsFileFormatConfiguration#jsonConfiguration
   */
  readonly jsonConfiguration?: IoTAnalyticsJsonConfiguration;

  /**
   * @schema IoTAnalyticsFileFormatConfiguration#parquetConfiguration
   */
  readonly parquetConfiguration?: IoTAnalyticsParquetConfiguration;

}

/**
 * Converts an object of type 'IoTAnalyticsFileFormatConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsFileFormatConfiguration(obj: IoTAnalyticsFileFormatConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jsonConfiguration': toJson_IoTAnalyticsJsonConfiguration(obj.jsonConfiguration),
    'parquetConfiguration': toJson_IoTAnalyticsParquetConfiguration(obj.parquetConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastorePartitions
 */
export interface IoTAnalyticsDatastorePartitions {
  /**
   * @schema IoTAnalyticsDatastorePartitions#partitions
   */
  readonly partitions?: IoTAnalyticsDatastorePartition[];

}

/**
 * Converts an object of type 'IoTAnalyticsDatastorePartitions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastorePartitions(obj: IoTAnalyticsDatastorePartitions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'partitions': obj.partitions?.map(y => toJson_IoTAnalyticsDatastorePartition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsPipelineActivity
 */
export interface IoTAnalyticsPipelineActivity {
  /**
   * @schema IoTAnalyticsPipelineActivity#channel
   */
  readonly channel?: IoTAnalyticsChannelActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#lambda
   */
  readonly lambda?: IoTAnalyticsLambdaActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#datastore
   */
  readonly datastore?: IoTAnalyticsDatastoreActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#addAttributes
   */
  readonly addAttributes?: IoTAnalyticsAddAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#removeAttributes
   */
  readonly removeAttributes?: IoTAnalyticsRemoveAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#selectAttributes
   */
  readonly selectAttributes?: IoTAnalyticsSelectAttributesActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#filter
   */
  readonly filter?: IoTAnalyticsFilterActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#math
   */
  readonly math?: IoTAnalyticsMathActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#deviceRegistryEnrich
   */
  readonly deviceRegistryEnrich?: IoTAnalyticsDeviceRegistryEnrichActivity;

  /**
   * @schema IoTAnalyticsPipelineActivity#deviceShadowEnrich
   */
  readonly deviceShadowEnrich?: IoTAnalyticsDeviceShadowEnrichActivity;

}

/**
 * Converts an object of type 'IoTAnalyticsPipelineActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsPipelineActivity(obj: IoTAnalyticsPipelineActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channel': toJson_IoTAnalyticsChannelActivity(obj.channel),
    'lambda': toJson_IoTAnalyticsLambdaActivity(obj.lambda),
    'datastore': toJson_IoTAnalyticsDatastoreActivity(obj.datastore),
    'addAttributes': toJson_IoTAnalyticsAddAttributesActivity(obj.addAttributes),
    'removeAttributes': toJson_IoTAnalyticsRemoveAttributesActivity(obj.removeAttributes),
    'selectAttributes': toJson_IoTAnalyticsSelectAttributesActivity(obj.selectAttributes),
    'filter': toJson_IoTAnalyticsFilterActivity(obj.filter),
    'math': toJson_IoTAnalyticsMathActivity(obj.math),
    'deviceRegistryEnrich': toJson_IoTAnalyticsDeviceRegistryEnrichActivity(obj.deviceRegistryEnrich),
    'deviceShadowEnrich': toJson_IoTAnalyticsDeviceShadowEnrichActivity(obj.deviceShadowEnrich),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannel
 */
export interface IoTAnalyticsChannel {
  /**
   * @schema IoTAnalyticsChannel#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsChannel#storage
   */
  readonly storage?: IoTAnalyticsChannelStorage;

  /**
   * @schema IoTAnalyticsChannel#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsChannel#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsChannel#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsChannel#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsChannel#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsChannel#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannel(obj: IoTAnalyticsChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'storage': toJson_IoTAnalyticsChannelStorage(obj.storage),
    'arn': obj.arn,
    'status': obj.status,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'lastMessageArrivalTime': obj.lastMessageArrivalTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelStatistics
 */
export interface IoTAnalyticsChannelStatistics {
  /**
   * @schema IoTAnalyticsChannelStatistics#size
   */
  readonly size?: IoTAnalyticsEstimatedResourceSize;

}

/**
 * Converts an object of type 'IoTAnalyticsChannelStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelStatistics(obj: IoTAnalyticsChannelStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': toJson_IoTAnalyticsEstimatedResourceSize(obj.size),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDataset
 */
export interface IoTAnalyticsDataset {
  /**
   * @schema IoTAnalyticsDataset#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsDataset#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsDataset#actions
   */
  readonly actions?: IoTAnalyticsDatasetAction[];

  /**
   * @schema IoTAnalyticsDataset#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsDataset#contentDeliveryRules
   */
  readonly contentDeliveryRules?: IoTAnalyticsDatasetContentDeliveryRule[];

  /**
   * @schema IoTAnalyticsDataset#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDataset#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDataset#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDataset#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsDataset#versioningConfiguration
   */
  readonly versioningConfiguration?: IoTAnalyticsVersioningConfiguration;

  /**
   * @schema IoTAnalyticsDataset#lateDataRules
   */
  readonly lateDataRules?: IoTAnalyticsLateDataRule[];

}

/**
 * Converts an object of type 'IoTAnalyticsDataset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDataset(obj: IoTAnalyticsDataset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'actions': obj.actions?.map(y => toJson_IoTAnalyticsDatasetAction(y)),
    'triggers': obj.triggers?.map(y => toJson_IoTAnalyticsDatasetTrigger(y)),
    'contentDeliveryRules': obj.contentDeliveryRules?.map(y => toJson_IoTAnalyticsDatasetContentDeliveryRule(y)),
    'status': obj.status,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'versioningConfiguration': toJson_IoTAnalyticsVersioningConfiguration(obj.versioningConfiguration),
    'lateDataRules': obj.lateDataRules?.map(y => toJson_IoTAnalyticsLateDataRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastore
 */
export interface IoTAnalyticsDatastore {
  /**
   * @schema IoTAnalyticsDatastore#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsDatastore#storage
   */
  readonly storage?: IoTAnalyticsDatastoreStorage;

  /**
   * @schema IoTAnalyticsDatastore#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsDatastore#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatastore#retentionPeriod
   */
  readonly retentionPeriod?: IoTAnalyticsRetentionPeriod;

  /**
   * @schema IoTAnalyticsDatastore#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatastore#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatastore#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

  /**
   * @schema IoTAnalyticsDatastore#fileFormatConfiguration
   */
  readonly fileFormatConfiguration?: IoTAnalyticsFileFormatConfiguration;

  /**
   * @schema IoTAnalyticsDatastore#datastorePartitions
   */
  readonly datastorePartitions?: IoTAnalyticsDatastorePartitions;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastore' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastore(obj: IoTAnalyticsDatastore | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'storage': toJson_IoTAnalyticsDatastoreStorage(obj.storage),
    'arn': obj.arn,
    'status': obj.status,
    'retentionPeriod': toJson_IoTAnalyticsRetentionPeriod(obj.retentionPeriod),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'lastMessageArrivalTime': obj.lastMessageArrivalTime,
    'fileFormatConfiguration': toJson_IoTAnalyticsFileFormatConfiguration(obj.fileFormatConfiguration),
    'datastorePartitions': toJson_IoTAnalyticsDatastorePartitions(obj.datastorePartitions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreStatistics
 */
export interface IoTAnalyticsDatastoreStatistics {
  /**
   * @schema IoTAnalyticsDatastoreStatistics#size
   */
  readonly size?: IoTAnalyticsEstimatedResourceSize;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreStatistics(obj: IoTAnalyticsDatastoreStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'size': toJson_IoTAnalyticsEstimatedResourceSize(obj.size),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsLoggingOptions
 */
export interface IoTAnalyticsLoggingOptions {
  /**
   * @schema IoTAnalyticsLoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsLoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema IoTAnalyticsLoggingOptions#enabled
   */
  readonly enabled: boolean;

}

/**
 * Converts an object of type 'IoTAnalyticsLoggingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsLoggingOptions(obj: IoTAnalyticsLoggingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'level': obj.level,
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsPipeline
 */
export interface IoTAnalyticsPipeline {
  /**
   * @schema IoTAnalyticsPipeline#name
   */
  readonly name?: string;

  /**
   * @schema IoTAnalyticsPipeline#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTAnalyticsPipeline#activities
   */
  readonly activities?: IoTAnalyticsPipelineActivity[];

  /**
   * @schema IoTAnalyticsPipeline#reprocessingSummaries
   */
  readonly reprocessingSummaries?: IoTAnalyticsReprocessingSummary[];

  /**
   * @schema IoTAnalyticsPipeline#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsPipeline#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsPipeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsPipeline(obj: IoTAnalyticsPipeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'activities': obj.activities?.map(y => toJson_IoTAnalyticsPipelineActivity(y)),
    'reprocessingSummaries': obj.reprocessingSummaries?.map(y => toJson_IoTAnalyticsReprocessingSummary(y)),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetEntry
 */
export interface IoTAnalyticsDatasetEntry {
  /**
   * @schema IoTAnalyticsDatasetEntry#entryName
   */
  readonly entryName?: string;

  /**
   * @schema IoTAnalyticsDatasetEntry#dataURI
   */
  readonly dataUri?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetEntry(obj: IoTAnalyticsDatasetEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryName': obj.entryName,
    'dataURI': obj.dataUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetContentStatus
 */
export interface IoTAnalyticsDatasetContentStatus {
  /**
   * @schema IoTAnalyticsDatasetContentStatus#state
   */
  readonly state?: string;

  /**
   * @schema IoTAnalyticsDatasetContentStatus#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetContentStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetContentStatus(obj: IoTAnalyticsDatasetContentStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelSummary
 */
export interface IoTAnalyticsChannelSummary {
  /**
   * @schema IoTAnalyticsChannelSummary#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#channelStorage
   */
  readonly channelStorage?: IoTAnalyticsChannelStorageSummary;

  /**
   * @schema IoTAnalyticsChannelSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsChannelSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsChannelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelSummary(obj: IoTAnalyticsChannelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelName': obj.channelName,
    'channelStorage': toJson_IoTAnalyticsChannelStorageSummary(obj.channelStorage),
    'status': obj.status,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'lastMessageArrivalTime': obj.lastMessageArrivalTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetContentSummary
 */
export interface IoTAnalyticsDatasetContentSummary {
  /**
   * @schema IoTAnalyticsDatasetContentSummary#version
   */
  readonly version?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#status
   */
  readonly status?: IoTAnalyticsDatasetContentStatus;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#scheduleTime
   */
  readonly scheduleTime?: string;

  /**
   * @schema IoTAnalyticsDatasetContentSummary#completionTime
   */
  readonly completionTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetContentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetContentSummary(obj: IoTAnalyticsDatasetContentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
    'status': toJson_IoTAnalyticsDatasetContentStatus(obj.status),
    'creationTime': obj.creationTime,
    'scheduleTime': obj.scheduleTime,
    'completionTime': obj.completionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetSummary
 */
export interface IoTAnalyticsDatasetSummary {
  /**
   * @schema IoTAnalyticsDatasetSummary#datasetName
   */
  readonly datasetName?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatasetSummary#triggers
   */
  readonly triggers?: IoTAnalyticsDatasetTrigger[];

  /**
   * @schema IoTAnalyticsDatasetSummary#actions
   */
  readonly actions?: IoTAnalyticsDatasetActionSummary[];

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetSummary(obj: IoTAnalyticsDatasetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
    'status': obj.status,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'triggers': obj.triggers?.map(y => toJson_IoTAnalyticsDatasetTrigger(y)),
    'actions': obj.actions?.map(y => toJson_IoTAnalyticsDatasetActionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreSummary
 */
export interface IoTAnalyticsDatastoreSummary {
  /**
   * @schema IoTAnalyticsDatastoreSummary#datastoreName
   */
  readonly datastoreName?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#datastoreStorage
   */
  readonly datastoreStorage?: IoTAnalyticsDatastoreStorageSummary;

  /**
   * @schema IoTAnalyticsDatastoreSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#lastMessageArrivalTime
   */
  readonly lastMessageArrivalTime?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#fileFormatType
   */
  readonly fileFormatType?: string;

  /**
   * @schema IoTAnalyticsDatastoreSummary#datastorePartitions
   */
  readonly datastorePartitions?: IoTAnalyticsDatastorePartitions;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreSummary(obj: IoTAnalyticsDatastoreSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datastoreName': obj.datastoreName,
    'datastoreStorage': toJson_IoTAnalyticsDatastoreStorageSummary(obj.datastoreStorage),
    'status': obj.status,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'lastMessageArrivalTime': obj.lastMessageArrivalTime,
    'fileFormatType': obj.fileFormatType,
    'datastorePartitions': toJson_IoTAnalyticsDatastorePartitions(obj.datastorePartitions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsPipelineSummary
 */
export interface IoTAnalyticsPipelineSummary {
  /**
   * @schema IoTAnalyticsPipelineSummary#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema IoTAnalyticsPipelineSummary#reprocessingSummaries
   */
  readonly reprocessingSummaries?: IoTAnalyticsReprocessingSummary[];

  /**
   * @schema IoTAnalyticsPipelineSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTAnalyticsPipelineSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsPipelineSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsPipelineSummary(obj: IoTAnalyticsPipelineSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'reprocessingSummaries': obj.reprocessingSummaries?.map(y => toJson_IoTAnalyticsReprocessingSummary(y)),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelMessages
 */
export interface IoTAnalyticsChannelMessages {
  /**
   * @schema IoTAnalyticsChannelMessages#s3Paths
   */
  readonly s3Paths?: string[];

}

/**
 * Converts an object of type 'IoTAnalyticsChannelMessages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelMessages(obj: IoTAnalyticsChannelMessages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Paths': obj.s3Paths?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsServiceManagedChannelS3Storage
 */
export interface IoTAnalyticsServiceManagedChannelS3Storage {
}

/**
 * Converts an object of type 'IoTAnalyticsServiceManagedChannelS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsServiceManagedChannelS3Storage(obj: IoTAnalyticsServiceManagedChannelS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCustomerManagedChannelS3Storage
 */
export interface IoTAnalyticsCustomerManagedChannelS3Storage {
  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCustomerManagedChannelS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCustomerManagedChannelS3Storage(obj: IoTAnalyticsCustomerManagedChannelS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSqlQueryDatasetAction
 */
export interface IoTAnalyticsSqlQueryDatasetAction {
  /**
   * @schema IoTAnalyticsSqlQueryDatasetAction#sqlQuery
   */
  readonly sqlQuery: string;

  /**
   * @schema IoTAnalyticsSqlQueryDatasetAction#filters
   */
  readonly filters?: IoTAnalyticsQueryFilter[];

}

/**
 * Converts an object of type 'IoTAnalyticsSqlQueryDatasetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSqlQueryDatasetAction(obj: IoTAnalyticsSqlQueryDatasetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sqlQuery': obj.sqlQuery,
    'filters': obj.filters?.map(y => toJson_IoTAnalyticsQueryFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsContainerDatasetAction
 */
export interface IoTAnalyticsContainerDatasetAction {
  /**
   * @schema IoTAnalyticsContainerDatasetAction#image
   */
  readonly image: string;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#executionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#resourceConfiguration
   */
  readonly resourceConfiguration: IoTAnalyticsResourceConfiguration;

  /**
   * @schema IoTAnalyticsContainerDatasetAction#variables
   */
  readonly variables?: IoTAnalyticsVariable[];

}

/**
 * Converts an object of type 'IoTAnalyticsContainerDatasetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsContainerDatasetAction(obj: IoTAnalyticsContainerDatasetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'image': obj.image,
    'executionRoleArn': obj.executionRoleArn,
    'resourceConfiguration': toJson_IoTAnalyticsResourceConfiguration(obj.resourceConfiguration),
    'variables': obj.variables?.map(y => toJson_IoTAnalyticsVariable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSchedule
 */
export interface IoTAnalyticsSchedule {
  /**
   * @schema IoTAnalyticsSchedule#expression
   */
  readonly expression?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSchedule(obj: IoTAnalyticsSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsTriggeringDataset
 */
export interface IoTAnalyticsTriggeringDataset {
  /**
   * @schema IoTAnalyticsTriggeringDataset#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'IoTAnalyticsTriggeringDataset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsTriggeringDataset(obj: IoTAnalyticsTriggeringDataset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetContentDeliveryDestination
 */
export interface IoTAnalyticsDatasetContentDeliveryDestination {
  /**
   * @schema IoTAnalyticsDatasetContentDeliveryDestination#iotEventsDestinationConfiguration
   */
  readonly iotEventsDestinationConfiguration?: IoTAnalyticsIotEventsDestinationConfiguration;

  /**
   * @schema IoTAnalyticsDatasetContentDeliveryDestination#s3DestinationConfiguration
   */
  readonly s3DestinationConfiguration?: IoTAnalyticsS3DestinationConfiguration;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetContentDeliveryDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetContentDeliveryDestination(obj: IoTAnalyticsDatasetContentDeliveryDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'iotEventsDestinationConfiguration': toJson_IoTAnalyticsIotEventsDestinationConfiguration(obj.iotEventsDestinationConfiguration),
    's3DestinationConfiguration': toJson_IoTAnalyticsS3DestinationConfiguration(obj.s3DestinationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsLateDataRuleConfiguration
 */
export interface IoTAnalyticsLateDataRuleConfiguration {
  /**
   * @schema IoTAnalyticsLateDataRuleConfiguration#deltaTimeSessionWindowConfiguration
   */
  readonly deltaTimeSessionWindowConfiguration?: IoTAnalyticsDeltaTimeSessionWindowConfiguration;

}

/**
 * Converts an object of type 'IoTAnalyticsLateDataRuleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsLateDataRuleConfiguration(obj: IoTAnalyticsLateDataRuleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deltaTimeSessionWindowConfiguration': toJson_IoTAnalyticsDeltaTimeSessionWindowConfiguration(obj.deltaTimeSessionWindowConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsServiceManagedDatastoreS3Storage
 */
export interface IoTAnalyticsServiceManagedDatastoreS3Storage {
}

/**
 * Converts an object of type 'IoTAnalyticsServiceManagedDatastoreS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsServiceManagedDatastoreS3Storage(obj: IoTAnalyticsServiceManagedDatastoreS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage
 */
export interface IoTAnalyticsCustomerManagedDatastoreS3Storage {
  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCustomerManagedDatastoreS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCustomerManagedDatastoreS3Storage(obj: IoTAnalyticsCustomerManagedDatastoreS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage
 */
export interface IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage {
  /**
   * @schema IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage#customerManagedS3Storage
   */
  readonly customerManagedS3Storage: IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage(obj: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customerManagedS3Storage': toJson_IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage(obj.customerManagedS3Storage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsJsonConfiguration
 */
export interface IoTAnalyticsJsonConfiguration {
}

/**
 * Converts an object of type 'IoTAnalyticsJsonConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsJsonConfiguration(obj: IoTAnalyticsJsonConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsParquetConfiguration
 */
export interface IoTAnalyticsParquetConfiguration {
  /**
   * @schema IoTAnalyticsParquetConfiguration#schemaDefinition
   */
  readonly schemaDefinition?: IoTAnalyticsSchemaDefinition;

}

/**
 * Converts an object of type 'IoTAnalyticsParquetConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsParquetConfiguration(obj: IoTAnalyticsParquetConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaDefinition': toJson_IoTAnalyticsSchemaDefinition(obj.schemaDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastorePartition
 */
export interface IoTAnalyticsDatastorePartition {
  /**
   * @schema IoTAnalyticsDatastorePartition#attributePartition
   */
  readonly attributePartition?: IoTAnalyticsPartition;

  /**
   * @schema IoTAnalyticsDatastorePartition#timestampPartition
   */
  readonly timestampPartition?: IoTAnalyticsTimestampPartition;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastorePartition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastorePartition(obj: IoTAnalyticsDatastorePartition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributePartition': toJson_IoTAnalyticsPartition(obj.attributePartition),
    'timestampPartition': toJson_IoTAnalyticsTimestampPartition(obj.timestampPartition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelActivity
 */
export interface IoTAnalyticsChannelActivity {
  /**
   * @schema IoTAnalyticsChannelActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsChannelActivity#channelName
   */
  readonly channelName: string;

  /**
   * @schema IoTAnalyticsChannelActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsChannelActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelActivity(obj: IoTAnalyticsChannelActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'channelName': obj.channelName,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsLambdaActivity
 */
export interface IoTAnalyticsLambdaActivity {
  /**
   * @schema IoTAnalyticsLambdaActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsLambdaActivity#lambdaName
   */
  readonly lambdaName: string;

  /**
   * @schema IoTAnalyticsLambdaActivity#batchSize
   */
  readonly batchSize: number;

  /**
   * @schema IoTAnalyticsLambdaActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsLambdaActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsLambdaActivity(obj: IoTAnalyticsLambdaActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'lambdaName': obj.lambdaName,
    'batchSize': obj.batchSize,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreActivity
 */
export interface IoTAnalyticsDatastoreActivity {
  /**
   * @schema IoTAnalyticsDatastoreActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDatastoreActivity#datastoreName
   */
  readonly datastoreName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreActivity(obj: IoTAnalyticsDatastoreActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'datastoreName': obj.datastoreName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsAddAttributesActivity
 */
export interface IoTAnalyticsAddAttributesActivity {
  /**
   * @schema IoTAnalyticsAddAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsAddAttributesActivity#attributes
   */
  readonly attributes: { [key: string]: string };

  /**
   * @schema IoTAnalyticsAddAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsAddAttributesActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsAddAttributesActivity(obj: IoTAnalyticsAddAttributesActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsRemoveAttributesActivity
 */
export interface IoTAnalyticsRemoveAttributesActivity {
  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema IoTAnalyticsRemoveAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsRemoveAttributesActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsRemoveAttributesActivity(obj: IoTAnalyticsRemoveAttributesActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attributes': obj.attributes?.map(y => y),
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSelectAttributesActivity
 */
export interface IoTAnalyticsSelectAttributesActivity {
  /**
   * @schema IoTAnalyticsSelectAttributesActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsSelectAttributesActivity#attributes
   */
  readonly attributes: string[];

  /**
   * @schema IoTAnalyticsSelectAttributesActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsSelectAttributesActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSelectAttributesActivity(obj: IoTAnalyticsSelectAttributesActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attributes': obj.attributes?.map(y => y),
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsFilterActivity
 */
export interface IoTAnalyticsFilterActivity {
  /**
   * @schema IoTAnalyticsFilterActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsFilterActivity#filter
   */
  readonly filter: string;

  /**
   * @schema IoTAnalyticsFilterActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsFilterActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsFilterActivity(obj: IoTAnalyticsFilterActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'filter': obj.filter,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsMathActivity
 */
export interface IoTAnalyticsMathActivity {
  /**
   * @schema IoTAnalyticsMathActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsMathActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsMathActivity#math
   */
  readonly math: string;

  /**
   * @schema IoTAnalyticsMathActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsMathActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsMathActivity(obj: IoTAnalyticsMathActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attribute': obj.attribute,
    'math': obj.math,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeviceRegistryEnrichActivity
 */
export interface IoTAnalyticsDeviceRegistryEnrichActivity {
  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsDeviceRegistryEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeviceRegistryEnrichActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeviceRegistryEnrichActivity(obj: IoTAnalyticsDeviceRegistryEnrichActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attribute': obj.attribute,
    'thingName': obj.thingName,
    'roleArn': obj.roleArn,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeviceShadowEnrichActivity
 */
export interface IoTAnalyticsDeviceShadowEnrichActivity {
  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#attribute
   */
  readonly attribute: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTAnalyticsDeviceShadowEnrichActivity#next
   */
  readonly next?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeviceShadowEnrichActivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeviceShadowEnrichActivity(obj: IoTAnalyticsDeviceShadowEnrichActivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attribute': obj.attribute,
    'thingName': obj.thingName,
    'roleArn': obj.roleArn,
    'next': obj.next,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsEstimatedResourceSize
 */
export interface IoTAnalyticsEstimatedResourceSize {
  /**
   * @schema IoTAnalyticsEstimatedResourceSize#estimatedSizeInBytes
   */
  readonly estimatedSizeInBytes?: number;

  /**
   * @schema IoTAnalyticsEstimatedResourceSize#estimatedOn
   */
  readonly estimatedOn?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsEstimatedResourceSize' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsEstimatedResourceSize(obj: IoTAnalyticsEstimatedResourceSize | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'estimatedSizeInBytes': obj.estimatedSizeInBytes,
    'estimatedOn': obj.estimatedOn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsReprocessingSummary
 */
export interface IoTAnalyticsReprocessingSummary {
  /**
   * @schema IoTAnalyticsReprocessingSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTAnalyticsReprocessingSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTAnalyticsReprocessingSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsReprocessingSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsReprocessingSummary(obj: IoTAnalyticsReprocessingSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'status': obj.status,
    'creationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsChannelStorageSummary
 */
export interface IoTAnalyticsChannelStorageSummary {
  /**
   * @schema IoTAnalyticsChannelStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedChannelS3StorageSummary;

  /**
   * @schema IoTAnalyticsChannelStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedChannelS3StorageSummary;

}

/**
 * Converts an object of type 'IoTAnalyticsChannelStorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsChannelStorageSummary(obj: IoTAnalyticsChannelStorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceManagedS3': toJson_IoTAnalyticsServiceManagedChannelS3StorageSummary(obj.serviceManagedS3),
    'customerManagedS3': toJson_IoTAnalyticsCustomerManagedChannelS3StorageSummary(obj.customerManagedS3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetActionSummary
 */
export interface IoTAnalyticsDatasetActionSummary {
  /**
   * @schema IoTAnalyticsDatasetActionSummary#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IoTAnalyticsDatasetActionSummary#actionType
   */
  readonly actionType?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetActionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetActionSummary(obj: IoTAnalyticsDatasetActionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'actionType': obj.actionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreStorageSummary
 */
export interface IoTAnalyticsDatastoreStorageSummary {
  /**
   * @schema IoTAnalyticsDatastoreStorageSummary#serviceManagedS3
   */
  readonly serviceManagedS3?: IoTAnalyticsServiceManagedDatastoreS3StorageSummary;

  /**
   * @schema IoTAnalyticsDatastoreStorageSummary#customerManagedS3
   */
  readonly customerManagedS3?: IoTAnalyticsCustomerManagedDatastoreS3StorageSummary;

  /**
   * @schema IoTAnalyticsDatastoreStorageSummary#iotSiteWiseMultiLayerStorage
   */
  readonly iotSiteWiseMultiLayerStorage?: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreStorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreStorageSummary(obj: IoTAnalyticsDatastoreStorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceManagedS3': toJson_IoTAnalyticsServiceManagedDatastoreS3StorageSummary(obj.serviceManagedS3),
    'customerManagedS3': toJson_IoTAnalyticsCustomerManagedDatastoreS3StorageSummary(obj.customerManagedS3),
    'iotSiteWiseMultiLayerStorage': toJson_IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary(obj.iotSiteWiseMultiLayerStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsQueryFilter
 */
export interface IoTAnalyticsQueryFilter {
  /**
   * @schema IoTAnalyticsQueryFilter#deltaTime
   */
  readonly deltaTime?: IoTAnalyticsDeltaTime;

}

/**
 * Converts an object of type 'IoTAnalyticsQueryFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsQueryFilter(obj: IoTAnalyticsQueryFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deltaTime': toJson_IoTAnalyticsDeltaTime(obj.deltaTime),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsResourceConfiguration
 */
export interface IoTAnalyticsResourceConfiguration {
  /**
   * @schema IoTAnalyticsResourceConfiguration#computeType
   */
  readonly computeType: string;

  /**
   * @schema IoTAnalyticsResourceConfiguration#volumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

}

/**
 * Converts an object of type 'IoTAnalyticsResourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsResourceConfiguration(obj: IoTAnalyticsResourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeType': obj.computeType,
    'volumeSizeInGB': obj.volumeSizeInGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsVariable
 */
export interface IoTAnalyticsVariable {
  /**
   * @schema IoTAnalyticsVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsVariable#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTAnalyticsVariable#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema IoTAnalyticsVariable#datasetContentVersionValue
   */
  readonly datasetContentVersionValue?: IoTAnalyticsDatasetContentVersionValue;

  /**
   * @schema IoTAnalyticsVariable#outputFileUriValue
   */
  readonly outputFileUriValue?: IoTAnalyticsOutputFileUriValue;

}

/**
 * Converts an object of type 'IoTAnalyticsVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsVariable(obj: IoTAnalyticsVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'stringValue': obj.stringValue,
    'doubleValue': obj.doubleValue,
    'datasetContentVersionValue': toJson_IoTAnalyticsDatasetContentVersionValue(obj.datasetContentVersionValue),
    'outputFileUriValue': toJson_IoTAnalyticsOutputFileUriValue(obj.outputFileUriValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsIotEventsDestinationConfiguration
 */
export interface IoTAnalyticsIotEventsDestinationConfiguration {
  /**
   * @schema IoTAnalyticsIotEventsDestinationConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTAnalyticsIotEventsDestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IoTAnalyticsIotEventsDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsIotEventsDestinationConfiguration(obj: IoTAnalyticsIotEventsDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsS3DestinationConfiguration
 */
export interface IoTAnalyticsS3DestinationConfiguration {
  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#key
   */
  readonly key: string;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#glueConfiguration
   */
  readonly glueConfiguration?: IoTAnalyticsGlueConfiguration;

  /**
   * @schema IoTAnalyticsS3DestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IoTAnalyticsS3DestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsS3DestinationConfiguration(obj: IoTAnalyticsS3DestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'glueConfiguration': toJson_IoTAnalyticsGlueConfiguration(obj.glueConfiguration),
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeltaTimeSessionWindowConfiguration
 */
export interface IoTAnalyticsDeltaTimeSessionWindowConfiguration {
  /**
   * @schema IoTAnalyticsDeltaTimeSessionWindowConfiguration#timeoutInMinutes
   */
  readonly timeoutInMinutes: number;

}

/**
 * Converts an object of type 'IoTAnalyticsDeltaTimeSessionWindowConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeltaTimeSessionWindowConfiguration(obj: IoTAnalyticsDeltaTimeSessionWindowConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutInMinutes': obj.timeoutInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage
 */
export interface IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage {
  /**
   * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage#bucket
   */
  readonly bucket: string;

  /**
   * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage(obj: IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsSchemaDefinition
 */
export interface IoTAnalyticsSchemaDefinition {
  /**
   * @schema IoTAnalyticsSchemaDefinition#columns
   */
  readonly columns?: IoTAnalyticsColumn[];

}

/**
 * Converts an object of type 'IoTAnalyticsSchemaDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsSchemaDefinition(obj: IoTAnalyticsSchemaDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columns': obj.columns?.map(y => toJson_IoTAnalyticsColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsPartition
 */
export interface IoTAnalyticsPartition {
  /**
   * @schema IoTAnalyticsPartition#attributeName
   */
  readonly attributeName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsPartition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsPartition(obj: IoTAnalyticsPartition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsTimestampPartition
 */
export interface IoTAnalyticsTimestampPartition {
  /**
   * @schema IoTAnalyticsTimestampPartition#attributeName
   */
  readonly attributeName: string;

  /**
   * @schema IoTAnalyticsTimestampPartition#timestampFormat
   */
  readonly timestampFormat?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsTimestampPartition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsTimestampPartition(obj: IoTAnalyticsTimestampPartition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributeName': obj.attributeName,
    'timestampFormat': obj.timestampFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsServiceManagedChannelS3StorageSummary
 */
export interface IoTAnalyticsServiceManagedChannelS3StorageSummary {
}

/**
 * Converts an object of type 'IoTAnalyticsServiceManagedChannelS3StorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsServiceManagedChannelS3StorageSummary(obj: IoTAnalyticsServiceManagedChannelS3StorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary
 */
export interface IoTAnalyticsCustomerManagedChannelS3StorageSummary {
  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedChannelS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCustomerManagedChannelS3StorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCustomerManagedChannelS3StorageSummary(obj: IoTAnalyticsCustomerManagedChannelS3StorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsServiceManagedDatastoreS3StorageSummary
 */
export interface IoTAnalyticsServiceManagedDatastoreS3StorageSummary {
}

/**
 * Converts an object of type 'IoTAnalyticsServiceManagedDatastoreS3StorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsServiceManagedDatastoreS3StorageSummary(obj: IoTAnalyticsServiceManagedDatastoreS3StorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary
 */
export interface IoTAnalyticsCustomerManagedDatastoreS3StorageSummary {
  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

  /**
   * @schema IoTAnalyticsCustomerManagedDatastoreS3StorageSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsCustomerManagedDatastoreS3StorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsCustomerManagedDatastoreS3StorageSummary(obj: IoTAnalyticsCustomerManagedDatastoreS3StorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary
 */
export interface IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary {
  /**
   * @schema IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary#customerManagedS3Storage
   */
  readonly customerManagedS3Storage?: IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary;

}

/**
 * Converts an object of type 'IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary(obj: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customerManagedS3Storage': toJson_IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary(obj.customerManagedS3Storage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDeltaTime
 */
export interface IoTAnalyticsDeltaTime {
  /**
   * @schema IoTAnalyticsDeltaTime#offsetSeconds
   */
  readonly offsetSeconds: number;

  /**
   * @schema IoTAnalyticsDeltaTime#timeExpression
   */
  readonly timeExpression: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDeltaTime' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDeltaTime(obj: IoTAnalyticsDeltaTime | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'offsetSeconds': obj.offsetSeconds,
    'timeExpression': obj.timeExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsDatasetContentVersionValue
 */
export interface IoTAnalyticsDatasetContentVersionValue {
  /**
   * @schema IoTAnalyticsDatasetContentVersionValue#datasetName
   */
  readonly datasetName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsDatasetContentVersionValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsDatasetContentVersionValue(obj: IoTAnalyticsDatasetContentVersionValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datasetName': obj.datasetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsOutputFileUriValue
 */
export interface IoTAnalyticsOutputFileUriValue {
  /**
   * @schema IoTAnalyticsOutputFileUriValue#fileName
   */
  readonly fileName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsOutputFileUriValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsOutputFileUriValue(obj: IoTAnalyticsOutputFileUriValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileName': obj.fileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsGlueConfiguration
 */
export interface IoTAnalyticsGlueConfiguration {
  /**
   * @schema IoTAnalyticsGlueConfiguration#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTAnalyticsGlueConfiguration#databaseName
   */
  readonly databaseName: string;

}

/**
 * Converts an object of type 'IoTAnalyticsGlueConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsGlueConfiguration(obj: IoTAnalyticsGlueConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableName': obj.tableName,
    'databaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsColumn
 */
export interface IoTAnalyticsColumn {
  /**
   * @schema IoTAnalyticsColumn#name
   */
  readonly name: string;

  /**
   * @schema IoTAnalyticsColumn#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'IoTAnalyticsColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsColumn(obj: IoTAnalyticsColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary
 */
export interface IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary {
  /**
   * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * Converts an object of type 'IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary(obj: IoTAnalyticsIotSiteWiseCustomerManagedDatastoreS3StorageSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
