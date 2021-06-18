import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IotClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptCertificateTransfer(input: shapes.IotAcceptCertificateTransferRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptCertificateTransfer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AcceptCertificateTransfer'),
        parameters: {
          certificateId: input.certificateId,
          setAsActive: input.setAsActive,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptCertificateTransfer', props);
  }

  public addThingToBillingGroup(input: shapes.IotAddThingToBillingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addThingToBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AddThingToBillingGroup'),
        parameters: {
          billingGroupName: input.billingGroupName,
          billingGroupArn: input.billingGroupArn,
          thingName: input.thingName,
          thingArn: input.thingArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddThingToBillingGroup', props);
  }

  public addThingToThingGroup(input: shapes.IotAddThingToThingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addThingToThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AddThingToThingGroup'),
        parameters: {
          thingGroupName: input.thingGroupName,
          thingGroupArn: input.thingGroupArn,
          thingName: input.thingName,
          thingArn: input.thingArn,
          overrideDynamicGroups: input.overrideDynamicGroups,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddThingToThingGroup', props);
  }

  public associateTargetsWithJob(input: shapes.IotAssociateTargetsWithJobRequest): IotAssociateTargetsWithJob {
    return new IotAssociateTargetsWithJob(this, 'AssociateTargetsWithJob', this.__resources, input);
  }

  public attachPolicy(input: shapes.IotAttachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AttachPolicy'),
        parameters: {
          policyName: input.policyName,
          target: input.target,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachPolicy', props);
  }

  public attachPrincipalPolicy(input: shapes.IotAttachPrincipalPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachPrincipalPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AttachPrincipalPolicy'),
        parameters: {
          policyName: input.policyName,
          principal: input.principal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachPrincipalPolicy', props);
  }

  public attachSecurityProfile(input: shapes.IotAttachSecurityProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AttachSecurityProfile'),
        parameters: {
          securityProfileName: input.securityProfileName,
          securityProfileTargetArn: input.securityProfileTargetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachSecurityProfile', props);
  }

  public attachThingPrincipal(input: shapes.IotAttachThingPrincipalRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachThingPrincipal',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AttachThingPrincipal'),
        parameters: {
          thingName: input.thingName,
          principal: input.principal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachThingPrincipal', props);
  }

  public cancelAuditMitigationActionsTask(input: shapes.IotCancelAuditMitigationActionsTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelAuditMitigationActionsTask'),
        parameters: {
          taskId: input.taskId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelAuditMitigationActionsTask', props);
  }

  public cancelAuditTask(input: shapes.IotCancelAuditTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelAuditTask'),
        parameters: {
          taskId: input.taskId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelAuditTask', props);
  }

  public cancelCertificateTransfer(input: shapes.IotCancelCertificateTransferRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelCertificateTransfer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelCertificateTransfer'),
        parameters: {
          certificateId: input.certificateId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelCertificateTransfer', props);
  }

  public cancelJob(input: shapes.IotCancelJobRequest): IotCancelJob {
    return new IotCancelJob(this, 'CancelJob', this.__resources, input);
  }

  public cancelJobExecution(input: shapes.IotCancelJobExecutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelJobExecution'),
        parameters: {
          jobId: input.jobId,
          thingName: input.thingName,
          force: input.force,
          expectedVersion: input.expectedVersion,
          statusDetails: input.statusDetails,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelJobExecution', props);
  }

  public clearDefaultAuthorizer(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'clearDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ClearDefaultAuthorizer'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'ClearDefaultAuthorizer', props);
  }

  public confirmTopicRuleDestination(input: shapes.IotConfirmTopicRuleDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ConfirmTopicRuleDestination'),
        parameters: {
          confirmationToken: input.confirmationToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ConfirmTopicRuleDestination', props);
  }

  public createAuditSuppression(input: shapes.IotCreateAuditSuppressionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateAuditSuppression'),
        parameters: {
          checkName: input.checkName,
          resourceIdentifier: {
            deviceCertificateId: input.resourceIdentifier.deviceCertificateId,
            caCertificateId: input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: input.resourceIdentifier.account,
            iamRoleArn: input.resourceIdentifier.iamRoleArn,
            roleAliasArn: input.resourceIdentifier.roleAliasArn,
          },
          expirationDate: input.expirationDate,
          suppressIndefinitely: input.suppressIndefinitely,
          description: input.description,
          clientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateAuditSuppression', props);
  }

  public createAuthorizer(input: shapes.IotCreateAuthorizerRequest): IotCreateAuthorizer {
    return new IotCreateAuthorizer(this, 'CreateAuthorizer', this.__resources, input);
  }

  public createBillingGroup(input: shapes.IotCreateBillingGroupRequest): IotCreateBillingGroup {
    return new IotCreateBillingGroup(this, 'CreateBillingGroup', this.__resources, input);
  }

  public createCertificateFromCsr(input: shapes.IotCreateCertificateFromCsrRequest): IotCreateCertificateFromCsr {
    return new IotCreateCertificateFromCsr(this, 'CreateCertificateFromCsr', this.__resources, input);
  }

  public createDimension(input: shapes.IotCreateDimensionRequest): IotCreateDimension {
    return new IotCreateDimension(this, 'CreateDimension', this.__resources, input);
  }

  public createDomainConfiguration(input: shapes.IotCreateDomainConfigurationRequest): IotCreateDomainConfiguration {
    return new IotCreateDomainConfiguration(this, 'CreateDomainConfiguration', this.__resources, input);
  }

  public createDynamicThingGroup(input: shapes.IotCreateDynamicThingGroupRequest): IotCreateDynamicThingGroup {
    return new IotCreateDynamicThingGroup(this, 'CreateDynamicThingGroup', this.__resources, input);
  }

  public createJob(input: shapes.IotCreateJobRequest): IotCreateJob {
    return new IotCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public createKeysAndCertificate(input: shapes.IotCreateKeysAndCertificateRequest): IotCreateKeysAndCertificate {
    return new IotCreateKeysAndCertificate(this, 'CreateKeysAndCertificate', this.__resources, input);
  }

  public createMitigationAction(input: shapes.IotCreateMitigationActionRequest): IotCreateMitigationAction {
    return new IotCreateMitigationAction(this, 'CreateMitigationAction', this.__resources, input);
  }

  public createOtaUpdate(input: shapes.IotCreateOtaUpdateRequest): IotCreateOtaUpdate {
    return new IotCreateOtaUpdate(this, 'CreateOtaUpdate', this.__resources, input);
  }

  public createPolicy(input: shapes.IotCreatePolicyRequest): IotCreatePolicy {
    return new IotCreatePolicy(this, 'CreatePolicy', this.__resources, input);
  }

  public createPolicyVersion(input: shapes.IotCreatePolicyVersionRequest): IotCreatePolicyVersion {
    return new IotCreatePolicyVersion(this, 'CreatePolicyVersion', this.__resources, input);
  }

  public createProvisioningClaim(input: shapes.IotCreateProvisioningClaimRequest): IotCreateProvisioningClaim {
    return new IotCreateProvisioningClaim(this, 'CreateProvisioningClaim', this.__resources, input);
  }

  public createProvisioningTemplate(input: shapes.IotCreateProvisioningTemplateRequest): IotCreateProvisioningTemplate {
    return new IotCreateProvisioningTemplate(this, 'CreateProvisioningTemplate', this.__resources, input);
  }

  public createProvisioningTemplateVersion(input: shapes.IotCreateProvisioningTemplateVersionRequest): IotCreateProvisioningTemplateVersion {
    return new IotCreateProvisioningTemplateVersion(this, 'CreateProvisioningTemplateVersion', this.__resources, input);
  }

  public createRoleAlias(input: shapes.IotCreateRoleAliasRequest): IotCreateRoleAlias {
    return new IotCreateRoleAlias(this, 'CreateRoleAlias', this.__resources, input);
  }

  public createScheduledAudit(input: shapes.IotCreateScheduledAuditRequest): IotCreateScheduledAudit {
    return new IotCreateScheduledAudit(this, 'CreateScheduledAudit', this.__resources, input);
  }

  public createSecurityProfile(input: shapes.IotCreateSecurityProfileRequest): IotCreateSecurityProfile {
    return new IotCreateSecurityProfile(this, 'CreateSecurityProfile', this.__resources, input);
  }

  public createStream(input: shapes.IotCreateStreamRequest): IotCreateStream {
    return new IotCreateStream(this, 'CreateStream', this.__resources, input);
  }

  public createThing(input: shapes.IotCreateThingRequest): IotCreateThing {
    return new IotCreateThing(this, 'CreateThing', this.__resources, input);
  }

  public createThingGroup(input: shapes.IotCreateThingGroupRequest): IotCreateThingGroup {
    return new IotCreateThingGroup(this, 'CreateThingGroup', this.__resources, input);
  }

  public createThingType(input: shapes.IotCreateThingTypeRequest): IotCreateThingType {
    return new IotCreateThingType(this, 'CreateThingType', this.__resources, input);
  }

  public createTopicRule(input: shapes.IotCreateTopicRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateTopicRule'),
        parameters: {
          ruleName: input.ruleName,
          topicRulePayload: {
            sql: input.topicRulePayload.sql,
            description: input.topicRulePayload.description,
            actions: input.topicRulePayload.actions,
            ruleDisabled: input.topicRulePayload.ruleDisabled,
            awsIotSqlVersion: input.topicRulePayload.awsIotSqlVersion,
            errorAction: {
              dynamoDB: {
                tableName: input.topicRulePayload.errorAction?.dynamoDB?.tableName,
                roleArn: input.topicRulePayload.errorAction?.dynamoDB?.roleArn,
                operation: input.topicRulePayload.errorAction?.dynamoDB?.operation,
                hashKeyField: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyField,
                hashKeyValue: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyValue,
                hashKeyType: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyType,
                rangeKeyField: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyField,
                rangeKeyValue: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyValue,
                rangeKeyType: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyType,
                payloadField: input.topicRulePayload.errorAction?.dynamoDB?.payloadField,
              },
              dynamoDBv2: {
                roleArn: input.topicRulePayload.errorAction?.dynamoDBv2?.roleArn,
                putItem: {
                  tableName: input.topicRulePayload.errorAction?.dynamoDBv2?.putItem.tableName,
                },
              },
              lambda: {
                functionArn: input.topicRulePayload.errorAction?.lambda?.functionArn,
              },
              sns: {
                targetArn: input.topicRulePayload.errorAction?.sns?.targetArn,
                roleArn: input.topicRulePayload.errorAction?.sns?.roleArn,
                messageFormat: input.topicRulePayload.errorAction?.sns?.messageFormat,
              },
              sqs: {
                roleArn: input.topicRulePayload.errorAction?.sqs?.roleArn,
                queueUrl: input.topicRulePayload.errorAction?.sqs?.queueUrl,
                useBase64: input.topicRulePayload.errorAction?.sqs?.useBase64,
              },
              kinesis: {
                roleArn: input.topicRulePayload.errorAction?.kinesis?.roleArn,
                streamName: input.topicRulePayload.errorAction?.kinesis?.streamName,
                partitionKey: input.topicRulePayload.errorAction?.kinesis?.partitionKey,
              },
              republish: {
                roleArn: input.topicRulePayload.errorAction?.republish?.roleArn,
                topic: input.topicRulePayload.errorAction?.republish?.topic,
                qos: input.topicRulePayload.errorAction?.republish?.qos,
              },
              s3: {
                roleArn: input.topicRulePayload.errorAction?.s3?.roleArn,
                bucketName: input.topicRulePayload.errorAction?.s3?.bucketName,
                key: input.topicRulePayload.errorAction?.s3?.key,
                cannedAcl: input.topicRulePayload.errorAction?.s3?.cannedAcl,
              },
              firehose: {
                roleArn: input.topicRulePayload.errorAction?.firehose?.roleArn,
                deliveryStreamName: input.topicRulePayload.errorAction?.firehose?.deliveryStreamName,
                separator: input.topicRulePayload.errorAction?.firehose?.separator,
                batchMode: input.topicRulePayload.errorAction?.firehose?.batchMode,
              },
              cloudwatchMetric: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchMetric?.roleArn,
                metricNamespace: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricNamespace,
                metricName: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricName,
                metricValue: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricValue,
                metricUnit: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricUnit,
                metricTimestamp: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricTimestamp,
              },
              cloudwatchAlarm: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchAlarm?.roleArn,
                alarmName: input.topicRulePayload.errorAction?.cloudwatchAlarm?.alarmName,
                stateReason: input.topicRulePayload.errorAction?.cloudwatchAlarm?.stateReason,
                stateValue: input.topicRulePayload.errorAction?.cloudwatchAlarm?.stateValue,
              },
              cloudwatchLogs: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchLogs?.roleArn,
                logGroupName: input.topicRulePayload.errorAction?.cloudwatchLogs?.logGroupName,
              },
              elasticsearch: {
                roleArn: input.topicRulePayload.errorAction?.elasticsearch?.roleArn,
                endpoint: input.topicRulePayload.errorAction?.elasticsearch?.endpoint,
                index: input.topicRulePayload.errorAction?.elasticsearch?.index,
                type: input.topicRulePayload.errorAction?.elasticsearch?.type,
                id: input.topicRulePayload.errorAction?.elasticsearch?.id,
              },
              salesforce: {
                token: input.topicRulePayload.errorAction?.salesforce?.token,
                url: input.topicRulePayload.errorAction?.salesforce?.url,
              },
              iotAnalytics: {
                channelArn: input.topicRulePayload.errorAction?.iotAnalytics?.channelArn,
                channelName: input.topicRulePayload.errorAction?.iotAnalytics?.channelName,
                batchMode: input.topicRulePayload.errorAction?.iotAnalytics?.batchMode,
                roleArn: input.topicRulePayload.errorAction?.iotAnalytics?.roleArn,
              },
              iotEvents: {
                inputName: input.topicRulePayload.errorAction?.iotEvents?.inputName,
                messageId: input.topicRulePayload.errorAction?.iotEvents?.messageId,
                batchMode: input.topicRulePayload.errorAction?.iotEvents?.batchMode,
                roleArn: input.topicRulePayload.errorAction?.iotEvents?.roleArn,
              },
              iotSiteWise: {
                putAssetPropertyValueEntries: input.topicRulePayload.errorAction?.iotSiteWise?.putAssetPropertyValueEntries,
                roleArn: input.topicRulePayload.errorAction?.iotSiteWise?.roleArn,
              },
              stepFunctions: {
                executionNamePrefix: input.topicRulePayload.errorAction?.stepFunctions?.executionNamePrefix,
                stateMachineName: input.topicRulePayload.errorAction?.stepFunctions?.stateMachineName,
                roleArn: input.topicRulePayload.errorAction?.stepFunctions?.roleArn,
              },
              timestream: {
                roleArn: input.topicRulePayload.errorAction?.timestream?.roleArn,
                databaseName: input.topicRulePayload.errorAction?.timestream?.databaseName,
                tableName: input.topicRulePayload.errorAction?.timestream?.tableName,
                dimensions: input.topicRulePayload.errorAction?.timestream?.dimensions,
                timestamp: {
                  value: input.topicRulePayload.errorAction?.timestream?.timestamp?.value,
                  unit: input.topicRulePayload.errorAction?.timestream?.timestamp?.unit,
                },
              },
              http: {
                url: input.topicRulePayload.errorAction?.http?.url,
                confirmationUrl: input.topicRulePayload.errorAction?.http?.confirmationUrl,
                headers: input.topicRulePayload.errorAction?.http?.headers,
                auth: {
                  sigv4: {
                    signingRegion: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.signingRegion,
                    serviceName: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.serviceName,
                    roleArn: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.roleArn,
                  },
                },
              },
            },
          },
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTopicRule', props);
  }

  public createTopicRuleDestination(input: shapes.IotCreateTopicRuleDestinationRequest): IotCreateTopicRuleDestination {
    return new IotCreateTopicRuleDestination(this, 'CreateTopicRuleDestination', this.__resources, input);
  }

  public deleteAccountAuditConfiguration(input: shapes.IotDeleteAccountAuditConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountAuditConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteAccountAuditConfiguration'),
        parameters: {
          deleteScheduledAudits: input.deleteScheduledAudits,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccountAuditConfiguration', props);
  }

  public deleteAuditSuppression(input: shapes.IotDeleteAuditSuppressionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteAuditSuppression'),
        parameters: {
          checkName: input.checkName,
          resourceIdentifier: {
            deviceCertificateId: input.resourceIdentifier.deviceCertificateId,
            caCertificateId: input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: input.resourceIdentifier.account,
            iamRoleArn: input.resourceIdentifier.iamRoleArn,
            roleAliasArn: input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAuditSuppression', props);
  }

  public deleteAuthorizer(input: shapes.IotDeleteAuthorizerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteAuthorizer'),
        parameters: {
          authorizerName: input.authorizerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAuthorizer', props);
  }

  public deleteBillingGroup(input: shapes.IotDeleteBillingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteBillingGroup'),
        parameters: {
          billingGroupName: input.billingGroupName,
          expectedVersion: input.expectedVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBillingGroup', props);
  }

  public deleteCaCertificate(input: shapes.IotDeleteCaCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteCACertificate'),
        parameters: {
          certificateId: input.certificateId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCACertificate', props);
  }

  public deleteCertificate(input: shapes.IotDeleteCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteCertificate'),
        parameters: {
          certificateId: input.certificateId,
          forceDelete: input.forceDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCertificate', props);
  }

  public deleteDimension(input: shapes.IotDeleteDimensionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteDimension'),
        parameters: {
          name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDimension', props);
  }

  public deleteDomainConfiguration(input: shapes.IotDeleteDomainConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteDomainConfiguration'),
        parameters: {
          domainConfigurationName: input.domainConfigurationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDomainConfiguration', props);
  }

  public deleteDynamicThingGroup(input: shapes.IotDeleteDynamicThingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteDynamicThingGroup'),
        parameters: {
          thingGroupName: input.thingGroupName,
          expectedVersion: input.expectedVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDynamicThingGroup', props);
  }

  public deleteJob(input: shapes.IotDeleteJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteJob'),
        parameters: {
          jobId: input.jobId,
          force: input.force,
          namespaceId: input.namespaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteJob', props);
  }

  public deleteJobExecution(input: shapes.IotDeleteJobExecutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteJobExecution'),
        parameters: {
          jobId: input.jobId,
          thingName: input.thingName,
          executionNumber: input.executionNumber,
          force: input.force,
          namespaceId: input.namespaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteJobExecution', props);
  }

  public deleteMitigationAction(input: shapes.IotDeleteMitigationActionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteMitigationAction'),
        parameters: {
          actionName: input.actionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMitigationAction', props);
  }

  public deleteOtaUpdate(input: shapes.IotDeleteOtaUpdateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteOTAUpdate'),
        parameters: {
          otaUpdateId: input.otaUpdateId,
          deleteStream: input.deleteStream,
          forceDeleteAWSJob: input.forceDeleteAWSJob,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOTAUpdate', props);
  }

  public deletePolicy(input: shapes.IotDeletePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeletePolicy'),
        parameters: {
          policyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicy', props);
  }

  public deletePolicyVersion(input: shapes.IotDeletePolicyVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeletePolicyVersion'),
        parameters: {
          policyName: input.policyName,
          policyVersionId: input.policyVersionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePolicyVersion', props);
  }

  public deleteProvisioningTemplate(input: shapes.IotDeleteProvisioningTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteProvisioningTemplate'),
        parameters: {
          templateName: input.templateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProvisioningTemplate', props);
  }

  public deleteProvisioningTemplateVersion(input: shapes.IotDeleteProvisioningTemplateVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteProvisioningTemplateVersion'),
        parameters: {
          templateName: input.templateName,
          versionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProvisioningTemplateVersion', props);
  }

  public deleteRegistrationCode(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistrationCode',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteRegistrationCode'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRegistrationCode', props);
  }

  public deleteRoleAlias(input: shapes.IotDeleteRoleAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteRoleAlias'),
        parameters: {
          roleAlias: input.roleAlias,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoleAlias', props);
  }

  public deleteScheduledAudit(input: shapes.IotDeleteScheduledAuditRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteScheduledAudit'),
        parameters: {
          scheduledAuditName: input.scheduledAuditName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteScheduledAudit', props);
  }

  public deleteSecurityProfile(input: shapes.IotDeleteSecurityProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteSecurityProfile'),
        parameters: {
          securityProfileName: input.securityProfileName,
          expectedVersion: input.expectedVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSecurityProfile', props);
  }

  public deleteStream(input: shapes.IotDeleteStreamRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteStream'),
        parameters: {
          streamId: input.streamId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStream', props);
  }

  public deleteThing(input: shapes.IotDeleteThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteThing'),
        parameters: {
          thingName: input.thingName,
          expectedVersion: input.expectedVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteThing', props);
  }

  public deleteThingGroup(input: shapes.IotDeleteThingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteThingGroup'),
        parameters: {
          thingGroupName: input.thingGroupName,
          expectedVersion: input.expectedVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteThingGroup', props);
  }

  public deleteThingType(input: shapes.IotDeleteThingTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteThingType'),
        parameters: {
          thingTypeName: input.thingTypeName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteThingType', props);
  }

  public deleteTopicRule(input: shapes.IotDeleteTopicRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteTopicRule'),
        parameters: {
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTopicRule', props);
  }

  public deleteTopicRuleDestination(input: shapes.IotDeleteTopicRuleDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteTopicRuleDestination'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTopicRuleDestination', props);
  }

  public deleteV2LoggingLevel(input: shapes.IotDeleteV2LoggingLevelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteV2LoggingLevel',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeleteV2LoggingLevel'),
        parameters: {
          targetType: input.targetType,
          targetName: input.targetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteV2LoggingLevel', props);
  }

  public deprecateThingType(input: shapes.IotDeprecateThingTypeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprecateThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DeprecateThingType'),
        parameters: {
          thingTypeName: input.thingTypeName,
          undoDeprecate: input.undoDeprecate,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeprecateThingType', props);
  }

  public describeAccountAuditConfiguration(): IotDescribeAccountAuditConfiguration {
    return new IotDescribeAccountAuditConfiguration(this, 'DescribeAccountAuditConfiguration', this.__resources);
  }

  public describeAuditFinding(input: shapes.IotDescribeAuditFindingRequest): IotDescribeAuditFinding {
    return new IotDescribeAuditFinding(this, 'DescribeAuditFinding', this.__resources, input);
  }

  public describeAuditMitigationActionsTask(input: shapes.IotDescribeAuditMitigationActionsTaskRequest): IotDescribeAuditMitigationActionsTask {
    return new IotDescribeAuditMitigationActionsTask(this, 'DescribeAuditMitigationActionsTask', this.__resources, input);
  }

  public describeAuditSuppression(input: shapes.IotDescribeAuditSuppressionRequest): IotDescribeAuditSuppression {
    return new IotDescribeAuditSuppression(this, 'DescribeAuditSuppression', this.__resources, input);
  }

  public describeAuditTask(input: shapes.IotDescribeAuditTaskRequest): IotDescribeAuditTask {
    return new IotDescribeAuditTask(this, 'DescribeAuditTask', this.__resources, input);
  }

  public describeAuthorizer(input: shapes.IotDescribeAuthorizerRequest): IotDescribeAuthorizer {
    return new IotDescribeAuthorizer(this, 'DescribeAuthorizer', this.__resources, input);
  }

  public describeBillingGroup(input: shapes.IotDescribeBillingGroupRequest): IotDescribeBillingGroup {
    return new IotDescribeBillingGroup(this, 'DescribeBillingGroup', this.__resources, input);
  }

  public describeCaCertificate(input: shapes.IotDescribeCaCertificateRequest): IotDescribeCaCertificate {
    return new IotDescribeCaCertificate(this, 'DescribeCaCertificate', this.__resources, input);
  }

  public describeCertificate(input: shapes.IotDescribeCertificateRequest): IotDescribeCertificate {
    return new IotDescribeCertificate(this, 'DescribeCertificate', this.__resources, input);
  }

  public describeDefaultAuthorizer(): IotDescribeDefaultAuthorizer {
    return new IotDescribeDefaultAuthorizer(this, 'DescribeDefaultAuthorizer', this.__resources);
  }

  public describeDimension(input: shapes.IotDescribeDimensionRequest): IotDescribeDimension {
    return new IotDescribeDimension(this, 'DescribeDimension', this.__resources, input);
  }

  public describeDomainConfiguration(input: shapes.IotDescribeDomainConfigurationRequest): IotDescribeDomainConfiguration {
    return new IotDescribeDomainConfiguration(this, 'DescribeDomainConfiguration', this.__resources, input);
  }

  public describeEndpoint(input: shapes.IotDescribeEndpointRequest): IotDescribeEndpoint {
    return new IotDescribeEndpoint(this, 'DescribeEndpoint', this.__resources, input);
  }

  public describeEventConfigurations(): IotDescribeEventConfigurations {
    return new IotDescribeEventConfigurations(this, 'DescribeEventConfigurations', this.__resources);
  }

  public describeIndex(input: shapes.IotDescribeIndexRequest): IotDescribeIndex {
    return new IotDescribeIndex(this, 'DescribeIndex', this.__resources, input);
  }

  public describeJob(input: shapes.IotDescribeJobRequest): IotDescribeJob {
    return new IotDescribeJob(this, 'DescribeJob', this.__resources, input);
  }

  public describeJobExecution(input: shapes.IotDescribeJobExecutionRequest): IotDescribeJobExecution {
    return new IotDescribeJobExecution(this, 'DescribeJobExecution', this.__resources, input);
  }

  public describeMitigationAction(input: shapes.IotDescribeMitigationActionRequest): IotDescribeMitigationAction {
    return new IotDescribeMitigationAction(this, 'DescribeMitigationAction', this.__resources, input);
  }

  public describeProvisioningTemplate(input: shapes.IotDescribeProvisioningTemplateRequest): IotDescribeProvisioningTemplate {
    return new IotDescribeProvisioningTemplate(this, 'DescribeProvisioningTemplate', this.__resources, input);
  }

  public describeProvisioningTemplateVersion(input: shapes.IotDescribeProvisioningTemplateVersionRequest): IotDescribeProvisioningTemplateVersion {
    return new IotDescribeProvisioningTemplateVersion(this, 'DescribeProvisioningTemplateVersion', this.__resources, input);
  }

  public describeRoleAlias(input: shapes.IotDescribeRoleAliasRequest): IotDescribeRoleAlias {
    return new IotDescribeRoleAlias(this, 'DescribeRoleAlias', this.__resources, input);
  }

  public describeScheduledAudit(input: shapes.IotDescribeScheduledAuditRequest): IotDescribeScheduledAudit {
    return new IotDescribeScheduledAudit(this, 'DescribeScheduledAudit', this.__resources, input);
  }

  public describeSecurityProfile(input: shapes.IotDescribeSecurityProfileRequest): IotDescribeSecurityProfile {
    return new IotDescribeSecurityProfile(this, 'DescribeSecurityProfile', this.__resources, input);
  }

  public describeStream(input: shapes.IotDescribeStreamRequest): IotDescribeStream {
    return new IotDescribeStream(this, 'DescribeStream', this.__resources, input);
  }

  public describeThing(input: shapes.IotDescribeThingRequest): IotDescribeThing {
    return new IotDescribeThing(this, 'DescribeThing', this.__resources, input);
  }

  public describeThingGroup(input: shapes.IotDescribeThingGroupRequest): IotDescribeThingGroup {
    return new IotDescribeThingGroup(this, 'DescribeThingGroup', this.__resources, input);
  }

  public describeThingRegistrationTask(input: shapes.IotDescribeThingRegistrationTaskRequest): IotDescribeThingRegistrationTask {
    return new IotDescribeThingRegistrationTask(this, 'DescribeThingRegistrationTask', this.__resources, input);
  }

  public describeThingType(input: shapes.IotDescribeThingTypeRequest): IotDescribeThingType {
    return new IotDescribeThingType(this, 'DescribeThingType', this.__resources, input);
  }

  public detachPolicy(input: shapes.IotDetachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DetachPolicy'),
        parameters: {
          policyName: input.policyName,
          target: input.target,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachPolicy', props);
  }

  public detachPrincipalPolicy(input: shapes.IotDetachPrincipalPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachPrincipalPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DetachPrincipalPolicy'),
        parameters: {
          policyName: input.policyName,
          principal: input.principal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachPrincipalPolicy', props);
  }

  public detachSecurityProfile(input: shapes.IotDetachSecurityProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DetachSecurityProfile'),
        parameters: {
          securityProfileName: input.securityProfileName,
          securityProfileTargetArn: input.securityProfileTargetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachSecurityProfile', props);
  }

  public detachThingPrincipal(input: shapes.IotDetachThingPrincipalRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachThingPrincipal',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DetachThingPrincipal'),
        parameters: {
          thingName: input.thingName,
          principal: input.principal,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachThingPrincipal', props);
  }

  public disableTopicRule(input: shapes.IotDisableTopicRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DisableTopicRule'),
        parameters: {
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableTopicRule', props);
  }

  public enableTopicRule(input: shapes.IotEnableTopicRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.EnableTopicRule'),
        parameters: {
          ruleName: input.ruleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableTopicRule', props);
  }

  public fetchCardinality(input: shapes.IotGetCardinalityRequest): IotFetchCardinality {
    return new IotFetchCardinality(this, 'FetchCardinality', this.__resources, input);
  }

  public fetchEffectivePolicies(input: shapes.IotGetEffectivePoliciesRequest): IotFetchEffectivePolicies {
    return new IotFetchEffectivePolicies(this, 'FetchEffectivePolicies', this.__resources, input);
  }

  public fetchIndexingConfiguration(): IotFetchIndexingConfiguration {
    return new IotFetchIndexingConfiguration(this, 'FetchIndexingConfiguration', this.__resources);
  }

  public fetchJobDocument(input: shapes.IotGetJobDocumentRequest): IotFetchJobDocument {
    return new IotFetchJobDocument(this, 'FetchJobDocument', this.__resources, input);
  }

  public fetchLoggingOptions(): IotFetchLoggingOptions {
    return new IotFetchLoggingOptions(this, 'FetchLoggingOptions', this.__resources);
  }

  public fetchOtaUpdate(input: shapes.IotGetOtaUpdateRequest): IotFetchOtaUpdate {
    return new IotFetchOtaUpdate(this, 'FetchOtaUpdate', this.__resources, input);
  }

  public fetchPercentiles(input: shapes.IotGetPercentilesRequest): IotFetchPercentiles {
    return new IotFetchPercentiles(this, 'FetchPercentiles', this.__resources, input);
  }

  public fetchPolicy(input: shapes.IotGetPolicyRequest): IotFetchPolicy {
    return new IotFetchPolicy(this, 'FetchPolicy', this.__resources, input);
  }

  public fetchPolicyVersion(input: shapes.IotGetPolicyVersionRequest): IotFetchPolicyVersion {
    return new IotFetchPolicyVersion(this, 'FetchPolicyVersion', this.__resources, input);
  }

  public fetchRegistrationCode(): IotFetchRegistrationCode {
    return new IotFetchRegistrationCode(this, 'FetchRegistrationCode', this.__resources);
  }

  public fetchStatistics(input: shapes.IotGetStatisticsRequest): IotFetchStatistics {
    return new IotFetchStatistics(this, 'FetchStatistics', this.__resources, input);
  }

  public fetchTopicRule(input: shapes.IotGetTopicRuleRequest): IotFetchTopicRule {
    return new IotFetchTopicRule(this, 'FetchTopicRule', this.__resources, input);
  }

  public fetchTopicRuleDestination(input: shapes.IotGetTopicRuleDestinationRequest): IotFetchTopicRuleDestination {
    return new IotFetchTopicRuleDestination(this, 'FetchTopicRuleDestination', this.__resources, input);
  }

  public fetchV2LoggingOptions(): IotFetchV2LoggingOptions {
    return new IotFetchV2LoggingOptions(this, 'FetchV2LoggingOptions', this.__resources);
  }

  public listActiveViolations(input: shapes.IotListActiveViolationsRequest): IotListActiveViolations {
    return new IotListActiveViolations(this, 'ListActiveViolations', this.__resources, input);
  }

  public listAttachedPolicies(input: shapes.IotListAttachedPoliciesRequest): IotListAttachedPolicies {
    return new IotListAttachedPolicies(this, 'ListAttachedPolicies', this.__resources, input);
  }

  public listAuditFindings(input: shapes.IotListAuditFindingsRequest): IotListAuditFindings {
    return new IotListAuditFindings(this, 'ListAuditFindings', this.__resources, input);
  }

  public listAuditMitigationActionsExecutions(input: shapes.IotListAuditMitigationActionsExecutionsRequest): IotListAuditMitigationActionsExecutions {
    return new IotListAuditMitigationActionsExecutions(this, 'ListAuditMitigationActionsExecutions', this.__resources, input);
  }

  public listAuditMitigationActionsTasks(input: shapes.IotListAuditMitigationActionsTasksRequest): IotListAuditMitigationActionsTasks {
    return new IotListAuditMitigationActionsTasks(this, 'ListAuditMitigationActionsTasks', this.__resources, input);
  }

  public listAuditSuppressions(input: shapes.IotListAuditSuppressionsRequest): IotListAuditSuppressions {
    return new IotListAuditSuppressions(this, 'ListAuditSuppressions', this.__resources, input);
  }

  public listAuditTasks(input: shapes.IotListAuditTasksRequest): IotListAuditTasks {
    return new IotListAuditTasks(this, 'ListAuditTasks', this.__resources, input);
  }

  public listAuthorizers(input: shapes.IotListAuthorizersRequest): IotListAuthorizers {
    return new IotListAuthorizers(this, 'ListAuthorizers', this.__resources, input);
  }

  public listBillingGroups(input: shapes.IotListBillingGroupsRequest): IotListBillingGroups {
    return new IotListBillingGroups(this, 'ListBillingGroups', this.__resources, input);
  }

  public listCaCertificates(input: shapes.IotListCaCertificatesRequest): IotListCaCertificates {
    return new IotListCaCertificates(this, 'ListCaCertificates', this.__resources, input);
  }

  public listCertificates(input: shapes.IotListCertificatesRequest): IotListCertificates {
    return new IotListCertificates(this, 'ListCertificates', this.__resources, input);
  }

  public listCertificatesByCa(input: shapes.IotListCertificatesByCaRequest): IotListCertificatesByCa {
    return new IotListCertificatesByCa(this, 'ListCertificatesByCa', this.__resources, input);
  }

  public listDimensions(input: shapes.IotListDimensionsRequest): IotListDimensions {
    return new IotListDimensions(this, 'ListDimensions', this.__resources, input);
  }

  public listDomainConfigurations(input: shapes.IotListDomainConfigurationsRequest): IotListDomainConfigurations {
    return new IotListDomainConfigurations(this, 'ListDomainConfigurations', this.__resources, input);
  }

  public listIndices(input: shapes.IotListIndicesRequest): IotListIndices {
    return new IotListIndices(this, 'ListIndices', this.__resources, input);
  }

  public listJobExecutionsForJob(input: shapes.IotListJobExecutionsForJobRequest): IotListJobExecutionsForJob {
    return new IotListJobExecutionsForJob(this, 'ListJobExecutionsForJob', this.__resources, input);
  }

  public listJobExecutionsForThing(input: shapes.IotListJobExecutionsForThingRequest): IotListJobExecutionsForThing {
    return new IotListJobExecutionsForThing(this, 'ListJobExecutionsForThing', this.__resources, input);
  }

  public listJobs(input: shapes.IotListJobsRequest): IotListJobs {
    return new IotListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listMitigationActions(input: shapes.IotListMitigationActionsRequest): IotListMitigationActions {
    return new IotListMitigationActions(this, 'ListMitigationActions', this.__resources, input);
  }

  public listOtaUpdates(input: shapes.IotListOtaUpdatesRequest): IotListOtaUpdates {
    return new IotListOtaUpdates(this, 'ListOtaUpdates', this.__resources, input);
  }

  public listOutgoingCertificates(input: shapes.IotListOutgoingCertificatesRequest): IotListOutgoingCertificates {
    return new IotListOutgoingCertificates(this, 'ListOutgoingCertificates', this.__resources, input);
  }

  public listPolicies(input: shapes.IotListPoliciesRequest): IotListPolicies {
    return new IotListPolicies(this, 'ListPolicies', this.__resources, input);
  }

  public listPolicyPrincipals(input: shapes.IotListPolicyPrincipalsRequest): IotListPolicyPrincipals {
    return new IotListPolicyPrincipals(this, 'ListPolicyPrincipals', this.__resources, input);
  }

  public listPolicyVersions(input: shapes.IotListPolicyVersionsRequest): IotListPolicyVersions {
    return new IotListPolicyVersions(this, 'ListPolicyVersions', this.__resources, input);
  }

  public listPrincipalPolicies(input: shapes.IotListPrincipalPoliciesRequest): IotListPrincipalPolicies {
    return new IotListPrincipalPolicies(this, 'ListPrincipalPolicies', this.__resources, input);
  }

  public listPrincipalThings(input: shapes.IotListPrincipalThingsRequest): IotListPrincipalThings {
    return new IotListPrincipalThings(this, 'ListPrincipalThings', this.__resources, input);
  }

  public listProvisioningTemplateVersions(input: shapes.IotListProvisioningTemplateVersionsRequest): IotListProvisioningTemplateVersions {
    return new IotListProvisioningTemplateVersions(this, 'ListProvisioningTemplateVersions', this.__resources, input);
  }

  public listProvisioningTemplates(input: shapes.IotListProvisioningTemplatesRequest): IotListProvisioningTemplates {
    return new IotListProvisioningTemplates(this, 'ListProvisioningTemplates', this.__resources, input);
  }

  public listRoleAliases(input: shapes.IotListRoleAliasesRequest): IotListRoleAliases {
    return new IotListRoleAliases(this, 'ListRoleAliases', this.__resources, input);
  }

  public listScheduledAudits(input: shapes.IotListScheduledAuditsRequest): IotListScheduledAudits {
    return new IotListScheduledAudits(this, 'ListScheduledAudits', this.__resources, input);
  }

  public listSecurityProfiles(input: shapes.IotListSecurityProfilesRequest): IotListSecurityProfiles {
    return new IotListSecurityProfiles(this, 'ListSecurityProfiles', this.__resources, input);
  }

  public listSecurityProfilesForTarget(input: shapes.IotListSecurityProfilesForTargetRequest): IotListSecurityProfilesForTarget {
    return new IotListSecurityProfilesForTarget(this, 'ListSecurityProfilesForTarget', this.__resources, input);
  }

  public listStreams(input: shapes.IotListStreamsRequest): IotListStreams {
    return new IotListStreams(this, 'ListStreams', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IotListTagsForResourceRequest): IotListTagsForResource {
    return new IotListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTargetsForPolicy(input: shapes.IotListTargetsForPolicyRequest): IotListTargetsForPolicy {
    return new IotListTargetsForPolicy(this, 'ListTargetsForPolicy', this.__resources, input);
  }

  public listTargetsForSecurityProfile(input: shapes.IotListTargetsForSecurityProfileRequest): IotListTargetsForSecurityProfile {
    return new IotListTargetsForSecurityProfile(this, 'ListTargetsForSecurityProfile', this.__resources, input);
  }

  public listThingGroups(input: shapes.IotListThingGroupsRequest): IotListThingGroups {
    return new IotListThingGroups(this, 'ListThingGroups', this.__resources, input);
  }

  public listThingGroupsForThing(input: shapes.IotListThingGroupsForThingRequest): IotListThingGroupsForThing {
    return new IotListThingGroupsForThing(this, 'ListThingGroupsForThing', this.__resources, input);
  }

  public listThingPrincipals(input: shapes.IotListThingPrincipalsRequest): IotListThingPrincipals {
    return new IotListThingPrincipals(this, 'ListThingPrincipals', this.__resources, input);
  }

  public listThingRegistrationTaskReports(input: shapes.IotListThingRegistrationTaskReportsRequest): IotListThingRegistrationTaskReports {
    return new IotListThingRegistrationTaskReports(this, 'ListThingRegistrationTaskReports', this.__resources, input);
  }

  public listThingRegistrationTasks(input: shapes.IotListThingRegistrationTasksRequest): IotListThingRegistrationTasks {
    return new IotListThingRegistrationTasks(this, 'ListThingRegistrationTasks', this.__resources, input);
  }

  public listThingTypes(input: shapes.IotListThingTypesRequest): IotListThingTypes {
    return new IotListThingTypes(this, 'ListThingTypes', this.__resources, input);
  }

  public listThings(input: shapes.IotListThingsRequest): IotListThings {
    return new IotListThings(this, 'ListThings', this.__resources, input);
  }

  public listThingsInBillingGroup(input: shapes.IotListThingsInBillingGroupRequest): IotListThingsInBillingGroup {
    return new IotListThingsInBillingGroup(this, 'ListThingsInBillingGroup', this.__resources, input);
  }

  public listThingsInThingGroup(input: shapes.IotListThingsInThingGroupRequest): IotListThingsInThingGroup {
    return new IotListThingsInThingGroup(this, 'ListThingsInThingGroup', this.__resources, input);
  }

  public listTopicRuleDestinations(input: shapes.IotListTopicRuleDestinationsRequest): IotListTopicRuleDestinations {
    return new IotListTopicRuleDestinations(this, 'ListTopicRuleDestinations', this.__resources, input);
  }

  public listTopicRules(input: shapes.IotListTopicRulesRequest): IotListTopicRules {
    return new IotListTopicRules(this, 'ListTopicRules', this.__resources, input);
  }

  public listV2LoggingLevels(input: shapes.IotListV2LoggingLevelsRequest): IotListV2LoggingLevels {
    return new IotListV2LoggingLevels(this, 'ListV2LoggingLevels', this.__resources, input);
  }

  public listViolationEvents(input: shapes.IotListViolationEventsRequest): IotListViolationEvents {
    return new IotListViolationEvents(this, 'ListViolationEvents', this.__resources, input);
  }

  public registerCaCertificate(input: shapes.IotRegisterCaCertificateRequest): IotRegisterCaCertificate {
    return new IotRegisterCaCertificate(this, 'RegisterCaCertificate', this.__resources, input);
  }

  public registerCertificate(input: shapes.IotRegisterCertificateRequest): IotRegisterCertificate {
    return new IotRegisterCertificate(this, 'RegisterCertificate', this.__resources, input);
  }

  public registerCertificateWithoutCa(input: shapes.IotRegisterCertificateWithoutCaRequest): IotRegisterCertificateWithoutCa {
    return new IotRegisterCertificateWithoutCa(this, 'RegisterCertificateWithoutCa', this.__resources, input);
  }

  public registerThing(input: shapes.IotRegisterThingRequest): IotRegisterThing {
    return new IotRegisterThing(this, 'RegisterThing', this.__resources, input);
  }

  public rejectCertificateTransfer(input: shapes.IotRejectCertificateTransferRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectCertificateTransfer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RejectCertificateTransfer'),
        parameters: {
          certificateId: input.certificateId,
          rejectReason: input.rejectReason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RejectCertificateTransfer', props);
  }

  public removeThingFromBillingGroup(input: shapes.IotRemoveThingFromBillingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeThingFromBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RemoveThingFromBillingGroup'),
        parameters: {
          billingGroupName: input.billingGroupName,
          billingGroupArn: input.billingGroupArn,
          thingName: input.thingName,
          thingArn: input.thingArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveThingFromBillingGroup', props);
  }

  public removeThingFromThingGroup(input: shapes.IotRemoveThingFromThingGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeThingFromThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RemoveThingFromThingGroup'),
        parameters: {
          thingGroupName: input.thingGroupName,
          thingGroupArn: input.thingGroupArn,
          thingName: input.thingName,
          thingArn: input.thingArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveThingFromThingGroup', props);
  }

  public replaceTopicRule(input: shapes.IotReplaceTopicRuleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'replaceTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ReplaceTopicRule'),
        parameters: {
          ruleName: input.ruleName,
          topicRulePayload: {
            sql: input.topicRulePayload.sql,
            description: input.topicRulePayload.description,
            actions: input.topicRulePayload.actions,
            ruleDisabled: input.topicRulePayload.ruleDisabled,
            awsIotSqlVersion: input.topicRulePayload.awsIotSqlVersion,
            errorAction: {
              dynamoDB: {
                tableName: input.topicRulePayload.errorAction?.dynamoDB?.tableName,
                roleArn: input.topicRulePayload.errorAction?.dynamoDB?.roleArn,
                operation: input.topicRulePayload.errorAction?.dynamoDB?.operation,
                hashKeyField: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyField,
                hashKeyValue: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyValue,
                hashKeyType: input.topicRulePayload.errorAction?.dynamoDB?.hashKeyType,
                rangeKeyField: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyField,
                rangeKeyValue: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyValue,
                rangeKeyType: input.topicRulePayload.errorAction?.dynamoDB?.rangeKeyType,
                payloadField: input.topicRulePayload.errorAction?.dynamoDB?.payloadField,
              },
              dynamoDBv2: {
                roleArn: input.topicRulePayload.errorAction?.dynamoDBv2?.roleArn,
                putItem: {
                  tableName: input.topicRulePayload.errorAction?.dynamoDBv2?.putItem.tableName,
                },
              },
              lambda: {
                functionArn: input.topicRulePayload.errorAction?.lambda?.functionArn,
              },
              sns: {
                targetArn: input.topicRulePayload.errorAction?.sns?.targetArn,
                roleArn: input.topicRulePayload.errorAction?.sns?.roleArn,
                messageFormat: input.topicRulePayload.errorAction?.sns?.messageFormat,
              },
              sqs: {
                roleArn: input.topicRulePayload.errorAction?.sqs?.roleArn,
                queueUrl: input.topicRulePayload.errorAction?.sqs?.queueUrl,
                useBase64: input.topicRulePayload.errorAction?.sqs?.useBase64,
              },
              kinesis: {
                roleArn: input.topicRulePayload.errorAction?.kinesis?.roleArn,
                streamName: input.topicRulePayload.errorAction?.kinesis?.streamName,
                partitionKey: input.topicRulePayload.errorAction?.kinesis?.partitionKey,
              },
              republish: {
                roleArn: input.topicRulePayload.errorAction?.republish?.roleArn,
                topic: input.topicRulePayload.errorAction?.republish?.topic,
                qos: input.topicRulePayload.errorAction?.republish?.qos,
              },
              s3: {
                roleArn: input.topicRulePayload.errorAction?.s3?.roleArn,
                bucketName: input.topicRulePayload.errorAction?.s3?.bucketName,
                key: input.topicRulePayload.errorAction?.s3?.key,
                cannedAcl: input.topicRulePayload.errorAction?.s3?.cannedAcl,
              },
              firehose: {
                roleArn: input.topicRulePayload.errorAction?.firehose?.roleArn,
                deliveryStreamName: input.topicRulePayload.errorAction?.firehose?.deliveryStreamName,
                separator: input.topicRulePayload.errorAction?.firehose?.separator,
                batchMode: input.topicRulePayload.errorAction?.firehose?.batchMode,
              },
              cloudwatchMetric: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchMetric?.roleArn,
                metricNamespace: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricNamespace,
                metricName: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricName,
                metricValue: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricValue,
                metricUnit: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricUnit,
                metricTimestamp: input.topicRulePayload.errorAction?.cloudwatchMetric?.metricTimestamp,
              },
              cloudwatchAlarm: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchAlarm?.roleArn,
                alarmName: input.topicRulePayload.errorAction?.cloudwatchAlarm?.alarmName,
                stateReason: input.topicRulePayload.errorAction?.cloudwatchAlarm?.stateReason,
                stateValue: input.topicRulePayload.errorAction?.cloudwatchAlarm?.stateValue,
              },
              cloudwatchLogs: {
                roleArn: input.topicRulePayload.errorAction?.cloudwatchLogs?.roleArn,
                logGroupName: input.topicRulePayload.errorAction?.cloudwatchLogs?.logGroupName,
              },
              elasticsearch: {
                roleArn: input.topicRulePayload.errorAction?.elasticsearch?.roleArn,
                endpoint: input.topicRulePayload.errorAction?.elasticsearch?.endpoint,
                index: input.topicRulePayload.errorAction?.elasticsearch?.index,
                type: input.topicRulePayload.errorAction?.elasticsearch?.type,
                id: input.topicRulePayload.errorAction?.elasticsearch?.id,
              },
              salesforce: {
                token: input.topicRulePayload.errorAction?.salesforce?.token,
                url: input.topicRulePayload.errorAction?.salesforce?.url,
              },
              iotAnalytics: {
                channelArn: input.topicRulePayload.errorAction?.iotAnalytics?.channelArn,
                channelName: input.topicRulePayload.errorAction?.iotAnalytics?.channelName,
                batchMode: input.topicRulePayload.errorAction?.iotAnalytics?.batchMode,
                roleArn: input.topicRulePayload.errorAction?.iotAnalytics?.roleArn,
              },
              iotEvents: {
                inputName: input.topicRulePayload.errorAction?.iotEvents?.inputName,
                messageId: input.topicRulePayload.errorAction?.iotEvents?.messageId,
                batchMode: input.topicRulePayload.errorAction?.iotEvents?.batchMode,
                roleArn: input.topicRulePayload.errorAction?.iotEvents?.roleArn,
              },
              iotSiteWise: {
                putAssetPropertyValueEntries: input.topicRulePayload.errorAction?.iotSiteWise?.putAssetPropertyValueEntries,
                roleArn: input.topicRulePayload.errorAction?.iotSiteWise?.roleArn,
              },
              stepFunctions: {
                executionNamePrefix: input.topicRulePayload.errorAction?.stepFunctions?.executionNamePrefix,
                stateMachineName: input.topicRulePayload.errorAction?.stepFunctions?.stateMachineName,
                roleArn: input.topicRulePayload.errorAction?.stepFunctions?.roleArn,
              },
              timestream: {
                roleArn: input.topicRulePayload.errorAction?.timestream?.roleArn,
                databaseName: input.topicRulePayload.errorAction?.timestream?.databaseName,
                tableName: input.topicRulePayload.errorAction?.timestream?.tableName,
                dimensions: input.topicRulePayload.errorAction?.timestream?.dimensions,
                timestamp: {
                  value: input.topicRulePayload.errorAction?.timestream?.timestamp?.value,
                  unit: input.topicRulePayload.errorAction?.timestream?.timestamp?.unit,
                },
              },
              http: {
                url: input.topicRulePayload.errorAction?.http?.url,
                confirmationUrl: input.topicRulePayload.errorAction?.http?.confirmationUrl,
                headers: input.topicRulePayload.errorAction?.http?.headers,
                auth: {
                  sigv4: {
                    signingRegion: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.signingRegion,
                    serviceName: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.serviceName,
                    roleArn: input.topicRulePayload.errorAction?.http?.auth?.sigv4?.roleArn,
                  },
                },
              },
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ReplaceTopicRule', props);
  }

  public searchIndex(input: shapes.IotSearchIndexRequest): IotSearchIndex {
    return new IotSearchIndex(this, 'SearchIndex', this.__resources, input);
  }

  public setDefaultAuthorizer(input: shapes.IotSetDefaultAuthorizerRequest): IotSetDefaultAuthorizer {
    return new IotSetDefaultAuthorizer(this, 'SetDefaultAuthorizer', this.__resources, input);
  }

  public setDefaultPolicyVersion(input: shapes.IotSetDefaultPolicyVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDefaultPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetDefaultPolicyVersion'),
        parameters: {
          policyName: input.policyName,
          policyVersionId: input.policyVersionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetDefaultPolicyVersion', props);
  }

  public setLoggingOptions(input: shapes.IotSetLoggingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setLoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetLoggingOptions'),
        parameters: {
          loggingOptionsPayload: {
            roleArn: input.loggingOptionsPayload.roleArn,
            logLevel: input.loggingOptionsPayload.logLevel,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetLoggingOptions', props);
  }

  public setV2LoggingLevel(input: shapes.IotSetV2LoggingLevelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setV2LoggingLevel',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetV2LoggingLevel'),
        parameters: {
          logTarget: {
            targetType: input.logTarget.targetType,
            targetName: input.logTarget.targetName,
          },
          logLevel: input.logLevel,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetV2LoggingLevel', props);
  }

  public setV2LoggingOptions(input: shapes.IotSetV2LoggingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setV2LoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetV2LoggingOptions'),
        parameters: {
          roleArn: input.roleArn,
          defaultLogLevel: input.defaultLogLevel,
          disableAllLogs: input.disableAllLogs,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetV2LoggingOptions', props);
  }

  public startAuditMitigationActionsTask(input: shapes.IotStartAuditMitigationActionsTaskRequest): IotStartAuditMitigationActionsTask {
    return new IotStartAuditMitigationActionsTask(this, 'StartAuditMitigationActionsTask', this.__resources, input);
  }

  public startOnDemandAuditTask(input: shapes.IotStartOnDemandAuditTaskRequest): IotStartOnDemandAuditTask {
    return new IotStartOnDemandAuditTask(this, 'StartOnDemandAuditTask', this.__resources, input);
  }

  public startThingRegistrationTask(input: shapes.IotStartThingRegistrationTaskRequest): IotStartThingRegistrationTask {
    return new IotStartThingRegistrationTask(this, 'StartThingRegistrationTask', this.__resources, input);
  }

  public stopThingRegistrationTask(input: shapes.IotStopThingRegistrationTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.StopThingRegistrationTask'),
        parameters: {
          taskId: input.taskId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopThingRegistrationTask', props);
  }

  public tagResource(input: shapes.IotTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testAuthorization(input: shapes.IotTestAuthorizationRequest): IotTestAuthorization {
    return new IotTestAuthorization(this, 'TestAuthorization', this.__resources, input);
  }

  public testInvokeAuthorizer(input: shapes.IotTestInvokeAuthorizerRequest): IotTestInvokeAuthorizer {
    return new IotTestInvokeAuthorizer(this, 'TestInvokeAuthorizer', this.__resources, input);
  }

  public transferCertificate(input: shapes.IotTransferCertificateRequest): IotTransferCertificate {
    return new IotTransferCertificate(this, 'TransferCertificate', this.__resources, input);
  }

  public untagResource(input: shapes.IotUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccountAuditConfiguration(input: shapes.IotUpdateAccountAuditConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountAuditConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateAccountAuditConfiguration'),
        parameters: {
          roleArn: input.roleArn,
          auditNotificationTargetConfigurations: input.auditNotificationTargetConfigurations,
          auditCheckConfigurations: input.auditCheckConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAccountAuditConfiguration', props);
  }

  public updateAuditSuppression(input: shapes.IotUpdateAuditSuppressionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateAuditSuppression'),
        parameters: {
          checkName: input.checkName,
          resourceIdentifier: {
            deviceCertificateId: input.resourceIdentifier.deviceCertificateId,
            caCertificateId: input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: input.resourceIdentifier.account,
            iamRoleArn: input.resourceIdentifier.iamRoleArn,
            roleAliasArn: input.resourceIdentifier.roleAliasArn,
          },
          expirationDate: input.expirationDate,
          suppressIndefinitely: input.suppressIndefinitely,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAuditSuppression', props);
  }

  public updateAuthorizer(input: shapes.IotUpdateAuthorizerRequest): IotUpdateAuthorizer {
    return new IotUpdateAuthorizer(this, 'UpdateAuthorizer', this.__resources, input);
  }

  public updateBillingGroup(input: shapes.IotUpdateBillingGroupRequest): IotUpdateBillingGroup {
    return new IotUpdateBillingGroup(this, 'UpdateBillingGroup', this.__resources, input);
  }

  public updateCaCertificate(input: shapes.IotUpdateCaCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateCACertificate'),
        parameters: {
          certificateId: input.certificateId,
          newStatus: input.newStatus,
          newAutoRegistrationStatus: input.newAutoRegistrationStatus,
          registrationConfig: {
            templateBody: input.registrationConfig?.templateBody,
            roleArn: input.registrationConfig?.roleArn,
          },
          removeAutoRegistration: input.removeAutoRegistration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCACertificate', props);
  }

  public updateCertificate(input: shapes.IotUpdateCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateCertificate'),
        parameters: {
          certificateId: input.certificateId,
          newStatus: input.newStatus,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCertificate', props);
  }

  public updateDimension(input: shapes.IotUpdateDimensionRequest): IotUpdateDimension {
    return new IotUpdateDimension(this, 'UpdateDimension', this.__resources, input);
  }

  public updateDomainConfiguration(input: shapes.IotUpdateDomainConfigurationRequest): IotUpdateDomainConfiguration {
    return new IotUpdateDomainConfiguration(this, 'UpdateDomainConfiguration', this.__resources, input);
  }

  public updateDynamicThingGroup(input: shapes.IotUpdateDynamicThingGroupRequest): IotUpdateDynamicThingGroup {
    return new IotUpdateDynamicThingGroup(this, 'UpdateDynamicThingGroup', this.__resources, input);
  }

  public updateEventConfigurations(input: shapes.IotUpdateEventConfigurationsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateEventConfigurations'),
        parameters: {
          eventConfigurations: input.eventConfigurations,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEventConfigurations', props);
  }

  public updateIndexingConfiguration(input: shapes.IotUpdateIndexingConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateIndexingConfiguration'),
        parameters: {
          thingIndexingConfiguration: {
            thingIndexingMode: input.thingIndexingConfiguration?.thingIndexingMode,
            thingConnectivityIndexingMode: input.thingIndexingConfiguration?.thingConnectivityIndexingMode,
            managedFields: input.thingIndexingConfiguration?.managedFields,
            customFields: input.thingIndexingConfiguration?.customFields,
          },
          thingGroupIndexingConfiguration: {
            thingGroupIndexingMode: input.thingGroupIndexingConfiguration?.thingGroupIndexingMode,
            managedFields: input.thingGroupIndexingConfiguration?.managedFields,
            customFields: input.thingGroupIndexingConfiguration?.customFields,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateIndexingConfiguration', props);
  }

  public updateJob(input: shapes.IotUpdateJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateJob'),
        parameters: {
          jobId: input.jobId,
          description: input.description,
          presignedUrlConfig: {
            roleArn: input.presignedUrlConfig?.roleArn,
            expiresInSec: input.presignedUrlConfig?.expiresInSec,
          },
          jobExecutionsRolloutConfig: {
            maximumPerMinute: input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          namespaceId: input.namespaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateJob', props);
  }

  public updateMitigationAction(input: shapes.IotUpdateMitigationActionRequest): IotUpdateMitigationAction {
    return new IotUpdateMitigationAction(this, 'UpdateMitigationAction', this.__resources, input);
  }

  public updateProvisioningTemplate(input: shapes.IotUpdateProvisioningTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateProvisioningTemplate'),
        parameters: {
          templateName: input.templateName,
          description: input.description,
          enabled: input.enabled,
          defaultVersionId: input.defaultVersionId,
          provisioningRoleArn: input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: input.preProvisioningHook?.payloadVersion,
            targetArn: input.preProvisioningHook?.targetArn,
          },
          removePreProvisioningHook: input.removePreProvisioningHook,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProvisioningTemplate', props);
  }

  public updateRoleAlias(input: shapes.IotUpdateRoleAliasRequest): IotUpdateRoleAlias {
    return new IotUpdateRoleAlias(this, 'UpdateRoleAlias', this.__resources, input);
  }

  public updateScheduledAudit(input: shapes.IotUpdateScheduledAuditRequest): IotUpdateScheduledAudit {
    return new IotUpdateScheduledAudit(this, 'UpdateScheduledAudit', this.__resources, input);
  }

  public updateSecurityProfile(input: shapes.IotUpdateSecurityProfileRequest): IotUpdateSecurityProfile {
    return new IotUpdateSecurityProfile(this, 'UpdateSecurityProfile', this.__resources, input);
  }

  public updateStream(input: shapes.IotUpdateStreamRequest): IotUpdateStream {
    return new IotUpdateStream(this, 'UpdateStream', this.__resources, input);
  }

  public updateThing(input: shapes.IotUpdateThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateThing'),
        parameters: {
          thingName: input.thingName,
          thingTypeName: input.thingTypeName,
          attributePayload: {
            attributes: input.attributePayload?.attributes,
            merge: input.attributePayload?.merge,
          },
          expectedVersion: input.expectedVersion,
          removeThingType: input.removeThingType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateThing', props);
  }

  public updateThingGroup(input: shapes.IotUpdateThingGroupRequest): IotUpdateThingGroup {
    return new IotUpdateThingGroup(this, 'UpdateThingGroup', this.__resources, input);
  }

  public updateThingGroupsForThing(input: shapes.IotUpdateThingGroupsForThingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThingGroupsForThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateThingGroupsForThing'),
        parameters: {
          thingName: input.thingName,
          thingGroupsToAdd: input.thingGroupsToAdd,
          thingGroupsToRemove: input.thingGroupsToRemove,
          overrideDynamicGroups: input.overrideDynamicGroups,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateThingGroupsForThing', props);
  }

  public updateTopicRuleDestination(input: shapes.IotUpdateTopicRuleDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateTopicRuleDestination'),
        parameters: {
          arn: input.arn,
          status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTopicRuleDestination', props);
  }

  public validateSecurityProfileBehaviors(input: shapes.IotValidateSecurityProfileBehaviorsRequest): IotValidateSecurityProfileBehaviors {
    return new IotValidateSecurityProfileBehaviors(this, 'ValidateSecurityProfileBehaviors', this.__resources, input);
  }

}

export class IotAssociateTargetsWithJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotAssociateTargetsWithJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTargetsWithJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AssociateTargetsWithJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          targets: this.input.targets,
          jobId: this.input.jobId,
          comment: this.input.comment,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTargetsWithJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTargetsWithJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AssociateTargetsWithJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          targets: this.input.targets,
          jobId: this.input.jobId,
          comment: this.input.comment,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTargetsWithJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTargetsWithJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.AssociateTargetsWithJob.description'),
        outputPath: 'description',
        parameters: {
          targets: this.input.targets,
          jobId: this.input.jobId,
          comment: this.input.comment,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTargetsWithJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotCancelJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCancelJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          jobId: this.input.jobId,
          reasonCode: this.input.reasonCode,
          comment: this.input.comment,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          jobId: this.input.jobId,
          reasonCode: this.input.reasonCode,
          comment: this.input.comment,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CancelJob.description'),
        outputPath: 'description',
        parameters: {
          jobId: this.input.jobId,
          reasonCode: this.input.reasonCode,
          comment: this.input.comment,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotCreateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateAuthorizerRequest) {
    super(scope, id);
  }

  public get authorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateAuthorizer.authorizerName'),
        outputPath: 'authorizerName',
        parameters: {
          authorizerName: this.input.authorizerName,
          authorizerFunctionArn: this.input.authorizerFunctionArn,
          tokenKeyName: this.input.tokenKeyName,
          tokenSigningPublicKeys: this.input.tokenSigningPublicKeys,
          status: this.input.status,
          tags: this.input.tags,
          signingDisabled: this.input.signingDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authorizerName', props);
    return resource.getResponseField('authorizerName') as unknown as string;
  }

  public get authorizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateAuthorizer.authorizerArn'),
        outputPath: 'authorizerArn',
        parameters: {
          authorizerName: this.input.authorizerName,
          authorizerFunctionArn: this.input.authorizerFunctionArn,
          tokenKeyName: this.input.tokenKeyName,
          tokenSigningPublicKeys: this.input.tokenSigningPublicKeys,
          status: this.input.status,
          tags: this.input.tags,
          signingDisabled: this.input.signingDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotCreateBillingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateBillingGroupRequest) {
    super(scope, id);
  }

  public get billingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateBillingGroup.billingGroupName'),
        outputPath: 'billingGroupName',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBillingGroup.billingGroupName', props);
    return resource.getResponseField('billingGroupName') as unknown as string;
  }

  public get billingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateBillingGroup.billingGroupArn'),
        outputPath: 'billingGroupArn',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBillingGroup.billingGroupArn', props);
    return resource.getResponseField('billingGroupArn') as unknown as string;
  }

  public get billingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateBillingGroup.billingGroupId'),
        outputPath: 'billingGroupId',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBillingGroup.billingGroupId', props);
    return resource.getResponseField('billingGroupId') as unknown as string;
  }

}

export class IotCreateCertificateFromCsr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateCertificateFromCsrRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateFromCsr',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateCertificateFromCsr.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          certificateSigningRequest: this.input.certificateSigningRequest,
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateFromCsr.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateFromCsr',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateCertificateFromCsr.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          certificateSigningRequest: this.input.certificateSigningRequest,
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateFromCsr.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificateFromCsr',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateCertificateFromCsr.certificatePem'),
        outputPath: 'certificatePem',
        parameters: {
          certificateSigningRequest: this.input.certificateSigningRequest,
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificateFromCsr.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

}

export class IotCreateDimension extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateDimensionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDimension.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          type: this.input.type,
          stringValues: this.input.stringValues,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDimension.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDimension.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          type: this.input.type,
          stringValues: this.input.stringValues,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDimension.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class IotCreateDomainConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateDomainConfigurationRequest) {
    super(scope, id);
  }

  public get domainConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDomainConfiguration.domainConfigurationName'),
        outputPath: 'domainConfigurationName',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
          domainName: this.input.domainName,
          serverCertificateArns: this.input.serverCertificateArns,
          validationCertificateArn: this.input.validationCertificateArn,
          authorizerConfig: {
            defaultAuthorizerName: this.input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.input.authorizerConfig?.allowAuthorizerOverride,
          },
          serviceType: this.input.serviceType,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainConfiguration.domainConfigurationName', props);
    return resource.getResponseField('domainConfigurationName') as unknown as string;
  }

  public get domainConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDomainConfiguration.domainConfigurationArn'),
        outputPath: 'domainConfigurationArn',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
          domainName: this.input.domainName,
          serverCertificateArns: this.input.serverCertificateArns,
          validationCertificateArn: this.input.validationCertificateArn,
          authorizerConfig: {
            defaultAuthorizerName: this.input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.input.authorizerConfig?.allowAuthorizerOverride,
          },
          serviceType: this.input.serviceType,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainConfiguration.domainConfigurationArn', props);
    return resource.getResponseField('domainConfigurationArn') as unknown as string;
  }

}

export class IotCreateDynamicThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateDynamicThingGroupRequest) {
    super(scope, id);
  }

  public get thingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.thingGroupName'),
        outputPath: 'thingGroupName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.thingGroupName', props);
    return resource.getResponseField('thingGroupName') as unknown as string;
  }

  public get thingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.thingGroupArn'),
        outputPath: 'thingGroupArn',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.thingGroupArn', props);
    return resource.getResponseField('thingGroupArn') as unknown as string;
  }

  public get thingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.thingGroupId'),
        outputPath: 'thingGroupId',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.thingGroupId', props);
    return resource.getResponseField('thingGroupId') as unknown as string;
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.indexName'),
        outputPath: 'indexName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.indexName', props);
    return resource.getResponseField('indexName') as unknown as string;
  }

  public get queryString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.queryString'),
        outputPath: 'queryString',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.queryString', props);
    return resource.getResponseField('queryString') as unknown as string;
  }

  public get queryVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateDynamicThingGroup.queryVersion'),
        outputPath: 'queryVersion',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDynamicThingGroup.queryVersion', props);
    return resource.getResponseField('queryVersion') as unknown as string;
  }

}

export class IotCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          jobId: this.input.jobId,
          targets: this.input.targets,
          documentSource: this.input.documentSource,
          document: this.input.document,
          description: this.input.description,
          presignedUrlConfig: {
            roleArn: this.input.presignedUrlConfig?.roleArn,
            expiresInSec: this.input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.input.tags,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          jobId: this.input.jobId,
          targets: this.input.targets,
          documentSource: this.input.documentSource,
          document: this.input.document,
          description: this.input.description,
          presignedUrlConfig: {
            roleArn: this.input.presignedUrlConfig?.roleArn,
            expiresInSec: this.input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.input.tags,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateJob.description'),
        outputPath: 'description',
        parameters: {
          jobId: this.input.jobId,
          targets: this.input.targets,
          documentSource: this.input.documentSource,
          document: this.input.document,
          description: this.input.description,
          presignedUrlConfig: {
            roleArn: this.input.presignedUrlConfig?.roleArn,
            expiresInSec: this.input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.input.tags,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotCreateKeysAndCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateKeysAndCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeysAndCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateKeysAndCertificate.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeysAndCertificate.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeysAndCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateKeysAndCertificate.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeysAndCertificate.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeysAndCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateKeysAndCertificate.certificatePem'),
        outputPath: 'certificatePem',
        parameters: {
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeysAndCertificate.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

  public get keyPair(): IotCreateKeysAndCertificateKeyPair {
    return new IotCreateKeysAndCertificateKeyPair(this, 'KeyPair', this.__resources, this.input);
  }

}

export class IotCreateKeysAndCertificateKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateKeysAndCertificateRequest) {
    super(scope, id);
  }

  public get publicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeysAndCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateKeysAndCertificate.keyPair.PublicKey'),
        outputPath: 'keyPair.PublicKey',
        parameters: {
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeysAndCertificate.keyPair.PublicKey', props);
    return resource.getResponseField('keyPair.PublicKey') as unknown as string;
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeysAndCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateKeysAndCertificate.keyPair.PrivateKey'),
        outputPath: 'keyPair.PrivateKey',
        parameters: {
          setAsActive: this.input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeysAndCertificate.keyPair.PrivateKey', props);
    return resource.getResponseField('keyPair.PrivateKey') as unknown as string;
  }

}

export class IotCreateMitigationAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateMitigationActionRequest) {
    super(scope, id);
  }

  public get actionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateMitigationAction.actionArn'),
        outputPath: 'actionArn',
        parameters: {
          actionName: this.input.actionName,
          roleArn: this.input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.input.actionParams.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.input.actionParams.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.input.actionParams.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.input.actionParams.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.input.actionParams.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.input.actionParams.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.input.actionParams.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.input.actionParams.publishFindingToSnsParams?.topicArn,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMitigationAction.actionArn', props);
    return resource.getResponseField('actionArn') as unknown as string;
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateMitigationAction.actionId'),
        outputPath: 'actionId',
        parameters: {
          actionName: this.input.actionName,
          roleArn: this.input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.input.actionParams.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.input.actionParams.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.input.actionParams.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.input.actionParams.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.input.actionParams.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.input.actionParams.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.input.actionParams.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.input.actionParams.publishFindingToSnsParams?.topicArn,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMitigationAction.actionId', props);
    return resource.getResponseField('actionId') as unknown as string;
  }

}

export class IotCreateOtaUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateOtaUpdateRequest) {
    super(scope, id);
  }

  public get otaUpdateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateOTAUpdate.otaUpdateId'),
        outputPath: 'otaUpdateId',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
          description: this.input.description,
          targets: this.input.targets,
          protocols: this.input.protocols,
          targetSelection: this.input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.input.files,
          roleArn: this.input.roleArn,
          additionalParameters: this.input.additionalParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOTAUpdate.otaUpdateId', props);
    return resource.getResponseField('otaUpdateId') as unknown as string;
  }

  public get awsIotJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateOTAUpdate.awsIotJobId'),
        outputPath: 'awsIotJobId',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
          description: this.input.description,
          targets: this.input.targets,
          protocols: this.input.protocols,
          targetSelection: this.input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.input.files,
          roleArn: this.input.roleArn,
          additionalParameters: this.input.additionalParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOTAUpdate.awsIotJobId', props);
    return resource.getResponseField('awsIotJobId') as unknown as string;
  }

  public get otaUpdateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateOTAUpdate.otaUpdateArn'),
        outputPath: 'otaUpdateArn',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
          description: this.input.description,
          targets: this.input.targets,
          protocols: this.input.protocols,
          targetSelection: this.input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.input.files,
          roleArn: this.input.roleArn,
          additionalParameters: this.input.additionalParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOTAUpdate.otaUpdateArn', props);
    return resource.getResponseField('otaUpdateArn') as unknown as string;
  }

  public get awsIotJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateOTAUpdate.awsIotJobArn'),
        outputPath: 'awsIotJobArn',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
          description: this.input.description,
          targets: this.input.targets,
          protocols: this.input.protocols,
          targetSelection: this.input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.input.files,
          roleArn: this.input.roleArn,
          additionalParameters: this.input.additionalParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOTAUpdate.awsIotJobArn', props);
    return resource.getResponseField('awsIotJobArn') as unknown as string;
  }

  public get otaUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateOTAUpdate.otaUpdateStatus'),
        outputPath: 'otaUpdateStatus',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
          description: this.input.description,
          targets: this.input.targets,
          protocols: this.input.protocols,
          targetSelection: this.input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.input.files,
          roleArn: this.input.roleArn,
          additionalParameters: this.input.additionalParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOTAUpdate.otaUpdateStatus', props);
    return resource.getResponseField('otaUpdateStatus') as unknown as string;
  }

}

export class IotCreatePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreatePolicyRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicy.policyName'),
        outputPath: 'policyName',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.policyName', props);
    return resource.getResponseField('policyName') as unknown as string;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicy.policyArn'),
        outputPath: 'policyArn',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.policyArn', props);
    return resource.getResponseField('policyArn') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicy.policyDocument'),
        outputPath: 'policyDocument',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.policyDocument', props);
    return resource.getResponseField('policyDocument') as unknown as string;
  }

  public get policyVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicy.policyVersionId'),
        outputPath: 'policyVersionId',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicy.policyVersionId', props);
    return resource.getResponseField('policyVersionId') as unknown as string;
  }

}

export class IotCreatePolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreatePolicyVersionRequest) {
    super(scope, id);
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicyVersion.policyArn'),
        outputPath: 'policyArn',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.policyArn', props);
    return resource.getResponseField('policyArn') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicyVersion.policyDocument'),
        outputPath: 'policyDocument',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.policyDocument', props);
    return resource.getResponseField('policyDocument') as unknown as string;
  }

  public get policyVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicyVersion.policyVersionId'),
        outputPath: 'policyVersionId',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.policyVersionId', props);
    return resource.getResponseField('policyVersionId') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreatePolicyVersion.isDefaultVersion'),
        outputPath: 'isDefaultVersion',
        parameters: {
          policyName: this.input.policyName,
          policyDocument: this.input.policyDocument,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePolicyVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotCreateProvisioningClaim extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateProvisioningClaimRequest) {
    super(scope, id);
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningClaim',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningClaim.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningClaim.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningClaim',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningClaim.certificatePem'),
        outputPath: 'certificatePem',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningClaim.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

  public get keyPair(): IotCreateProvisioningClaimKeyPair {
    return new IotCreateProvisioningClaimKeyPair(this, 'KeyPair', this.__resources, this.input);
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningClaim',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningClaim.expiration'),
        outputPath: 'expiration',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningClaim.expiration', props);
    return resource.getResponseField('expiration') as unknown as string;
  }

}

export class IotCreateProvisioningClaimKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateProvisioningClaimRequest) {
    super(scope, id);
  }

  public get publicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningClaim',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningClaim.keyPair.PublicKey'),
        outputPath: 'keyPair.PublicKey',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningClaim.keyPair.PublicKey', props);
    return resource.getResponseField('keyPair.PublicKey') as unknown as string;
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningClaim',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningClaim.keyPair.PrivateKey'),
        outputPath: 'keyPair.PrivateKey',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningClaim.keyPair.PrivateKey', props);
    return resource.getResponseField('keyPair.PrivateKey') as unknown as string;
  }

}

export class IotCreateProvisioningTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateProvisioningTemplateRequest) {
    super(scope, id);
  }

  public get templateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplate.templateArn'),
        outputPath: 'templateArn',
        parameters: {
          templateName: this.input.templateName,
          description: this.input.description,
          templateBody: this.input.templateBody,
          enabled: this.input.enabled,
          provisioningRoleArn: this.input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.input.preProvisioningHook?.payloadVersion,
            targetArn: this.input.preProvisioningHook?.targetArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplate.templateArn', props);
    return resource.getResponseField('templateArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplate.templateName'),
        outputPath: 'templateName',
        parameters: {
          templateName: this.input.templateName,
          description: this.input.description,
          templateBody: this.input.templateBody,
          enabled: this.input.enabled,
          provisioningRoleArn: this.input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.input.preProvisioningHook?.payloadVersion,
            targetArn: this.input.preProvisioningHook?.targetArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplate.templateName', props);
    return resource.getResponseField('templateName') as unknown as string;
  }

  public get defaultVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplate.defaultVersionId'),
        outputPath: 'defaultVersionId',
        parameters: {
          templateName: this.input.templateName,
          description: this.input.description,
          templateBody: this.input.templateBody,
          enabled: this.input.enabled,
          provisioningRoleArn: this.input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.input.preProvisioningHook?.payloadVersion,
            targetArn: this.input.preProvisioningHook?.targetArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplate.defaultVersionId', props);
    return resource.getResponseField('defaultVersionId') as unknown as number;
  }

}

export class IotCreateProvisioningTemplateVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateProvisioningTemplateVersionRequest) {
    super(scope, id);
  }

  public get templateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplateVersion.templateArn'),
        outputPath: 'templateArn',
        parameters: {
          templateName: this.input.templateName,
          templateBody: this.input.templateBody,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplateVersion.templateArn', props);
    return resource.getResponseField('templateArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplateVersion.templateName'),
        outputPath: 'templateName',
        parameters: {
          templateName: this.input.templateName,
          templateBody: this.input.templateBody,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplateVersion.templateName', props);
    return resource.getResponseField('templateName') as unknown as string;
  }

  public get versionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplateVersion.versionId'),
        outputPath: 'versionId',
        parameters: {
          templateName: this.input.templateName,
          templateBody: this.input.templateBody,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplateVersion.versionId', props);
    return resource.getResponseField('versionId') as unknown as number;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateProvisioningTemplateVersion.isDefaultVersion'),
        outputPath: 'isDefaultVersion',
        parameters: {
          templateName: this.input.templateName,
          templateBody: this.input.templateBody,
          setAsDefault: this.input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningTemplateVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotCreateRoleAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateRoleAliasRequest) {
    super(scope, id);
  }

  public get roleAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateRoleAlias.roleAlias'),
        outputPath: 'roleAlias',
        parameters: {
          roleAlias: this.input.roleAlias,
          roleArn: this.input.roleArn,
          credentialDurationSeconds: this.input.credentialDurationSeconds,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoleAlias.roleAlias', props);
    return resource.getResponseField('roleAlias') as unknown as string;
  }

  public get roleAliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateRoleAlias.roleAliasArn'),
        outputPath: 'roleAliasArn',
        parameters: {
          roleAlias: this.input.roleAlias,
          roleArn: this.input.roleArn,
          credentialDurationSeconds: this.input.credentialDurationSeconds,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRoleAlias.roleAliasArn', props);
    return resource.getResponseField('roleAliasArn') as unknown as string;
  }

}

export class IotCreateScheduledAudit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateScheduledAuditRequest) {
    super(scope, id);
  }

  public get scheduledAuditArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateScheduledAudit.scheduledAuditArn'),
        outputPath: 'scheduledAuditArn',
        parameters: {
          frequency: this.input.frequency,
          dayOfMonth: this.input.dayOfMonth,
          dayOfWeek: this.input.dayOfWeek,
          targetCheckNames: this.input.targetCheckNames,
          scheduledAuditName: this.input.scheduledAuditName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotCreateSecurityProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateSecurityProfileRequest) {
    super(scope, id);
  }

  public get securityProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateSecurityProfile.securityProfileName'),
        outputPath: 'securityProfileName',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecurityProfile.securityProfileName', props);
    return resource.getResponseField('securityProfileName') as unknown as string;
  }

  public get securityProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateSecurityProfile.securityProfileArn'),
        outputPath: 'securityProfileArn',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecurityProfile.securityProfileArn', props);
    return resource.getResponseField('securityProfileArn') as unknown as string;
  }

}

export class IotCreateStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateStreamRequest) {
    super(scope, id);
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateStream.streamId'),
        outputPath: 'streamId',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStream.streamId', props);
    return resource.getResponseField('streamId') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateStream.streamArn'),
        outputPath: 'streamArn',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStream.streamArn', props);
    return resource.getResponseField('streamArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateStream.description'),
        outputPath: 'description',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStream.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get streamVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateStream.streamVersion'),
        outputPath: 'streamVersion',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStream.streamVersion', props);
    return resource.getResponseField('streamVersion') as unknown as number;
  }

}

export class IotCreateThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateThingRequest) {
    super(scope, id);
  }

  public get thingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThing.thingName'),
        outputPath: 'thingName',
        parameters: {
          thingName: this.input.thingName,
          thingTypeName: this.input.thingTypeName,
          attributePayload: {
            attributes: this.input.attributePayload?.attributes,
            merge: this.input.attributePayload?.merge,
          },
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThing.thingName', props);
    return resource.getResponseField('thingName') as unknown as string;
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThing.thingArn'),
        outputPath: 'thingArn',
        parameters: {
          thingName: this.input.thingName,
          thingTypeName: this.input.thingTypeName,
          attributePayload: {
            attributes: this.input.attributePayload?.attributes,
            merge: this.input.attributePayload?.merge,
          },
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThing.thingArn', props);
    return resource.getResponseField('thingArn') as unknown as string;
  }

  public get thingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThing.thingId'),
        outputPath: 'thingId',
        parameters: {
          thingName: this.input.thingName,
          thingTypeName: this.input.thingTypeName,
          attributePayload: {
            attributes: this.input.attributePayload?.attributes,
            merge: this.input.attributePayload?.merge,
          },
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThing.thingId', props);
    return resource.getResponseField('thingId') as unknown as string;
  }

}

export class IotCreateThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateThingGroupRequest) {
    super(scope, id);
  }

  public get thingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingGroup.thingGroupName'),
        outputPath: 'thingGroupName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          parentGroupName: this.input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingGroup.thingGroupName', props);
    return resource.getResponseField('thingGroupName') as unknown as string;
  }

  public get thingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingGroup.thingGroupArn'),
        outputPath: 'thingGroupArn',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          parentGroupName: this.input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingGroup.thingGroupArn', props);
    return resource.getResponseField('thingGroupArn') as unknown as string;
  }

  public get thingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingGroup.thingGroupId'),
        outputPath: 'thingGroupId',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          parentGroupName: this.input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingGroup.thingGroupId', props);
    return resource.getResponseField('thingGroupId') as unknown as string;
  }

}

export class IotCreateThingType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateThingTypeRequest) {
    super(scope, id);
  }

  public get thingTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingType.thingTypeName'),
        outputPath: 'thingTypeName',
        parameters: {
          thingTypeName: this.input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingType.thingTypeName', props);
    return resource.getResponseField('thingTypeName') as unknown as string;
  }

  public get thingTypeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingType.thingTypeArn'),
        outputPath: 'thingTypeArn',
        parameters: {
          thingTypeName: this.input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingType.thingTypeArn', props);
    return resource.getResponseField('thingTypeArn') as unknown as string;
  }

  public get thingTypeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateThingType.thingTypeId'),
        outputPath: 'thingTypeId',
        parameters: {
          thingTypeName: this.input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThingType.thingTypeId', props);
    return resource.getResponseField('thingTypeId') as unknown as string;
  }

}

export class IotCreateTopicRuleDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get topicRuleDestination(): IotCreateTopicRuleDestinationTopicRuleDestination {
    return new IotCreateTopicRuleDestinationTopicRuleDestination(this, 'TopicRuleDestination', this.__resources, this.input);
  }

}

export class IotCreateTopicRuleDestinationTopicRuleDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateTopicRuleDestination.topicRuleDestination.arn'),
        outputPath: 'topicRuleDestination.arn',
        parameters: {
          destinationConfiguration: {
            httpUrlConfiguration: {
              confirmationUrl: this.input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTopicRuleDestination.topicRuleDestination.arn', props);
    return resource.getResponseField('topicRuleDestination.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateTopicRuleDestination.topicRuleDestination.status'),
        outputPath: 'topicRuleDestination.status',
        parameters: {
          destinationConfiguration: {
            httpUrlConfiguration: {
              confirmationUrl: this.input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTopicRuleDestination.topicRuleDestination.status', props);
    return resource.getResponseField('topicRuleDestination.status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateTopicRuleDestination.topicRuleDestination.statusReason'),
        outputPath: 'topicRuleDestination.statusReason',
        parameters: {
          destinationConfiguration: {
            httpUrlConfiguration: {
              confirmationUrl: this.input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTopicRuleDestination.topicRuleDestination.statusReason', props);
    return resource.getResponseField('topicRuleDestination.statusReason') as unknown as string;
  }

  public get httpUrlProperties(): IotCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {
    return new IotCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(this, 'HttpUrlProperties', this.__resources, this.input);
  }

}

export class IotCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotCreateTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get confirmationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.CreateTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl'),
        outputPath: 'topicRuleDestination.httpUrlProperties.confirmationUrl',
        parameters: {
          destinationConfiguration: {
            httpUrlConfiguration: {
              confirmationUrl: this.input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl', props);
    return resource.getResponseField('topicRuleDestination.httpUrlProperties.confirmationUrl') as unknown as string;
  }

}

export class IotDescribeAccountAuditConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAuditConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAccountAuditConfiguration.roleArn'),
        outputPath: 'roleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAuditConfiguration.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get auditNotificationTargetConfigurations(): Record<string, shapes.IotAuditNotificationTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAuditConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAccountAuditConfiguration.auditNotificationTargetConfigurations'),
        outputPath: 'auditNotificationTargetConfigurations',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAuditConfiguration.auditNotificationTargetConfigurations', props);
    return resource.getResponseField('auditNotificationTargetConfigurations') as unknown as Record<string, shapes.IotAuditNotificationTarget>;
  }

  public get auditCheckConfigurations(): Record<string, shapes.IotAuditCheckConfiguration> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountAuditConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAccountAuditConfiguration.auditCheckConfigurations'),
        outputPath: 'auditCheckConfigurations',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountAuditConfiguration.auditCheckConfigurations', props);
    return resource.getResponseField('auditCheckConfigurations') as unknown as Record<string, shapes.IotAuditCheckConfiguration>;
  }

}

export class IotDescribeAuditFinding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditFindingRequest) {
    super(scope, id);
  }

  public get finding(): IotDescribeAuditFindingFinding {
    return new IotDescribeAuditFindingFinding(this, 'Finding', this.__resources, this.input);
  }

}

export class IotDescribeAuditFindingFinding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditFindingRequest) {
    super(scope, id);
  }

  public get findingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.findingId'),
        outputPath: 'finding.findingId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.findingId', props);
    return resource.getResponseField('finding.findingId') as unknown as string;
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.taskId'),
        outputPath: 'finding.taskId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.taskId', props);
    return resource.getResponseField('finding.taskId') as unknown as string;
  }

  public get checkName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.checkName'),
        outputPath: 'finding.checkName',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.checkName', props);
    return resource.getResponseField('finding.checkName') as unknown as string;
  }

  public get taskStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.taskStartTime'),
        outputPath: 'finding.taskStartTime',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.taskStartTime', props);
    return resource.getResponseField('finding.taskStartTime') as unknown as string;
  }

  public get findingTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.findingTime'),
        outputPath: 'finding.findingTime',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.findingTime', props);
    return resource.getResponseField('finding.findingTime') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.severity'),
        outputPath: 'finding.severity',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.severity', props);
    return resource.getResponseField('finding.severity') as unknown as string;
  }

  public get nonCompliantResource(): IotDescribeAuditFindingFindingNonCompliantResource {
    return new IotDescribeAuditFindingFindingNonCompliantResource(this, 'NonCompliantResource', this.__resources, this.input);
  }

  public get relatedResources(): shapes.IotRelatedResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.relatedResources'),
        outputPath: 'finding.relatedResources',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.relatedResources', props);
    return resource.getResponseField('finding.relatedResources') as unknown as shapes.IotRelatedResource[];
  }

  public get reasonForNonCompliance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.reasonForNonCompliance'),
        outputPath: 'finding.reasonForNonCompliance',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.reasonForNonCompliance', props);
    return resource.getResponseField('finding.reasonForNonCompliance') as unknown as string;
  }

  public get reasonForNonComplianceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.reasonForNonComplianceCode'),
        outputPath: 'finding.reasonForNonComplianceCode',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.reasonForNonComplianceCode', props);
    return resource.getResponseField('finding.reasonForNonComplianceCode') as unknown as string;
  }

  public get isSuppressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.isSuppressed'),
        outputPath: 'finding.isSuppressed',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.isSuppressed', props);
    return resource.getResponseField('finding.isSuppressed') as unknown as boolean;
  }

}

export class IotDescribeAuditFindingFindingNonCompliantResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditFindingRequest) {
    super(scope, id);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceType'),
        outputPath: 'finding.nonCompliantResource.resourceType',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceType', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceType') as unknown as string;
  }

  public get resourceIdentifier(): IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier {
    return new IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier(this, 'ResourceIdentifier', this.__resources, this.input);
  }

  public get additionalInfo(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.additionalInfo'),
        outputPath: 'finding.nonCompliantResource.additionalInfo',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.additionalInfo', props);
    return resource.getResponseField('finding.nonCompliantResource.additionalInfo') as unknown as Record<string, string>;
  }

}

export class IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditFindingRequest) {
    super(scope, id);
  }

  public get deviceCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.deviceCertificateId'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.deviceCertificateId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.deviceCertificateId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.deviceCertificateId') as unknown as string;
  }

  public get caCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.caCertificateId'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.caCertificateId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.caCertificateId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.caCertificateId') as unknown as string;
  }

  public get cognitoIdentityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.cognitoIdentityPoolId'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.cognitoIdentityPoolId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.cognitoIdentityPoolId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.cognitoIdentityPoolId') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.clientId'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.clientId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.clientId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.clientId') as unknown as string;
  }

  public get policyVersionIdentifier(): IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier {
    return new IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier(this, 'PolicyVersionIdentifier', this.__resources, this.input);
  }

  public get account(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.account'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.account',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.account', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.account') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.iamRoleArn'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.iamRoleArn',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.iamRoleArn', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.iamRoleArn') as unknown as string;
  }

  public get roleAliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.roleAliasArn'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.roleAliasArn',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.roleAliasArn', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.roleAliasArn') as unknown as string;
  }

}

