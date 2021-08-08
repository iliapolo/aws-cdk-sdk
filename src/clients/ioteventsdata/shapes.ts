/**
 * @schema IoTEventsDataBatchAcknowledgeAlarmRequest
 */
export interface IoTEventsDataBatchAcknowledgeAlarmRequest {
  /**
   * @schema IoTEventsDataBatchAcknowledgeAlarmRequest#acknowledgeActionRequests
   */
  readonly acknowledgeActionRequests: IoTEventsDataAcknowledgeAlarmActionRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchAcknowledgeAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchAcknowledgeAlarmRequest(obj: IoTEventsDataBatchAcknowledgeAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acknowledgeActionRequests': obj.acknowledgeActionRequests?.map(y => toJson_IoTEventsDataAcknowledgeAlarmActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchAcknowledgeAlarmResponse
 */
export interface IoTEventsDataBatchAcknowledgeAlarmResponse {
  /**
   * @schema IoTEventsDataBatchAcknowledgeAlarmResponse#errorEntries
   */
  readonly errorEntries?: IoTEventsDataBatchAlarmActionErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchAcknowledgeAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchAcknowledgeAlarmResponse(obj: IoTEventsDataBatchAcknowledgeAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTEventsDataBatchAlarmActionErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchDisableAlarmRequest
 */
export interface IoTEventsDataBatchDisableAlarmRequest {
  /**
   * @schema IoTEventsDataBatchDisableAlarmRequest#disableActionRequests
   */
  readonly disableActionRequests: IoTEventsDataDisableAlarmActionRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchDisableAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchDisableAlarmRequest(obj: IoTEventsDataBatchDisableAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disableActionRequests': obj.disableActionRequests?.map(y => toJson_IoTEventsDataDisableAlarmActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchDisableAlarmResponse
 */
export interface IoTEventsDataBatchDisableAlarmResponse {
  /**
   * @schema IoTEventsDataBatchDisableAlarmResponse#errorEntries
   */
  readonly errorEntries?: IoTEventsDataBatchAlarmActionErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchDisableAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchDisableAlarmResponse(obj: IoTEventsDataBatchDisableAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTEventsDataBatchAlarmActionErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchEnableAlarmRequest
 */
export interface IoTEventsDataBatchEnableAlarmRequest {
  /**
   * @schema IoTEventsDataBatchEnableAlarmRequest#enableActionRequests
   */
  readonly enableActionRequests: IoTEventsDataEnableAlarmActionRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchEnableAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchEnableAlarmRequest(obj: IoTEventsDataBatchEnableAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enableActionRequests': obj.enableActionRequests?.map(y => toJson_IoTEventsDataEnableAlarmActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchEnableAlarmResponse
 */
export interface IoTEventsDataBatchEnableAlarmResponse {
  /**
   * @schema IoTEventsDataBatchEnableAlarmResponse#errorEntries
   */
  readonly errorEntries?: IoTEventsDataBatchAlarmActionErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchEnableAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchEnableAlarmResponse(obj: IoTEventsDataBatchEnableAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTEventsDataBatchAlarmActionErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchPutMessageRequest
 */
export interface IoTEventsDataBatchPutMessageRequest {
  /**
   * @schema IoTEventsDataBatchPutMessageRequest#messages
   */
  readonly messages: IoTEventsDataMessage[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchPutMessageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchPutMessageRequest(obj: IoTEventsDataBatchPutMessageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messages': obj.messages?.map(y => toJson_IoTEventsDataMessage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchPutMessageResponse
 */
export interface IoTEventsDataBatchPutMessageResponse {
  /**
   * @schema IoTEventsDataBatchPutMessageResponse#BatchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: IoTEventsDataBatchPutMessageErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchPutMessageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchPutMessageResponse(obj: IoTEventsDataBatchPutMessageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BatchPutMessageErrorEntries': obj.batchPutMessageErrorEntries?.map(y => toJson_IoTEventsDataBatchPutMessageErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchResetAlarmRequest
 */
export interface IoTEventsDataBatchResetAlarmRequest {
  /**
   * @schema IoTEventsDataBatchResetAlarmRequest#resetActionRequests
   */
  readonly resetActionRequests: IoTEventsDataResetAlarmActionRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchResetAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchResetAlarmRequest(obj: IoTEventsDataBatchResetAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resetActionRequests': obj.resetActionRequests?.map(y => toJson_IoTEventsDataResetAlarmActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchResetAlarmResponse
 */
export interface IoTEventsDataBatchResetAlarmResponse {
  /**
   * @schema IoTEventsDataBatchResetAlarmResponse#errorEntries
   */
  readonly errorEntries?: IoTEventsDataBatchAlarmActionErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchResetAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchResetAlarmResponse(obj: IoTEventsDataBatchResetAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTEventsDataBatchAlarmActionErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchSnoozeAlarmRequest
 */
export interface IoTEventsDataBatchSnoozeAlarmRequest {
  /**
   * @schema IoTEventsDataBatchSnoozeAlarmRequest#snoozeActionRequests
   */
  readonly snoozeActionRequests: IoTEventsDataSnoozeAlarmActionRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchSnoozeAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchSnoozeAlarmRequest(obj: IoTEventsDataBatchSnoozeAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snoozeActionRequests': obj.snoozeActionRequests?.map(y => toJson_IoTEventsDataSnoozeAlarmActionRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchSnoozeAlarmResponse
 */
export interface IoTEventsDataBatchSnoozeAlarmResponse {
  /**
   * @schema IoTEventsDataBatchSnoozeAlarmResponse#errorEntries
   */
  readonly errorEntries?: IoTEventsDataBatchAlarmActionErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchSnoozeAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchSnoozeAlarmResponse(obj: IoTEventsDataBatchSnoozeAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTEventsDataBatchAlarmActionErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchUpdateDetectorRequest
 */
export interface IoTEventsDataBatchUpdateDetectorRequest {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorRequest#detectors
   */
  readonly detectors: IoTEventsDataUpdateDetectorRequest[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchUpdateDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchUpdateDetectorRequest(obj: IoTEventsDataBatchUpdateDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectors': obj.detectors?.map(y => toJson_IoTEventsDataUpdateDetectorRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchUpdateDetectorResponse
 */
export interface IoTEventsDataBatchUpdateDetectorResponse {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorResponse#batchUpdateDetectorErrorEntries
   */
  readonly batchUpdateDetectorErrorEntries?: IoTEventsDataBatchUpdateDetectorErrorEntry[];

}

/**
 * Converts an object of type 'IoTEventsDataBatchUpdateDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchUpdateDetectorResponse(obj: IoTEventsDataBatchUpdateDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'batchUpdateDetectorErrorEntries': obj.batchUpdateDetectorErrorEntries?.map(y => toJson_IoTEventsDataBatchUpdateDetectorErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDescribeAlarmRequest
 */
export interface IoTEventsDataDescribeAlarmRequest {
  /**
   * @schema IoTEventsDataDescribeAlarmRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataDescribeAlarmRequest#keyValue
   */
  readonly keyValue?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDescribeAlarmRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDescribeAlarmRequest(obj: IoTEventsDataDescribeAlarmRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDescribeAlarmResponse
 */
export interface IoTEventsDataDescribeAlarmResponse {
  /**
   * @schema IoTEventsDataDescribeAlarmResponse#alarm
   */
  readonly alarm?: IoTEventsDataAlarm;

}

/**
 * Converts an object of type 'IoTEventsDataDescribeAlarmResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDescribeAlarmResponse(obj: IoTEventsDataDescribeAlarmResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarm': toJson_IoTEventsDataAlarm(obj.alarm),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDescribeDetectorRequest
 */
export interface IoTEventsDataDescribeDetectorRequest {
  /**
   * @schema IoTEventsDataDescribeDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataDescribeDetectorRequest#keyValue
   */
  readonly keyValue?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDescribeDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDescribeDetectorRequest(obj: IoTEventsDataDescribeDetectorRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsDataDescribeDetectorResponse
 */
export interface IoTEventsDataDescribeDetectorResponse {
  /**
   * @schema IoTEventsDataDescribeDetectorResponse#detector
   */
  readonly detector?: IoTEventsDataDetector;

}

/**
 * Converts an object of type 'IoTEventsDataDescribeDetectorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDescribeDetectorResponse(obj: IoTEventsDataDescribeDetectorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detector': toJson_IoTEventsDataDetector(obj.detector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataListAlarmsRequest
 */
export interface IoTEventsDataListAlarmsRequest {
  /**
   * @schema IoTEventsDataListAlarmsRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataListAlarmsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsDataListAlarmsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsDataListAlarmsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataListAlarmsRequest(obj: IoTEventsDataListAlarmsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsDataListAlarmsResponse
 */
export interface IoTEventsDataListAlarmsResponse {
  /**
   * @schema IoTEventsDataListAlarmsResponse#alarmSummaries
   */
  readonly alarmSummaries?: IoTEventsDataAlarmSummary[];

  /**
   * @schema IoTEventsDataListAlarmsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsDataListAlarmsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataListAlarmsResponse(obj: IoTEventsDataListAlarmsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmSummaries': obj.alarmSummaries?.map(y => toJson_IoTEventsDataAlarmSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataListDetectorsRequest
 */
export interface IoTEventsDataListDetectorsRequest {
  /**
   * @schema IoTEventsDataListDetectorsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#stateName
   */
  readonly stateName?: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTEventsDataListDetectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataListDetectorsRequest(obj: IoTEventsDataListDetectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'stateName': obj.stateName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataListDetectorsResponse
 */
export interface IoTEventsDataListDetectorsResponse {
  /**
   * @schema IoTEventsDataListDetectorsResponse#detectorSummaries
   */
  readonly detectorSummaries?: IoTEventsDataDetectorSummary[];

  /**
   * @schema IoTEventsDataListDetectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTEventsDataListDetectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataListDetectorsResponse(obj: IoTEventsDataListDetectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorSummaries': obj.detectorSummaries?.map(y => toJson_IoTEventsDataDetectorSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataAcknowledgeAlarmActionRequest
 */
export interface IoTEventsDataAcknowledgeAlarmActionRequest {
  /**
   * @schema IoTEventsDataAcknowledgeAlarmActionRequest#requestId
   */
  readonly requestId: string;

  /**
   * @schema IoTEventsDataAcknowledgeAlarmActionRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataAcknowledgeAlarmActionRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataAcknowledgeAlarmActionRequest#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataAcknowledgeAlarmActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataAcknowledgeAlarmActionRequest(obj: IoTEventsDataAcknowledgeAlarmActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchAlarmActionErrorEntry
 */
export interface IoTEventsDataBatchAlarmActionErrorEntry {
  /**
   * @schema IoTEventsDataBatchAlarmActionErrorEntry#requestId
   */
  readonly requestId?: string;

  /**
   * @schema IoTEventsDataBatchAlarmActionErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTEventsDataBatchAlarmActionErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'IoTEventsDataBatchAlarmActionErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchAlarmActionErrorEntry(obj: IoTEventsDataBatchAlarmActionErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDisableAlarmActionRequest
 */
export interface IoTEventsDataDisableAlarmActionRequest {
  /**
   * @schema IoTEventsDataDisableAlarmActionRequest#requestId
   */
  readonly requestId: string;

  /**
   * @schema IoTEventsDataDisableAlarmActionRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataDisableAlarmActionRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataDisableAlarmActionRequest#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDisableAlarmActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDisableAlarmActionRequest(obj: IoTEventsDataDisableAlarmActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataEnableAlarmActionRequest
 */
export interface IoTEventsDataEnableAlarmActionRequest {
  /**
   * @schema IoTEventsDataEnableAlarmActionRequest#requestId
   */
  readonly requestId: string;

  /**
   * @schema IoTEventsDataEnableAlarmActionRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataEnableAlarmActionRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataEnableAlarmActionRequest#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataEnableAlarmActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataEnableAlarmActionRequest(obj: IoTEventsDataEnableAlarmActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataMessage
 */
export interface IoTEventsDataMessage {
  /**
   * @schema IoTEventsDataMessage#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTEventsDataMessage#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsDataMessage#payload
   */
  readonly payload: any;

  /**
   * @schema IoTEventsDataMessage#timestamp
   */
  readonly timestamp?: IoTEventsDataTimestampValue;

}

/**
 * Converts an object of type 'IoTEventsDataMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataMessage(obj: IoTEventsDataMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'inputName': obj.inputName,
    'payload': obj.payload,
    'timestamp': toJson_IoTEventsDataTimestampValue(obj.timestamp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchPutMessageErrorEntry
 */
export interface IoTEventsDataBatchPutMessageErrorEntry {
  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'IoTEventsDataBatchPutMessageErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchPutMessageErrorEntry(obj: IoTEventsDataBatchPutMessageErrorEntry | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsDataResetAlarmActionRequest
 */
export interface IoTEventsDataResetAlarmActionRequest {
  /**
   * @schema IoTEventsDataResetAlarmActionRequest#requestId
   */
  readonly requestId: string;

  /**
   * @schema IoTEventsDataResetAlarmActionRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataResetAlarmActionRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataResetAlarmActionRequest#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataResetAlarmActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataResetAlarmActionRequest(obj: IoTEventsDataResetAlarmActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataSnoozeAlarmActionRequest
 */
export interface IoTEventsDataSnoozeAlarmActionRequest {
  /**
   * @schema IoTEventsDataSnoozeAlarmActionRequest#requestId
   */
  readonly requestId: string;

  /**
   * @schema IoTEventsDataSnoozeAlarmActionRequest#alarmModelName
   */
  readonly alarmModelName: string;

  /**
   * @schema IoTEventsDataSnoozeAlarmActionRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataSnoozeAlarmActionRequest#note
   */
  readonly note?: string;

  /**
   * @schema IoTEventsDataSnoozeAlarmActionRequest#snoozeDuration
   */
  readonly snoozeDuration: number;

}

/**
 * Converts an object of type 'IoTEventsDataSnoozeAlarmActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataSnoozeAlarmActionRequest(obj: IoTEventsDataSnoozeAlarmActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'requestId': obj.requestId,
    'alarmModelName': obj.alarmModelName,
    'keyValue': obj.keyValue,
    'note': obj.note,
    'snoozeDuration': obj.snoozeDuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataUpdateDetectorRequest
 */
export interface IoTEventsDataUpdateDetectorRequest {
  /**
   * @schema IoTEventsDataUpdateDetectorRequest#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#state
   */
  readonly state: IoTEventsDataDetectorStateDefinition;

}

/**
 * Converts an object of type 'IoTEventsDataUpdateDetectorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataUpdateDetectorRequest(obj: IoTEventsDataUpdateDetectorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageId': obj.messageId,
    'detectorModelName': obj.detectorModelName,
    'keyValue': obj.keyValue,
    'state': toJson_IoTEventsDataDetectorStateDefinition(obj.state),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataBatchUpdateDetectorErrorEntry
 */
export interface IoTEventsDataBatchUpdateDetectorErrorEntry {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'IoTEventsDataBatchUpdateDetectorErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataBatchUpdateDetectorErrorEntry(obj: IoTEventsDataBatchUpdateDetectorErrorEntry | undefined): Record<string, any> | undefined {
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
 * @schema IoTEventsDataAlarm
 */
export interface IoTEventsDataAlarm {
  /**
   * @schema IoTEventsDataAlarm#alarmModelName
   */
  readonly alarmModelName?: string;

  /**
   * @schema IoTEventsDataAlarm#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsDataAlarm#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataAlarm#alarmState
   */
  readonly alarmState?: IoTEventsDataAlarmState;

  /**
   * @schema IoTEventsDataAlarm#severity
   */
  readonly severity?: number;

  /**
   * @schema IoTEventsDataAlarm#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataAlarm#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTEventsDataAlarm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataAlarm(obj: IoTEventsDataAlarm | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelVersion': obj.alarmModelVersion,
    'keyValue': obj.keyValue,
    'alarmState': toJson_IoTEventsDataAlarmState(obj.alarmState),
    'severity': obj.severity,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDetector
 */
export interface IoTEventsDataDetector {
  /**
   * @schema IoTEventsDataDetector#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDataDetector#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataDetector#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDataDetector#state
   */
  readonly state?: IoTEventsDataDetectorState;

  /**
   * @schema IoTEventsDataDetector#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataDetector#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDetector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDetector(obj: IoTEventsDataDetector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'keyValue': obj.keyValue,
    'detectorModelVersion': obj.detectorModelVersion,
    'state': toJson_IoTEventsDataDetectorState(obj.state),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataAlarmSummary
 */
export interface IoTEventsDataAlarmSummary {
  /**
   * @schema IoTEventsDataAlarmSummary#alarmModelName
   */
  readonly alarmModelName?: string;

  /**
   * @schema IoTEventsDataAlarmSummary#alarmModelVersion
   */
  readonly alarmModelVersion?: string;

  /**
   * @schema IoTEventsDataAlarmSummary#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataAlarmSummary#stateName
   */
  readonly stateName?: string;

  /**
   * @schema IoTEventsDataAlarmSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataAlarmSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTEventsDataAlarmSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataAlarmSummary(obj: IoTEventsDataAlarmSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmModelName': obj.alarmModelName,
    'alarmModelVersion': obj.alarmModelVersion,
    'keyValue': obj.keyValue,
    'stateName': obj.stateName,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDetectorSummary
 */
export interface IoTEventsDataDetectorSummary {
  /**
   * @schema IoTEventsDataDetectorSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#state
   */
  readonly state?: IoTEventsDataDetectorStateSummary;

  /**
   * @schema IoTEventsDataDetectorSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDetectorSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDetectorSummary(obj: IoTEventsDataDetectorSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectorModelName': obj.detectorModelName,
    'keyValue': obj.keyValue,
    'detectorModelVersion': obj.detectorModelVersion,
    'state': toJson_IoTEventsDataDetectorStateSummary(obj.state),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataTimestampValue
 */
export interface IoTEventsDataTimestampValue {
  /**
   * @schema IoTEventsDataTimestampValue#timeInMillis
   */
  readonly timeInMillis?: number;

}

/**
 * Converts an object of type 'IoTEventsDataTimestampValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataTimestampValue(obj: IoTEventsDataTimestampValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeInMillis': obj.timeInMillis,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDetectorStateDefinition
 */
export interface IoTEventsDataDetectorStateDefinition {
  /**
   * @schema IoTEventsDataDetectorStateDefinition#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsDataDetectorStateDefinition#variables
   */
  readonly variables: IoTEventsDataVariableDefinition[];

  /**
   * @schema IoTEventsDataDetectorStateDefinition#timers
   */
  readonly timers: IoTEventsDataTimerDefinition[];

}

/**
 * Converts an object of type 'IoTEventsDataDetectorStateDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDetectorStateDefinition(obj: IoTEventsDataDetectorStateDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateName': obj.stateName,
    'variables': obj.variables?.map(y => toJson_IoTEventsDataVariableDefinition(y)),
    'timers': obj.timers?.map(y => toJson_IoTEventsDataTimerDefinition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataAlarmState
 */
export interface IoTEventsDataAlarmState {
  /**
   * @schema IoTEventsDataAlarmState#stateName
   */
  readonly stateName?: string;

  /**
   * @schema IoTEventsDataAlarmState#ruleEvaluation
   */
  readonly ruleEvaluation?: IoTEventsDataRuleEvaluation;

  /**
   * @schema IoTEventsDataAlarmState#customerAction
   */
  readonly customerAction?: IoTEventsDataCustomerAction;

  /**
   * @schema IoTEventsDataAlarmState#systemEvent
   */
  readonly systemEvent?: IoTEventsDataSystemEvent;

}

/**
 * Converts an object of type 'IoTEventsDataAlarmState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataAlarmState(obj: IoTEventsDataAlarmState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateName': obj.stateName,
    'ruleEvaluation': toJson_IoTEventsDataRuleEvaluation(obj.ruleEvaluation),
    'customerAction': toJson_IoTEventsDataCustomerAction(obj.customerAction),
    'systemEvent': toJson_IoTEventsDataSystemEvent(obj.systemEvent),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDetectorState
 */
export interface IoTEventsDataDetectorState {
  /**
   * @schema IoTEventsDataDetectorState#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsDataDetectorState#variables
   */
  readonly variables: IoTEventsDataVariable[];

  /**
   * @schema IoTEventsDataDetectorState#timers
   */
  readonly timers: IoTEventsDataTimer[];

}

/**
 * Converts an object of type 'IoTEventsDataDetectorState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDetectorState(obj: IoTEventsDataDetectorState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateName': obj.stateName,
    'variables': obj.variables?.map(y => toJson_IoTEventsDataVariable(y)),
    'timers': obj.timers?.map(y => toJson_IoTEventsDataTimer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDetectorStateSummary
 */
export interface IoTEventsDataDetectorStateSummary {
  /**
   * @schema IoTEventsDataDetectorStateSummary#stateName
   */
  readonly stateName?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDetectorStateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDetectorStateSummary(obj: IoTEventsDataDetectorStateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateName': obj.stateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataVariableDefinition
 */
export interface IoTEventsDataVariableDefinition {
  /**
   * @schema IoTEventsDataVariableDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataVariableDefinition#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTEventsDataVariableDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataVariableDefinition(obj: IoTEventsDataVariableDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataTimerDefinition
 */
export interface IoTEventsDataTimerDefinition {
  /**
   * @schema IoTEventsDataTimerDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataTimerDefinition#seconds
   */
  readonly seconds: number;

}

/**
 * Converts an object of type 'IoTEventsDataTimerDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataTimerDefinition(obj: IoTEventsDataTimerDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'seconds': obj.seconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataRuleEvaluation
 */
export interface IoTEventsDataRuleEvaluation {
  /**
   * @schema IoTEventsDataRuleEvaluation#simpleRuleEvaluation
   */
  readonly simpleRuleEvaluation?: IoTEventsDataSimpleRuleEvaluation;

}

/**
 * Converts an object of type 'IoTEventsDataRuleEvaluation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataRuleEvaluation(obj: IoTEventsDataRuleEvaluation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'simpleRuleEvaluation': toJson_IoTEventsDataSimpleRuleEvaluation(obj.simpleRuleEvaluation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataCustomerAction
 */
export interface IoTEventsDataCustomerAction {
  /**
   * @schema IoTEventsDataCustomerAction#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IoTEventsDataCustomerAction#snoozeActionConfiguration
   */
  readonly snoozeActionConfiguration?: IoTEventsDataSnoozeActionConfiguration;

  /**
   * @schema IoTEventsDataCustomerAction#enableActionConfiguration
   */
  readonly enableActionConfiguration?: IoTEventsDataEnableActionConfiguration;

  /**
   * @schema IoTEventsDataCustomerAction#disableActionConfiguration
   */
  readonly disableActionConfiguration?: IoTEventsDataDisableActionConfiguration;

  /**
   * @schema IoTEventsDataCustomerAction#acknowledgeActionConfiguration
   */
  readonly acknowledgeActionConfiguration?: IoTEventsDataAcknowledgeActionConfiguration;

  /**
   * @schema IoTEventsDataCustomerAction#resetActionConfiguration
   */
  readonly resetActionConfiguration?: IoTEventsDataResetActionConfiguration;

}

/**
 * Converts an object of type 'IoTEventsDataCustomerAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataCustomerAction(obj: IoTEventsDataCustomerAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'snoozeActionConfiguration': toJson_IoTEventsDataSnoozeActionConfiguration(obj.snoozeActionConfiguration),
    'enableActionConfiguration': toJson_IoTEventsDataEnableActionConfiguration(obj.enableActionConfiguration),
    'disableActionConfiguration': toJson_IoTEventsDataDisableActionConfiguration(obj.disableActionConfiguration),
    'acknowledgeActionConfiguration': toJson_IoTEventsDataAcknowledgeActionConfiguration(obj.acknowledgeActionConfiguration),
    'resetActionConfiguration': toJson_IoTEventsDataResetActionConfiguration(obj.resetActionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataSystemEvent
 */
export interface IoTEventsDataSystemEvent {
  /**
   * @schema IoTEventsDataSystemEvent#eventType
   */
  readonly eventType?: string;

  /**
   * @schema IoTEventsDataSystemEvent#stateChangeConfiguration
   */
  readonly stateChangeConfiguration?: IoTEventsDataStateChangeConfiguration;

}

/**
 * Converts an object of type 'IoTEventsDataSystemEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataSystemEvent(obj: IoTEventsDataSystemEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventType': obj.eventType,
    'stateChangeConfiguration': toJson_IoTEventsDataStateChangeConfiguration(obj.stateChangeConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataVariable
 */
export interface IoTEventsDataVariable {
  /**
   * @schema IoTEventsDataVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataVariable#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'IoTEventsDataVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataVariable(obj: IoTEventsDataVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataTimer
 */
export interface IoTEventsDataTimer {
  /**
   * @schema IoTEventsDataTimer#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataTimer#timestamp
   */
  readonly timestamp: string;

}

/**
 * Converts an object of type 'IoTEventsDataTimer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataTimer(obj: IoTEventsDataTimer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataSimpleRuleEvaluation
 */
export interface IoTEventsDataSimpleRuleEvaluation {
  /**
   * @schema IoTEventsDataSimpleRuleEvaluation#inputPropertyValue
   */
  readonly inputPropertyValue?: string;

  /**
   * @schema IoTEventsDataSimpleRuleEvaluation#operator
   */
  readonly operator?: string;

  /**
   * @schema IoTEventsDataSimpleRuleEvaluation#thresholdValue
   */
  readonly thresholdValue?: string;

}

/**
 * Converts an object of type 'IoTEventsDataSimpleRuleEvaluation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataSimpleRuleEvaluation(obj: IoTEventsDataSimpleRuleEvaluation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputPropertyValue': obj.inputPropertyValue,
    'operator': obj.operator,
    'thresholdValue': obj.thresholdValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataSnoozeActionConfiguration
 */
export interface IoTEventsDataSnoozeActionConfiguration {
  /**
   * @schema IoTEventsDataSnoozeActionConfiguration#snoozeDuration
   */
  readonly snoozeDuration?: number;

  /**
   * @schema IoTEventsDataSnoozeActionConfiguration#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataSnoozeActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataSnoozeActionConfiguration(obj: IoTEventsDataSnoozeActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snoozeDuration': obj.snoozeDuration,
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataEnableActionConfiguration
 */
export interface IoTEventsDataEnableActionConfiguration {
  /**
   * @schema IoTEventsDataEnableActionConfiguration#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataEnableActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataEnableActionConfiguration(obj: IoTEventsDataEnableActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataDisableActionConfiguration
 */
export interface IoTEventsDataDisableActionConfiguration {
  /**
   * @schema IoTEventsDataDisableActionConfiguration#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataDisableActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataDisableActionConfiguration(obj: IoTEventsDataDisableActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataAcknowledgeActionConfiguration
 */
export interface IoTEventsDataAcknowledgeActionConfiguration {
  /**
   * @schema IoTEventsDataAcknowledgeActionConfiguration#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataAcknowledgeActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataAcknowledgeActionConfiguration(obj: IoTEventsDataAcknowledgeActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataResetActionConfiguration
 */
export interface IoTEventsDataResetActionConfiguration {
  /**
   * @schema IoTEventsDataResetActionConfiguration#note
   */
  readonly note?: string;

}

/**
 * Converts an object of type 'IoTEventsDataResetActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataResetActionConfiguration(obj: IoTEventsDataResetActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'note': obj.note,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTEventsDataStateChangeConfiguration
 */
export interface IoTEventsDataStateChangeConfiguration {
  /**
   * @schema IoTEventsDataStateChangeConfiguration#triggerType
   */
  readonly triggerType?: string;

}

/**
 * Converts an object of type 'IoTEventsDataStateChangeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTEventsDataStateChangeConfiguration(obj: IoTEventsDataStateChangeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'triggerType': obj.triggerType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
