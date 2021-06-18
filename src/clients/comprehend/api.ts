import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComprehendClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDetectDominantLanguage(input: shapes.ComprehendBatchDetectDominantLanguageRequest): ComprehendBatchDetectDominantLanguage {
    return new ComprehendBatchDetectDominantLanguage(this, 'BatchDetectDominantLanguage', this.__resources, input);
  }

  public batchDetectEntities(input: shapes.ComprehendBatchDetectEntitiesRequest): ComprehendBatchDetectEntities {
    return new ComprehendBatchDetectEntities(this, 'BatchDetectEntities', this.__resources, input);
  }

  public batchDetectKeyPhrases(input: shapes.ComprehendBatchDetectKeyPhrasesRequest): ComprehendBatchDetectKeyPhrases {
    return new ComprehendBatchDetectKeyPhrases(this, 'BatchDetectKeyPhrases', this.__resources, input);
  }

  public batchDetectSentiment(input: shapes.ComprehendBatchDetectSentimentRequest): ComprehendBatchDetectSentiment {
    return new ComprehendBatchDetectSentiment(this, 'BatchDetectSentiment', this.__resources, input);
  }

  public batchDetectSyntax(input: shapes.ComprehendBatchDetectSyntaxRequest): ComprehendBatchDetectSyntax {
    return new ComprehendBatchDetectSyntax(this, 'BatchDetectSyntax', this.__resources, input);
  }

  public classifyDocument(input: shapes.ComprehendClassifyDocumentRequest): ComprehendClassifyDocument {
    return new ComprehendClassifyDocument(this, 'ClassifyDocument', this.__resources, input);
  }

  public createDocumentClassifier(input: shapes.ComprehendCreateDocumentClassifierRequest): ComprehendCreateDocumentClassifier {
    return new ComprehendCreateDocumentClassifier(this, 'CreateDocumentClassifier', this.__resources, input);
  }

  public createEndpoint(input: shapes.ComprehendCreateEndpointRequest): ComprehendCreateEndpoint {
    return new ComprehendCreateEndpoint(this, 'CreateEndpoint', this.__resources, input);
  }

  public createEntityRecognizer(input: shapes.ComprehendCreateEntityRecognizerRequest): ComprehendCreateEntityRecognizer {
    return new ComprehendCreateEntityRecognizer(this, 'CreateEntityRecognizer', this.__resources, input);
  }

  public deleteDocumentClassifier(input: shapes.ComprehendDeleteDocumentClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DeleteDocumentClassifier'),
        parameters: {
          DocumentClassifierArn: input.documentClassifierArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDocumentClassifier', props);
  }

  public deleteEndpoint(input: shapes.ComprehendDeleteEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DeleteEndpoint'),
        parameters: {
          EndpointArn: input.endpointArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpoint', props);
  }

  public deleteEntityRecognizer(input: shapes.ComprehendDeleteEntityRecognizerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DeleteEntityRecognizer'),
        parameters: {
          EntityRecognizerArn: input.entityRecognizerArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEntityRecognizer', props);
  }

  public describeDocumentClassificationJob(input: shapes.ComprehendDescribeDocumentClassificationJobRequest): ComprehendDescribeDocumentClassificationJob {
    return new ComprehendDescribeDocumentClassificationJob(this, 'DescribeDocumentClassificationJob', this.__resources, input);
  }

  public describeDocumentClassifier(input: shapes.ComprehendDescribeDocumentClassifierRequest): ComprehendDescribeDocumentClassifier {
    return new ComprehendDescribeDocumentClassifier(this, 'DescribeDocumentClassifier', this.__resources, input);
  }

  public describeDominantLanguageDetectionJob(input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest): ComprehendDescribeDominantLanguageDetectionJob {
    return new ComprehendDescribeDominantLanguageDetectionJob(this, 'DescribeDominantLanguageDetectionJob', this.__resources, input);
  }

  public describeEndpoint(input: shapes.ComprehendDescribeEndpointRequest): ComprehendDescribeEndpoint {
    return new ComprehendDescribeEndpoint(this, 'DescribeEndpoint', this.__resources, input);
  }

  public describeEntitiesDetectionJob(input: shapes.ComprehendDescribeEntitiesDetectionJobRequest): ComprehendDescribeEntitiesDetectionJob {
    return new ComprehendDescribeEntitiesDetectionJob(this, 'DescribeEntitiesDetectionJob', this.__resources, input);
  }

  public describeEntityRecognizer(input: shapes.ComprehendDescribeEntityRecognizerRequest): ComprehendDescribeEntityRecognizer {
    return new ComprehendDescribeEntityRecognizer(this, 'DescribeEntityRecognizer', this.__resources, input);
  }

  public describeEventsDetectionJob(input: shapes.ComprehendDescribeEventsDetectionJobRequest): ComprehendDescribeEventsDetectionJob {
    return new ComprehendDescribeEventsDetectionJob(this, 'DescribeEventsDetectionJob', this.__resources, input);
  }

  public describeKeyPhrasesDetectionJob(input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest): ComprehendDescribeKeyPhrasesDetectionJob {
    return new ComprehendDescribeKeyPhrasesDetectionJob(this, 'DescribeKeyPhrasesDetectionJob', this.__resources, input);
  }

  public describePiiEntitiesDetectionJob(input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest): ComprehendDescribePiiEntitiesDetectionJob {
    return new ComprehendDescribePiiEntitiesDetectionJob(this, 'DescribePiiEntitiesDetectionJob', this.__resources, input);
  }

  public describeSentimentDetectionJob(input: shapes.ComprehendDescribeSentimentDetectionJobRequest): ComprehendDescribeSentimentDetectionJob {
    return new ComprehendDescribeSentimentDetectionJob(this, 'DescribeSentimentDetectionJob', this.__resources, input);
  }

  public describeTopicsDetectionJob(input: shapes.ComprehendDescribeTopicsDetectionJobRequest): ComprehendDescribeTopicsDetectionJob {
    return new ComprehendDescribeTopicsDetectionJob(this, 'DescribeTopicsDetectionJob', this.__resources, input);
  }

  public detectDominantLanguage(input: shapes.ComprehendDetectDominantLanguageRequest): ComprehendDetectDominantLanguage {
    return new ComprehendDetectDominantLanguage(this, 'DetectDominantLanguage', this.__resources, input);
  }

  public detectEntities(input: shapes.ComprehendDetectEntitiesRequest): ComprehendDetectEntities {
    return new ComprehendDetectEntities(this, 'DetectEntities', this.__resources, input);
  }

  public detectKeyPhrases(input: shapes.ComprehendDetectKeyPhrasesRequest): ComprehendDetectKeyPhrases {
    return new ComprehendDetectKeyPhrases(this, 'DetectKeyPhrases', this.__resources, input);
  }

  public detectPiiEntities(input: shapes.ComprehendDetectPiiEntitiesRequest): ComprehendDetectPiiEntities {
    return new ComprehendDetectPiiEntities(this, 'DetectPiiEntities', this.__resources, input);
  }

  public detectSentiment(input: shapes.ComprehendDetectSentimentRequest): ComprehendDetectSentiment {
    return new ComprehendDetectSentiment(this, 'DetectSentiment', this.__resources, input);
  }

  public detectSyntax(input: shapes.ComprehendDetectSyntaxRequest): ComprehendDetectSyntax {
    return new ComprehendDetectSyntax(this, 'DetectSyntax', this.__resources, input);
  }

  public listDocumentClassificationJobs(input: shapes.ComprehendListDocumentClassificationJobsRequest): ComprehendListDocumentClassificationJobs {
    return new ComprehendListDocumentClassificationJobs(this, 'ListDocumentClassificationJobs', this.__resources, input);
  }

  public listDocumentClassifiers(input: shapes.ComprehendListDocumentClassifiersRequest): ComprehendListDocumentClassifiers {
    return new ComprehendListDocumentClassifiers(this, 'ListDocumentClassifiers', this.__resources, input);
  }

  public listDominantLanguageDetectionJobs(input: shapes.ComprehendListDominantLanguageDetectionJobsRequest): ComprehendListDominantLanguageDetectionJobs {
    return new ComprehendListDominantLanguageDetectionJobs(this, 'ListDominantLanguageDetectionJobs', this.__resources, input);
  }

  public listEndpoints(input: shapes.ComprehendListEndpointsRequest): ComprehendListEndpoints {
    return new ComprehendListEndpoints(this, 'ListEndpoints', this.__resources, input);
  }

  public listEntitiesDetectionJobs(input: shapes.ComprehendListEntitiesDetectionJobsRequest): ComprehendListEntitiesDetectionJobs {
    return new ComprehendListEntitiesDetectionJobs(this, 'ListEntitiesDetectionJobs', this.__resources, input);
  }

  public listEntityRecognizers(input: shapes.ComprehendListEntityRecognizersRequest): ComprehendListEntityRecognizers {
    return new ComprehendListEntityRecognizers(this, 'ListEntityRecognizers', this.__resources, input);
  }

  public listEventsDetectionJobs(input: shapes.ComprehendListEventsDetectionJobsRequest): ComprehendListEventsDetectionJobs {
    return new ComprehendListEventsDetectionJobs(this, 'ListEventsDetectionJobs', this.__resources, input);
  }

  public listKeyPhrasesDetectionJobs(input: shapes.ComprehendListKeyPhrasesDetectionJobsRequest): ComprehendListKeyPhrasesDetectionJobs {
    return new ComprehendListKeyPhrasesDetectionJobs(this, 'ListKeyPhrasesDetectionJobs', this.__resources, input);
  }

  public listPiiEntitiesDetectionJobs(input: shapes.ComprehendListPiiEntitiesDetectionJobsRequest): ComprehendListPiiEntitiesDetectionJobs {
    return new ComprehendListPiiEntitiesDetectionJobs(this, 'ListPiiEntitiesDetectionJobs', this.__resources, input);
  }

  public listSentimentDetectionJobs(input: shapes.ComprehendListSentimentDetectionJobsRequest): ComprehendListSentimentDetectionJobs {
    return new ComprehendListSentimentDetectionJobs(this, 'ListSentimentDetectionJobs', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ComprehendListTagsForResourceRequest): ComprehendListTagsForResource {
    return new ComprehendListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTopicsDetectionJobs(input: shapes.ComprehendListTopicsDetectionJobsRequest): ComprehendListTopicsDetectionJobs {
    return new ComprehendListTopicsDetectionJobs(this, 'ListTopicsDetectionJobs', this.__resources, input);
  }

  public startDocumentClassificationJob(input: shapes.ComprehendStartDocumentClassificationJobRequest): ComprehendStartDocumentClassificationJob {
    return new ComprehendStartDocumentClassificationJob(this, 'StartDocumentClassificationJob', this.__resources, input);
  }

  public startDominantLanguageDetectionJob(input: shapes.ComprehendStartDominantLanguageDetectionJobRequest): ComprehendStartDominantLanguageDetectionJob {
    return new ComprehendStartDominantLanguageDetectionJob(this, 'StartDominantLanguageDetectionJob', this.__resources, input);
  }

  public startEntitiesDetectionJob(input: shapes.ComprehendStartEntitiesDetectionJobRequest): ComprehendStartEntitiesDetectionJob {
    return new ComprehendStartEntitiesDetectionJob(this, 'StartEntitiesDetectionJob', this.__resources, input);
  }

  public startEventsDetectionJob(input: shapes.ComprehendStartEventsDetectionJobRequest): ComprehendStartEventsDetectionJob {
    return new ComprehendStartEventsDetectionJob(this, 'StartEventsDetectionJob', this.__resources, input);
  }

  public startKeyPhrasesDetectionJob(input: shapes.ComprehendStartKeyPhrasesDetectionJobRequest): ComprehendStartKeyPhrasesDetectionJob {
    return new ComprehendStartKeyPhrasesDetectionJob(this, 'StartKeyPhrasesDetectionJob', this.__resources, input);
  }

  public startPiiEntitiesDetectionJob(input: shapes.ComprehendStartPiiEntitiesDetectionJobRequest): ComprehendStartPiiEntitiesDetectionJob {
    return new ComprehendStartPiiEntitiesDetectionJob(this, 'StartPiiEntitiesDetectionJob', this.__resources, input);
  }

  public startSentimentDetectionJob(input: shapes.ComprehendStartSentimentDetectionJobRequest): ComprehendStartSentimentDetectionJob {
    return new ComprehendStartSentimentDetectionJob(this, 'StartSentimentDetectionJob', this.__resources, input);
  }

  public startTopicsDetectionJob(input: shapes.ComprehendStartTopicsDetectionJobRequest): ComprehendStartTopicsDetectionJob {
    return new ComprehendStartTopicsDetectionJob(this, 'StartTopicsDetectionJob', this.__resources, input);
  }

  public stopDominantLanguageDetectionJob(input: shapes.ComprehendStopDominantLanguageDetectionJobRequest): ComprehendStopDominantLanguageDetectionJob {
    return new ComprehendStopDominantLanguageDetectionJob(this, 'StopDominantLanguageDetectionJob', this.__resources, input);
  }

  public stopEntitiesDetectionJob(input: shapes.ComprehendStopEntitiesDetectionJobRequest): ComprehendStopEntitiesDetectionJob {
    return new ComprehendStopEntitiesDetectionJob(this, 'StopEntitiesDetectionJob', this.__resources, input);
  }

  public stopEventsDetectionJob(input: shapes.ComprehendStopEventsDetectionJobRequest): ComprehendStopEventsDetectionJob {
    return new ComprehendStopEventsDetectionJob(this, 'StopEventsDetectionJob', this.__resources, input);
  }

  public stopKeyPhrasesDetectionJob(input: shapes.ComprehendStopKeyPhrasesDetectionJobRequest): ComprehendStopKeyPhrasesDetectionJob {
    return new ComprehendStopKeyPhrasesDetectionJob(this, 'StopKeyPhrasesDetectionJob', this.__resources, input);
  }

  public stopPiiEntitiesDetectionJob(input: shapes.ComprehendStopPiiEntitiesDetectionJobRequest): ComprehendStopPiiEntitiesDetectionJob {
    return new ComprehendStopPiiEntitiesDetectionJob(this, 'StopPiiEntitiesDetectionJob', this.__resources, input);
  }

  public stopSentimentDetectionJob(input: shapes.ComprehendStopSentimentDetectionJobRequest): ComprehendStopSentimentDetectionJob {
    return new ComprehendStopSentimentDetectionJob(this, 'StopSentimentDetectionJob', this.__resources, input);
  }

  public stopTrainingDocumentClassifier(input: shapes.ComprehendStopTrainingDocumentClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTrainingDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopTrainingDocumentClassifier'),
        parameters: {
          DocumentClassifierArn: input.documentClassifierArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopTrainingDocumentClassifier', props);
  }

  public stopTrainingEntityRecognizer(input: shapes.ComprehendStopTrainingEntityRecognizerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTrainingEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopTrainingEntityRecognizer'),
        parameters: {
          EntityRecognizerArn: input.entityRecognizerArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopTrainingEntityRecognizer', props);
  }

  public tagResource(input: shapes.ComprehendTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ComprehendUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateEndpoint(input: shapes.ComprehendUpdateEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.UpdateEndpoint'),
        parameters: {
          EndpointArn: input.endpointArn,
          DesiredInferenceUnits: input.desiredInferenceUnits,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEndpoint', props);
  }

}

export class ComprehendBatchDetectDominantLanguage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendBatchDetectDominantLanguageRequest) {
    super(scope, id);
  }

  public get resultList(): shapes.ComprehendBatchDetectDominantLanguageItemResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectDominantLanguage',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectDominantLanguage.ResultList'),
        outputPath: 'ResultList',
        parameters: {
          TextList: this.input.textList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectDominantLanguage.ResultList', props);
    return resource.getResponseField('ResultList') as unknown as shapes.ComprehendBatchDetectDominantLanguageItemResult[];
  }

  public get errorList(): shapes.ComprehendBatchItemError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectDominantLanguage',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectDominantLanguage.ErrorList'),
        outputPath: 'ErrorList',
        parameters: {
          TextList: this.input.textList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectDominantLanguage.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendBatchDetectEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendBatchDetectEntitiesRequest) {
    super(scope, id);
  }

  public get resultList(): shapes.ComprehendBatchDetectEntitiesItemResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectEntities',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectEntities.ResultList'),
        outputPath: 'ResultList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectEntities.ResultList', props);
    return resource.getResponseField('ResultList') as unknown as shapes.ComprehendBatchDetectEntitiesItemResult[];
  }

  public get errorList(): shapes.ComprehendBatchItemError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectEntities',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectEntities.ErrorList'),
        outputPath: 'ErrorList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectEntities.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendBatchDetectKeyPhrases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendBatchDetectKeyPhrasesRequest) {
    super(scope, id);
  }

  public get resultList(): shapes.ComprehendBatchDetectKeyPhrasesItemResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectKeyPhrases',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectKeyPhrases.ResultList'),
        outputPath: 'ResultList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectKeyPhrases.ResultList', props);
    return resource.getResponseField('ResultList') as unknown as shapes.ComprehendBatchDetectKeyPhrasesItemResult[];
  }

  public get errorList(): shapes.ComprehendBatchItemError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectKeyPhrases',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectKeyPhrases.ErrorList'),
        outputPath: 'ErrorList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectKeyPhrases.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendBatchDetectSentiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendBatchDetectSentimentRequest) {
    super(scope, id);
  }

  public get resultList(): shapes.ComprehendBatchDetectSentimentItemResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectSentiment.ResultList'),
        outputPath: 'ResultList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectSentiment.ResultList', props);
    return resource.getResponseField('ResultList') as unknown as shapes.ComprehendBatchDetectSentimentItemResult[];
  }

  public get errorList(): shapes.ComprehendBatchItemError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectSentiment.ErrorList'),
        outputPath: 'ErrorList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectSentiment.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendBatchDetectSyntax extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendBatchDetectSyntaxRequest) {
    super(scope, id);
  }

  public get resultList(): shapes.ComprehendBatchDetectSyntaxItemResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectSyntax',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectSyntax.ResultList'),
        outputPath: 'ResultList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectSyntax.ResultList', props);
    return resource.getResponseField('ResultList') as unknown as shapes.ComprehendBatchDetectSyntaxItemResult[];
  }

  public get errorList(): shapes.ComprehendBatchItemError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDetectSyntax',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.BatchDetectSyntax.ErrorList'),
        outputPath: 'ErrorList',
        parameters: {
          TextList: this.input.textList,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDetectSyntax.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendClassifyDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendClassifyDocumentRequest) {
    super(scope, id);
  }

  public get classes(): shapes.ComprehendDocumentClass[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'classifyDocument',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ClassifyDocument.Classes'),
        outputPath: 'Classes',
        parameters: {
          Text: this.input.text,
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClassifyDocument.Classes', props);
    return resource.getResponseField('Classes') as unknown as shapes.ComprehendDocumentClass[];
  }

  public get labels(): shapes.ComprehendDocumentLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'classifyDocument',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ClassifyDocument.Labels'),
        outputPath: 'Labels',
        parameters: {
          Text: this.input.text,
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ClassifyDocument.Labels', props);
    return resource.getResponseField('Labels') as unknown as shapes.ComprehendDocumentLabel[];
  }

}

export class ComprehendCreateDocumentClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendCreateDocumentClassifierRequest) {
    super(scope, id);
  }

  public get documentClassifierArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.CreateDocumentClassifier.DocumentClassifierArn'),
        outputPath: 'DocumentClassifierArn',
        parameters: {
          DocumentClassifierName: this.input.documentClassifierName,
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          Tags: this.input.tags,
          InputDataConfig: {
            DataFormat: this.input.inputDataConfig.dataFormat,
            S3Uri: this.input.inputDataConfig.s3Uri,
            LabelDelimiter: this.input.inputDataConfig.labelDelimiter,
            AugmentedManifests: this.input.inputDataConfig.augmentedManifests,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig?.s3Uri,
            KmsKeyId: this.input.outputDataConfig?.kmsKeyId,
          },
          ClientRequestToken: this.input.clientRequestToken,
          LanguageCode: this.input.languageCode,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
          Mode: this.input.mode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocumentClassifier.DocumentClassifierArn', props);
    return resource.getResponseField('DocumentClassifierArn') as unknown as string;
  }

}

export class ComprehendCreateEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendCreateEndpointRequest) {
    super(scope, id);
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.CreateEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          EndpointName: this.input.endpointName,
          ModelArn: this.input.modelArn,
          DesiredInferenceUnits: this.input.desiredInferenceUnits,
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class ComprehendCreateEntityRecognizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendCreateEntityRecognizerRequest) {
    super(scope, id);
  }

  public get entityRecognizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.CreateEntityRecognizer.EntityRecognizerArn'),
        outputPath: 'EntityRecognizerArn',
        parameters: {
          RecognizerName: this.input.recognizerName,
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          Tags: this.input.tags,
          InputDataConfig: {
            DataFormat: this.input.inputDataConfig.dataFormat,
            EntityTypes: this.input.inputDataConfig.entityTypes,
            Documents: {
              S3Uri: this.input.inputDataConfig.documents?.s3Uri,
            },
            Annotations: {
              S3Uri: this.input.inputDataConfig.annotations?.s3Uri,
            },
            EntityList: {
              S3Uri: this.input.inputDataConfig.entityList?.s3Uri,
            },
            AugmentedManifests: this.input.inputDataConfig.augmentedManifests,
          },
          ClientRequestToken: this.input.clientRequestToken,
          LanguageCode: this.input.languageCode,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEntityRecognizer.EntityRecognizerArn', props);
    return resource.getResponseField('EntityRecognizerArn') as unknown as string;
  }

}

export class ComprehendDescribeDocumentClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get documentClassificationJobProperties(): ComprehendDescribeDocumentClassificationJobDocumentClassificationJobProperties {
    return new ComprehendDescribeDocumentClassificationJobDocumentClassificationJobProperties(this, 'DocumentClassificationJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeDocumentClassificationJobDocumentClassificationJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobId'),
        outputPath: 'DocumentClassificationJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobId', props);
    return resource.getResponseField('DocumentClassificationJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobName'),
        outputPath: 'DocumentClassificationJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobName', props);
    return resource.getResponseField('DocumentClassificationJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobStatus'),
        outputPath: 'DocumentClassificationJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobStatus', props);
    return resource.getResponseField('DocumentClassificationJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.Message'),
        outputPath: 'DocumentClassificationJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.Message', props);
    return resource.getResponseField('DocumentClassificationJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.SubmitTime'),
        outputPath: 'DocumentClassificationJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.SubmitTime', props);
    return resource.getResponseField('DocumentClassificationJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.EndTime'),
        outputPath: 'DocumentClassificationJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.EndTime', props);
    return resource.getResponseField('DocumentClassificationJobProperties.EndTime') as unknown as string;
  }

  public get documentClassifierArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DocumentClassifierArn'),
        outputPath: 'DocumentClassificationJobProperties.DocumentClassifierArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DocumentClassifierArn', props);
    return resource.getResponseField('DocumentClassificationJobProperties.DocumentClassifierArn') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig {
    return new ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig {
    return new ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DataAccessRoleArn'),
        outputPath: 'DocumentClassificationJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('DocumentClassificationJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VolumeKmsKeyId'),
        outputPath: 'DocumentClassificationJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DocumentClassificationJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig {
    return new ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'DocumentClassificationJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('DocumentClassificationJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'DocumentClassificationJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('DocumentClassificationJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'DocumentClassificationJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('DocumentClassificationJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'DocumentClassificationJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('DocumentClassificationJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.Subnets'),
        outputPath: 'DocumentClassificationJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DocumentClassificationJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeDocumentClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get documentClassifierProperties(): ComprehendDescribeDocumentClassifierDocumentClassifierProperties {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierProperties(this, 'DocumentClassifierProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get documentClassifierArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.DocumentClassifierArn'),
        outputPath: 'DocumentClassifierProperties.DocumentClassifierArn',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.DocumentClassifierArn', props);
    return resource.getResponseField('DocumentClassifierProperties.DocumentClassifierArn') as unknown as string;
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.LanguageCode'),
        outputPath: 'DocumentClassifierProperties.LanguageCode',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.LanguageCode', props);
    return resource.getResponseField('DocumentClassifierProperties.LanguageCode') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.Status'),
        outputPath: 'DocumentClassifierProperties.Status',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.Status', props);
    return resource.getResponseField('DocumentClassifierProperties.Status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.Message'),
        outputPath: 'DocumentClassifierProperties.Message',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.Message', props);
    return resource.getResponseField('DocumentClassifierProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.SubmitTime'),
        outputPath: 'DocumentClassifierProperties.SubmitTime',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.SubmitTime', props);
    return resource.getResponseField('DocumentClassifierProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.EndTime'),
        outputPath: 'DocumentClassifierProperties.EndTime',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.EndTime', props);
    return resource.getResponseField('DocumentClassifierProperties.EndTime') as unknown as string;
  }

  public get trainingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.TrainingStartTime'),
        outputPath: 'DocumentClassifierProperties.TrainingStartTime',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.TrainingStartTime', props);
    return resource.getResponseField('DocumentClassifierProperties.TrainingStartTime') as unknown as string;
  }

  public get trainingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.TrainingEndTime'),
        outputPath: 'DocumentClassifierProperties.TrainingEndTime',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.TrainingEndTime', props);
    return resource.getResponseField('DocumentClassifierProperties.TrainingEndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get classifierMetadata(): ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata(this, 'ClassifierMetadata', this.__resources, this.input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.DataAccessRoleArn'),
        outputPath: 'DocumentClassifierProperties.DataAccessRoleArn',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.DataAccessRoleArn', props);
    return resource.getResponseField('DocumentClassifierProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.VolumeKmsKeyId'),
        outputPath: 'DocumentClassifierProperties.VolumeKmsKeyId',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DocumentClassifierProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.Mode'),
        outputPath: 'DocumentClassifierProperties.Mode',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.Mode', props);
    return resource.getResponseField('DocumentClassifierProperties.Mode') as unknown as string;
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.DataFormat'),
        outputPath: 'DocumentClassifierProperties.InputDataConfig.DataFormat',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.DataFormat', props);
    return resource.getResponseField('DocumentClassifierProperties.InputDataConfig.DataFormat') as unknown as string;
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.S3Uri'),
        outputPath: 'DocumentClassifierProperties.InputDataConfig.S3Uri',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('DocumentClassifierProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get labelDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.LabelDelimiter'),
        outputPath: 'DocumentClassifierProperties.InputDataConfig.LabelDelimiter',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.LabelDelimiter', props);
    return resource.getResponseField('DocumentClassifierProperties.InputDataConfig.LabelDelimiter') as unknown as string;
  }

  public get augmentedManifests(): shapes.ComprehendAugmentedManifestsListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.AugmentedManifests'),
        outputPath: 'DocumentClassifierProperties.InputDataConfig.AugmentedManifests',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.AugmentedManifests', props);
    return resource.getResponseField('DocumentClassifierProperties.InputDataConfig.AugmentedManifests') as unknown as shapes.ComprehendAugmentedManifestsListItem[];
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.S3Uri'),
        outputPath: 'DocumentClassifierProperties.OutputDataConfig.S3Uri',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('DocumentClassifierProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'DocumentClassifierProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DocumentClassifierProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get numberOfLabels(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfLabels'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.NumberOfLabels',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfLabels', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.NumberOfLabels') as unknown as number;
  }

  public get numberOfTrainedDocuments(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTrainedDocuments'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.NumberOfTrainedDocuments',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTrainedDocuments', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.NumberOfTrainedDocuments') as unknown as number;
  }

  public get numberOfTestDocuments(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments') as unknown as number;
  }

  public get evaluationMetrics(): ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics {
    return new ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics(this, 'EvaluationMetrics', this.__resources, this.input);
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get accuracy(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Accuracy'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Accuracy',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Accuracy', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Accuracy') as unknown as number;
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Precision'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Precision',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Precision', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Precision') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Recall'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Recall',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Recall', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Recall') as unknown as number;
  }

  public get f1Score(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.F1Score'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.F1Score',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.F1Score', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.F1Score') as unknown as number;
  }

  public get microPrecision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroPrecision'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroPrecision',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroPrecision', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroPrecision') as unknown as number;
  }

  public get microRecall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroRecall'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroRecall',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroRecall', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroRecall') as unknown as number;
  }

  public get microF1Score(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroF1Score'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroF1Score',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroF1Score', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroF1Score') as unknown as number;
  }

  public get hammingLoss(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss'),
        outputPath: 'DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss') as unknown as number;
  }

}

