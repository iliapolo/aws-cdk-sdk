import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PersonalizeRuntimeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchPersonalizedRanking(input: shapes.PersonalizeRuntimeGetPersonalizedRankingRequest): PersonalizeRuntimeResponsesFetchPersonalizedRanking {
    return new PersonalizeRuntimeResponsesFetchPersonalizedRanking(this, this.__resources, input);
  }

  public fetchRecommendations(input: shapes.PersonalizeRuntimeGetRecommendationsRequest): PersonalizeRuntimeResponsesFetchRecommendations {
    return new PersonalizeRuntimeResponsesFetchRecommendations(this, this.__resources, input);
  }

}

export class PersonalizeRuntimeResponsesFetchPersonalizedRanking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeRuntimeGetPersonalizedRankingRequest) {
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
          campaignArn: this.__input.campaignArn,
          inputList: this.__input.inputList,
          userId: this.__input.userId,
          context: this.__input.context,
          filterArn: this.__input.filterArn,
          filterValues: this.__input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonalizedRanking.personalizedRanking', props);
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
          campaignArn: this.__input.campaignArn,
          inputList: this.__input.inputList,
          userId: this.__input.userId,
          context: this.__input.context,
          filterArn: this.__input.filterArn,
          filterValues: this.__input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPersonalizedRanking.recommendationId', props);
    return resource.getResponseField('recommendationId') as unknown as string;
  }

}

export class PersonalizeRuntimeResponsesFetchRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeRuntimeGetRecommendationsRequest) {
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
          campaignArn: this.__input.campaignArn,
          itemId: this.__input.itemId,
          userId: this.__input.userId,
          numResults: this.__input.numResults,
          context: this.__input.context,
          filterArn: this.__input.filterArn,
          filterValues: this.__input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.itemList', props);
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
          campaignArn: this.__input.campaignArn,
          itemId: this.__input.itemId,
          userId: this.__input.userId,
          numResults: this.__input.numResults,
          context: this.__input.context,
          filterArn: this.__input.filterArn,
          filterValues: this.__input.filterValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecommendations.recommendationId', props);
    return resource.getResponseField('recommendationId') as unknown as string;
  }

}

