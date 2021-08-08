import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ComprehendClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDetectDominantLanguage(input: shapes.ComprehendBatchDetectDominantLanguageRequest): ComprehendResponsesBatchDetectDominantLanguage {
    return new ComprehendResponsesBatchDetectDominantLanguage(this, this.__resources, input);
  }

  public batchDetectEntities(input: shapes.ComprehendBatchDetectEntitiesRequest): ComprehendResponsesBatchDetectEntities {
    return new ComprehendResponsesBatchDetectEntities(this, this.__resources, input);
  }

  public batchDetectKeyPhrases(input: shapes.ComprehendBatchDetectKeyPhrasesRequest): ComprehendResponsesBatchDetectKeyPhrases {
    return new ComprehendResponsesBatchDetectKeyPhrases(this, this.__resources, input);
  }

  public batchDetectSentiment(input: shapes.ComprehendBatchDetectSentimentRequest): ComprehendResponsesBatchDetectSentiment {
    return new ComprehendResponsesBatchDetectSentiment(this, this.__resources, input);
  }

  public batchDetectSyntax(input: shapes.ComprehendBatchDetectSyntaxRequest): ComprehendResponsesBatchDetectSyntax {
    return new ComprehendResponsesBatchDetectSyntax(this, this.__resources, input);
  }

  public classifyDocument(input: shapes.ComprehendClassifyDocumentRequest): ComprehendResponsesClassifyDocument {
    return new ComprehendResponsesClassifyDocument(this, this.__resources, input);
  }

  public containsPiiEntities(input: shapes.ComprehendContainsPiiEntitiesRequest): ComprehendResponsesContainsPiiEntities {
    return new ComprehendResponsesContainsPiiEntities(this, this.__resources, input);
  }

  public createDocumentClassifier(input: shapes.ComprehendCreateDocumentClassifierRequest): ComprehendResponsesCreateDocumentClassifier {
    return new ComprehendResponsesCreateDocumentClassifier(this, this.__resources, input);
  }

  public createEndpoint(input: shapes.ComprehendCreateEndpointRequest): ComprehendResponsesCreateEndpoint {
    return new ComprehendResponsesCreateEndpoint(this, this.__resources, input);
  }

  public createEntityRecognizer(input: shapes.ComprehendCreateEntityRecognizerRequest): ComprehendResponsesCreateEntityRecognizer {
    return new ComprehendResponsesCreateEntityRecognizer(this, this.__resources, input);
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

  public describeDocumentClassificationJob(input: shapes.ComprehendDescribeDocumentClassificationJobRequest): ComprehendResponsesDescribeDocumentClassificationJob {
    return new ComprehendResponsesDescribeDocumentClassificationJob(this, this.__resources, input);
  }

  public describeDocumentClassifier(input: shapes.ComprehendDescribeDocumentClassifierRequest): ComprehendResponsesDescribeDocumentClassifier {
    return new ComprehendResponsesDescribeDocumentClassifier(this, this.__resources, input);
  }

  public describeDominantLanguageDetectionJob(input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest): ComprehendResponsesDescribeDominantLanguageDetectionJob {
    return new ComprehendResponsesDescribeDominantLanguageDetectionJob(this, this.__resources, input);
  }

  public describeEndpoint(input: shapes.ComprehendDescribeEndpointRequest): ComprehendResponsesDescribeEndpoint {
    return new ComprehendResponsesDescribeEndpoint(this, this.__resources, input);
  }

  public describeEntitiesDetectionJob(input: shapes.ComprehendDescribeEntitiesDetectionJobRequest): ComprehendResponsesDescribeEntitiesDetectionJob {
    return new ComprehendResponsesDescribeEntitiesDetectionJob(this, this.__resources, input);
  }

  public describeEntityRecognizer(input: shapes.ComprehendDescribeEntityRecognizerRequest): ComprehendResponsesDescribeEntityRecognizer {
    return new ComprehendResponsesDescribeEntityRecognizer(this, this.__resources, input);
  }

  public describeEventsDetectionJob(input: shapes.ComprehendDescribeEventsDetectionJobRequest): ComprehendResponsesDescribeEventsDetectionJob {
    return new ComprehendResponsesDescribeEventsDetectionJob(this, this.__resources, input);
  }

  public describeKeyPhrasesDetectionJob(input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest): ComprehendResponsesDescribeKeyPhrasesDetectionJob {
    return new ComprehendResponsesDescribeKeyPhrasesDetectionJob(this, this.__resources, input);
  }

  public describePiiEntitiesDetectionJob(input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest): ComprehendResponsesDescribePiiEntitiesDetectionJob {
    return new ComprehendResponsesDescribePiiEntitiesDetectionJob(this, this.__resources, input);
  }

  public describeSentimentDetectionJob(input: shapes.ComprehendDescribeSentimentDetectionJobRequest): ComprehendResponsesDescribeSentimentDetectionJob {
    return new ComprehendResponsesDescribeSentimentDetectionJob(this, this.__resources, input);
  }

  public describeTopicsDetectionJob(input: shapes.ComprehendDescribeTopicsDetectionJobRequest): ComprehendResponsesDescribeTopicsDetectionJob {
    return new ComprehendResponsesDescribeTopicsDetectionJob(this, this.__resources, input);
  }

  public detectDominantLanguage(input: shapes.ComprehendDetectDominantLanguageRequest): ComprehendResponsesDetectDominantLanguage {
    return new ComprehendResponsesDetectDominantLanguage(this, this.__resources, input);
  }

  public detectEntities(input: shapes.ComprehendDetectEntitiesRequest): ComprehendResponsesDetectEntities {
    return new ComprehendResponsesDetectEntities(this, this.__resources, input);
  }

  public detectKeyPhrases(input: shapes.ComprehendDetectKeyPhrasesRequest): ComprehendResponsesDetectKeyPhrases {
    return new ComprehendResponsesDetectKeyPhrases(this, this.__resources, input);
  }

  public detectPiiEntities(input: shapes.ComprehendDetectPiiEntitiesRequest): ComprehendResponsesDetectPiiEntities {
    return new ComprehendResponsesDetectPiiEntities(this, this.__resources, input);
  }

  public detectSentiment(input: shapes.ComprehendDetectSentimentRequest): ComprehendResponsesDetectSentiment {
    return new ComprehendResponsesDetectSentiment(this, this.__resources, input);
  }

  public detectSyntax(input: shapes.ComprehendDetectSyntaxRequest): ComprehendResponsesDetectSyntax {
    return new ComprehendResponsesDetectSyntax(this, this.__resources, input);
  }

  public listDocumentClassificationJobs(input: shapes.ComprehendListDocumentClassificationJobsRequest): ComprehendResponsesListDocumentClassificationJobs {
    return new ComprehendResponsesListDocumentClassificationJobs(this, this.__resources, input);
  }

  public listDocumentClassifiers(input: shapes.ComprehendListDocumentClassifiersRequest): ComprehendResponsesListDocumentClassifiers {
    return new ComprehendResponsesListDocumentClassifiers(this, this.__resources, input);
  }

  public listDominantLanguageDetectionJobs(input: shapes.ComprehendListDominantLanguageDetectionJobsRequest): ComprehendResponsesListDominantLanguageDetectionJobs {
    return new ComprehendResponsesListDominantLanguageDetectionJobs(this, this.__resources, input);
  }

  public listEndpoints(input: shapes.ComprehendListEndpointsRequest): ComprehendResponsesListEndpoints {
    return new ComprehendResponsesListEndpoints(this, this.__resources, input);
  }

  public listEntitiesDetectionJobs(input: shapes.ComprehendListEntitiesDetectionJobsRequest): ComprehendResponsesListEntitiesDetectionJobs {
    return new ComprehendResponsesListEntitiesDetectionJobs(this, this.__resources, input);
  }

  public listEntityRecognizers(input: shapes.ComprehendListEntityRecognizersRequest): ComprehendResponsesListEntityRecognizers {
    return new ComprehendResponsesListEntityRecognizers(this, this.__resources, input);
  }

  public listEventsDetectionJobs(input: shapes.ComprehendListEventsDetectionJobsRequest): ComprehendResponsesListEventsDetectionJobs {
    return new ComprehendResponsesListEventsDetectionJobs(this, this.__resources, input);
  }

  public listKeyPhrasesDetectionJobs(input: shapes.ComprehendListKeyPhrasesDetectionJobsRequest): ComprehendResponsesListKeyPhrasesDetectionJobs {
    return new ComprehendResponsesListKeyPhrasesDetectionJobs(this, this.__resources, input);
  }

  public listPiiEntitiesDetectionJobs(input: shapes.ComprehendListPiiEntitiesDetectionJobsRequest): ComprehendResponsesListPiiEntitiesDetectionJobs {
    return new ComprehendResponsesListPiiEntitiesDetectionJobs(this, this.__resources, input);
  }

  public listSentimentDetectionJobs(input: shapes.ComprehendListSentimentDetectionJobsRequest): ComprehendResponsesListSentimentDetectionJobs {
    return new ComprehendResponsesListSentimentDetectionJobs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ComprehendListTagsForResourceRequest): ComprehendResponsesListTagsForResource {
    return new ComprehendResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTopicsDetectionJobs(input: shapes.ComprehendListTopicsDetectionJobsRequest): ComprehendResponsesListTopicsDetectionJobs {
    return new ComprehendResponsesListTopicsDetectionJobs(this, this.__resources, input);
  }

  public startDocumentClassificationJob(input: shapes.ComprehendStartDocumentClassificationJobRequest): ComprehendResponsesStartDocumentClassificationJob {
    return new ComprehendResponsesStartDocumentClassificationJob(this, this.__resources, input);
  }

  public startDominantLanguageDetectionJob(input: shapes.ComprehendStartDominantLanguageDetectionJobRequest): ComprehendResponsesStartDominantLanguageDetectionJob {
    return new ComprehendResponsesStartDominantLanguageDetectionJob(this, this.__resources, input);
  }

  public startEntitiesDetectionJob(input: shapes.ComprehendStartEntitiesDetectionJobRequest): ComprehendResponsesStartEntitiesDetectionJob {
    return new ComprehendResponsesStartEntitiesDetectionJob(this, this.__resources, input);
  }

  public startEventsDetectionJob(input: shapes.ComprehendStartEventsDetectionJobRequest): ComprehendResponsesStartEventsDetectionJob {
    return new ComprehendResponsesStartEventsDetectionJob(this, this.__resources, input);
  }

  public startKeyPhrasesDetectionJob(input: shapes.ComprehendStartKeyPhrasesDetectionJobRequest): ComprehendResponsesStartKeyPhrasesDetectionJob {
    return new ComprehendResponsesStartKeyPhrasesDetectionJob(this, this.__resources, input);
  }

  public startPiiEntitiesDetectionJob(input: shapes.ComprehendStartPiiEntitiesDetectionJobRequest): ComprehendResponsesStartPiiEntitiesDetectionJob {
    return new ComprehendResponsesStartPiiEntitiesDetectionJob(this, this.__resources, input);
  }

  public startSentimentDetectionJob(input: shapes.ComprehendStartSentimentDetectionJobRequest): ComprehendResponsesStartSentimentDetectionJob {
    return new ComprehendResponsesStartSentimentDetectionJob(this, this.__resources, input);
  }

  public startTopicsDetectionJob(input: shapes.ComprehendStartTopicsDetectionJobRequest): ComprehendResponsesStartTopicsDetectionJob {
    return new ComprehendResponsesStartTopicsDetectionJob(this, this.__resources, input);
  }

  public stopDominantLanguageDetectionJob(input: shapes.ComprehendStopDominantLanguageDetectionJobRequest): ComprehendResponsesStopDominantLanguageDetectionJob {
    return new ComprehendResponsesStopDominantLanguageDetectionJob(this, this.__resources, input);
  }

  public stopEntitiesDetectionJob(input: shapes.ComprehendStopEntitiesDetectionJobRequest): ComprehendResponsesStopEntitiesDetectionJob {
    return new ComprehendResponsesStopEntitiesDetectionJob(this, this.__resources, input);
  }

  public stopEventsDetectionJob(input: shapes.ComprehendStopEventsDetectionJobRequest): ComprehendResponsesStopEventsDetectionJob {
    return new ComprehendResponsesStopEventsDetectionJob(this, this.__resources, input);
  }

  public stopKeyPhrasesDetectionJob(input: shapes.ComprehendStopKeyPhrasesDetectionJobRequest): ComprehendResponsesStopKeyPhrasesDetectionJob {
    return new ComprehendResponsesStopKeyPhrasesDetectionJob(this, this.__resources, input);
  }

  public stopPiiEntitiesDetectionJob(input: shapes.ComprehendStopPiiEntitiesDetectionJobRequest): ComprehendResponsesStopPiiEntitiesDetectionJob {
    return new ComprehendResponsesStopPiiEntitiesDetectionJob(this, this.__resources, input);
  }

  public stopSentimentDetectionJob(input: shapes.ComprehendStopSentimentDetectionJobRequest): ComprehendResponsesStopSentimentDetectionJob {
    return new ComprehendResponsesStopSentimentDetectionJob(this, this.__resources, input);
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

export class ComprehendResponsesBatchDetectDominantLanguage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendBatchDetectDominantLanguageRequest) {
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
          TextList: this.__input.textList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectDominantLanguage.ResultList', props);
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
          TextList: this.__input.textList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectDominantLanguage.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendResponsesBatchDetectEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendBatchDetectEntitiesRequest) {
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectEntities.ResultList', props);
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectEntities.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendResponsesBatchDetectKeyPhrases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendBatchDetectKeyPhrasesRequest) {
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectKeyPhrases.ResultList', props);
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectKeyPhrases.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendResponsesBatchDetectSentiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendBatchDetectSentimentRequest) {
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectSentiment.ResultList', props);
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectSentiment.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendResponsesBatchDetectSyntax {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendBatchDetectSyntaxRequest) {
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectSyntax.ResultList', props);
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
          TextList: this.__input.textList,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDetectSyntax.ErrorList', props);
    return resource.getResponseField('ErrorList') as unknown as shapes.ComprehendBatchItemError[];
  }

}

export class ComprehendResponsesClassifyDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendClassifyDocumentRequest) {
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
          Text: this.__input.text,
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClassifyDocument.Classes', props);
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
          Text: this.__input.text,
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ClassifyDocument.Labels', props);
    return resource.getResponseField('Labels') as unknown as shapes.ComprehendDocumentLabel[];
  }

}

export class ComprehendResponsesContainsPiiEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendContainsPiiEntitiesRequest) {
  }

  public get labels(): shapes.ComprehendEntityLabel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'containsPiiEntities',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.ContainsPiiEntities.Labels'),
        outputPath: 'Labels',
        parameters: {
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ContainsPiiEntities.Labels', props);
    return resource.getResponseField('Labels') as unknown as shapes.ComprehendEntityLabel[];
  }

}

export class ComprehendResponsesCreateDocumentClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendCreateDocumentClassifierRequest) {
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
          DocumentClassifierName: this.__input.documentClassifierName,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          Tags: this.__input.tags,
          InputDataConfig: {
            DataFormat: this.__input.inputDataConfig.dataFormat,
            S3Uri: this.__input.inputDataConfig.s3Uri,
            LabelDelimiter: this.__input.inputDataConfig.labelDelimiter,
            AugmentedManifests: this.__input.inputDataConfig.augmentedManifests,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig?.s3Uri,
            KmsKeyId: this.__input.outputDataConfig?.kmsKeyId,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          LanguageCode: this.__input.languageCode,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
          Mode: this.__input.mode,
          ModelKmsKeyId: this.__input.modelKmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocumentClassifier.DocumentClassifierArn', props);
    return resource.getResponseField('DocumentClassifierArn') as unknown as string;
  }

}

export class ComprehendResponsesCreateEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendCreateEndpointRequest) {
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
          EndpointName: this.__input.endpointName,
          ModelArn: this.__input.modelArn,
          DesiredInferenceUnits: this.__input.desiredInferenceUnits,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class ComprehendResponsesCreateEntityRecognizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendCreateEntityRecognizerRequest) {
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
          RecognizerName: this.__input.recognizerName,
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          Tags: this.__input.tags,
          InputDataConfig: {
            DataFormat: this.__input.inputDataConfig.dataFormat,
            EntityTypes: this.__input.inputDataConfig.entityTypes,
            Documents: {
              S3Uri: this.__input.inputDataConfig.documents?.s3Uri,
            },
            Annotations: {
              S3Uri: this.__input.inputDataConfig.annotations?.s3Uri,
            },
            EntityList: {
              S3Uri: this.__input.inputDataConfig.entityList?.s3Uri,
            },
            AugmentedManifests: this.__input.inputDataConfig.augmentedManifests,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          LanguageCode: this.__input.languageCode,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
          ModelKmsKeyId: this.__input.modelKmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEntityRecognizer.EntityRecognizerArn', props);
    return resource.getResponseField('EntityRecognizerArn') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDocumentClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
  }

  public get documentClassificationJobProperties(): ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties {
    return new ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.EndTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DocumentClassifierArn', props);
    return resource.getResponseField('DocumentClassificationJobProperties.DocumentClassifierArn') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DocumentClassificationJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('DocumentClassificationJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DocumentClassificationJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassificationJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassificationJob.DocumentClassificationJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DocumentClassificationJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeDocumentClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
  }

  public get documentClassifierProperties(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.DocumentClassifierArn', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.LanguageCode', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.Status', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.Message', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.SubmitTime', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.EndTime', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.TrainingStartTime', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.TrainingEndTime', props);
    return resource.getResponseField('DocumentClassifierProperties.TrainingEndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get classifierMetadata(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata(this.__scope, this.__resources, this.__input);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.DataAccessRoleArn', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DocumentClassifierProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.Mode', props);
    return resource.getResponseField('DocumentClassifierProperties.Mode') as unknown as string;
  }

  public get modelKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentClassifier',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeDocumentClassifier.DocumentClassifierProperties.ModelKmsKeyId'),
        outputPath: 'DocumentClassifierProperties.ModelKmsKeyId',
        parameters: {
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ModelKmsKeyId', props);
    return resource.getResponseField('DocumentClassifierProperties.ModelKmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.DataFormat', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.S3Uri', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.LabelDelimiter', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.InputDataConfig.AugmentedManifests', props);
    return resource.getResponseField('DocumentClassifierProperties.InputDataConfig.AugmentedManifests') as unknown as shapes.ComprehendAugmentedManifestsListItem[];
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.S3Uri', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DocumentClassifierProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfLabels', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTrainedDocuments', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.NumberOfTestDocuments') as unknown as number;
  }

  public get evaluationMetrics(): ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics {
    return new ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Accuracy', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Precision', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.Recall', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.F1Score', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroPrecision', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroRecall', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.MicroF1Score', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss', props);
    return resource.getResponseField('DocumentClassifierProperties.ClassifierMetadata.EvaluationMetrics.HammingLoss') as unknown as number;
  }

}

