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
  readonly startSelector: KinesisVideoMediaStartSelector;

}

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
 * @schema KinesisVideoMediaStartSelector
 */
export interface KinesisVideoMediaStartSelector {
  /**
   * @schema KinesisVideoMediaStartSelector#StartSelectorType
   */
  readonly startSelectorType: string;

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
