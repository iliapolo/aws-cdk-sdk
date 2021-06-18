import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AutoScalingPlansClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createScalingPlan(input: shapes.AutoScalingPlansCreateScalingPlanRequest): AutoScalingPlansCreateScalingPlan {
    return new AutoScalingPlansCreateScalingPlan(this, 'CreateScalingPlan', this.__resources, input);
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

  public describeScalingPlanResources(input: shapes.AutoScalingPlansDescribeScalingPlanResourcesRequest): AutoScalingPlansDescribeScalingPlanResources {
    return new AutoScalingPlansDescribeScalingPlanResources(this, 'DescribeScalingPlanResources', this.__resources, input);
  }

  public describeScalingPlans(input: shapes.AutoScalingPlansDescribeScalingPlansRequest): AutoScalingPlansDescribeScalingPlans {
    return new AutoScalingPlansDescribeScalingPlans(this, 'DescribeScalingPlans', this.__resources, input);
  }

  public fetchScalingPlanResourceForecastData(input: shapes.AutoScalingPlansGetScalingPlanResourceForecastDataRequest): AutoScalingPlansFetchScalingPlanResourceForecastData {
    return new AutoScalingPlansFetchScalingPlanResourceForecastData(this, 'FetchScalingPlanResourceForecastData', this.__resources, input);
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

export class AutoScalingPlansCreateScalingPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingPlansCreateScalingPlanRequest) {
    super(scope, id);
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
          ScalingPlanName: this.input.scalingPlanName,
          ApplicationSource: {
            CloudFormationStackARN: this.input.applicationSource.cloudFormationStackArn,
            TagFilters: this.input.applicationSource.tagFilters,
          },
          ScalingInstructions: this.input.scalingInstructions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScalingPlan.ScalingPlanVersion', props);
    return resource.getResponseField('ScalingPlanVersion') as unknown as number;
  }

}

export class AutoScalingPlansDescribeScalingPlanResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingPlansDescribeScalingPlanResourcesRequest) {
    super(scope, id);
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
          ScalingPlanName: this.input.scalingPlanName,
          ScalingPlanVersion: this.input.scalingPlanVersion,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPlanResources.ScalingPlanResources', props);
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
          ScalingPlanName: this.input.scalingPlanName,
          ScalingPlanVersion: this.input.scalingPlanVersion,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPlanResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingPlansDescribeScalingPlans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingPlansDescribeScalingPlansRequest) {
    super(scope, id);
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
          ScalingPlanNames: this.input.scalingPlanNames,
          ScalingPlanVersion: this.input.scalingPlanVersion,
          ApplicationSources: this.input.applicationSources,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPlans.ScalingPlans', props);
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
          ScalingPlanNames: this.input.scalingPlanNames,
          ScalingPlanVersion: this.input.scalingPlanVersion,
          ApplicationSources: this.input.applicationSources,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingPlans.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AutoScalingPlansFetchScalingPlanResourceForecastData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AutoScalingPlansGetScalingPlanResourceForecastDataRequest) {
    super(scope, id);
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
          ScalingPlanName: this.input.scalingPlanName,
          ScalingPlanVersion: this.input.scalingPlanVersion,
          ServiceNamespace: this.input.serviceNamespace,
          ResourceId: this.input.resourceId,
          ScalableDimension: this.input.scalableDimension,
          ForecastDataType: this.input.forecastDataType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetScalingPlanResourceForecastData.Datapoints', props);
    return resource.getResponseField('Datapoints') as unknown as shapes.AutoScalingPlansDatapoint[];
  }

}

