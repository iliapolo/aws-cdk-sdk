import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppflowClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConnectorProfile(input: shapes.AppflowCreateConnectorProfileRequest): AppflowCreateConnectorProfile {
    return new AppflowCreateConnectorProfile(this, 'CreateConnectorProfile', this.__resources, input);
  }

  public createFlow(input: shapes.AppflowCreateFlowRequest): AppflowCreateFlow {
    return new AppflowCreateFlow(this, 'CreateFlow', this.__resources, input);
  }

  public deleteConnectorProfile(input: shapes.AppflowDeleteConnectorProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DeleteConnectorProfile'),
        parameters: {
          connectorProfileName: input.connectorProfileName,
          forceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnectorProfile', props);
  }

  public deleteFlow(input: shapes.AppflowDeleteFlowRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DeleteFlow'),
        parameters: {
          flowName: input.flowName,
          forceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFlow', props);
  }

  public describeConnectorEntity(input: shapes.AppflowDescribeConnectorEntityRequest): AppflowDescribeConnectorEntity {
    return new AppflowDescribeConnectorEntity(this, 'DescribeConnectorEntity', this.__resources, input);
  }

  public describeConnectorProfiles(input: shapes.AppflowDescribeConnectorProfilesRequest): AppflowDescribeConnectorProfiles {
    return new AppflowDescribeConnectorProfiles(this, 'DescribeConnectorProfiles', this.__resources, input);
  }

  public describeConnectors(input: shapes.AppflowDescribeConnectorsRequest): AppflowDescribeConnectors {
    return new AppflowDescribeConnectors(this, 'DescribeConnectors', this.__resources, input);
  }

  public describeFlow(input: shapes.AppflowDescribeFlowRequest): AppflowDescribeFlow {
    return new AppflowDescribeFlow(this, 'DescribeFlow', this.__resources, input);
  }

  public describeFlowExecutionRecords(input: shapes.AppflowDescribeFlowExecutionRecordsRequest): AppflowDescribeFlowExecutionRecords {
    return new AppflowDescribeFlowExecutionRecords(this, 'DescribeFlowExecutionRecords', this.__resources, input);
  }

  public listConnectorEntities(input: shapes.AppflowListConnectorEntitiesRequest): AppflowListConnectorEntities {
    return new AppflowListConnectorEntities(this, 'ListConnectorEntities', this.__resources, input);
  }

  public listFlows(input: shapes.AppflowListFlowsRequest): AppflowListFlows {
    return new AppflowListFlows(this, 'ListFlows', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppflowListTagsForResourceRequest): AppflowListTagsForResource {
    return new AppflowListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startFlow(input: shapes.AppflowStartFlowRequest): AppflowStartFlow {
    return new AppflowStartFlow(this, 'StartFlow', this.__resources, input);
  }

  public stopFlow(input: shapes.AppflowStopFlowRequest): AppflowStopFlow {
    return new AppflowStopFlow(this, 'StopFlow', this.__resources, input);
  }

  public tagResource(input: shapes.AppflowTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppflowUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConnectorProfile(input: shapes.AppflowUpdateConnectorProfileRequest): AppflowUpdateConnectorProfile {
    return new AppflowUpdateConnectorProfile(this, 'UpdateConnectorProfile', this.__resources, input);
  }

  public updateFlow(input: shapes.AppflowUpdateFlowRequest): AppflowUpdateFlow {
    return new AppflowUpdateFlow(this, 'UpdateFlow', this.__resources, input);
  }

}

export class AppflowCreateConnectorProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowCreateConnectorProfileRequest) {
    super(scope, id);
  }

  public get connectorProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateConnectorProfile.connectorProfileArn'),
        outputPath: 'connectorProfileArn',
        parameters: {
          connectorProfileName: this.input.connectorProfileName,
          kmsArn: this.input.kmsArn,
          connectorType: this.input.connectorType,
          connectionMode: this.input.connectionMode,
          connectorProfileConfig: {
            connectorProfileProperties: {
              Amplitude: {
              },
              Datadog: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.datadog?.instanceUrl,
              },
              Dynatrace: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.dynatrace?.instanceUrl,
              },
              GoogleAnalytics: {
              },
              InforNexus: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.inforNexus?.instanceUrl,
              },
              Marketo: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.marketo?.instanceUrl,
              },
              Redshift: {
                databaseUrl: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.databaseUrl,
                bucketName: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketName,
                bucketPrefix: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketPrefix,
                roleArn: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.roleArn,
              },
              Salesforce: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.salesforce?.instanceUrl,
                isSandboxEnvironment: this.input.connectorProfileConfig.connectorProfileProperties.salesforce?.isSandboxEnvironment,
              },
              ServiceNow: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.serviceNow?.instanceUrl,
              },
              Singular: {
              },
              Slack: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.slack?.instanceUrl,
              },
              Snowflake: {
                warehouse: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.warehouse,
                stage: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.stage,
                bucketName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketName,
                bucketPrefix: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketPrefix,
                privateLinkServiceName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.privateLinkServiceName,
                accountName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.accountName,
                region: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.region,
              },
              Trendmicro: {
              },
              Veeva: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.veeva?.instanceUrl,
              },
              Zendesk: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.zendesk?.instanceUrl,
              },
            },
            connectorProfileCredentials: {
              Amplitude: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.amplitude?.apiKey,
                secretKey: this.input.connectorProfileConfig.connectorProfileCredentials.amplitude?.secretKey,
              },
              Datadog: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.datadog?.apiKey,
                applicationKey: this.input.connectorProfileConfig.connectorProfileCredentials.datadog?.applicationKey,
              },
              Dynatrace: {
                apiToken: this.input.connectorProfileConfig.connectorProfileCredentials.dynatrace?.apiToken,
              },
              GoogleAnalytics: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.accessToken,
                refreshToken: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.refreshToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.redirectUri,
                },
              },
              InforNexus: {
                accessKeyId: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.accessKeyId,
                userId: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.userId,
                secretAccessKey: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.secretAccessKey,
                datakey: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.datakey,
              },
              Marketo: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.redirectUri,
                },
              },
              Redshift: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.redshift?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.redshift?.password,
              },
              Salesforce: {
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.accessToken,
                refreshToken: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.refreshToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.redirectUri,
                },
                clientCredentialsArn: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.clientCredentialsArn,
              },
              ServiceNow: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.password,
              },
              Singular: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.singular?.apiKey,
              },
              Slack: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.redirectUri,
                },
              },
              Snowflake: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.snowflake?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.snowflake?.password,
              },
              Trendmicro: {
                apiSecretKey: this.input.connectorProfileConfig.connectorProfileCredentials.trendmicro?.apiSecretKey,
              },
              Veeva: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.veeva?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.veeva?.password,
              },
              Zendesk: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.redirectUri,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectorProfile.connectorProfileArn', props);
    return resource.getResponseField('connectorProfileArn') as unknown as string;
  }

}

