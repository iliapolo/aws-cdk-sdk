import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApplicationInsightsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApplication(input: shapes.ApplicationInsightsCreateApplicationRequest): ApplicationInsightsCreateApplication {
    return new ApplicationInsightsCreateApplication(this, 'CreateApplication', this.__resources, input);
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

  public createLogPattern(input: shapes.ApplicationInsightsCreateLogPatternRequest): ApplicationInsightsCreateLogPattern {
    return new ApplicationInsightsCreateLogPattern(this, 'CreateLogPattern', this.__resources, input);
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

  public describeApplication(input: shapes.ApplicationInsightsDescribeApplicationRequest): ApplicationInsightsDescribeApplication {
    return new ApplicationInsightsDescribeApplication(this, 'DescribeApplication', this.__resources, input);
  }

  public describeComponent(input: shapes.ApplicationInsightsDescribeComponentRequest): ApplicationInsightsDescribeComponent {
    return new ApplicationInsightsDescribeComponent(this, 'DescribeComponent', this.__resources, input);
  }

  public describeComponentConfiguration(input: shapes.ApplicationInsightsDescribeComponentConfigurationRequest): ApplicationInsightsDescribeComponentConfiguration {
    return new ApplicationInsightsDescribeComponentConfiguration(this, 'DescribeComponentConfiguration', this.__resources, input);
  }

  public describeComponentConfigurationRecommendation(input: shapes.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest): ApplicationInsightsDescribeComponentConfigurationRecommendation {
    return new ApplicationInsightsDescribeComponentConfigurationRecommendation(this, 'DescribeComponentConfigurationRecommendation', this.__resources, input);
  }

  public describeLogPattern(input: shapes.ApplicationInsightsDescribeLogPatternRequest): ApplicationInsightsDescribeLogPattern {
    return new ApplicationInsightsDescribeLogPattern(this, 'DescribeLogPattern', this.__resources, input);
  }

  public describeObservation(input: shapes.ApplicationInsightsDescribeObservationRequest): ApplicationInsightsDescribeObservation {
    return new ApplicationInsightsDescribeObservation(this, 'DescribeObservation', this.__resources, input);
  }

  public describeProblem(input: shapes.ApplicationInsightsDescribeProblemRequest): ApplicationInsightsDescribeProblem {
    return new ApplicationInsightsDescribeProblem(this, 'DescribeProblem', this.__resources, input);
  }

  public describeProblemObservations(input: shapes.ApplicationInsightsDescribeProblemObservationsRequest): ApplicationInsightsDescribeProblemObservations {
    return new ApplicationInsightsDescribeProblemObservations(this, 'DescribeProblemObservations', this.__resources, input);
  }

  public listApplications(input: shapes.ApplicationInsightsListApplicationsRequest): ApplicationInsightsListApplications {
    return new ApplicationInsightsListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listComponents(input: shapes.ApplicationInsightsListComponentsRequest): ApplicationInsightsListComponents {
    return new ApplicationInsightsListComponents(this, 'ListComponents', this.__resources, input);
  }

  public listConfigurationHistory(input: shapes.ApplicationInsightsListConfigurationHistoryRequest): ApplicationInsightsListConfigurationHistory {
    return new ApplicationInsightsListConfigurationHistory(this, 'ListConfigurationHistory', this.__resources, input);
  }

  public listLogPatternSets(input: shapes.ApplicationInsightsListLogPatternSetsRequest): ApplicationInsightsListLogPatternSets {
    return new ApplicationInsightsListLogPatternSets(this, 'ListLogPatternSets', this.__resources, input);
  }

  public listLogPatterns(input: shapes.ApplicationInsightsListLogPatternsRequest): ApplicationInsightsListLogPatterns {
    return new ApplicationInsightsListLogPatterns(this, 'ListLogPatterns', this.__resources, input);
  }

  public listProblems(input: shapes.ApplicationInsightsListProblemsRequest): ApplicationInsightsListProblems {
    return new ApplicationInsightsListProblems(this, 'ListProblems', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ApplicationInsightsListTagsForResourceRequest): ApplicationInsightsListTagsForResource {
    return new ApplicationInsightsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public updateApplication(input: shapes.ApplicationInsightsUpdateApplicationRequest): ApplicationInsightsUpdateApplication {
    return new ApplicationInsightsUpdateApplication(this, 'UpdateApplication', this.__resources, input);
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

  public updateLogPattern(input: shapes.ApplicationInsightsUpdateLogPatternRequest): ApplicationInsightsUpdateLogPattern {
    return new ApplicationInsightsUpdateLogPattern(this, 'UpdateLogPattern', this.__resources, input);
  }

}

export class ApplicationInsightsCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsCreateApplicationRequest) {
    super(scope, id);
  }

  public get applicationInfo(): ApplicationInsightsCreateApplicationApplicationInfo {
    return new ApplicationInsightsCreateApplicationApplicationInfo(this, 'ApplicationInfo', this.__resources, this.input);
  }

}

export class ApplicationInsightsCreateApplicationApplicationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsCreateApplicationRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.ResourceGroupName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.LifeCycle', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.OpsCenterEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.CWEMonitorEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsCreateLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsCreateLogPatternRequest) {
    super(scope, id);
  }

  public get logPattern(): ApplicationInsightsCreateLogPatternLogPattern {
    return new ApplicationInsightsCreateLogPatternLogPattern(this, 'LogPattern', this.__resources, this.input);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

}

export class ApplicationInsightsCreateLogPatternLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsCreateLogPatternRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLogPattern.LogPattern.PatternSetName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLogPattern.LogPattern.PatternName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLogPattern.LogPattern.Pattern', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

export class ApplicationInsightsDescribeApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeApplicationRequest) {
    super(scope, id);
  }

  public get applicationInfo(): ApplicationInsightsDescribeApplicationApplicationInfo {
    return new ApplicationInsightsDescribeApplicationApplicationInfo(this, 'ApplicationInfo', this.__resources, this.input);
  }

}