export class ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDocumentClassifierRequest) {
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.SecurityGroupIds', props);
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
          DocumentClassifierArn: this.__input.documentClassifierArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentClassifier.DocumentClassifierProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DocumentClassifierProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeDominantLanguageDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
  }

  public get dominantLanguageDetectionJobProperties(): ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties {
    return new ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.EndTime', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeDominantLanguageDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDominantLanguageDetectionJob.DominantLanguageDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('DominantLanguageDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEndpointRequest) {
  }

  public get endpointProperties(): ComprehendResponsesDescribeEndpointEndpointProperties {
    return new ComprehendResponsesDescribeEndpointEndpointProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeEndpointEndpointProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEndpointRequest) {
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.EndpointArn', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.Status', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.Message', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.ModelArn', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.DesiredInferenceUnits', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.CurrentInferenceUnits', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.CreationTime', props);
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
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.LastModifiedTime', props);
    return resource.getResponseField('EndpointProperties.LastModifiedTime') as unknown as string;
  }

  public get dataAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEndpoint.EndpointProperties.DataAccessRoleArn'),
        outputPath: 'EndpointProperties.DataAccessRoleArn',
        parameters: {
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointProperties.DataAccessRoleArn', props);
    return resource.getResponseField('EndpointProperties.DataAccessRoleArn') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
  }

  public get entitiesDetectionJobProperties(): ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties {
    return new ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EndTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.EntityRecognizerArn', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.EntityRecognizerArn') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.LanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntitiesDetectionJob.EntitiesDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('EntitiesDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeEntityRecognizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
  }

  public get entityRecognizerProperties(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.EntityRecognizerArn', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.LanguageCode', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.Status', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.Message', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.SubmitTime', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.EndTime', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.TrainingStartTime', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.TrainingEndTime', props);
    return resource.getResponseField('EntityRecognizerProperties.TrainingEndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get recognizerMetadata(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata(this.__scope, this.__resources, this.__input);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.DataAccessRoleArn', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('EntityRecognizerProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get modelKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntityRecognizer',
        service: 'Comprehend',
        physicalResourceId: cr.PhysicalResourceId.of('Comprehend.DescribeEntityRecognizer.EntityRecognizerProperties.ModelKmsKeyId'),
        outputPath: 'EntityRecognizerProperties.ModelKmsKeyId',
        parameters: {
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.ModelKmsKeyId', props);
    return resource.getResponseField('EntityRecognizerProperties.ModelKmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.DataFormat', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityTypes', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.EntityTypes') as unknown as shapes.ComprehendEntityTypesListItem[];
  }

  public get documents(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments(this.__scope, this.__resources, this.__input);
  }

  public get annotations(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations(this.__scope, this.__resources, this.__input);
  }

  public get entityList(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList(this.__scope, this.__resources, this.__input);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.AugmentedManifests', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.AugmentedManifests') as unknown as shapes.ComprehendAugmentedManifestsListItem[];
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Documents.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.Documents.S3Uri') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.Annotations.S3Uri') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri', props);
    return resource.getResponseField('EntityRecognizerProperties.InputDataConfig.EntityList.S3Uri') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTrainedDocuments', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.NumberOfTestDocuments') as unknown as number;
  }

  public get evaluationMetrics(): ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics {
    return new ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics(this.__scope, this.__resources, this.__input);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EntityTypes', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EntityTypes') as unknown as shapes.ComprehendEntityRecognizerMetadataEntityTypesListItem[];
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Precision', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.Recall', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score', props);
    return resource.getResponseField('EntityRecognizerProperties.RecognizerMetadata.EvaluationMetrics.F1Score') as unknown as number;
  }

}