export class AppflowCreateFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowCreateFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.input.flowName,
          description: this.input.description,
          kmsArn: this.input.kmsArn,
          triggerConfig: {
            triggerType: this.input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.input.sourceFlowConfig.connectorType,
            connectorProfileName: this.input.sourceFlowConfig.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.input.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.input.destinationFlowConfigList,
          tasks: this.input.tasks,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.CreateFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.input.flowName,
          description: this.input.description,
          kmsArn: this.input.kmsArn,
          triggerConfig: {
            triggerType: this.input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.input.sourceFlowConfig.connectorType,
            connectorProfileName: this.input.sourceFlowConfig.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.input.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.input.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.input.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.input.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.input.destinationFlowConfigList,
          tasks: this.input.tasks,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

export class AppflowDescribeConnectorEntity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeConnectorEntityRequest) {
    super(scope, id);
  }

  public get connectorEntityFields(): shapes.AppflowConnectorEntityField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorEntity',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorEntity.connectorEntityFields'),
        outputPath: 'connectorEntityFields',
        parameters: {
          connectorEntityName: this.input.connectorEntityName,
          connectorType: this.input.connectorType,
          connectorProfileName: this.input.connectorProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectorEntity.connectorEntityFields', props);
    return resource.getResponseField('connectorEntityFields') as unknown as shapes.AppflowConnectorEntityField[];
  }

}

export class AppflowDescribeConnectorProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeConnectorProfilesRequest) {
    super(scope, id);
  }

  public get connectorProfileDetails(): shapes.AppflowConnectorProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorProfiles',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorProfiles.connectorProfileDetails'),
        outputPath: 'connectorProfileDetails',
        parameters: {
          connectorProfileNames: this.input.connectorProfileNames,
          connectorType: this.input.connectorType,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectorProfiles.connectorProfileDetails', props);
    return resource.getResponseField('connectorProfileDetails') as unknown as shapes.AppflowConnectorProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectorProfiles',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectorProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          connectorProfileNames: this.input.connectorProfileNames,
          connectorType: this.input.connectorType,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectorProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowDescribeConnectors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeConnectorsRequest) {
    super(scope, id);
  }

  public get connectorConfigurations(): Record<string, shapes.AppflowConnectorConfiguration> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectors',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectors.connectorConfigurations'),
        outputPath: 'connectorConfigurations',
        parameters: {
          connectorTypes: this.input.connectorTypes,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectors.connectorConfigurations', props);
    return resource.getResponseField('connectorConfigurations') as unknown as Record<string, shapes.AppflowConnectorConfiguration>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectors',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeConnectors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          connectorTypes: this.input.connectorTypes,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowDescribeFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.description'),
        outputPath: 'description',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get flowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowName'),
        outputPath: 'flowName',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.flowName', props);
    return resource.getResponseField('flowName') as unknown as string;
  }

  public get kmsArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.kmsArn'),
        outputPath: 'kmsArn',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.kmsArn', props);
    return resource.getResponseField('kmsArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

  public get flowStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.flowStatusMessage'),
        outputPath: 'flowStatusMessage',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.flowStatusMessage', props);
    return resource.getResponseField('flowStatusMessage') as unknown as string;
  }

  public get sourceFlowConfig(): AppflowDescribeFlowSourceFlowConfig {
    return new AppflowDescribeFlowSourceFlowConfig(this, 'SourceFlowConfig', this.__resources, this.input);
  }

  public get destinationFlowConfigList(): shapes.AppflowDestinationFlowConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.destinationFlowConfigList'),
        outputPath: 'destinationFlowConfigList',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.destinationFlowConfigList', props);
    return resource.getResponseField('destinationFlowConfigList') as unknown as shapes.AppflowDestinationFlowConfig[];
  }

  public get lastRunExecutionDetails(): AppflowDescribeFlowLastRunExecutionDetails {
    return new AppflowDescribeFlowLastRunExecutionDetails(this, 'LastRunExecutionDetails', this.__resources, this.input);
  }

  public get triggerConfig(): AppflowDescribeFlowTriggerConfig {
    return new AppflowDescribeFlowTriggerConfig(this, 'TriggerConfig', this.__resources, this.input);
  }

  public get tasks(): shapes.AppflowTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.tasks'),
        outputPath: 'tasks',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.AppflowTask[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.createdBy'),
        outputPath: 'createdBy',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.createdBy', props);
    return resource.getResponseField('createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastUpdatedBy'),
        outputPath: 'lastUpdatedBy',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.lastUpdatedBy', props);
    return resource.getResponseField('lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.tags'),
        outputPath: 'tags',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppflowDescribeFlowSourceFlowConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get connectorType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.connectorType'),
        outputPath: 'sourceFlowConfig.connectorType',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.connectorType', props);
    return resource.getResponseField('sourceFlowConfig.connectorType') as unknown as string;
  }

  public get connectorProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.connectorProfileName'),
        outputPath: 'sourceFlowConfig.connectorProfileName',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.connectorProfileName', props);
    return resource.getResponseField('sourceFlowConfig.connectorProfileName') as unknown as string;
  }

  public get sourceConnectorProperties(): AppflowDescribeFlowSourceFlowConfigSourceConnectorProperties {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorProperties(this, 'SourceConnectorProperties', this.__resources, this.input);
  }

  public get incrementalPullConfig(): AppflowDescribeFlowSourceFlowConfigIncrementalPullConfig {
    return new AppflowDescribeFlowSourceFlowConfigIncrementalPullConfig(this, 'IncrementalPullConfig', this.__resources, this.input);
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get amplitude(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude(this, 'Amplitude', this.__resources, this.input);
  }

  public get datadog(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog(this, 'Datadog', this.__resources, this.input);
  }

  public get dynatrace(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace(this, 'Dynatrace', this.__resources, this.input);
  }

  public get googleAnalytics(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics(this, 'GoogleAnalytics', this.__resources, this.input);
  }

  public get inforNexus(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus(this, 'InforNexus', this.__resources, this.input);
  }

  public get marketo(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo(this, 'Marketo', this.__resources, this.input);
  }

  public get s3(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3 {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3(this, 'S3', this.__resources, this.input);
  }

  public get salesforce(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce(this, 'Salesforce', this.__resources, this.input);
  }

  public get serviceNow(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow(this, 'ServiceNow', this.__resources, this.input);
  }

  public get singular(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular(this, 'Singular', this.__resources, this.input);
  }

  public get slack(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack(this, 'Slack', this.__resources, this.input);
  }

  public get trendmicro(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro(this, 'Trendmicro', this.__resources, this.input);
  }

  public get veeva(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva(this, 'Veeva', this.__resources, this.input);
  }

  public get zendesk(): AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
    return new AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk(this, 'Zendesk', this.__resources, this.input);
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesAmplitude extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Amplitude.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Amplitude.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Amplitude.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Amplitude.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDatadog extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Datadog.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Datadog.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Datadog.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Datadog.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesDynatrace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Dynatrace.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Dynatrace.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Dynatrace.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Dynatrace.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.GoogleAnalytics.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesInforNexus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.InforNexus.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.InforNexus.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.InforNexus.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.InforNexus.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesMarketo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Marketo.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Marketo.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Marketo.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Marketo.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketName'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.S3.bucketName',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketName', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.S3.bucketName') as unknown as string;
  }

  public get bucketPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.S3.bucketPrefix') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.object') as unknown as string;
  }

  public get enableDynamicFieldUpdate(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.enableDynamicFieldUpdate') as unknown as boolean;
  }

  public get includeDeletedRecords(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Salesforce.includeDeletedRecords') as unknown as boolean;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.ServiceNow.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.ServiceNow.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.ServiceNow.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.ServiceNow.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSingular extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Singular.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Singular.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Singular.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Singular.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesSlack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Slack.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Slack.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Slack.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Slack.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Trendmicro.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Trendmicro.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Trendmicro.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Trendmicro.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesVeeva extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Veeva.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Veeva.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Veeva.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Veeva.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigSourceConnectorPropertiesZendesk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get object(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Zendesk.object'),
        outputPath: 'sourceFlowConfig.sourceConnectorProperties.Zendesk.object',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.sourceConnectorProperties.Zendesk.object', props);
    return resource.getResponseField('sourceFlowConfig.sourceConnectorProperties.Zendesk.object') as unknown as string;
  }

}