export class IotDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditFindingRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyName'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyName',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyName', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyName') as unknown as string;
  }

  public get policyVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditFinding',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId'),
        outputPath: 'finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId',
        parameters: {
          findingId: this.input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId') as unknown as string;
  }

}

export class IotDescribeAuditMitigationActionsTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditMitigationActionsTaskRequest) {
    super(scope, id);
  }

  public get taskStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.taskStatus'),
        outputPath: 'taskStatus',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.taskStatus', props);
    return resource.getResponseField('taskStatus') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.startTime'),
        outputPath: 'startTime',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.endTime'),
        outputPath: 'endTime',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.endTime', props);
    return resource.getResponseField('endTime') as unknown as string;
  }

  public get taskStatistics(): Record<string, shapes.IotTaskStatisticsForAuditCheck> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.taskStatistics'),
        outputPath: 'taskStatistics',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.taskStatistics', props);
    return resource.getResponseField('taskStatistics') as unknown as Record<string, shapes.IotTaskStatisticsForAuditCheck>;
  }

  public get target(): IotDescribeAuditMitigationActionsTaskTarget {
    return new IotDescribeAuditMitigationActionsTaskTarget(this, 'Target', this.__resources, this.input);
  }

  public get auditCheckToActionsMapping(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.auditCheckToActionsMapping'),
        outputPath: 'auditCheckToActionsMapping',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.auditCheckToActionsMapping', props);
    return resource.getResponseField('auditCheckToActionsMapping') as unknown as Record<string, string[]>;
  }

  public get actionsDefinition(): shapes.IotMitigationAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.actionsDefinition'),
        outputPath: 'actionsDefinition',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.actionsDefinition', props);
    return resource.getResponseField('actionsDefinition') as unknown as shapes.IotMitigationAction[];
  }

}

