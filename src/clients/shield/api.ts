import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ShieldClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateDrtLogBucket(input: shapes.ShieldAssociateDrtLogBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDrtLogBucket',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateDRTLogBucket'),
        parameters: {
          LogBucket: input.logBucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDRTLogBucket', props);
  }

  public associateDrtRole(input: shapes.ShieldAssociateDrtRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDrtRole',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateDRTRole'),
        parameters: {
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDRTRole', props);
  }

  public associateHealthCheck(input: shapes.ShieldAssociateHealthCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHealthCheck',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateHealthCheck'),
        parameters: {
          ProtectionId: input.protectionId,
          HealthCheckArn: input.healthCheckArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateHealthCheck', props);
  }

  public associateProactiveEngagementDetails(input: shapes.ShieldAssociateProactiveEngagementDetailsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateProactiveEngagementDetails',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.AssociateProactiveEngagementDetails'),
        parameters: {
          EmergencyContactList: input.emergencyContactList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateProactiveEngagementDetails', props);
  }

  public createProtection(input: shapes.ShieldCreateProtectionRequest): ShieldCreateProtection {
    return new ShieldCreateProtection(this, 'CreateProtection', this.__resources, input);
  }

  public createProtectionGroup(input: shapes.ShieldCreateProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
          Aggregation: input.aggregation,
          Pattern: input.pattern,
          ResourceType: input.resourceType,
          Members: input.members,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateProtectionGroup', props);
  }

  public createSubscription(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateSubscription'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateSubscription', props);
  }

  public deleteProtection(input: shapes.ShieldDeleteProtectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteProtection'),
        parameters: {
          ProtectionId: input.protectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProtection', props);
  }

  public deleteProtectionGroup(input: shapes.ShieldDeleteProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProtectionGroup', props);
  }

  public deleteSubscription(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DeleteSubscription'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSubscription', props);
  }

  public describeAttack(input: shapes.ShieldDescribeAttackRequest): ShieldDescribeAttack {
    return new ShieldDescribeAttack(this, 'DescribeAttack', this.__resources, input);
  }

  public describeAttackStatistics(): ShieldDescribeAttackStatistics {
    return new ShieldDescribeAttackStatistics(this, 'DescribeAttackStatistics', this.__resources);
  }

  public describeDrtAccess(): ShieldDescribeDrtAccess {
    return new ShieldDescribeDrtAccess(this, 'DescribeDrtAccess', this.__resources);
  }

  public describeEmergencyContactSettings(): ShieldDescribeEmergencyContactSettings {
    return new ShieldDescribeEmergencyContactSettings(this, 'DescribeEmergencyContactSettings', this.__resources);
  }

  public describeProtection(input: shapes.ShieldDescribeProtectionRequest): ShieldDescribeProtection {
    return new ShieldDescribeProtection(this, 'DescribeProtection', this.__resources, input);
  }

  public describeProtectionGroup(input: shapes.ShieldDescribeProtectionGroupRequest): ShieldDescribeProtectionGroup {
    return new ShieldDescribeProtectionGroup(this, 'DescribeProtectionGroup', this.__resources, input);
  }

  public describeSubscription(): ShieldDescribeSubscription {
    return new ShieldDescribeSubscription(this, 'DescribeSubscription', this.__resources);
  }

  public disableProactiveEngagement(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableProactiveEngagement',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisableProactiveEngagement'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableProactiveEngagement', props);
  }

  public disassociateDrtLogBucket(input: shapes.ShieldDisassociateDrtLogBucketRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDrtLogBucket',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateDRTLogBucket'),
        parameters: {
          LogBucket: input.logBucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDRTLogBucket', props);
  }

  public disassociateDrtRole(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDrtRole',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateDRTRole'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDRTRole', props);
  }

  public disassociateHealthCheck(input: shapes.ShieldDisassociateHealthCheckRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateHealthCheck',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DisassociateHealthCheck'),
        parameters: {
          ProtectionId: input.protectionId,
          HealthCheckArn: input.healthCheckArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateHealthCheck', props);
  }

  public enableProactiveEngagement(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableProactiveEngagement',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.EnableProactiveEngagement'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableProactiveEngagement', props);
  }

  public fetchSubscriptionState(): ShieldFetchSubscriptionState {
    return new ShieldFetchSubscriptionState(this, 'FetchSubscriptionState', this.__resources);
  }

  public listAttacks(input: shapes.ShieldListAttacksRequest): ShieldListAttacks {
    return new ShieldListAttacks(this, 'ListAttacks', this.__resources, input);
  }

  public listProtectionGroups(input: shapes.ShieldListProtectionGroupsRequest): ShieldListProtectionGroups {
    return new ShieldListProtectionGroups(this, 'ListProtectionGroups', this.__resources, input);
  }

  public listProtections(input: shapes.ShieldListProtectionsRequest): ShieldListProtections {
    return new ShieldListProtections(this, 'ListProtections', this.__resources, input);
  }

  public listResourcesInProtectionGroup(input: shapes.ShieldListResourcesInProtectionGroupRequest): ShieldListResourcesInProtectionGroup {
    return new ShieldListResourcesInProtectionGroup(this, 'ListResourcesInProtectionGroup', this.__resources, input);
  }

  public updateEmergencyContactSettings(input: shapes.ShieldUpdateEmergencyContactSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEmergencyContactSettings',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateEmergencyContactSettings'),
        parameters: {
          EmergencyContactList: input.emergencyContactList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEmergencyContactSettings', props);
  }

  public updateProtectionGroup(input: shapes.ShieldUpdateProtectionGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateProtectionGroup'),
        parameters: {
          ProtectionGroupId: input.protectionGroupId,
          Aggregation: input.aggregation,
          Pattern: input.pattern,
          ResourceType: input.resourceType,
          Members: input.members,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProtectionGroup', props);
  }

  public updateSubscription(input: shapes.ShieldUpdateSubscriptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.UpdateSubscription'),
        parameters: {
          AutoRenew: input.autoRenew,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSubscription', props);
  }

}

export class ShieldCreateProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldCreateProtectionRequest) {
    super(scope, id);
  }

  public get protectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.CreateProtection.ProtectionId'),
        outputPath: 'ProtectionId',
        parameters: {
          Name: this.input.name,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProtection.ProtectionId', props);
    return resource.getResponseField('ProtectionId') as unknown as string;
  }

}