export class AppflowDescribeFlowSourceFlowConfigIncrementalPullConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get datetimeTypeFieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName'),
        outputPath: 'sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName', props);
    return resource.getResponseField('sourceFlowConfig.incrementalPullConfig.datetimeTypeFieldName') as unknown as string;
  }

}

export class AppflowDescribeFlowLastRunExecutionDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get mostRecentExecutionMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionMessage'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionMessage',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionMessage', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionMessage') as unknown as string;
  }

  public get mostRecentExecutionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionTime'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionTime',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionTime', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionTime') as unknown as string;
  }

  public get mostRecentExecutionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.lastRunExecutionDetails.mostRecentExecutionStatus'),
        outputPath: 'lastRunExecutionDetails.mostRecentExecutionStatus',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.lastRunExecutionDetails.mostRecentExecutionStatus', props);
    return resource.getResponseField('lastRunExecutionDetails.mostRecentExecutionStatus') as unknown as string;
  }

}

export class AppflowDescribeFlowTriggerConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get triggerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerType'),
        outputPath: 'triggerConfig.triggerType',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerType', props);
    return resource.getResponseField('triggerConfig.triggerType') as unknown as string;
  }

  public get triggerProperties(): AppflowDescribeFlowTriggerConfigTriggerProperties {
    return new AppflowDescribeFlowTriggerConfigTriggerProperties(this, 'TriggerProperties', this.__resources, this.input);
  }

}

