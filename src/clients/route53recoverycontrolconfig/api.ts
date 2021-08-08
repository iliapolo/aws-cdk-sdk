import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53RecoveryControlConfigClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCluster(input: shapes.Route53RecoveryControlConfigCreateClusterRequest): Route53RecoveryControlConfigResponsesCreateCluster {
    return new Route53RecoveryControlConfigResponsesCreateCluster(this, this.__resources, input);
  }

  public createControlPanel(input: shapes.Route53RecoveryControlConfigCreateControlPanelRequest): Route53RecoveryControlConfigResponsesCreateControlPanel {
    return new Route53RecoveryControlConfigResponsesCreateControlPanel(this, this.__resources, input);
  }

  public createRoutingControl(input: shapes.Route53RecoveryControlConfigCreateRoutingControlRequest): Route53RecoveryControlConfigResponsesCreateRoutingControl {
    return new Route53RecoveryControlConfigResponsesCreateRoutingControl(this, this.__resources, input);
  }

  public createSafetyRule(input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest): Route53RecoveryControlConfigResponsesCreateSafetyRule {
    return new Route53RecoveryControlConfigResponsesCreateSafetyRule(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.Route53RecoveryControlConfigDeleteClusterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DeleteCluster'),
        parameters: {
          ClusterArn: input.clusterArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCluster', props);
  }

  public deleteControlPanel(input: shapes.Route53RecoveryControlConfigDeleteControlPanelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DeleteControlPanel'),
        parameters: {
          ControlPanelArn: input.controlPanelArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteControlPanel', props);
  }

  public deleteRoutingControl(input: shapes.Route53RecoveryControlConfigDeleteRoutingControlRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DeleteRoutingControl'),
        parameters: {
          RoutingControlArn: input.routingControlArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoutingControl', props);
  }

  public deleteSafetyRule(input: shapes.Route53RecoveryControlConfigDeleteSafetyRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DeleteSafetyRule'),
        parameters: {
          SafetyRuleArn: input.safetyRuleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSafetyRule', props);
  }

  public describeCluster(input: shapes.Route53RecoveryControlConfigDescribeClusterRequest): Route53RecoveryControlConfigResponsesDescribeCluster {
    return new Route53RecoveryControlConfigResponsesDescribeCluster(this, this.__resources, input);
  }

  public describeControlPanel(input: shapes.Route53RecoveryControlConfigDescribeControlPanelRequest): Route53RecoveryControlConfigResponsesDescribeControlPanel {
    return new Route53RecoveryControlConfigResponsesDescribeControlPanel(this, this.__resources, input);
  }

  public describeRoutingControl(input: shapes.Route53RecoveryControlConfigDescribeRoutingControlRequest): Route53RecoveryControlConfigResponsesDescribeRoutingControl {
    return new Route53RecoveryControlConfigResponsesDescribeRoutingControl(this, this.__resources, input);
  }

  public describeSafetyRule(input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest): Route53RecoveryControlConfigResponsesDescribeSafetyRule {
    return new Route53RecoveryControlConfigResponsesDescribeSafetyRule(this, this.__resources, input);
  }

  public listAssociatedRoute53HealthChecks(input: shapes.Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest): Route53RecoveryControlConfigResponsesListAssociatedRoute53HealthChecks {
    return new Route53RecoveryControlConfigResponsesListAssociatedRoute53HealthChecks(this, this.__resources, input);
  }

  public listClusters(input: shapes.Route53RecoveryControlConfigListClustersRequest): Route53RecoveryControlConfigResponsesListClusters {
    return new Route53RecoveryControlConfigResponsesListClusters(this, this.__resources, input);
  }

  public listControlPanels(input: shapes.Route53RecoveryControlConfigListControlPanelsRequest): Route53RecoveryControlConfigResponsesListControlPanels {
    return new Route53RecoveryControlConfigResponsesListControlPanels(this, this.__resources, input);
  }

  public listRoutingControls(input: shapes.Route53RecoveryControlConfigListRoutingControlsRequest): Route53RecoveryControlConfigResponsesListRoutingControls {
    return new Route53RecoveryControlConfigResponsesListRoutingControls(this, this.__resources, input);
  }

  public listSafetyRules(input: shapes.Route53RecoveryControlConfigListSafetyRulesRequest): Route53RecoveryControlConfigResponsesListSafetyRules {
    return new Route53RecoveryControlConfigResponsesListSafetyRules(this, this.__resources, input);
  }

  public updateControlPanel(input: shapes.Route53RecoveryControlConfigUpdateControlPanelRequest): Route53RecoveryControlConfigResponsesUpdateControlPanel {
    return new Route53RecoveryControlConfigResponsesUpdateControlPanel(this, this.__resources, input);
  }

  public updateRoutingControl(input: shapes.Route53RecoveryControlConfigUpdateRoutingControlRequest): Route53RecoveryControlConfigResponsesUpdateRoutingControl {
    return new Route53RecoveryControlConfigResponsesUpdateRoutingControl(this, this.__resources, input);
  }

  public updateSafetyRule(input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest): Route53RecoveryControlConfigResponsesUpdateSafetyRule {
    return new Route53RecoveryControlConfigResponsesUpdateSafetyRule(this, this.__resources, input);
  }

}

export class Route53RecoveryControlConfigResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateClusterRequest) {
  }

  public get cluster(): Route53RecoveryControlConfigResponsesCreateClusterCluster {
    return new Route53RecoveryControlConfigResponsesCreateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesCreateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateClusterRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateCluster.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get clusterEndpoints(): shapes.Route53RecoveryControlConfigClusterEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateCluster.Cluster.ClusterEndpoints'),
        outputPath: 'Cluster.ClusterEndpoints',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterEndpoints', props);
    return resource.getResponseField('Cluster.ClusterEndpoints') as unknown as shapes.Route53RecoveryControlConfigClusterEndpoint[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateCluster.Cluster.Name'),
        outputPath: 'Cluster.Name',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Name', props);
    return resource.getResponseField('Cluster.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateCluster.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesCreateControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateControlPanelRequest) {
  }

  public get controlPanel(): Route53RecoveryControlConfigResponsesCreateControlPanelControlPanel {
    return new Route53RecoveryControlConfigResponsesCreateControlPanelControlPanel(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesCreateControlPanelControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateControlPanelRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.ClusterArn'),
        outputPath: 'ControlPanel.ClusterArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.ClusterArn', props);
    return resource.getResponseField('ControlPanel.ClusterArn') as unknown as string;
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.ControlPanelArn'),
        outputPath: 'ControlPanel.ControlPanelArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.ControlPanelArn', props);
    return resource.getResponseField('ControlPanel.ControlPanelArn') as unknown as string;
  }

  public get defaultControlPanel(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.DefaultControlPanel'),
        outputPath: 'ControlPanel.DefaultControlPanel',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.DefaultControlPanel', props);
    return resource.getResponseField('ControlPanel.DefaultControlPanel') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.Name'),
        outputPath: 'ControlPanel.Name',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.Name', props);
    return resource.getResponseField('ControlPanel.Name') as unknown as string;
  }

  public get routingControlCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.RoutingControlCount'),
        outputPath: 'ControlPanel.RoutingControlCount',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.RoutingControlCount', props);
    return resource.getResponseField('ControlPanel.RoutingControlCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateControlPanel.ControlPanel.Status'),
        outputPath: 'ControlPanel.Status',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControlPanel.ControlPanel.Status', props);
    return resource.getResponseField('ControlPanel.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesCreateRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateRoutingControlRequest) {
  }

  public get routingControl(): Route53RecoveryControlConfigResponsesCreateRoutingControlRoutingControl {
    return new Route53RecoveryControlConfigResponsesCreateRoutingControlRoutingControl(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesCreateRoutingControlRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateRoutingControlRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateRoutingControl.RoutingControl.ControlPanelArn'),
        outputPath: 'RoutingControl.ControlPanelArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelArn: this.__input.controlPanelArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingControl.RoutingControl.ControlPanelArn', props);
    return resource.getResponseField('RoutingControl.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateRoutingControl.RoutingControl.Name'),
        outputPath: 'RoutingControl.Name',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelArn: this.__input.controlPanelArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingControl.RoutingControl.Name', props);
    return resource.getResponseField('RoutingControl.Name') as unknown as string;
  }

  public get routingControlArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateRoutingControl.RoutingControl.RoutingControlArn'),
        outputPath: 'RoutingControl.RoutingControlArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelArn: this.__input.controlPanelArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingControl.RoutingControl.RoutingControlArn', props);
    return resource.getResponseField('RoutingControl.RoutingControlArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateRoutingControl.RoutingControl.Status'),
        outputPath: 'RoutingControl.Status',
        parameters: {
          ClientToken: this.__input.clientToken,
          ClusterArn: this.__input.clusterArn,
          ControlPanelArn: this.__input.controlPanelArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoutingControl.RoutingControl.Status', props);
    return resource.getResponseField('RoutingControl.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesCreateSafetyRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest) {
  }

  public get assertionRule(): Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRule {
    return new Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRule(this.__scope, this.__resources, this.__input);
  }

  public get gatingRule(): Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRule {
    return new Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest) {
  }

  public get assertedControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.AssertedControls'),
        outputPath: 'AssertionRule.AssertedControls',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.AssertedControls', props);
    return resource.getResponseField('AssertionRule.AssertedControls') as unknown as string[];
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.ControlPanelArn'),
        outputPath: 'AssertionRule.ControlPanelArn',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.ControlPanelArn', props);
    return resource.getResponseField('AssertionRule.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.Name'),
        outputPath: 'AssertionRule.Name',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.Name', props);
    return resource.getResponseField('AssertionRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.SafetyRuleArn'),
        outputPath: 'AssertionRule.SafetyRuleArn',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.SafetyRuleArn', props);
    return resource.getResponseField('AssertionRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.Status'),
        outputPath: 'AssertionRule.Status',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.Status', props);
    return resource.getResponseField('AssertionRule.Status') as unknown as string;
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.WaitPeriodMs'),
        outputPath: 'AssertionRule.WaitPeriodMs',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.WaitPeriodMs', props);
    return resource.getResponseField('AssertionRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesCreateSafetyRuleAssertionRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.RuleConfig.Inverted'),
        outputPath: 'AssertionRule.RuleConfig.Inverted',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.RuleConfig.Inverted', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.RuleConfig.Threshold'),
        outputPath: 'AssertionRule.RuleConfig.Threshold',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.RuleConfig.Threshold', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.AssertionRule.RuleConfig.Type'),
        outputPath: 'AssertionRule.RuleConfig.Type',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.AssertionRule.RuleConfig.Type', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Type') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.ControlPanelArn'),
        outputPath: 'GatingRule.ControlPanelArn',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.ControlPanelArn', props);
    return resource.getResponseField('GatingRule.ControlPanelArn') as unknown as string;
  }

  public get gatingControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.GatingControls'),
        outputPath: 'GatingRule.GatingControls',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.GatingControls', props);
    return resource.getResponseField('GatingRule.GatingControls') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.Name'),
        outputPath: 'GatingRule.Name',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.Name', props);
    return resource.getResponseField('GatingRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.SafetyRuleArn'),
        outputPath: 'GatingRule.SafetyRuleArn',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.SafetyRuleArn', props);
    return resource.getResponseField('GatingRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.Status'),
        outputPath: 'GatingRule.Status',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.Status', props);
    return resource.getResponseField('GatingRule.Status') as unknown as string;
  }

  public get targetControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.TargetControls'),
        outputPath: 'GatingRule.TargetControls',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.TargetControls', props);
    return resource.getResponseField('GatingRule.TargetControls') as unknown as string[];
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.WaitPeriodMs'),
        outputPath: 'GatingRule.WaitPeriodMs',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.WaitPeriodMs', props);
    return resource.getResponseField('GatingRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesCreateSafetyRuleGatingRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigCreateSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.RuleConfig.Inverted'),
        outputPath: 'GatingRule.RuleConfig.Inverted',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.RuleConfig.Inverted', props);
    return resource.getResponseField('GatingRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.RuleConfig.Threshold'),
        outputPath: 'GatingRule.RuleConfig.Threshold',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.RuleConfig.Threshold', props);
    return resource.getResponseField('GatingRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.CreateSafetyRule.GatingRule.RuleConfig.Type'),
        outputPath: 'GatingRule.RuleConfig.Type',
        parameters: {
          AssertionRule: {
            AssertedControls: this.__input.assertionRule?.assertedControls,
            ControlPanelArn: this.__input.assertionRule?.controlPanelArn,
            Name: this.__input.assertionRule?.name,
            RuleConfig: {
              Inverted: this.__input.assertionRule?.ruleConfig.inverted,
              Threshold: this.__input.assertionRule?.ruleConfig.threshold,
              Type: this.__input.assertionRule?.ruleConfig.type,
            },
            WaitPeriodMs: this.__input.assertionRule?.waitPeriodMs,
          },
          ClientToken: this.__input.clientToken,
          GatingRule: {
            ControlPanelArn: this.__input.gatingRule?.controlPanelArn,
            GatingControls: this.__input.gatingRule?.gatingControls,
            Name: this.__input.gatingRule?.name,
            RuleConfig: {
              Inverted: this.__input.gatingRule?.ruleConfig.inverted,
              Threshold: this.__input.gatingRule?.ruleConfig.threshold,
              Type: this.__input.gatingRule?.ruleConfig.type,
            },
            TargetControls: this.__input.gatingRule?.targetControls,
            WaitPeriodMs: this.__input.gatingRule?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSafetyRule.GatingRule.RuleConfig.Type', props);
    return resource.getResponseField('GatingRule.RuleConfig.Type') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeClusterRequest) {
  }

  public get cluster(): Route53RecoveryControlConfigResponsesDescribeClusterCluster {
    return new Route53RecoveryControlConfigResponsesDescribeClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesDescribeClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeClusterRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeCluster.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get clusterEndpoints(): shapes.Route53RecoveryControlConfigClusterEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeCluster.Cluster.ClusterEndpoints'),
        outputPath: 'Cluster.ClusterEndpoints',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.Cluster.ClusterEndpoints', props);
    return resource.getResponseField('Cluster.ClusterEndpoints') as unknown as shapes.Route53RecoveryControlConfigClusterEndpoint[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeCluster.Cluster.Name'),
        outputPath: 'Cluster.Name',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.Cluster.Name', props);
    return resource.getResponseField('Cluster.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeCluster.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeControlPanelRequest) {
  }

  public get controlPanel(): Route53RecoveryControlConfigResponsesDescribeControlPanelControlPanel {
    return new Route53RecoveryControlConfigResponsesDescribeControlPanelControlPanel(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesDescribeControlPanelControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeControlPanelRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.ClusterArn'),
        outputPath: 'ControlPanel.ClusterArn',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.ClusterArn', props);
    return resource.getResponseField('ControlPanel.ClusterArn') as unknown as string;
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.ControlPanelArn'),
        outputPath: 'ControlPanel.ControlPanelArn',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.ControlPanelArn', props);
    return resource.getResponseField('ControlPanel.ControlPanelArn') as unknown as string;
  }

  public get defaultControlPanel(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.DefaultControlPanel'),
        outputPath: 'ControlPanel.DefaultControlPanel',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.DefaultControlPanel', props);
    return resource.getResponseField('ControlPanel.DefaultControlPanel') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.Name'),
        outputPath: 'ControlPanel.Name',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.Name', props);
    return resource.getResponseField('ControlPanel.Name') as unknown as string;
  }

  public get routingControlCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.RoutingControlCount'),
        outputPath: 'ControlPanel.RoutingControlCount',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.RoutingControlCount', props);
    return resource.getResponseField('ControlPanel.RoutingControlCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeControlPanel.ControlPanel.Status'),
        outputPath: 'ControlPanel.Status',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeControlPanel.ControlPanel.Status', props);
    return resource.getResponseField('ControlPanel.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeRoutingControlRequest) {
  }

  public get routingControl(): Route53RecoveryControlConfigResponsesDescribeRoutingControlRoutingControl {
    return new Route53RecoveryControlConfigResponsesDescribeRoutingControlRoutingControl(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesDescribeRoutingControlRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeRoutingControlRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeRoutingControl.RoutingControl.ControlPanelArn'),
        outputPath: 'RoutingControl.ControlPanelArn',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingControl.RoutingControl.ControlPanelArn', props);
    return resource.getResponseField('RoutingControl.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeRoutingControl.RoutingControl.Name'),
        outputPath: 'RoutingControl.Name',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingControl.RoutingControl.Name', props);
    return resource.getResponseField('RoutingControl.Name') as unknown as string;
  }

  public get routingControlArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeRoutingControl.RoutingControl.RoutingControlArn'),
        outputPath: 'RoutingControl.RoutingControlArn',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingControl.RoutingControl.RoutingControlArn', props);
    return resource.getResponseField('RoutingControl.RoutingControlArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeRoutingControl.RoutingControl.Status'),
        outputPath: 'RoutingControl.Status',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoutingControl.RoutingControl.Status', props);
    return resource.getResponseField('RoutingControl.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeSafetyRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest) {
  }

  public get assertionRule(): Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRule {
    return new Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRule(this.__scope, this.__resources, this.__input);
  }

  public get gatingRule(): Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRule {
    return new Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest) {
  }

  public get assertedControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.AssertedControls'),
        outputPath: 'AssertionRule.AssertedControls',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.AssertedControls', props);
    return resource.getResponseField('AssertionRule.AssertedControls') as unknown as string[];
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.ControlPanelArn'),
        outputPath: 'AssertionRule.ControlPanelArn',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.ControlPanelArn', props);
    return resource.getResponseField('AssertionRule.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.Name'),
        outputPath: 'AssertionRule.Name',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.Name', props);
    return resource.getResponseField('AssertionRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.SafetyRuleArn'),
        outputPath: 'AssertionRule.SafetyRuleArn',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.SafetyRuleArn', props);
    return resource.getResponseField('AssertionRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.Status'),
        outputPath: 'AssertionRule.Status',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.Status', props);
    return resource.getResponseField('AssertionRule.Status') as unknown as string;
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.WaitPeriodMs'),
        outputPath: 'AssertionRule.WaitPeriodMs',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.WaitPeriodMs', props);
    return resource.getResponseField('AssertionRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeSafetyRuleAssertionRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.RuleConfig.Inverted'),
        outputPath: 'AssertionRule.RuleConfig.Inverted',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.RuleConfig.Inverted', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.RuleConfig.Threshold'),
        outputPath: 'AssertionRule.RuleConfig.Threshold',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.RuleConfig.Threshold', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.AssertionRule.RuleConfig.Type'),
        outputPath: 'AssertionRule.RuleConfig.Type',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.AssertionRule.RuleConfig.Type', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Type') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.ControlPanelArn'),
        outputPath: 'GatingRule.ControlPanelArn',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.ControlPanelArn', props);
    return resource.getResponseField('GatingRule.ControlPanelArn') as unknown as string;
  }

  public get gatingControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.GatingControls'),
        outputPath: 'GatingRule.GatingControls',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.GatingControls', props);
    return resource.getResponseField('GatingRule.GatingControls') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.Name'),
        outputPath: 'GatingRule.Name',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.Name', props);
    return resource.getResponseField('GatingRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.SafetyRuleArn'),
        outputPath: 'GatingRule.SafetyRuleArn',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.SafetyRuleArn', props);
    return resource.getResponseField('GatingRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.Status'),
        outputPath: 'GatingRule.Status',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.Status', props);
    return resource.getResponseField('GatingRule.Status') as unknown as string;
  }

  public get targetControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.TargetControls'),
        outputPath: 'GatingRule.TargetControls',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.TargetControls', props);
    return resource.getResponseField('GatingRule.TargetControls') as unknown as string[];
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.WaitPeriodMs'),
        outputPath: 'GatingRule.WaitPeriodMs',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.WaitPeriodMs', props);
    return resource.getResponseField('GatingRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesDescribeSafetyRuleGatingRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigDescribeSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.RuleConfig.Inverted'),
        outputPath: 'GatingRule.RuleConfig.Inverted',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.RuleConfig.Inverted', props);
    return resource.getResponseField('GatingRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.RuleConfig.Threshold'),
        outputPath: 'GatingRule.RuleConfig.Threshold',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.RuleConfig.Threshold', props);
    return resource.getResponseField('GatingRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.DescribeSafetyRule.GatingRule.RuleConfig.Type'),
        outputPath: 'GatingRule.RuleConfig.Type',
        parameters: {
          SafetyRuleArn: this.__input.safetyRuleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSafetyRule.GatingRule.RuleConfig.Type', props);
    return resource.getResponseField('GatingRule.RuleConfig.Type') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesListAssociatedRoute53HealthChecks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest) {
  }

  public get healthCheckIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedRoute53HealthChecks',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListAssociatedRoute53HealthChecks.HealthCheckIds'),
        outputPath: 'HealthCheckIds',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedRoute53HealthChecks.HealthCheckIds', props);
    return resource.getResponseField('HealthCheckIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedRoute53HealthChecks',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListAssociatedRoute53HealthChecks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RoutingControlArn: this.__input.routingControlArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedRoute53HealthChecks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesListClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigListClustersRequest) {
  }

  public get clusters(): shapes.Route53RecoveryControlConfigCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListClusters.Clusters'),
        outputPath: 'Clusters',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.Clusters', props);
    return resource.getResponseField('Clusters') as unknown as shapes.Route53RecoveryControlConfigCluster[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesListControlPanels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigListControlPanelsRequest) {
  }

  public get controlPanels(): shapes.Route53RecoveryControlConfigControlPanel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listControlPanels',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListControlPanels.ControlPanels'),
        outputPath: 'ControlPanels',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListControlPanels.ControlPanels', props);
    return resource.getResponseField('ControlPanels') as unknown as shapes.Route53RecoveryControlConfigControlPanel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listControlPanels',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListControlPanels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListControlPanels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesListRoutingControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigListRoutingControlsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingControls',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListRoutingControls.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingControls.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get routingControls(): shapes.Route53RecoveryControlConfigRoutingControl[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoutingControls',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListRoutingControls.RoutingControls'),
        outputPath: 'RoutingControls',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoutingControls.RoutingControls', props);
    return resource.getResponseField('RoutingControls') as unknown as shapes.Route53RecoveryControlConfigRoutingControl[];
  }

}