export class ComprehendDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDocumentClassifierRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'DocumentClassifierProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('DocumentClassifierProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.Subnets'),
        outputPath: 'DocumentClassifierProperties.VpcConfig.Subnets',
        parameters: {
          DocumentClassifierArn: this.input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DocumentClassifierProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeDominantLanguageDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get dominantLanguageDetectionJobProperties(): ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties {
    return new ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties(this, 'DominantLanguageDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobId'),
        outputPath: 'DominantLanguageDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobId', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobName'),
        outputPath: 'DominantLanguageDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobName', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobStatus'),
        outputPath: 'DominantLanguageDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.Message'),
        outputPath: 'DominantLanguageDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.Message', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.SubmitTime'),
        outputPath: 'DominantLanguageDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.EndTime'),
        outputPath: 'DominantLanguageDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.EndTime', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'DominantLanguageDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VolumeKmsKeyId'),
        outputPath: 'DominantLanguageDetectionJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig {
    return new ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'DominantLanguageDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'DominantLanguageDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'DominantLanguageDetectionJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.Subnets'),
        outputPath: 'DominantLanguageDetectionJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEndpointRequest) {
    super(scope, id);
  }

  public get endpointProperties(): ComprehendDescribeEndpointEndpointProperties {
    return new ComprehendDescribeEndpointEndpointProperties(this, 'EndpointProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeEndpointEndpointProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEndpointRequest) {
    super(scope, id);
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.EndpointArn'),
        outputPath: 'EndpointProperties.EndpointArn',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.EndpointArn', props);
    return resource.getResponseField('EndpointProperties.EndpointArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.Status'),
        outputPath: 'EndpointProperties.Status',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.Status', props);
    return resource.getResponseField('EndpointProperties.Status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.Message'),
        outputPath: 'EndpointProperties.Message',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.Message', props);
    return resource.getResponseField('EndpointProperties.Message') as unknown as string;
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.ModelArn'),
        outputPath: 'EndpointProperties.ModelArn',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.ModelArn', props);
    return resource.getResponseField('EndpointProperties.ModelArn') as unknown as string;
  }

  public get desiredInferenceUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.DesiredInferenceUnits'),
        outputPath: 'EndpointProperties.DesiredInferenceUnits',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.DesiredInferenceUnits', props);
    return resource.getResponseField('EndpointProperties.DesiredInferenceUnits') as unknown as number;
  }

  public get currentInferenceUnits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.CurrentInferenceUnits'),
        outputPath: 'EndpointProperties.CurrentInferenceUnits',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.CurrentInferenceUnits', props);
    return resource.getResponseField('EndpointProperties.CurrentInferenceUnits') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.CreationTime'),
        outputPath: 'EndpointProperties.CreationTime',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.CreationTime', props);
    return resource.getResponseField('EndpointProperties.CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.LastModifiedTime'),
        outputPath: 'EndpointProperties.LastModifiedTime',
        parameters: {
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointProperties.LastModifiedTime', props);
    return resource.getResponseField('EndpointProperties.LastModifiedTime') as unknown as string;
  }

}