export class AppflowDescribeFlowTriggerConfigTriggerProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get scheduled(): AppflowDescribeFlowTriggerConfigTriggerPropertiesScheduled {
    return new AppflowDescribeFlowTriggerConfigTriggerPropertiesScheduled(this, 'Scheduled', this.__resources, this.input);
  }

}

export class AppflowDescribeFlowTriggerConfigTriggerPropertiesScheduled extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowRequest) {
    super(scope, id);
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleExpression'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleExpression',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleExpression', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleExpression') as unknown as string;
  }

  public get dataPullMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.dataPullMode'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.dataPullMode',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.dataPullMode', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.dataPullMode') as unknown as string;
  }

  public get scheduleStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleStartTime'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleStartTime',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleStartTime', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleStartTime') as unknown as string;
  }

  public get scheduleEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleEndTime'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.scheduleEndTime',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.scheduleEndTime', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.scheduleEndTime') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlow.triggerConfig.triggerProperties.Scheduled.timezone'),
        outputPath: 'triggerConfig.triggerProperties.Scheduled.timezone',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.triggerConfig.triggerProperties.Scheduled.timezone', props);
    return resource.getResponseField('triggerConfig.triggerProperties.Scheduled.timezone') as unknown as string;
  }

}

export class AppflowDescribeFlowExecutionRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowDescribeFlowExecutionRecordsRequest) {
    super(scope, id);
  }

  public get flowExecutions(): shapes.AppflowExecutionRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowExecutionRecords',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlowExecutionRecords.flowExecutions'),
        outputPath: 'flowExecutions',
        parameters: {
          flowName: this.input.flowName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowExecutionRecords.flowExecutions', props);
    return resource.getResponseField('flowExecutions') as unknown as shapes.AppflowExecutionRecord[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowExecutionRecords',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.DescribeFlowExecutionRecords.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          flowName: this.input.flowName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowExecutionRecords.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowListConnectorEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowListConnectorEntitiesRequest) {
    super(scope, id);
  }

  public get connectorEntityMap(): Record<string, shapes.AppflowConnectorEntity[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnectorEntities',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListConnectorEntities.connectorEntityMap'),
        outputPath: 'connectorEntityMap',
        parameters: {
          connectorProfileName: this.input.connectorProfileName,
          connectorType: this.input.connectorType,
          entitiesPath: this.input.entitiesPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnectorEntities.connectorEntityMap', props);
    return resource.getResponseField('connectorEntityMap') as unknown as Record<string, shapes.AppflowConnectorEntity[]>;
  }

}