export class Route53RecoveryControlConfigResponsesListSafetyRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigListSafetyRulesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSafetyRules',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListSafetyRules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSafetyRules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get safetyRules(): shapes.Route53RecoveryControlConfigRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSafetyRules',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.ListSafetyRules.SafetyRules'),
        outputPath: 'SafetyRules',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSafetyRules.SafetyRules', props);
    return resource.getResponseField('SafetyRules') as unknown as shapes.Route53RecoveryControlConfigRule[];
  }

}

export class Route53RecoveryControlConfigResponsesUpdateControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateControlPanelRequest) {
  }

  public get controlPanel(): Route53RecoveryControlConfigResponsesUpdateControlPanelControlPanel {
    return new Route53RecoveryControlConfigResponsesUpdateControlPanelControlPanel(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesUpdateControlPanelControlPanel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateControlPanelRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.ClusterArn'),
        outputPath: 'ControlPanel.ClusterArn',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.ClusterArn', props);
    return resource.getResponseField('ControlPanel.ClusterArn') as unknown as string;
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.ControlPanelArn'),
        outputPath: 'ControlPanel.ControlPanelArn',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.ControlPanelArn', props);
    return resource.getResponseField('ControlPanel.ControlPanelArn') as unknown as string;
  }

  public get defaultControlPanel(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.DefaultControlPanel'),
        outputPath: 'ControlPanel.DefaultControlPanel',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.DefaultControlPanel', props);
    return resource.getResponseField('ControlPanel.DefaultControlPanel') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.Name'),
        outputPath: 'ControlPanel.Name',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.Name', props);
    return resource.getResponseField('ControlPanel.Name') as unknown as string;
  }

  public get routingControlCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.RoutingControlCount'),
        outputPath: 'ControlPanel.RoutingControlCount',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.RoutingControlCount', props);
    return resource.getResponseField('ControlPanel.RoutingControlCount') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControlPanel',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateControlPanel.ControlPanel.Status'),
        outputPath: 'ControlPanel.Status',
        parameters: {
          ControlPanelArn: this.__input.controlPanelArn,
          ControlPanelName: this.__input.controlPanelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControlPanel.ControlPanel.Status', props);
    return resource.getResponseField('ControlPanel.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesUpdateRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateRoutingControlRequest) {
  }

  public get routingControl(): Route53RecoveryControlConfigResponsesUpdateRoutingControlRoutingControl {
    return new Route53RecoveryControlConfigResponsesUpdateRoutingControlRoutingControl(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesUpdateRoutingControlRoutingControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateRoutingControlRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateRoutingControl.RoutingControl.ControlPanelArn'),
        outputPath: 'RoutingControl.ControlPanelArn',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoutingControl.RoutingControl.ControlPanelArn', props);
    return resource.getResponseField('RoutingControl.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateRoutingControl.RoutingControl.Name'),
        outputPath: 'RoutingControl.Name',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoutingControl.RoutingControl.Name', props);
    return resource.getResponseField('RoutingControl.Name') as unknown as string;
  }

  public get routingControlArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateRoutingControl.RoutingControl.RoutingControlArn'),
        outputPath: 'RoutingControl.RoutingControlArn',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoutingControl.RoutingControl.RoutingControlArn', props);
    return resource.getResponseField('RoutingControl.RoutingControlArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoutingControl',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateRoutingControl.RoutingControl.Status'),
        outputPath: 'RoutingControl.Status',
        parameters: {
          RoutingControlArn: this.__input.routingControlArn,
          RoutingControlName: this.__input.routingControlName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoutingControl.RoutingControl.Status', props);
    return resource.getResponseField('RoutingControl.Status') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesUpdateSafetyRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest) {
  }

  public get assertionRule(): Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRule {
    return new Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRule(this.__scope, this.__resources, this.__input);
  }

  public get gatingRule(): Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRule {
    return new Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRule(this.__scope, this.__resources, this.__input);
  }

}

export class Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest) {
  }

  public get assertedControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.AssertedControls'),
        outputPath: 'AssertionRule.AssertedControls',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.AssertedControls', props);
    return resource.getResponseField('AssertionRule.AssertedControls') as unknown as string[];
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.ControlPanelArn'),
        outputPath: 'AssertionRule.ControlPanelArn',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.ControlPanelArn', props);
    return resource.getResponseField('AssertionRule.ControlPanelArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.Name'),
        outputPath: 'AssertionRule.Name',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.Name', props);
    return resource.getResponseField('AssertionRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.SafetyRuleArn'),
        outputPath: 'AssertionRule.SafetyRuleArn',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.SafetyRuleArn', props);
    return resource.getResponseField('AssertionRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.Status'),
        outputPath: 'AssertionRule.Status',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.Status', props);
    return resource.getResponseField('AssertionRule.Status') as unknown as string;
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.WaitPeriodMs'),
        outputPath: 'AssertionRule.WaitPeriodMs',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.WaitPeriodMs', props);
    return resource.getResponseField('AssertionRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesUpdateSafetyRuleAssertionRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.RuleConfig.Inverted'),
        outputPath: 'AssertionRule.RuleConfig.Inverted',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.RuleConfig.Inverted', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.RuleConfig.Threshold'),
        outputPath: 'AssertionRule.RuleConfig.Threshold',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.RuleConfig.Threshold', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.AssertionRule.RuleConfig.Type'),
        outputPath: 'AssertionRule.RuleConfig.Type',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.AssertionRule.RuleConfig.Type', props);
    return resource.getResponseField('AssertionRule.RuleConfig.Type') as unknown as string;
  }

}

