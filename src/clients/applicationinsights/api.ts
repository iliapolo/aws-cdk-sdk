import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApplicationInsightsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApplication(input: shapes.ApplicationInsightsCreateApplicationRequest): ApplicationInsightsResponsesCreateApplication {
    return new ApplicationInsightsResponsesCreateApplication(this, this.__resources, input);
  }

  public createComponent(input: shapes.ApplicationInsightsCreateComponentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateComponent'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
          ComponentName: input.componentName,
          ResourceList: input.resourceList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateComponent', props);
  }

  public createLogPattern(input: shapes.ApplicationInsightsCreateLogPatternRequest): ApplicationInsightsResponsesCreateLogPattern {
    return new ApplicationInsightsResponsesCreateLogPattern(this, this.__resources, input);
  }

  public deleteApplication(input: shapes.ApplicationInsightsDeleteApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DeleteApplication'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteComponent(input: shapes.ApplicationInsightsDeleteComponentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DeleteComponent'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
          ComponentName: input.componentName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteComponent', props);
  }

  public deleteLogPattern(input: shapes.ApplicationInsightsDeleteLogPatternRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DeleteLogPattern'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
          PatternSetName: input.patternSetName,
          PatternName: input.patternName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLogPattern', props);
  }

  public describeApplication(input: shapes.ApplicationInsightsDescribeApplicationRequest): ApplicationInsightsResponsesDescribeApplication {
    return new ApplicationInsightsResponsesDescribeApplication(this, this.__resources, input);
  }

  public describeComponent(input: shapes.ApplicationInsightsDescribeComponentRequest): ApplicationInsightsResponsesDescribeComponent {
    return new ApplicationInsightsResponsesDescribeComponent(this, this.__resources, input);
  }

  public describeComponentConfiguration(input: shapes.ApplicationInsightsDescribeComponentConfigurationRequest): ApplicationInsightsResponsesDescribeComponentConfiguration {
    return new ApplicationInsightsResponsesDescribeComponentConfiguration(this, this.__resources, input);
  }

  public describeComponentConfigurationRecommendation(input: shapes.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest): ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation {
    return new ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation(this, this.__resources, input);
  }

  public describeLogPattern(input: shapes.ApplicationInsightsDescribeLogPatternRequest): ApplicationInsightsResponsesDescribeLogPattern {
    return new ApplicationInsightsResponsesDescribeLogPattern(this, this.__resources, input);
  }

  public describeObservation(input: shapes.ApplicationInsightsDescribeObservationRequest): ApplicationInsightsResponsesDescribeObservation {
    return new ApplicationInsightsResponsesDescribeObservation(this, this.__resources, input);
  }

  public describeProblem(input: shapes.ApplicationInsightsDescribeProblemRequest): ApplicationInsightsResponsesDescribeProblem {
    return new ApplicationInsightsResponsesDescribeProblem(this, this.__resources, input);
  }

  public describeProblemObservations(input: shapes.ApplicationInsightsDescribeProblemObservationsRequest): ApplicationInsightsResponsesDescribeProblemObservations {
    return new ApplicationInsightsResponsesDescribeProblemObservations(this, this.__resources, input);
  }

  public listApplications(input: shapes.ApplicationInsightsListApplicationsRequest): ApplicationInsightsResponsesListApplications {
    return new ApplicationInsightsResponsesListApplications(this, this.__resources, input);
  }

  public listComponents(input: shapes.ApplicationInsightsListComponentsRequest): ApplicationInsightsResponsesListComponents {
    return new ApplicationInsightsResponsesListComponents(this, this.__resources, input);
  }

  public listConfigurationHistory(input: shapes.ApplicationInsightsListConfigurationHistoryRequest): ApplicationInsightsResponsesListConfigurationHistory {
    return new ApplicationInsightsResponsesListConfigurationHistory(this, this.__resources, input);
  }

  public listLogPatternSets(input: shapes.ApplicationInsightsListLogPatternSetsRequest): ApplicationInsightsResponsesListLogPatternSets {
    return new ApplicationInsightsResponsesListLogPatternSets(this, this.__resources, input);
  }

  public listLogPatterns(input: shapes.ApplicationInsightsListLogPatternsRequest): ApplicationInsightsResponsesListLogPatterns {
    return new ApplicationInsightsResponsesListLogPatterns(this, this.__resources, input);
  }

  public listProblems(input: shapes.ApplicationInsightsListProblemsRequest): ApplicationInsightsResponsesListProblems {
    return new ApplicationInsightsResponsesListProblems(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ApplicationInsightsListTagsForResourceRequest): ApplicationInsightsResponsesListTagsForResource {
    return new ApplicationInsightsResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.ApplicationInsightsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ApplicationInsightsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.ApplicationInsightsUpdateApplicationRequest): ApplicationInsightsResponsesUpdateApplication {
    return new ApplicationInsightsResponsesUpdateApplication(this, this.__resources, input);
  }

  public updateComponent(input: shapes.ApplicationInsightsUpdateComponentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateComponent'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
          ComponentName: input.componentName,
          NewComponentName: input.newComponentName,
          ResourceList: input.resourceList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateComponent', props);
  }

  public updateComponentConfiguration(input: shapes.ApplicationInsightsUpdateComponentConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComponentConfiguration',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateComponentConfiguration'),
        parameters: {
          ResourceGroupName: input.resourceGroupName,
          ComponentName: input.componentName,
          Monitor: input.monitor,
          Tier: input.tier,
          ComponentConfiguration: input.componentConfiguration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateComponentConfiguration', props);
  }

  public updateLogPattern(input: shapes.ApplicationInsightsUpdateLogPatternRequest): ApplicationInsightsResponsesUpdateLogPattern {
    return new ApplicationInsightsResponsesUpdateLogPattern(this, this.__resources, input);
  }

}