export class IotDescribeAuditMitigationActionsTaskTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditMitigationActionsTaskRequest) {
    super(scope, id);
  }

  public get auditTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.target.auditTaskId'),
        outputPath: 'target.auditTaskId',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.target.auditTaskId', props);
    return resource.getResponseField('target.auditTaskId') as unknown as string;
  }

  public get findingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.target.findingIds'),
        outputPath: 'target.findingIds',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.target.findingIds', props);
    return resource.getResponseField('target.findingIds') as unknown as string[];
  }

  public get auditCheckToReasonCodeFilter(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditMitigationActionsTask.target.auditCheckToReasonCodeFilter'),
        outputPath: 'target.auditCheckToReasonCodeFilter',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditMitigationActionsTask.target.auditCheckToReasonCodeFilter', props);
    return resource.getResponseField('target.auditCheckToReasonCodeFilter') as unknown as Record<string, string[]>;
  }

}

export class IotDescribeAuditSuppression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditSuppressionRequest) {
    super(scope, id);
  }

  public get checkName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.checkName'),
        outputPath: 'checkName',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.checkName', props);
    return resource.getResponseField('checkName') as unknown as string;
  }

  public get resourceIdentifier(): IotDescribeAuditSuppressionResourceIdentifier {
    return new IotDescribeAuditSuppressionResourceIdentifier(this, 'ResourceIdentifier', this.__resources, this.input);
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.expirationDate'),
        outputPath: 'expirationDate',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.expirationDate', props);
    return resource.getResponseField('expirationDate') as unknown as string;
  }

  public get suppressIndefinitely(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.suppressIndefinitely'),
        outputPath: 'suppressIndefinitely',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.suppressIndefinitely', props);
    return resource.getResponseField('suppressIndefinitely') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.description'),
        outputPath: 'description',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotDescribeAuditSuppressionResourceIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditSuppressionRequest) {
    super(scope, id);
  }

  public get deviceCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.deviceCertificateId'),
        outputPath: 'resourceIdentifier.deviceCertificateId',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.deviceCertificateId', props);
    return resource.getResponseField('resourceIdentifier.deviceCertificateId') as unknown as string;
  }

  public get caCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.caCertificateId'),
        outputPath: 'resourceIdentifier.caCertificateId',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.caCertificateId', props);
    return resource.getResponseField('resourceIdentifier.caCertificateId') as unknown as string;
  }

  public get cognitoIdentityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.cognitoIdentityPoolId'),
        outputPath: 'resourceIdentifier.cognitoIdentityPoolId',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.cognitoIdentityPoolId', props);
    return resource.getResponseField('resourceIdentifier.cognitoIdentityPoolId') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.clientId'),
        outputPath: 'resourceIdentifier.clientId',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.clientId', props);
    return resource.getResponseField('resourceIdentifier.clientId') as unknown as string;
  }

  public get policyVersionIdentifier(): IotDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier {
    return new IotDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier(this, 'PolicyVersionIdentifier', this.__resources, this.input);
  }

  public get account(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.account'),
        outputPath: 'resourceIdentifier.account',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.account', props);
    return resource.getResponseField('resourceIdentifier.account') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.iamRoleArn'),
        outputPath: 'resourceIdentifier.iamRoleArn',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.iamRoleArn', props);
    return resource.getResponseField('resourceIdentifier.iamRoleArn') as unknown as string;
  }

  public get roleAliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.roleAliasArn'),
        outputPath: 'resourceIdentifier.roleAliasArn',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.roleAliasArn', props);
    return resource.getResponseField('resourceIdentifier.roleAliasArn') as unknown as string;
  }

}

