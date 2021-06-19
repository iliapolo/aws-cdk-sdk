import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PollyClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteLexicon(input: shapes.PollyDeleteLexiconInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.DeleteLexicon'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLexicon', props);
  }

  public describeVoices(input: shapes.PollyDescribeVoicesInput): PollyResponsesDescribeVoices {
    return new PollyResponsesDescribeVoices(this, this.__resources, input);
  }

  public fetchLexicon(input: shapes.PollyGetLexiconInput): PollyResponsesFetchLexicon {
    return new PollyResponsesFetchLexicon(this, this.__resources, input);
  }

  public fetchSpeechSynthesisTask(input: shapes.PollyGetSpeechSynthesisTaskInput): PollyResponsesFetchSpeechSynthesisTask {
    return new PollyResponsesFetchSpeechSynthesisTask(this, this.__resources, input);
  }

  public listLexicons(input: shapes.PollyListLexiconsInput): PollyResponsesListLexicons {
    return new PollyResponsesListLexicons(this, this.__resources, input);
  }

  public listSpeechSynthesisTasks(input: shapes.PollyListSpeechSynthesisTasksInput): PollyResponsesListSpeechSynthesisTasks {
    return new PollyResponsesListSpeechSynthesisTasks(this, this.__resources, input);
  }

  public putLexicon(input: shapes.PollyPutLexiconInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.PutLexicon'),
        parameters: {
          Name: input.name,
          Content: input.content,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLexicon', props);
  }

  public startSpeechSynthesisTask(input: shapes.PollyStartSpeechSynthesisTaskInput): PollyResponsesStartSpeechSynthesisTask {
    return new PollyResponsesStartSpeechSynthesisTask(this, this.__resources, input);
  }

  public synthesizeSpeech(input: shapes.PollySynthesizeSpeechInput): PollyResponsesSynthesizeSpeech {
    return new PollyResponsesSynthesizeSpeech(this, this.__resources, input);
  }

}

export class PollyResponsesDescribeVoices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyDescribeVoicesInput) {
  }

  public get voices(): shapes.PollyVoice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVoices',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.DescribeVoices.Voices'),
        outputPath: 'Voices',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          IncludeAdditionalLanguageCodes: this.__input.includeAdditionalLanguageCodes,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVoices.Voices', props);
    return resource.getResponseField('Voices') as unknown as shapes.PollyVoice[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVoices',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.DescribeVoices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          IncludeAdditionalLanguageCodes: this.__input.includeAdditionalLanguageCodes,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVoices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PollyResponsesFetchLexicon {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyGetLexiconInput) {
  }

  public get lexicon(): PollyResponsesFetchLexiconLexicon {
    return new PollyResponsesFetchLexiconLexicon(this.__scope, this.__resources, this.__input);
  }

  public get lexiconAttributes(): PollyResponsesFetchLexiconLexiconAttributes {
    return new PollyResponsesFetchLexiconLexiconAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class PollyResponsesFetchLexiconLexicon {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyGetLexiconInput) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.Lexicon.Content'),
        outputPath: 'Lexicon.Content',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.Lexicon.Content', props);
    return resource.getResponseField('Lexicon.Content') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.Lexicon.Name'),
        outputPath: 'Lexicon.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.Lexicon.Name', props);
    return resource.getResponseField('Lexicon.Name') as unknown as string;
  }

}

export class PollyResponsesFetchLexiconLexiconAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyGetLexiconInput) {
  }

  public get alphabet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.Alphabet'),
        outputPath: 'LexiconAttributes.Alphabet',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.Alphabet', props);
    return resource.getResponseField('LexiconAttributes.Alphabet') as unknown as string;
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.LanguageCode'),
        outputPath: 'LexiconAttributes.LanguageCode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.LanguageCode', props);
    return resource.getResponseField('LexiconAttributes.LanguageCode') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.LastModified'),
        outputPath: 'LexiconAttributes.LastModified',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.LastModified', props);
    return resource.getResponseField('LexiconAttributes.LastModified') as unknown as string;
  }

  public get lexiconArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.LexiconArn'),
        outputPath: 'LexiconAttributes.LexiconArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.LexiconArn', props);
    return resource.getResponseField('LexiconAttributes.LexiconArn') as unknown as string;
  }

  public get lexemesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.LexemesCount'),
        outputPath: 'LexiconAttributes.LexemesCount',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.LexemesCount', props);
    return resource.getResponseField('LexiconAttributes.LexemesCount') as unknown as number;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLexicon',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetLexicon.LexiconAttributes.Size'),
        outputPath: 'LexiconAttributes.Size',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLexicon.LexiconAttributes.Size', props);
    return resource.getResponseField('LexiconAttributes.Size') as unknown as number;
  }

}

