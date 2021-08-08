/**
 * @schema KinesisVideoMediaGetMediaInput
 */
export interface KinesisVideoMediaGetMediaInput {
  /**
   * @schema KinesisVideoMediaGetMediaInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema KinesisVideoMediaGetMediaInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema KinesisVideoMediaGetMediaInput#StartSelector
   */
  readonly startSelector?: KinesisVideoMediaStartSelector;

}

/**
 * Converts an object of type 'KinesisVideoMediaGetMediaInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoMediaGetMediaInput(obj: KinesisVideoMediaGetMediaInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamName': obj.streamName,
    'StreamARN': obj.streamArn,
    'StartSelector': toJson_KinesisVideoMediaStartSelector(obj.startSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoMediaGetMediaOutput
 */
export interface KinesisVideoMediaGetMediaOutput {
  /**
   * @schema KinesisVideoMediaGetMediaOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema KinesisVideoMediaGetMediaOutput#Payload
   */
  readonly payload?: any;

}

/**
 * Converts an object of type 'KinesisVideoMediaGetMediaOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoMediaGetMediaOutput(obj: KinesisVideoMediaGetMediaOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisVideoMediaStartSelector
 */
export interface KinesisVideoMediaStartSelector {
  /**
   * @schema KinesisVideoMediaStartSelector#StartSelectorType
   */
  readonly startSelectorType?: string;

  /**
   * @schema KinesisVideoMediaStartSelector#AfterFragmentNumber
   */
  readonly afterFragmentNumber?: string;

  /**
   * @schema KinesisVideoMediaStartSelector#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema KinesisVideoMediaStartSelector#ContinuationToken
   */
  readonly continuationToken?: string;

}

/**
 * Converts an object of type 'KinesisVideoMediaStartSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisVideoMediaStartSelector(obj: KinesisVideoMediaStartSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartSelectorType': obj.startSelectorType,
    'AfterFragmentNumber': obj.afterFragmentNumber,
    'StartTimestamp': obj.startTimestamp,
    'ContinuationToken': obj.continuationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
