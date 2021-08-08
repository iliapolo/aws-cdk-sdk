/**
 * @schema SageMakerFeatureStoreRuntimeBatchGetRecordRequest
 */
export interface SageMakerFeatureStoreRuntimeBatchGetRecordRequest {
  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordRequest#Identifiers
   */
  readonly identifiers?: SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeBatchGetRecordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeBatchGetRecordRequest(obj: SageMakerFeatureStoreRuntimeBatchGetRecordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Identifiers': obj.identifiers?.map(y => toJson_SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResponse
 */
export interface SageMakerFeatureStoreRuntimeBatchGetRecordResponse {
  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResponse#Records
   */
  readonly records?: SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail[];

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResponse#Errors
   */
  readonly errors?: SageMakerFeatureStoreRuntimeBatchGetRecordError[];

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResponse#UnprocessedIdentifiers
   */
  readonly unprocessedIdentifiers?: SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeBatchGetRecordResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeBatchGetRecordResponse(obj: SageMakerFeatureStoreRuntimeBatchGetRecordResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': obj.records?.map(y => toJson_SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail(y)),
    'Errors': obj.errors?.map(y => toJson_SageMakerFeatureStoreRuntimeBatchGetRecordError(y)),
    'UnprocessedIdentifiers': obj.unprocessedIdentifiers?.map(y => toJson_SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeDeleteRecordRequest
 */
export interface SageMakerFeatureStoreRuntimeDeleteRecordRequest {
  /**
   * @schema SageMakerFeatureStoreRuntimeDeleteRecordRequest#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeDeleteRecordRequest#RecordIdentifierValueAsString
   */
  readonly recordIdentifierValueAsString?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeDeleteRecordRequest#EventTime
   */
  readonly eventTime?: string;

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeDeleteRecordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeDeleteRecordRequest(obj: SageMakerFeatureStoreRuntimeDeleteRecordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'RecordIdentifierValueAsString': obj.recordIdentifierValueAsString,
    'EventTime': obj.eventTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeGetRecordRequest
 */
export interface SageMakerFeatureStoreRuntimeGetRecordRequest {
  /**
   * @schema SageMakerFeatureStoreRuntimeGetRecordRequest#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeGetRecordRequest#RecordIdentifierValueAsString
   */
  readonly recordIdentifierValueAsString?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeGetRecordRequest#FeatureNames
   */
  readonly featureNames?: string[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeGetRecordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeGetRecordRequest(obj: SageMakerFeatureStoreRuntimeGetRecordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'RecordIdentifierValueAsString': obj.recordIdentifierValueAsString,
    'FeatureNames': obj.featureNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeGetRecordResponse
 */
export interface SageMakerFeatureStoreRuntimeGetRecordResponse {
  /**
   * @schema SageMakerFeatureStoreRuntimeGetRecordResponse#Record
   */
  readonly record?: SageMakerFeatureStoreRuntimeFeatureValue[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeGetRecordResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeGetRecordResponse(obj: SageMakerFeatureStoreRuntimeGetRecordResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Record': obj.record?.map(y => toJson_SageMakerFeatureStoreRuntimeFeatureValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimePutRecordRequest
 */
export interface SageMakerFeatureStoreRuntimePutRecordRequest {
  /**
   * @schema SageMakerFeatureStoreRuntimePutRecordRequest#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimePutRecordRequest#Record
   */
  readonly record?: SageMakerFeatureStoreRuntimeFeatureValue[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimePutRecordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimePutRecordRequest(obj: SageMakerFeatureStoreRuntimePutRecordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'Record': obj.record?.map(y => toJson_SageMakerFeatureStoreRuntimeFeatureValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier
 */
export interface SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier {
  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier#RecordIdentifiersValueAsString
   */
  readonly recordIdentifiersValueAsString?: string[];

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier#FeatureNames
   */
  readonly featureNames?: string[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier(obj: SageMakerFeatureStoreRuntimeBatchGetRecordIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'RecordIdentifiersValueAsString': obj.recordIdentifiersValueAsString?.map(y => y),
    'FeatureNames': obj.featureNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail
 */
export interface SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail {
  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail#RecordIdentifierValueAsString
   */
  readonly recordIdentifierValueAsString?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail#Record
   */
  readonly record?: SageMakerFeatureStoreRuntimeFeatureValue[];

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail(obj: SageMakerFeatureStoreRuntimeBatchGetRecordResultDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'RecordIdentifierValueAsString': obj.recordIdentifierValueAsString,
    'Record': obj.record?.map(y => toJson_SageMakerFeatureStoreRuntimeFeatureValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeBatchGetRecordError
 */
export interface SageMakerFeatureStoreRuntimeBatchGetRecordError {
  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordError#FeatureGroupName
   */
  readonly featureGroupName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordError#RecordIdentifierValueAsString
   */
  readonly recordIdentifierValueAsString?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeBatchGetRecordError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeBatchGetRecordError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeBatchGetRecordError(obj: SageMakerFeatureStoreRuntimeBatchGetRecordError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureGroupName': obj.featureGroupName,
    'RecordIdentifierValueAsString': obj.recordIdentifierValueAsString,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SageMakerFeatureStoreRuntimeFeatureValue
 */
export interface SageMakerFeatureStoreRuntimeFeatureValue {
  /**
   * @schema SageMakerFeatureStoreRuntimeFeatureValue#FeatureName
   */
  readonly featureName?: string;

  /**
   * @schema SageMakerFeatureStoreRuntimeFeatureValue#ValueAsString
   */
  readonly valueAsString?: string;

}

/**
 * Converts an object of type 'SageMakerFeatureStoreRuntimeFeatureValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SageMakerFeatureStoreRuntimeFeatureValue(obj: SageMakerFeatureStoreRuntimeFeatureValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FeatureName': obj.featureName,
    'ValueAsString': obj.valueAsString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