export class ComprehendDescribeEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get entitiesDetectionJobProperties(): ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobProperties {
    return new ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobProperties(this, 'EntitiesDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobId'),
        outputPath: 'EntitiesDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobId', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobName'),
        outputPath: 'EntitiesDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobName', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobStatus'),
        outputPath: 'EntitiesDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.Message'),
        outputPath: 'EntitiesDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.Message', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.SubmitTime'),
        outputPath: 'EntitiesDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EndTime'),
        outputPath: 'EntitiesDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EndTime', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.EndTime') as unknown as string;
  }

  public get entityRecognizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EntityRecognizerArn'),
        outputPath: 'EntitiesDetectionJobProperties.EntityRecognizerArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EntityRecognizerArn', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.EntityRecognizerArn') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.LanguageCode'),
        outputPath: 'EntitiesDetectionJobProperties.LanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.LanguageCode', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'EntitiesDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VolumeKmsKeyId'),
        outputPath: 'EntitiesDetectionJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig {
    return new ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'EntitiesDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'EntitiesDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'EntitiesDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'EntitiesDetectionJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.Subnets'),
        outputPath: 'EntitiesDetectionJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeEntityRecognizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get entityRecognizerProperties(): ComprehendDescribeEntityRecognizerEntityRecognizerProperties {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerProperties(this, 'EntityRecognizerProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get entityRecognizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.EntityRecognizerArn'),
        outputPath: 'EntityRecognizerProperties.EntityRecognizerArn',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.EntityRecognizerArn', props);
    return resource.getResponseField('EntityRecognizerProperties.EntityRecognizerArn') as unknown as string;
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.LanguageCode'),
        outputPath: 'EntityRecognizerProperties.LanguageCode',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.LanguageCode', props);
    return resource.getResponseField('EntityRecognizerProperties.LanguageCode') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.Status'),
        outputPath: 'EntityRecognizerProperties.Status',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.Status', props);
    return resource.getResponseField('EntityRecognizerProperties.Status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.Message'),
        outputPath: 'EntityRecognizerProperties.Message',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.Message', props);
    return resource.getResponseField('EntityRecognizerProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.SubmitTime'),
        outputPath: 'EntityRecognizerProperties.SubmitTime',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.SubmitTime', props);
    return resource.getResponseField('EntityRecognizerProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.EndTime'),
        outputPath: 'EntityRecognizerProperties.EndTime',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.EndTime', props);
    return resource.getResponseField('EntityRecognizerProperties.EndTime') as unknown as string;
  }

  public get trainingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.TrainingStartTime'),
        outputPath: 'EntityRecognizerProperties.TrainingStartTime',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.TrainingStartTime', props);
    return resource.getResponseField('EntityRecognizerProperties.TrainingStartTime') as unknown as string;
  }

  public get trainingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.TrainingEndTime'),
        outputPath: 'EntityRecognizerProperties.TrainingEndTime',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.TrainingEndTime', props);
    return resource.getResponseField('EntityRecognizerProperties.TrainingEndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get recognizerMetadata(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata(this, 'RecognizerMetadata', this.__resources, this.input);
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.DataAccessRoleArn'),
        outputPath: 'EntityRecognizerProperties.DataAccessRoleArn',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.DataAccessRoleArn', props);
    return resource.getResponseField('EntityRecognizerProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.VolumeKmsKeyId'),
        outputPath: 'EntityRecognizerProperties.VolumeKmsKeyId',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('EntityRecognizerProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.DataFormat'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.DataFormat',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.DataFormat', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.DataFormat') as unknown as string;
  }

  public get entityTypes(): shapes.ComprehendEntityTypesListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityTypes'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.EntityTypes',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityTypes', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.EntityTypes') as unknown as shapes.ComprehendEntityTypesListItem[];
  }

  public get documents(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments(this, 'Documents', this.__resources, this.input);
  }

  public get annotations(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations(this, 'Annotations', this.__resources, this.input);
  }

  public get entityList(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList(this, 'EntityList', this.__resources, this.input);
  }

  public get augmentedManifests(): shapes.ComprehendAugmentedManifestsListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.AugmentedManifests'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.AugmentedManifests',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.AugmentedManifests', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.AugmentedManifests') as unknown as shapes.ComprehendAugmentedManifestsListItem[];
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Documents.S3Uri'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.Documents.S3Uri',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Documents.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.Documents.S3Uri') as unknown as string;
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri') as unknown as string;
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri'),
        outputPath: 'EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri') as unknown as string;
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get numberOfTrainedDocuments(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTrainedDocuments'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.NumberOfTrainedDocuments',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTrainedDocuments', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.NumberOfTrainedDocuments') as unknown as number;
  }

  public get numberOfTestDocuments(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments') as unknown as number;
  }

  public get evaluationMetrics(): ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics {
    return new ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics(this, 'EvaluationMetrics', this.__resources, this.input);
  }

  public get entityTypes(): shapes.ComprehendEntityRecognizerMetadataEntityTypesListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EntityTypes'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.EntityTypes',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EntityTypes', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EntityTypes') as unknown as shapes.ComprehendEntityRecognizerMetadataEntityTypesListItem[];
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Precision'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Precision',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Precision', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Precision') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Recall'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Recall',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Recall', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Recall') as unknown as number;
  }

  public get f1Score(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score'),
        outputPath: 'EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score') as unknown as number;
  }

}