export class ApplicationInsightsResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsCreateApplicationRequest) {
  }

  public get applicationInfo(): ApplicationInsightsResponsesCreateApplicationApplicationInfo {
    return new ApplicationInsightsResponsesCreateApplicationApplicationInfo(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesCreateApplicationApplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsCreateApplicationRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.ResourceGroupName'),
        outputPath: 'ApplicationInfo.ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.ResourceGroupName', props);
    return resource.getResponseField('ApplicationInfo.ResourceGroupName') as unknown as string;
  }

  public get lifeCycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.LifeCycle'),
        outputPath: 'ApplicationInfo.LifeCycle',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.LifeCycle', props);
    return resource.getResponseField('ApplicationInfo.LifeCycle') as unknown as string;
  }

  public get opsItemSnsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.OpsItemSNSTopicArn'),
        outputPath: 'ApplicationInfo.OpsItemSNSTopicArn',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
    return resource.getResponseField('ApplicationInfo.OpsItemSNSTopicArn') as unknown as string;
  }

  public get opsCenterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.OpsCenterEnabled'),
        outputPath: 'ApplicationInfo.OpsCenterEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.OpsCenterEnabled', props);
    return resource.getResponseField('ApplicationInfo.OpsCenterEnabled') as unknown as boolean;
  }

  public get cweMonitorEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.CWEMonitorEnabled'),
        outputPath: 'ApplicationInfo.CWEMonitorEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.CWEMonitorEnabled', props);
    return resource.getResponseField('ApplicationInfo.CWEMonitorEnabled') as unknown as boolean;
  }

  public get remarks(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateApplication.ApplicationInfo.Remarks'),
        outputPath: 'ApplicationInfo.Remarks',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsResponsesCreateLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsCreateLogPatternRequest) {
  }

  public get logPattern(): ApplicationInsightsResponsesCreateLogPatternLogPattern {
    return new ApplicationInsightsResponsesCreateLogPatternLogPattern(this.__scope, this.__resources, this.__input);
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateLogPattern.ResourceGroupName'),
        outputPath: 'ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

}