export class AppflowListFlows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowListFlowsRequest) {
    super(scope, id);
  }

  public get flows(): shapes.AppflowFlowDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListFlows.flows'),
        outputPath: 'flows',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlows.flows', props);
    return resource.getResponseField('flows') as unknown as shapes.AppflowFlowDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListFlows.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlows.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AppflowListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class AppflowStartFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowStartFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

  public get executionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StartFlow.executionId'),
        outputPath: 'executionId',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartFlow.executionId', props);
    return resource.getResponseField('executionId') as unknown as string;
  }

}

export class AppflowStopFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowStopFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StopFlow.flowArn'),
        outputPath: 'flowArn',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopFlow.flowArn', props);
    return resource.getResponseField('flowArn') as unknown as string;
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.StopFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.input.flowName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

export class AppflowUpdateConnectorProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowUpdateConnectorProfileRequest) {
    super(scope, id);
  }

  public get connectorProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectorProfile',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UpdateConnectorProfile.connectorProfileArn'),
        outputPath: 'connectorProfileArn',
        parameters: {
          connectorProfileName: this.input.connectorProfileName,
          connectionMode: this.input.connectionMode,
          connectorProfileConfig: {
            connectorProfileProperties: {
              Amplitude: {
              },
              Datadog: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.datadog?.instanceUrl,
              },
              Dynatrace: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.dynatrace?.instanceUrl,
              },
              GoogleAnalytics: {
              },
              InforNexus: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.inforNexus?.instanceUrl,
              },
              Marketo: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.marketo?.instanceUrl,
              },
              Redshift: {
                databaseUrl: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.databaseUrl,
                bucketName: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketName,
                bucketPrefix: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.bucketPrefix,
                roleArn: this.input.connectorProfileConfig.connectorProfileProperties.redshift?.roleArn,
              },
              Salesforce: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.salesforce?.instanceUrl,
                isSandboxEnvironment: this.input.connectorProfileConfig.connectorProfileProperties.salesforce?.isSandboxEnvironment,
              },
              ServiceNow: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.serviceNow?.instanceUrl,
              },
              Singular: {
              },
              Slack: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.slack?.instanceUrl,
              },
              Snowflake: {
                warehouse: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.warehouse,
                stage: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.stage,
                bucketName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketName,
                bucketPrefix: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.bucketPrefix,
                privateLinkServiceName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.privateLinkServiceName,
                accountName: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.accountName,
                region: this.input.connectorProfileConfig.connectorProfileProperties.snowflake?.region,
              },
              Trendmicro: {
              },
              Veeva: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.veeva?.instanceUrl,
              },
              Zendesk: {
                instanceUrl: this.input.connectorProfileConfig.connectorProfileProperties.zendesk?.instanceUrl,
              },
            },
            connectorProfileCredentials: {
              Amplitude: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.amplitude?.apiKey,
                secretKey: this.input.connectorProfileConfig.connectorProfileCredentials.amplitude?.secretKey,
              },
              Datadog: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.datadog?.apiKey,
                applicationKey: this.input.connectorProfileConfig.connectorProfileCredentials.datadog?.applicationKey,
              },
              Dynatrace: {
                apiToken: this.input.connectorProfileConfig.connectorProfileCredentials.dynatrace?.apiToken,
              },
              GoogleAnalytics: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.accessToken,
                refreshToken: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.refreshToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.googleAnalytics?.oAuthRequest?.redirectUri,
                },
              },
              InforNexus: {
                accessKeyId: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.accessKeyId,
                userId: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.userId,
                secretAccessKey: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.secretAccessKey,
                datakey: this.input.connectorProfileConfig.connectorProfileCredentials.inforNexus?.datakey,
              },
              Marketo: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.marketo?.oAuthRequest?.redirectUri,
                },
              },
              Redshift: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.redshift?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.redshift?.password,
              },
              Salesforce: {
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.accessToken,
                refreshToken: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.refreshToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.oAuthRequest?.redirectUri,
                },
                clientCredentialsArn: this.input.connectorProfileConfig.connectorProfileCredentials.salesforce?.clientCredentialsArn,
              },
              ServiceNow: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.serviceNow?.password,
              },
              Singular: {
                apiKey: this.input.connectorProfileConfig.connectorProfileCredentials.singular?.apiKey,
              },
              Slack: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.slack?.oAuthRequest?.redirectUri,
                },
              },
              Snowflake: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.snowflake?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.snowflake?.password,
              },
              Trendmicro: {
                apiSecretKey: this.input.connectorProfileConfig.connectorProfileCredentials.trendmicro?.apiSecretKey,
              },
              Veeva: {
                username: this.input.connectorProfileConfig.connectorProfileCredentials.veeva?.username,
                password: this.input.connectorProfileConfig.connectorProfileCredentials.veeva?.password,
              },
              Zendesk: {
                clientId: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientId,
                clientSecret: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.clientSecret,
                accessToken: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.accessToken,
                oAuthRequest: {
                  authCode: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.authCode,
                  redirectUri: this.input.connectorProfileConfig.connectorProfileCredentials.zendesk?.oAuthRequest?.redirectUri,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConnectorProfile.connectorProfileArn', props);
    return resource.getResponseField('connectorProfileArn') as unknown as string;
  }

}