export class ShieldDescribeAttack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeAttackRequest) {
    super(scope, id);
  }

  public get attack(): ShieldDescribeAttackAttack {
    return new ShieldDescribeAttackAttack(this, 'Attack', this.__resources, this.input);
  }

}

export class ShieldDescribeAttackAttack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeAttackRequest) {
    super(scope, id);
  }

  public get attackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackId'),
        outputPath: 'Attack.AttackId',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.AttackId', props);
    return resource.getResponseField('Attack.AttackId') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.ResourceArn'),
        outputPath: 'Attack.ResourceArn',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.ResourceArn', props);
    return resource.getResponseField('Attack.ResourceArn') as unknown as string;
  }

  public get subResources(): shapes.ShieldSubResourceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.SubResources'),
        outputPath: 'Attack.SubResources',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.SubResources', props);
    return resource.getResponseField('Attack.SubResources') as unknown as shapes.ShieldSubResourceSummary[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.StartTime'),
        outputPath: 'Attack.StartTime',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.StartTime', props);
    return resource.getResponseField('Attack.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.EndTime'),
        outputPath: 'Attack.EndTime',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.EndTime', props);
    return resource.getResponseField('Attack.EndTime') as unknown as string;
  }

  public get attackCounters(): shapes.ShieldSummarizedCounter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackCounters'),
        outputPath: 'Attack.AttackCounters',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.AttackCounters', props);
    return resource.getResponseField('Attack.AttackCounters') as unknown as shapes.ShieldSummarizedCounter[];
  }

  public get attackProperties(): shapes.ShieldAttackProperty[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.AttackProperties'),
        outputPath: 'Attack.AttackProperties',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.AttackProperties', props);
    return resource.getResponseField('Attack.AttackProperties') as unknown as shapes.ShieldAttackProperty[];
  }

  public get mitigations(): shapes.ShieldMitigation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttack',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttack.Attack.Mitigations'),
        outputPath: 'Attack.Mitigations',
        parameters: {
          AttackId: this.input.attackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttack.Attack.Mitigations', props);
    return resource.getResponseField('Attack.Mitigations') as unknown as shapes.ShieldMitigation[];
  }

}

