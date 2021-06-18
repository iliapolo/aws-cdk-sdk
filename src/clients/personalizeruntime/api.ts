import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PersonalizeRuntimeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchPersonalizedRanking(input: shapes.PersonalizeRuntimeGetPersonalizedRankingRequest): PersonalizeRuntimeFetchPersonalizedRanking {
    return new PersonalizeRuntimeFetchPersonalizedRanking(this, 'FetchPersonalizedRanking', this.__resources, input);
  }

  public fetchRecommendations(input: shapes.PersonalizeRuntimeGetRecommendationsRequest): PersonalizeRuntimeFetchRecommendations {
    return new PersonalizeRuntimeFetchRecommendations(this, 'FetchRecommendations', this.__resources, input);
  }

}

export class PersonalizeRuntimeFetchPersonalizedRanking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeRuntimeGetPersonalizedRankingRequest) {
    super(scope, id);
  }

  public get personalizedRanking(): shapes.PersonalizeRuntimePredictedItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonalizedRanking',
        service: 'PersonalizeRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeRuntime.GetPersonalizedRanking.personalizedRanking'),
        outputPath: 'personalizedRanking',
        parameters: {
          campaignArn: this.input.campaignArn,
          inputList: this.input.inputList,
          userId: this.input.userId,
          context: this.input.context,
          filterArn: this.input.filterArn,
          filterValues: this.input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPersonalizedRanking.personalizedRanking', props);
    return resource.getResponseField('personalizedRanking') as unknown as shapes.PersonalizeRuntimePredictedItem[];
  }

  public get recommendationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPersonalizedRanking',
        service: 'PersonalizeRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeRuntime.GetPersonalizedRanking.recommendationId'),
        outputPath: 'recommendationId',
        parameters: {
          campaignArn: this.input.campaignArn,
          inputList: this.input.inputList,
          userId: this.input.userId,
          context: this.input.context,
          filterArn: this.input.filterArn,
          filterValues: this.input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPersonalizedRanking.recommendationId', props);
    return resource.getResponseField('recommendationId') as unknown as string;
  }

}

export class PersonalizeRuntimeFetchRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeRuntimeGetRecommendationsRequest) {
    super(scope, id);
  }

  public get itemList(): shapes.PersonalizeRuntimePredictedItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'PersonalizeRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeRuntime.GetRecommendations.itemList'),
        outputPath: 'itemList',
        parameters: {
          campaignArn: this.input.campaignArn,
          itemId: this.input.itemId,
          userId: this.input.userId,
          numResults: this.input.numResults,
          context: this.input.context,
          filterArn: this.input.filterArn,
          filterValues: this.input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.itemList', props);
    return resource.getResponseField('itemList') as unknown as shapes.PersonalizeRuntimePredictedItem[];
  }

  public get recommendationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecommendations',
        service: 'PersonalizeRuntime',
        physicalResourceId: cr.PhysicalResourceId.of('PersonalizeRuntime.GetRecommendations.recommendationId'),
        outputPath: 'recommendationId',
        parameters: {
          campaignArn: this.input.campaignArn,
          itemId: this.input.itemId,
          userId: this.input.userId,
          numResults: this.input.numResults,
          context: this.input.context,
          filterArn: this.input.filterArn,
          filterValues: this.input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecommendations.recommendationId', props);
    return resource.getResponseField('recommendationId') as unknown as string;
  }

}

