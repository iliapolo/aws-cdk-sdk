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

  public describeVoices(input: shapes.PollyDescribeVoicesInput): PollyDescribeVoices {
    return new PollyDescribeVoices(this, 'DescribeVoices', this.__resources, input);
  }

  public fetchLexicon(input: shapes.PollyGetLexiconInput): PollyFetchLexicon {
    return new PollyFetchLexicon(this, 'FetchLexicon', this.__resources, input);
  }

  public fetchSpeechSynthesisTask(input: shapes.PollyGetSpeechSynthesisTaskInput): PollyFetchSpeechSynthesisTask {
    return new PollyFetchSpeechSynthesisTask(this, 'FetchSpeechSynthesisTask', this.__resources, input);
  }

  public listLexicons(input: shapes.PollyListLexiconsInput): PollyListLexicons {
    return new PollyListLexicons(this, 'ListLexicons', this.__resources, input);
  }

  public listSpeechSynthesisTasks(input: shapes.PollyListSpeechSynthesisTasksInput): PollyListSpeechSynthesisTasks {
    return new PollyListSpeechSynthesisTasks(this, 'ListSpeechSynthesisTasks', this.__resources, input);
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

  public startSpeechSynthesisTask(input: shapes.PollyStartSpeechSynthesisTaskInput): PollyStartSpeechSynthesisTask {
    return new PollyStartSpeechSynthesisTask(this, 'StartSpeechSynthesisTask', this.__resources, input);
  }

  public synthesizeSpeech(input: shapes.PollySynthesizeSpeechInput): PollySynthesizeSpeech {
    return new PollySynthesizeSpeech(this, 'SynthesizeSpeech', this.__resources, input);
  }

}

export class PollyDescribeVoices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyDescribeVoicesInput) {
    super(scope, id);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          IncludeAdditionalLanguageCodes: this.input.includeAdditionalLanguageCodes,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVoices.Voices', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          IncludeAdditionalLanguageCodes: this.input.includeAdditionalLanguageCodes,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVoices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PollyFetchLexicon extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyGetLexiconInput) {
    super(scope, id);
  }

  public get lexicon(): PollyFetchLexiconLexicon {
    return new PollyFetchLexiconLexicon(this, 'Lexicon', this.__resources, this.input);
  }

  public get lexiconAttributes(): PollyFetchLexiconLexiconAttributes {
    return new PollyFetchLexiconLexiconAttributes(this, 'LexiconAttributes', this.__resources, this.input);
  }

}

export class PollyFetchLexiconLexicon extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyGetLexiconInput) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.Lexicon.Content', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.Lexicon.Name', props);
    return resource.getResponseField('Lexicon.Name') as unknown as string;
  }

}

export class PollyFetchLexiconLexiconAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyGetLexiconInput) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.Alphabet', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.LanguageCode', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.LastModified', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.LexiconArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.LexemesCount', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLexicon.LexiconAttributes.Size', props);
    return resource.getResponseField('LexiconAttributes.Size') as unknown as number;
  }

}

export class PollyFetchSpeechSynthesisTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyGetSpeechSynthesisTaskInput) {
    super(scope, id);
  }

  public get synthesisTask(): PollyFetchSpeechSynthesisTaskSynthesisTask {
    return new PollyFetchSpeechSynthesisTaskSynthesisTask(this, 'SynthesisTask', this.__resources, this.input);
  }

}

export class PollyFetchSpeechSynthesisTaskSynthesisTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyGetSpeechSynthesisTaskInput) {
    super(scope, id);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.Engine', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.TaskId', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.TaskStatus', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.TaskStatusReason', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.OutputUri', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.CreationTime', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.RequestCharacters', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.SnsTopicArn', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.LexiconNames', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.OutputFormat', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.SampleRate', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.TextType', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.VoiceId', props);
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
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSpeechSynthesisTask.SynthesisTask.LanguageCode', props);
    return resource.getResponseField('SynthesisTask.LanguageCode') as unknown as string;
  }

}

export class PollyListLexicons extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyListLexiconsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLexicons.Lexicons', props);
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
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLexicons.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PollyListSpeechSynthesisTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyListSpeechSynthesisTasksInput) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSpeechSynthesisTasks.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSpeechSynthesisTasks.SynthesisTasks', props);
    return resource.getResponseField('SynthesisTasks') as unknown as shapes.PollySynthesisTask[];
  }

}

export class PollyStartSpeechSynthesisTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyStartSpeechSynthesisTaskInput) {
    super(scope, id);
  }

  public get synthesisTask(): PollyStartSpeechSynthesisTaskSynthesisTask {
    return new PollyStartSpeechSynthesisTaskSynthesisTask(this, 'SynthesisTask', this.__resources, this.input);
  }

}

export class PollyStartSpeechSynthesisTaskSynthesisTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollyStartSpeechSynthesisTaskInput) {
    super(scope, id);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.Engine', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.TaskId', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.TaskStatus', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.TaskStatusReason', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.OutputUri', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.CreationTime', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.RequestCharacters', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.SnsTopicArn', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.LexiconNames', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.OutputFormat', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.SampleRate', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.SpeechMarkTypes', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.TextType', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.VoiceId', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          SampleRate: this.input.sampleRate,
          SnsTopicArn: this.input.snsTopicArn,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSpeechSynthesisTask.SynthesisTask.LanguageCode', props);
    return resource.getResponseField('SynthesisTask.LanguageCode') as unknown as string;
  }

}

export class PollySynthesizeSpeech extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PollySynthesizeSpeechInput) {
    super(scope, id);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          SampleRate: this.input.sampleRate,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SynthesizeSpeech.AudioStream', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          SampleRate: this.input.sampleRate,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SynthesizeSpeech.ContentType', props);
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
          Engine: this.input.engine,
          LanguageCode: this.input.languageCode,
          LexiconNames: this.input.lexiconNames,
          OutputFormat: this.input.outputFormat,
          SampleRate: this.input.sampleRate,
          SpeechMarkTypes: this.input.speechMarkTypes,
          Text: this.input.text,
          TextType: this.input.textType,
          VoiceId: this.input.voiceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SynthesizeSpeech.RequestCharacters', props);
    return resource.getResponseField('RequestCharacters') as unknown as number;
  }

}

