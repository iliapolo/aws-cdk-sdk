/**
 * @schema IoTEventsCreateAlarmModelRequest
 */
export interface IoTEventsCreateAlarmModelRequest {
  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmModelDescription
   */
  readonly alarmModelDescription?: string;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#tags
   */
  readonly tags?: IoTEventsTag[];

  /**
   * @schema IoTEventsCreateAlarmModelRequest#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#severity
   */
  readonly severity?: number;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmRule
   */
  readonly alarmRule: IoTEventsAlarmRule;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmNotification
   */
  readonly alarmNotification?: IoTEventsAlarmNotification;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmEventActions
   */
  readonly alarmEventActions?: IoTEventsAlarmEventActions;

  /**
   * @schema IoTEventsCreateAlarmModelRequest#alarmCapabilities
   */
  readonly alarmCapabilities?: IoTEventsAlarmCapabilities;

}

/**
 * Converts an object of type 'IoTEventsCreateAlarmModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateAlarmModelRequest(obj: IoTEventsCreateAlarmModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelDescription': obj.alarmModelDescription,
    'roleArn': obj.roleArn,
    'tags': obj.tags?.map(y => toJson_IoTEventsTag(y)),
    'key': obj.key,
    'severity': obj.severity,
    'alarmRule': toJson_IoTEventsAlarmRule(obj.alarmRule),
    'alarmNotification': toJson_IoTEventsAlarmNotification(obj.alarmNotification),
    'alarmEventActions': toJson_IoTEventsAlarmEventActions(obj.alarmEventActions),
    'alarmCapabilities': toJson_IoTEventsAlarmCapabilities(obj.alarmCapabilities),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsCreateAlarmModelResponse
 */
export interface IoTEventsCreateAlarmModelResponse {
  /**
   * @schema IoTEventsCreateAlarmModelResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsCreateAlarmModelResponse#alarmModelArn
   */
  readonly alarmModelArn?: string;

  /**
   * @schema IoTEventsCreateAlarmModelResponse#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsCreateAlarmModelResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsCreateAlarmModelResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTEventsCreateAlarmModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateAlarmModelResponse(obj: IoTEventsCreateAlarmModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationTime': obj.creationTime,
    'alarmModelArn': obj.alarmModelArn,
    'alarmModelVersion': obj.alarmModelVersion,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsCreateDetectorModelRequest
 */
export interface IoTEventsCreateDetectorModelRequest {
  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#tags
   */
  readonly tags?: IoTEventsTag[];

  /**
   * @schema IoTEventsCreateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * Converts an object of type 'IoTEventsCreateDetectorModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateDetectorModelRequest(obj: IoTEventsCreateDetectorModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelDefinition': toJson_IoTEventsDetectorModelDefinition(obj.detectorModelDefinition),
    'detectorModelDescription': obj.detectorModelDescription,
    'key': obj.key,
    'roleArn': obj.roleArn,
    'tags': obj.tags?.map(y => toJson_IoTEventsTag(y)),
    'evaluationMethod': obj.evaluationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsCreateDetectorModelResponse
 */
export interface IoTEventsCreateDetectorModelResponse {
  /**
   * @schema IoTEventsCreateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * Converts an object of type 'IoTEventsCreateDetectorModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateDetectorModelResponse(obj: IoTEventsCreateDetectorModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelConfiguration': toJson_IoTEventsDetectorModelConfiguration(obj.detectorModelConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsCreateInputRequest
 */
export interface IoTEventsCreateInputRequest {
  /**
   * @schema IoTEventsCreateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsCreateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsCreateInputRequest#inputDefinition
   */
  readonly inputDefinition: IoTEventsInputDefinition;

  /**
   * @schema IoTEventsCreateInputRequest#tags
   */
  readonly tags?: IoTEventsTag[];

}

/**
 * Converts an object of type 'IoTEventsCreateInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateInputRequest(obj: IoTEventsCreateInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'inputDescription': obj.inputDescription,
    'inputDefinition': toJson_IoTEventsInputDefinition(obj.inputDefinition),
    'tags': obj.tags?.map(y => toJson_IoTEventsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsCreateInputResponse
 */
export interface IoTEventsCreateInputResponse {
  /**
   * @schema IoTEventsCreateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

}

/**
 * Converts an object of type 'IoTEventsCreateInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsCreateInputResponse(obj: IoTEventsCreateInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputConfiguration': toJson_IoTEventsInputConfiguration(obj.inputConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteAlarmModelRequest
 */
export interface IoTEventsDeleteAlarmModelRequest {
  /**
   * @schema IoTEventsDeleteAlarmModelRequest#alarmModelName
   */
  readonly alarmModelName: string;

}

/**
 * Converts an object of type 'IoTEventsDeleteAlarmModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteAlarmModelRequest(obj: IoTEventsDeleteAlarmModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteAlarmModelResponse
 */
export interface IoTEventsDeleteAlarmModelResponse {
}

/**
 * Converts an object of type 'IoTEventsDeleteAlarmModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteAlarmModelResponse(obj: IoTEventsDeleteAlarmModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteDetectorModelRequest
 */
export interface IoTEventsDeleteDetectorModelRequest {
  /**
   * @schema IoTEventsDeleteDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

}

/**
 * Converts an object of type 'IoTEventsDeleteDetectorModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteDetectorModelRequest(obj: IoTEventsDeleteDetectorModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteDetectorModelResponse
 */
export interface IoTEventsDeleteDetectorModelResponse {
}

/**
 * Converts an object of type 'IoTEventsDeleteDetectorModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteDetectorModelResponse(obj: IoTEventsDeleteDetectorModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteInputRequest
 */
export interface IoTEventsDeleteInputRequest {
  /**
   * @schema IoTEventsDeleteInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * Converts an object of type 'IoTEventsDeleteInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteInputRequest(obj: IoTEventsDeleteInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDeleteInputResponse
 */
export interface IoTEventsDeleteInputResponse {
}

/**
 * Converts an object of type 'IoTEventsDeleteInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDeleteInputResponse(obj: IoTEventsDeleteInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeAlarmModelRequest
 */
export interface IoTEventsDescribeAlarmModelRequest {
  /**
   * @schema IoTEventsDescribeAlarmModelRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDescribeAlarmModelRequest#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

}

/**
 * Converts an object of type 'IoTEventsDescribeAlarmModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeAlarmModelRequest(obj: IoTEventsDescribeAlarmModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelVersion': obj.alarmModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeAlarmModelResponse
 */
export interface IoTEventsDescribeAlarmModelResponse {
  /**
   * @schema IoTEventsDescribeAlarmModelResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmModelArn
   */
  readonly alarmModelArn?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmModelName
   */
  readonly alarmModelName?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmModelDescription
   */
  readonly alarmModelDescription?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#severity
   */
  readonly severity?: number;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmRule
   */
  readonly alarmRule?: IoTEventsAlarmRule;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmNotification
   */
  readonly alarmNotification?: IoTEventsAlarmNotification;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmEventActions
   */
  readonly alarmEventActions?: IoTEventsAlarmEventActions;