export class Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest) {
  }

  public get controlPanelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.ControlPanelArn'),
        outputPath: 'GatingRule.ControlPanelArn',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.ControlPanelArn', props);
    return resource.getResponseField('GatingRule.ControlPanelArn') as unknown as string;
  }

  public get gatingControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.GatingControls'),
        outputPath: 'GatingRule.GatingControls',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.GatingControls', props);
    return resource.getResponseField('GatingRule.GatingControls') as unknown as string[];
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.Name'),
        outputPath: 'GatingRule.Name',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.Name', props);
    return resource.getResponseField('GatingRule.Name') as unknown as string;
  }

  public get ruleConfig(): Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRuleRuleConfig {
    return new Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRuleRuleConfig(this.__scope, this.__resources, this.__input);
  }

  public get safetyRuleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.SafetyRuleArn'),
        outputPath: 'GatingRule.SafetyRuleArn',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.SafetyRuleArn', props);
    return resource.getResponseField('GatingRule.SafetyRuleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.Status'),
        outputPath: 'GatingRule.Status',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.Status', props);
    return resource.getResponseField('GatingRule.Status') as unknown as string;
  }

  public get targetControls(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.TargetControls'),
        outputPath: 'GatingRule.TargetControls',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.TargetControls', props);
    return resource.getResponseField('GatingRule.TargetControls') as unknown as string[];
  }

  public get waitPeriodMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.WaitPeriodMs'),
        outputPath: 'GatingRule.WaitPeriodMs',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.WaitPeriodMs', props);
    return resource.getResponseField('GatingRule.WaitPeriodMs') as unknown as number;
  }

}