export class PollyResponsesFetchSpeechSynthesisTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyGetSpeechSynthesisTaskInput) {
  }

  public get synthesisTask(): PollyResponsesFetchSpeechSynthesisTaskSynthesisTask {
    return new PollyResponsesFetchSpeechSynthesisTaskSynthesisTask(this.__scope, this.__resources, this.__input);
  }

}

export class PollyResponsesFetchSpeechSynthesisTaskSynthesisTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyGetSpeechSynthesisTaskInput) {
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.Engine'),
        outputPath: 'SynthesisTask.Engine',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.Engine', props);
    return resource.getResponseField('SynthesisTask.Engine') as unknown as string;
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.TaskId'),
        outputPath: 'SynthesisTask.TaskId',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.TaskId', props);
    return resource.getResponseField('SynthesisTask.TaskId') as unknown as string;
  }

  public get taskStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.TaskStatus'),
        outputPath: 'SynthesisTask.TaskStatus',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.TaskStatus', props);
    return resource.getResponseField('SynthesisTask.TaskStatus') as unknown as string;
  }

  public get taskStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.TaskStatusReason'),
        outputPath: 'SynthesisTask.TaskStatusReason',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.TaskStatusReason', props);
    return resource.getResponseField('SynthesisTask.TaskStatusReason') as unknown as string;
  }

  public get outputUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.OutputUri'),
        outputPath: 'SynthesisTask.OutputUri',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.OutputUri', props);
    return resource.getResponseField('SynthesisTask.OutputUri') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.CreationTime'),
        outputPath: 'SynthesisTask.CreationTime',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.CreationTime', props);
    return resource.getResponseField('SynthesisTask.CreationTime') as unknown as string;
  }

  public get requestCharacters(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.RequestCharacters'),
        outputPath: 'SynthesisTask.RequestCharacters',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.RequestCharacters', props);
    return resource.getResponseField('SynthesisTask.RequestCharacters') as unknown as number;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.SnsTopicArn'),
        outputPath: 'SynthesisTask.SnsTopicArn',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.SnsTopicArn', props);
    return resource.getResponseField('SynthesisTask.SnsTopicArn') as unknown as string;
  }

  public get lexiconNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.LexiconNames'),
        outputPath: 'SynthesisTask.LexiconNames',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.LexiconNames', props);
    return resource.getResponseField('SynthesisTask.LexiconNames') as unknown as string[];
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.OutputFormat'),
        outputPath: 'SynthesisTask.OutputFormat',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.OutputFormat', props);
    return resource.getResponseField('SynthesisTask.OutputFormat') as unknown as string;
  }

  public get sampleRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.SampleRate'),
        outputPath: 'SynthesisTask.SampleRate',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.SampleRate', props);
    return resource.getResponseField('SynthesisTask.SampleRate') as unknown as string;
  }

  public get speechMarkTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes'),
        outputPath: 'SynthesisTask.SpeechMarkTypes',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes', props);
    return resource.getResponseField('SynthesisTask.SpeechMarkTypes') as unknown as string[];
  }

  public get textType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.TextType'),
        outputPath: 'SynthesisTask.TextType',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.TextType', props);
    return resource.getResponseField('SynthesisTask.TextType') as unknown as string;
  }

  public get voiceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.VoiceId'),
        outputPath: 'SynthesisTask.VoiceId',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.VoiceId', props);
    return resource.getResponseField('SynthesisTask.VoiceId') as unknown as string;
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.GetSpeechSynthesisTask.SynthesisTask.LanguageCode'),
        outputPath: 'SynthesisTask.LanguageCode',
        parameters: {
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSpeechSynthesisTask.SynthesisTask.LanguageCode', props);
    return resource.getResponseField('SynthesisTask.LanguageCode') as unknown as string;
  }

}

export class PollyResponsesListLexicons {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyListLexiconsInput) {
  }

  public get lexicons(): shapes.PollyLexiconDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLexicons',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.ListLexicons.Lexicons'),
        outputPath: 'Lexicons',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLexicons.Lexicons', props);
    return resource.getResponseField('Lexicons') as unknown as shapes.PollyLexiconDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLexicons',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.ListLexicons.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLexicons.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PollyResponsesListSpeechSynthesisTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyListSpeechSynthesisTasksInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSpeechSynthesisTasks',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.ListSpeechSynthesisTasks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSpeechSynthesisTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get synthesisTasks(): shapes.PollySynthesisTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSpeechSynthesisTasks',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.ListSpeechSynthesisTasks.SynthesisTasks'),
        outputPath: 'SynthesisTasks',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSpeechSynthesisTasks.SynthesisTasks', props);
    return resource.getResponseField('SynthesisTasks') as unknown as shapes.PollySynthesisTask[];
  }

}

export class PollyResponsesStartSpeechSynthesisTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyStartSpeechSynthesisTaskInput) {
  }

  public get synthesisTask(): PollyResponsesStartSpeechSynthesisTaskSynthesisTask {
    return new PollyResponsesStartSpeechSynthesisTaskSynthesisTask(this.__scope, this.__resources, this.__input);
  }

}

