import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AutoScalingPlansClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createScalingPlan(input: shapes.AutoScalingPlansCreateScalingPlanRequest): AutoScalingPlansResponsesCreateScalingPlan {
    return new AutoScalingPlansResponsesCreateScalingPlan(this, this.__resources, input);
  }

  public deleteScalingPlan(input: shapes.AutoScalingPlansDeleteScalingPlanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScalingPlan',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.DeleteScalingPlan'),
        parameters: {
          ScalingPlanName: input.scalingPlanName,
          ScalingPlanVersion: input.scalingPlanVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScalingPlan', props);
  }

  public describeScalingPlanResources(input: shapes.AutoScalingPlansDescribeScalingPlanResourcesRequest): AutoScalingPlansResponsesDescribeScalingPlanResources {
    return new AutoScalingPlansResponsesDescribeScalingPlanResources(this, this.__resources, input);
  }

  public describeScalingPlans(input: shapes.AutoScalingPlansDescribeScalingPlansRequest): AutoScalingPlansResponsesDescribeScalingPlans {
    return new AutoScalingPlansResponsesDescribeScalingPlans(this, this.__resources, input);
  }

  public fetchScalingPlanResourceForecastData(input: shapes.AutoScalingPlansGetScalingPlanResourceForecastDataRequest): AutoScalingPlansResponsesFetchScalingPlanResourceForecastData {
    return new AutoScalingPlansResponsesFetchScalingPlanResourceForecastData(this, this.__resources, input);
  }

  public updateScalingPlan(input: shapes.AutoScalingPlansUpdateScalingPlanRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingPlan',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.UpdateScalingPlan'),
        parameters: {
          ScalingPlanName: input.scalingPlanName,
          ScalingPlanVersion: input.scalingPlanVersion,
          ApplicationSource: {
            CloudFormationStackARN: input.applicationSource?.cloudFormationStackArn,
            TagFilters: input.applicationSource?.tagFilters,
          },
          ScalingInstructions: input.scalingInstructions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateScalingPlan', props);
  }

}

export class AutoScalingPlansResponsesCreateScalingPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingPlansCreateScalingPlanRequest) {
  }

  public get scalingPlanVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScalingPlan',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.CreateScalingPlan.ScalingPlanVersion'),
        outputPath: 'ScalingPlanVersion',
        parameters: {
          ScalingPlanName: this.__input.scalingPlanName,
          ApplicationSource: {
            CloudFormationStackARN: this.__input.applicationSource.cloudFormationStackArn,
            TagFilters: this.__input.applicationSource.tagFilters,
          },
          ScalingInstructions: this.__input.scalingInstructions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScalingPlan.ScalingPlanVersion', props);
    return resource.getResponseField('ScalingPlanVersion') as unknown as number;
  }

}

export class AutoScalingPlansResponsesDescribeScalingPlanResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingPlansDescribeScalingPlanResourcesRequest) {
  }

  public get scalingPlanResources(): shapes.AutoScalingPlansScalingPlanResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPlanResources',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.DescribeScalingPlanResources.ScalingPlanResources'),
        outputPath: 'ScalingPlanResources',
        parameters: {
          ScalingPlanName: this.__input.scalingPlanName,
          ScalingPlanVersion: this.__input.scalingPlanVersion,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPlanResources.ScalingPlanResources', props);
    return resource.getResponseField('ScalingPlanResources') as unknown as shapes.AutoScalingPlansScalingPlanResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPlanResources',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.DescribeScalingPlanResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ScalingPlanName: this.__input.scalingPlanName,
          ScalingPlanVersion: this.__input.scalingPlanVersion,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPlanResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingPlansResponsesDescribeScalingPlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingPlansDescribeScalingPlansRequest) {
  }

  public get scalingPlans(): shapes.AutoScalingPlansScalingPlan[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPlans',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.DescribeScalingPlans.ScalingPlans'),
        outputPath: 'ScalingPlans',
        parameters: {
          ScalingPlanNames: this.__input.scalingPlanNames,
          ScalingPlanVersion: this.__input.scalingPlanVersion,
          ApplicationSources: this.__input.applicationSources,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPlans.ScalingPlans', props);
    return resource.getResponseField('ScalingPlans') as unknown as shapes.AutoScalingPlansScalingPlan[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingPlans',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.DescribeScalingPlans.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ScalingPlanNames: this.__input.scalingPlanNames,
          ScalingPlanVersion: this.__input.scalingPlanVersion,
          ApplicationSources: this.__input.applicationSources,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingPlans.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingPlansResponsesFetchScalingPlanResourceForecastData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AutoScalingPlansGetScalingPlanResourceForecastDataRequest) {
  }

  public get datapoints(): shapes.AutoScalingPlansDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScalingPlanResourceForecastData',
        service: 'AutoScalingPlans',
        physicalResourceId: cr.PhysicalResourceId.of('AutoScalingPlans.GetScalingPlanResourceForecastData.Datapoints'),
        outputPath: 'Datapoints',
        parameters: {
          ScalingPlanName: this.__input.scalingPlanName,
          ScalingPlanVersion: this.__input.scalingPlanVersion,
          ServiceNamespace: this.__input.serviceNamespace,
          ResourceId: this.__input.resourceId,
          ScalableDimension: this.__input.scalableDimension,
          ForecastDataType: this.__input.forecastDataType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScalingPlanResourceForecastData.Datapoints', props);
    return resource.getResponseField('Datapoints') as unknown as shapes.AutoScalingPlansDatapoint[];
  }

}