export class Route53RecoveryControlConfigResponsesUpdateSafetyRuleGatingRuleRuleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53RecoveryControlConfigUpdateSafetyRuleRequest) {
  }

  public get inverted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.RuleConfig.Inverted'),
        outputPath: 'GatingRule.RuleConfig.Inverted',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.RuleConfig.Inverted', props);
    return resource.getResponseField('GatingRule.RuleConfig.Inverted') as unknown as boolean;
  }

  public get threshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.RuleConfig.Threshold'),
        outputPath: 'GatingRule.RuleConfig.Threshold',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.RuleConfig.Threshold', props);
    return resource.getResponseField('GatingRule.RuleConfig.Threshold') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSafetyRule',
        service: 'Route53RecoveryControlConfig',
        physicalResourceId: cr.PhysicalResourceId.of('Route53RecoveryControlConfig.UpdateSafetyRule.GatingRule.RuleConfig.Type'),
        outputPath: 'GatingRule.RuleConfig.Type',
        parameters: {
          AssertionRuleUpdate: {
            Name: this.__input.assertionRuleUpdate?.name,
            SafetyRuleArn: this.__input.assertionRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.assertionRuleUpdate?.waitPeriodMs,
          },
          GatingRuleUpdate: {
            Name: this.__input.gatingRuleUpdate?.name,
            SafetyRuleArn: this.__input.gatingRuleUpdate?.safetyRuleArn,
            WaitPeriodMs: this.__input.gatingRuleUpdate?.waitPeriodMs,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSafetyRule.GatingRule.RuleConfig.Type', props);
    return resource.getResponseField('GatingRule.RuleConfig.Type') as unknown as string;
  }

}