export class PollyResponsesStartSpeechSynthesisTaskSynthesisTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollyStartSpeechSynthesisTaskInput) {
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.Engine'),
        outputPath: 'SynthesisTask.Engine',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.Engine', props);
    return resource.getResponseField('SynthesisTask.Engine') as unknown as string;
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.TaskId'),
        outputPath: 'SynthesisTask.TaskId',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.TaskId', props);
    return resource.getResponseField('SynthesisTask.TaskId') as unknown as string;
  }

  public get taskStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.TaskStatus'),
        outputPath: 'SynthesisTask.TaskStatus',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.TaskStatus', props);
    return resource.getResponseField('SynthesisTask.TaskStatus') as unknown as string;
  }

  public get taskStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.TaskStatusReason'),
        outputPath: 'SynthesisTask.TaskStatusReason',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.TaskStatusReason', props);
    return resource.getResponseField('SynthesisTask.TaskStatusReason') as unknown as string;
  }

  public get outputUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.OutputUri'),
        outputPath: 'SynthesisTask.OutputUri',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.OutputUri', props);
    return resource.getResponseField('SynthesisTask.OutputUri') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.CreationTime'),
        outputPath: 'SynthesisTask.CreationTime',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.CreationTime', props);
    return resource.getResponseField('SynthesisTask.CreationTime') as unknown as string;
  }

  public get requestCharacters(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.RequestCharacters'),
        outputPath: 'SynthesisTask.RequestCharacters',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.RequestCharacters', props);
    return resource.getResponseField('SynthesisTask.RequestCharacters') as unknown as number;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.SnsTopicArn'),
        outputPath: 'SynthesisTask.SnsTopicArn',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.SnsTopicArn', props);
    return resource.getResponseField('SynthesisTask.SnsTopicArn') as unknown as string;
  }

  public get lexiconNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.LexiconNames'),
        outputPath: 'SynthesisTask.LexiconNames',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.LexiconNames', props);
    return resource.getResponseField('SynthesisTask.LexiconNames') as unknown as string[];
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.OutputFormat'),
        outputPath: 'SynthesisTask.OutputFormat',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.OutputFormat', props);
    return resource.getResponseField('SynthesisTask.OutputFormat') as unknown as string;
  }

  public get sampleRate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.SampleRate'),
        outputPath: 'SynthesisTask.SampleRate',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.SampleRate', props);
    return resource.getResponseField('SynthesisTask.SampleRate') as unknown as string;
  }

  public get speechMarkTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes'),
        outputPath: 'SynthesisTask.SpeechMarkTypes',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes', props);
    return resource.getResponseField('SynthesisTask.SpeechMarkTypes') as unknown as string[];
  }

  public get textType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.TextType'),
        outputPath: 'SynthesisTask.TextType',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.TextType', props);
    return resource.getResponseField('SynthesisTask.TextType') as unknown as string;
  }

  public get voiceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.VoiceId'),
        outputPath: 'SynthesisTask.VoiceId',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.VoiceId', props);
    return resource.getResponseField('SynthesisTask.VoiceId') as unknown as string;
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSpeechSynthesisTask',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.StartSpeechSynthesisTask.SynthesisTask.LanguageCode'),
        outputPath: 'SynthesisTask.LanguageCode',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          SampleRate: this.__input.sampleRate,
          SnsTopicArn: this.__input.snsTopicArn,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSpeechSynthesisTask.SynthesisTask.LanguageCode', props);
    return resource.getResponseField('SynthesisTask.LanguageCode') as unknown as string;
  }

}

export class PollyResponsesSynthesizeSpeech {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PollySynthesizeSpeechInput) {
  }

  public get audioStream(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'synthesizeSpeech',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.SynthesizeSpeech.AudioStream'),
        outputPath: 'AudioStream',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          SampleRate: this.__input.sampleRate,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SynthesizeSpeech.AudioStream', props);
    return resource.getResponseField('AudioStream') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'synthesizeSpeech',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.SynthesizeSpeech.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          SampleRate: this.__input.sampleRate,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SynthesizeSpeech.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get requestCharacters(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'synthesizeSpeech',
        service: 'Polly',
        physicalResourceId: cr.PhysicalResourceId.of('Polly.SynthesizeSpeech.RequestCharacters'),
        outputPath: 'RequestCharacters',
        parameters: {
          Engine: this.__input.engine,
          LanguageCode: this.__input.languageCode,
          LexiconNames: this.__input.lexiconNames,
          OutputFormat: this.__input.outputFormat,
          SampleRate: this.__input.sampleRate,
          SpeechMarkTypes: this.__input.speechMarkTypes,
          Text: this.__input.text,
          TextType: this.__input.textType,
          VoiceId: this.__input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SynthesizeSpeech.RequestCharacters', props);
    return resource.getResponseField('RequestCharacters') as unknown as number;
  }

}