export class ShieldDescribeAttackStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get timeRange(): ShieldDescribeAttackStatisticsTimeRange {
    return new ShieldDescribeAttackStatisticsTimeRange(this, 'TimeRange', this.__resources);
  }

  public get dataItems(): shapes.ShieldAttackStatisticsDataItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.DataItems'),
        outputPath: 'DataItems',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttackStatistics.DataItems', props);
    return resource.getResponseField('DataItems') as unknown as shapes.ShieldAttackStatisticsDataItem[];
  }

}

export class ShieldDescribeAttackStatisticsTimeRange extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get fromInclusive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.TimeRange.FromInclusive'),
        outputPath: 'TimeRange.FromInclusive',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttackStatistics.TimeRange.FromInclusive', props);
    return resource.getResponseField('TimeRange.FromInclusive') as unknown as string;
  }

  public get toExclusive(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAttackStatistics',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeAttackStatistics.TimeRange.ToExclusive'),
        outputPath: 'TimeRange.ToExclusive',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAttackStatistics.TimeRange.ToExclusive', props);
    return resource.getResponseField('TimeRange.ToExclusive') as unknown as string;
  }

}

export class ShieldDescribeDrtAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDrtAccess',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeDRTAccess.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDRTAccess.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get logBucketList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDrtAccess',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeDRTAccess.LogBucketList'),
        outputPath: 'LogBucketList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDRTAccess.LogBucketList', props);
    return resource.getResponseField('LogBucketList') as unknown as string[];
  }

}

export class ShieldDescribeEmergencyContactSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get emergencyContactList(): shapes.ShieldEmergencyContact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEmergencyContactSettings',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeEmergencyContactSettings.EmergencyContactList'),
        outputPath: 'EmergencyContactList',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEmergencyContactSettings.EmergencyContactList', props);
    return resource.getResponseField('EmergencyContactList') as unknown as shapes.ShieldEmergencyContact[];
  }

}

export class ShieldDescribeProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeProtectionRequest) {
    super(scope, id);
  }

  public get protection(): ShieldDescribeProtectionProtection {
    return new ShieldDescribeProtectionProtection(this, 'Protection', this.__resources, this.input);
  }

}

export class ShieldDescribeProtectionProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeProtectionRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.Id'),
        outputPath: 'Protection.Id',
        parameters: {
          ProtectionId: this.input.protectionId,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtection.Protection.Id', props);
    return resource.getResponseField('Protection.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.Name'),
        outputPath: 'Protection.Name',
        parameters: {
          ProtectionId: this.input.protectionId,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtection.Protection.Name', props);
    return resource.getResponseField('Protection.Name') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.ResourceArn'),
        outputPath: 'Protection.ResourceArn',
        parameters: {
          ProtectionId: this.input.protectionId,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtection.Protection.ResourceArn', props);
    return resource.getResponseField('Protection.ResourceArn') as unknown as string;
  }

  public get healthCheckIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtection',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtection.Protection.HealthCheckIds'),
        outputPath: 'Protection.HealthCheckIds',
        parameters: {
          ProtectionId: this.input.protectionId,
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtection.Protection.HealthCheckIds', props);
    return resource.getResponseField('Protection.HealthCheckIds') as unknown as string[];
  }

}

export class ShieldDescribeProtectionGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeProtectionGroupRequest) {
    super(scope, id);
  }

  public get protectionGroup(): ShieldDescribeProtectionGroupProtectionGroup {
    return new ShieldDescribeProtectionGroupProtectionGroup(this, 'ProtectionGroup', this.__resources, this.input);
  }

}

export class ShieldDescribeProtectionGroupProtectionGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldDescribeProtectionGroupRequest) {
    super(scope, id);
  }

  public get protectionGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.ProtectionGroupId'),
        outputPath: 'ProtectionGroup.ProtectionGroupId',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectionGroup.ProtectionGroup.ProtectionGroupId', props);
    return resource.getResponseField('ProtectionGroup.ProtectionGroupId') as unknown as string;
  }

  public get aggregation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Aggregation'),
        outputPath: 'ProtectionGroup.Aggregation',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectionGroup.ProtectionGroup.Aggregation', props);
    return resource.getResponseField('ProtectionGroup.Aggregation') as unknown as string;
  }

  public get pattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Pattern'),
        outputPath: 'ProtectionGroup.Pattern',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectionGroup.ProtectionGroup.Pattern', props);
    return resource.getResponseField('ProtectionGroup.Pattern') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.ResourceType'),
        outputPath: 'ProtectionGroup.ResourceType',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectionGroup.ProtectionGroup.ResourceType', props);
    return resource.getResponseField('ProtectionGroup.ResourceType') as unknown as string;
  }

  public get members(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeProtectionGroup.ProtectionGroup.Members'),
        outputPath: 'ProtectionGroup.Members',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectionGroup.ProtectionGroup.Members', props);
    return resource.getResponseField('ProtectionGroup.Members') as unknown as string[];
  }

}

export class ShieldDescribeSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get subscription(): ShieldDescribeSubscriptionSubscription {
    return new ShieldDescribeSubscriptionSubscription(this, 'Subscription', this.__resources);
  }

}

export class ShieldDescribeSubscriptionSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.StartTime'),
        outputPath: 'Subscription.StartTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.StartTime', props);
    return resource.getResponseField('Subscription.StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.EndTime'),
        outputPath: 'Subscription.EndTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.EndTime', props);
    return resource.getResponseField('Subscription.EndTime') as unknown as string;
  }

  public get timeCommitmentInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.TimeCommitmentInSeconds'),
        outputPath: 'Subscription.TimeCommitmentInSeconds',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.TimeCommitmentInSeconds', props);
    return resource.getResponseField('Subscription.TimeCommitmentInSeconds') as unknown as number;
  }

  public get autoRenew(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.AutoRenew'),
        outputPath: 'Subscription.AutoRenew',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.AutoRenew', props);
    return resource.getResponseField('Subscription.AutoRenew') as unknown as string;
  }

  public get limits(): shapes.ShieldLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.Limits'),
        outputPath: 'Subscription.Limits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.Limits', props);
    return resource.getResponseField('Subscription.Limits') as unknown as shapes.ShieldLimit[];
  }

  public get proactiveEngagementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.ProactiveEngagementStatus'),
        outputPath: 'Subscription.ProactiveEngagementStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.ProactiveEngagementStatus', props);
    return resource.getResponseField('Subscription.ProactiveEngagementStatus') as unknown as string;
  }

  public get subscriptionLimits(): ShieldDescribeSubscriptionSubscriptionSubscriptionLimits {
    return new ShieldDescribeSubscriptionSubscriptionSubscriptionLimits(this, 'SubscriptionLimits', this.__resources);
  }

}

export class ShieldDescribeSubscriptionSubscriptionSubscriptionLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get protectionLimits(): ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits {
    return new ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits(this, 'ProtectionLimits', this.__resources);
  }

  public get protectionGroupLimits(): ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits {
    return new ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits(this, 'ProtectionGroupLimits', this.__resources);
  }

}