  /**
   * @schema IoTEventsDescribeAlarmModelResponse#alarmCapabilities
   */
  readonly alarmCapabilities?: IoTEventsAlarmCapabilities;

}

/**
 * Converts an object of type 'IoTEventsDescribeAlarmModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeAlarmModelResponse(obj: IoTEventsDescribeAlarmModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationTime': obj.creationTime,
    'alarmModelArn': obj.alarmModelArn,
    'alarmModelVersion': obj.alarmModelVersion,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'alarmModelName': obj.alarmModelName,
    'alarmModelDescription': obj.alarmModelDescription,
    'roleArn': obj.roleArn,
    'key': obj.key,
    'severity': obj.severity,
    'alarmRule': toJson_IoTEventsAlarmRule(obj.alarmRule),
    'alarmNotification': toJson_IoTEventsAlarmNotification(obj.alarmNotification),
    'alarmEventActions': toJson_IoTEventsAlarmEventActions(obj.alarmEventActions),
    'alarmCapabilities': toJson_IoTEventsAlarmCapabilities(obj.alarmCapabilities),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeDetectorModelRequest
 */
export interface IoTEventsDescribeDetectorModelRequest {
  /**
   * @schema IoTEventsDescribeDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDescribeDetectorModelRequest#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

}

/**
 * Converts an object of type 'IoTEventsDescribeDetectorModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeDetectorModelRequest(obj: IoTEventsDescribeDetectorModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelVersion': obj.detectorModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeDetectorModelResponse
 */
export interface IoTEventsDescribeDetectorModelResponse {
  /**
   * @schema IoTEventsDescribeDetectorModelResponse#detectorModel
   */
  readonly detectorModel?: IoTEventsDetectorModel;

}

/**
 * Converts an object of type 'IoTEventsDescribeDetectorModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeDetectorModelResponse(obj: IoTEventsDescribeDetectorModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModel': toJson_IoTEventsDetectorModel(obj.detectorModel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeDetectorModelAnalysisRequest
 */
export interface IoTEventsDescribeDetectorModelAnalysisRequest {
  /**
   * @schema IoTEventsDescribeDetectorModelAnalysisRequest#analysisId
   */
  readonly analysisId: string;

}

/**
 * Converts an object of type 'IoTEventsDescribeDetectorModelAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeDetectorModelAnalysisRequest(obj: IoTEventsDescribeDetectorModelAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analysisId': obj.analysisId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeDetectorModelAnalysisResponse
 */
export interface IoTEventsDescribeDetectorModelAnalysisResponse {
  /**
   * @schema IoTEventsDescribeDetectorModelAnalysisResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTEventsDescribeDetectorModelAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeDetectorModelAnalysisResponse(obj: IoTEventsDescribeDetectorModelAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeInputRequest
 */
export interface IoTEventsDescribeInputRequest {
  /**
   * @schema IoTEventsDescribeInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * Converts an object of type 'IoTEventsDescribeInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeInputRequest(obj: IoTEventsDescribeInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeInputResponse
 */
export interface IoTEventsDescribeInputResponse {
  /**
   * @schema IoTEventsDescribeInputResponse#input
   */
  readonly input?: IoTEventsInput;

}

/**
 * Converts an object of type 'IoTEventsDescribeInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeInputResponse(obj: IoTEventsDescribeInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'input': toJson_IoTEventsInput(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeLoggingOptionsRequest
 */
export interface IoTEventsDescribeLoggingOptionsRequest {
}

/**
 * Converts an object of type 'IoTEventsDescribeLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeLoggingOptionsRequest(obj: IoTEventsDescribeLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDescribeLoggingOptionsResponse
 */
export interface IoTEventsDescribeLoggingOptionsResponse {
  /**
   * @schema IoTEventsDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: IoTEventsLoggingOptions;

}

/**
 * Converts an object of type 'IoTEventsDescribeLoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDescribeLoggingOptionsResponse(obj: IoTEventsDescribeLoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTEventsLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsGetDetectorModelAnalysisResultsRequest
 */
export interface IoTEventsGetDetectorModelAnalysisResultsRequest {
  /**
   * @schema IoTEventsGetDetectorModelAnalysisResultsRequest#analysisId
   */
  readonly analysisId: string;

  /**
   * @schema IoTEventsGetDetectorModelAnalysisResultsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsGetDetectorModelAnalysisResultsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsGetDetectorModelAnalysisResultsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsGetDetectorModelAnalysisResultsRequest(obj: IoTEventsGetDetectorModelAnalysisResultsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analysisId': obj.analysisId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsGetDetectorModelAnalysisResultsResponse
 */
export interface IoTEventsGetDetectorModelAnalysisResultsResponse {
  /**
   * @schema IoTEventsGetDetectorModelAnalysisResultsResponse#analysisResults
   */
  readonly analysisResults?: IoTEventsAnalysisResult[];

  /**
   * @schema IoTEventsGetDetectorModelAnalysisResultsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsGetDetectorModelAnalysisResultsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsGetDetectorModelAnalysisResultsResponse(obj: IoTEventsGetDetectorModelAnalysisResultsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analysisResults': obj.analysisResults?.map(y => toJson_IoTEventsAnalysisResult(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListAlarmModelVersionsRequest
 */
export interface IoTEventsListAlarmModelVersionsRequest {
  /**
   * @schema IoTEventsListAlarmModelVersionsRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsListAlarmModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListAlarmModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsListAlarmModelVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListAlarmModelVersionsRequest(obj: IoTEventsListAlarmModelVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListAlarmModelVersionsResponse
 */
export interface IoTEventsListAlarmModelVersionsResponse {
  /**
   * @schema IoTEventsListAlarmModelVersionsResponse#alarmModelVersionSummaries
   */
  readonly alarmModelVersionSummaries?: IoTEventsAlarmModelVersionSummary[];

  /**
   * @schema IoTEventsListAlarmModelVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListAlarmModelVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListAlarmModelVersionsResponse(obj: IoTEventsListAlarmModelVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelVersionSummaries': obj.alarmModelVersionSummaries?.map(y => toJson_IoTEventsAlarmModelVersionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListAlarmModelsRequest
 */
export interface IoTEventsListAlarmModelsRequest {
  /**
   * @schema IoTEventsListAlarmModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListAlarmModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsListAlarmModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListAlarmModelsRequest(obj: IoTEventsListAlarmModelsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsListAlarmModelsResponse
 */
export interface IoTEventsListAlarmModelsResponse {
  /**
   * @schema IoTEventsListAlarmModelsResponse#alarmModelSummaries
   */
  readonly alarmModelSummaries?: IoTEventsAlarmModelSummary[];