export class IotDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditSuppressionRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyName'),
        outputPath: 'resourceIdentifier.policyVersionIdentifier.policyName',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyName', props);
    return resource.getResponseField('resourceIdentifier.policyVersionIdentifier.policyName') as unknown as string;
  }

  public get policyVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditSuppression',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyVersionId'),
        outputPath: 'resourceIdentifier.policyVersionIdentifier.policyVersionId',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier.account,
            iamRoleArn: this.input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyVersionId', props);
    return resource.getResponseField('resourceIdentifier.policyVersionIdentifier.policyVersionId') as unknown as string;
  }

}

export class IotDescribeAuditTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditTaskRequest) {
    super(scope, id);
  }

  public get taskStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatus'),
        outputPath: 'taskStatus',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatus', props);
    return resource.getResponseField('taskStatus') as unknown as string;
  }

  public get taskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskType'),
        outputPath: 'taskType',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskType', props);
    return resource.getResponseField('taskType') as unknown as string;
  }

  public get taskStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStartTime'),
        outputPath: 'taskStartTime',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStartTime', props);
    return resource.getResponseField('taskStartTime') as unknown as string;
  }

  public get taskStatistics(): IotDescribeAuditTaskTaskStatistics {
    return new IotDescribeAuditTaskTaskStatistics(this, 'TaskStatistics', this.__resources, this.input);
  }

  public get scheduledAuditName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.scheduledAuditName'),
        outputPath: 'scheduledAuditName',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.scheduledAuditName', props);
    return resource.getResponseField('scheduledAuditName') as unknown as string;
  }

  public get auditDetails(): Record<string, shapes.IotAuditCheckDetails> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.auditDetails'),
        outputPath: 'auditDetails',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.auditDetails', props);
    return resource.getResponseField('auditDetails') as unknown as Record<string, shapes.IotAuditCheckDetails>;
  }

}

export class IotDescribeAuditTaskTaskStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuditTaskRequest) {
    super(scope, id);
  }

  public get totalChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.totalChecks'),
        outputPath: 'taskStatistics.totalChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.totalChecks', props);
    return resource.getResponseField('taskStatistics.totalChecks') as unknown as number;
  }

  public get inProgressChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.inProgressChecks'),
        outputPath: 'taskStatistics.inProgressChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.inProgressChecks', props);
    return resource.getResponseField('taskStatistics.inProgressChecks') as unknown as number;
  }

  public get waitingForDataCollectionChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.waitingForDataCollectionChecks'),
        outputPath: 'taskStatistics.waitingForDataCollectionChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.waitingForDataCollectionChecks', props);
    return resource.getResponseField('taskStatistics.waitingForDataCollectionChecks') as unknown as number;
  }

  public get compliantChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.compliantChecks'),
        outputPath: 'taskStatistics.compliantChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.compliantChecks', props);
    return resource.getResponseField('taskStatistics.compliantChecks') as unknown as number;
  }

  public get nonCompliantChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.nonCompliantChecks'),
        outputPath: 'taskStatistics.nonCompliantChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.nonCompliantChecks', props);
    return resource.getResponseField('taskStatistics.nonCompliantChecks') as unknown as number;
  }

  public get failedChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.failedChecks'),
        outputPath: 'taskStatistics.failedChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.failedChecks', props);
    return resource.getResponseField('taskStatistics.failedChecks') as unknown as number;
  }

  public get canceledChecks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuditTask.taskStatistics.canceledChecks'),
        outputPath: 'taskStatistics.canceledChecks',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditTask.taskStatistics.canceledChecks', props);
    return resource.getResponseField('taskStatistics.canceledChecks') as unknown as number;
  }

}

export class IotDescribeAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuthorizerRequest) {
    super(scope, id);
  }

  public get authorizerDescription(): IotDescribeAuthorizerAuthorizerDescription {
    return new IotDescribeAuthorizerAuthorizerDescription(this, 'AuthorizerDescription', this.__resources, this.input);
  }

}

export class IotDescribeAuthorizerAuthorizerDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeAuthorizerRequest) {
    super(scope, id);
  }

  public get authorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.authorizerName'),
        outputPath: 'authorizerDescription.authorizerName',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.authorizerName', props);
    return resource.getResponseField('authorizerDescription.authorizerName') as unknown as string;
  }

  public get authorizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.authorizerArn'),
        outputPath: 'authorizerDescription.authorizerArn',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.authorizerArn', props);
    return resource.getResponseField('authorizerDescription.authorizerArn') as unknown as string;
  }

  public get authorizerFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.authorizerFunctionArn'),
        outputPath: 'authorizerDescription.authorizerFunctionArn',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.authorizerFunctionArn', props);
    return resource.getResponseField('authorizerDescription.authorizerFunctionArn') as unknown as string;
  }

  public get tokenKeyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.tokenKeyName'),
        outputPath: 'authorizerDescription.tokenKeyName',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.tokenKeyName', props);
    return resource.getResponseField('authorizerDescription.tokenKeyName') as unknown as string;
  }

  public get tokenSigningPublicKeys(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.tokenSigningPublicKeys'),
        outputPath: 'authorizerDescription.tokenSigningPublicKeys',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.tokenSigningPublicKeys', props);
    return resource.getResponseField('authorizerDescription.tokenSigningPublicKeys') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.status'),
        outputPath: 'authorizerDescription.status',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.status', props);
    return resource.getResponseField('authorizerDescription.status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.creationDate'),
        outputPath: 'authorizerDescription.creationDate',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.creationDate', props);
    return resource.getResponseField('authorizerDescription.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.lastModifiedDate'),
        outputPath: 'authorizerDescription.lastModifiedDate',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.lastModifiedDate', props);
    return resource.getResponseField('authorizerDescription.lastModifiedDate') as unknown as string;
  }

  public get signingDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeAuthorizer.authorizerDescription.signingDisabled'),
        outputPath: 'authorizerDescription.signingDisabled',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuthorizer.authorizerDescription.signingDisabled', props);
    return resource.getResponseField('authorizerDescription.signingDisabled') as unknown as boolean;
  }

}

export class IotDescribeBillingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeBillingGroupRequest) {
    super(scope, id);
  }

  public get billingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.billingGroupName'),
        outputPath: 'billingGroupName',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.billingGroupName', props);
    return resource.getResponseField('billingGroupName') as unknown as string;
  }

  public get billingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.billingGroupId'),
        outputPath: 'billingGroupId',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.billingGroupId', props);
    return resource.getResponseField('billingGroupId') as unknown as string;
  }

  public get billingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.billingGroupArn'),
        outputPath: 'billingGroupArn',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.billingGroupArn', props);
    return resource.getResponseField('billingGroupArn') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.version'),
        outputPath: 'version',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get billingGroupProperties(): IotDescribeBillingGroupBillingGroupProperties {
    return new IotDescribeBillingGroupBillingGroupProperties(this, 'BillingGroupProperties', this.__resources, this.input);
  }

  public get billingGroupMetadata(): IotDescribeBillingGroupBillingGroupMetadata {
    return new IotDescribeBillingGroupBillingGroupMetadata(this, 'BillingGroupMetadata', this.__resources, this.input);
  }

}

export class IotDescribeBillingGroupBillingGroupProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeBillingGroupRequest) {
    super(scope, id);
  }

  public get billingGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.billingGroupProperties.billingGroupDescription'),
        outputPath: 'billingGroupProperties.billingGroupDescription',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.billingGroupProperties.billingGroupDescription', props);
    return resource.getResponseField('billingGroupProperties.billingGroupDescription') as unknown as string;
  }

}

export class IotDescribeBillingGroupBillingGroupMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeBillingGroupRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeBillingGroup.billingGroupMetadata.creationDate'),
        outputPath: 'billingGroupMetadata.creationDate',
        parameters: {
          billingGroupName: this.input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBillingGroup.billingGroupMetadata.creationDate', props);
    return resource.getResponseField('billingGroupMetadata.creationDate') as unknown as string;
  }

}

export class IotDescribeCaCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCaCertificateRequest) {
    super(scope, id);
  }

  public get certificateDescription(): IotDescribeCaCertificateCertificateDescription {
    return new IotDescribeCaCertificateCertificateDescription(this, 'CertificateDescription', this.__resources, this.input);
  }

  public get registrationConfig(): IotDescribeCaCertificateRegistrationConfig {
    return new IotDescribeCaCertificateRegistrationConfig(this, 'RegistrationConfig', this.__resources, this.input);
  }

}

export class IotDescribeCaCertificateCertificateDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCaCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.certificateArn'),
        outputPath: 'certificateDescription.certificateArn',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.certificateArn', props);
    return resource.getResponseField('certificateDescription.certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.certificateId'),
        outputPath: 'certificateDescription.certificateId',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.certificateId', props);
    return resource.getResponseField('certificateDescription.certificateId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.status'),
        outputPath: 'certificateDescription.status',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.status', props);
    return resource.getResponseField('certificateDescription.status') as unknown as string;
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.certificatePem'),
        outputPath: 'certificateDescription.certificatePem',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.certificatePem', props);
    return resource.getResponseField('certificateDescription.certificatePem') as unknown as string;
  }

  public get ownedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.ownedBy'),
        outputPath: 'certificateDescription.ownedBy',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.ownedBy', props);
    return resource.getResponseField('certificateDescription.ownedBy') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.creationDate'),
        outputPath: 'certificateDescription.creationDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.creationDate', props);
    return resource.getResponseField('certificateDescription.creationDate') as unknown as string;
  }

  public get autoRegistrationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.autoRegistrationStatus'),
        outputPath: 'certificateDescription.autoRegistrationStatus',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.autoRegistrationStatus', props);
    return resource.getResponseField('certificateDescription.autoRegistrationStatus') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.lastModifiedDate'),
        outputPath: 'certificateDescription.lastModifiedDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.lastModifiedDate', props);
    return resource.getResponseField('certificateDescription.lastModifiedDate') as unknown as string;
  }

  public get customerVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.customerVersion'),
        outputPath: 'certificateDescription.customerVersion',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.customerVersion', props);
    return resource.getResponseField('certificateDescription.customerVersion') as unknown as number;
  }

  public get generationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.generationId'),
        outputPath: 'certificateDescription.generationId',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.generationId', props);
    return resource.getResponseField('certificateDescription.generationId') as unknown as string;
  }

  public get validity(): IotDescribeCaCertificateCertificateDescriptionValidity {
    return new IotDescribeCaCertificateCertificateDescriptionValidity(this, 'Validity', this.__resources, this.input);
  }

}

export class IotDescribeCaCertificateCertificateDescriptionValidity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCaCertificateRequest) {
    super(scope, id);
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.validity.notBefore'),
        outputPath: 'certificateDescription.validity.notBefore',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.validity.notBefore', props);
    return resource.getResponseField('certificateDescription.validity.notBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.certificateDescription.validity.notAfter'),
        outputPath: 'certificateDescription.validity.notAfter',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.certificateDescription.validity.notAfter', props);
    return resource.getResponseField('certificateDescription.validity.notAfter') as unknown as string;
  }

}

export class IotDescribeCaCertificateRegistrationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCaCertificateRequest) {
    super(scope, id);
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.registrationConfig.templateBody'),
        outputPath: 'registrationConfig.templateBody',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.registrationConfig.templateBody', props);
    return resource.getResponseField('registrationConfig.templateBody') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCACertificate.registrationConfig.roleArn'),
        outputPath: 'registrationConfig.roleArn',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCACertificate.registrationConfig.roleArn', props);
    return resource.getResponseField('registrationConfig.roleArn') as unknown as string;
  }

}

export class IotDescribeCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCertificateRequest) {
    super(scope, id);
  }

  public get certificateDescription(): IotDescribeCertificateCertificateDescription {
    return new IotDescribeCertificateCertificateDescription(this, 'CertificateDescription', this.__resources, this.input);
  }

}

export class IotDescribeCertificateCertificateDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.certificateArn'),
        outputPath: 'certificateDescription.certificateArn',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.certificateArn', props);
    return resource.getResponseField('certificateDescription.certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.certificateId'),
        outputPath: 'certificateDescription.certificateId',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.certificateId', props);
    return resource.getResponseField('certificateDescription.certificateId') as unknown as string;
  }

  public get caCertificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.caCertificateId'),
        outputPath: 'certificateDescription.caCertificateId',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.caCertificateId', props);
    return resource.getResponseField('certificateDescription.caCertificateId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.status'),
        outputPath: 'certificateDescription.status',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.status', props);
    return resource.getResponseField('certificateDescription.status') as unknown as string;
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.certificatePem'),
        outputPath: 'certificateDescription.certificatePem',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.certificatePem', props);
    return resource.getResponseField('certificateDescription.certificatePem') as unknown as string;
  }

  public get ownedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.ownedBy'),
        outputPath: 'certificateDescription.ownedBy',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.ownedBy', props);
    return resource.getResponseField('certificateDescription.ownedBy') as unknown as string;
  }

  public get previousOwnedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.previousOwnedBy'),
        outputPath: 'certificateDescription.previousOwnedBy',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.previousOwnedBy', props);
    return resource.getResponseField('certificateDescription.previousOwnedBy') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.creationDate'),
        outputPath: 'certificateDescription.creationDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.creationDate', props);
    return resource.getResponseField('certificateDescription.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.lastModifiedDate'),
        outputPath: 'certificateDescription.lastModifiedDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.lastModifiedDate', props);
    return resource.getResponseField('certificateDescription.lastModifiedDate') as unknown as string;
  }

  public get customerVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.customerVersion'),
        outputPath: 'certificateDescription.customerVersion',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.customerVersion', props);
    return resource.getResponseField('certificateDescription.customerVersion') as unknown as number;
  }

  public get transferData(): IotDescribeCertificateCertificateDescriptionTransferData {
    return new IotDescribeCertificateCertificateDescriptionTransferData(this, 'TransferData', this.__resources, this.input);
  }

  public get generationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.generationId'),
        outputPath: 'certificateDescription.generationId',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.generationId', props);
    return resource.getResponseField('certificateDescription.generationId') as unknown as string;
  }

  public get validity(): IotDescribeCertificateCertificateDescriptionValidity {
    return new IotDescribeCertificateCertificateDescriptionValidity(this, 'Validity', this.__resources, this.input);
  }

  public get certificateMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.certificateMode'),
        outputPath: 'certificateDescription.certificateMode',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.certificateMode', props);
    return resource.getResponseField('certificateDescription.certificateMode') as unknown as string;
  }

}

export class IotDescribeCertificateCertificateDescriptionTransferData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCertificateRequest) {
    super(scope, id);
  }

  public get transferMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.transferData.transferMessage'),
        outputPath: 'certificateDescription.transferData.transferMessage',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.transferData.transferMessage', props);
    return resource.getResponseField('certificateDescription.transferData.transferMessage') as unknown as string;
  }

  public get rejectReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.transferData.rejectReason'),
        outputPath: 'certificateDescription.transferData.rejectReason',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.transferData.rejectReason', props);
    return resource.getResponseField('certificateDescription.transferData.rejectReason') as unknown as string;
  }

  public get transferDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.transferData.transferDate'),
        outputPath: 'certificateDescription.transferData.transferDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.transferData.transferDate', props);
    return resource.getResponseField('certificateDescription.transferData.transferDate') as unknown as string;
  }

  public get acceptDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.transferData.acceptDate'),
        outputPath: 'certificateDescription.transferData.acceptDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.transferData.acceptDate', props);
    return resource.getResponseField('certificateDescription.transferData.acceptDate') as unknown as string;
  }

  public get rejectDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.transferData.rejectDate'),
        outputPath: 'certificateDescription.transferData.rejectDate',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.transferData.rejectDate', props);
    return resource.getResponseField('certificateDescription.transferData.rejectDate') as unknown as string;
  }

}

export class IotDescribeCertificateCertificateDescriptionValidity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeCertificateRequest) {
    super(scope, id);
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.validity.notBefore'),
        outputPath: 'certificateDescription.validity.notBefore',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.validity.notBefore', props);
    return resource.getResponseField('certificateDescription.validity.notBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeCertificate.certificateDescription.validity.notAfter'),
        outputPath: 'certificateDescription.validity.notAfter',
        parameters: {
          certificateId: this.input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.certificateDescription.validity.notAfter', props);
    return resource.getResponseField('certificateDescription.validity.notAfter') as unknown as string;
  }

}

export class IotDescribeDefaultAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get authorizerDescription(): IotDescribeDefaultAuthorizerAuthorizerDescription {
    return new IotDescribeDefaultAuthorizerAuthorizerDescription(this, 'AuthorizerDescription', this.__resources);
  }

}

export class IotDescribeDefaultAuthorizerAuthorizerDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get authorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.authorizerName'),
        outputPath: 'authorizerDescription.authorizerName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerName', props);
    return resource.getResponseField('authorizerDescription.authorizerName') as unknown as string;
  }

  public get authorizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.authorizerArn'),
        outputPath: 'authorizerDescription.authorizerArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerArn', props);
    return resource.getResponseField('authorizerDescription.authorizerArn') as unknown as string;
  }

  public get authorizerFunctionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.authorizerFunctionArn'),
        outputPath: 'authorizerDescription.authorizerFunctionArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerFunctionArn', props);
    return resource.getResponseField('authorizerDescription.authorizerFunctionArn') as unknown as string;
  }

  public get tokenKeyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.tokenKeyName'),
        outputPath: 'authorizerDescription.tokenKeyName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.tokenKeyName', props);
    return resource.getResponseField('authorizerDescription.tokenKeyName') as unknown as string;
  }

  public get tokenSigningPublicKeys(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.tokenSigningPublicKeys'),
        outputPath: 'authorizerDescription.tokenSigningPublicKeys',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.tokenSigningPublicKeys', props);
    return resource.getResponseField('authorizerDescription.tokenSigningPublicKeys') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.status'),
        outputPath: 'authorizerDescription.status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.status', props);
    return resource.getResponseField('authorizerDescription.status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.creationDate'),
        outputPath: 'authorizerDescription.creationDate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.creationDate', props);
    return resource.getResponseField('authorizerDescription.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.lastModifiedDate'),
        outputPath: 'authorizerDescription.lastModifiedDate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.lastModifiedDate', props);
    return resource.getResponseField('authorizerDescription.lastModifiedDate') as unknown as string;
  }

  public get signingDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDefaultAuthorizer.authorizerDescription.signingDisabled'),
        outputPath: 'authorizerDescription.signingDisabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultAuthorizer.authorizerDescription.signingDisabled', props);
    return resource.getResponseField('authorizerDescription.signingDisabled') as unknown as boolean;
  }

}

export class IotDescribeDimension extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeDimensionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.type'),
        outputPath: 'type',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get stringValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.stringValues'),
        outputPath: 'stringValues',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.stringValues', props);
    return resource.getResponseField('stringValues') as unknown as string[];
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDimension.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDimension.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotDescribeDomainConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeDomainConfigurationRequest) {
    super(scope, id);
  }

  public get domainConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.domainConfigurationName'),
        outputPath: 'domainConfigurationName',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.domainConfigurationName', props);
    return resource.getResponseField('domainConfigurationName') as unknown as string;
  }

  public get domainConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.domainConfigurationArn'),
        outputPath: 'domainConfigurationArn',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.domainConfigurationArn', props);
    return resource.getResponseField('domainConfigurationArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get serverCertificates(): shapes.IotServerCertificateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.serverCertificates'),
        outputPath: 'serverCertificates',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.serverCertificates', props);
    return resource.getResponseField('serverCertificates') as unknown as shapes.IotServerCertificateSummary[];
  }

  public get authorizerConfig(): IotDescribeDomainConfigurationAuthorizerConfig {
    return new IotDescribeDomainConfigurationAuthorizerConfig(this, 'AuthorizerConfig', this.__resources, this.input);
  }

  public get domainConfigurationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.domainConfigurationStatus'),
        outputPath: 'domainConfigurationStatus',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.domainConfigurationStatus', props);
    return resource.getResponseField('domainConfigurationStatus') as unknown as string;
  }

  public get serviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.serviceType'),
        outputPath: 'serviceType',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.serviceType', props);
    return resource.getResponseField('serviceType') as unknown as string;
  }

  public get domainType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.domainType'),
        outputPath: 'domainType',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.domainType', props);
    return resource.getResponseField('domainType') as unknown as string;
  }

  public get lastStatusChangeDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.lastStatusChangeDate'),
        outputPath: 'lastStatusChangeDate',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.lastStatusChangeDate', props);
    return resource.getResponseField('lastStatusChangeDate') as unknown as string;
  }

}

export class IotDescribeDomainConfigurationAuthorizerConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeDomainConfigurationRequest) {
    super(scope, id);
  }

  public get defaultAuthorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.authorizerConfig.defaultAuthorizerName'),
        outputPath: 'authorizerConfig.defaultAuthorizerName',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.authorizerConfig.defaultAuthorizerName', props);
    return resource.getResponseField('authorizerConfig.defaultAuthorizerName') as unknown as string;
  }

  public get allowAuthorizerOverride(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeDomainConfiguration.authorizerConfig.allowAuthorizerOverride'),
        outputPath: 'authorizerConfig.allowAuthorizerOverride',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainConfiguration.authorizerConfig.allowAuthorizerOverride', props);
    return resource.getResponseField('authorizerConfig.allowAuthorizerOverride') as unknown as boolean;
  }

}

export class IotDescribeEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeEndpointRequest) {
    super(scope, id);
  }

  public get endpointAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeEndpoint.endpointAddress'),
        outputPath: 'endpointAddress',
        parameters: {
          endpointType: this.input.endpointType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.endpointAddress', props);
    return resource.getResponseField('endpointAddress') as unknown as string;
  }

}