export class ApplicationInsightsDescribeApplicationApplicationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeApplicationRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.ResourceGroupName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.LifeCycle', props);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.OpsCenterEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.CWEMonitorEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsDescribeComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeComponentRequest) {
    super(scope, id);
  }

  public get applicationComponent(): ApplicationInsightsDescribeComponentApplicationComponent {
    return new ApplicationInsightsDescribeComponentApplicationComponent(this, 'ApplicationComponent', this.__resources, this.input);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ResourceList', props);
    return resource.getResponseField('ResourceList') as unknown as string[];
  }

}

export class ApplicationInsightsDescribeComponentApplicationComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeComponentRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.ComponentName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.ComponentRemarks', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.ResourceType', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.OsType', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.Tier', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.Monitor', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponent.ApplicationComponent.DetectedWorkload', props);
    return resource.getResponseField('ApplicationComponent.DetectedWorkload') as unknown as Record<string, Record<string, string>>;
  }

}

export class ApplicationInsightsDescribeComponentConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeComponentConfigurationRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponentConfiguration.Monitor', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponentConfiguration.Tier', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponentConfiguration.ComponentConfiguration', props);
    return resource.getResponseField('ComponentConfiguration') as unknown as string;
  }

}

export class ApplicationInsightsDescribeComponentConfigurationRecommendation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          ComponentName: this.input.componentName,
          Tier: this.input.tier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComponentConfigurationRecommendation.ComponentConfiguration', props);
    return resource.getResponseField('ComponentConfiguration') as unknown as string;
  }

}

export class ApplicationInsightsDescribeLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeLogPatternRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPattern(): ApplicationInsightsDescribeLogPatternLogPattern {
    return new ApplicationInsightsDescribeLogPatternLogPattern(this, 'LogPattern', this.__resources, this.input);
  }

}

export class ApplicationInsightsDescribeLogPatternLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeLogPatternRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLogPattern.LogPattern.PatternSetName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLogPattern.LogPattern.PatternName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLogPattern.LogPattern.Pattern', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

export class ApplicationInsightsDescribeObservation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeObservationRequest) {
    super(scope, id);
  }

  public get observation(): ApplicationInsightsDescribeObservationObservation {
    return new ApplicationInsightsDescribeObservationObservation(this, 'Observation', this.__resources, this.input);
  }

}

export class ApplicationInsightsDescribeObservationObservation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeObservationRequest) {
    super(scope, id);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.Id', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.StartTime', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.EndTime', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.SourceType', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.SourceARN', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.LogGroup', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.LineTime', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.LogText', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.LogFilter', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.MetricNamespace', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.MetricName', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.Unit', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.Value', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CloudWatchEventId', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CloudWatchEventSource', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CloudWatchEventDetailType', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.HealthEventArn', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.HealthService', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.HealthEventTypeCode', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.HealthEventTypeCategory', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.HealthEventDescription', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CodeDeployDeploymentId', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CodeDeployDeploymentGroup', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CodeDeployState', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CodeDeployApplication', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.CodeDeployInstanceGroupId', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.Ec2State', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.RdsEventCategories', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.RdsEventMessage', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.S3EventName', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.StatesExecutionArn', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.StatesArn', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.StatesStatus', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.StatesInput', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.EbsEvent', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.EbsResult', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.EbsCause', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.EbsRequestId', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayFaultPercent', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayThrottlePercent', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayErrorPercent', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayRequestCount', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayRequestAverageLatency', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayNodeName', props);
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
          ObservationId: this.input.observationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObservation.Observation.XRayNodeType', props);
    return resource.getResponseField('Observation.XRayNodeType') as unknown as string;
  }

}