export class AppflowUpdateFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppflowUpdateFlowRequest) {
    super(scope, id);
  }

  public get flowStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'Appflow',
        physicalResourceId: cr.PhysicalResourceId.of('Appflow.UpdateFlow.flowStatus'),
        outputPath: 'flowStatus',
        parameters: {
          flowName: this.input.flowName,
          description: this.input.description,
          triggerConfig: {
            triggerType: this.input.triggerConfig.triggerType,
            triggerProperties: {
              Scheduled: {
                scheduleExpression: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                dataPullMode: this.input.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                scheduleStartTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                scheduleEndTime: this.input.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                timezone: this.input.triggerConfig.triggerProperties?.scheduled?.timezone,
              },
            },
          },
          sourceFlowConfig: {
            connectorType: this.input.sourceFlowConfig?.connectorType,
            connectorProfileName: this.input.sourceFlowConfig?.connectorProfileName,
            sourceConnectorProperties: {
              Amplitude: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.amplitude?.object,
              },
              Datadog: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.datadog?.object,
              },
              Dynatrace: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.dynatrace?.object,
              },
              GoogleAnalytics: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.googleAnalytics?.object,
              },
              InforNexus: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.inforNexus?.object,
              },
              Marketo: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.marketo?.object,
              },
              S3: {
                bucketName: this.input.sourceFlowConfig?.sourceConnectorProperties.s3?.bucketName,
                bucketPrefix: this.input.sourceFlowConfig?.sourceConnectorProperties.s3?.bucketPrefix,
              },
              Salesforce: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.object,
                enableDynamicFieldUpdate: this.input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                includeDeletedRecords: this.input.sourceFlowConfig?.sourceConnectorProperties.salesforce?.includeDeletedRecords,
              },
              ServiceNow: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.serviceNow?.object,
              },
              Singular: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.singular?.object,
              },
              Slack: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.slack?.object,
              },
              Trendmicro: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.trendmicro?.object,
              },
              Veeva: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.veeva?.object,
              },
              Zendesk: {
                object: this.input.sourceFlowConfig?.sourceConnectorProperties.zendesk?.object,
              },
            },
            incrementalPullConfig: {
              datetimeTypeFieldName: this.input.sourceFlowConfig?.incrementalPullConfig?.datetimeTypeFieldName,
            },
          },
          destinationFlowConfigList: this.input.destinationFlowConfigList,
          tasks: this.input.tasks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.flowStatus', props);
    return resource.getResponseField('flowStatus') as unknown as string;
  }

}