export class IotDescribeEventConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get eventConfigurations(): Record<string, shapes.IotConfiguration> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeEventConfigurations.eventConfigurations'),
        outputPath: 'eventConfigurations',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventConfigurations.eventConfigurations', props);
    return resource.getResponseField('eventConfigurations') as unknown as Record<string, shapes.IotConfiguration>;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeEventConfigurations.creationDate'),
        outputPath: 'creationDate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventConfigurations.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeEventConfigurations.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventConfigurations.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotDescribeIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeIndexRequest) {
    super(scope, id);
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeIndex.indexName'),
        outputPath: 'indexName',
        parameters: {
          indexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIndex.indexName', props);
    return resource.getResponseField('indexName') as unknown as string;
  }

  public get indexStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeIndex.indexStatus'),
        outputPath: 'indexStatus',
        parameters: {
          indexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIndex.indexStatus', props);
    return resource.getResponseField('indexStatus') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeIndex.schema'),
        outputPath: 'schema',
        parameters: {
          indexName: this.input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIndex.schema', props);
    return resource.getResponseField('schema') as unknown as string;
  }

}

export class IotDescribeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get documentSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.documentSource'),
        outputPath: 'documentSource',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.documentSource', props);
    return resource.getResponseField('documentSource') as unknown as string;
  }

  public get job(): IotDescribeJobJob {
    return new IotDescribeJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class IotDescribeJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobArn'),
        outputPath: 'job.jobArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobArn', props);
    return resource.getResponseField('job.jobArn') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobId'),
        outputPath: 'job.jobId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobId', props);
    return resource.getResponseField('job.jobId') as unknown as string;
  }

  public get targetSelection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.targetSelection'),
        outputPath: 'job.targetSelection',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.targetSelection', props);
    return resource.getResponseField('job.targetSelection') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.status'),
        outputPath: 'job.status',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get forceCanceled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.forceCanceled'),
        outputPath: 'job.forceCanceled',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.forceCanceled', props);
    return resource.getResponseField('job.forceCanceled') as unknown as boolean;
  }

  public get reasonCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.reasonCode'),
        outputPath: 'job.reasonCode',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.reasonCode', props);
    return resource.getResponseField('job.reasonCode') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.comment'),
        outputPath: 'job.comment',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.comment', props);
    return resource.getResponseField('job.comment') as unknown as string;
  }

  public get targets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.targets'),
        outputPath: 'job.targets',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.targets', props);
    return resource.getResponseField('job.targets') as unknown as string[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.description'),
        outputPath: 'job.description',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.description', props);
    return resource.getResponseField('job.description') as unknown as string;
  }

  public get presignedUrlConfig(): IotDescribeJobJobPresignedUrlConfig {
    return new IotDescribeJobJobPresignedUrlConfig(this, 'PresignedUrlConfig', this.__resources, this.input);
  }

  public get jobExecutionsRolloutConfig(): IotDescribeJobJobJobExecutionsRolloutConfig {
    return new IotDescribeJobJobJobExecutionsRolloutConfig(this, 'JobExecutionsRolloutConfig', this.__resources, this.input);
  }

  public get abortConfig(): IotDescribeJobJobAbortConfig {
    return new IotDescribeJobJobAbortConfig(this, 'AbortConfig', this.__resources, this.input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.createdAt'),
        outputPath: 'job.createdAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.createdAt', props);
    return resource.getResponseField('job.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.lastUpdatedAt'),
        outputPath: 'job.lastUpdatedAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.lastUpdatedAt', props);
    return resource.getResponseField('job.lastUpdatedAt') as unknown as string;
  }

  public get completedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.completedAt'),
        outputPath: 'job.completedAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.completedAt', props);
    return resource.getResponseField('job.completedAt') as unknown as string;
  }

  public get jobProcessDetails(): IotDescribeJobJobJobProcessDetails {
    return new IotDescribeJobJobJobProcessDetails(this, 'JobProcessDetails', this.__resources, this.input);
  }

  public get timeoutConfig(): IotDescribeJobJobTimeoutConfig {
    return new IotDescribeJobJobTimeoutConfig(this, 'TimeoutConfig', this.__resources, this.input);
  }

  public get namespaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.namespaceId'),
        outputPath: 'job.namespaceId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.namespaceId', props);
    return resource.getResponseField('job.namespaceId') as unknown as string;
  }

}

export class IotDescribeJobJobPresignedUrlConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.presignedUrlConfig.roleArn'),
        outputPath: 'job.presignedUrlConfig.roleArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.presignedUrlConfig.roleArn', props);
    return resource.getResponseField('job.presignedUrlConfig.roleArn') as unknown as string;
  }

  public get expiresInSec(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.presignedUrlConfig.expiresInSec'),
        outputPath: 'job.presignedUrlConfig.expiresInSec',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.presignedUrlConfig.expiresInSec', props);
    return resource.getResponseField('job.presignedUrlConfig.expiresInSec') as unknown as number;
  }

}

export class IotDescribeJobJobJobExecutionsRolloutConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get maximumPerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobExecutionsRolloutConfig.maximumPerMinute'),
        outputPath: 'job.jobExecutionsRolloutConfig.maximumPerMinute',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobExecutionsRolloutConfig.maximumPerMinute', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.maximumPerMinute') as unknown as number;
  }

  public get exponentialRate(): IotDescribeJobJobJobExecutionsRolloutConfigExponentialRate {
    return new IotDescribeJobJobJobExecutionsRolloutConfigExponentialRate(this, 'ExponentialRate', this.__resources, this.input);
  }

}

export class IotDescribeJobJobJobExecutionsRolloutConfigExponentialRate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get baseRatePerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute'),
        outputPath: 'job.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute') as unknown as number;
  }

  public get incrementFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor'),
        outputPath: 'job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor') as unknown as number;
  }

  public get rateIncreaseCriteria(): IotDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    return new IotDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(this, 'RateIncreaseCriteria', this.__resources, this.input);
  }

}

export class IotDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get numberOfNotifiedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings'),
        outputPath: 'job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings') as unknown as number;
  }

  public get numberOfSucceededThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings'),
        outputPath: 'job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings') as unknown as number;
  }

}

export class IotDescribeJobJobAbortConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get criteriaList(): shapes.IotAbortCriteria[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.abortConfig.criteriaList'),
        outputPath: 'job.abortConfig.criteriaList',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.abortConfig.criteriaList', props);
    return resource.getResponseField('job.abortConfig.criteriaList') as unknown as shapes.IotAbortCriteria[];
  }

}

export class IotDescribeJobJobJobProcessDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get processingTargets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.processingTargets'),
        outputPath: 'job.jobProcessDetails.processingTargets',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.processingTargets', props);
    return resource.getResponseField('job.jobProcessDetails.processingTargets') as unknown as string[];
  }

  public get numberOfCanceledThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfCanceledThings'),
        outputPath: 'job.jobProcessDetails.numberOfCanceledThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfCanceledThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfCanceledThings') as unknown as number;
  }

  public get numberOfSucceededThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfSucceededThings'),
        outputPath: 'job.jobProcessDetails.numberOfSucceededThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfSucceededThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfSucceededThings') as unknown as number;
  }

  public get numberOfFailedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfFailedThings'),
        outputPath: 'job.jobProcessDetails.numberOfFailedThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfFailedThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfFailedThings') as unknown as number;
  }

  public get numberOfRejectedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfRejectedThings'),
        outputPath: 'job.jobProcessDetails.numberOfRejectedThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfRejectedThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfRejectedThings') as unknown as number;
  }

  public get numberOfQueuedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfQueuedThings'),
        outputPath: 'job.jobProcessDetails.numberOfQueuedThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfQueuedThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfQueuedThings') as unknown as number;
  }

  public get numberOfInProgressThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfInProgressThings'),
        outputPath: 'job.jobProcessDetails.numberOfInProgressThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfInProgressThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfInProgressThings') as unknown as number;
  }

  public get numberOfRemovedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfRemovedThings'),
        outputPath: 'job.jobProcessDetails.numberOfRemovedThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfRemovedThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfRemovedThings') as unknown as number;
  }

  public get numberOfTimedOutThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.jobProcessDetails.numberOfTimedOutThings'),
        outputPath: 'job.jobProcessDetails.numberOfTimedOutThings',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.jobProcessDetails.numberOfTimedOutThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfTimedOutThings') as unknown as number;
  }

}

export class IotDescribeJobJobTimeoutConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobRequest) {
    super(scope, id);
  }

  public get inProgressTimeoutInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJob.job.timeoutConfig.inProgressTimeoutInMinutes'),
        outputPath: 'job.timeoutConfig.inProgressTimeoutInMinutes',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.job.timeoutConfig.inProgressTimeoutInMinutes', props);
    return resource.getResponseField('job.timeoutConfig.inProgressTimeoutInMinutes') as unknown as number;
  }

}

export class IotDescribeJobExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobExecutionRequest) {
    super(scope, id);
  }

  public get execution(): IotDescribeJobExecutionExecution {
    return new IotDescribeJobExecutionExecution(this, 'Execution', this.__resources, this.input);
  }

}

export class IotDescribeJobExecutionExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobExecutionRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.jobId'),
        outputPath: 'execution.jobId',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.jobId', props);
    return resource.getResponseField('execution.jobId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.status'),
        outputPath: 'execution.status',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.status', props);
    return resource.getResponseField('execution.status') as unknown as string;
  }

  public get forceCanceled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.forceCanceled'),
        outputPath: 'execution.forceCanceled',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.forceCanceled', props);
    return resource.getResponseField('execution.forceCanceled') as unknown as boolean;
  }

  public get statusDetails(): IotDescribeJobExecutionExecutionStatusDetails {
    return new IotDescribeJobExecutionExecutionStatusDetails(this, 'StatusDetails', this.__resources, this.input);
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.thingArn'),
        outputPath: 'execution.thingArn',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.thingArn', props);
    return resource.getResponseField('execution.thingArn') as unknown as string;
  }

  public get queuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.queuedAt'),
        outputPath: 'execution.queuedAt',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.queuedAt', props);
    return resource.getResponseField('execution.queuedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.startedAt'),
        outputPath: 'execution.startedAt',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.startedAt', props);
    return resource.getResponseField('execution.startedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.lastUpdatedAt'),
        outputPath: 'execution.lastUpdatedAt',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.lastUpdatedAt', props);
    return resource.getResponseField('execution.lastUpdatedAt') as unknown as string;
  }

  public get executionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.executionNumber'),
        outputPath: 'execution.executionNumber',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.executionNumber', props);
    return resource.getResponseField('execution.executionNumber') as unknown as number;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.versionNumber'),
        outputPath: 'execution.versionNumber',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.versionNumber', props);
    return resource.getResponseField('execution.versionNumber') as unknown as number;
  }

  public get approximateSecondsBeforeTimedOut(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.approximateSecondsBeforeTimedOut'),
        outputPath: 'execution.approximateSecondsBeforeTimedOut',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.approximateSecondsBeforeTimedOut', props);
    return resource.getResponseField('execution.approximateSecondsBeforeTimedOut') as unknown as number;
  }

}

export class IotDescribeJobExecutionExecutionStatusDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeJobExecutionRequest) {
    super(scope, id);
  }

  public get detailsMap(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobExecution',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeJobExecution.execution.statusDetails.detailsMap'),
        outputPath: 'execution.statusDetails.detailsMap',
        parameters: {
          jobId: this.input.jobId,
          thingName: this.input.thingName,
          executionNumber: this.input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobExecution.execution.statusDetails.detailsMap', props);
    return resource.getResponseField('execution.statusDetails.detailsMap') as unknown as Record<string, string>;
  }

}

export class IotDescribeMitigationAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get actionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionName'),
        outputPath: 'actionName',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionName', props);
    return resource.getResponseField('actionName') as unknown as string;
  }

  public get actionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionType'),
        outputPath: 'actionType',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionType', props);
    return resource.getResponseField('actionType') as unknown as string;
  }

  public get actionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionArn'),
        outputPath: 'actionArn',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionArn', props);
    return resource.getResponseField('actionArn') as unknown as string;
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionId'),
        outputPath: 'actionId',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionId', props);
    return resource.getResponseField('actionId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.roleArn'),
        outputPath: 'roleArn',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get actionParams(): IotDescribeMitigationActionActionParams {
    return new IotDescribeMitigationActionActionParams(this, 'ActionParams', this.__resources, this.input);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotDescribeMitigationActionActionParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get updateDeviceCertificateParams(): IotDescribeMitigationActionActionParamsUpdateDeviceCertificateParams {
    return new IotDescribeMitigationActionActionParamsUpdateDeviceCertificateParams(this, 'UpdateDeviceCertificateParams', this.__resources, this.input);
  }

  public get updateCaCertificateParams(): IotDescribeMitigationActionActionParamsUpdateCaCertificateParams {
    return new IotDescribeMitigationActionActionParamsUpdateCaCertificateParams(this, 'UpdateCaCertificateParams', this.__resources, this.input);
  }

  public get addThingsToThingGroupParams(): IotDescribeMitigationActionActionParamsAddThingsToThingGroupParams {
    return new IotDescribeMitigationActionActionParamsAddThingsToThingGroupParams(this, 'AddThingsToThingGroupParams', this.__resources, this.input);
  }

  public get replaceDefaultPolicyVersionParams(): IotDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
    return new IotDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams(this, 'ReplaceDefaultPolicyVersionParams', this.__resources, this.input);
  }

  public get enableIoTLoggingParams(): IotDescribeMitigationActionActionParamsEnableIoTLoggingParams {
    return new IotDescribeMitigationActionActionParamsEnableIoTLoggingParams(this, 'EnableIoTLoggingParams', this.__resources, this.input);
  }

  public get publishFindingToSnsParams(): IotDescribeMitigationActionActionParamsPublishFindingToSnsParams {
    return new IotDescribeMitigationActionActionParamsPublishFindingToSnsParams(this, 'PublishFindingToSnsParams', this.__resources, this.input);
  }

}

export class IotDescribeMitigationActionActionParamsUpdateDeviceCertificateParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.updateDeviceCertificateParams.action'),
        outputPath: 'actionParams.updateDeviceCertificateParams.action',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.updateDeviceCertificateParams.action', props);
    return resource.getResponseField('actionParams.updateDeviceCertificateParams.action') as unknown as string;
  }

}

export class IotDescribeMitigationActionActionParamsUpdateCaCertificateParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.updateCACertificateParams.action'),
        outputPath: 'actionParams.updateCACertificateParams.action',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.updateCACertificateParams.action', props);
    return resource.getResponseField('actionParams.updateCACertificateParams.action') as unknown as string;
  }

}

export class IotDescribeMitigationActionActionParamsAddThingsToThingGroupParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get thingGroupNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.addThingsToThingGroupParams.thingGroupNames'),
        outputPath: 'actionParams.addThingsToThingGroupParams.thingGroupNames',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.addThingsToThingGroupParams.thingGroupNames', props);
    return resource.getResponseField('actionParams.addThingsToThingGroupParams.thingGroupNames') as unknown as string[];
  }

  public get overrideDynamicGroups(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.addThingsToThingGroupParams.overrideDynamicGroups'),
        outputPath: 'actionParams.addThingsToThingGroupParams.overrideDynamicGroups',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.addThingsToThingGroupParams.overrideDynamicGroups', props);
    return resource.getResponseField('actionParams.addThingsToThingGroupParams.overrideDynamicGroups') as unknown as boolean;
  }

}

export class IotDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.replaceDefaultPolicyVersionParams.templateName'),
        outputPath: 'actionParams.replaceDefaultPolicyVersionParams.templateName',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.replaceDefaultPolicyVersionParams.templateName', props);
    return resource.getResponseField('actionParams.replaceDefaultPolicyVersionParams.templateName') as unknown as string;
  }

}

export class IotDescribeMitigationActionActionParamsEnableIoTLoggingParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get roleArnForLogging(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.enableIoTLoggingParams.roleArnForLogging'),
        outputPath: 'actionParams.enableIoTLoggingParams.roleArnForLogging',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.enableIoTLoggingParams.roleArnForLogging', props);
    return resource.getResponseField('actionParams.enableIoTLoggingParams.roleArnForLogging') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.enableIoTLoggingParams.logLevel'),
        outputPath: 'actionParams.enableIoTLoggingParams.logLevel',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.enableIoTLoggingParams.logLevel', props);
    return resource.getResponseField('actionParams.enableIoTLoggingParams.logLevel') as unknown as string;
  }

}

export class IotDescribeMitigationActionActionParamsPublishFindingToSnsParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeMitigationActionRequest) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeMitigationAction.actionParams.publishFindingToSnsParams.topicArn'),
        outputPath: 'actionParams.publishFindingToSnsParams.topicArn',
        parameters: {
          actionName: this.input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMitigationAction.actionParams.publishFindingToSnsParams.topicArn', props);
    return resource.getResponseField('actionParams.publishFindingToSnsParams.topicArn') as unknown as string;
  }

}

export class IotDescribeProvisioningTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeProvisioningTemplateRequest) {
    super(scope, id);
  }

  public get templateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.templateArn'),
        outputPath: 'templateArn',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.templateArn', props);
    return resource.getResponseField('templateArn') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.templateName'),
        outputPath: 'templateName',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.templateName', props);
    return resource.getResponseField('templateName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.description'),
        outputPath: 'description',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

  public get defaultVersionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.defaultVersionId'),
        outputPath: 'defaultVersionId',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.defaultVersionId', props);
    return resource.getResponseField('defaultVersionId') as unknown as number;
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.templateBody'),
        outputPath: 'templateBody',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.templateBody', props);
    return resource.getResponseField('templateBody') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.enabled'),
        outputPath: 'enabled',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.enabled', props);
    return resource.getResponseField('enabled') as unknown as boolean;
  }

  public get provisioningRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.provisioningRoleArn'),
        outputPath: 'provisioningRoleArn',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.provisioningRoleArn', props);
    return resource.getResponseField('provisioningRoleArn') as unknown as string;
  }

  public get preProvisioningHook(): IotDescribeProvisioningTemplatePreProvisioningHook {
    return new IotDescribeProvisioningTemplatePreProvisioningHook(this, 'PreProvisioningHook', this.__resources, this.input);
  }

}

export class IotDescribeProvisioningTemplatePreProvisioningHook extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeProvisioningTemplateRequest) {
    super(scope, id);
  }

  public get payloadVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.preProvisioningHook.payloadVersion'),
        outputPath: 'preProvisioningHook.payloadVersion',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.preProvisioningHook.payloadVersion', props);
    return resource.getResponseField('preProvisioningHook.payloadVersion') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplate.preProvisioningHook.targetArn'),
        outputPath: 'preProvisioningHook.targetArn',
        parameters: {
          templateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplate.preProvisioningHook.targetArn', props);
    return resource.getResponseField('preProvisioningHook.targetArn') as unknown as string;
  }

}

export class IotDescribeProvisioningTemplateVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeProvisioningTemplateVersionRequest) {
    super(scope, id);
  }

  public get versionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplateVersion.versionId'),
        outputPath: 'versionId',
        parameters: {
          templateName: this.input.templateName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplateVersion.versionId', props);
    return resource.getResponseField('versionId') as unknown as number;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplateVersion.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          templateName: this.input.templateName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplateVersion.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplateVersion.templateBody'),
        outputPath: 'templateBody',
        parameters: {
          templateName: this.input.templateName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplateVersion.templateBody', props);
    return resource.getResponseField('templateBody') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningTemplateVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeProvisioningTemplateVersion.isDefaultVersion'),
        outputPath: 'isDefaultVersion',
        parameters: {
          templateName: this.input.templateName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningTemplateVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotDescribeRoleAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeRoleAliasRequest) {
    super(scope, id);
  }

  public get roleAliasDescription(): IotDescribeRoleAliasRoleAliasDescription {
    return new IotDescribeRoleAliasRoleAliasDescription(this, 'RoleAliasDescription', this.__resources, this.input);
  }

}

export class IotDescribeRoleAliasRoleAliasDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeRoleAliasRequest) {
    super(scope, id);
  }

  public get roleAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.roleAlias'),
        outputPath: 'roleAliasDescription.roleAlias',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.roleAlias', props);
    return resource.getResponseField('roleAliasDescription.roleAlias') as unknown as string;
  }

  public get roleAliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.roleAliasArn'),
        outputPath: 'roleAliasDescription.roleAliasArn',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.roleAliasArn', props);
    return resource.getResponseField('roleAliasDescription.roleAliasArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.roleArn'),
        outputPath: 'roleAliasDescription.roleArn',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.roleArn', props);
    return resource.getResponseField('roleAliasDescription.roleArn') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.owner'),
        outputPath: 'roleAliasDescription.owner',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.owner', props);
    return resource.getResponseField('roleAliasDescription.owner') as unknown as string;
  }

  public get credentialDurationSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.credentialDurationSeconds'),
        outputPath: 'roleAliasDescription.credentialDurationSeconds',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.credentialDurationSeconds', props);
    return resource.getResponseField('roleAliasDescription.credentialDurationSeconds') as unknown as number;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.creationDate'),
        outputPath: 'roleAliasDescription.creationDate',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.creationDate', props);
    return resource.getResponseField('roleAliasDescription.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeRoleAlias.roleAliasDescription.lastModifiedDate'),
        outputPath: 'roleAliasDescription.lastModifiedDate',
        parameters: {
          roleAlias: this.input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRoleAlias.roleAliasDescription.lastModifiedDate', props);
    return resource.getResponseField('roleAliasDescription.lastModifiedDate') as unknown as string;
  }

}

export class IotDescribeScheduledAudit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeScheduledAuditRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.frequency'),
        outputPath: 'frequency',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.frequency', props);
    return resource.getResponseField('frequency') as unknown as string;
  }

  public get dayOfMonth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.dayOfMonth'),
        outputPath: 'dayOfMonth',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.dayOfMonth', props);
    return resource.getResponseField('dayOfMonth') as unknown as string;
  }

  public get dayOfWeek(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.dayOfWeek'),
        outputPath: 'dayOfWeek',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.dayOfWeek', props);
    return resource.getResponseField('dayOfWeek') as unknown as string;
  }

  public get targetCheckNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.targetCheckNames'),
        outputPath: 'targetCheckNames',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.targetCheckNames', props);
    return resource.getResponseField('targetCheckNames') as unknown as string[];
  }

  public get scheduledAuditName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.scheduledAuditName'),
        outputPath: 'scheduledAuditName',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.scheduledAuditName', props);
    return resource.getResponseField('scheduledAuditName') as unknown as string;
  }

  public get scheduledAuditArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeScheduledAudit.scheduledAuditArn'),
        outputPath: 'scheduledAuditArn',
        parameters: {
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotDescribeSecurityProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeSecurityProfileRequest) {
    super(scope, id);
  }

  public get securityProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.securityProfileName'),
        outputPath: 'securityProfileName',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.securityProfileName', props);
    return resource.getResponseField('securityProfileName') as unknown as string;
  }

  public get securityProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.securityProfileArn'),
        outputPath: 'securityProfileArn',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.securityProfileArn', props);
    return resource.getResponseField('securityProfileArn') as unknown as string;
  }

  public get securityProfileDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.securityProfileDescription'),
        outputPath: 'securityProfileDescription',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.securityProfileDescription', props);
    return resource.getResponseField('securityProfileDescription') as unknown as string;
  }

  public get behaviors(): shapes.IotBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.behaviors'),
        outputPath: 'behaviors',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.behaviors', props);
    return resource.getResponseField('behaviors') as unknown as shapes.IotBehavior[];
  }

  public get alertTargets(): Record<string, shapes.IotAlertTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.alertTargets'),
        outputPath: 'alertTargets',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.alertTargets', props);
    return resource.getResponseField('alertTargets') as unknown as Record<string, shapes.IotAlertTarget>;
  }

  public get additionalMetricsToRetain(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.additionalMetricsToRetain'),
        outputPath: 'additionalMetricsToRetain',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.additionalMetricsToRetain', props);
    return resource.getResponseField('additionalMetricsToRetain') as unknown as string[];
  }

  public get additionalMetricsToRetainV2(): shapes.IotMetricToRetain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.additionalMetricsToRetainV2'),
        outputPath: 'additionalMetricsToRetainV2',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.additionalMetricsToRetainV2', props);
    return resource.getResponseField('additionalMetricsToRetainV2') as unknown as shapes.IotMetricToRetain[];
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.version'),
        outputPath: 'version',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeSecurityProfile.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          securityProfileName: this.input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityProfile.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotDescribeStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeStreamRequest) {
    super(scope, id);
  }

  public get streamInfo(): IotDescribeStreamStreamInfo {
    return new IotDescribeStreamStreamInfo(this, 'StreamInfo', this.__resources, this.input);
  }

}

export class IotDescribeStreamStreamInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeStreamRequest) {
    super(scope, id);
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.streamId'),
        outputPath: 'streamInfo.streamId',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.streamId', props);
    return resource.getResponseField('streamInfo.streamId') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.streamArn'),
        outputPath: 'streamInfo.streamArn',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.streamArn', props);
    return resource.getResponseField('streamInfo.streamArn') as unknown as string;
  }

  public get streamVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.streamVersion'),
        outputPath: 'streamInfo.streamVersion',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.streamVersion', props);
    return resource.getResponseField('streamInfo.streamVersion') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.description'),
        outputPath: 'streamInfo.description',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.description', props);
    return resource.getResponseField('streamInfo.description') as unknown as string;
  }

  public get files(): shapes.IotStreamFile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.files'),
        outputPath: 'streamInfo.files',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.files', props);
    return resource.getResponseField('streamInfo.files') as unknown as shapes.IotStreamFile[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.createdAt'),
        outputPath: 'streamInfo.createdAt',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.createdAt', props);
    return resource.getResponseField('streamInfo.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.lastUpdatedAt'),
        outputPath: 'streamInfo.lastUpdatedAt',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.lastUpdatedAt', props);
    return resource.getResponseField('streamInfo.lastUpdatedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeStream.streamInfo.roleArn'),
        outputPath: 'streamInfo.roleArn',
        parameters: {
          streamId: this.input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStream.streamInfo.roleArn', props);
    return resource.getResponseField('streamInfo.roleArn') as unknown as string;
  }

}

export class IotDescribeThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingRequest) {
    super(scope, id);
  }

  public get defaultClientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.defaultClientId'),
        outputPath: 'defaultClientId',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.defaultClientId', props);
    return resource.getResponseField('defaultClientId') as unknown as string;
  }

  public get thingName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.thingName'),
        outputPath: 'thingName',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.thingName', props);
    return resource.getResponseField('thingName') as unknown as string;
  }

  public get thingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.thingId'),
        outputPath: 'thingId',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.thingId', props);
    return resource.getResponseField('thingId') as unknown as string;
  }

  public get thingArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.thingArn'),
        outputPath: 'thingArn',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.thingArn', props);
    return resource.getResponseField('thingArn') as unknown as string;
  }

  public get thingTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.thingTypeName'),
        outputPath: 'thingTypeName',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.thingTypeName', props);
    return resource.getResponseField('thingTypeName') as unknown as string;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.attributes'),
        outputPath: 'attributes',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.attributes', props);
    return resource.getResponseField('attributes') as unknown as Record<string, string>;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.version'),
        outputPath: 'version',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get billingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThing.billingGroupName'),
        outputPath: 'billingGroupName',
        parameters: {
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThing.billingGroupName', props);
    return resource.getResponseField('billingGroupName') as unknown as string;
  }

}

export class IotDescribeThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingGroupRequest) {
    super(scope, id);
  }

  public get thingGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupName'),
        outputPath: 'thingGroupName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupName', props);
    return resource.getResponseField('thingGroupName') as unknown as string;
  }

  public get thingGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupId'),
        outputPath: 'thingGroupId',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupId', props);
    return resource.getResponseField('thingGroupId') as unknown as string;
  }

  public get thingGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupArn'),
        outputPath: 'thingGroupArn',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupArn', props);
    return resource.getResponseField('thingGroupArn') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.version'),
        outputPath: 'version',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get thingGroupProperties(): IotDescribeThingGroupThingGroupProperties {
    return new IotDescribeThingGroupThingGroupProperties(this, 'ThingGroupProperties', this.__resources, this.input);
  }

  public get thingGroupMetadata(): IotDescribeThingGroupThingGroupMetadata {
    return new IotDescribeThingGroupThingGroupMetadata(this, 'ThingGroupMetadata', this.__resources, this.input);
  }

  public get indexName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.indexName'),
        outputPath: 'indexName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.indexName', props);
    return resource.getResponseField('indexName') as unknown as string;
  }

  public get queryString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.queryString'),
        outputPath: 'queryString',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.queryString', props);
    return resource.getResponseField('queryString') as unknown as string;
  }

  public get queryVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.queryVersion'),
        outputPath: 'queryVersion',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.queryVersion', props);
    return resource.getResponseField('queryVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.status'),
        outputPath: 'status',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class IotDescribeThingGroupThingGroupProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingGroupRequest) {
    super(scope, id);
  }

  public get thingGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupProperties.thingGroupDescription'),
        outputPath: 'thingGroupProperties.thingGroupDescription',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupProperties.thingGroupDescription', props);
    return resource.getResponseField('thingGroupProperties.thingGroupDescription') as unknown as string;
  }

  public get attributePayload(): IotDescribeThingGroupThingGroupPropertiesAttributePayload {
    return new IotDescribeThingGroupThingGroupPropertiesAttributePayload(this, 'AttributePayload', this.__resources, this.input);
  }

}