export class ApplicationInsightsResponsesCreateLogPatternLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsCreateLogPatternRequest) {
  }

  public get patternSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateLogPattern.LogPattern.PatternSetName'),
        outputPath: 'LogPattern.PatternSetName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLogPattern.LogPattern.PatternSetName', props);
    return resource.getResponseField('LogPattern.PatternSetName') as unknown as string;
  }

  public get patternName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateLogPattern.LogPattern.PatternName'),
        outputPath: 'LogPattern.PatternName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLogPattern.LogPattern.PatternName', props);
    return resource.getResponseField('LogPattern.PatternName') as unknown as string;
  }

  public get pattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateLogPattern.LogPattern.Pattern'),
        outputPath: 'LogPattern.Pattern',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLogPattern.LogPattern.Pattern', props);
    return resource.getResponseField('LogPattern.Pattern') as unknown as string;
  }

  public get rank(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.CreateLogPattern.LogPattern.Rank'),
        outputPath: 'LogPattern.Rank',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

export class ApplicationInsightsResponsesDescribeApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeApplicationRequest) {
  }

  public get applicationInfo(): ApplicationInsightsResponsesDescribeApplicationApplicationInfo {
    return new ApplicationInsightsResponsesDescribeApplicationApplicationInfo(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesDescribeApplicationApplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeApplicationRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.ResourceGroupName'),
        outputPath: 'ApplicationInfo.ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.ResourceGroupName', props);
    return resource.getResponseField('ApplicationInfo.ResourceGroupName') as unknown as string;
  }

  public get lifeCycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.LifeCycle'),
        outputPath: 'ApplicationInfo.LifeCycle',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.LifeCycle', props);
    return resource.getResponseField('ApplicationInfo.LifeCycle') as unknown as string;
  }

  public get opsItemSnsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.OpsItemSNSTopicArn'),
        outputPath: 'ApplicationInfo.OpsItemSNSTopicArn',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
    return resource.getResponseField('ApplicationInfo.OpsItemSNSTopicArn') as unknown as string;
  }

  public get opsCenterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.OpsCenterEnabled'),
        outputPath: 'ApplicationInfo.OpsCenterEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.OpsCenterEnabled', props);
    return resource.getResponseField('ApplicationInfo.OpsCenterEnabled') as unknown as boolean;
  }

  public get cweMonitorEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.CWEMonitorEnabled'),
        outputPath: 'ApplicationInfo.CWEMonitorEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.CWEMonitorEnabled', props);
    return resource.getResponseField('ApplicationInfo.CWEMonitorEnabled') as unknown as boolean;
  }

  public get remarks(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeApplication.ApplicationInfo.Remarks'),
        outputPath: 'ApplicationInfo.Remarks',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsResponsesDescribeComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeComponentRequest) {
  }

  public get applicationComponent(): ApplicationInsightsResponsesDescribeComponentApplicationComponent {
    return new ApplicationInsightsResponsesDescribeComponentApplicationComponent(this.__scope, this.__resources, this.__input);
  }

  public get resourceList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ResourceList'),
        outputPath: 'ResourceList',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ResourceList', props);
    return resource.getResponseField('ResourceList') as unknown as string[];
  }

}

export class ApplicationInsightsResponsesDescribeComponentApplicationComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeComponentRequest) {
  }

  public get componentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.ComponentName'),
        outputPath: 'ApplicationComponent.ComponentName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.ComponentName', props);
    return resource.getResponseField('ApplicationComponent.ComponentName') as unknown as string;
  }

  public get componentRemarks(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.ComponentRemarks'),
        outputPath: 'ApplicationComponent.ComponentRemarks',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.ComponentRemarks', props);
    return resource.getResponseField('ApplicationComponent.ComponentRemarks') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.ResourceType'),
        outputPath: 'ApplicationComponent.ResourceType',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.ResourceType', props);
    return resource.getResponseField('ApplicationComponent.ResourceType') as unknown as string;
  }

  public get osType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.OsType'),
        outputPath: 'ApplicationComponent.OsType',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.OsType', props);
    return resource.getResponseField('ApplicationComponent.OsType') as unknown as string;
  }

  public get tier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.Tier'),
        outputPath: 'ApplicationComponent.Tier',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.Tier', props);
    return resource.getResponseField('ApplicationComponent.Tier') as unknown as string;
  }

  public get monitor(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.Monitor'),
        outputPath: 'ApplicationComponent.Monitor',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.Monitor', props);
    return resource.getResponseField('ApplicationComponent.Monitor') as unknown as boolean;
  }

  public get detectedWorkload(): Record<string, Record<string, string>> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponent',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponent.ApplicationComponent.DetectedWorkload'),
        outputPath: 'ApplicationComponent.DetectedWorkload',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponent.ApplicationComponent.DetectedWorkload', props);
    return resource.getResponseField('ApplicationComponent.DetectedWorkload') as unknown as Record<string, Record<string, string>>;
  }

}