export class ComprehendDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEntityRecognizerRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'EntityRecognizerProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('EntityRecognizerProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.Subnets'),
        outputPath: 'EntityRecognizerProperties.VpcConfig.Subnets',
        parameters: {
          EntityRecognizerArn: this.input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('EntityRecognizerProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeEventsDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get eventsDetectionJobProperties(): ComprehendDescribeEventsDetectionJobEventsDetectionJobProperties {
    return new ComprehendDescribeEventsDetectionJobEventsDetectionJobProperties(this, 'EventsDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeEventsDetectionJobEventsDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.JobId'),
        outputPath: 'EventsDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobId', props);
    return resource.getResponseField('EventsDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.JobName'),
        outputPath: 'EventsDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobName', props);
    return resource.getResponseField('EventsDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.JobStatus'),
        outputPath: 'EventsDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('EventsDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.Message'),
        outputPath: 'EventsDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.Message', props);
    return resource.getResponseField('EventsDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.SubmitTime'),
        outputPath: 'EventsDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('EventsDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.EndTime'),
        outputPath: 'EventsDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.EndTime', props);
    return resource.getResponseField('EventsDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.LanguageCode'),
        outputPath: 'EventsDetectionJobProperties.LanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.LanguageCode', props);
    return resource.getResponseField('EventsDetectionJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'EventsDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('EventsDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get targetEventTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.TargetEventTypes'),
        outputPath: 'EventsDetectionJobProperties.TargetEventTypes',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.TargetEventTypes', props);
    return resource.getResponseField('EventsDetectionJobProperties.TargetEventTypes') as unknown as string[];
  }

}

export class ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'EventsDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('EventsDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'EventsDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('EventsDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'EventsDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('EventsDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'EventsDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('EventsDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeKeyPhrasesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get keyPhrasesDetectionJobProperties(): ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties {
    return new ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties(this, 'KeyPhrasesDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobId'),
        outputPath: 'KeyPhrasesDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobId', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobName'),
        outputPath: 'KeyPhrasesDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobName', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobStatus'),
        outputPath: 'KeyPhrasesDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.Message'),
        outputPath: 'KeyPhrasesDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.Message', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.SubmitTime'),
        outputPath: 'KeyPhrasesDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.EndTime'),
        outputPath: 'KeyPhrasesDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.EndTime', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.LanguageCode'),
        outputPath: 'KeyPhrasesDetectionJobProperties.LanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.LanguageCode', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'KeyPhrasesDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VolumeKmsKeyId'),
        outputPath: 'KeyPhrasesDetectionJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig {
    return new ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'KeyPhrasesDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'KeyPhrasesDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'KeyPhrasesDetectionJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.Subnets'),
        outputPath: 'KeyPhrasesDetectionJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribePiiEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get piiEntitiesDetectionJobProperties(): ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties {
    return new ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties(this, 'PiiEntitiesDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobId'),
        outputPath: 'PiiEntitiesDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobId', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobName'),
        outputPath: 'PiiEntitiesDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobName', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobStatus'),
        outputPath: 'PiiEntitiesDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Message'),
        outputPath: 'PiiEntitiesDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Message', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.SubmitTime'),
        outputPath: 'PiiEntitiesDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.EndTime'),
        outputPath: 'PiiEntitiesDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.EndTime', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get redactionConfig(): ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig {
    return new ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig(this, 'RedactionConfig', this.__resources, this.input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.LanguageCode'),
        outputPath: 'PiiEntitiesDetectionJobProperties.LanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.LanguageCode', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'PiiEntitiesDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Mode'),
        outputPath: 'PiiEntitiesDetectionJobProperties.Mode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Mode', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.Mode') as unknown as string;
  }

}

export class ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'PiiEntitiesDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'PiiEntitiesDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get piiEntityTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.PiiEntityTypes'),
        outputPath: 'PiiEntitiesDetectionJobProperties.RedactionConfig.PiiEntityTypes',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.PiiEntityTypes', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.RedactionConfig.PiiEntityTypes') as unknown as string[];
  }

  public get maskMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskMode'),
        outputPath: 'PiiEntitiesDetectionJobProperties.RedactionConfig.MaskMode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskMode', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.RedactionConfig.MaskMode') as unknown as string;
  }

  public get maskCharacter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter'),
        outputPath: 'PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter') as unknown as string;
  }

}

export class ComprehendDescribeSentimentDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get sentimentDetectionJobProperties(): ComprehendDescribeSentimentDetectionJobSentimentDetectionJobProperties {
    return new ComprehendDescribeSentimentDetectionJobSentimentDetectionJobProperties(this, 'SentimentDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeSentimentDetectionJobSentimentDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobId'),
        outputPath: 'SentimentDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobId', props);
    return resource.getResponseField('SentimentDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobName'),
        outputPath: 'SentimentDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobName', props);
    return resource.getResponseField('SentimentDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobStatus'),
        outputPath: 'SentimentDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('SentimentDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.Message'),
        outputPath: 'SentimentDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.Message', props);
    return resource.getResponseField('SentimentDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.SubmitTime'),
        outputPath: 'SentimentDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('SentimentDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.EndTime'),
        outputPath: 'SentimentDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.EndTime', props);
    return resource.getResponseField('SentimentDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get languageCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.LanguageCode'),
        outputPath: 'SentimentDetectionJobProperties.LanguageCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.LanguageCode', props);
    return resource.getResponseField('SentimentDetectionJobProperties.LanguageCode') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'SentimentDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('SentimentDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VolumeKmsKeyId'),
        outputPath: 'SentimentDetectionJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('SentimentDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig {
    return new ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'SentimentDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('SentimentDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'SentimentDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('SentimentDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'SentimentDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('SentimentDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'SentimentDetectionJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('SentimentDetectionJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.Subnets'),
        outputPath: 'SentimentDetectionJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('SentimentDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDescribeTopicsDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get topicsDetectionJobProperties(): ComprehendDescribeTopicsDetectionJobTopicsDetectionJobProperties {
    return new ComprehendDescribeTopicsDetectionJobTopicsDetectionJobProperties(this, 'TopicsDetectionJobProperties', this.__resources, this.input);
  }

}

export class ComprehendDescribeTopicsDetectionJobTopicsDetectionJobProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobId'),
        outputPath: 'TopicsDetectionJobProperties.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobId', props);
    return resource.getResponseField('TopicsDetectionJobProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobName'),
        outputPath: 'TopicsDetectionJobProperties.JobName',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobName', props);
    return resource.getResponseField('TopicsDetectionJobProperties.JobName') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobStatus'),
        outputPath: 'TopicsDetectionJobProperties.JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobStatus', props);
    return resource.getResponseField('TopicsDetectionJobProperties.JobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.Message'),
        outputPath: 'TopicsDetectionJobProperties.Message',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.Message', props);
    return resource.getResponseField('TopicsDetectionJobProperties.Message') as unknown as string;
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.SubmitTime'),
        outputPath: 'TopicsDetectionJobProperties.SubmitTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.SubmitTime', props);
    return resource.getResponseField('TopicsDetectionJobProperties.SubmitTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.EndTime'),
        outputPath: 'TopicsDetectionJobProperties.EndTime',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.EndTime', props);
    return resource.getResponseField('TopicsDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig {
    return new ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig(this, 'InputDataConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig {
    return new ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get numberOfTopics(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.NumberOfTopics'),
        outputPath: 'TopicsDetectionJobProperties.NumberOfTopics',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.NumberOfTopics', props);
    return resource.getResponseField('TopicsDetectionJobProperties.NumberOfTopics') as unknown as number;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.DataAccessRoleArn'),
        outputPath: 'TopicsDetectionJobProperties.DataAccessRoleArn',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.DataAccessRoleArn', props);
    return resource.getResponseField('TopicsDetectionJobProperties.DataAccessRoleArn') as unknown as string;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VolumeKmsKeyId'),
        outputPath: 'TopicsDetectionJobProperties.VolumeKmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('TopicsDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig {
    return new ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.S3Uri'),
        outputPath: 'TopicsDetectionJobProperties.InputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.S3Uri', props);
    return resource.getResponseField('TopicsDetectionJobProperties.InputDataConfig.S3Uri') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.InputFormat'),
        outputPath: 'TopicsDetectionJobProperties.InputDataConfig.InputFormat',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('TopicsDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.S3Uri'),
        outputPath: 'TopicsDetectionJobProperties.OutputDataConfig.S3Uri',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.S3Uri', props);
    return resource.getResponseField('TopicsDetectionJobProperties.OutputDataConfig.S3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId'),
        outputPath: 'TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.SecurityGroupIds'),
        outputPath: 'TopicsDetectionJobProperties.VpcConfig.SecurityGroupIds',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('TopicsDetectionJobProperties.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.Subnets'),
        outputPath: 'TopicsDetectionJobProperties.VpcConfig.Subnets',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('TopicsDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendDetectDominantLanguage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectDominantLanguageRequest) {
    super(scope, id);
  }

  public get languages(): shapes.ComprehendDominantLanguage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectDominantLanguage',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectDominantLanguage.Languages'),
        outputPath: 'Languages',
        parameters: {
          Text: this.input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectDominantLanguage.Languages', props);
    return resource.getResponseField('Languages') as unknown as shapes.ComprehendDominantLanguage[];
  }

}