export class IotDescribeThingGroupThingGroupPropertiesAttributePayload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingGroupRequest) {
    super(scope, id);
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupProperties.attributePayload.attributes'),
        outputPath: 'thingGroupProperties.attributePayload.attributes',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupProperties.attributePayload.attributes', props);
    return resource.getResponseField('thingGroupProperties.attributePayload.attributes') as unknown as Record<string, string>;
  }

  public get merge(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupProperties.attributePayload.merge'),
        outputPath: 'thingGroupProperties.attributePayload.merge',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupProperties.attributePayload.merge', props);
    return resource.getResponseField('thingGroupProperties.attributePayload.merge') as unknown as boolean;
  }

}

export class IotDescribeThingGroupThingGroupMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingGroupRequest) {
    super(scope, id);
  }

  public get parentGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupMetadata.parentGroupName'),
        outputPath: 'thingGroupMetadata.parentGroupName',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupMetadata.parentGroupName', props);
    return resource.getResponseField('thingGroupMetadata.parentGroupName') as unknown as string;
  }

  public get rootToParentThingGroups(): shapes.IotGroupNameAndArn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupMetadata.rootToParentThingGroups'),
        outputPath: 'thingGroupMetadata.rootToParentThingGroups',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupMetadata.rootToParentThingGroups', props);
    return resource.getResponseField('thingGroupMetadata.rootToParentThingGroups') as unknown as shapes.IotGroupNameAndArn[];
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingGroup.thingGroupMetadata.creationDate'),
        outputPath: 'thingGroupMetadata.creationDate',
        parameters: {
          thingGroupName: this.input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingGroup.thingGroupMetadata.creationDate', props);
    return resource.getResponseField('thingGroupMetadata.creationDate') as unknown as string;
  }

}

export class IotDescribeThingRegistrationTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingRegistrationTaskRequest) {
    super(scope, id);
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.taskId'),
        outputPath: 'taskId',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.templateBody'),
        outputPath: 'templateBody',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.templateBody', props);
    return resource.getResponseField('templateBody') as unknown as string;
  }

  public get inputFileBucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.inputFileBucket'),
        outputPath: 'inputFileBucket',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.inputFileBucket', props);
    return resource.getResponseField('inputFileBucket') as unknown as string;
  }

  public get inputFileKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.inputFileKey'),
        outputPath: 'inputFileKey',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.inputFileKey', props);
    return resource.getResponseField('inputFileKey') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.roleArn'),
        outputPath: 'roleArn',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.status'),
        outputPath: 'status',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.message'),
        outputPath: 'message',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.message', props);
    return resource.getResponseField('message') as unknown as string;
  }

  public get successCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.successCount'),
        outputPath: 'successCount',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.successCount', props);
    return resource.getResponseField('successCount') as unknown as number;
  }

  public get failureCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.failureCount'),
        outputPath: 'failureCount',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.failureCount', props);
    return resource.getResponseField('failureCount') as unknown as number;
  }

  public get percentageProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingRegistrationTask.percentageProgress'),
        outputPath: 'percentageProgress',
        parameters: {
          taskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingRegistrationTask.percentageProgress', props);
    return resource.getResponseField('percentageProgress') as unknown as number;
  }

}

export class IotDescribeThingType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingTypeRequest) {
    super(scope, id);
  }

  public get thingTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeName'),
        outputPath: 'thingTypeName',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeName', props);
    return resource.getResponseField('thingTypeName') as unknown as string;
  }

  public get thingTypeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeId'),
        outputPath: 'thingTypeId',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeId', props);
    return resource.getResponseField('thingTypeId') as unknown as string;
  }

  public get thingTypeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeArn'),
        outputPath: 'thingTypeArn',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeArn', props);
    return resource.getResponseField('thingTypeArn') as unknown as string;
  }

  public get thingTypeProperties(): IotDescribeThingTypeThingTypeProperties {
    return new IotDescribeThingTypeThingTypeProperties(this, 'ThingTypeProperties', this.__resources, this.input);
  }

  public get thingTypeMetadata(): IotDescribeThingTypeThingTypeMetadata {
    return new IotDescribeThingTypeThingTypeMetadata(this, 'ThingTypeMetadata', this.__resources, this.input);
  }

}

export class IotDescribeThingTypeThingTypeProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingTypeRequest) {
    super(scope, id);
  }

  public get thingTypeDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeProperties.thingTypeDescription'),
        outputPath: 'thingTypeProperties.thingTypeDescription',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeProperties.thingTypeDescription', props);
    return resource.getResponseField('thingTypeProperties.thingTypeDescription') as unknown as string;
  }

  public get searchableAttributes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeProperties.searchableAttributes'),
        outputPath: 'thingTypeProperties.searchableAttributes',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeProperties.searchableAttributes', props);
    return resource.getResponseField('thingTypeProperties.searchableAttributes') as unknown as string[];
  }

}

export class IotDescribeThingTypeThingTypeMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotDescribeThingTypeRequest) {
    super(scope, id);
  }

  public get deprecated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeMetadata.deprecated'),
        outputPath: 'thingTypeMetadata.deprecated',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeMetadata.deprecated', props);
    return resource.getResponseField('thingTypeMetadata.deprecated') as unknown as boolean;
  }

  public get deprecationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeMetadata.deprecationDate'),
        outputPath: 'thingTypeMetadata.deprecationDate',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeMetadata.deprecationDate', props);
    return resource.getResponseField('thingTypeMetadata.deprecationDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThingType',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.DescribeThingType.thingTypeMetadata.creationDate'),
        outputPath: 'thingTypeMetadata.creationDate',
        parameters: {
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThingType.thingTypeMetadata.creationDate', props);
    return resource.getResponseField('thingTypeMetadata.creationDate') as unknown as string;
  }

}

export class IotFetchCardinality extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetCardinalityRequest) {
    super(scope, id);
  }

  public get cardinality(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCardinality',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetCardinality.cardinality'),
        outputPath: 'cardinality',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCardinality.cardinality', props);
    return resource.getResponseField('cardinality') as unknown as number;
  }

}

export class IotFetchEffectivePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetEffectivePoliciesRequest) {
    super(scope, id);
  }

  public get effectivePolicies(): shapes.IotEffectivePolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEffectivePolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetEffectivePolicies.effectivePolicies'),
        outputPath: 'effectivePolicies',
        parameters: {
          principal: this.input.principal,
          cognitoIdentityPoolId: this.input.cognitoIdentityPoolId,
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEffectivePolicies.effectivePolicies', props);
    return resource.getResponseField('effectivePolicies') as unknown as shapes.IotEffectivePolicy[];
  }

}

export class IotFetchIndexingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get thingIndexingConfiguration(): IotFetchIndexingConfigurationThingIndexingConfiguration {
    return new IotFetchIndexingConfigurationThingIndexingConfiguration(this, 'ThingIndexingConfiguration', this.__resources);
  }

  public get thingGroupIndexingConfiguration(): IotFetchIndexingConfigurationThingGroupIndexingConfiguration {
    return new IotFetchIndexingConfigurationThingGroupIndexingConfiguration(this, 'ThingGroupIndexingConfiguration', this.__resources);
  }

}

export class IotFetchIndexingConfigurationThingIndexingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get thingIndexingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingIndexingConfiguration.thingIndexingMode'),
        outputPath: 'thingIndexingConfiguration.thingIndexingMode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingIndexingConfiguration.thingIndexingMode', props);
    return resource.getResponseField('thingIndexingConfiguration.thingIndexingMode') as unknown as string;
  }

  public get thingConnectivityIndexingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingIndexingConfiguration.thingConnectivityIndexingMode'),
        outputPath: 'thingIndexingConfiguration.thingConnectivityIndexingMode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingIndexingConfiguration.thingConnectivityIndexingMode', props);
    return resource.getResponseField('thingIndexingConfiguration.thingConnectivityIndexingMode') as unknown as string;
  }

  public get managedFields(): shapes.IotField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingIndexingConfiguration.managedFields'),
        outputPath: 'thingIndexingConfiguration.managedFields',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingIndexingConfiguration.managedFields', props);
    return resource.getResponseField('thingIndexingConfiguration.managedFields') as unknown as shapes.IotField[];
  }

  public get customFields(): shapes.IotField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingIndexingConfiguration.customFields'),
        outputPath: 'thingIndexingConfiguration.customFields',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingIndexingConfiguration.customFields', props);
    return resource.getResponseField('thingIndexingConfiguration.customFields') as unknown as shapes.IotField[];
  }

}

export class IotFetchIndexingConfigurationThingGroupIndexingConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get thingGroupIndexingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingGroupIndexingConfiguration.thingGroupIndexingMode'),
        outputPath: 'thingGroupIndexingConfiguration.thingGroupIndexingMode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.thingGroupIndexingMode', props);
    return resource.getResponseField('thingGroupIndexingConfiguration.thingGroupIndexingMode') as unknown as string;
  }

  public get managedFields(): shapes.IotField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingGroupIndexingConfiguration.managedFields'),
        outputPath: 'thingGroupIndexingConfiguration.managedFields',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.managedFields', props);
    return resource.getResponseField('thingGroupIndexingConfiguration.managedFields') as unknown as shapes.IotField[];
  }

  public get customFields(): shapes.IotField[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIndexingConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetIndexingConfiguration.thingGroupIndexingConfiguration.customFields'),
        outputPath: 'thingGroupIndexingConfiguration.customFields',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.customFields', props);
    return resource.getResponseField('thingGroupIndexingConfiguration.customFields') as unknown as shapes.IotField[];
  }

}

export class IotFetchJobDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetJobDocumentRequest) {
    super(scope, id);
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobDocument',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetJobDocument.document'),
        outputPath: 'document',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobDocument.document', props);
    return resource.getResponseField('document') as unknown as string;
  }

}

export class IotFetchLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetLoggingOptions.roleArn'),
        outputPath: 'roleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingOptions.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetLoggingOptions.logLevel'),
        outputPath: 'logLevel',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoggingOptions.logLevel', props);
    return resource.getResponseField('logLevel') as unknown as string;
  }

}

export class IotFetchOtaUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get otaUpdateInfo(): IotFetchOtaUpdateOtaUpdateInfo {
    return new IotFetchOtaUpdateOtaUpdateInfo(this, 'OtaUpdateInfo', this.__resources, this.input);
  }

}

export class IotFetchOtaUpdateOtaUpdateInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get otaUpdateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.otaUpdateId'),
        outputPath: 'otaUpdateInfo.otaUpdateId',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.otaUpdateId', props);
    return resource.getResponseField('otaUpdateInfo.otaUpdateId') as unknown as string;
  }

  public get otaUpdateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.otaUpdateArn'),
        outputPath: 'otaUpdateInfo.otaUpdateArn',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.otaUpdateArn', props);
    return resource.getResponseField('otaUpdateInfo.otaUpdateArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.creationDate'),
        outputPath: 'otaUpdateInfo.creationDate',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.creationDate', props);
    return resource.getResponseField('otaUpdateInfo.creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.lastModifiedDate'),
        outputPath: 'otaUpdateInfo.lastModifiedDate',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.lastModifiedDate', props);
    return resource.getResponseField('otaUpdateInfo.lastModifiedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.description'),
        outputPath: 'otaUpdateInfo.description',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.description', props);
    return resource.getResponseField('otaUpdateInfo.description') as unknown as string;
  }

  public get targets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.targets'),
        outputPath: 'otaUpdateInfo.targets',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.targets', props);
    return resource.getResponseField('otaUpdateInfo.targets') as unknown as string[];
  }

  public get protocols(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.protocols'),
        outputPath: 'otaUpdateInfo.protocols',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.protocols', props);
    return resource.getResponseField('otaUpdateInfo.protocols') as unknown as string[];
  }

  public get awsJobExecutionsRolloutConfig(): IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig {
    return new IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig(this, 'AwsJobExecutionsRolloutConfig', this.__resources, this.input);
  }

  public get awsJobPresignedUrlConfig(): IotFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig {
    return new IotFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig(this, 'AwsJobPresignedUrlConfig', this.__resources, this.input);
  }

  public get targetSelection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.targetSelection'),
        outputPath: 'otaUpdateInfo.targetSelection',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.targetSelection', props);
    return resource.getResponseField('otaUpdateInfo.targetSelection') as unknown as string;
  }

  public get otaUpdateFiles(): shapes.IotOtaUpdateFile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.otaUpdateFiles'),
        outputPath: 'otaUpdateInfo.otaUpdateFiles',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.otaUpdateFiles', props);
    return resource.getResponseField('otaUpdateInfo.otaUpdateFiles') as unknown as shapes.IotOtaUpdateFile[];
  }

  public get otaUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.otaUpdateStatus'),
        outputPath: 'otaUpdateInfo.otaUpdateStatus',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.otaUpdateStatus', props);
    return resource.getResponseField('otaUpdateInfo.otaUpdateStatus') as unknown as string;
  }

  public get awsIotJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsIotJobId'),
        outputPath: 'otaUpdateInfo.awsIotJobId',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsIotJobId', props);
    return resource.getResponseField('otaUpdateInfo.awsIotJobId') as unknown as string;
  }

  public get awsIotJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsIotJobArn'),
        outputPath: 'otaUpdateInfo.awsIotJobArn',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsIotJobArn', props);
    return resource.getResponseField('otaUpdateInfo.awsIotJobArn') as unknown as string;
  }

  public get errorInfo(): IotFetchOtaUpdateOtaUpdateInfoErrorInfo {
    return new IotFetchOtaUpdateOtaUpdateInfoErrorInfo(this, 'ErrorInfo', this.__resources, this.input);
  }

  public get additionalParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.additionalParameters'),
        outputPath: 'otaUpdateInfo.additionalParameters',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.additionalParameters', props);
    return resource.getResponseField('otaUpdateInfo.additionalParameters') as unknown as Record<string, string>;
  }

}

export class IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get maximumPerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute'),
        outputPath: 'otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute') as unknown as number;
  }

  public get exponentialRate(): IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate {
    return new IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate(this, 'ExponentialRate', this.__resources, this.input);
  }

}

export class IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get baseRatePerMinute(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute'),
        outputPath: 'otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute') as unknown as number;
  }

  public get incrementFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor'),
        outputPath: 'otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor') as unknown as number;
  }

  public get rateIncreaseCriteria(): IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    return new IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(this, 'RateIncreaseCriteria', this.__resources, this.input);
  }

}

export class IotFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get numberOfNotifiedThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings'),
        outputPath: 'otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings') as unknown as number;
  }

  public get numberOfSucceededThings(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings'),
        outputPath: 'otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings') as unknown as number;
  }

}

export class IotFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get expiresInSec(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec'),
        outputPath: 'otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec', props);
    return resource.getResponseField('otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec') as unknown as number;
  }

}

export class IotFetchOtaUpdateOtaUpdateInfoErrorInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetOtaUpdateRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.errorInfo.code'),
        outputPath: 'otaUpdateInfo.errorInfo.code',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.errorInfo.code', props);
    return resource.getResponseField('otaUpdateInfo.errorInfo.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOtaUpdate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetOTAUpdate.otaUpdateInfo.errorInfo.message'),
        outputPath: 'otaUpdateInfo.errorInfo.message',
        parameters: {
          otaUpdateId: this.input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOTAUpdate.otaUpdateInfo.errorInfo.message', props);
    return resource.getResponseField('otaUpdateInfo.errorInfo.message') as unknown as string;
  }

}

export class IotFetchPercentiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetPercentilesRequest) {
    super(scope, id);
  }

  public get percentiles(): shapes.IotPercentPair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPercentiles',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPercentiles.percentiles'),
        outputPath: 'percentiles',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
          percents: this.input.percents,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPercentiles.percentiles', props);
    return resource.getResponseField('percentiles') as unknown as shapes.IotPercentPair[];
  }

}

export class IotFetchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetPolicyRequest) {
    super(scope, id);
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.policyName'),
        outputPath: 'policyName',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.policyName', props);
    return resource.getResponseField('policyName') as unknown as string;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.policyArn'),
        outputPath: 'policyArn',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.policyArn', props);
    return resource.getResponseField('policyArn') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.policyDocument'),
        outputPath: 'policyDocument',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.policyDocument', props);
    return resource.getResponseField('policyDocument') as unknown as string;
  }

  public get defaultVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.defaultVersionId'),
        outputPath: 'defaultVersionId',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.defaultVersionId', props);
    return resource.getResponseField('defaultVersionId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

  public get generationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicy.generationId'),
        outputPath: 'generationId',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicy.generationId', props);
    return resource.getResponseField('generationId') as unknown as string;
  }

}

export class IotFetchPolicyVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetPolicyVersionRequest) {
    super(scope, id);
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.policyArn'),
        outputPath: 'policyArn',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.policyArn', props);
    return resource.getResponseField('policyArn') as unknown as string;
  }

  public get policyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.policyName'),
        outputPath: 'policyName',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.policyName', props);
    return resource.getResponseField('policyName') as unknown as string;
  }

  public get policyDocument(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.policyDocument'),
        outputPath: 'policyDocument',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.policyDocument', props);
    return resource.getResponseField('policyDocument') as unknown as string;
  }

  public get policyVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.policyVersionId'),
        outputPath: 'policyVersionId',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.policyVersionId', props);
    return resource.getResponseField('policyVersionId') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.isDefaultVersion'),
        outputPath: 'isDefaultVersion',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

  public get generationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPolicyVersion',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetPolicyVersion.generationId'),
        outputPath: 'generationId',
        parameters: {
          policyName: this.input.policyName,
          policyVersionId: this.input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPolicyVersion.generationId', props);
    return resource.getResponseField('generationId') as unknown as string;
  }

}

export class IotFetchRegistrationCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get registrationCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistrationCode',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetRegistrationCode.registrationCode'),
        outputPath: 'registrationCode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistrationCode.registrationCode', props);
    return resource.getResponseField('registrationCode') as unknown as string;
  }

}

export class IotFetchStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetStatisticsRequest) {
    super(scope, id);
  }

  public get statistics(): IotFetchStatisticsStatistics {
    return new IotFetchStatisticsStatistics(this, 'Statistics', this.__resources, this.input);
  }

}

export class IotFetchStatisticsStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetStatisticsRequest) {
    super(scope, id);
  }

  public get count(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.count'),
        outputPath: 'statistics.count',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.count', props);
    return resource.getResponseField('statistics.count') as unknown as number;
  }

  public get average(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.average'),
        outputPath: 'statistics.average',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.average', props);
    return resource.getResponseField('statistics.average') as unknown as number;
  }

  public get sum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.sum'),
        outputPath: 'statistics.sum',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.sum', props);
    return resource.getResponseField('statistics.sum') as unknown as number;
  }

  public get minimum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.minimum'),
        outputPath: 'statistics.minimum',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.minimum', props);
    return resource.getResponseField('statistics.minimum') as unknown as number;
  }

  public get maximum(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.maximum'),
        outputPath: 'statistics.maximum',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.maximum', props);
    return resource.getResponseField('statistics.maximum') as unknown as number;
  }

  public get sumOfSquares(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.sumOfSquares'),
        outputPath: 'statistics.sumOfSquares',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.sumOfSquares', props);
    return resource.getResponseField('statistics.sumOfSquares') as unknown as number;
  }

  public get variance(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.variance'),
        outputPath: 'statistics.variance',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.variance', props);
    return resource.getResponseField('statistics.variance') as unknown as number;
  }

  public get stdDeviation(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatistics',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetStatistics.statistics.stdDeviation'),
        outputPath: 'statistics.stdDeviation',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          aggregationField: this.input.aggregationField,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatistics.statistics.stdDeviation', props);
    return resource.getResponseField('statistics.stdDeviation') as unknown as number;
  }

}

export class IotFetchTopicRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get ruleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.ruleArn'),
        outputPath: 'ruleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.ruleArn', props);
    return resource.getResponseField('ruleArn') as unknown as string;
  }

  public get rule(): IotFetchTopicRuleRule {
    return new IotFetchTopicRuleRule(this, 'Rule', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get ruleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.ruleName'),
        outputPath: 'rule.ruleName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.ruleName', props);
    return resource.getResponseField('rule.ruleName') as unknown as string;
  }

  public get sql(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.sql'),
        outputPath: 'rule.sql',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.sql', props);
    return resource.getResponseField('rule.sql') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.description'),
        outputPath: 'rule.description',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.description', props);
    return resource.getResponseField('rule.description') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.createdAt'),
        outputPath: 'rule.createdAt',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.createdAt', props);
    return resource.getResponseField('rule.createdAt') as unknown as string;
  }

  public get actions(): shapes.IotAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.actions'),
        outputPath: 'rule.actions',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.actions', props);
    return resource.getResponseField('rule.actions') as unknown as shapes.IotAction[];
  }

  public get ruleDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.ruleDisabled'),
        outputPath: 'rule.ruleDisabled',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.ruleDisabled', props);
    return resource.getResponseField('rule.ruleDisabled') as unknown as boolean;
  }

  public get awsIotSqlVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.awsIotSqlVersion'),
        outputPath: 'rule.awsIotSqlVersion',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.awsIotSqlVersion', props);
    return resource.getResponseField('rule.awsIotSqlVersion') as unknown as string;
  }

  public get errorAction(): IotFetchTopicRuleRuleErrorAction {
    return new IotFetchTopicRuleRuleErrorAction(this, 'ErrorAction', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get dynamoDb(): IotFetchTopicRuleRuleErrorActionDynamoDb {
    return new IotFetchTopicRuleRuleErrorActionDynamoDb(this, 'DynamoDb', this.__resources, this.input);
  }

  public get dynamoDBv2(): IotFetchTopicRuleRuleErrorActionDynamoDBv2 {
    return new IotFetchTopicRuleRuleErrorActionDynamoDBv2(this, 'DynamoDBv2', this.__resources, this.input);
  }

  public get lambda(): IotFetchTopicRuleRuleErrorActionLambda {
    return new IotFetchTopicRuleRuleErrorActionLambda(this, 'Lambda', this.__resources, this.input);
  }

  public get sns(): IotFetchTopicRuleRuleErrorActionSns {
    return new IotFetchTopicRuleRuleErrorActionSns(this, 'Sns', this.__resources, this.input);
  }

  public get sqs(): IotFetchTopicRuleRuleErrorActionSqs {
    return new IotFetchTopicRuleRuleErrorActionSqs(this, 'Sqs', this.__resources, this.input);
  }

  public get kinesis(): IotFetchTopicRuleRuleErrorActionKinesis {
    return new IotFetchTopicRuleRuleErrorActionKinesis(this, 'Kinesis', this.__resources, this.input);
  }

  public get republish(): IotFetchTopicRuleRuleErrorActionRepublish {
    return new IotFetchTopicRuleRuleErrorActionRepublish(this, 'Republish', this.__resources, this.input);
  }

  public get s3(): IotFetchTopicRuleRuleErrorActionS3 {
    return new IotFetchTopicRuleRuleErrorActionS3(this, 'S3', this.__resources, this.input);
  }

  public get firehose(): IotFetchTopicRuleRuleErrorActionFirehose {
    return new IotFetchTopicRuleRuleErrorActionFirehose(this, 'Firehose', this.__resources, this.input);
  }

  public get cloudwatchMetric(): IotFetchTopicRuleRuleErrorActionCloudwatchMetric {
    return new IotFetchTopicRuleRuleErrorActionCloudwatchMetric(this, 'CloudwatchMetric', this.__resources, this.input);
  }

  public get cloudwatchAlarm(): IotFetchTopicRuleRuleErrorActionCloudwatchAlarm {
    return new IotFetchTopicRuleRuleErrorActionCloudwatchAlarm(this, 'CloudwatchAlarm', this.__resources, this.input);
  }

  public get cloudwatchLogs(): IotFetchTopicRuleRuleErrorActionCloudwatchLogs {
    return new IotFetchTopicRuleRuleErrorActionCloudwatchLogs(this, 'CloudwatchLogs', this.__resources, this.input);
  }

  public get elasticsearch(): IotFetchTopicRuleRuleErrorActionElasticsearch {
    return new IotFetchTopicRuleRuleErrorActionElasticsearch(this, 'Elasticsearch', this.__resources, this.input);
  }

  public get salesforce(): IotFetchTopicRuleRuleErrorActionSalesforce {
    return new IotFetchTopicRuleRuleErrorActionSalesforce(this, 'Salesforce', this.__resources, this.input);
  }

  public get iotAnalytics(): IotFetchTopicRuleRuleErrorActionIotAnalytics {
    return new IotFetchTopicRuleRuleErrorActionIotAnalytics(this, 'IotAnalytics', this.__resources, this.input);
  }

  public get iotEvents(): IotFetchTopicRuleRuleErrorActionIotEvents {
    return new IotFetchTopicRuleRuleErrorActionIotEvents(this, 'IotEvents', this.__resources, this.input);
  }

  public get iotSiteWise(): IotFetchTopicRuleRuleErrorActionIotSiteWise {
    return new IotFetchTopicRuleRuleErrorActionIotSiteWise(this, 'IotSiteWise', this.__resources, this.input);
  }

  public get stepFunctions(): IotFetchTopicRuleRuleErrorActionStepFunctions {
    return new IotFetchTopicRuleRuleErrorActionStepFunctions(this, 'StepFunctions', this.__resources, this.input);
  }

  public get timestream(): IotFetchTopicRuleRuleErrorActionTimestream {
    return new IotFetchTopicRuleRuleErrorActionTimestream(this, 'Timestream', this.__resources, this.input);
  }

  public get http(): IotFetchTopicRuleRuleErrorActionHttp {
    return new IotFetchTopicRuleRuleErrorActionHttp(this, 'Http', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorActionDynamoDb extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.tableName'),
        outputPath: 'rule.errorAction.dynamoDB.tableName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.tableName', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.tableName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.roleArn'),
        outputPath: 'rule.errorAction.dynamoDB.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.roleArn', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.roleArn') as unknown as string;
  }

  public get operation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.operation'),
        outputPath: 'rule.errorAction.dynamoDB.operation',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.operation', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.operation') as unknown as string;
  }

  public get hashKeyField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.hashKeyField'),
        outputPath: 'rule.errorAction.dynamoDB.hashKeyField',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyField', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.hashKeyField') as unknown as string;
  }

  public get hashKeyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.hashKeyValue'),
        outputPath: 'rule.errorAction.dynamoDB.hashKeyValue',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyValue', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.hashKeyValue') as unknown as string;
  }

  public get hashKeyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.hashKeyType'),
        outputPath: 'rule.errorAction.dynamoDB.hashKeyType',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyType', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.hashKeyType') as unknown as string;
  }

  public get rangeKeyField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.rangeKeyField'),
        outputPath: 'rule.errorAction.dynamoDB.rangeKeyField',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyField', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.rangeKeyField') as unknown as string;
  }

  public get rangeKeyValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.rangeKeyValue'),
        outputPath: 'rule.errorAction.dynamoDB.rangeKeyValue',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyValue', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.rangeKeyValue') as unknown as string;
  }

  public get rangeKeyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.rangeKeyType'),
        outputPath: 'rule.errorAction.dynamoDB.rangeKeyType',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyType', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.rangeKeyType') as unknown as string;
  }

  public get payloadField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDB.payloadField'),
        outputPath: 'rule.errorAction.dynamoDB.payloadField',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDB.payloadField', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.payloadField') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionDynamoDBv2 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDBv2.roleArn'),
        outputPath: 'rule.errorAction.dynamoDBv2.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDBv2.roleArn', props);
    return resource.getResponseField('rule.errorAction.dynamoDBv2.roleArn') as unknown as string;
  }

  public get putItem(): IotFetchTopicRuleRuleErrorActionDynamoDBv2PutItem {
    return new IotFetchTopicRuleRuleErrorActionDynamoDBv2PutItem(this, 'PutItem', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorActionDynamoDBv2PutItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.dynamoDBv2.putItem.tableName'),
        outputPath: 'rule.errorAction.dynamoDBv2.putItem.tableName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.dynamoDBv2.putItem.tableName', props);
    return resource.getResponseField('rule.errorAction.dynamoDBv2.putItem.tableName') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionLambda extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get functionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.lambda.functionArn'),
        outputPath: 'rule.errorAction.lambda.functionArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.lambda.functionArn', props);
    return resource.getResponseField('rule.errorAction.lambda.functionArn') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionSns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sns.targetArn'),
        outputPath: 'rule.errorAction.sns.targetArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sns.targetArn', props);
    return resource.getResponseField('rule.errorAction.sns.targetArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sns.roleArn'),
        outputPath: 'rule.errorAction.sns.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sns.roleArn', props);
    return resource.getResponseField('rule.errorAction.sns.roleArn') as unknown as string;
  }

  public get messageFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sns.messageFormat'),
        outputPath: 'rule.errorAction.sns.messageFormat',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sns.messageFormat', props);
    return resource.getResponseField('rule.errorAction.sns.messageFormat') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionSqs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sqs.roleArn'),
        outputPath: 'rule.errorAction.sqs.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sqs.roleArn', props);
    return resource.getResponseField('rule.errorAction.sqs.roleArn') as unknown as string;
  }

  public get queueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sqs.queueUrl'),
        outputPath: 'rule.errorAction.sqs.queueUrl',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sqs.queueUrl', props);
    return resource.getResponseField('rule.errorAction.sqs.queueUrl') as unknown as string;
  }

  public get useBase64(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.sqs.useBase64'),
        outputPath: 'rule.errorAction.sqs.useBase64',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.sqs.useBase64', props);
    return resource.getResponseField('rule.errorAction.sqs.useBase64') as unknown as boolean;
  }

}