export class ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEntityRecognizerRequest) {
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.SecurityGroupIds', props);
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
          EntityRecognizerArn: this.__input.entityRecognizerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntityRecognizer.EntityRecognizerProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('EntityRecognizerProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeEventsDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
  }

  public get eventsDetectionJobProperties(): ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties {
    return new ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.EndTime', props);
    return resource.getResponseField('EventsDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.LanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.TargetEventTypes', props);
    return resource.getResponseField('EventsDetectionJobProperties.TargetEventTypes') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('EventsDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeEventsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventsDetectionJob.EventsDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('EventsDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeKeyPhrasesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
  }

  public get keyPhrasesDetectionJobProperties(): ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties {
    return new ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.EndTime', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.LanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeKeyPhrasesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKeyPhrasesDetectionJob.KeyPhrasesDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('KeyPhrasesDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribePiiEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
  }

  public get piiEntitiesDetectionJobProperties(): ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties {
    return new ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.EndTime', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get redactionConfig(): ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig {
    return new ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.LanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.Mode', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.Mode') as unknown as string;
  }

}

export class ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribePiiEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.PiiEntityTypes', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskMode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePiiEntitiesDetectionJob.PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter', props);
    return resource.getResponseField('PiiEntitiesDetectionJobProperties.RedactionConfig.MaskCharacter') as unknown as string;
  }

}

export class ComprehendResponsesDescribeSentimentDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
  }

  public get sentimentDetectionJobProperties(): ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties {
    return new ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.EndTime', props);
    return resource.getResponseField('SentimentDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.LanguageCode', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('SentimentDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('SentimentDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('SentimentDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeSentimentDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSentimentDetectionJob.SentimentDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('SentimentDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDescribeTopicsDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
  }

  public get topicsDetectionJobProperties(): ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties {
    return new ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobName', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.JobStatus', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.Message', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.SubmitTime', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.EndTime', props);
    return resource.getResponseField('TopicsDetectionJobProperties.EndTime') as unknown as string;
  }

  public get inputDataConfig(): ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig {
    return new ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig {
    return new ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.NumberOfTopics', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.DataAccessRoleArn', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VolumeKmsKeyId', props);
    return resource.getResponseField('TopicsDetectionJobProperties.VolumeKmsKeyId') as unknown as string;
  }

  public get vpcConfig(): ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig {
    return new ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.InputDataConfig.InputFormat', props);
    return resource.getResponseField('TopicsDetectionJobProperties.InputDataConfig.InputFormat') as unknown as string;
  }

}

export class ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.S3Uri', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('TopicsDetectionJobProperties.OutputDataConfig.KmsKeyId') as unknown as string;
  }

}

export class ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDescribeTopicsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.SecurityGroupIds', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTopicsDetectionJob.TopicsDetectionJobProperties.VpcConfig.Subnets', props);
    return resource.getResponseField('TopicsDetectionJobProperties.VpcConfig.Subnets') as unknown as string[];
  }

}