export class ApplicationInsightsResponsesDescribeComponentConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeComponentConfigurationRequest) {
  }

  public get monitor(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponentConfiguration',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponentConfiguration.Monitor'),
        outputPath: 'Monitor',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponentConfiguration.Monitor', props);
    return resource.getResponseField('Monitor') as unknown as boolean;
  }

  public get tier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponentConfiguration',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponentConfiguration.Tier'),
        outputPath: 'Tier',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponentConfiguration.Tier', props);
    return resource.getResponseField('Tier') as unknown as string;
  }

  public get componentConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponentConfiguration',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponentConfiguration.ComponentConfiguration'),
        outputPath: 'ComponentConfiguration',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponentConfiguration.ComponentConfiguration', props);
    return resource.getResponseField('ComponentConfiguration') as unknown as string;
  }

}

export class ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest) {
  }

  public get componentConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComponentConfigurationRecommendation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeComponentConfigurationRecommendation.ComponentConfiguration'),
        outputPath: 'ComponentConfiguration',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          ComponentName: this.__input.componentName,
          Tier: this.__input.tier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComponentConfigurationRecommendation.ComponentConfiguration', props);
    return resource.getResponseField('ComponentConfiguration') as unknown as string;
  }

}

export class ApplicationInsightsResponsesDescribeLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeLogPatternRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeLogPattern.ResourceGroupName'),
        outputPath: 'ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPattern(): ApplicationInsightsResponsesDescribeLogPatternLogPattern {
    return new ApplicationInsightsResponsesDescribeLogPatternLogPattern(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesDescribeLogPatternLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeLogPatternRequest) {
  }

  public get patternSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeLogPattern.LogPattern.PatternSetName'),
        outputPath: 'LogPattern.PatternSetName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLogPattern.LogPattern.PatternSetName', props);
    return resource.getResponseField('LogPattern.PatternSetName') as unknown as string;
  }

  public get patternName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeLogPattern.LogPattern.PatternName'),
        outputPath: 'LogPattern.PatternName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLogPattern.LogPattern.PatternName', props);
    return resource.getResponseField('LogPattern.PatternName') as unknown as string;
  }

  public get pattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeLogPattern.LogPattern.Pattern'),
        outputPath: 'LogPattern.Pattern',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLogPattern.LogPattern.Pattern', props);
    return resource.getResponseField('LogPattern.Pattern') as unknown as string;
  }

  public get rank(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeLogPattern.LogPattern.Rank'),
        outputPath: 'LogPattern.Rank',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

export class ApplicationInsightsResponsesDescribeObservation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeObservationRequest) {
  }

  public get observation(): ApplicationInsightsResponsesDescribeObservationObservation {
    return new ApplicationInsightsResponsesDescribeObservationObservation(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesDescribeObservationObservation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeObservationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.Id'),
        outputPath: 'Observation.Id',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.Id', props);
    return resource.getResponseField('Observation.Id') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.StartTime'),
        outputPath: 'Observation.StartTime',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.StartTime', props);
    return resource.getResponseField('Observation.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.EndTime'),
        outputPath: 'Observation.EndTime',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.EndTime', props);
    return resource.getResponseField('Observation.EndTime') as unknown as string;
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.SourceType'),
        outputPath: 'Observation.SourceType',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.SourceType', props);
    return resource.getResponseField('Observation.SourceType') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.SourceARN'),
        outputPath: 'Observation.SourceARN',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.SourceARN', props);
    return resource.getResponseField('Observation.SourceARN') as unknown as string;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.LogGroup'),
        outputPath: 'Observation.LogGroup',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.LogGroup', props);
    return resource.getResponseField('Observation.LogGroup') as unknown as string;
  }

  public get lineTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.LineTime'),
        outputPath: 'Observation.LineTime',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.LineTime', props);
    return resource.getResponseField('Observation.LineTime') as unknown as string;
  }

  public get logText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.LogText'),
        outputPath: 'Observation.LogText',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.LogText', props);
    return resource.getResponseField('Observation.LogText') as unknown as string;
  }

  public get logFilter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.LogFilter'),
        outputPath: 'Observation.LogFilter',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.LogFilter', props);
    return resource.getResponseField('Observation.LogFilter') as unknown as string;
  }

  public get metricNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.MetricNamespace'),
        outputPath: 'Observation.MetricNamespace',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.MetricNamespace', props);
    return resource.getResponseField('Observation.MetricNamespace') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.MetricName'),
        outputPath: 'Observation.MetricName',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.MetricName', props);
    return resource.getResponseField('Observation.MetricName') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.Unit'),
        outputPath: 'Observation.Unit',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.Unit', props);
    return resource.getResponseField('Observation.Unit') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.Value'),
        outputPath: 'Observation.Value',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.Value', props);
    return resource.getResponseField('Observation.Value') as unknown as number;
  }

  public get cloudWatchEventId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CloudWatchEventId'),
        outputPath: 'Observation.CloudWatchEventId',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CloudWatchEventId', props);
    return resource.getResponseField('Observation.CloudWatchEventId') as unknown as string;
  }

  public get cloudWatchEventSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CloudWatchEventSource'),
        outputPath: 'Observation.CloudWatchEventSource',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CloudWatchEventSource', props);
    return resource.getResponseField('Observation.CloudWatchEventSource') as unknown as string;
  }

  public get cloudWatchEventDetailType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CloudWatchEventDetailType'),
        outputPath: 'Observation.CloudWatchEventDetailType',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CloudWatchEventDetailType', props);
    return resource.getResponseField('Observation.CloudWatchEventDetailType') as unknown as string;
  }

  public get healthEventArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.HealthEventArn'),
        outputPath: 'Observation.HealthEventArn',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.HealthEventArn', props);
    return resource.getResponseField('Observation.HealthEventArn') as unknown as string;
  }

  public get healthService(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.HealthService'),
        outputPath: 'Observation.HealthService',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.HealthService', props);
    return resource.getResponseField('Observation.HealthService') as unknown as string;
  }

  public get healthEventTypeCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.HealthEventTypeCode'),
        outputPath: 'Observation.HealthEventTypeCode',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.HealthEventTypeCode', props);
    return resource.getResponseField('Observation.HealthEventTypeCode') as unknown as string;
  }

  public get healthEventTypeCategory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.HealthEventTypeCategory'),
        outputPath: 'Observation.HealthEventTypeCategory',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.HealthEventTypeCategory', props);
    return resource.getResponseField('Observation.HealthEventTypeCategory') as unknown as string;
  }

  public get healthEventDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.HealthEventDescription'),
        outputPath: 'Observation.HealthEventDescription',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.HealthEventDescription', props);
    return resource.getResponseField('Observation.HealthEventDescription') as unknown as string;
  }

  public get codeDeployDeploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CodeDeployDeploymentId'),
        outputPath: 'Observation.CodeDeployDeploymentId',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CodeDeployDeploymentId', props);
    return resource.getResponseField('Observation.CodeDeployDeploymentId') as unknown as string;
  }

  public get codeDeployDeploymentGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CodeDeployDeploymentGroup'),
        outputPath: 'Observation.CodeDeployDeploymentGroup',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CodeDeployDeploymentGroup', props);
    return resource.getResponseField('Observation.CodeDeployDeploymentGroup') as unknown as string;
  }

  public get codeDeployState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CodeDeployState'),
        outputPath: 'Observation.CodeDeployState',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CodeDeployState', props);
    return resource.getResponseField('Observation.CodeDeployState') as unknown as string;
  }

  public get codeDeployApplication(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CodeDeployApplication'),
        outputPath: 'Observation.CodeDeployApplication',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CodeDeployApplication', props);
    return resource.getResponseField('Observation.CodeDeployApplication') as unknown as string;
  }

  public get codeDeployInstanceGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.CodeDeployInstanceGroupId'),
        outputPath: 'Observation.CodeDeployInstanceGroupId',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.CodeDeployInstanceGroupId', props);
    return resource.getResponseField('Observation.CodeDeployInstanceGroupId') as unknown as string;
  }

  public get ec2State(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.Ec2State'),
        outputPath: 'Observation.Ec2State',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.Ec2State', props);
    return resource.getResponseField('Observation.Ec2State') as unknown as string;
  }

  public get rdsEventCategories(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.RdsEventCategories'),
        outputPath: 'Observation.RdsEventCategories',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.RdsEventCategories', props);
    return resource.getResponseField('Observation.RdsEventCategories') as unknown as string;
  }

  public get rdsEventMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.RdsEventMessage'),
        outputPath: 'Observation.RdsEventMessage',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.RdsEventMessage', props);
    return resource.getResponseField('Observation.RdsEventMessage') as unknown as string;
  }

  public get s3EventName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.S3EventName'),
        outputPath: 'Observation.S3EventName',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.S3EventName', props);
    return resource.getResponseField('Observation.S3EventName') as unknown as string;
  }

  public get statesExecutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.StatesExecutionArn'),
        outputPath: 'Observation.StatesExecutionArn',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.StatesExecutionArn', props);
    return resource.getResponseField('Observation.StatesExecutionArn') as unknown as string;
  }

  public get statesArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.StatesArn'),
        outputPath: 'Observation.StatesArn',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.StatesArn', props);
    return resource.getResponseField('Observation.StatesArn') as unknown as string;
  }

  public get statesStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.StatesStatus'),
        outputPath: 'Observation.StatesStatus',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.StatesStatus', props);
    return resource.getResponseField('Observation.StatesStatus') as unknown as string;
  }

  public get statesInput(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.StatesInput'),
        outputPath: 'Observation.StatesInput',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.StatesInput', props);
    return resource.getResponseField('Observation.StatesInput') as unknown as string;
  }

  public get ebsEvent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.EbsEvent'),
        outputPath: 'Observation.EbsEvent',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.EbsEvent', props);
    return resource.getResponseField('Observation.EbsEvent') as unknown as string;
  }

  public get ebsResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.EbsResult'),
        outputPath: 'Observation.EbsResult',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.EbsResult', props);
    return resource.getResponseField('Observation.EbsResult') as unknown as string;
  }

  public get ebsCause(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.EbsCause'),
        outputPath: 'Observation.EbsCause',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.EbsCause', props);
    return resource.getResponseField('Observation.EbsCause') as unknown as string;
  }

  public get ebsRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.EbsRequestId'),
        outputPath: 'Observation.EbsRequestId',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.EbsRequestId', props);
    return resource.getResponseField('Observation.EbsRequestId') as unknown as string;
  }

  public get xRayFaultPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayFaultPercent'),
        outputPath: 'Observation.XRayFaultPercent',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayFaultPercent', props);
    return resource.getResponseField('Observation.XRayFaultPercent') as unknown as number;
  }

  public get xRayThrottlePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayThrottlePercent'),
        outputPath: 'Observation.XRayThrottlePercent',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayThrottlePercent', props);
    return resource.getResponseField('Observation.XRayThrottlePercent') as unknown as number;
  }

  public get xRayErrorPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayErrorPercent'),
        outputPath: 'Observation.XRayErrorPercent',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayErrorPercent', props);
    return resource.getResponseField('Observation.XRayErrorPercent') as unknown as number;
  }

  public get xRayRequestCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayRequestCount'),
        outputPath: 'Observation.XRayRequestCount',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayRequestCount', props);
    return resource.getResponseField('Observation.XRayRequestCount') as unknown as number;
  }

  public get xRayRequestAverageLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayRequestAverageLatency'),
        outputPath: 'Observation.XRayRequestAverageLatency',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayRequestAverageLatency', props);
    return resource.getResponseField('Observation.XRayRequestAverageLatency') as unknown as number;
  }

  public get xRayNodeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayNodeName'),
        outputPath: 'Observation.XRayNodeName',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayNodeName', props);
    return resource.getResponseField('Observation.XRayNodeName') as unknown as string;
  }

  public get xRayNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObservation',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeObservation.Observation.XRayNodeType'),
        outputPath: 'Observation.XRayNodeType',
        parameters: {
          ObservationId: this.__input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObservation.Observation.XRayNodeType', props);
    return resource.getResponseField('Observation.XRayNodeType') as unknown as string;
  }

}

