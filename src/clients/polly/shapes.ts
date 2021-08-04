/**
 * @schema PollyDeleteLexiconInput
 */
export interface PollyDeleteLexiconInput {
  /**
   * @schema PollyDeleteLexiconInput#Name
   */
  readonly name: string;

}

/**
 * @schema PollyDeleteLexiconOutput
 */
export interface PollyDeleteLexiconOutput {
}

/**
 * @schema PollyDescribeVoicesInput
 */
export interface PollyDescribeVoicesInput {
  /**
   * @schema PollyDescribeVoicesInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema PollyDescribeVoicesInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PollyDescribeVoicesInput#IncludeAdditionalLanguageCodes
   */
  readonly includeAdditionalLanguageCodes?: boolean;

  /**
   * @schema PollyDescribeVoicesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PollyDescribeVoicesOutput
 */
export interface PollyDescribeVoicesOutput {
  /**
   * @schema PollyDescribeVoicesOutput#Voices
   */
  readonly voices?: PollyVoice[];

  /**
   * @schema PollyDescribeVoicesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PollyGetLexiconInput
 */
export interface PollyGetLexiconInput {
  /**
   * @schema PollyGetLexiconInput#Name
   */
  readonly name: string;

}

/**
 * @schema PollyGetLexiconOutput
 */
export interface PollyGetLexiconOutput {
  /**
   * @schema PollyGetLexiconOutput#Lexicon
   */
  readonly lexicon?: PollyLexicon;

  /**
   * @schema PollyGetLexiconOutput#LexiconAttributes
   */
  readonly lexiconAttributes?: PollyLexiconAttributes;

}

/**
 * @schema PollyGetSpeechSynthesisTaskInput
 */
export interface PollyGetSpeechSynthesisTaskInput {
  /**
   * @schema PollyGetSpeechSynthesisTaskInput#TaskId
   */
  readonly taskId: string;

}

/**
 * @schema PollyGetSpeechSynthesisTaskOutput
 */
export interface PollyGetSpeechSynthesisTaskOutput {
  /**
   * @schema PollyGetSpeechSynthesisTaskOutput#SynthesisTask
   */
  readonly synthesisTask?: PollySynthesisTask;

}

/**
 * @schema PollyListLexiconsInput
 */
export interface PollyListLexiconsInput {
  /**
   * @schema PollyListLexiconsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PollyListLexiconsOutput
 */
export interface PollyListLexiconsOutput {
  /**
   * @schema PollyListLexiconsOutput#Lexicons
   */
  readonly lexicons?: PollyLexiconDescription[];

  /**
   * @schema PollyListLexiconsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PollyListSpeechSynthesisTasksInput
 */
export interface PollyListSpeechSynthesisTasksInput {
  /**
   * @schema PollyListSpeechSynthesisTasksInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema PollyListSpeechSynthesisTasksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PollyListSpeechSynthesisTasksInput#Status
   */
  readonly status?: string;

}

/**
 * @schema PollyListSpeechSynthesisTasksOutput
 */
export interface PollyListSpeechSynthesisTasksOutput {
  /**
   * @schema PollyListSpeechSynthesisTasksOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PollyListSpeechSynthesisTasksOutput#SynthesisTasks
   */
  readonly synthesisTasks?: PollySynthesisTask[];

}

/**
 * @schema PollyPutLexiconInput
 */
export interface PollyPutLexiconInput {
  /**
   * @schema PollyPutLexiconInput#Name
   */
  readonly name: string;

  /**
   * @schema PollyPutLexiconInput#Content
   */
  readonly content: string;

}

/**
 * @schema PollyPutLexiconOutput
 */
export interface PollyPutLexiconOutput {
}

/**
 * @schema PollyStartSpeechSynthesisTaskInput
 */
export interface PollyStartSpeechSynthesisTaskInput {
  /**
   * @schema PollyStartSpeechSynthesisTaskInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#OutputFormat
   */
  readonly outputFormat: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#OutputS3BucketName
   */
  readonly outputS3BucketName: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#Text
   */
  readonly text: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#VoiceId
   */
  readonly voiceId: string;

}

/**
 * @schema PollyStartSpeechSynthesisTaskOutput
 */
export interface PollyStartSpeechSynthesisTaskOutput {
  /**
   * @schema PollyStartSpeechSynthesisTaskOutput#SynthesisTask
   */
  readonly synthesisTask?: PollySynthesisTask;

}

/**
 * @schema PollySynthesizeSpeechInput
 */
export interface PollySynthesizeSpeechInput {
  /**
   * @schema PollySynthesizeSpeechInput#Engine
   */
  readonly engine?: string;

