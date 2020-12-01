/**
 * @schema DeleteLexiconInput
 */
export interface DeleteLexiconInput {
  /**
   * @schema DeleteLexiconInput#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteLexiconOutput
 */
export interface DeleteLexiconOutput {
}

/**
 * @schema DescribeVoicesInput
 */
export interface DescribeVoicesInput {
  /**
   * @schema DescribeVoicesInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema DescribeVoicesInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema DescribeVoicesInput#IncludeAdditionalLanguageCodes
   */
  readonly includeAdditionalLanguageCodes?: boolean;

  /**
   * @schema DescribeVoicesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVoicesOutput
 */
export interface DescribeVoicesOutput {
  /**
   * @schema DescribeVoicesOutput#Voices
   */
  readonly voices?: Voice[];

  /**
   * @schema DescribeVoicesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetLexiconInput
 */
export interface GetLexiconInput {
  /**
   * @schema GetLexiconInput#Name
   */
  readonly name: string;

}

/**
 * @schema GetLexiconOutput
 */
export interface GetLexiconOutput {
  /**
   * @schema GetLexiconOutput#Lexicon
   */
  readonly lexicon?: Lexicon;

  /**
   * @schema GetLexiconOutput#LexiconAttributes
   */
  readonly lexiconAttributes?: LexiconAttributes;

}

/**
 * @schema GetSpeechSynthesisTaskInput
 */
export interface GetSpeechSynthesisTaskInput {
  /**
   * @schema GetSpeechSynthesisTaskInput#TaskId
   */
  readonly taskId: string;

}

/**
 * @schema GetSpeechSynthesisTaskOutput
 */
export interface GetSpeechSynthesisTaskOutput {
  /**
   * @schema GetSpeechSynthesisTaskOutput#SynthesisTask
   */
  readonly synthesisTask?: SynthesisTask;

}

/**
 * @schema ListLexiconsInput
 */
export interface ListLexiconsInput {
  /**
   * @schema ListLexiconsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLexiconsOutput
 */
export interface ListLexiconsOutput {
  /**
   * @schema ListLexiconsOutput#Lexicons
   */
  readonly lexicons?: LexiconDescription[];

  /**
   * @schema ListLexiconsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSpeechSynthesisTasksInput
 */
export interface ListSpeechSynthesisTasksInput {
  /**
   * @schema ListSpeechSynthesisTasksInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSpeechSynthesisTasksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSpeechSynthesisTasksInput#Status
   */
  readonly status?: string;

}

/**
 * @schema ListSpeechSynthesisTasksOutput
 */
export interface ListSpeechSynthesisTasksOutput {
  /**
   * @schema ListSpeechSynthesisTasksOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSpeechSynthesisTasksOutput#SynthesisTasks
   */
  readonly synthesisTasks?: SynthesisTask[];

}

/**
 * @schema PutLexiconInput
 */
export interface PutLexiconInput {
  /**
   * @schema PutLexiconInput#Name
   */
  readonly name: string;

  /**
   * @schema PutLexiconInput#Content
   */
  readonly content: string;

}

/**
 * @schema PutLexiconOutput
 */
export interface PutLexiconOutput {
}

/**
 * @schema StartSpeechSynthesisTaskInput
 */
export interface StartSpeechSynthesisTaskInput {
  /**
   * @schema StartSpeechSynthesisTaskInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema StartSpeechSynthesisTaskInput#OutputFormat
   */
  readonly outputFormat: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#OutputS3BucketName
   */
  readonly outputS3BucketName: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema StartSpeechSynthesisTaskInput#Text
   */
  readonly text: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema StartSpeechSynthesisTaskInput#VoiceId
   */
  readonly voiceId: string;

}

/**
 * @schema StartSpeechSynthesisTaskOutput
 */
export interface StartSpeechSynthesisTaskOutput {
  /**
   * @schema StartSpeechSynthesisTaskOutput#SynthesisTask
   */
  readonly synthesisTask?: SynthesisTask;

}

/**
 * @schema SynthesizeSpeechInput
 */
export interface SynthesizeSpeechInput {
  /**
   * @schema SynthesizeSpeechInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema SynthesizeSpeechInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema SynthesizeSpeechInput#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema SynthesizeSpeechInput#OutputFormat
   */
  readonly outputFormat: string;

  /**
   * @schema SynthesizeSpeechInput#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema SynthesizeSpeechInput#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema SynthesizeSpeechInput#Text
   */
  readonly text: string;

  /**
   * @schema SynthesizeSpeechInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema SynthesizeSpeechInput#VoiceId
   */
  readonly voiceId: string;

}

/**
 * @schema SynthesizeSpeechOutput
 */
export interface SynthesizeSpeechOutput {
  /**
   * @schema SynthesizeSpeechOutput#AudioStream
   */
  readonly audioStream?: any;

  /**
   * @schema SynthesizeSpeechOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema SynthesizeSpeechOutput#RequestCharacters
   */
  readonly requestCharacters?: number;

}

/**
 * @schema Voice
 */
export interface Voice {
  /**
   * @schema Voice#Gender
   */
  readonly gender?: string;

  /**
   * @schema Voice#Id
   */
  readonly id?: string;

  /**
   * @schema Voice#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema Voice#LanguageName
   */
  readonly languageName?: string;

  /**
   * @schema Voice#Name
   */
  readonly name?: string;

  /**
   * @schema Voice#AdditionalLanguageCodes
   */
  readonly additionalLanguageCodes?: string[];

  /**
   * @schema Voice#SupportedEngines
   */
  readonly supportedEngines?: string[];

}

/**
 * @schema Lexicon
 */
export interface Lexicon {
  /**
   * @schema Lexicon#Content
   */
  readonly content?: string;

  /**
   * @schema Lexicon#Name
   */
  readonly name?: string;

}

/**
 * @schema LexiconAttributes
 */
export interface LexiconAttributes {
  /**
   * @schema LexiconAttributes#Alphabet
   */
  readonly alphabet?: string;

  /**
   * @schema LexiconAttributes#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema LexiconAttributes#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema LexiconAttributes#LexiconArn
   */
  readonly lexiconArn?: string;

  /**
   * @schema LexiconAttributes#LexemesCount
   */
  readonly lexemesCount?: number;

  /**
   * @schema LexiconAttributes#Size
   */
  readonly size?: number;

}

/**
 * @schema SynthesisTask
 */
export interface SynthesisTask {
  /**
   * @schema SynthesisTask#Engine
   */
  readonly engine?: string;

  /**
   * @schema SynthesisTask#TaskId
   */
  readonly taskId?: string;

  /**
   * @schema SynthesisTask#TaskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema SynthesisTask#TaskStatusReason
   */
  readonly taskStatusReason?: string;

  /**
   * @schema SynthesisTask#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema SynthesisTask#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SynthesisTask#RequestCharacters
   */
  readonly requestCharacters?: number;

  /**
   * @schema SynthesisTask#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema SynthesisTask#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema SynthesisTask#OutputFormat
   */
  readonly outputFormat?: string;

  /**
   * @schema SynthesisTask#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema SynthesisTask#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema SynthesisTask#TextType
   */
  readonly textType?: string;

  /**
   * @schema SynthesisTask#VoiceId
   */
  readonly voiceId?: string;

  /**
   * @schema SynthesisTask#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * @schema LexiconDescription
 */
export interface LexiconDescription {
  /**
   * @schema LexiconDescription#Name
   */
  readonly name?: string;

  /**
   * @schema LexiconDescription#Attributes
   */
  readonly attributes?: LexiconAttributes;

}