export class ComprehendDetectEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectEntitiesRequest) {
    super(scope, id);
  }

  public get entities(): shapes.ComprehendEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectEntities',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectEntities.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
          EndpointArn: this.input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectEntities.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendEntity[];
  }

}

export class ComprehendDetectKeyPhrases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectKeyPhrasesRequest) {
    super(scope, id);
  }

  public get keyPhrases(): shapes.ComprehendKeyPhrase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectKeyPhrases',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectKeyPhrases.KeyPhrases'),
        outputPath: 'KeyPhrases',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectKeyPhrases.KeyPhrases', props);
    return resource.getResponseField('KeyPhrases') as unknown as shapes.ComprehendKeyPhrase[];
  }

}

export class ComprehendDetectPiiEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectPiiEntitiesRequest) {
    super(scope, id);
  }

  public get entities(): shapes.ComprehendPiiEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectPiiEntities',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectPiiEntities.Entities'),
        outputPath: 'Entities',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectPiiEntities.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendPiiEntity[];
  }

}

export class ComprehendDetectSentiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectSentimentRequest) {
    super(scope, id);
  }

  public get sentiment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSentiment.Sentiment'),
        outputPath: 'Sentiment',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSentiment.Sentiment', props);
    return resource.getResponseField('Sentiment') as unknown as string;
  }

  public get sentimentScore(): ComprehendDetectSentimentSentimentScore {
    return new ComprehendDetectSentimentSentimentScore(this, 'SentimentScore', this.__resources, this.input);
  }

}

export class ComprehendDetectSentimentSentimentScore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectSentimentRequest) {
    super(scope, id);
  }

  public get positive(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSentiment.SentimentScore.Positive'),
        outputPath: 'SentimentScore.Positive',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSentiment.SentimentScore.Positive', props);
    return resource.getResponseField('SentimentScore.Positive') as unknown as number;
  }

  public get negative(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSentiment.SentimentScore.Negative'),
        outputPath: 'SentimentScore.Negative',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSentiment.SentimentScore.Negative', props);
    return resource.getResponseField('SentimentScore.Negative') as unknown as number;
  }

  public get neutral(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSentiment.SentimentScore.Neutral'),
        outputPath: 'SentimentScore.Neutral',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSentiment.SentimentScore.Neutral', props);
    return resource.getResponseField('SentimentScore.Neutral') as unknown as number;
  }

  public get mixed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSentiment',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSentiment.SentimentScore.Mixed'),
        outputPath: 'SentimentScore.Mixed',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSentiment.SentimentScore.Mixed', props);
    return resource.getResponseField('SentimentScore.Mixed') as unknown as number;
  }

}

export class ComprehendDetectSyntax extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendDetectSyntaxRequest) {
    super(scope, id);
  }

  public get syntaxTokens(): shapes.ComprehendSyntaxToken[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectSyntax',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DetectSyntax.SyntaxTokens'),
        outputPath: 'SyntaxTokens',
        parameters: {
          Text: this.input.text,
          LanguageCode: this.input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectSyntax.SyntaxTokens', props);
    return resource.getResponseField('SyntaxTokens') as unknown as shapes.ComprehendSyntaxToken[];
  }

}

export class ComprehendListDocumentClassificationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListDocumentClassificationJobsRequest) {
    super(scope, id);
  }

  public get documentClassificationJobPropertiesList(): shapes.ComprehendDocumentClassificationJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentClassificationJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDocumentClassificationJobs.DocumentClassificationJobPropertiesList'),
        outputPath: 'DocumentClassificationJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentClassificationJobs.DocumentClassificationJobPropertiesList', props);
    return resource.getResponseField('DocumentClassificationJobPropertiesList') as unknown as shapes.ComprehendDocumentClassificationJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentClassificationJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDocumentClassificationJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentClassificationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListDocumentClassifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListDocumentClassifiersRequest) {
    super(scope, id);
  }

  public get documentClassifierPropertiesList(): shapes.ComprehendDocumentClassifierProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentClassifiers',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDocumentClassifiers.DocumentClassifierPropertiesList'),
        outputPath: 'DocumentClassifierPropertiesList',
        parameters: {
          Filter: {
            Status: this.input.filter?.status,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentClassifiers.DocumentClassifierPropertiesList', props);
    return resource.getResponseField('DocumentClassifierPropertiesList') as unknown as shapes.ComprehendDocumentClassifierProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentClassifiers',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDocumentClassifiers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            Status: this.input.filter?.status,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentClassifiers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListDominantLanguageDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListDominantLanguageDetectionJobsRequest) {
    super(scope, id);
  }

  public get dominantLanguageDetectionJobPropertiesList(): shapes.ComprehendDominantLanguageDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDominantLanguageDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDominantLanguageDetectionJobs.DominantLanguageDetectionJobPropertiesList'),
        outputPath: 'DominantLanguageDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDominantLanguageDetectionJobs.DominantLanguageDetectionJobPropertiesList', props);
    return resource.getResponseField('DominantLanguageDetectionJobPropertiesList') as unknown as shapes.ComprehendDominantLanguageDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDominantLanguageDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListDominantLanguageDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDominantLanguageDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListEndpointsRequest) {
    super(scope, id);
  }

  public get endpointPropertiesList(): shapes.ComprehendEndpointProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEndpoints.EndpointPropertiesList'),
        outputPath: 'EndpointPropertiesList',
        parameters: {
          Filter: {
            ModelArn: this.input.filter?.modelArn,
            Status: this.input.filter?.status,
            CreationTimeBefore: this.input.filter?.creationTimeBefore,
            CreationTimeAfter: this.input.filter?.creationTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.EndpointPropertiesList', props);
    return resource.getResponseField('EndpointPropertiesList') as unknown as shapes.ComprehendEndpointProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            ModelArn: this.input.filter?.modelArn,
            Status: this.input.filter?.status,
            CreationTimeBefore: this.input.filter?.creationTimeBefore,
            CreationTimeAfter: this.input.filter?.creationTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListEntitiesDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListEntitiesDetectionJobsRequest) {
    super(scope, id);
  }

  public get entitiesDetectionJobPropertiesList(): shapes.ComprehendEntitiesDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEntitiesDetectionJobs.EntitiesDetectionJobPropertiesList'),
        outputPath: 'EntitiesDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesDetectionJobs.EntitiesDetectionJobPropertiesList', props);
    return resource.getResponseField('EntitiesDetectionJobPropertiesList') as unknown as shapes.ComprehendEntitiesDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitiesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEntitiesDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitiesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListEntityRecognizers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListEntityRecognizersRequest) {
    super(scope, id);
  }

  public get entityRecognizerPropertiesList(): shapes.ComprehendEntityRecognizerProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntityRecognizers',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEntityRecognizers.EntityRecognizerPropertiesList'),
        outputPath: 'EntityRecognizerPropertiesList',
        parameters: {
          Filter: {
            Status: this.input.filter?.status,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntityRecognizers.EntityRecognizerPropertiesList', props);
    return resource.getResponseField('EntityRecognizerPropertiesList') as unknown as shapes.ComprehendEntityRecognizerProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntityRecognizers',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEntityRecognizers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            Status: this.input.filter?.status,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntityRecognizers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListEventsDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListEventsDetectionJobsRequest) {
    super(scope, id);
  }

  public get eventsDetectionJobPropertiesList(): shapes.ComprehendEventsDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventsDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEventsDetectionJobs.EventsDetectionJobPropertiesList'),
        outputPath: 'EventsDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventsDetectionJobs.EventsDetectionJobPropertiesList', props);
    return resource.getResponseField('EventsDetectionJobPropertiesList') as unknown as shapes.ComprehendEventsDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventsDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListEventsDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventsDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListKeyPhrasesDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListKeyPhrasesDetectionJobsRequest) {
    super(scope, id);
  }

  public get keyPhrasesDetectionJobPropertiesList(): shapes.ComprehendKeyPhrasesDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeyPhrasesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListKeyPhrasesDetectionJobs.KeyPhrasesDetectionJobPropertiesList'),
        outputPath: 'KeyPhrasesDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyPhrasesDetectionJobs.KeyPhrasesDetectionJobPropertiesList', props);
    return resource.getResponseField('KeyPhrasesDetectionJobPropertiesList') as unknown as shapes.ComprehendKeyPhrasesDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeyPhrasesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListKeyPhrasesDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyPhrasesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListPiiEntitiesDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListPiiEntitiesDetectionJobsRequest) {
    super(scope, id);
  }

  public get piiEntitiesDetectionJobPropertiesList(): shapes.ComprehendPiiEntitiesDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPiiEntitiesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListPiiEntitiesDetectionJobs.PiiEntitiesDetectionJobPropertiesList'),
        outputPath: 'PiiEntitiesDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPiiEntitiesDetectionJobs.PiiEntitiesDetectionJobPropertiesList', props);
    return resource.getResponseField('PiiEntitiesDetectionJobPropertiesList') as unknown as shapes.ComprehendPiiEntitiesDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPiiEntitiesDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListPiiEntitiesDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPiiEntitiesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListSentimentDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListSentimentDetectionJobsRequest) {
    super(scope, id);
  }

  public get sentimentDetectionJobPropertiesList(): shapes.ComprehendSentimentDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSentimentDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListSentimentDetectionJobs.SentimentDetectionJobPropertiesList'),
        outputPath: 'SentimentDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSentimentDetectionJobs.SentimentDetectionJobPropertiesList', props);
    return resource.getResponseField('SentimentDetectionJobPropertiesList') as unknown as shapes.ComprehendSentimentDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSentimentDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListSentimentDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSentimentDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListTagsForResourceRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListTagsForResource.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get tags(): shapes.ComprehendTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ComprehendTag[];
  }

}

export class ComprehendListTopicsDetectionJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendListTopicsDetectionJobsRequest) {
    super(scope, id);
  }

  public get topicsDetectionJobPropertiesList(): shapes.ComprehendTopicsDetectionJobProperties[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicsDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListTopicsDetectionJobs.TopicsDetectionJobPropertiesList'),
        outputPath: 'TopicsDetectionJobPropertiesList',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicsDetectionJobs.TopicsDetectionJobPropertiesList', props);
    return resource.getResponseField('TopicsDetectionJobPropertiesList') as unknown as shapes.ComprehendTopicsDetectionJobProperties[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicsDetectionJobs',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ListTopicsDetectionJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filter: {
            JobName: this.input.filter?.jobName,
            JobStatus: this.input.filter?.jobStatus,
            SubmitTimeBefore: this.input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.input.filter?.submitTimeAfter,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicsDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendStartDocumentClassificationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartDocumentClassificationJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartDocumentClassificationJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobName: this.input.jobName,
          DocumentClassifierArn: this.input.documentClassifierArn,
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDocumentClassificationJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDocumentClassificationJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartDocumentClassificationJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobName: this.input.jobName,
          DocumentClassifierArn: this.input.documentClassifierArn,
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDocumentClassificationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartDominantLanguageDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartDominantLanguageDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDominantLanguageDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartDominantLanguageDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDominantLanguageDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartEntitiesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          EntityRecognizerArn: this.input.entityRecognizerArn,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartEntitiesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartEntitiesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          EntityRecognizerArn: this.input.entityRecognizerArn,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartEventsDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartEventsDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          TargetEventTypes: this.input.targetEventTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartEventsDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartEventsDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          TargetEventTypes: this.input.targetEventTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartEventsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartKeyPhrasesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartKeyPhrasesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartKeyPhrasesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartKeyPhrasesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartKeyPhrasesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartPiiEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartPiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartPiiEntitiesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          Mode: this.input.mode,
          RedactionConfig: {
            PiiEntityTypes: this.input.redactionConfig?.piiEntityTypes,
            MaskMode: this.input.redactionConfig?.maskMode,
            MaskCharacter: this.input.redactionConfig?.maskCharacter,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartPiiEntitiesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartPiiEntitiesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          Mode: this.input.mode,
          RedactionConfig: {
            PiiEntityTypes: this.input.redactionConfig?.piiEntityTypes,
            MaskMode: this.input.redactionConfig?.maskMode,
            MaskCharacter: this.input.redactionConfig?.maskCharacter,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartPiiEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartSentimentDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartSentimentDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSentimentDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartSentimentDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          LanguageCode: this.input.languageCode,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSentimentDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStartTopicsDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStartTopicsDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartTopicsDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          NumberOfTopics: this.input.numberOfTopics,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTopicsDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTopicsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StartTopicsDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          InputDataConfig: {
            S3Uri: this.input.inputDataConfig.s3Uri,
            InputFormat: this.input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.input.outputDataConfig.s3Uri,
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.input.dataAccessRoleArn,
          JobName: this.input.jobName,
          NumberOfTopics: this.input.numberOfTopics,
          ClientRequestToken: this.input.clientRequestToken,
          VolumeKmsKeyId: this.input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTopicsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopDominantLanguageDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopDominantLanguageDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopDominantLanguageDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDominantLanguageDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDominantLanguageDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopDominantLanguageDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDominantLanguageDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopEntitiesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopEntitiesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopEntitiesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopEventsDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopEventsDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopEventsDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopEventsDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopEventsDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopEventsDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopEventsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopKeyPhrasesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopKeyPhrasesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopKeyPhrasesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopKeyPhrasesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopKeyPhrasesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopKeyPhrasesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopKeyPhrasesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopPiiEntitiesDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopPiiEntitiesDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopPiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopPiiEntitiesDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopPiiEntitiesDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopPiiEntitiesDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopPiiEntitiesDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopPiiEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendStopSentimentDetectionJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ComprehendStopSentimentDetectionJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopSentimentDetectionJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopSentimentDetectionJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopSentimentDetectionJob',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.StopSentimentDetectionJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopSentimentDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