export class ApplicationInsightsDescribeProblem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeProblemRequest) {
    super(scope, id);
  }

  public get problem(): ApplicationInsightsDescribeProblemProblem {
    return new ApplicationInsightsDescribeProblemProblem(this, 'Problem', this.__resources, this.input);
  }

}

export class ApplicationInsightsDescribeProblemProblem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeProblemRequest) {
    super(scope, id);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.Id', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.Title', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.Insights', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.Status', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.AffectedResource', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.StartTime', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.EndTime', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.SeverityLevel', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.ResourceGroupName', props);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblem.Problem.Feedback', props);
    return resource.getResponseField('Problem.Feedback') as unknown as Record<string, string>;
  }

}

export class ApplicationInsightsDescribeProblemObservations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeProblemObservationsRequest) {
    super(scope, id);
  }

  public get relatedObservations(): ApplicationInsightsDescribeProblemObservationsRelatedObservations {
    return new ApplicationInsightsDescribeProblemObservationsRelatedObservations(this, 'RelatedObservations', this.__resources, this.input);
  }

}

export class ApplicationInsightsDescribeProblemObservationsRelatedObservations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsDescribeProblemObservationsRequest) {
    super(scope, id);
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
          ProblemId: this.input.problemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProblemObservations.RelatedObservations.ObservationList', props);
    return resource.getResponseField('RelatedObservations.ObservationList') as unknown as shapes.ApplicationInsightsObservation[];
  }

}

export class ApplicationInsightsListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListApplicationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.ApplicationInfoList', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListComponents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListComponentsRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponents.ApplicationComponentList', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComponents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListConfigurationHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListConfigurationHistoryRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          EventStatus: this.input.eventStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationHistory.EventList', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          EventStatus: this.input.eventStatus,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListLogPatternSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListLogPatternSetsRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatternSets.ResourceGroupName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatternSets.LogPatternSets', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatternSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListLogPatterns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListLogPatternsRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatterns.ResourceGroupName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatterns.LogPatterns', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLogPatterns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListProblems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListProblemsRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProblems.ProblemList', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProblems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ApplicationInsightsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ApplicationInsightsTag[];
  }

}

export class ApplicationInsightsUpdateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsUpdateApplicationRequest) {
    super(scope, id);
  }

  public get applicationInfo(): ApplicationInsightsUpdateApplicationApplicationInfo {
    return new ApplicationInsightsUpdateApplicationApplicationInfo(this, 'ApplicationInfo', this.__resources, this.input);
  }

}

export class ApplicationInsightsUpdateApplicationApplicationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsUpdateApplicationRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.ResourceGroupName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.LifeCycle', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.OpsItemSNSTopicArn', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.OpsCenterEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.CWEMonitorEnabled', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          OpsCenterEnabled: this.input.opsCenterEnabled,
          CWEMonitorEnabled: this.input.cweMonitorEnabled,
          OpsItemSNSTopicArn: this.input.opsItemSnsTopicArn,
          RemoveSNSTopic: this.input.removeSnsTopic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.ApplicationInfo.Remarks', props);
    return resource.getResponseField('ApplicationInfo.Remarks') as unknown as string;
  }

}

export class ApplicationInsightsUpdateLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsUpdateLogPatternRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLogPattern.ResourceGroupName', props);
    return resource.getResponseField('ResourceGroupName') as unknown as string;
  }

  public get logPattern(): ApplicationInsightsUpdateLogPatternLogPattern {
    return new ApplicationInsightsUpdateLogPatternLogPattern(this, 'LogPattern', this.__resources, this.input);
  }

}

export class ApplicationInsightsUpdateLogPatternLogPattern extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ApplicationInsightsUpdateLogPatternRequest) {
    super(scope, id);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLogPattern.LogPattern.PatternSetName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLogPattern.LogPattern.PatternName', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLogPattern.LogPattern.Pattern', props);
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
          ResourceGroupName: this.input.resourceGroupName,
          PatternSetName: this.input.patternSetName,
          PatternName: this.input.patternName,
          Pattern: this.input.pattern,
          Rank: this.input.rank,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLogPattern.LogPattern.Rank', props);
    return resource.getResponseField('LogPattern.Rank') as unknown as number;
  }

}