export class IotFetchTopicRuleRuleErrorActionKinesis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.kinesis.roleArn'),
        outputPath: 'rule.errorAction.kinesis.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.kinesis.roleArn', props);
    return resource.getResponseField('rule.errorAction.kinesis.roleArn') as unknown as string;
  }

  public get streamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.kinesis.streamName'),
        outputPath: 'rule.errorAction.kinesis.streamName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.kinesis.streamName', props);
    return resource.getResponseField('rule.errorAction.kinesis.streamName') as unknown as string;
  }

  public get partitionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.kinesis.partitionKey'),
        outputPath: 'rule.errorAction.kinesis.partitionKey',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.kinesis.partitionKey', props);
    return resource.getResponseField('rule.errorAction.kinesis.partitionKey') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionRepublish extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.republish.roleArn'),
        outputPath: 'rule.errorAction.republish.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.republish.roleArn', props);
    return resource.getResponseField('rule.errorAction.republish.roleArn') as unknown as string;
  }

  public get topic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.republish.topic'),
        outputPath: 'rule.errorAction.republish.topic',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.republish.topic', props);
    return resource.getResponseField('rule.errorAction.republish.topic') as unknown as string;
  }

  public get qos(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.republish.qos'),
        outputPath: 'rule.errorAction.republish.qos',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.republish.qos', props);
    return resource.getResponseField('rule.errorAction.republish.qos') as unknown as number;
  }

}

export class IotFetchTopicRuleRuleErrorActionS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.s3.roleArn'),
        outputPath: 'rule.errorAction.s3.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.s3.roleArn', props);
    return resource.getResponseField('rule.errorAction.s3.roleArn') as unknown as string;
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.s3.bucketName'),
        outputPath: 'rule.errorAction.s3.bucketName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.s3.bucketName', props);
    return resource.getResponseField('rule.errorAction.s3.bucketName') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.s3.key'),
        outputPath: 'rule.errorAction.s3.key',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.s3.key', props);
    return resource.getResponseField('rule.errorAction.s3.key') as unknown as string;
  }

  public get cannedAcl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.s3.cannedAcl'),
        outputPath: 'rule.errorAction.s3.cannedAcl',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.s3.cannedAcl', props);
    return resource.getResponseField('rule.errorAction.s3.cannedAcl') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionFirehose extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.firehose.roleArn'),
        outputPath: 'rule.errorAction.firehose.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.firehose.roleArn', props);
    return resource.getResponseField('rule.errorAction.firehose.roleArn') as unknown as string;
  }

  public get deliveryStreamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.firehose.deliveryStreamName'),
        outputPath: 'rule.errorAction.firehose.deliveryStreamName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.firehose.deliveryStreamName', props);
    return resource.getResponseField('rule.errorAction.firehose.deliveryStreamName') as unknown as string;
  }

  public get separator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.firehose.separator'),
        outputPath: 'rule.errorAction.firehose.separator',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.firehose.separator', props);
    return resource.getResponseField('rule.errorAction.firehose.separator') as unknown as string;
  }

  public get batchMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.firehose.batchMode'),
        outputPath: 'rule.errorAction.firehose.batchMode',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.firehose.batchMode', props);
    return resource.getResponseField('rule.errorAction.firehose.batchMode') as unknown as boolean;
  }

}

export class IotFetchTopicRuleRuleErrorActionCloudwatchMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.roleArn'),
        outputPath: 'rule.errorAction.cloudwatchMetric.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.roleArn', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.roleArn') as unknown as string;
  }

  public get metricNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.metricNamespace'),
        outputPath: 'rule.errorAction.cloudwatchMetric.metricNamespace',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricNamespace', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricNamespace') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.metricName'),
        outputPath: 'rule.errorAction.cloudwatchMetric.metricName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricName', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricName') as unknown as string;
  }

  public get metricValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.metricValue'),
        outputPath: 'rule.errorAction.cloudwatchMetric.metricValue',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricValue', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricValue') as unknown as string;
  }

  public get metricUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.metricUnit'),
        outputPath: 'rule.errorAction.cloudwatchMetric.metricUnit',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricUnit', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricUnit') as unknown as string;
  }

  public get metricTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchMetric.metricTimestamp'),
        outputPath: 'rule.errorAction.cloudwatchMetric.metricTimestamp',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricTimestamp', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricTimestamp') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionCloudwatchAlarm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchAlarm.roleArn'),
        outputPath: 'rule.errorAction.cloudwatchAlarm.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.roleArn', props);
    return resource.getResponseField('rule.errorAction.cloudwatchAlarm.roleArn') as unknown as string;
  }

  public get alarmName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchAlarm.alarmName'),
        outputPath: 'rule.errorAction.cloudwatchAlarm.alarmName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.alarmName', props);
    return resource.getResponseField('rule.errorAction.cloudwatchAlarm.alarmName') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchAlarm.stateReason'),
        outputPath: 'rule.errorAction.cloudwatchAlarm.stateReason',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.stateReason', props);
    return resource.getResponseField('rule.errorAction.cloudwatchAlarm.stateReason') as unknown as string;
  }

  public get stateValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchAlarm.stateValue'),
        outputPath: 'rule.errorAction.cloudwatchAlarm.stateValue',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.stateValue', props);
    return resource.getResponseField('rule.errorAction.cloudwatchAlarm.stateValue') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionCloudwatchLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchLogs.roleArn'),
        outputPath: 'rule.errorAction.cloudwatchLogs.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchLogs.roleArn', props);
    return resource.getResponseField('rule.errorAction.cloudwatchLogs.roleArn') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.cloudwatchLogs.logGroupName'),
        outputPath: 'rule.errorAction.cloudwatchLogs.logGroupName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.cloudwatchLogs.logGroupName', props);
    return resource.getResponseField('rule.errorAction.cloudwatchLogs.logGroupName') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionElasticsearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.elasticsearch.roleArn'),
        outputPath: 'rule.errorAction.elasticsearch.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.elasticsearch.roleArn', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.roleArn') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.elasticsearch.endpoint'),
        outputPath: 'rule.errorAction.elasticsearch.endpoint',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.elasticsearch.endpoint', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.endpoint') as unknown as string;
  }

  public get index(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.elasticsearch.index'),
        outputPath: 'rule.errorAction.elasticsearch.index',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.elasticsearch.index', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.index') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.elasticsearch.type'),
        outputPath: 'rule.errorAction.elasticsearch.type',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.elasticsearch.type', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.elasticsearch.id'),
        outputPath: 'rule.errorAction.elasticsearch.id',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.elasticsearch.id', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.id') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionSalesforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get token(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.salesforce.token'),
        outputPath: 'rule.errorAction.salesforce.token',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.salesforce.token', props);
    return resource.getResponseField('rule.errorAction.salesforce.token') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.salesforce.url'),
        outputPath: 'rule.errorAction.salesforce.url',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.salesforce.url', props);
    return resource.getResponseField('rule.errorAction.salesforce.url') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionIotAnalytics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotAnalytics.channelArn'),
        outputPath: 'rule.errorAction.iotAnalytics.channelArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotAnalytics.channelArn', props);
    return resource.getResponseField('rule.errorAction.iotAnalytics.channelArn') as unknown as string;
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotAnalytics.channelName'),
        outputPath: 'rule.errorAction.iotAnalytics.channelName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotAnalytics.channelName', props);
    return resource.getResponseField('rule.errorAction.iotAnalytics.channelName') as unknown as string;
  }

  public get batchMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotAnalytics.batchMode'),
        outputPath: 'rule.errorAction.iotAnalytics.batchMode',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotAnalytics.batchMode', props);
    return resource.getResponseField('rule.errorAction.iotAnalytics.batchMode') as unknown as boolean;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotAnalytics.roleArn'),
        outputPath: 'rule.errorAction.iotAnalytics.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotAnalytics.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotAnalytics.roleArn') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionIotEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get inputName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotEvents.inputName'),
        outputPath: 'rule.errorAction.iotEvents.inputName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotEvents.inputName', props);
    return resource.getResponseField('rule.errorAction.iotEvents.inputName') as unknown as string;
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotEvents.messageId'),
        outputPath: 'rule.errorAction.iotEvents.messageId',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotEvents.messageId', props);
    return resource.getResponseField('rule.errorAction.iotEvents.messageId') as unknown as string;
  }

  public get batchMode(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotEvents.batchMode'),
        outputPath: 'rule.errorAction.iotEvents.batchMode',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotEvents.batchMode', props);
    return resource.getResponseField('rule.errorAction.iotEvents.batchMode') as unknown as boolean;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotEvents.roleArn'),
        outputPath: 'rule.errorAction.iotEvents.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotEvents.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotEvents.roleArn') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionIotSiteWise extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get putAssetPropertyValueEntries(): shapes.IotPutAssetPropertyValueEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotSiteWise.putAssetPropertyValueEntries'),
        outputPath: 'rule.errorAction.iotSiteWise.putAssetPropertyValueEntries',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotSiteWise.putAssetPropertyValueEntries', props);
    return resource.getResponseField('rule.errorAction.iotSiteWise.putAssetPropertyValueEntries') as unknown as shapes.IotPutAssetPropertyValueEntry[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.iotSiteWise.roleArn'),
        outputPath: 'rule.errorAction.iotSiteWise.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.iotSiteWise.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotSiteWise.roleArn') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionStepFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get executionNamePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.stepFunctions.executionNamePrefix'),
        outputPath: 'rule.errorAction.stepFunctions.executionNamePrefix',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.stepFunctions.executionNamePrefix', props);
    return resource.getResponseField('rule.errorAction.stepFunctions.executionNamePrefix') as unknown as string;
  }

  public get stateMachineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.stepFunctions.stateMachineName'),
        outputPath: 'rule.errorAction.stepFunctions.stateMachineName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.stepFunctions.stateMachineName', props);
    return resource.getResponseField('rule.errorAction.stepFunctions.stateMachineName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.stepFunctions.roleArn'),
        outputPath: 'rule.errorAction.stepFunctions.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.stepFunctions.roleArn', props);
    return resource.getResponseField('rule.errorAction.stepFunctions.roleArn') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionTimestream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.roleArn'),
        outputPath: 'rule.errorAction.timestream.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.roleArn', props);
    return resource.getResponseField('rule.errorAction.timestream.roleArn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.databaseName'),
        outputPath: 'rule.errorAction.timestream.databaseName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.databaseName', props);
    return resource.getResponseField('rule.errorAction.timestream.databaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.tableName'),
        outputPath: 'rule.errorAction.timestream.tableName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.tableName', props);
    return resource.getResponseField('rule.errorAction.timestream.tableName') as unknown as string;
  }

  public get dimensions(): shapes.IotTimestreamDimension[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.dimensions'),
        outputPath: 'rule.errorAction.timestream.dimensions',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.dimensions', props);
    return resource.getResponseField('rule.errorAction.timestream.dimensions') as unknown as shapes.IotTimestreamDimension[];
  }

  public get timestamp(): IotFetchTopicRuleRuleErrorActionTimestreamTimestamp {
    return new IotFetchTopicRuleRuleErrorActionTimestreamTimestamp(this, 'Timestamp', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorActionTimestreamTimestamp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.timestamp.value'),
        outputPath: 'rule.errorAction.timestream.timestamp.value',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.timestamp.value', props);
    return resource.getResponseField('rule.errorAction.timestream.timestamp.value') as unknown as string;
  }

  public get unit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.timestream.timestamp.unit'),
        outputPath: 'rule.errorAction.timestream.timestamp.unit',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.timestream.timestamp.unit', props);
    return resource.getResponseField('rule.errorAction.timestream.timestamp.unit') as unknown as string;
  }

}

export class IotFetchTopicRuleRuleErrorActionHttp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.url'),
        outputPath: 'rule.errorAction.http.url',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.url', props);
    return resource.getResponseField('rule.errorAction.http.url') as unknown as string;
  }

  public get confirmationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.confirmationUrl'),
        outputPath: 'rule.errorAction.http.confirmationUrl',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.confirmationUrl', props);
    return resource.getResponseField('rule.errorAction.http.confirmationUrl') as unknown as string;
  }

  public get headers(): shapes.IotHttpActionHeader[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.headers'),
        outputPath: 'rule.errorAction.http.headers',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.headers', props);
    return resource.getResponseField('rule.errorAction.http.headers') as unknown as shapes.IotHttpActionHeader[];
  }

  public get auth(): IotFetchTopicRuleRuleErrorActionHttpAuth {
    return new IotFetchTopicRuleRuleErrorActionHttpAuth(this, 'Auth', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorActionHttpAuth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get sigv4(): IotFetchTopicRuleRuleErrorActionHttpAuthSigv4 {
    return new IotFetchTopicRuleRuleErrorActionHttpAuthSigv4(this, 'Sigv4', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleRuleErrorActionHttpAuthSigv4 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleRequest) {
    super(scope, id);
  }

  public get signingRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.auth.sigv4.signingRegion'),
        outputPath: 'rule.errorAction.http.auth.sigv4.signingRegion',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.auth.sigv4.signingRegion', props);
    return resource.getResponseField('rule.errorAction.http.auth.sigv4.signingRegion') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.auth.sigv4.serviceName'),
        outputPath: 'rule.errorAction.http.auth.sigv4.serviceName',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.auth.sigv4.serviceName', props);
    return resource.getResponseField('rule.errorAction.http.auth.sigv4.serviceName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRule',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRule.rule.errorAction.http.auth.sigv4.roleArn'),
        outputPath: 'rule.errorAction.http.auth.sigv4.roleArn',
        parameters: {
          ruleName: this.input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRule.rule.errorAction.http.auth.sigv4.roleArn', props);
    return resource.getResponseField('rule.errorAction.http.auth.sigv4.roleArn') as unknown as string;
  }

}

export class IotFetchTopicRuleDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get topicRuleDestination(): IotFetchTopicRuleDestinationTopicRuleDestination {
    return new IotFetchTopicRuleDestinationTopicRuleDestination(this, 'TopicRuleDestination', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleDestinationTopicRuleDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRuleDestination.topicRuleDestination.arn'),
        outputPath: 'topicRuleDestination.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRuleDestination.topicRuleDestination.arn', props);
    return resource.getResponseField('topicRuleDestination.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRuleDestination.topicRuleDestination.status'),
        outputPath: 'topicRuleDestination.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRuleDestination.topicRuleDestination.status', props);
    return resource.getResponseField('topicRuleDestination.status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRuleDestination.topicRuleDestination.statusReason'),
        outputPath: 'topicRuleDestination.statusReason',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRuleDestination.topicRuleDestination.statusReason', props);
    return resource.getResponseField('topicRuleDestination.statusReason') as unknown as string;
  }

  public get httpUrlProperties(): IotFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {
    return new IotFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(this, 'HttpUrlProperties', this.__resources, this.input);
  }

}

export class IotFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotGetTopicRuleDestinationRequest) {
    super(scope, id);
  }

  public get confirmationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTopicRuleDestination',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl'),
        outputPath: 'topicRuleDestination.httpUrlProperties.confirmationUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl', props);
    return resource.getResponseField('topicRuleDestination.httpUrlProperties.confirmationUrl') as unknown as string;
  }

}

export class IotFetchV2LoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getV2LoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetV2LoggingOptions.roleArn'),
        outputPath: 'roleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetV2LoggingOptions.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get defaultLogLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getV2LoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetV2LoggingOptions.defaultLogLevel'),
        outputPath: 'defaultLogLevel',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetV2LoggingOptions.defaultLogLevel', props);
    return resource.getResponseField('defaultLogLevel') as unknown as string;
  }

  public get disableAllLogs(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getV2LoggingOptions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.GetV2LoggingOptions.disableAllLogs'),
        outputPath: 'disableAllLogs',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetV2LoggingOptions.disableAllLogs', props);
    return resource.getResponseField('disableAllLogs') as unknown as boolean;
  }

}

export class IotListActiveViolations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListActiveViolationsRequest) {
    super(scope, id);
  }

  public get activeViolations(): shapes.IotActiveViolation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActiveViolations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListActiveViolations.activeViolations'),
        outputPath: 'activeViolations',
        parameters: {
          thingName: this.input.thingName,
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActiveViolations.activeViolations', props);
    return resource.getResponseField('activeViolations') as unknown as shapes.IotActiveViolation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listActiveViolations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListActiveViolations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingName: this.input.thingName,
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListActiveViolations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAttachedPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAttachedPoliciesRequest) {
    super(scope, id);
  }

  public get policies(): shapes.IotPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAttachedPolicies.policies'),
        outputPath: 'policies',
        parameters: {
          target: this.input.target,
          recursive: this.input.recursive,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedPolicies.policies', props);
    return resource.getResponseField('policies') as unknown as shapes.IotPolicy[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAttachedPolicies.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          target: this.input.target,
          recursive: this.input.recursive,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListAuditFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuditFindingsRequest) {
    super(scope, id);
  }

  public get findings(): shapes.IotAuditFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditFindings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditFindings.findings'),
        outputPath: 'findings',
        parameters: {
          taskId: this.input.taskId,
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier?.account,
            iamRoleArn: this.input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier?.roleAliasArn,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          listSuppressedFindings: this.input.listSuppressedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditFindings.findings', props);
    return resource.getResponseField('findings') as unknown as shapes.IotAuditFinding[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditFindings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          taskId: this.input.taskId,
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier?.account,
            iamRoleArn: this.input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier?.roleAliasArn,
          },
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          listSuppressedFindings: this.input.listSuppressedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAuditMitigationActionsExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuditMitigationActionsExecutionsRequest) {
    super(scope, id);
  }

  public get actionsExecutions(): shapes.IotAuditMitigationActionExecutionMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditMitigationActionsExecutions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditMitigationActionsExecutions.actionsExecutions'),
        outputPath: 'actionsExecutions',
        parameters: {
          taskId: this.input.taskId,
          actionStatus: this.input.actionStatus,
          findingId: this.input.findingId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditMitigationActionsExecutions.actionsExecutions', props);
    return resource.getResponseField('actionsExecutions') as unknown as shapes.IotAuditMitigationActionExecutionMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditMitigationActionsExecutions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditMitigationActionsExecutions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          taskId: this.input.taskId,
          actionStatus: this.input.actionStatus,
          findingId: this.input.findingId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditMitigationActionsExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAuditMitigationActionsTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuditMitigationActionsTasksRequest) {
    super(scope, id);
  }

  public get tasks(): shapes.IotAuditMitigationActionsTaskMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditMitigationActionsTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditMitigationActionsTasks.tasks'),
        outputPath: 'tasks',
        parameters: {
          auditTaskId: this.input.auditTaskId,
          findingId: this.input.findingId,
          taskStatus: this.input.taskStatus,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditMitigationActionsTasks.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.IotAuditMitigationActionsTaskMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditMitigationActionsTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditMitigationActionsTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          auditTaskId: this.input.auditTaskId,
          findingId: this.input.findingId,
          taskStatus: this.input.taskStatus,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditMitigationActionsTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAuditSuppressions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuditSuppressionsRequest) {
    super(scope, id);
  }

  public get suppressions(): shapes.IotAuditSuppression[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditSuppressions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditSuppressions.suppressions'),
        outputPath: 'suppressions',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier?.account,
            iamRoleArn: this.input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier?.roleAliasArn,
          },
          ascendingOrder: this.input.ascendingOrder,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditSuppressions.suppressions', props);
    return resource.getResponseField('suppressions') as unknown as shapes.IotAuditSuppression[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditSuppressions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditSuppressions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          checkName: this.input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.input.resourceIdentifier?.account,
            iamRoleArn: this.input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.input.resourceIdentifier?.roleAliasArn,
          },
          ascendingOrder: this.input.ascendingOrder,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditSuppressions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAuditTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuditTasksRequest) {
    super(scope, id);
  }

  public get tasks(): shapes.IotAuditTaskMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditTasks.tasks'),
        outputPath: 'tasks',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          taskType: this.input.taskType,
          taskStatus: this.input.taskStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditTasks.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.IotAuditTaskMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuditTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuditTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          taskType: this.input.taskType,
          taskStatus: this.input.taskStatus,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuditTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListAuthorizers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListAuthorizersRequest) {
    super(scope, id);
  }

  public get authorizers(): shapes.IotAuthorizerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuthorizers',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuthorizers.authorizers'),
        outputPath: 'authorizers',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuthorizers.authorizers', props);
    return resource.getResponseField('authorizers') as unknown as shapes.IotAuthorizerSummary[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAuthorizers',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListAuthorizers.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAuthorizers.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListBillingGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListBillingGroupsRequest) {
    super(scope, id);
  }

  public get billingGroups(): shapes.IotGroupNameAndArn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBillingGroups',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListBillingGroups.billingGroups'),
        outputPath: 'billingGroups',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namePrefixFilter: this.input.namePrefixFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBillingGroups.billingGroups', props);
    return resource.getResponseField('billingGroups') as unknown as shapes.IotGroupNameAndArn[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBillingGroups',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListBillingGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          namePrefixFilter: this.input.namePrefixFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBillingGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListCaCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListCaCertificatesRequest) {
    super(scope, id);
  }

  public get certificates(): shapes.IotCaCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCaCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCACertificates.certificates'),
        outputPath: 'certificates',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCACertificates.certificates', props);
    return resource.getResponseField('certificates') as unknown as shapes.IotCaCertificate[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCaCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCACertificates.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCACertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListCertificatesRequest) {
    super(scope, id);
  }

  public get certificates(): shapes.IotCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCertificates.certificates'),
        outputPath: 'certificates',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificates.certificates', props);
    return resource.getResponseField('certificates') as unknown as shapes.IotCertificate[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCertificates.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListCertificatesByCa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListCertificatesByCaRequest) {
    super(scope, id);
  }

  public get certificates(): shapes.IotCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificatesByCa',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCertificatesByCA.certificates'),
        outputPath: 'certificates',
        parameters: {
          caCertificateId: this.input.caCertificateId,
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificatesByCA.certificates', props);
    return resource.getResponseField('certificates') as unknown as shapes.IotCertificate[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificatesByCa',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListCertificatesByCA.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          caCertificateId: this.input.caCertificateId,
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificatesByCA.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListDimensions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListDimensionsRequest) {
    super(scope, id);
  }

  public get dimensionNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDimensions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListDimensions.dimensionNames'),
        outputPath: 'dimensionNames',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDimensions.dimensionNames', props);
    return resource.getResponseField('dimensionNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDimensions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListDimensions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDimensions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListDomainConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListDomainConfigurationsRequest) {
    super(scope, id);
  }

  public get domainConfigurations(): shapes.IotDomainConfigurationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListDomainConfigurations.domainConfigurations'),
        outputPath: 'domainConfigurations',
        parameters: {
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          serviceType: this.input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainConfigurations.domainConfigurations', props);
    return resource.getResponseField('domainConfigurations') as unknown as shapes.IotDomainConfigurationSummary[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainConfigurations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListDomainConfigurations.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          serviceType: this.input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainConfigurations.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListIndices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListIndicesRequest) {
    super(scope, id);
  }

  public get indexNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIndices',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListIndices.indexNames'),
        outputPath: 'indexNames',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIndices.indexNames', props);
    return resource.getResponseField('indexNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIndices',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListIndices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIndices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListJobExecutionsForJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListJobExecutionsForJobRequest) {
    super(scope, id);
  }

  public get executionSummaries(): shapes.IotJobExecutionSummaryForJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobExecutionsForJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobExecutionsForJob.executionSummaries'),
        outputPath: 'executionSummaries',
        parameters: {
          jobId: this.input.jobId,
          status: this.input.status,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobExecutionsForJob.executionSummaries', props);
    return resource.getResponseField('executionSummaries') as unknown as shapes.IotJobExecutionSummaryForJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobExecutionsForJob',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobExecutionsForJob.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobId: this.input.jobId,
          status: this.input.status,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobExecutionsForJob.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListJobExecutionsForThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListJobExecutionsForThingRequest) {
    super(scope, id);
  }

  public get executionSummaries(): shapes.IotJobExecutionSummaryForThing[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobExecutionsForThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobExecutionsForThing.executionSummaries'),
        outputPath: 'executionSummaries',
        parameters: {
          thingName: this.input.thingName,
          status: this.input.status,
          namespaceId: this.input.namespaceId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobExecutionsForThing.executionSummaries', props);
    return resource.getResponseField('executionSummaries') as unknown as shapes.IotJobExecutionSummaryForThing[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobExecutionsForThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobExecutionsForThing.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingName: this.input.thingName,
          status: this.input.status,
          namespaceId: this.input.namespaceId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobExecutionsForThing.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.IotJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          status: this.input.status,
          targetSelection: this.input.targetSelection,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          thingGroupName: this.input.thingGroupName,
          thingGroupId: this.input.thingGroupId,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.IotJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          status: this.input.status,
          targetSelection: this.input.targetSelection,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          thingGroupName: this.input.thingGroupName,
          thingGroupId: this.input.thingGroupId,
          namespaceId: this.input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListMitigationActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListMitigationActionsRequest) {
    super(scope, id);
  }

  public get actionIdentifiers(): shapes.IotMitigationActionIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMitigationActions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListMitigationActions.actionIdentifiers'),
        outputPath: 'actionIdentifiers',
        parameters: {
          actionType: this.input.actionType,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMitigationActions.actionIdentifiers', props);
    return resource.getResponseField('actionIdentifiers') as unknown as shapes.IotMitigationActionIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMitigationActions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListMitigationActions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          actionType: this.input.actionType,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMitigationActions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListOtaUpdates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListOtaUpdatesRequest) {
    super(scope, id);
  }

  public get otaUpdates(): shapes.IotOtaUpdateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOtaUpdates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListOTAUpdates.otaUpdates'),
        outputPath: 'otaUpdates',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          otaUpdateStatus: this.input.otaUpdateStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOTAUpdates.otaUpdates', props);
    return resource.getResponseField('otaUpdates') as unknown as shapes.IotOtaUpdateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOtaUpdates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListOTAUpdates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          otaUpdateStatus: this.input.otaUpdateStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOTAUpdates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListOutgoingCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListOutgoingCertificatesRequest) {
    super(scope, id);
  }

  public get outgoingCertificates(): shapes.IotOutgoingCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutgoingCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListOutgoingCertificates.outgoingCertificates'),
        outputPath: 'outgoingCertificates',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutgoingCertificates.outgoingCertificates', props);
    return resource.getResponseField('outgoingCertificates') as unknown as shapes.IotOutgoingCertificate[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutgoingCertificates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListOutgoingCertificates.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutgoingCertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListPoliciesRequest) {
    super(scope, id);
  }

  public get policies(): shapes.IotPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPolicies.policies'),
        outputPath: 'policies',
        parameters: {
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.policies', props);
    return resource.getResponseField('policies') as unknown as shapes.IotPolicy[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPolicies.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListPolicyPrincipals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListPolicyPrincipalsRequest) {
    super(scope, id);
  }

  public get principals(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyPrincipals',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPolicyPrincipals.principals'),
        outputPath: 'principals',
        parameters: {
          policyName: this.input.policyName,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyPrincipals.principals', props);
    return resource.getResponseField('principals') as unknown as string[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyPrincipals',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPolicyPrincipals.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          policyName: this.input.policyName,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyPrincipals.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListPolicyVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListPolicyVersionsRequest) {
    super(scope, id);
  }

  public get policyVersions(): shapes.IotPolicyVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyVersions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPolicyVersions.policyVersions'),
        outputPath: 'policyVersions',
        parameters: {
          policyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyVersions.policyVersions', props);
    return resource.getResponseField('policyVersions') as unknown as shapes.IotPolicyVersion[];
  }

}

export class IotListPrincipalPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListPrincipalPoliciesRequest) {
    super(scope, id);
  }

  public get policies(): shapes.IotPolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPrincipalPolicies.policies'),
        outputPath: 'policies',
        parameters: {
          principal: this.input.principal,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalPolicies.policies', props);
    return resource.getResponseField('policies') as unknown as shapes.IotPolicy[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalPolicies',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPrincipalPolicies.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          principal: this.input.principal,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListPrincipalThings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListPrincipalThingsRequest) {
    super(scope, id);
  }

  public get things(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalThings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPrincipalThings.things'),
        outputPath: 'things',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          principal: this.input.principal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalThings.things', props);
    return resource.getResponseField('things') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalThings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListPrincipalThings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          principal: this.input.principal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListProvisioningTemplateVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListProvisioningTemplateVersionsRequest) {
    super(scope, id);
  }

  public get versions(): shapes.IotProvisioningTemplateVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningTemplateVersions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListProvisioningTemplateVersions.versions'),
        outputPath: 'versions',
        parameters: {
          templateName: this.input.templateName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningTemplateVersions.versions', props);
    return resource.getResponseField('versions') as unknown as shapes.IotProvisioningTemplateVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningTemplateVersions',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListProvisioningTemplateVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          templateName: this.input.templateName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningTemplateVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListProvisioningTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListProvisioningTemplatesRequest) {
    super(scope, id);
  }

  public get templates(): shapes.IotProvisioningTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningTemplates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListProvisioningTemplates.templates'),
        outputPath: 'templates',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningTemplates.templates', props);
    return resource.getResponseField('templates') as unknown as shapes.IotProvisioningTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningTemplates',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListProvisioningTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListRoleAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListRoleAliasesRequest) {
    super(scope, id);
  }

  public get roleAliases(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoleAliases',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListRoleAliases.roleAliases'),
        outputPath: 'roleAliases',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoleAliases.roleAliases', props);
    return resource.getResponseField('roleAliases') as unknown as string[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRoleAliases',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListRoleAliases.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          pageSize: this.input.pageSize,
          marker: this.input.marker,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRoleAliases.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListScheduledAudits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListScheduledAuditsRequest) {
    super(scope, id);
  }

  public get scheduledAudits(): shapes.IotScheduledAuditMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScheduledAudits',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListScheduledAudits.scheduledAudits'),
        outputPath: 'scheduledAudits',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScheduledAudits.scheduledAudits', props);
    return resource.getResponseField('scheduledAudits') as unknown as shapes.IotScheduledAuditMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScheduledAudits',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListScheduledAudits.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScheduledAudits.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListSecurityProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListSecurityProfilesRequest) {
    super(scope, id);
  }

  public get securityProfileIdentifiers(): shapes.IotSecurityProfileIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfiles',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListSecurityProfiles.securityProfileIdentifiers'),
        outputPath: 'securityProfileIdentifiers',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          dimensionName: this.input.dimensionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfiles.securityProfileIdentifiers', props);
    return resource.getResponseField('securityProfileIdentifiers') as unknown as shapes.IotSecurityProfileIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfiles',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListSecurityProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          dimensionName: this.input.dimensionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListSecurityProfilesForTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListSecurityProfilesForTargetRequest) {
    super(scope, id);
  }

  public get securityProfileTargetMappings(): shapes.IotSecurityProfileTargetMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfilesForTarget',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListSecurityProfilesForTarget.securityProfileTargetMappings'),
        outputPath: 'securityProfileTargetMappings',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          recursive: this.input.recursive,
          securityProfileTargetArn: this.input.securityProfileTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfilesForTarget.securityProfileTargetMappings', props);
    return resource.getResponseField('securityProfileTargetMappings') as unknown as shapes.IotSecurityProfileTargetMapping[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityProfilesForTarget',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListSecurityProfilesForTarget.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          recursive: this.input.recursive,
          securityProfileTargetArn: this.input.securityProfileTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityProfilesForTarget.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListStreamsRequest) {
    super(scope, id);
  }

  public get streams(): shapes.IotStreamSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListStreams.streams'),
        outputPath: 'streams',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.streams', props);
    return resource.getResponseField('streams') as unknown as shapes.IotStreamSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStreams',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListStreams.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          ascendingOrder: this.input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStreams.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.IotTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IotTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArn: this.input.resourceArn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListTargetsForPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListTargetsForPolicyRequest) {
    super(scope, id);
  }

  public get targets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTargetsForPolicy.targets'),
        outputPath: 'targets',
        parameters: {
          policyName: this.input.policyName,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForPolicy.targets', props);
    return resource.getResponseField('targets') as unknown as string[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForPolicy',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTargetsForPolicy.nextMarker'),
        outputPath: 'nextMarker',
        parameters: {
          policyName: this.input.policyName,
          marker: this.input.marker,
          pageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForPolicy.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotListTargetsForSecurityProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListTargetsForSecurityProfileRequest) {
    super(scope, id);
  }

  public get securityProfileTargets(): shapes.IotSecurityProfileTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTargetsForSecurityProfile.securityProfileTargets'),
        outputPath: 'securityProfileTargets',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForSecurityProfile.securityProfileTargets', props);
    return resource.getResponseField('securityProfileTargets') as unknown as shapes.IotSecurityProfileTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTargetsForSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTargetsForSecurityProfile.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTargetsForSecurityProfile.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingGroupsRequest) {
    super(scope, id);
  }

  public get thingGroups(): shapes.IotGroupNameAndArn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingGroups',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingGroups.thingGroups'),
        outputPath: 'thingGroups',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          parentGroup: this.input.parentGroup,
          namePrefixFilter: this.input.namePrefixFilter,
          recursive: this.input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingGroups.thingGroups', props);
    return resource.getResponseField('thingGroups') as unknown as shapes.IotGroupNameAndArn[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingGroups',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          parentGroup: this.input.parentGroup,
          namePrefixFilter: this.input.namePrefixFilter,
          recursive: this.input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingGroupsForThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingGroupsForThingRequest) {
    super(scope, id);
  }

  public get thingGroups(): shapes.IotGroupNameAndArn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingGroupsForThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingGroupsForThing.thingGroups'),
        outputPath: 'thingGroups',
        parameters: {
          thingName: this.input.thingName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingGroupsForThing.thingGroups', props);
    return resource.getResponseField('thingGroups') as unknown as shapes.IotGroupNameAndArn[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingGroupsForThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingGroupsForThing.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingName: this.input.thingName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingGroupsForThing.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingPrincipals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingPrincipalsRequest) {
    super(scope, id);
  }

  public get principals(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingPrincipals',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingPrincipals.principals'),
        outputPath: 'principals',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingPrincipals.principals', props);
    return resource.getResponseField('principals') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingPrincipals',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingPrincipals.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          thingName: this.input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingPrincipals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingRegistrationTaskReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingRegistrationTaskReportsRequest) {
    super(scope, id);
  }

  public get resourceLinks(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingRegistrationTaskReports',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingRegistrationTaskReports.resourceLinks'),
        outputPath: 'resourceLinks',
        parameters: {
          taskId: this.input.taskId,
          reportType: this.input.reportType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingRegistrationTaskReports.resourceLinks', props);
    return resource.getResponseField('resourceLinks') as unknown as string[];
  }

  public get reportType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingRegistrationTaskReports',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingRegistrationTaskReports.reportType'),
        outputPath: 'reportType',
        parameters: {
          taskId: this.input.taskId,
          reportType: this.input.reportType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingRegistrationTaskReports.reportType', props);
    return resource.getResponseField('reportType') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingRegistrationTaskReports',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingRegistrationTaskReports.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          taskId: this.input.taskId,
          reportType: this.input.reportType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingRegistrationTaskReports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingRegistrationTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingRegistrationTasksRequest) {
    super(scope, id);
  }

  public get taskIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingRegistrationTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingRegistrationTasks.taskIds'),
        outputPath: 'taskIds',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingRegistrationTasks.taskIds', props);
    return resource.getResponseField('taskIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingRegistrationTasks',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingRegistrationTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingRegistrationTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingTypesRequest) {
    super(scope, id);
  }

  public get thingTypes(): shapes.IotThingTypeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingTypes',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingTypes.thingTypes'),
        outputPath: 'thingTypes',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingTypes.thingTypes', props);
    return resource.getResponseField('thingTypes') as unknown as shapes.IotThingTypeDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingTypes',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingsRequest) {
    super(scope, id);
  }

  public get things(): shapes.IotThingAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThings.things'),
        outputPath: 'things',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          attributeName: this.input.attributeName,
          attributeValue: this.input.attributeValue,
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThings.things', props);
    return resource.getResponseField('things') as unknown as shapes.IotThingAttribute[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThings',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          attributeName: this.input.attributeName,
          attributeValue: this.input.attributeValue,
          thingTypeName: this.input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingsInBillingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingsInBillingGroupRequest) {
    super(scope, id);
  }

  public get things(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingsInBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingsInBillingGroup.things'),
        outputPath: 'things',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingsInBillingGroup.things', props);
    return resource.getResponseField('things') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingsInBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingsInBillingGroup.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingsInBillingGroup.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListThingsInThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListThingsInThingGroupRequest) {
    super(scope, id);
  }

  public get things(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingsInThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingsInThingGroup.things'),
        outputPath: 'things',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          recursive: this.input.recursive,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingsInThingGroup.things', props);
    return resource.getResponseField('things') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThingsInThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListThingsInThingGroup.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          recursive: this.input.recursive,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThingsInThingGroup.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListTopicRuleDestinations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListTopicRuleDestinationsRequest) {
    super(scope, id);
  }

  public get destinationSummaries(): shapes.IotTopicRuleDestinationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicRuleDestinations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTopicRuleDestinations.destinationSummaries'),
        outputPath: 'destinationSummaries',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicRuleDestinations.destinationSummaries', props);
    return resource.getResponseField('destinationSummaries') as unknown as shapes.IotTopicRuleDestinationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicRuleDestinations',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTopicRuleDestinations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicRuleDestinations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListTopicRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListTopicRulesRequest) {
    super(scope, id);
  }

  public get rules(): shapes.IotTopicRuleListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicRules',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTopicRules.rules'),
        outputPath: 'rules',
        parameters: {
          topic: this.input.topic,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          ruleDisabled: this.input.ruleDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicRules.rules', props);
    return resource.getResponseField('rules') as unknown as shapes.IotTopicRuleListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTopicRules',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListTopicRules.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          topic: this.input.topic,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          ruleDisabled: this.input.ruleDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTopicRules.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListV2LoggingLevels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListV2LoggingLevelsRequest) {
    super(scope, id);
  }

  public get logTargetConfigurations(): shapes.IotLogTargetConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listV2LoggingLevels',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListV2LoggingLevels.logTargetConfigurations'),
        outputPath: 'logTargetConfigurations',
        parameters: {
          targetType: this.input.targetType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListV2LoggingLevels.logTargetConfigurations', props);
    return resource.getResponseField('logTargetConfigurations') as unknown as shapes.IotLogTargetConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listV2LoggingLevels',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListV2LoggingLevels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          targetType: this.input.targetType,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListV2LoggingLevels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotListViolationEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotListViolationEventsRequest) {
    super(scope, id);
  }

  public get violationEvents(): shapes.IotViolationEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listViolationEvents',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListViolationEvents.violationEvents'),
        outputPath: 'violationEvents',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          thingName: this.input.thingName,
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListViolationEvents.violationEvents', props);
    return resource.getResponseField('violationEvents') as unknown as shapes.IotViolationEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listViolationEvents',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ListViolationEvents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          thingName: this.input.thingName,
          securityProfileName: this.input.securityProfileName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListViolationEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotRegisterCaCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotRegisterCaCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCACertificate.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          caCertificate: this.input.caCertificate,
          verificationCertificate: this.input.verificationCertificate,
          setAsActive: this.input.setAsActive,
          allowAutoRegistration: this.input.allowAutoRegistration,
          registrationConfig: {
            templateBody: this.input.registrationConfig?.templateBody,
            roleArn: this.input.registrationConfig?.roleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCACertificate.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCaCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCACertificate.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          caCertificate: this.input.caCertificate,
          verificationCertificate: this.input.verificationCertificate,
          setAsActive: this.input.setAsActive,
          allowAutoRegistration: this.input.allowAutoRegistration,
          registrationConfig: {
            templateBody: this.input.registrationConfig?.templateBody,
            roleArn: this.input.registrationConfig?.roleArn,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCACertificate.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotRegisterCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotRegisterCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCertificate.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          certificatePem: this.input.certificatePem,
          caCertificatePem: this.input.caCertificatePem,
          setAsActive: this.input.setAsActive,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCertificate.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCertificate.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          certificatePem: this.input.certificatePem,
          caCertificatePem: this.input.caCertificatePem,
          setAsActive: this.input.setAsActive,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCertificate.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotRegisterCertificateWithoutCa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotRegisterCertificateWithoutCaRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCertificateWithoutCa',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCertificateWithoutCA.certificateArn'),
        outputPath: 'certificateArn',
        parameters: {
          certificatePem: this.input.certificatePem,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCertificateWithoutCA.certificateArn', props);
    return resource.getResponseField('certificateArn') as unknown as string;
  }

  public get certificateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerCertificateWithoutCa',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterCertificateWithoutCA.certificateId'),
        outputPath: 'certificateId',
        parameters: {
          certificatePem: this.input.certificatePem,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterCertificateWithoutCA.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotRegisterThing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotRegisterThingRequest) {
    super(scope, id);
  }

  public get certificatePem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterThing.certificatePem'),
        outputPath: 'certificatePem',
        parameters: {
          templateBody: this.input.templateBody,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterThing.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

  public get resourceArns(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerThing',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.RegisterThing.resourceArns'),
        outputPath: 'resourceArns',
        parameters: {
          templateBody: this.input.templateBody,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterThing.resourceArns', props);
    return resource.getResponseField('resourceArns') as unknown as Record<string, string>;
  }

}

