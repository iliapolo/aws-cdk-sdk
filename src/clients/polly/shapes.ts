/**
 * @schema PollyDeleteLexiconInput
 */
export interface PollyDeleteLexiconInput {
  /**
   * @schema PollyDeleteLexiconInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'PollyDeleteLexiconInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyDeleteLexiconInput(obj: PollyDeleteLexiconInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PollyDeleteLexiconOutput
 */
export interface PollyDeleteLexiconOutput {
}

/**
 * Converts an object of type 'PollyDeleteLexiconOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyDeleteLexiconOutput(obj: PollyDeleteLexiconOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyDescribeVoicesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyDescribeVoicesInput(obj: PollyDescribeVoicesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'LanguageCode': obj.languageCode,
    'IncludeAdditionalLanguageCodes': obj.includeAdditionalLanguageCodes,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyDescribeVoicesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyDescribeVoicesOutput(obj: PollyDescribeVoicesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Voices': obj.voices?.map(y => toJson_PollyVoice(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PollyGetLexiconInput
 */
export interface PollyGetLexiconInput {
  /**
   * @schema PollyGetLexiconInput#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'PollyGetLexiconInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyGetLexiconInput(obj: PollyGetLexiconInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyGetLexiconOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyGetLexiconOutput(obj: PollyGetLexiconOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lexicon': toJson_PollyLexicon(obj.lexicon),
    'LexiconAttributes': toJson_PollyLexiconAttributes(obj.lexiconAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PollyGetSpeechSynthesisTaskInput
 */
export interface PollyGetSpeechSynthesisTaskInput {
  /**
   * @schema PollyGetSpeechSynthesisTaskInput#TaskId
   */
  readonly taskId?: string;

}

/**
 * Converts an object of type 'PollyGetSpeechSynthesisTaskInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyGetSpeechSynthesisTaskInput(obj: PollyGetSpeechSynthesisTaskInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TaskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyGetSpeechSynthesisTaskOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyGetSpeechSynthesisTaskOutput(obj: PollyGetSpeechSynthesisTaskOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SynthesisTask': toJson_PollySynthesisTask(obj.synthesisTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyListLexiconsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyListLexiconsInput(obj: PollyListLexiconsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyListLexiconsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyListLexiconsOutput(obj: PollyListLexiconsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lexicons': obj.lexicons?.map(y => toJson_PollyLexiconDescription(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyListSpeechSynthesisTasksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyListSpeechSynthesisTasksInput(obj: PollyListSpeechSynthesisTasksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyListSpeechSynthesisTasksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyListSpeechSynthesisTasksOutput(obj: PollyListSpeechSynthesisTasksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SynthesisTasks': obj.synthesisTasks?.map(y => toJson_PollySynthesisTask(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PollyPutLexiconInput
 */
export interface PollyPutLexiconInput {
  /**
   * @schema PollyPutLexiconInput#Name
   */
  readonly name?: string;

  /**
   * @schema PollyPutLexiconInput#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'PollyPutLexiconInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyPutLexiconInput(obj: PollyPutLexiconInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema PollyPutLexiconOutput
 */
export interface PollyPutLexiconOutput {
}

/**
 * Converts an object of type 'PollyPutLexiconOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyPutLexiconOutput(obj: PollyPutLexiconOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly outputFormat?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

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
  readonly text?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema PollyStartSpeechSynthesisTaskInput#VoiceId
   */
  readonly voiceId?: string;

}

/**
 * Converts an object of type 'PollyStartSpeechSynthesisTaskInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyStartSpeechSynthesisTaskInput(obj: PollyStartSpeechSynthesisTaskInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'LanguageCode': obj.languageCode,
    'LexiconNames': obj.lexiconNames?.map(y => y),
    'OutputFormat': obj.outputFormat,
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
    'SampleRate': obj.sampleRate,
    'SnsTopicArn': obj.snsTopicArn,
    'SpeechMarkTypes': obj.speechMarkTypes?.map(y => y),
    'Text': obj.text,
    'TextType': obj.textType,
    'VoiceId': obj.voiceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyStartSpeechSynthesisTaskOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyStartSpeechSynthesisTaskOutput(obj: PollyStartSpeechSynthesisTaskOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SynthesisTask': toJson_PollySynthesisTask(obj.synthesisTask),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly outputFormat?: string;

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
  readonly text?: string;

  /**
   * @schema PollySynthesizeSpeechInput#TextType
   */
  readonly textType?: string;

  /**
   * @schema PollySynthesizeSpeechInput#VoiceId
   */
  readonly voiceId?: string;

}

/**
 * Converts an object of type 'PollySynthesizeSpeechInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollySynthesizeSpeechInput(obj: PollySynthesizeSpeechInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'LanguageCode': obj.languageCode,
    'LexiconNames': obj.lexiconNames?.map(y => y),
    'OutputFormat': obj.outputFormat,
    'SampleRate': obj.sampleRate,
    'SpeechMarkTypes': obj.speechMarkTypes?.map(y => y),
    'Text': obj.text,
    'TextType': obj.textType,
    'VoiceId': obj.voiceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollySynthesizeSpeechOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollySynthesizeSpeechOutput(obj: PollySynthesizeSpeechOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioStream': obj.audioStream,
    'ContentType': obj.contentType,
    'RequestCharacters': obj.requestCharacters,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyVoice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyVoice(obj: PollyVoice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gender': obj.gender,
    'Id': obj.id,
    'LanguageCode': obj.languageCode,
    'LanguageName': obj.languageName,
    'Name': obj.name,
    'AdditionalLanguageCodes': obj.additionalLanguageCodes?.map(y => y),
    'SupportedEngines': obj.supportedEngines?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyLexicon' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyLexicon(obj: PollyLexicon | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollyLexiconAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyLexiconAttributes(obj: PollyLexiconAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alphabet': obj.alphabet,
    'LanguageCode': obj.languageCode,
    'LastModified': obj.lastModified,
    'LexiconArn': obj.lexiconArn,
    'LexemesCount': obj.lexemesCount,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'PollySynthesisTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollySynthesisTask(obj: PollySynthesisTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Engine': obj.engine,
    'TaskId': obj.taskId,
    'TaskStatus': obj.taskStatus,
    'TaskStatusReason': obj.taskStatusReason,
    'OutputUri': obj.outputUri,
    'CreationTime': obj.creationTime,
    'RequestCharacters': obj.requestCharacters,
    'SnsTopicArn': obj.snsTopicArn,
    'LexiconNames': obj.lexiconNames?.map(y => y),
    'OutputFormat': obj.outputFormat,
    'SampleRate': obj.sampleRate,
    'SpeechMarkTypes': obj.speechMarkTypes?.map(y => y),
    'TextType': obj.textType,
    'VoiceId': obj.voiceId,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'PollyLexiconDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_PollyLexiconDescription(obj: PollyLexiconDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Attributes': toJson_PollyLexiconAttributes(obj.attributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