  /**
   * @schema IoTEventsListAlarmModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListAlarmModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListAlarmModelsResponse(obj: IoTEventsListAlarmModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelSummaries': obj.alarmModelSummaries?.map(y => toJson_IoTEventsAlarmModelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListDetectorModelVersionsRequest
 */
export interface IoTEventsListDetectorModelVersionsRequest {
  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsListDetectorModelVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListDetectorModelVersionsRequest(obj: IoTEventsListDetectorModelVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListDetectorModelVersionsResponse
 */
export interface IoTEventsListDetectorModelVersionsResponse {
  /**
   * @schema IoTEventsListDetectorModelVersionsResponse#detectorModelVersionSummaries
   */
  readonly detectorModelVersionSummaries?: IoTEventsDetectorModelVersionSummary[];

  /**
   * @schema IoTEventsListDetectorModelVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListDetectorModelVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListDetectorModelVersionsResponse(obj: IoTEventsListDetectorModelVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelVersionSummaries': obj.detectorModelVersionSummaries?.map(y => toJson_IoTEventsDetectorModelVersionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListDetectorModelsRequest
 */
export interface IoTEventsListDetectorModelsRequest {
  /**
   * @schema IoTEventsListDetectorModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListDetectorModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsListDetectorModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListDetectorModelsRequest(obj: IoTEventsListDetectorModelsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsListDetectorModelsResponse
 */
export interface IoTEventsListDetectorModelsResponse {
  /**
   * @schema IoTEventsListDetectorModelsResponse#detectorModelSummaries
   */
  readonly detectorModelSummaries?: IoTEventsDetectorModelSummary[];

  /**
   * @schema IoTEventsListDetectorModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListDetectorModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListDetectorModelsResponse(obj: IoTEventsListDetectorModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelSummaries': obj.detectorModelSummaries?.map(y => toJson_IoTEventsDetectorModelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListInputRoutingsRequest
 */
export interface IoTEventsListInputRoutingsRequest {
  /**
   * @schema IoTEventsListInputRoutingsRequest#inputIdentifier
   */
  readonly inputIdentifier: IoTEventsInputIdentifier;

  /**
   * @schema IoTEventsListInputRoutingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTEventsListInputRoutingsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListInputRoutingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListInputRoutingsRequest(obj: IoTEventsListInputRoutingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputIdentifier': toJson_IoTEventsInputIdentifier(obj.inputIdentifier),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListInputRoutingsResponse
 */
export interface IoTEventsListInputRoutingsResponse {
  /**
   * @schema IoTEventsListInputRoutingsResponse#routedResources
   */
  readonly routedResources?: IoTEventsRoutedResource[];

  /**
   * @schema IoTEventsListInputRoutingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListInputRoutingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListInputRoutingsResponse(obj: IoTEventsListInputRoutingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'routedResources': obj.routedResources?.map(y => toJson_IoTEventsRoutedResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListInputsRequest
 */
export interface IoTEventsListInputsRequest {
  /**
   * @schema IoTEventsListInputsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListInputsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsListInputsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListInputsRequest(obj: IoTEventsListInputsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsListInputsResponse
 */
export interface IoTEventsListInputsResponse {
  /**
   * @schema IoTEventsListInputsResponse#inputSummaries
   */
  readonly inputSummaries?: IoTEventsInputSummary[];

  /**
   * @schema IoTEventsListInputsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsListInputsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListInputsResponse(obj: IoTEventsListInputsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputSummaries': obj.inputSummaries?.map(y => toJson_IoTEventsInputSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListTagsForResourceRequest
 */
export interface IoTEventsListTagsForResourceRequest {
  /**
   * @schema IoTEventsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IoTEventsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListTagsForResourceRequest(obj: IoTEventsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsListTagsForResourceResponse
 */
export interface IoTEventsListTagsForResourceResponse {
  /**
   * @schema IoTEventsListTagsForResourceResponse#tags
   */
  readonly tags?: IoTEventsTag[];

}

/**
 * Converts an object of type 'IoTEventsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsListTagsForResourceResponse(obj: IoTEventsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IoTEventsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsPutLoggingOptionsRequest
 */
export interface IoTEventsPutLoggingOptionsRequest {
  /**
   * @schema IoTEventsPutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTEventsLoggingOptions;

}

/**
 * Converts an object of type 'IoTEventsPutLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsPutLoggingOptionsRequest(obj: IoTEventsPutLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTEventsLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsStartDetectorModelAnalysisRequest
 */
export interface IoTEventsStartDetectorModelAnalysisRequest {
  /**
   * @schema IoTEventsStartDetectorModelAnalysisRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: IoTEventsDetectorModelDefinition;

}

/**
 * Converts an object of type 'IoTEventsStartDetectorModelAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsStartDetectorModelAnalysisRequest(obj: IoTEventsStartDetectorModelAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelDefinition': toJson_IoTEventsDetectorModelDefinition(obj.detectorModelDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsStartDetectorModelAnalysisResponse
 */
export interface IoTEventsStartDetectorModelAnalysisResponse {
  /**
   * @schema IoTEventsStartDetectorModelAnalysisResponse#analysisId
   */
  readonly analysisId?: string;

}

/**
 * Converts an object of type 'IoTEventsStartDetectorModelAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsStartDetectorModelAnalysisResponse(obj: IoTEventsStartDetectorModelAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'analysisId': obj.analysisId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsTagResourceRequest
 */
export interface IoTEventsTagResourceRequest {
  /**
   * @schema IoTEventsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTEventsTagResourceRequest#tags
   */
  readonly tags: IoTEventsTag[];

}

/**
 * Converts an object of type 'IoTEventsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsTagResourceRequest(obj: IoTEventsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_IoTEventsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsTagResourceResponse
 */
export interface IoTEventsTagResourceResponse {
}

/**
 * Converts an object of type 'IoTEventsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsTagResourceResponse(obj: IoTEventsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUntagResourceRequest
 */
export interface IoTEventsUntagResourceRequest {
  /**
   * @schema IoTEventsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTEventsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoTEventsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUntagResourceRequest(obj: IoTEventsUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsUntagResourceResponse
 */
export interface IoTEventsUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTEventsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUntagResourceResponse(obj: IoTEventsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateAlarmModelRequest
 */
export interface IoTEventsUpdateAlarmModelRequest {
  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmModelDescription
   */
  readonly alarmModelDescription?: string;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#severity
   */
  readonly severity?: number;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmRule
   */
  readonly alarmRule: IoTEventsAlarmRule;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmNotification
   */
  readonly alarmNotification?: IoTEventsAlarmNotification;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmEventActions
   */
  readonly alarmEventActions?: IoTEventsAlarmEventActions;

  /**
   * @schema IoTEventsUpdateAlarmModelRequest#alarmCapabilities
   */
  readonly alarmCapabilities?: IoTEventsAlarmCapabilities;

}

/**
 * Converts an object of type 'IoTEventsUpdateAlarmModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateAlarmModelRequest(obj: IoTEventsUpdateAlarmModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelDescription': obj.alarmModelDescription,
    'roleArn': obj.roleArn,
    'severity': obj.severity,
    'alarmRule': toJson_IoTEventsAlarmRule(obj.alarmRule),
    'alarmNotification': toJson_IoTEventsAlarmNotification(obj.alarmNotification),
    'alarmEventActions': toJson_IoTEventsAlarmEventActions(obj.alarmEventActions),
    'alarmCapabilities': toJson_IoTEventsAlarmCapabilities(obj.alarmCapabilities),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateAlarmModelResponse
 */
export interface IoTEventsUpdateAlarmModelResponse {
  /**
   * @schema IoTEventsUpdateAlarmModelResponse#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsUpdateAlarmModelResponse#alarmModelArn
   */
  readonly alarmModelArn?: string;

  /**
   * @schema IoTEventsUpdateAlarmModelResponse#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsUpdateAlarmModelResponse#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsUpdateAlarmModelResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTEventsUpdateAlarmModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateAlarmModelResponse(obj: IoTEventsUpdateAlarmModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationTime': obj.creationTime,
    'alarmModelArn': obj.alarmModelArn,
    'alarmModelVersion': obj.alarmModelVersion,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateDetectorModelRequest
 */
export interface IoTEventsUpdateDetectorModelRequest {
  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * Converts an object of type 'IoTEventsUpdateDetectorModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateDetectorModelRequest(obj: IoTEventsUpdateDetectorModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelDefinition': toJson_IoTEventsDetectorModelDefinition(obj.detectorModelDefinition),
    'detectorModelDescription': obj.detectorModelDescription,
    'roleArn': obj.roleArn,
    'evaluationMethod': obj.evaluationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateDetectorModelResponse
 */
export interface IoTEventsUpdateDetectorModelResponse {
  /**
   * @schema IoTEventsUpdateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * Converts an object of type 'IoTEventsUpdateDetectorModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateDetectorModelResponse(obj: IoTEventsUpdateDetectorModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelConfiguration': toJson_IoTEventsDetectorModelConfiguration(obj.detectorModelConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateInputRequest
 */
export interface IoTEventsUpdateInputRequest {
  /**
   * @schema IoTEventsUpdateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsUpdateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsUpdateInputRequest#inputDefinition
   */
  readonly inputDefinition: IoTEventsInputDefinition;

}

/**
 * Converts an object of type 'IoTEventsUpdateInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateInputRequest(obj: IoTEventsUpdateInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'inputDescription': obj.inputDescription,
    'inputDefinition': toJson_IoTEventsInputDefinition(obj.inputDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsUpdateInputResponse
 */
export interface IoTEventsUpdateInputResponse {
  /**
   * @schema IoTEventsUpdateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

}

/**
 * Converts an object of type 'IoTEventsUpdateInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsUpdateInputResponse(obj: IoTEventsUpdateInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputConfiguration': toJson_IoTEventsInputConfiguration(obj.inputConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsTag
 */
export interface IoTEventsTag {
  /**
   * @schema IoTEventsTag#key
   */
  readonly key: string;

  /**
   * @schema IoTEventsTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTEventsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsTag(obj: IoTEventsTag | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsAlarmRule
 */
export interface IoTEventsAlarmRule {
  /**
   * @schema IoTEventsAlarmRule#simpleRule
   */
  readonly simpleRule?: IoTEventsSimpleRule;

}

/**
 * Converts an object of type 'IoTEventsAlarmRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmRule(obj: IoTEventsAlarmRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleRule': toJson_IoTEventsSimpleRule(obj.simpleRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmNotification
 */
export interface IoTEventsAlarmNotification {
  /**
   * @schema IoTEventsAlarmNotification#notificationActions
   */
  readonly notificationActions?: IoTEventsNotificationAction[];

}

/**
 * Converts an object of type 'IoTEventsAlarmNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmNotification(obj: IoTEventsAlarmNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notificationActions': obj.notificationActions?.map(y => toJson_IoTEventsNotificationAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmEventActions
 */
export interface IoTEventsAlarmEventActions {
  /**
   * @schema IoTEventsAlarmEventActions#alarmActions
   */
  readonly alarmActions?: IoTEventsAlarmAction[];

}

/**
 * Converts an object of type 'IoTEventsAlarmEventActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmEventActions(obj: IoTEventsAlarmEventActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmActions': obj.alarmActions?.map(y => toJson_IoTEventsAlarmAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmCapabilities
 */
export interface IoTEventsAlarmCapabilities {
  /**
   * @schema IoTEventsAlarmCapabilities#initializationConfiguration
   */
  readonly initializationConfiguration?: IoTEventsInitializationConfiguration;

  /**
   * @schema IoTEventsAlarmCapabilities#acknowledgeFlow
   */
  readonly acknowledgeFlow?: IoTEventsAcknowledgeFlow;

}

/**
 * Converts an object of type 'IoTEventsAlarmCapabilities' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmCapabilities(obj: IoTEventsAlarmCapabilities | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'initializationConfiguration': toJson_IoTEventsInitializationConfiguration(obj.initializationConfiguration),
    'acknowledgeFlow': toJson_IoTEventsAcknowledgeFlow(obj.acknowledgeFlow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorModelDefinition
 */
export interface IoTEventsDetectorModelDefinition {
  /**
   * @schema IoTEventsDetectorModelDefinition#states
   */
  readonly states: IoTEventsState[];

  /**
   * @schema IoTEventsDetectorModelDefinition#initialStateName
   */
  readonly initialStateName: string;

}

/**
 * Converts an object of type 'IoTEventsDetectorModelDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorModelDefinition(obj: IoTEventsDetectorModelDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'states': obj.states?.map(y => toJson_IoTEventsState(y)),
    'initialStateName': obj.initialStateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorModelConfiguration
 */
export interface IoTEventsDetectorModelConfiguration {
  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * Converts an object of type 'IoTEventsDetectorModelConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorModelConfiguration(obj: IoTEventsDetectorModelConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelVersion': obj.detectorModelVersion,
    'detectorModelDescription': obj.detectorModelDescription,
    'detectorModelArn': obj.detectorModelArn,
    'roleArn': obj.roleArn,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
    'key': obj.key,
    'evaluationMethod': obj.evaluationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInputDefinition
 */
export interface IoTEventsInputDefinition {
  /**
   * @schema IoTEventsInputDefinition#attributes
   */
  readonly attributes: IoTEventsAttribute[];

}

/**
 * Converts an object of type 'IoTEventsInputDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInputDefinition(obj: IoTEventsInputDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => toJson_IoTEventsAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInputConfiguration
 */
export interface IoTEventsInputConfiguration {
  /**
   * @schema IoTEventsInputConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsInputConfiguration#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsInputConfiguration#inputArn
   */
  readonly inputArn: string;

  /**
   * @schema IoTEventsInputConfiguration#creationTime
   */
  readonly creationTime: string;

  /**
   * @schema IoTEventsInputConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime: string;

  /**
   * @schema IoTEventsInputConfiguration#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'IoTEventsInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInputConfiguration(obj: IoTEventsInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'inputDescription': obj.inputDescription,
    'inputArn': obj.inputArn,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorModel
 */
export interface IoTEventsDetectorModel {
  /**
   * @schema IoTEventsDetectorModel#detectorModelDefinition
   */
  readonly detectorModelDefinition?: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsDetectorModel#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * Converts an object of type 'IoTEventsDetectorModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorModel(obj: IoTEventsDetectorModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelDefinition': toJson_IoTEventsDetectorModelDefinition(obj.detectorModelDefinition),
    'detectorModelConfiguration': toJson_IoTEventsDetectorModelConfiguration(obj.detectorModelConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInput
 */
export interface IoTEventsInput {
  /**
   * @schema IoTEventsInput#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

  /**
   * @schema IoTEventsInput#inputDefinition
   */
  readonly inputDefinition?: IoTEventsInputDefinition;

}

/**
 * Converts an object of type 'IoTEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInput(obj: IoTEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputConfiguration': toJson_IoTEventsInputConfiguration(obj.inputConfiguration),
    'inputDefinition': toJson_IoTEventsInputDefinition(obj.inputDefinition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsLoggingOptions
 */
export interface IoTEventsLoggingOptions {
  /**
   * @schema IoTEventsLoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsLoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema IoTEventsLoggingOptions#enabled
   */
  readonly enabled: boolean;

  /**
   * @schema IoTEventsLoggingOptions#detectorDebugOptions
   */
  readonly detectorDebugOptions?: IoTEventsDetectorDebugOption[];

}

/**
 * Converts an object of type 'IoTEventsLoggingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsLoggingOptions(obj: IoTEventsLoggingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'level': obj.level,
    'enabled': obj.enabled,
    'detectorDebugOptions': obj.detectorDebugOptions?.map(y => toJson_IoTEventsDetectorDebugOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAnalysisResult
 */
export interface IoTEventsAnalysisResult {
  /**
   * @schema IoTEventsAnalysisResult#type
   */
  readonly type?: string;

  /**
   * @schema IoTEventsAnalysisResult#level
   */
  readonly level?: string;

  /**
   * @schema IoTEventsAnalysisResult#message
   */
  readonly message?: string;

  /**
   * @schema IoTEventsAnalysisResult#locations
   */
  readonly locations?: IoTEventsAnalysisResultLocation[];

}

/**
 * Converts an object of type 'IoTEventsAnalysisResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAnalysisResult(obj: IoTEventsAnalysisResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'level': obj.level,
    'message': obj.message,
    'locations': obj.locations?.map(y => toJson_IoTEventsAnalysisResultLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmModelVersionSummary
 */
export interface IoTEventsAlarmModelVersionSummary {
  /**
   * @schema IoTEventsAlarmModelVersionSummary#alarmModelName
   */
  readonly alarmModelName?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#alarmModelArn
   */
  readonly alarmModelArn?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsAlarmModelVersionSummary#statusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'IoTEventsAlarmModelVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmModelVersionSummary(obj: IoTEventsAlarmModelVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelArn': obj.alarmModelArn,
    'alarmModelVersion': obj.alarmModelVersion,
    'roleArn': obj.roleArn,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmModelSummary
 */
export interface IoTEventsAlarmModelSummary {
  /**
   * @schema IoTEventsAlarmModelSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsAlarmModelSummary#alarmModelDescription
   */
  readonly alarmModelDescription?: string;

  /**
   * @schema IoTEventsAlarmModelSummary#alarmModelName
   */
  readonly alarmModelName?: string;

}

/**
 * Converts an object of type 'IoTEventsAlarmModelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmModelSummary(obj: IoTEventsAlarmModelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationTime': obj.creationTime,
    'alarmModelDescription': obj.alarmModelDescription,
    'alarmModelName': obj.alarmModelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorModelVersionSummary
 */
export interface IoTEventsDetectorModelVersionSummary {
  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * Converts an object of type 'IoTEventsDetectorModelVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorModelVersionSummary(obj: IoTEventsDetectorModelVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelVersion': obj.detectorModelVersion,
    'detectorModelArn': obj.detectorModelArn,
    'roleArn': obj.roleArn,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
    'evaluationMethod': obj.evaluationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorModelSummary
 */
export interface IoTEventsDetectorModelSummary {
  /**
   * @schema IoTEventsDetectorModelSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelSummary#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsDetectorModelSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'IoTEventsDetectorModelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorModelSummary(obj: IoTEventsDetectorModelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'detectorModelDescription': obj.detectorModelDescription,
    'creationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInputIdentifier
 */
export interface IoTEventsInputIdentifier {
  /**
   * @schema IoTEventsInputIdentifier#iotEventsInputIdentifier
   */
  readonly iotEventsInputIdentifier?: IoTEventsIotEventsInputIdentifier;

  /**
   * @schema IoTEventsInputIdentifier#iotSiteWiseInputIdentifier
   */
  readonly iotSiteWiseInputIdentifier?: IoTEventsIotSiteWiseInputIdentifier;

}

/**
 * Converts an object of type 'IoTEventsInputIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInputIdentifier(obj: IoTEventsInputIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'iotEventsInputIdentifier': toJson_IoTEventsIotEventsInputIdentifier(obj.iotEventsInputIdentifier),
    'iotSiteWiseInputIdentifier': toJson_IoTEventsIotSiteWiseInputIdentifier(obj.iotSiteWiseInputIdentifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsRoutedResource
 */
export interface IoTEventsRoutedResource {
  /**
   * @schema IoTEventsRoutedResource#name
   */
  readonly name?: string;

  /**
   * @schema IoTEventsRoutedResource#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTEventsRoutedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsRoutedResource(obj: IoTEventsRoutedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInputSummary
 */
export interface IoTEventsInputSummary {
  /**
   * @schema IoTEventsInputSummary#inputName
   */
  readonly inputName?: string;

  /**
   * @schema IoTEventsInputSummary#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsInputSummary#inputArn
   */
  readonly inputArn?: string;

  /**
   * @schema IoTEventsInputSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsInputSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsInputSummary#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTEventsInputSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInputSummary(obj: IoTEventsInputSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'inputDescription': obj.inputDescription,
    'inputArn': obj.inputArn,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSimpleRule
 */
export interface IoTEventsSimpleRule {
  /**
   * @schema IoTEventsSimpleRule#inputProperty
   */
  readonly inputProperty: string;

  /**
   * @schema IoTEventsSimpleRule#comparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema IoTEventsSimpleRule#threshold
   */
  readonly threshold: string;

}

/**
 * Converts an object of type 'IoTEventsSimpleRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSimpleRule(obj: IoTEventsSimpleRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputProperty': obj.inputProperty,
    'comparisonOperator': obj.comparisonOperator,
    'threshold': obj.threshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsNotificationAction
 */
export interface IoTEventsNotificationAction {
  /**
   * @schema IoTEventsNotificationAction#action
   */
  readonly action: IoTEventsNotificationTargetActions;

  /**
   * @schema IoTEventsNotificationAction#smsConfigurations
   */
  readonly smsConfigurations?: IoTEventsSmsConfiguration[];

  /**
   * @schema IoTEventsNotificationAction#emailConfigurations
   */
  readonly emailConfigurations?: IoTEventsEmailConfiguration[];

}

/**
 * Converts an object of type 'IoTEventsNotificationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsNotificationAction(obj: IoTEventsNotificationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_IoTEventsNotificationTargetActions(obj.action),
    'smsConfigurations': obj.smsConfigurations?.map(y => toJson_IoTEventsSmsConfiguration(y)),
    'emailConfigurations': obj.emailConfigurations?.map(y => toJson_IoTEventsEmailConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAlarmAction
 */
export interface IoTEventsAlarmAction {
  /**
   * @schema IoTEventsAlarmAction#sns
   */
  readonly sns?: IoTEventsSnsTopicPublishAction;

  /**
   * @schema IoTEventsAlarmAction#iotTopicPublish
   */
  readonly iotTopicPublish?: IoTEventsIotTopicPublishAction;

  /**
   * @schema IoTEventsAlarmAction#lambda
   */
  readonly lambda?: IoTEventsLambdaAction;

  /**
   * @schema IoTEventsAlarmAction#iotEvents
   */
  readonly iotEvents?: IoTEventsIotEventsAction;

  /**
   * @schema IoTEventsAlarmAction#sqs
   */
  readonly sqs?: IoTEventsSqsAction;

  /**
   * @schema IoTEventsAlarmAction#firehose
   */
  readonly firehose?: IoTEventsFirehoseAction;

  /**
   * @schema IoTEventsAlarmAction#dynamoDB
   */
  readonly dynamoDb?: IoTEventsDynamoDbAction;

  /**
   * @schema IoTEventsAlarmAction#dynamoDBv2
   */
  readonly dynamoDBv2?: IoTEventsDynamoDBv2Action;

  /**
   * @schema IoTEventsAlarmAction#iotSiteWise
   */
  readonly iotSiteWise?: IoTEventsIotSiteWiseAction;

}

/**
 * Converts an object of type 'IoTEventsAlarmAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAlarmAction(obj: IoTEventsAlarmAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sns': toJson_IoTEventsSnsTopicPublishAction(obj.sns),
    'iotTopicPublish': toJson_IoTEventsIotTopicPublishAction(obj.iotTopicPublish),
    'lambda': toJson_IoTEventsLambdaAction(obj.lambda),
    'iotEvents': toJson_IoTEventsIotEventsAction(obj.iotEvents),
    'sqs': toJson_IoTEventsSqsAction(obj.sqs),
    'firehose': toJson_IoTEventsFirehoseAction(obj.firehose),
    'dynamoDB': toJson_IoTEventsDynamoDbAction(obj.dynamoDb),
    'dynamoDBv2': toJson_IoTEventsDynamoDBv2Action(obj.dynamoDBv2),
    'iotSiteWise': toJson_IoTEventsIotSiteWiseAction(obj.iotSiteWise),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsInitializationConfiguration
 */
export interface IoTEventsInitializationConfiguration {
  /**
   * @schema IoTEventsInitializationConfiguration#disabledOnInitialization
   */
  readonly disabledOnInitialization: boolean;

}

/**
 * Converts an object of type 'IoTEventsInitializationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsInitializationConfiguration(obj: IoTEventsInitializationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disabledOnInitialization': obj.disabledOnInitialization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAcknowledgeFlow
 */
export interface IoTEventsAcknowledgeFlow {
  /**
   * @schema IoTEventsAcknowledgeFlow#enabled
   */
  readonly enabled: boolean;

}

/**
 * Converts an object of type 'IoTEventsAcknowledgeFlow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAcknowledgeFlow(obj: IoTEventsAcknowledgeFlow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsState
 */
export interface IoTEventsState {
  /**
   * @schema IoTEventsState#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsState#onInput
   */
  readonly onInput?: IoTEventsOnInputLifecycle;

  /**
   * @schema IoTEventsState#onEnter
   */
  readonly onEnter?: IoTEventsOnEnterLifecycle;

  /**
   * @schema IoTEventsState#onExit
   */
  readonly onExit?: IoTEventsOnExitLifecycle;

}

/**
 * Converts an object of type 'IoTEventsState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsState(obj: IoTEventsState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateName': obj.stateName,
    'onInput': toJson_IoTEventsOnInputLifecycle(obj.onInput),
    'onEnter': toJson_IoTEventsOnEnterLifecycle(obj.onEnter),
    'onExit': toJson_IoTEventsOnExitLifecycle(obj.onExit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAttribute
 */
export interface IoTEventsAttribute {
  /**
   * @schema IoTEventsAttribute#jsonPath
   */
  readonly jsonPath: string;

}

/**
 * Converts an object of type 'IoTEventsAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAttribute(obj: IoTEventsAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jsonPath': obj.jsonPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDetectorDebugOption
 */
export interface IoTEventsDetectorDebugOption {
  /**
   * @schema IoTEventsDetectorDebugOption#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDetectorDebugOption#keyValue
   */
  readonly keyValue?: string;

}

/**
 * Converts an object of type 'IoTEventsDetectorDebugOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDetectorDebugOption(obj: IoTEventsDetectorDebugOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'keyValue': obj.keyValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAnalysisResultLocation
 */
export interface IoTEventsAnalysisResultLocation {
  /**
   * @schema IoTEventsAnalysisResultLocation#path
   */
  readonly path?: string;

}

/**
 * Converts an object of type 'IoTEventsAnalysisResultLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAnalysisResultLocation(obj: IoTEventsAnalysisResultLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotEventsInputIdentifier
 */
export interface IoTEventsIotEventsInputIdentifier {
  /**
   * @schema IoTEventsIotEventsInputIdentifier#inputName
   */
  readonly inputName: string;

}

/**
 * Converts an object of type 'IoTEventsIotEventsInputIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotEventsInputIdentifier(obj: IoTEventsIotEventsInputIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotSiteWiseInputIdentifier
 */
export interface IoTEventsIotSiteWiseInputIdentifier {
  /**
   * @schema IoTEventsIotSiteWiseInputIdentifier#iotSiteWiseAssetModelPropertyIdentifier
   */
  readonly iotSiteWiseAssetModelPropertyIdentifier?: IoTEventsIotSiteWiseAssetModelPropertyIdentifier;

}

/**
 * Converts an object of type 'IoTEventsIotSiteWiseInputIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotSiteWiseInputIdentifier(obj: IoTEventsIotSiteWiseInputIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'iotSiteWiseAssetModelPropertyIdentifier': toJson_IoTEventsIotSiteWiseAssetModelPropertyIdentifier(obj.iotSiteWiseAssetModelPropertyIdentifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsNotificationTargetActions
 */
export interface IoTEventsNotificationTargetActions {
  /**
   * @schema IoTEventsNotificationTargetActions#lambdaAction
   */
  readonly lambdaAction?: IoTEventsLambdaAction;

}

/**
 * Converts an object of type 'IoTEventsNotificationTargetActions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsNotificationTargetActions(obj: IoTEventsNotificationTargetActions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaAction': toJson_IoTEventsLambdaAction(obj.lambdaAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSmsConfiguration
 */
export interface IoTEventsSmsConfiguration {
  /**
   * @schema IoTEventsSmsConfiguration#senderId
   */
  readonly senderId?: string;

  /**
   * @schema IoTEventsSmsConfiguration#additionalMessage
   */
  readonly additionalMessage?: string;

  /**
   * @schema IoTEventsSmsConfiguration#recipients
   */
  readonly recipients: IoTEventsRecipientDetail[];

}

/**
 * Converts an object of type 'IoTEventsSmsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSmsConfiguration(obj: IoTEventsSmsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'senderId': obj.senderId,
    'additionalMessage': obj.additionalMessage,
    'recipients': obj.recipients?.map(y => toJson_IoTEventsRecipientDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsEmailConfiguration
 */
export interface IoTEventsEmailConfiguration {
  /**
   * @schema IoTEventsEmailConfiguration#from
   */
  readonly from: string;

  /**
   * @schema IoTEventsEmailConfiguration#content
   */
  readonly content?: IoTEventsEmailContent;

  /**
   * @schema IoTEventsEmailConfiguration#recipients
   */
  readonly recipients: IoTEventsEmailRecipients;

}

/**
 * Converts an object of type 'IoTEventsEmailConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsEmailConfiguration(obj: IoTEventsEmailConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'from': obj.from,
    'content': toJson_IoTEventsEmailContent(obj.content),
    'recipients': toJson_IoTEventsEmailRecipients(obj.recipients),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSnsTopicPublishAction
 */
export interface IoTEventsSnsTopicPublishAction {
  /**
   * @schema IoTEventsSnsTopicPublishAction#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema IoTEventsSnsTopicPublishAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsSnsTopicPublishAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSnsTopicPublishAction(obj: IoTEventsSnsTopicPublishAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotTopicPublishAction
 */
export interface IoTEventsIotTopicPublishAction {
  /**
   * @schema IoTEventsIotTopicPublishAction#mqttTopic
   */
  readonly mqttTopic: string;

  /**
   * @schema IoTEventsIotTopicPublishAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsIotTopicPublishAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotTopicPublishAction(obj: IoTEventsIotTopicPublishAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mqttTopic': obj.mqttTopic,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsLambdaAction
 */
export interface IoTEventsLambdaAction {
  /**
   * @schema IoTEventsLambdaAction#functionArn
   */
  readonly functionArn: string;

  /**
   * @schema IoTEventsLambdaAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsLambdaAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsLambdaAction(obj: IoTEventsLambdaAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionArn': obj.functionArn,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotEventsAction
 */
export interface IoTEventsIotEventsAction {
  /**
   * @schema IoTEventsIotEventsAction#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsIotEventsAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsIotEventsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotEventsAction(obj: IoTEventsIotEventsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSqsAction
 */
export interface IoTEventsSqsAction {
  /**
   * @schema IoTEventsSqsAction#queueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema IoTEventsSqsAction#useBase64
   */
  readonly useBase64?: boolean;

  /**
   * @schema IoTEventsSqsAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsSqsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSqsAction(obj: IoTEventsSqsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'queueUrl': obj.queueUrl,
    'useBase64': obj.useBase64,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsFirehoseAction
 */
export interface IoTEventsFirehoseAction {
  /**
   * @schema IoTEventsFirehoseAction#deliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema IoTEventsFirehoseAction#separator
   */
  readonly separator?: string;

  /**
   * @schema IoTEventsFirehoseAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsFirehoseAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsFirehoseAction(obj: IoTEventsFirehoseAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deliveryStreamName': obj.deliveryStreamName,
    'separator': obj.separator,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDynamoDbAction
 */
export interface IoTEventsDynamoDbAction {
  /**
   * @schema IoTEventsDynamoDbAction#hashKeyType
   */
  readonly hashKeyType?: string;

  /**
   * @schema IoTEventsDynamoDbAction#hashKeyField
   */
  readonly hashKeyField: string;

  /**
   * @schema IoTEventsDynamoDbAction#hashKeyValue
   */
  readonly hashKeyValue: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyType
   */
  readonly rangeKeyType?: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyField
   */
  readonly rangeKeyField?: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyValue
   */
  readonly rangeKeyValue?: string;

  /**
   * @schema IoTEventsDynamoDbAction#operation
   */
  readonly operation?: string;

  /**
   * @schema IoTEventsDynamoDbAction#payloadField
   */
  readonly payloadField?: string;

  /**
   * @schema IoTEventsDynamoDbAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTEventsDynamoDbAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsDynamoDbAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDynamoDbAction(obj: IoTEventsDynamoDbAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hashKeyType': obj.hashKeyType,
    'hashKeyField': obj.hashKeyField,
    'hashKeyValue': obj.hashKeyValue,
    'rangeKeyType': obj.rangeKeyType,
    'rangeKeyField': obj.rangeKeyField,
    'rangeKeyValue': obj.rangeKeyValue,
    'operation': obj.operation,
    'payloadField': obj.payloadField,
    'tableName': obj.tableName,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDynamoDBv2Action
 */
export interface IoTEventsDynamoDBv2Action {
  /**
   * @schema IoTEventsDynamoDBv2Action#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTEventsDynamoDBv2Action#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * Converts an object of type 'IoTEventsDynamoDBv2Action' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDynamoDBv2Action(obj: IoTEventsDynamoDBv2Action | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableName': obj.tableName,
    'payload': toJson_IoTEventsPayload(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotSiteWiseAction
 */
export interface IoTEventsIotSiteWiseAction {
  /**
   * @schema IoTEventsIotSiteWiseAction#entryId
   */
  readonly entryId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyValue
   */
  readonly propertyValue?: IoTEventsAssetPropertyValue;

}

/**
 * Converts an object of type 'IoTEventsIotSiteWiseAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotSiteWiseAction(obj: IoTEventsIotSiteWiseAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryId': obj.entryId,
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'propertyValue': toJson_IoTEventsAssetPropertyValue(obj.propertyValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsOnInputLifecycle
 */
export interface IoTEventsOnInputLifecycle {
  /**
   * @schema IoTEventsOnInputLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

  /**
   * @schema IoTEventsOnInputLifecycle#transitionEvents
   */
  readonly transitionEvents?: IoTEventsTransitionEvent[];

}

/**
 * Converts an object of type 'IoTEventsOnInputLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsOnInputLifecycle(obj: IoTEventsOnInputLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_IoTEventsEvent(y)),
    'transitionEvents': obj.transitionEvents?.map(y => toJson_IoTEventsTransitionEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsOnEnterLifecycle
 */
export interface IoTEventsOnEnterLifecycle {
  /**
   * @schema IoTEventsOnEnterLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

}

/**
 * Converts an object of type 'IoTEventsOnEnterLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsOnEnterLifecycle(obj: IoTEventsOnEnterLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_IoTEventsEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsOnExitLifecycle
 */
export interface IoTEventsOnExitLifecycle {
  /**
   * @schema IoTEventsOnExitLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

}

/**
 * Converts an object of type 'IoTEventsOnExitLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsOnExitLifecycle(obj: IoTEventsOnExitLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'events': obj.events?.map(y => toJson_IoTEventsEvent(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsIotSiteWiseAssetModelPropertyIdentifier
 */
export interface IoTEventsIotSiteWiseAssetModelPropertyIdentifier {
  /**
   * @schema IoTEventsIotSiteWiseAssetModelPropertyIdentifier#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTEventsIotSiteWiseAssetModelPropertyIdentifier#propertyId
   */
  readonly propertyId: string;

}

/**
 * Converts an object of type 'IoTEventsIotSiteWiseAssetModelPropertyIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsIotSiteWiseAssetModelPropertyIdentifier(obj: IoTEventsIotSiteWiseAssetModelPropertyIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
    'propertyId': obj.propertyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsRecipientDetail
 */
export interface IoTEventsRecipientDetail {
  /**
   * @schema IoTEventsRecipientDetail#ssoIdentity
   */
  readonly ssoIdentity?: IoTEventsSsoIdentity;

}

/**
 * Converts an object of type 'IoTEventsRecipientDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsRecipientDetail(obj: IoTEventsRecipientDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ssoIdentity': toJson_IoTEventsSsoIdentity(obj.ssoIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsEmailContent
 */
export interface IoTEventsEmailContent {
  /**
   * @schema IoTEventsEmailContent#subject
   */
  readonly subject?: string;

  /**
   * @schema IoTEventsEmailContent#additionalMessage
   */
  readonly additionalMessage?: string;

}

/**
 * Converts an object of type 'IoTEventsEmailContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsEmailContent(obj: IoTEventsEmailContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subject': obj.subject,
    'additionalMessage': obj.additionalMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsEmailRecipients
 */
export interface IoTEventsEmailRecipients {
  /**
   * @schema IoTEventsEmailRecipients#to
   */
  readonly to?: IoTEventsRecipientDetail[];

}

/**
 * Converts an object of type 'IoTEventsEmailRecipients' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsEmailRecipients(obj: IoTEventsEmailRecipients | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'to': obj.to?.map(y => toJson_IoTEventsRecipientDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsPayload
 */
export interface IoTEventsPayload {
  /**
   * @schema IoTEventsPayload#contentExpression
   */
  readonly contentExpression: string;

  /**
   * @schema IoTEventsPayload#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'IoTEventsPayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsPayload(obj: IoTEventsPayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'contentExpression': obj.contentExpression,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAssetPropertyValue
 */
export interface IoTEventsAssetPropertyValue {
  /**
   * @schema IoTEventsAssetPropertyValue#value
   */
  readonly value?: IoTEventsAssetPropertyVariant;

  /**
   * @schema IoTEventsAssetPropertyValue#timestamp
   */
  readonly timestamp?: IoTEventsAssetPropertyTimestamp;

  /**
   * @schema IoTEventsAssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * Converts an object of type 'IoTEventsAssetPropertyValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAssetPropertyValue(obj: IoTEventsAssetPropertyValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': toJson_IoTEventsAssetPropertyVariant(obj.value),
    'timestamp': toJson_IoTEventsAssetPropertyTimestamp(obj.timestamp),
    'quality': obj.quality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsEvent
 */
export interface IoTEventsEvent {
  /**
   * @schema IoTEventsEvent#eventName
   */
  readonly eventName: string;

  /**
   * @schema IoTEventsEvent#condition
   */
  readonly condition?: string;

  /**
   * @schema IoTEventsEvent#actions
   */
  readonly actions?: IoTEventsAction[];

}

/**
 * Converts an object of type 'IoTEventsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsEvent(obj: IoTEventsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventName': obj.eventName,
    'condition': obj.condition,
    'actions': obj.actions?.map(y => toJson_IoTEventsAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsTransitionEvent
 */
export interface IoTEventsTransitionEvent {
  /**
   * @schema IoTEventsTransitionEvent#eventName
   */
  readonly eventName: string;

  /**
   * @schema IoTEventsTransitionEvent#condition
   */
  readonly condition: string;

  /**
   * @schema IoTEventsTransitionEvent#actions
   */
  readonly actions?: IoTEventsAction[];

  /**
   * @schema IoTEventsTransitionEvent#nextState
   */
  readonly nextState: string;

}

/**
 * Converts an object of type 'IoTEventsTransitionEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsTransitionEvent(obj: IoTEventsTransitionEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventName': obj.eventName,
    'condition': obj.condition,
    'actions': obj.actions?.map(y => toJson_IoTEventsAction(y)),
    'nextState': obj.nextState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSsoIdentity
 */
export interface IoTEventsSsoIdentity {
  /**
   * @schema IoTEventsSsoIdentity#identityStoreId
   */
  readonly identityStoreId: string;

  /**
   * @schema IoTEventsSsoIdentity#userId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'IoTEventsSsoIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSsoIdentity(obj: IoTEventsSsoIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityStoreId': obj.identityStoreId,
    'userId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAssetPropertyVariant
 */
export interface IoTEventsAssetPropertyVariant {
  /**
   * @schema IoTEventsAssetPropertyVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#integerValue
   */
  readonly integerValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#doubleValue
   */
  readonly doubleValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#booleanValue
   */
  readonly booleanValue?: string;

}

/**
 * Converts an object of type 'IoTEventsAssetPropertyVariant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAssetPropertyVariant(obj: IoTEventsAssetPropertyVariant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stringValue': obj.stringValue,
    'integerValue': obj.integerValue,
    'doubleValue': obj.doubleValue,
    'booleanValue': obj.booleanValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAssetPropertyTimestamp
 */
export interface IoTEventsAssetPropertyTimestamp {
  /**
   * @schema IoTEventsAssetPropertyTimestamp#timeInSeconds
   */
  readonly timeInSeconds: string;

  /**
   * @schema IoTEventsAssetPropertyTimestamp#offsetInNanos
   */
  readonly offsetInNanos?: string;

}

/**
 * Converts an object of type 'IoTEventsAssetPropertyTimestamp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAssetPropertyTimestamp(obj: IoTEventsAssetPropertyTimestamp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeInSeconds': obj.timeInSeconds,
    'offsetInNanos': obj.offsetInNanos,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsAction
 */
export interface IoTEventsAction {
  /**
   * @schema IoTEventsAction#setVariable
   */
  readonly setVariable?: IoTEventsSetVariableAction;

  /**
   * @schema IoTEventsAction#sns
   */
  readonly sns?: IoTEventsSnsTopicPublishAction;

  /**
   * @schema IoTEventsAction#iotTopicPublish
   */
  readonly iotTopicPublish?: IoTEventsIotTopicPublishAction;

  /**
   * @schema IoTEventsAction#setTimer
   */
  readonly setTimer?: IoTEventsSetTimerAction;

  /**
   * @schema IoTEventsAction#clearTimer
   */
  readonly clearTimer?: IoTEventsClearTimerAction;

  /**
   * @schema IoTEventsAction#resetTimer
   */
  readonly resetTimer?: IoTEventsResetTimerAction;

  /**
   * @schema IoTEventsAction#lambda
   */
  readonly lambda?: IoTEventsLambdaAction;

  /**
   * @schema IoTEventsAction#iotEvents
   */
  readonly iotEvents?: IoTEventsIotEventsAction;

  /**
   * @schema IoTEventsAction#sqs
   */
  readonly sqs?: IoTEventsSqsAction;

  /**
   * @schema IoTEventsAction#firehose
   */
  readonly firehose?: IoTEventsFirehoseAction;

  /**
   * @schema IoTEventsAction#dynamoDB
   */
  readonly dynamoDb?: IoTEventsDynamoDbAction;

  /**
   * @schema IoTEventsAction#dynamoDBv2
   */
  readonly dynamoDBv2?: IoTEventsDynamoDBv2Action;

  /**
   * @schema IoTEventsAction#iotSiteWise
   */
  readonly iotSiteWise?: IoTEventsIotSiteWiseAction;

}

/**
 * Converts an object of type 'IoTEventsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsAction(obj: IoTEventsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'setVariable': toJson_IoTEventsSetVariableAction(obj.setVariable),
    'sns': toJson_IoTEventsSnsTopicPublishAction(obj.sns),
    'iotTopicPublish': toJson_IoTEventsIotTopicPublishAction(obj.iotTopicPublish),
    'setTimer': toJson_IoTEventsSetTimerAction(obj.setTimer),
    'clearTimer': toJson_IoTEventsClearTimerAction(obj.clearTimer),
    'resetTimer': toJson_IoTEventsResetTimerAction(obj.resetTimer),
    'lambda': toJson_IoTEventsLambdaAction(obj.lambda),
    'iotEvents': toJson_IoTEventsIotEventsAction(obj.iotEvents),
    'sqs': toJson_IoTEventsSqsAction(obj.sqs),
    'firehose': toJson_IoTEventsFirehoseAction(obj.firehose),
    'dynamoDB': toJson_IoTEventsDynamoDbAction(obj.dynamoDb),
    'dynamoDBv2': toJson_IoTEventsDynamoDBv2Action(obj.dynamoDBv2),
    'iotSiteWise': toJson_IoTEventsIotSiteWiseAction(obj.iotSiteWise),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSetVariableAction
 */
export interface IoTEventsSetVariableAction {
  /**
   * @schema IoTEventsSetVariableAction#variableName
   */
  readonly variableName: string;

  /**
   * @schema IoTEventsSetVariableAction#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTEventsSetVariableAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSetVariableAction(obj: IoTEventsSetVariableAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'variableName': obj.variableName,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsSetTimerAction
 */
export interface IoTEventsSetTimerAction {
  /**
   * @schema IoTEventsSetTimerAction#timerName
   */
  readonly timerName: string;

  /**
   * @schema IoTEventsSetTimerAction#seconds
   */
  readonly seconds?: number;

  /**
   * @schema IoTEventsSetTimerAction#durationExpression
   */
  readonly durationExpression?: string;

}

/**
 * Converts an object of type 'IoTEventsSetTimerAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsSetTimerAction(obj: IoTEventsSetTimerAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerName': obj.timerName,
    'seconds': obj.seconds,
    'durationExpression': obj.durationExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsClearTimerAction
 */
export interface IoTEventsClearTimerAction {
  /**
   * @schema IoTEventsClearTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * Converts an object of type 'IoTEventsClearTimerAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsClearTimerAction(obj: IoTEventsClearTimerAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerName': obj.timerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsResetTimerAction
 */
export interface IoTEventsResetTimerAction {
  /**
   * @schema IoTEventsResetTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * Converts an object of type 'IoTEventsResetTimerAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsResetTimerAction(obj: IoTEventsResetTimerAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timerName': obj.timerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