export class ApplicationInsightsResponsesDescribeProblem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeProblemRequest) {
  }

  public get problem(): ApplicationInsightsResponsesDescribeProblemProblem {
    return new ApplicationInsightsResponsesDescribeProblemProblem(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesDescribeProblemProblem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeProblemRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.Id'),
        outputPath: 'Problem.Id',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.Id', props);
    return resource.getResponseField('Problem.Id') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.Title'),
        outputPath: 'Problem.Title',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.Title', props);
    return resource.getResponseField('Problem.Title') as unknown as string;
  }

  public get insights(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.Insights'),
        outputPath: 'Problem.Insights',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.Insights', props);
    return resource.getResponseField('Problem.Insights') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.Status'),
        outputPath: 'Problem.Status',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.Status', props);
    return resource.getResponseField('Problem.Status') as unknown as string;
  }

  public get affectedResource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.AffectedResource'),
        outputPath: 'Problem.AffectedResource',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.AffectedResource', props);
    return resource.getResponseField('Problem.AffectedResource') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.StartTime'),
        outputPath: 'Problem.StartTime',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.StartTime', props);
    return resource.getResponseField('Problem.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.EndTime'),
        outputPath: 'Problem.EndTime',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.EndTime', props);
    return resource.getResponseField('Problem.EndTime') as unknown as string;
  }

  public get severityLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.SeverityLevel'),
        outputPath: 'Problem.SeverityLevel',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.SeverityLevel', props);
    return resource.getResponseField('Problem.SeverityLevel') as unknown as string;
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.ResourceGroupName'),
        outputPath: 'Problem.ResourceGroupName',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.ResourceGroupName', props);
    return resource.getResponseField('Problem.ResourceGroupName') as unknown as string;
  }

  public get feedback(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblem',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblem.Problem.Feedback'),
        outputPath: 'Problem.Feedback',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblem.Problem.Feedback', props);
    return resource.getResponseField('Problem.Feedback') as unknown as Record<string, string>;
  }

}

