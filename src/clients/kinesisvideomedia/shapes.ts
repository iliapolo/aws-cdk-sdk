/**
 * @schema GetMediaInput
 */
export interface GetMediaInput {
  /**
   * @schema GetMediaInput#StreamName
   */
  readonly streamName?: string;

  /**
   * @schema GetMediaInput#StreamARN
   */
  readonly streamArn?: string;

  /**
   * @schema GetMediaInput#StartSelector
   */
  readonly startSelector: StartSelector;

}

/**
 * @schema GetMediaOutput
 */
export interface GetMediaOutput {
  /**
   * @schema GetMediaOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetMediaOutput#Payload
   */
  readonly payload?: any;

}

/**
 * @schema StartSelector
 */
export interface StartSelector {
  /**
   * @schema StartSelector#StartSelectorType
   */
  readonly startSelectorType: string;

  /**
   * @schema StartSelector#AfterFragmentNumber
   */
  readonly afterFragmentNumber?: string;

  /**
   * @schema StartSelector#StartTimestamp
   */
  readonly startTimestamp?: string;

  /**
   * @schema StartSelector#ContinuationToken
   */
  readonly continuationToken?: string;

}