export class IotSearchIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotSearchIndexRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SearchIndex.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchIndex.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get things(): shapes.IotThingDocument[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SearchIndex.things'),
        outputPath: 'things',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchIndex.things', props);
    return resource.getResponseField('things') as unknown as shapes.IotThingDocument[];
  }

  public get thingGroups(): shapes.IotThingGroupDocument[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchIndex',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SearchIndex.thingGroups'),
        outputPath: 'thingGroups',
        parameters: {
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchIndex.thingGroups', props);
    return resource.getResponseField('thingGroups') as unknown as shapes.IotThingGroupDocument[];
  }

}

export class IotSetDefaultAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotSetDefaultAuthorizerRequest) {
    super(scope, id);
  }

  public get authorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetDefaultAuthorizer.authorizerName'),
        outputPath: 'authorizerName',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetDefaultAuthorizer.authorizerName', props);
    return resource.getResponseField('authorizerName') as unknown as string;
  }

  public get authorizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDefaultAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.SetDefaultAuthorizer.authorizerArn'),
        outputPath: 'authorizerArn',
        parameters: {
          authorizerName: this.input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetDefaultAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotStartAuditMitigationActionsTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotStartAuditMitigationActionsTaskRequest) {
    super(scope, id);
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAuditMitigationActionsTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.StartAuditMitigationActionsTask.taskId'),
        outputPath: 'taskId',
        parameters: {
          taskId: this.input.taskId,
          target: {
            auditTaskId: this.input.target.auditTaskId,
            findingIds: this.input.target.findingIds,
            auditCheckToReasonCodeFilter: this.input.target.auditCheckToReasonCodeFilter,
          },
          auditCheckToActionsMapping: this.input.auditCheckToActionsMapping,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartAuditMitigationActionsTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotStartOnDemandAuditTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotStartOnDemandAuditTaskRequest) {
    super(scope, id);
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startOnDemandAuditTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.StartOnDemandAuditTask.taskId'),
        outputPath: 'taskId',
        parameters: {
          targetCheckNames: this.input.targetCheckNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartOnDemandAuditTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotStartThingRegistrationTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotStartThingRegistrationTaskRequest) {
    super(scope, id);
  }

  public get taskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startThingRegistrationTask',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.StartThingRegistrationTask.taskId'),
        outputPath: 'taskId',
        parameters: {
          templateBody: this.input.templateBody,
          inputFileBucket: this.input.inputFileBucket,
          inputFileKey: this.input.inputFileKey,
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartThingRegistrationTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotTestAuthorization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotTestAuthorizationRequest) {
    super(scope, id);
  }

  public get authResults(): shapes.IotAuthResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testAuthorization',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestAuthorization.authResults'),
        outputPath: 'authResults',
        parameters: {
          principal: this.input.principal,
          cognitoIdentityPoolId: this.input.cognitoIdentityPoolId,
          authInfos: this.input.authInfos,
          clientId: this.input.clientId,
          policyNamesToAdd: this.input.policyNamesToAdd,
          policyNamesToSkip: this.input.policyNamesToSkip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestAuthorization.authResults', props);
    return resource.getResponseField('authResults') as unknown as shapes.IotAuthResult[];
  }

}

export class IotTestInvokeAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotTestInvokeAuthorizerRequest) {
    super(scope, id);
  }

  public get isAuthenticated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestInvokeAuthorizer.isAuthenticated'),
        outputPath: 'isAuthenticated',
        parameters: {
          authorizerName: this.input.authorizerName,
          token: this.input.token,
          tokenSignature: this.input.tokenSignature,
          httpContext: {
            headers: this.input.httpContext?.headers,
            queryString: this.input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.input.mqttContext?.username,
            password: {
            },
            clientId: this.input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.isAuthenticated', props);
    return resource.getResponseField('isAuthenticated') as unknown as boolean;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestInvokeAuthorizer.principalId'),
        outputPath: 'principalId',
        parameters: {
          authorizerName: this.input.authorizerName,
          token: this.input.token,
          tokenSignature: this.input.tokenSignature,
          httpContext: {
            headers: this.input.httpContext?.headers,
            queryString: this.input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.input.mqttContext?.username,
            password: {
            },
            clientId: this.input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.principalId', props);
    return resource.getResponseField('principalId') as unknown as string;
  }

  public get policyDocuments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestInvokeAuthorizer.policyDocuments'),
        outputPath: 'policyDocuments',
        parameters: {
          authorizerName: this.input.authorizerName,
          token: this.input.token,
          tokenSignature: this.input.tokenSignature,
          httpContext: {
            headers: this.input.httpContext?.headers,
            queryString: this.input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.input.mqttContext?.username,
            password: {
            },
            clientId: this.input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.policyDocuments', props);
    return resource.getResponseField('policyDocuments') as unknown as string[];
  }

  public get refreshAfterInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestInvokeAuthorizer.refreshAfterInSeconds'),
        outputPath: 'refreshAfterInSeconds',
        parameters: {
          authorizerName: this.input.authorizerName,
          token: this.input.token,
          tokenSignature: this.input.tokenSignature,
          httpContext: {
            headers: this.input.httpContext?.headers,
            queryString: this.input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.input.mqttContext?.username,
            password: {
            },
            clientId: this.input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.refreshAfterInSeconds', props);
    return resource.getResponseField('refreshAfterInSeconds') as unknown as number;
  }

  public get disconnectAfterInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testInvokeAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TestInvokeAuthorizer.disconnectAfterInSeconds'),
        outputPath: 'disconnectAfterInSeconds',
        parameters: {
          authorizerName: this.input.authorizerName,
          token: this.input.token,
          tokenSignature: this.input.tokenSignature,
          httpContext: {
            headers: this.input.httpContext?.headers,
            queryString: this.input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.input.mqttContext?.username,
            password: {
            },
            clientId: this.input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestInvokeAuthorizer.disconnectAfterInSeconds', props);
    return resource.getResponseField('disconnectAfterInSeconds') as unknown as number;
  }

}

export class IotTransferCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotTransferCertificateRequest) {
    super(scope, id);
  }

  public get transferredCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transferCertificate',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.TransferCertificate.transferredCertificateArn'),
        outputPath: 'transferredCertificateArn',
        parameters: {
          certificateId: this.input.certificateId,
          targetAwsAccount: this.input.targetAwsAccount,
          transferMessage: this.input.transferMessage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransferCertificate.transferredCertificateArn', props);
    return resource.getResponseField('transferredCertificateArn') as unknown as string;
  }

}

export class IotUpdateAuthorizer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateAuthorizerRequest) {
    super(scope, id);
  }

  public get authorizerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateAuthorizer.authorizerName'),
        outputPath: 'authorizerName',
        parameters: {
          authorizerName: this.input.authorizerName,
          authorizerFunctionArn: this.input.authorizerFunctionArn,
          tokenKeyName: this.input.tokenKeyName,
          tokenSigningPublicKeys: this.input.tokenSigningPublicKeys,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authorizerName', props);
    return resource.getResponseField('authorizerName') as unknown as string;
  }

  public get authorizerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuthorizer',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateAuthorizer.authorizerArn'),
        outputPath: 'authorizerArn',
        parameters: {
          authorizerName: this.input.authorizerName,
          authorizerFunctionArn: this.input.authorizerFunctionArn,
          tokenKeyName: this.input.tokenKeyName,
          tokenSigningPublicKeys: this.input.tokenSigningPublicKeys,
          status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotUpdateBillingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateBillingGroupRequest) {
    super(scope, id);
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBillingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateBillingGroup.version'),
        outputPath: 'version',
        parameters: {
          billingGroupName: this.input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.input.billingGroupProperties.billingGroupDescription,
          },
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBillingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotUpdateDimension extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateDimensionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.type'),
        outputPath: 'type',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.type', props);
    return resource.getResponseField('type') as unknown as string;
  }

  public get stringValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.stringValues'),
        outputPath: 'stringValues',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.stringValues', props);
    return resource.getResponseField('stringValues') as unknown as string[];
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDimension',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDimension.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          name: this.input.name,
          stringValues: this.input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDimension.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotUpdateDomainConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateDomainConfigurationRequest) {
    super(scope, id);
  }

  public get domainConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDomainConfiguration.domainConfigurationName'),
        outputPath: 'domainConfigurationName',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
          authorizerConfig: {
            defaultAuthorizerName: this.input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.input.authorizerConfig?.allowAuthorizerOverride,
          },
          domainConfigurationStatus: this.input.domainConfigurationStatus,
          removeAuthorizerConfig: this.input.removeAuthorizerConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainConfiguration.domainConfigurationName', props);
    return resource.getResponseField('domainConfigurationName') as unknown as string;
  }

  public get domainConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainConfiguration',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDomainConfiguration.domainConfigurationArn'),
        outputPath: 'domainConfigurationArn',
        parameters: {
          domainConfigurationName: this.input.domainConfigurationName,
          authorizerConfig: {
            defaultAuthorizerName: this.input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.input.authorizerConfig?.allowAuthorizerOverride,
          },
          domainConfigurationStatus: this.input.domainConfigurationStatus,
          removeAuthorizerConfig: this.input.removeAuthorizerConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainConfiguration.domainConfigurationArn', props);
    return resource.getResponseField('domainConfigurationArn') as unknown as string;
  }

}

export class IotUpdateDynamicThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateDynamicThingGroupRequest) {
    super(scope, id);
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDynamicThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateDynamicThingGroup.version'),
        outputPath: 'version',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties.attributePayload?.attributes,
              merge: this.input.thingGroupProperties.attributePayload?.merge,
            },
          },
          expectedVersion: this.input.expectedVersion,
          indexName: this.input.indexName,
          queryString: this.input.queryString,
          queryVersion: this.input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDynamicThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotUpdateMitigationAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateMitigationActionRequest) {
    super(scope, id);
  }

  public get actionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateMitigationAction.actionArn'),
        outputPath: 'actionArn',
        parameters: {
          actionName: this.input.actionName,
          roleArn: this.input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.input.actionParams?.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.input.actionParams?.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.input.actionParams?.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.input.actionParams?.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.input.actionParams?.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.input.actionParams?.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.input.actionParams?.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.input.actionParams?.publishFindingToSnsParams?.topicArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMitigationAction.actionArn', props);
    return resource.getResponseField('actionArn') as unknown as string;
  }

  public get actionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMitigationAction',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateMitigationAction.actionId'),
        outputPath: 'actionId',
        parameters: {
          actionName: this.input.actionName,
          roleArn: this.input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.input.actionParams?.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.input.actionParams?.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.input.actionParams?.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.input.actionParams?.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.input.actionParams?.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.input.actionParams?.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.input.actionParams?.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.input.actionParams?.publishFindingToSnsParams?.topicArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMitigationAction.actionId', props);
    return resource.getResponseField('actionId') as unknown as string;
  }

}

export class IotUpdateRoleAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateRoleAliasRequest) {
    super(scope, id);
  }

  public get roleAlias(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateRoleAlias.roleAlias'),
        outputPath: 'roleAlias',
        parameters: {
          roleAlias: this.input.roleAlias,
          roleArn: this.input.roleArn,
          credentialDurationSeconds: this.input.credentialDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleAlias.roleAlias', props);
    return resource.getResponseField('roleAlias') as unknown as string;
  }

  public get roleAliasArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoleAlias',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateRoleAlias.roleAliasArn'),
        outputPath: 'roleAliasArn',
        parameters: {
          roleAlias: this.input.roleAlias,
          roleArn: this.input.roleArn,
          credentialDurationSeconds: this.input.credentialDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRoleAlias.roleAliasArn', props);
    return resource.getResponseField('roleAliasArn') as unknown as string;
  }

}

export class IotUpdateScheduledAudit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateScheduledAuditRequest) {
    super(scope, id);
  }

  public get scheduledAuditArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScheduledAudit',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateScheduledAudit.scheduledAuditArn'),
        outputPath: 'scheduledAuditArn',
        parameters: {
          frequency: this.input.frequency,
          dayOfMonth: this.input.dayOfMonth,
          dayOfWeek: this.input.dayOfWeek,
          targetCheckNames: this.input.targetCheckNames,
          scheduledAuditName: this.input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotUpdateSecurityProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateSecurityProfileRequest) {
    super(scope, id);
  }

  public get securityProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.securityProfileName'),
        outputPath: 'securityProfileName',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.securityProfileName', props);
    return resource.getResponseField('securityProfileName') as unknown as string;
  }

  public get securityProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.securityProfileArn'),
        outputPath: 'securityProfileArn',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.securityProfileArn', props);
    return resource.getResponseField('securityProfileArn') as unknown as string;
  }

  public get securityProfileDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.securityProfileDescription'),
        outputPath: 'securityProfileDescription',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.securityProfileDescription', props);
    return resource.getResponseField('securityProfileDescription') as unknown as string;
  }

  public get behaviors(): shapes.IotBehavior[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.behaviors'),
        outputPath: 'behaviors',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.behaviors', props);
    return resource.getResponseField('behaviors') as unknown as shapes.IotBehavior[];
  }

  public get alertTargets(): Record<string, shapes.IotAlertTarget> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.alertTargets'),
        outputPath: 'alertTargets',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.alertTargets', props);
    return resource.getResponseField('alertTargets') as unknown as Record<string, shapes.IotAlertTarget>;
  }

  public get additionalMetricsToRetain(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.additionalMetricsToRetain'),
        outputPath: 'additionalMetricsToRetain',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.additionalMetricsToRetain', props);
    return resource.getResponseField('additionalMetricsToRetain') as unknown as string[];
  }

  public get additionalMetricsToRetainV2(): shapes.IotMetricToRetain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.additionalMetricsToRetainV2'),
        outputPath: 'additionalMetricsToRetainV2',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.additionalMetricsToRetainV2', props);
    return resource.getResponseField('additionalMetricsToRetainV2') as unknown as shapes.IotMetricToRetain[];
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.version'),
        outputPath: 'version',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.creationDate'),
        outputPath: 'creationDate',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.creationDate', props);
    return resource.getResponseField('creationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecurityProfile',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateSecurityProfile.lastModifiedDate'),
        outputPath: 'lastModifiedDate',
        parameters: {
          securityProfileName: this.input.securityProfileName,
          securityProfileDescription: this.input.securityProfileDescription,
          behaviors: this.input.behaviors,
          alertTargets: this.input.alertTargets,
          additionalMetricsToRetain: this.input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.input.additionalMetricsToRetainV2,
          deleteBehaviors: this.input.deleteBehaviors,
          deleteAlertTargets: this.input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecurityProfile.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotUpdateStream extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateStreamRequest) {
    super(scope, id);
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateStream.streamId'),
        outputPath: 'streamId',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStream.streamId', props);
    return resource.getResponseField('streamId') as unknown as string;
  }

  public get streamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateStream.streamArn'),
        outputPath: 'streamArn',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStream.streamArn', props);
    return resource.getResponseField('streamArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateStream.description'),
        outputPath: 'description',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStream.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get streamVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStream',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateStream.streamVersion'),
        outputPath: 'streamVersion',
        parameters: {
          streamId: this.input.streamId,
          description: this.input.description,
          files: this.input.files,
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStream.streamVersion', props);
    return resource.getResponseField('streamVersion') as unknown as number;
  }

}

export class IotUpdateThingGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotUpdateThingGroupRequest) {
    super(scope, id);
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThingGroup',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.UpdateThingGroup.version'),
        outputPath: 'version',
        parameters: {
          thingGroupName: this.input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.input.thingGroupProperties.thingGroupDescription,
            attributePayload: {
              attributes: this.input.thingGroupProperties.attributePayload?.attributes,
              merge: this.input.thingGroupProperties.attributePayload?.merge,
            },
          },
          expectedVersion: this.input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotValidateSecurityProfileBehaviors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IotValidateSecurityProfileBehaviorsRequest) {
    super(scope, id);
  }

  public get valid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateSecurityProfileBehaviors',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ValidateSecurityProfileBehaviors.valid'),
        outputPath: 'valid',
        parameters: {
          behaviors: this.input.behaviors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateSecurityProfileBehaviors.valid', props);
    return resource.getResponseField('valid') as unknown as boolean;
  }

  public get validationErrors(): shapes.IotValidationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateSecurityProfileBehaviors',
        service: 'Iot',
        physicalResourceId: cr.PhysicalResourceId.of('Iot.ValidateSecurityProfileBehaviors.validationErrors'),
        outputPath: 'validationErrors',
        parameters: {
          behaviors: this.input.behaviors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateSecurityProfileBehaviors.validationErrors', props);
    return resource.getResponseField('validationErrors') as unknown as shapes.IotValidationError[];
  }

}