export class ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get protectedResourceTypeLimits(): shapes.ShieldLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionLimits.ProtectedResourceTypeLimits') as unknown as shapes.ShieldLimit[];
  }

}

export class ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get maxProtectionGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionGroupLimits.MaxProtectionGroups') as unknown as number;
  }

  public get patternTypeLimits(): ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits {
    return new ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits(this, 'PatternTypeLimits', this.__resources);
  }

}

export class ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get arbitraryPatternLimits(): ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits {
    return new ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits(this, 'ArbitraryPatternLimits', this.__resources);
  }

}

export class ShieldDescribeSubscriptionSubscriptionSubscriptionLimitsProtectionGroupLimitsPatternTypeLimitsArbitraryPatternLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get maxMembers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscription',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers'),
        outputPath: 'Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscription.Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers', props);
    return resource.getResponseField('Subscription.SubscriptionLimits.ProtectionGroupLimits.PatternTypeLimits.ArbitraryPatternLimits.MaxMembers') as unknown as number;
  }

}

export class ShieldFetchSubscriptionState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get subscriptionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSubscriptionState',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.GetSubscriptionState.SubscriptionState'),
        outputPath: 'SubscriptionState',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSubscriptionState.SubscriptionState', props);
    return resource.getResponseField('SubscriptionState') as unknown as string;
  }

}

export class ShieldListAttacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldListAttacksRequest) {
    super(scope, id);
  }

  public get attackSummaries(): shapes.ShieldAttackSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttacks',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListAttacks.AttackSummaries'),
        outputPath: 'AttackSummaries',
        parameters: {
          ResourceArns: this.input.resourceArns,
          StartTime: {
            FromInclusive: this.input.startTime?.fromInclusive,
            ToExclusive: this.input.startTime?.toExclusive,
          },
          EndTime: {
            FromInclusive: this.input.endTime?.fromInclusive,
            ToExclusive: this.input.endTime?.toExclusive,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttacks.AttackSummaries', props);
    return resource.getResponseField('AttackSummaries') as unknown as shapes.ShieldAttackSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttacks',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListAttacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArns: this.input.resourceArns,
          StartTime: {
            FromInclusive: this.input.startTime?.fromInclusive,
            ToExclusive: this.input.startTime?.toExclusive,
          },
          EndTime: {
            FromInclusive: this.input.endTime?.fromInclusive,
            ToExclusive: this.input.endTime?.toExclusive,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldListProtectionGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldListProtectionGroupsRequest) {
    super(scope, id);
  }

  public get protectionGroups(): shapes.ShieldProtectionGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectionGroups',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtectionGroups.ProtectionGroups'),
        outputPath: 'ProtectionGroups',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtectionGroups.ProtectionGroups', props);
    return resource.getResponseField('ProtectionGroups') as unknown as shapes.ShieldProtectionGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectionGroups',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtectionGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtectionGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldListProtections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldListProtectionsRequest) {
    super(scope, id);
  }

  public get protections(): shapes.ShieldProtection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtections',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtections.Protections'),
        outputPath: 'Protections',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtections.Protections', props);
    return resource.getResponseField('Protections') as unknown as shapes.ShieldProtection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtections',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListProtections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ShieldListResourcesInProtectionGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ShieldListResourcesInProtectionGroupRequest) {
    super(scope, id);
  }

  public get resourceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesInProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListResourcesInProtectionGroup.ResourceArns'),
        outputPath: 'ResourceArns',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesInProtectionGroup.ResourceArns', props);
    return resource.getResponseField('ResourceArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesInProtectionGroup',
        service: 'Shield',
        physicalResourceId: cr.PhysicalResourceId.of('Shield.ListResourcesInProtectionGroup.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProtectionGroupId: this.input.protectionGroupId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesInProtectionGroup.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