  /**
   * @schema PollySynthesizeSpeechInput#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PollySynthesizeSpeechInput#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema PollySynthesizeSpeechInput#OutputFormat
   */
  readonly outputFormat: string;

  /**
   * @schema PollySynthesizeSpeechInput#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema PollySynthesizeSpeechInput#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema PollySynthesizeSpeechInput#Text
   */
  readonly text: string;

  /**
   * @schema PollySynthesizeSpeechInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema PollySynthesizeSpeechInput#VoiceId
   */
  readonly voiceId: string;

}

/**
 * @schema PollySynthesizeSpeechOutput
 */
export interface PollySynthesizeSpeechOutput {
  /**
   * @schema PollySynthesizeSpeechOutput#AudioStream
   */
  readonly audioStream?: any;

  /**
   * @schema PollySynthesizeSpeechOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema PollySynthesizeSpeechOutput#RequestCharacters
   */
  readonly requestCharacters?: number;

}

/**
 * @schema PollyVoice
 */
export interface PollyVoice {
  /**
   * @schema PollyVoice#Gender
   */
  readonly gender?: string;

  /**
   * @schema PollyVoice#Id
   */
  readonly id?: string;

  /**
   * @schema PollyVoice#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PollyVoice#LanguageName
   */
  readonly languageName?: string;

  /**
   * @schema PollyVoice#Name
   */
  readonly name?: string;

  /**
   * @schema PollyVoice#AdditionalLanguageCodes
   */
  readonly additionalLanguageCodes?: string[];

  /**
   * @schema PollyVoice#SupportedEngines
   */
  readonly supportedEngines?: string[];

}

/**
 * @schema PollyLexicon
 */
export interface PollyLexicon {
  /**
   * @schema PollyLexicon#Content
   */
  readonly content?: string;

  /**
   * @schema PollyLexicon#Name
   */
  readonly name?: string;

}

/**
 * @schema PollyLexiconAttributes
 */
export interface PollyLexiconAttributes {
  /**
   * @schema PollyLexiconAttributes#Alphabet
   */
  readonly alphabet?: string;

  /**
   * @schema PollyLexiconAttributes#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema PollyLexiconAttributes#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema PollyLexiconAttributes#LexiconArn
   */
  readonly lexiconArn?: string;

  /**
   * @schema PollyLexiconAttributes#LexemesCount
   */
  readonly lexemesCount?: number;

  /**
   * @schema PollyLexiconAttributes#Size
   */
  readonly size?: number;

}

/**
 * @schema PollySynthesisTask
 */
export interface PollySynthesisTask {
  /**
   * @schema PollySynthesisTask#Engine
   */
  readonly engine?: string;

  /**
   * @schema PollySynthesisTask#TaskId
   */
  readonly taskId?: string;

  /**
   * @schema PollySynthesisTask#TaskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema PollySynthesisTask#TaskStatusReason
   */
  readonly taskStatusReason?: string;

  /**
   * @schema PollySynthesisTask#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema PollySynthesisTask#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema PollySynthesisTask#RequestCharacters
   */
  readonly requestCharacters?: number;

  /**
   * @schema PollySynthesisTask#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema PollySynthesisTask#LexiconNames
   */
  readonly lexiconNames?: string[];

  /**
   * @schema PollySynthesisTask#OutputFormat
   */
  readonly outputFormat?: string;

  /**
   * @schema PollySynthesisTask#SampleRate
   */
  readonly sampleRate?: string;

  /**
   * @schema PollySynthesisTask#SpeechMarkTypes
   */
  readonly speechMarkTypes?: string[];

  /**
   * @schema PollySynthesisTask#TextType
   */
  readonly textType?: string;

  /**
   * @schema PollySynthesisTask#VoiceId
   */
  readonly voiceId?: string;

  /**
   * @schema PollySynthesisTask#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * @schema PollyLexiconDescription
 */
export interface PollyLexiconDescription {
  /**
   * @schema PollyLexiconDescription#Name
   */
  readonly name?: string;

  /**
   * @schema PollyLexiconDescription#Attributes
   */
  readonly attributes?: PollyLexiconAttributes;

}