export class ApplicationInsightsResponsesDescribeProblemObservations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeProblemObservationsRequest) {
  }

  public get relatedObservations(): ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations {
    return new ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsDescribeProblemObservationsRequest) {
  }

  public get observationList(): shapes.ApplicationInsightsObservation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProblemObservations',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.DescribeProblemObservations.RelatedObservations.ObservationList'),
        outputPath: 'RelatedObservations.ObservationList',
        parameters: {
          ProblemId: this.__input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProblemObservations.RelatedObservations.ObservationList', props);
    return resource.getResponseField('RelatedObservations.ObservationList') as unknown as shapes.ApplicationInsightsObservation[];
  }

}

export class ApplicationInsightsResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListApplicationsRequest) {
  }

  public get applicationInfoList(): shapes.ApplicationInsightsApplicationInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListApplications.ApplicationInfoList'),
        outputPath: 'ApplicationInfoList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.ApplicationInfoList', props);
    return resource.getResponseField('ApplicationInfoList') as unknown as shapes.ApplicationInsightsApplicationInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListApplications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListComponentsRequest) {
  }

  public get applicationComponentList(): shapes.ApplicationInsightsApplicationComponent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListComponents.ApplicationComponentList'),
        outputPath: 'ApplicationComponentList',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.ApplicationComponentList', props);
    return resource.getResponseField('ApplicationComponentList') as unknown as shapes.ApplicationInsightsApplicationComponent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComponents',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListComponents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComponents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListConfigurationHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListConfigurationHistoryRequest) {
  }

  public get eventList(): shapes.ApplicationInsightsConfigurationEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationHistory',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListConfigurationHistory.EventList'),
        outputPath: 'EventList',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          EventStatus: this.__input.eventStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationHistory.EventList', props);
    return resource.getResponseField('EventList') as unknown as shapes.ApplicationInsightsConfigurationEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationHistory',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListConfigurationHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          EventStatus: this.__input.eventStatus,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListLogPatternSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListLogPatternSetsRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatternSets',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatternSets.ResourceGroupName'),
        outputPath: 'ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatternSets.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPatternSets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatternSets',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatternSets.LogPatternSets'),
        outputPath: 'LogPatternSets',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatternSets.LogPatternSets', props);
    return resource.getResponseField('LogPatternSets') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatternSets',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatternSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatternSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListLogPatterns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListLogPatternsRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatterns',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatterns.ResourceGroupName'),
        outputPath: 'ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatterns.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPatterns(): shapes.ApplicationInsightsLogPattern[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatterns',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatterns.LogPatterns'),
        outputPath: 'LogPatterns',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatterns.LogPatterns', props);
    return resource.getResponseField('LogPatterns') as unknown as shapes.ApplicationInsightsLogPattern[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLogPatterns',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListLogPatterns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLogPatterns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListProblems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListProblemsRequest) {
  }

  public get problemList(): shapes.ApplicationInsightsProblem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProblems',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListProblems.ProblemList'),
        outputPath: 'ProblemList',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProblems.ProblemList', props);
    return resource.getResponseField('ProblemList') as unknown as shapes.ApplicationInsightsProblem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProblems',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListProblems.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProblems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsListTagsForResourceRequest) {
  }

  public get tags(): shapes.ApplicationInsightsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ApplicationInsightsTag[];
  }

}

export class ApplicationInsightsResponsesUpdateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsUpdateApplicationRequest) {
  }

  public get applicationInfo(): ApplicationInsightsResponsesUpdateApplicationApplicationInfo {
    return new ApplicationInsightsResponsesUpdateApplicationApplicationInfo(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesUpdateApplicationApplicationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsUpdateApplicationRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.ResourceGroupName'),
        outputPath: 'ApplicationInfo.ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.ResourceGroupName', props);
    return resource.getResponseField('ApplicationInfo.ResourceGroupName') as unknown as string;
  }

  public get lifeCycle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.LifeCycle'),
        outputPath: 'ApplicationInfo.LifeCycle',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.LifeCycle', props);
    return resource.getResponseField('ApplicationInfo.LifeCycle') as unknown as string;
  }

  public get opsItemSnsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.OpsItemSNSTopicArn'),
        outputPath: 'ApplicationInfo.OpsItemSNSTopicArn',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
    return resource.getResponseField('ApplicationInfo.OpsItemSNSTopicArn') as unknown as string;
  }

  public get opsCenterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.OpsCenterEnabled'),
        outputPath: 'ApplicationInfo.OpsCenterEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.OpsCenterEnabled', props);
    return resource.getResponseField('ApplicationInfo.OpsCenterEnabled') as unknown as boolean;
  }

  public get cweMonitorEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.CWEMonitorEnabled'),
        outputPath: 'ApplicationInfo.CWEMonitorEnabled',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.CWEMonitorEnabled', props);
    return resource.getResponseField('ApplicationInfo.CWEMonitorEnabled') as unknown as boolean;
  }

  public get remarks(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateApplication.ApplicationInfo.Remarks'),
        outputPath: 'ApplicationInfo.Remarks',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          OpsCenterEnabled: this.__input.opsCenterEnabled,
          CWEMonitorEnabled: this.__input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.__input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.__input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsResponsesUpdateLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsUpdateLogPatternRequest) {
  }

  public get resourceGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateLogPattern.ResourceGroupName'),
        outputPath: 'ResourceGroupName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPattern(): ApplicationInsightsResponsesUpdateLogPatternLogPattern {
    return new ApplicationInsightsResponsesUpdateLogPatternLogPattern(this.__scope, this.__resources, this.__input);
  }

}