export class ComprehendResponsesDetectDominantLanguage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectDominantLanguageRequest) {
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
          Text: this.__input.text,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectDominantLanguage.Languages', props);
    return resource.getResponseField('Languages') as unknown as shapes.ComprehendDominantLanguage[];
  }

}

export class ComprehendResponsesDetectEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectEntitiesRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
          EndpointArn: this.__input.endpointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectEntities.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendEntity[];
  }

}

export class ComprehendResponsesDetectKeyPhrases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectKeyPhrasesRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectKeyPhrases.KeyPhrases', props);
    return resource.getResponseField('KeyPhrases') as unknown as shapes.ComprehendKeyPhrase[];
  }

}

export class ComprehendResponsesDetectPiiEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectPiiEntitiesRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectPiiEntities.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.ComprehendPiiEntity[];
  }

}

export class ComprehendResponsesDetectSentiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectSentimentRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSentiment.Sentiment', props);
    return resource.getResponseField('Sentiment') as unknown as string;
  }

  public get sentimentScore(): ComprehendResponsesDetectSentimentSentimentScore {
    return new ComprehendResponsesDetectSentimentSentimentScore(this.__scope, this.__resources, this.__input);
  }

}

export class ComprehendResponsesDetectSentimentSentimentScore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectSentimentRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSentiment.SentimentScore.Positive', props);
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSentiment.SentimentScore.Negative', props);
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSentiment.SentimentScore.Neutral', props);
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSentiment.SentimentScore.Mixed', props);
    return resource.getResponseField('SentimentScore.Mixed') as unknown as number;
  }

}

export class ComprehendResponsesDetectSyntax {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendDetectSyntaxRequest) {
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
          Text: this.__input.text,
          LanguageCode: this.__input.languageCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectSyntax.SyntaxTokens', props);
    return resource.getResponseField('SyntaxTokens') as unknown as shapes.ComprehendSyntaxToken[];
  }

}

export class ComprehendResponsesListDocumentClassificationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListDocumentClassificationJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentClassificationJobs.DocumentClassificationJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentClassificationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListDocumentClassifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListDocumentClassifiersRequest) {
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
            Status: this.__input.filter?.status,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentClassifiers.DocumentClassifierPropertiesList', props);
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
            Status: this.__input.filter?.status,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentClassifiers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListDominantLanguageDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListDominantLanguageDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDominantLanguageDetectionJobs.DominantLanguageDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDominantLanguageDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListEndpointsRequest) {
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
            ModelArn: this.__input.filter?.modelArn,
            Status: this.__input.filter?.status,
            CreationTimeBefore: this.__input.filter?.creationTimeBefore,
            CreationTimeAfter: this.__input.filter?.creationTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.EndpointPropertiesList', props);
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
            ModelArn: this.__input.filter?.modelArn,
            Status: this.__input.filter?.status,
            CreationTimeBefore: this.__input.filter?.creationTimeBefore,
            CreationTimeAfter: this.__input.filter?.creationTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListEntitiesDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListEntitiesDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesDetectionJobs.EntitiesDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitiesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListEntityRecognizers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListEntityRecognizersRequest) {
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
            Status: this.__input.filter?.status,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntityRecognizers.EntityRecognizerPropertiesList', props);
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
            Status: this.__input.filter?.status,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntityRecognizers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListEventsDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListEventsDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventsDetectionJobs.EventsDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventsDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListKeyPhrasesDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListKeyPhrasesDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeyPhrasesDetectionJobs.KeyPhrasesDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeyPhrasesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListPiiEntitiesDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListPiiEntitiesDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPiiEntitiesDetectionJobs.PiiEntitiesDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPiiEntitiesDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListSentimentDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListSentimentDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSentimentDetectionJobs.SentimentDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSentimentDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceArn', props);
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ComprehendTag[];
  }

}

export class ComprehendResponsesListTopicsDetectionJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendListTopicsDetectionJobsRequest) {
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicsDetectionJobs.TopicsDetectionJobPropertiesList', props);
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
            JobName: this.__input.filter?.jobName,
            JobStatus: this.__input.filter?.jobStatus,
            SubmitTimeBefore: this.__input.filter?.submitTimeBefore,
            SubmitTimeAfter: this.__input.filter?.submitTimeAfter,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicsDetectionJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ComprehendResponsesStartDocumentClassificationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartDocumentClassificationJobRequest) {
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
          JobName: this.__input.jobName,
          DocumentClassifierArn: this.__input.documentClassifierArn,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDocumentClassificationJob.JobId', props);
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
          JobName: this.__input.jobName,
          DocumentClassifierArn: this.__input.documentClassifierArn,
          InputDataConfig: {
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDocumentClassificationJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartDominantLanguageDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartDominantLanguageDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDominantLanguageDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDominantLanguageDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartEntitiesDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          EntityRecognizerArn: this.__input.entityRecognizerArn,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEntitiesDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          EntityRecognizerArn: this.__input.entityRecognizerArn,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartEventsDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartEventsDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          TargetEventTypes: this.__input.targetEventTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEventsDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          TargetEventTypes: this.__input.targetEventTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartEventsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartKeyPhrasesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartKeyPhrasesDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartKeyPhrasesDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartKeyPhrasesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartPiiEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartPiiEntitiesDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          Mode: this.__input.mode,
          RedactionConfig: {
            PiiEntityTypes: this.__input.redactionConfig?.piiEntityTypes,
            MaskMode: this.__input.redactionConfig?.maskMode,
            MaskCharacter: this.__input.redactionConfig?.maskCharacter,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPiiEntitiesDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          Mode: this.__input.mode,
          RedactionConfig: {
            PiiEntityTypes: this.__input.redactionConfig?.piiEntityTypes,
            MaskMode: this.__input.redactionConfig?.maskMode,
            MaskCharacter: this.__input.redactionConfig?.maskCharacter,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPiiEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartSentimentDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartSentimentDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSentimentDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          LanguageCode: this.__input.languageCode,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSentimentDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStartTopicsDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStartTopicsDetectionJobRequest) {
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          NumberOfTopics: this.__input.numberOfTopics,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTopicsDetectionJob.JobId', props);
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
            S3Uri: this.__input.inputDataConfig.s3Uri,
            InputFormat: this.__input.inputDataConfig.inputFormat,
          },
          OutputDataConfig: {
            S3Uri: this.__input.outputDataConfig.s3Uri,
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
          },
          DataAccessRoleArn: this.__input.dataAccessRoleArn,
          JobName: this.__input.jobName,
          NumberOfTopics: this.__input.numberOfTopics,
          ClientRequestToken: this.__input.clientRequestToken,
          VolumeKmsKeyId: this.__input.volumeKmsKeyId,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTopicsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopDominantLanguageDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopDominantLanguageDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDominantLanguageDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDominantLanguageDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopEntitiesDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopEventsDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopEventsDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopEventsDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopEventsDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopKeyPhrasesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopKeyPhrasesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopKeyPhrasesDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopKeyPhrasesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopPiiEntitiesDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopPiiEntitiesDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopPiiEntitiesDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopPiiEntitiesDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

export class ComprehendResponsesStopSentimentDetectionJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ComprehendStopSentimentDetectionJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopSentimentDetectionJob.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopSentimentDetectionJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

}