export class ApplicationInsightsResponsesUpdateLogPatternLogPattern {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApplicationInsightsUpdateLogPatternRequest) {
  }

  public get patternSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateLogPattern.LogPattern.PatternSetName'),
        outputPath: 'LogPattern.PatternSetName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLogPattern.LogPattern.PatternSetName', props);
    return resource.getResponseField('LogPattern.PatternSetName') as unknown as string;
  }

  public get patternName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateLogPattern.LogPattern.PatternName'),
        outputPath: 'LogPattern.PatternName',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLogPattern.LogPattern.PatternName', props);
    return resource.getResponseField('LogPattern.PatternName') as unknown as string;
  }

  public get pattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateLogPattern.LogPattern.Pattern'),
        outputPath: 'LogPattern.Pattern',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLogPattern.LogPattern.Pattern', props);
    return resource.getResponseField('LogPattern.Pattern') as unknown as string;
  }

  public get rank(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLogPattern',
        service: 'ApplicationInsights',
        physicalResourceId: cr.PhysicalResourceId.of('ApplicationInsights.UpdateLogPattern.LogPattern.Rank'),
        outputPath: 'LogPattern.Rank',
        parameters: {
          ResourceGroupName: this.__input.resourceGroupName,
          PatternSetName: this.__input.patternSetName,
          PatternName: this.__input.patternName,
          Pattern: this.__input.pattern,
          Rank: this.__input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

