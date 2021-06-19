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

  public associateTargetsWithJob(input: shapes.IotAssociateTargetsWithJobRequest): IotResponsesAssociateTargetsWithJob {
    return new IotResponsesAssociateTargetsWithJob(this, this.__resources, input);
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

  public cancelJob(input: shapes.IotCancelJobRequest): IotResponsesCancelJob {
    return new IotResponsesCancelJob(this, this.__resources, input);
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

  public createAuthorizer(input: shapes.IotCreateAuthorizerRequest): IotResponsesCreateAuthorizer {
    return new IotResponsesCreateAuthorizer(this, this.__resources, input);
  }

  public createBillingGroup(input: shapes.IotCreateBillingGroupRequest): IotResponsesCreateBillingGroup {
    return new IotResponsesCreateBillingGroup(this, this.__resources, input);
  }

  public createCertificateFromCsr(input: shapes.IotCreateCertificateFromCsrRequest): IotResponsesCreateCertificateFromCsr {
    return new IotResponsesCreateCertificateFromCsr(this, this.__resources, input);
  }

  public createDimension(input: shapes.IotCreateDimensionRequest): IotResponsesCreateDimension {
    return new IotResponsesCreateDimension(this, this.__resources, input);
  }

  public createDomainConfiguration(input: shapes.IotCreateDomainConfigurationRequest): IotResponsesCreateDomainConfiguration {
    return new IotResponsesCreateDomainConfiguration(this, this.__resources, input);
  }

  public createDynamicThingGroup(input: shapes.IotCreateDynamicThingGroupRequest): IotResponsesCreateDynamicThingGroup {
    return new IotResponsesCreateDynamicThingGroup(this, this.__resources, input);
  }

  public createJob(input: shapes.IotCreateJobRequest): IotResponsesCreateJob {
    return new IotResponsesCreateJob(this, this.__resources, input);
  }

  public createKeysAndCertificate(input: shapes.IotCreateKeysAndCertificateRequest): IotResponsesCreateKeysAndCertificate {
    return new IotResponsesCreateKeysAndCertificate(this, this.__resources, input);
  }

  public createMitigationAction(input: shapes.IotCreateMitigationActionRequest): IotResponsesCreateMitigationAction {
    return new IotResponsesCreateMitigationAction(this, this.__resources, input);
  }

  public createOtaUpdate(input: shapes.IotCreateOtaUpdateRequest): IotResponsesCreateOtaUpdate {
    return new IotResponsesCreateOtaUpdate(this, this.__resources, input);
  }

  public createPolicy(input: shapes.IotCreatePolicyRequest): IotResponsesCreatePolicy {
    return new IotResponsesCreatePolicy(this, this.__resources, input);
  }

  public createPolicyVersion(input: shapes.IotCreatePolicyVersionRequest): IotResponsesCreatePolicyVersion {
    return new IotResponsesCreatePolicyVersion(this, this.__resources, input);
  }

  public createProvisioningClaim(input: shapes.IotCreateProvisioningClaimRequest): IotResponsesCreateProvisioningClaim {
    return new IotResponsesCreateProvisioningClaim(this, this.__resources, input);
  }

  public createProvisioningTemplate(input: shapes.IotCreateProvisioningTemplateRequest): IotResponsesCreateProvisioningTemplate {
    return new IotResponsesCreateProvisioningTemplate(this, this.__resources, input);
  }

  public createProvisioningTemplateVersion(input: shapes.IotCreateProvisioningTemplateVersionRequest): IotResponsesCreateProvisioningTemplateVersion {
    return new IotResponsesCreateProvisioningTemplateVersion(this, this.__resources, input);
  }

  public createRoleAlias(input: shapes.IotCreateRoleAliasRequest): IotResponsesCreateRoleAlias {
    return new IotResponsesCreateRoleAlias(this, this.__resources, input);
  }

  public createScheduledAudit(input: shapes.IotCreateScheduledAuditRequest): IotResponsesCreateScheduledAudit {
    return new IotResponsesCreateScheduledAudit(this, this.__resources, input);
  }

  public createSecurityProfile(input: shapes.IotCreateSecurityProfileRequest): IotResponsesCreateSecurityProfile {
    return new IotResponsesCreateSecurityProfile(this, this.__resources, input);
  }

  public createStream(input: shapes.IotCreateStreamRequest): IotResponsesCreateStream {
    return new IotResponsesCreateStream(this, this.__resources, input);
  }

  public createThing(input: shapes.IotCreateThingRequest): IotResponsesCreateThing {
    return new IotResponsesCreateThing(this, this.__resources, input);
  }

  public createThingGroup(input: shapes.IotCreateThingGroupRequest): IotResponsesCreateThingGroup {
    return new IotResponsesCreateThingGroup(this, this.__resources, input);
  }

  public createThingType(input: shapes.IotCreateThingTypeRequest): IotResponsesCreateThingType {
    return new IotResponsesCreateThingType(this, this.__resources, input);
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

  public createTopicRuleDestination(input: shapes.IotCreateTopicRuleDestinationRequest): IotResponsesCreateTopicRuleDestination {
    return new IotResponsesCreateTopicRuleDestination(this, this.__resources, input);
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

  public describeAccountAuditConfiguration(): IotResponsesDescribeAccountAuditConfiguration {
    return new IotResponsesDescribeAccountAuditConfiguration(this, this.__resources);
  }

  public describeAuditFinding(input: shapes.IotDescribeAuditFindingRequest): IotResponsesDescribeAuditFinding {
    return new IotResponsesDescribeAuditFinding(this, this.__resources, input);
  }

  public describeAuditMitigationActionsTask(input: shapes.IotDescribeAuditMitigationActionsTaskRequest): IotResponsesDescribeAuditMitigationActionsTask {
    return new IotResponsesDescribeAuditMitigationActionsTask(this, this.__resources, input);
  }

  public describeAuditSuppression(input: shapes.IotDescribeAuditSuppressionRequest): IotResponsesDescribeAuditSuppression {
    return new IotResponsesDescribeAuditSuppression(this, this.__resources, input);
  }

  public describeAuditTask(input: shapes.IotDescribeAuditTaskRequest): IotResponsesDescribeAuditTask {
    return new IotResponsesDescribeAuditTask(this, this.__resources, input);
  }

  public describeAuthorizer(input: shapes.IotDescribeAuthorizerRequest): IotResponsesDescribeAuthorizer {
    return new IotResponsesDescribeAuthorizer(this, this.__resources, input);
  }

  public describeBillingGroup(input: shapes.IotDescribeBillingGroupRequest): IotResponsesDescribeBillingGroup {
    return new IotResponsesDescribeBillingGroup(this, this.__resources, input);
  }

  public describeCaCertificate(input: shapes.IotDescribeCaCertificateRequest): IotResponsesDescribeCaCertificate {
    return new IotResponsesDescribeCaCertificate(this, this.__resources, input);
  }

  public describeCertificate(input: shapes.IotDescribeCertificateRequest): IotResponsesDescribeCertificate {
    return new IotResponsesDescribeCertificate(this, this.__resources, input);
  }

  public describeDefaultAuthorizer(): IotResponsesDescribeDefaultAuthorizer {
    return new IotResponsesDescribeDefaultAuthorizer(this, this.__resources);
  }

  public describeDimension(input: shapes.IotDescribeDimensionRequest): IotResponsesDescribeDimension {
    return new IotResponsesDescribeDimension(this, this.__resources, input);
  }

  public describeDomainConfiguration(input: shapes.IotDescribeDomainConfigurationRequest): IotResponsesDescribeDomainConfiguration {
    return new IotResponsesDescribeDomainConfiguration(this, this.__resources, input);
  }

  public describeEndpoint(input: shapes.IotDescribeEndpointRequest): IotResponsesDescribeEndpoint {
    return new IotResponsesDescribeEndpoint(this, this.__resources, input);
  }

  public describeEventConfigurations(): IotResponsesDescribeEventConfigurations {
    return new IotResponsesDescribeEventConfigurations(this, this.__resources);
  }

  public describeIndex(input: shapes.IotDescribeIndexRequest): IotResponsesDescribeIndex {
    return new IotResponsesDescribeIndex(this, this.__resources, input);
  }

  public describeJob(input: shapes.IotDescribeJobRequest): IotResponsesDescribeJob {
    return new IotResponsesDescribeJob(this, this.__resources, input);
  }

  public describeJobExecution(input: shapes.IotDescribeJobExecutionRequest): IotResponsesDescribeJobExecution {
    return new IotResponsesDescribeJobExecution(this, this.__resources, input);
  }

  public describeMitigationAction(input: shapes.IotDescribeMitigationActionRequest): IotResponsesDescribeMitigationAction {
    return new IotResponsesDescribeMitigationAction(this, this.__resources, input);
  }

  public describeProvisioningTemplate(input: shapes.IotDescribeProvisioningTemplateRequest): IotResponsesDescribeProvisioningTemplate {
    return new IotResponsesDescribeProvisioningTemplate(this, this.__resources, input);
  }

  public describeProvisioningTemplateVersion(input: shapes.IotDescribeProvisioningTemplateVersionRequest): IotResponsesDescribeProvisioningTemplateVersion {
    return new IotResponsesDescribeProvisioningTemplateVersion(this, this.__resources, input);
  }

  public describeRoleAlias(input: shapes.IotDescribeRoleAliasRequest): IotResponsesDescribeRoleAlias {
    return new IotResponsesDescribeRoleAlias(this, this.__resources, input);
  }

  public describeScheduledAudit(input: shapes.IotDescribeScheduledAuditRequest): IotResponsesDescribeScheduledAudit {
    return new IotResponsesDescribeScheduledAudit(this, this.__resources, input);
  }

  public describeSecurityProfile(input: shapes.IotDescribeSecurityProfileRequest): IotResponsesDescribeSecurityProfile {
    return new IotResponsesDescribeSecurityProfile(this, this.__resources, input);
  }

  public describeStream(input: shapes.IotDescribeStreamRequest): IotResponsesDescribeStream {
    return new IotResponsesDescribeStream(this, this.__resources, input);
  }

  public describeThing(input: shapes.IotDescribeThingRequest): IotResponsesDescribeThing {
    return new IotResponsesDescribeThing(this, this.__resources, input);
  }

  public describeThingGroup(input: shapes.IotDescribeThingGroupRequest): IotResponsesDescribeThingGroup {
    return new IotResponsesDescribeThingGroup(this, this.__resources, input);
  }

  public describeThingRegistrationTask(input: shapes.IotDescribeThingRegistrationTaskRequest): IotResponsesDescribeThingRegistrationTask {
    return new IotResponsesDescribeThingRegistrationTask(this, this.__resources, input);
  }

  public describeThingType(input: shapes.IotDescribeThingTypeRequest): IotResponsesDescribeThingType {
    return new IotResponsesDescribeThingType(this, this.__resources, input);
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

  public fetchCardinality(input: shapes.IotGetCardinalityRequest): IotResponsesFetchCardinality {
    return new IotResponsesFetchCardinality(this, this.__resources, input);
  }

  public fetchEffectivePolicies(input: shapes.IotGetEffectivePoliciesRequest): IotResponsesFetchEffectivePolicies {
    return new IotResponsesFetchEffectivePolicies(this, this.__resources, input);
  }

  public fetchIndexingConfiguration(): IotResponsesFetchIndexingConfiguration {
    return new IotResponsesFetchIndexingConfiguration(this, this.__resources);
  }

  public fetchJobDocument(input: shapes.IotGetJobDocumentRequest): IotResponsesFetchJobDocument {
    return new IotResponsesFetchJobDocument(this, this.__resources, input);
  }

  public fetchLoggingOptions(): IotResponsesFetchLoggingOptions {
    return new IotResponsesFetchLoggingOptions(this, this.__resources);
  }

  public fetchOtaUpdate(input: shapes.IotGetOtaUpdateRequest): IotResponsesFetchOtaUpdate {
    return new IotResponsesFetchOtaUpdate(this, this.__resources, input);
  }

  public fetchPercentiles(input: shapes.IotGetPercentilesRequest): IotResponsesFetchPercentiles {
    return new IotResponsesFetchPercentiles(this, this.__resources, input);
  }

  public fetchPolicy(input: shapes.IotGetPolicyRequest): IotResponsesFetchPolicy {
    return new IotResponsesFetchPolicy(this, this.__resources, input);
  }

  public fetchPolicyVersion(input: shapes.IotGetPolicyVersionRequest): IotResponsesFetchPolicyVersion {
    return new IotResponsesFetchPolicyVersion(this, this.__resources, input);
  }

  public fetchRegistrationCode(): IotResponsesFetchRegistrationCode {
    return new IotResponsesFetchRegistrationCode(this, this.__resources);
  }

  public fetchStatistics(input: shapes.IotGetStatisticsRequest): IotResponsesFetchStatistics {
    return new IotResponsesFetchStatistics(this, this.__resources, input);
  }

  public fetchTopicRule(input: shapes.IotGetTopicRuleRequest): IotResponsesFetchTopicRule {
    return new IotResponsesFetchTopicRule(this, this.__resources, input);
  }

  public fetchTopicRuleDestination(input: shapes.IotGetTopicRuleDestinationRequest): IotResponsesFetchTopicRuleDestination {
    return new IotResponsesFetchTopicRuleDestination(this, this.__resources, input);
  }

  public fetchV2LoggingOptions(): IotResponsesFetchV2LoggingOptions {
    return new IotResponsesFetchV2LoggingOptions(this, this.__resources);
  }

  public listActiveViolations(input: shapes.IotListActiveViolationsRequest): IotResponsesListActiveViolations {
    return new IotResponsesListActiveViolations(this, this.__resources, input);
  }

  public listAttachedPolicies(input: shapes.IotListAttachedPoliciesRequest): IotResponsesListAttachedPolicies {
    return new IotResponsesListAttachedPolicies(this, this.__resources, input);
  }

  public listAuditFindings(input: shapes.IotListAuditFindingsRequest): IotResponsesListAuditFindings {
    return new IotResponsesListAuditFindings(this, this.__resources, input);
  }

  public listAuditMitigationActionsExecutions(input: shapes.IotListAuditMitigationActionsExecutionsRequest): IotResponsesListAuditMitigationActionsExecutions {
    return new IotResponsesListAuditMitigationActionsExecutions(this, this.__resources, input);
  }

  public listAuditMitigationActionsTasks(input: shapes.IotListAuditMitigationActionsTasksRequest): IotResponsesListAuditMitigationActionsTasks {
    return new IotResponsesListAuditMitigationActionsTasks(this, this.__resources, input);
  }

  public listAuditSuppressions(input: shapes.IotListAuditSuppressionsRequest): IotResponsesListAuditSuppressions {
    return new IotResponsesListAuditSuppressions(this, this.__resources, input);
  }

  public listAuditTasks(input: shapes.IotListAuditTasksRequest): IotResponsesListAuditTasks {
    return new IotResponsesListAuditTasks(this, this.__resources, input);
  }

  public listAuthorizers(input: shapes.IotListAuthorizersRequest): IotResponsesListAuthorizers {
    return new IotResponsesListAuthorizers(this, this.__resources, input);
  }

  public listBillingGroups(input: shapes.IotListBillingGroupsRequest): IotResponsesListBillingGroups {
    return new IotResponsesListBillingGroups(this, this.__resources, input);
  }

  public listCaCertificates(input: shapes.IotListCaCertificatesRequest): IotResponsesListCaCertificates {
    return new IotResponsesListCaCertificates(this, this.__resources, input);
  }

  public listCertificates(input: shapes.IotListCertificatesRequest): IotResponsesListCertificates {
    return new IotResponsesListCertificates(this, this.__resources, input);
  }

  public listCertificatesByCa(input: shapes.IotListCertificatesByCaRequest): IotResponsesListCertificatesByCa {
    return new IotResponsesListCertificatesByCa(this, this.__resources, input);
  }

  public listDimensions(input: shapes.IotListDimensionsRequest): IotResponsesListDimensions {
    return new IotResponsesListDimensions(this, this.__resources, input);
  }

  public listDomainConfigurations(input: shapes.IotListDomainConfigurationsRequest): IotResponsesListDomainConfigurations {
    return new IotResponsesListDomainConfigurations(this, this.__resources, input);
  }

  public listIndices(input: shapes.IotListIndicesRequest): IotResponsesListIndices {
    return new IotResponsesListIndices(this, this.__resources, input);
  }

  public listJobExecutionsForJob(input: shapes.IotListJobExecutionsForJobRequest): IotResponsesListJobExecutionsForJob {
    return new IotResponsesListJobExecutionsForJob(this, this.__resources, input);
  }

  public listJobExecutionsForThing(input: shapes.IotListJobExecutionsForThingRequest): IotResponsesListJobExecutionsForThing {
    return new IotResponsesListJobExecutionsForThing(this, this.__resources, input);
  }

  public listJobs(input: shapes.IotListJobsRequest): IotResponsesListJobs {
    return new IotResponsesListJobs(this, this.__resources, input);
  }

  public listMitigationActions(input: shapes.IotListMitigationActionsRequest): IotResponsesListMitigationActions {
    return new IotResponsesListMitigationActions(this, this.__resources, input);
  }

  public listOtaUpdates(input: shapes.IotListOtaUpdatesRequest): IotResponsesListOtaUpdates {
    return new IotResponsesListOtaUpdates(this, this.__resources, input);
  }

  public listOutgoingCertificates(input: shapes.IotListOutgoingCertificatesRequest): IotResponsesListOutgoingCertificates {
    return new IotResponsesListOutgoingCertificates(this, this.__resources, input);
  }

  public listPolicies(input: shapes.IotListPoliciesRequest): IotResponsesListPolicies {
    return new IotResponsesListPolicies(this, this.__resources, input);
  }

  public listPolicyPrincipals(input: shapes.IotListPolicyPrincipalsRequest): IotResponsesListPolicyPrincipals {
    return new IotResponsesListPolicyPrincipals(this, this.__resources, input);
  }

  public listPolicyVersions(input: shapes.IotListPolicyVersionsRequest): IotResponsesListPolicyVersions {
    return new IotResponsesListPolicyVersions(this, this.__resources, input);
  }

  public listPrincipalPolicies(input: shapes.IotListPrincipalPoliciesRequest): IotResponsesListPrincipalPolicies {
    return new IotResponsesListPrincipalPolicies(this, this.__resources, input);
  }

  public listPrincipalThings(input: shapes.IotListPrincipalThingsRequest): IotResponsesListPrincipalThings {
    return new IotResponsesListPrincipalThings(this, this.__resources, input);
  }

  public listProvisioningTemplateVersions(input: shapes.IotListProvisioningTemplateVersionsRequest): IotResponsesListProvisioningTemplateVersions {
    return new IotResponsesListProvisioningTemplateVersions(this, this.__resources, input);
  }

  public listProvisioningTemplates(input: shapes.IotListProvisioningTemplatesRequest): IotResponsesListProvisioningTemplates {
    return new IotResponsesListProvisioningTemplates(this, this.__resources, input);
  }

  public listRoleAliases(input: shapes.IotListRoleAliasesRequest): IotResponsesListRoleAliases {
    return new IotResponsesListRoleAliases(this, this.__resources, input);
  }

  public listScheduledAudits(input: shapes.IotListScheduledAuditsRequest): IotResponsesListScheduledAudits {
    return new IotResponsesListScheduledAudits(this, this.__resources, input);
  }

  public listSecurityProfiles(input: shapes.IotListSecurityProfilesRequest): IotResponsesListSecurityProfiles {
    return new IotResponsesListSecurityProfiles(this, this.__resources, input);
  }

  public listSecurityProfilesForTarget(input: shapes.IotListSecurityProfilesForTargetRequest): IotResponsesListSecurityProfilesForTarget {
    return new IotResponsesListSecurityProfilesForTarget(this, this.__resources, input);
  }

  public listStreams(input: shapes.IotListStreamsRequest): IotResponsesListStreams {
    return new IotResponsesListStreams(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IotListTagsForResourceRequest): IotResponsesListTagsForResource {
    return new IotResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTargetsForPolicy(input: shapes.IotListTargetsForPolicyRequest): IotResponsesListTargetsForPolicy {
    return new IotResponsesListTargetsForPolicy(this, this.__resources, input);
  }

  public listTargetsForSecurityProfile(input: shapes.IotListTargetsForSecurityProfileRequest): IotResponsesListTargetsForSecurityProfile {
    return new IotResponsesListTargetsForSecurityProfile(this, this.__resources, input);
  }

  public listThingGroups(input: shapes.IotListThingGroupsRequest): IotResponsesListThingGroups {
    return new IotResponsesListThingGroups(this, this.__resources, input);
  }

  public listThingGroupsForThing(input: shapes.IotListThingGroupsForThingRequest): IotResponsesListThingGroupsForThing {
    return new IotResponsesListThingGroupsForThing(this, this.__resources, input);
  }

  public listThingPrincipals(input: shapes.IotListThingPrincipalsRequest): IotResponsesListThingPrincipals {
    return new IotResponsesListThingPrincipals(this, this.__resources, input);
  }

  public listThingRegistrationTaskReports(input: shapes.IotListThingRegistrationTaskReportsRequest): IotResponsesListThingRegistrationTaskReports {
    return new IotResponsesListThingRegistrationTaskReports(this, this.__resources, input);
  }

  public listThingRegistrationTasks(input: shapes.IotListThingRegistrationTasksRequest): IotResponsesListThingRegistrationTasks {
    return new IotResponsesListThingRegistrationTasks(this, this.__resources, input);
  }

  public listThingTypes(input: shapes.IotListThingTypesRequest): IotResponsesListThingTypes {
    return new IotResponsesListThingTypes(this, this.__resources, input);
  }

  public listThings(input: shapes.IotListThingsRequest): IotResponsesListThings {
    return new IotResponsesListThings(this, this.__resources, input);
  }

  public listThingsInBillingGroup(input: shapes.IotListThingsInBillingGroupRequest): IotResponsesListThingsInBillingGroup {
    return new IotResponsesListThingsInBillingGroup(this, this.__resources, input);
  }

  public listThingsInThingGroup(input: shapes.IotListThingsInThingGroupRequest): IotResponsesListThingsInThingGroup {
    return new IotResponsesListThingsInThingGroup(this, this.__resources, input);
  }

  public listTopicRuleDestinations(input: shapes.IotListTopicRuleDestinationsRequest): IotResponsesListTopicRuleDestinations {
    return new IotResponsesListTopicRuleDestinations(this, this.__resources, input);
  }

  public listTopicRules(input: shapes.IotListTopicRulesRequest): IotResponsesListTopicRules {
    return new IotResponsesListTopicRules(this, this.__resources, input);
  }

  public listV2LoggingLevels(input: shapes.IotListV2LoggingLevelsRequest): IotResponsesListV2LoggingLevels {
    return new IotResponsesListV2LoggingLevels(this, this.__resources, input);
  }

  public listViolationEvents(input: shapes.IotListViolationEventsRequest): IotResponsesListViolationEvents {
    return new IotResponsesListViolationEvents(this, this.__resources, input);
  }

  public registerCaCertificate(input: shapes.IotRegisterCaCertificateRequest): IotResponsesRegisterCaCertificate {
    return new IotResponsesRegisterCaCertificate(this, this.__resources, input);
  }

  public registerCertificate(input: shapes.IotRegisterCertificateRequest): IotResponsesRegisterCertificate {
    return new IotResponsesRegisterCertificate(this, this.__resources, input);
  }

  public registerCertificateWithoutCa(input: shapes.IotRegisterCertificateWithoutCaRequest): IotResponsesRegisterCertificateWithoutCa {
    return new IotResponsesRegisterCertificateWithoutCa(this, this.__resources, input);
  }

  public registerThing(input: shapes.IotRegisterThingRequest): IotResponsesRegisterThing {
    return new IotResponsesRegisterThing(this, this.__resources, input);
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

  public searchIndex(input: shapes.IotSearchIndexRequest): IotResponsesSearchIndex {
    return new IotResponsesSearchIndex(this, this.__resources, input);
  }

  public setDefaultAuthorizer(input: shapes.IotSetDefaultAuthorizerRequest): IotResponsesSetDefaultAuthorizer {
    return new IotResponsesSetDefaultAuthorizer(this, this.__resources, input);
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

  public startAuditMitigationActionsTask(input: shapes.IotStartAuditMitigationActionsTaskRequest): IotResponsesStartAuditMitigationActionsTask {
    return new IotResponsesStartAuditMitigationActionsTask(this, this.__resources, input);
  }

  public startOnDemandAuditTask(input: shapes.IotStartOnDemandAuditTaskRequest): IotResponsesStartOnDemandAuditTask {
    return new IotResponsesStartOnDemandAuditTask(this, this.__resources, input);
  }

  public startThingRegistrationTask(input: shapes.IotStartThingRegistrationTaskRequest): IotResponsesStartThingRegistrationTask {
    return new IotResponsesStartThingRegistrationTask(this, this.__resources, input);
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

  public testAuthorization(input: shapes.IotTestAuthorizationRequest): IotResponsesTestAuthorization {
    return new IotResponsesTestAuthorization(this, this.__resources, input);
  }

  public testInvokeAuthorizer(input: shapes.IotTestInvokeAuthorizerRequest): IotResponsesTestInvokeAuthorizer {
    return new IotResponsesTestInvokeAuthorizer(this, this.__resources, input);
  }

  public transferCertificate(input: shapes.IotTransferCertificateRequest): IotResponsesTransferCertificate {
    return new IotResponsesTransferCertificate(this, this.__resources, input);
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

  public updateAuthorizer(input: shapes.IotUpdateAuthorizerRequest): IotResponsesUpdateAuthorizer {
    return new IotResponsesUpdateAuthorizer(this, this.__resources, input);
  }

  public updateBillingGroup(input: shapes.IotUpdateBillingGroupRequest): IotResponsesUpdateBillingGroup {
    return new IotResponsesUpdateBillingGroup(this, this.__resources, input);
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

  public updateDimension(input: shapes.IotUpdateDimensionRequest): IotResponsesUpdateDimension {
    return new IotResponsesUpdateDimension(this, this.__resources, input);
  }

  public updateDomainConfiguration(input: shapes.IotUpdateDomainConfigurationRequest): IotResponsesUpdateDomainConfiguration {
    return new IotResponsesUpdateDomainConfiguration(this, this.__resources, input);
  }

  public updateDynamicThingGroup(input: shapes.IotUpdateDynamicThingGroupRequest): IotResponsesUpdateDynamicThingGroup {
    return new IotResponsesUpdateDynamicThingGroup(this, this.__resources, input);
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

  public updateMitigationAction(input: shapes.IotUpdateMitigationActionRequest): IotResponsesUpdateMitigationAction {
    return new IotResponsesUpdateMitigationAction(this, this.__resources, input);
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

  public updateRoleAlias(input: shapes.IotUpdateRoleAliasRequest): IotResponsesUpdateRoleAlias {
    return new IotResponsesUpdateRoleAlias(this, this.__resources, input);
  }

  public updateScheduledAudit(input: shapes.IotUpdateScheduledAuditRequest): IotResponsesUpdateScheduledAudit {
    return new IotResponsesUpdateScheduledAudit(this, this.__resources, input);
  }

  public updateSecurityProfile(input: shapes.IotUpdateSecurityProfileRequest): IotResponsesUpdateSecurityProfile {
    return new IotResponsesUpdateSecurityProfile(this, this.__resources, input);
  }

  public updateStream(input: shapes.IotUpdateStreamRequest): IotResponsesUpdateStream {
    return new IotResponsesUpdateStream(this, this.__resources, input);
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

  public updateThingGroup(input: shapes.IotUpdateThingGroupRequest): IotResponsesUpdateThingGroup {
    return new IotResponsesUpdateThingGroup(this, this.__resources, input);
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

  public validateSecurityProfileBehaviors(input: shapes.IotValidateSecurityProfileBehaviorsRequest): IotResponsesValidateSecurityProfileBehaviors {
    return new IotResponsesValidateSecurityProfileBehaviors(this, this.__resources, input);
  }

}

export class IotResponsesAssociateTargetsWithJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotAssociateTargetsWithJobRequest) {
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
          targets: this.__input.targets,
          jobId: this.__input.jobId,
          comment: this.__input.comment,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTargetsWithJob.jobArn', props);
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
          targets: this.__input.targets,
          jobId: this.__input.jobId,
          comment: this.__input.comment,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTargetsWithJob.jobId', props);
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
          targets: this.__input.targets,
          jobId: this.__input.jobId,
          comment: this.__input.comment,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTargetsWithJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotResponsesCancelJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCancelJobRequest) {
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
          jobId: this.__input.jobId,
          reasonCode: this.__input.reasonCode,
          comment: this.__input.comment,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJob.jobArn', props);
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
          jobId: this.__input.jobId,
          reasonCode: this.__input.reasonCode,
          comment: this.__input.comment,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJob.jobId', props);
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
          jobId: this.__input.jobId,
          reasonCode: this.__input.reasonCode,
          comment: this.__input.comment,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotResponsesCreateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateAuthorizerRequest) {
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
          authorizerName: this.__input.authorizerName,
          authorizerFunctionArn: this.__input.authorizerFunctionArn,
          tokenKeyName: this.__input.tokenKeyName,
          tokenSigningPublicKeys: this.__input.tokenSigningPublicKeys,
          status: this.__input.status,
          tags: this.__input.tags,
          signingDisabled: this.__input.signingDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authorizerName', props);
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
          authorizerName: this.__input.authorizerName,
          authorizerFunctionArn: this.__input.authorizerFunctionArn,
          tokenKeyName: this.__input.tokenKeyName,
          tokenSigningPublicKeys: this.__input.tokenSigningPublicKeys,
          status: this.__input.status,
          tags: this.__input.tags,
          signingDisabled: this.__input.signingDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotResponsesCreateBillingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.__input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBillingGroup.billingGroupName', props);
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
          billingGroupName: this.__input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.__input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBillingGroup.billingGroupArn', props);
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
          billingGroupName: this.__input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.__input.billingGroupProperties?.billingGroupDescription,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBillingGroup.billingGroupId', props);
    return resource.getResponseField('billingGroupId') as unknown as string;
  }

}

export class IotResponsesCreateCertificateFromCsr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateCertificateFromCsrRequest) {
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
          certificateSigningRequest: this.__input.certificateSigningRequest,
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificateFromCsr.certificateArn', props);
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
          certificateSigningRequest: this.__input.certificateSigningRequest,
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificateFromCsr.certificateId', props);
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
          certificateSigningRequest: this.__input.certificateSigningRequest,
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificateFromCsr.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

}

export class IotResponsesCreateDimension {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateDimensionRequest) {
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
          name: this.__input.name,
          type: this.__input.type,
          stringValues: this.__input.stringValues,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDimension.name', props);
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
          name: this.__input.name,
          type: this.__input.type,
          stringValues: this.__input.stringValues,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDimension.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class IotResponsesCreateDomainConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateDomainConfigurationRequest) {
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
          domainConfigurationName: this.__input.domainConfigurationName,
          domainName: this.__input.domainName,
          serverCertificateArns: this.__input.serverCertificateArns,
          validationCertificateArn: this.__input.validationCertificateArn,
          authorizerConfig: {
            defaultAuthorizerName: this.__input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.__input.authorizerConfig?.allowAuthorizerOverride,
          },
          serviceType: this.__input.serviceType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainConfiguration.domainConfigurationName', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
          domainName: this.__input.domainName,
          serverCertificateArns: this.__input.serverCertificateArns,
          validationCertificateArn: this.__input.validationCertificateArn,
          authorizerConfig: {
            defaultAuthorizerName: this.__input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.__input.authorizerConfig?.allowAuthorizerOverride,
          },
          serviceType: this.__input.serviceType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainConfiguration.domainConfigurationArn', props);
    return resource.getResponseField('domainConfigurationArn') as unknown as string;
  }

}

export class IotResponsesCreateDynamicThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateDynamicThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.thingGroupName', props);
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.thingGroupArn', props);
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.thingGroupId', props);
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.indexName', props);
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.queryString', props);
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDynamicThingGroup.queryVersion', props);
    return resource.getResponseField('queryVersion') as unknown as string;
  }

}

export class IotResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateJobRequest) {
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
          jobId: this.__input.jobId,
          targets: this.__input.targets,
          documentSource: this.__input.documentSource,
          document: this.__input.document,
          description: this.__input.description,
          presignedUrlConfig: {
            roleArn: this.__input.presignedUrlConfig?.roleArn,
            expiresInSec: this.__input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.__input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.__input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.__input.tags,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.jobArn', props);
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
          jobId: this.__input.jobId,
          targets: this.__input.targets,
          documentSource: this.__input.documentSource,
          document: this.__input.document,
          description: this.__input.description,
          presignedUrlConfig: {
            roleArn: this.__input.presignedUrlConfig?.roleArn,
            expiresInSec: this.__input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.__input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.__input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.__input.tags,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.jobId', props);
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
          jobId: this.__input.jobId,
          targets: this.__input.targets,
          documentSource: this.__input.documentSource,
          document: this.__input.document,
          description: this.__input.description,
          presignedUrlConfig: {
            roleArn: this.__input.presignedUrlConfig?.roleArn,
            expiresInSec: this.__input.presignedUrlConfig?.expiresInSec,
          },
          targetSelection: this.__input.targetSelection,
          jobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.jobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.jobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          abortConfig: {
            criteriaList: this.__input.abortConfig?.criteriaList,
          },
          timeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.timeoutConfig?.inProgressTimeoutInMinutes,
          },
          tags: this.__input.tags,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotResponsesCreateKeysAndCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateKeysAndCertificateRequest) {
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
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeysAndCertificate.certificateArn', props);
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
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeysAndCertificate.certificateId', props);
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
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeysAndCertificate.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

  public get keyPair(): IotResponsesCreateKeysAndCertificateKeyPair {
    return new IotResponsesCreateKeysAndCertificateKeyPair(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesCreateKeysAndCertificateKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateKeysAndCertificateRequest) {
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
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeysAndCertificate.keyPair.PublicKey', props);
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
          setAsActive: this.__input.setAsActive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeysAndCertificate.keyPair.PrivateKey', props);
    return resource.getResponseField('keyPair.PrivateKey') as unknown as string;
  }

}

export class IotResponsesCreateMitigationAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateMitigationActionRequest) {
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
          actionName: this.__input.actionName,
          roleArn: this.__input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.__input.actionParams.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.__input.actionParams.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.__input.actionParams.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.__input.actionParams.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.__input.actionParams.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.__input.actionParams.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.__input.actionParams.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.__input.actionParams.publishFindingToSnsParams?.topicArn,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMitigationAction.actionArn', props);
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
          actionName: this.__input.actionName,
          roleArn: this.__input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.__input.actionParams.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.__input.actionParams.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.__input.actionParams.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.__input.actionParams.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.__input.actionParams.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.__input.actionParams.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.__input.actionParams.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.__input.actionParams.publishFindingToSnsParams?.topicArn,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMitigationAction.actionId', props);
    return resource.getResponseField('actionId') as unknown as string;
  }

}

export class IotResponsesCreateOtaUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
          description: this.__input.description,
          targets: this.__input.targets,
          protocols: this.__input.protocols,
          targetSelection: this.__input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.__input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.__input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          additionalParameters: this.__input.additionalParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOTAUpdate.otaUpdateId', props);
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
          otaUpdateId: this.__input.otaUpdateId,
          description: this.__input.description,
          targets: this.__input.targets,
          protocols: this.__input.protocols,
          targetSelection: this.__input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.__input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.__input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          additionalParameters: this.__input.additionalParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOTAUpdate.awsIotJobId', props);
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
          otaUpdateId: this.__input.otaUpdateId,
          description: this.__input.description,
          targets: this.__input.targets,
          protocols: this.__input.protocols,
          targetSelection: this.__input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.__input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.__input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          additionalParameters: this.__input.additionalParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOTAUpdate.otaUpdateArn', props);
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
          otaUpdateId: this.__input.otaUpdateId,
          description: this.__input.description,
          targets: this.__input.targets,
          protocols: this.__input.protocols,
          targetSelection: this.__input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.__input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.__input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          additionalParameters: this.__input.additionalParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOTAUpdate.awsIotJobArn', props);
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
          otaUpdateId: this.__input.otaUpdateId,
          description: this.__input.description,
          targets: this.__input.targets,
          protocols: this.__input.protocols,
          targetSelection: this.__input.targetSelection,
          awsJobExecutionsRolloutConfig: {
            maximumPerMinute: this.__input.awsJobExecutionsRolloutConfig?.maximumPerMinute,
            exponentialRate: {
              baseRatePerMinute: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.baseRatePerMinute,
              incrementFactor: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.incrementFactor,
              rateIncreaseCriteria: {
                numberOfNotifiedThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfNotifiedThings,
                numberOfSucceededThings: this.__input.awsJobExecutionsRolloutConfig?.exponentialRate?.rateIncreaseCriteria.numberOfSucceededThings,
              },
            },
          },
          awsJobPresignedUrlConfig: {
            expiresInSec: this.__input.awsJobPresignedUrlConfig?.expiresInSec,
          },
          awsJobAbortConfig: {
            abortCriteriaList: this.__input.awsJobAbortConfig?.abortCriteriaList,
          },
          awsJobTimeoutConfig: {
            inProgressTimeoutInMinutes: this.__input.awsJobTimeoutConfig?.inProgressTimeoutInMinutes,
          },
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          additionalParameters: this.__input.additionalParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOTAUpdate.otaUpdateStatus', props);
    return resource.getResponseField('otaUpdateStatus') as unknown as string;
  }

}

export class IotResponsesCreatePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreatePolicyRequest) {
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.policyName', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.policyArn', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.policyDocument', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicy.policyVersionId', props);
    return resource.getResponseField('policyVersionId') as unknown as string;
  }

}

export class IotResponsesCreatePolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreatePolicyVersionRequest) {
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.policyArn', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.policyDocument', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.policyVersionId', props);
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
          policyName: this.__input.policyName,
          policyDocument: this.__input.policyDocument,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePolicyVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotResponsesCreateProvisioningClaim {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateProvisioningClaimRequest) {
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningClaim.certificateId', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningClaim.certificatePem', props);
    return resource.getResponseField('certificatePem') as unknown as string;
  }

  public get keyPair(): IotResponsesCreateProvisioningClaimKeyPair {
    return new IotResponsesCreateProvisioningClaimKeyPair(this.__scope, this.__resources, this.__input);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningClaim.expiration', props);
    return resource.getResponseField('expiration') as unknown as string;
  }

}

export class IotResponsesCreateProvisioningClaimKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateProvisioningClaimRequest) {
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningClaim.keyPair.PublicKey', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningClaim.keyPair.PrivateKey', props);
    return resource.getResponseField('keyPair.PrivateKey') as unknown as string;
  }

}

export class IotResponsesCreateProvisioningTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateProvisioningTemplateRequest) {
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
          templateName: this.__input.templateName,
          description: this.__input.description,
          templateBody: this.__input.templateBody,
          enabled: this.__input.enabled,
          provisioningRoleArn: this.__input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.__input.preProvisioningHook?.payloadVersion,
            targetArn: this.__input.preProvisioningHook?.targetArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplate.templateArn', props);
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
          templateName: this.__input.templateName,
          description: this.__input.description,
          templateBody: this.__input.templateBody,
          enabled: this.__input.enabled,
          provisioningRoleArn: this.__input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.__input.preProvisioningHook?.payloadVersion,
            targetArn: this.__input.preProvisioningHook?.targetArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplate.templateName', props);
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
          templateName: this.__input.templateName,
          description: this.__input.description,
          templateBody: this.__input.templateBody,
          enabled: this.__input.enabled,
          provisioningRoleArn: this.__input.provisioningRoleArn,
          preProvisioningHook: {
            payloadVersion: this.__input.preProvisioningHook?.payloadVersion,
            targetArn: this.__input.preProvisioningHook?.targetArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplate.defaultVersionId', props);
    return resource.getResponseField('defaultVersionId') as unknown as number;
  }

}

export class IotResponsesCreateProvisioningTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateProvisioningTemplateVersionRequest) {
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
          templateName: this.__input.templateName,
          templateBody: this.__input.templateBody,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplateVersion.templateArn', props);
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
          templateName: this.__input.templateName,
          templateBody: this.__input.templateBody,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplateVersion.templateName', props);
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
          templateName: this.__input.templateName,
          templateBody: this.__input.templateBody,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplateVersion.versionId', props);
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
          templateName: this.__input.templateName,
          templateBody: this.__input.templateBody,
          setAsDefault: this.__input.setAsDefault,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningTemplateVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotResponsesCreateRoleAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateRoleAliasRequest) {
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
          roleAlias: this.__input.roleAlias,
          roleArn: this.__input.roleArn,
          credentialDurationSeconds: this.__input.credentialDurationSeconds,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoleAlias.roleAlias', props);
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
          roleAlias: this.__input.roleAlias,
          roleArn: this.__input.roleArn,
          credentialDurationSeconds: this.__input.credentialDurationSeconds,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoleAlias.roleAliasArn', props);
    return resource.getResponseField('roleAliasArn') as unknown as string;
  }

}

export class IotResponsesCreateScheduledAudit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateScheduledAuditRequest) {
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
          frequency: this.__input.frequency,
          dayOfMonth: this.__input.dayOfMonth,
          dayOfWeek: this.__input.dayOfWeek,
          targetCheckNames: this.__input.targetCheckNames,
          scheduledAuditName: this.__input.scheduledAuditName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotResponsesCreateSecurityProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateSecurityProfileRequest) {
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecurityProfile.securityProfileName', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecurityProfile.securityProfileArn', props);
    return resource.getResponseField('securityProfileArn') as unknown as string;
  }

}

export class IotResponsesCreateStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateStreamRequest) {
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStream.streamId', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStream.streamArn', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStream.description', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStream.streamVersion', props);
    return resource.getResponseField('streamVersion') as unknown as number;
  }

}

export class IotResponsesCreateThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateThingRequest) {
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
          thingName: this.__input.thingName,
          thingTypeName: this.__input.thingTypeName,
          attributePayload: {
            attributes: this.__input.attributePayload?.attributes,
            merge: this.__input.attributePayload?.merge,
          },
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThing.thingName', props);
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
          thingName: this.__input.thingName,
          thingTypeName: this.__input.thingTypeName,
          attributePayload: {
            attributes: this.__input.attributePayload?.attributes,
            merge: this.__input.attributePayload?.merge,
          },
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThing.thingArn', props);
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
          thingName: this.__input.thingName,
          thingTypeName: this.__input.thingTypeName,
          attributePayload: {
            attributes: this.__input.attributePayload?.attributes,
            merge: this.__input.attributePayload?.merge,
          },
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThing.thingId', props);
    return resource.getResponseField('thingId') as unknown as string;
  }

}

export class IotResponsesCreateThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
          parentGroupName: this.__input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingGroup.thingGroupName', props);
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
          thingGroupName: this.__input.thingGroupName,
          parentGroupName: this.__input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingGroup.thingGroupArn', props);
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
          thingGroupName: this.__input.thingGroupName,
          parentGroupName: this.__input.parentGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties?.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties?.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties?.attributePayload?.merge,
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingGroup.thingGroupId', props);
    return resource.getResponseField('thingGroupId') as unknown as string;
  }

}

export class IotResponsesCreateThingType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateThingTypeRequest) {
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
          thingTypeName: this.__input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.__input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.__input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingType.thingTypeName', props);
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
          thingTypeName: this.__input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.__input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.__input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingType.thingTypeArn', props);
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
          thingTypeName: this.__input.thingTypeName,
          thingTypeProperties: {
            thingTypeDescription: this.__input.thingTypeProperties?.thingTypeDescription,
            searchableAttributes: this.__input.thingTypeProperties?.searchableAttributes,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThingType.thingTypeId', props);
    return resource.getResponseField('thingTypeId') as unknown as string;
  }

}

export class IotResponsesCreateTopicRuleDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateTopicRuleDestinationRequest) {
  }

  public get topicRuleDestination(): IotResponsesCreateTopicRuleDestinationTopicRuleDestination {
    return new IotResponsesCreateTopicRuleDestinationTopicRuleDestination(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesCreateTopicRuleDestinationTopicRuleDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateTopicRuleDestinationRequest) {
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
              confirmationUrl: this.__input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTopicRuleDestination.topicRuleDestination.arn', props);
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
              confirmationUrl: this.__input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTopicRuleDestination.topicRuleDestination.status', props);
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
              confirmationUrl: this.__input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTopicRuleDestination.topicRuleDestination.statusReason', props);
    return resource.getResponseField('topicRuleDestination.statusReason') as unknown as string;
  }

  public get httpUrlProperties(): IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {
    return new IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesCreateTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotCreateTopicRuleDestinationRequest) {
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
              confirmationUrl: this.__input.destinationConfiguration.httpUrlConfiguration?.confirmationUrl,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl', props);
    return resource.getResponseField('topicRuleDestination.httpUrlProperties.confirmationUrl') as unknown as string;
  }

}

export class IotResponsesDescribeAccountAuditConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAuditConfiguration.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAuditConfiguration.auditNotificationTargetConfigurations', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountAuditConfiguration.auditCheckConfigurations', props);
    return resource.getResponseField('auditCheckConfigurations') as unknown as Record<string, shapes.IotAuditCheckConfiguration>;
  }

}

export class IotResponsesDescribeAuditFinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditFindingRequest) {
  }

  public get finding(): IotResponsesDescribeAuditFindingFinding {
    return new IotResponsesDescribeAuditFindingFinding(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeAuditFindingFinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditFindingRequest) {
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.findingId', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.taskId', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.checkName', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.taskStartTime', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.findingTime', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.severity', props);
    return resource.getResponseField('finding.severity') as unknown as string;
  }

  public get nonCompliantResource(): IotResponsesDescribeAuditFindingFindingNonCompliantResource {
    return new IotResponsesDescribeAuditFindingFindingNonCompliantResource(this.__scope, this.__resources, this.__input);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.relatedResources', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.reasonForNonCompliance', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.reasonForNonComplianceCode', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.isSuppressed', props);
    return resource.getResponseField('finding.isSuppressed') as unknown as boolean;
  }

}

export class IotResponsesDescribeAuditFindingFindingNonCompliantResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditFindingRequest) {
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceType', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceType') as unknown as string;
  }

  public get resourceIdentifier(): IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier {
    return new IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier(this.__scope, this.__resources, this.__input);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.additionalInfo', props);
    return resource.getResponseField('finding.nonCompliantResource.additionalInfo') as unknown as Record<string, string>;
  }

}

export class IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditFindingRequest) {
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.deviceCertificateId', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.caCertificateId', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.cognitoIdentityPoolId', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.clientId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.clientId') as unknown as string;
  }

  public get policyVersionIdentifier(): IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier {
    return new IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier(this.__scope, this.__resources, this.__input);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.account', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.iamRoleArn', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.roleAliasArn', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.roleAliasArn') as unknown as string;
  }

}

export class IotResponsesDescribeAuditFindingFindingNonCompliantResourceResourceIdentifierPolicyVersionIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditFindingRequest) {
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyName', props);
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
          findingId: this.__input.findingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditFinding.finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId', props);
    return resource.getResponseField('finding.nonCompliantResource.resourceIdentifier.policyVersionIdentifier.policyVersionId') as unknown as string;
  }

}

export class IotResponsesDescribeAuditMitigationActionsTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditMitigationActionsTaskRequest) {
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.taskStatus', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.startTime', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.endTime', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.taskStatistics', props);
    return resource.getResponseField('taskStatistics') as unknown as Record<string, shapes.IotTaskStatisticsForAuditCheck>;
  }

  public get target(): IotResponsesDescribeAuditMitigationActionsTaskTarget {
    return new IotResponsesDescribeAuditMitigationActionsTaskTarget(this.__scope, this.__resources, this.__input);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.auditCheckToActionsMapping', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.actionsDefinition', props);
    return resource.getResponseField('actionsDefinition') as unknown as shapes.IotMitigationAction[];
  }

}

export class IotResponsesDescribeAuditMitigationActionsTaskTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditMitigationActionsTaskRequest) {
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.target.auditTaskId', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.target.findingIds', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditMitigationActionsTask.target.auditCheckToReasonCodeFilter', props);
    return resource.getResponseField('target.auditCheckToReasonCodeFilter') as unknown as Record<string, string[]>;
  }

}

export class IotResponsesDescribeAuditSuppression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditSuppressionRequest) {
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.checkName', props);
    return resource.getResponseField('checkName') as unknown as string;
  }

  public get resourceIdentifier(): IotResponsesDescribeAuditSuppressionResourceIdentifier {
    return new IotResponsesDescribeAuditSuppressionResourceIdentifier(this.__scope, this.__resources, this.__input);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.expirationDate', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.suppressIndefinitely', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

}

export class IotResponsesDescribeAuditSuppressionResourceIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditSuppressionRequest) {
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.deviceCertificateId', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.caCertificateId', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.cognitoIdentityPoolId', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.clientId', props);
    return resource.getResponseField('resourceIdentifier.clientId') as unknown as string;
  }

  public get policyVersionIdentifier(): IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier {
    return new IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier(this.__scope, this.__resources, this.__input);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.account', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.iamRoleArn', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.roleAliasArn', props);
    return resource.getResponseField('resourceIdentifier.roleAliasArn') as unknown as string;
  }

}

export class IotResponsesDescribeAuditSuppressionResourceIdentifierPolicyVersionIdentifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditSuppressionRequest) {
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyName', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier.account,
            iamRoleArn: this.__input.resourceIdentifier.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier.roleAliasArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditSuppression.resourceIdentifier.policyVersionIdentifier.policyVersionId', props);
    return resource.getResponseField('resourceIdentifier.policyVersionIdentifier.policyVersionId') as unknown as string;
  }

}

export class IotResponsesDescribeAuditTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditTaskRequest) {
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatus', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskType', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStartTime', props);
    return resource.getResponseField('taskStartTime') as unknown as string;
  }

  public get taskStatistics(): IotResponsesDescribeAuditTaskTaskStatistics {
    return new IotResponsesDescribeAuditTaskTaskStatistics(this.__scope, this.__resources, this.__input);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.scheduledAuditName', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.auditDetails', props);
    return resource.getResponseField('auditDetails') as unknown as Record<string, shapes.IotAuditCheckDetails>;
  }

}

export class IotResponsesDescribeAuditTaskTaskStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuditTaskRequest) {
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.totalChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.inProgressChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.waitingForDataCollectionChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.compliantChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.nonCompliantChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.failedChecks', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditTask.taskStatistics.canceledChecks', props);
    return resource.getResponseField('taskStatistics.canceledChecks') as unknown as number;
  }

}

export class IotResponsesDescribeAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuthorizerRequest) {
  }

  public get authorizerDescription(): IotResponsesDescribeAuthorizerAuthorizerDescription {
    return new IotResponsesDescribeAuthorizerAuthorizerDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeAuthorizerAuthorizerDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeAuthorizerRequest) {
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.authorizerName', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.authorizerArn', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.authorizerFunctionArn', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.tokenKeyName', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.tokenSigningPublicKeys', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.status', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.creationDate', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.lastModifiedDate', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuthorizer.authorizerDescription.signingDisabled', props);
    return resource.getResponseField('authorizerDescription.signingDisabled') as unknown as boolean;
  }

}

export class IotResponsesDescribeBillingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.billingGroupName', props);
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.billingGroupId', props);
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.billingGroupArn', props);
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get billingGroupProperties(): IotResponsesDescribeBillingGroupBillingGroupProperties {
    return new IotResponsesDescribeBillingGroupBillingGroupProperties(this.__scope, this.__resources, this.__input);
  }

  public get billingGroupMetadata(): IotResponsesDescribeBillingGroupBillingGroupMetadata {
    return new IotResponsesDescribeBillingGroupBillingGroupMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeBillingGroupBillingGroupProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.billingGroupProperties.billingGroupDescription', props);
    return resource.getResponseField('billingGroupProperties.billingGroupDescription') as unknown as string;
  }

}

export class IotResponsesDescribeBillingGroupBillingGroupMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBillingGroup.billingGroupMetadata.creationDate', props);
    return resource.getResponseField('billingGroupMetadata.creationDate') as unknown as string;
  }

}

export class IotResponsesDescribeCaCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCaCertificateRequest) {
  }

  public get certificateDescription(): IotResponsesDescribeCaCertificateCertificateDescription {
    return new IotResponsesDescribeCaCertificateCertificateDescription(this.__scope, this.__resources, this.__input);
  }

  public get registrationConfig(): IotResponsesDescribeCaCertificateRegistrationConfig {
    return new IotResponsesDescribeCaCertificateRegistrationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeCaCertificateCertificateDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCaCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.certificateArn', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.certificateId', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.status', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.certificatePem', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.ownedBy', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.creationDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.autoRegistrationStatus', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.lastModifiedDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.customerVersion', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.generationId', props);
    return resource.getResponseField('certificateDescription.generationId') as unknown as string;
  }

  public get validity(): IotResponsesDescribeCaCertificateCertificateDescriptionValidity {
    return new IotResponsesDescribeCaCertificateCertificateDescriptionValidity(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeCaCertificateCertificateDescriptionValidity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCaCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.validity.notBefore', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.certificateDescription.validity.notAfter', props);
    return resource.getResponseField('certificateDescription.validity.notAfter') as unknown as string;
  }

}

export class IotResponsesDescribeCaCertificateRegistrationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCaCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.registrationConfig.templateBody', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCACertificate.registrationConfig.roleArn', props);
    return resource.getResponseField('registrationConfig.roleArn') as unknown as string;
  }

}

export class IotResponsesDescribeCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCertificateRequest) {
  }

  public get certificateDescription(): IotResponsesDescribeCertificateCertificateDescription {
    return new IotResponsesDescribeCertificateCertificateDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeCertificateCertificateDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.certificateArn', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.certificateId', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.caCertificateId', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.status', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.certificatePem', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.ownedBy', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.previousOwnedBy', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.creationDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.lastModifiedDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.customerVersion', props);
    return resource.getResponseField('certificateDescription.customerVersion') as unknown as number;
  }

  public get transferData(): IotResponsesDescribeCertificateCertificateDescriptionTransferData {
    return new IotResponsesDescribeCertificateCertificateDescriptionTransferData(this.__scope, this.__resources, this.__input);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.generationId', props);
    return resource.getResponseField('certificateDescription.generationId') as unknown as string;
  }

  public get validity(): IotResponsesDescribeCertificateCertificateDescriptionValidity {
    return new IotResponsesDescribeCertificateCertificateDescriptionValidity(this.__scope, this.__resources, this.__input);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.certificateMode', props);
    return resource.getResponseField('certificateDescription.certificateMode') as unknown as string;
  }

}

export class IotResponsesDescribeCertificateCertificateDescriptionTransferData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.transferData.transferMessage', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.transferData.rejectReason', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.transferData.transferDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.transferData.acceptDate', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.transferData.rejectDate', props);
    return resource.getResponseField('certificateDescription.transferData.rejectDate') as unknown as string;
  }

}

export class IotResponsesDescribeCertificateCertificateDescriptionValidity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeCertificateRequest) {
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.validity.notBefore', props);
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
          certificateId: this.__input.certificateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificate.certificateDescription.validity.notAfter', props);
    return resource.getResponseField('certificateDescription.validity.notAfter') as unknown as string;
  }

}

export class IotResponsesDescribeDefaultAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get authorizerDescription(): IotResponsesDescribeDefaultAuthorizerAuthorizerDescription {
    return new IotResponsesDescribeDefaultAuthorizerAuthorizerDescription(this.__scope, this.__resources);
  }

}

export class IotResponsesDescribeDefaultAuthorizerAuthorizerDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.authorizerFunctionArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.tokenKeyName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.tokenSigningPublicKeys', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.status', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.creationDate', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.lastModifiedDate', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultAuthorizer.authorizerDescription.signingDisabled', props);
    return resource.getResponseField('authorizerDescription.signingDisabled') as unknown as boolean;
  }

}

export class IotResponsesDescribeDimension {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeDimensionRequest) {
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.name', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.arn', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.type', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.stringValues', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.creationDate', props);
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
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDimension.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesDescribeDomainConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeDomainConfigurationRequest) {
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.domainConfigurationName', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.domainConfigurationArn', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.domainName', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.serverCertificates', props);
    return resource.getResponseField('serverCertificates') as unknown as shapes.IotServerCertificateSummary[];
  }

  public get authorizerConfig(): IotResponsesDescribeDomainConfigurationAuthorizerConfig {
    return new IotResponsesDescribeDomainConfigurationAuthorizerConfig(this.__scope, this.__resources, this.__input);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.domainConfigurationStatus', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.serviceType', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.domainType', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.lastStatusChangeDate', props);
    return resource.getResponseField('lastStatusChangeDate') as unknown as string;
  }

}

export class IotResponsesDescribeDomainConfigurationAuthorizerConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeDomainConfigurationRequest) {
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.authorizerConfig.defaultAuthorizerName', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainConfiguration.authorizerConfig.allowAuthorizerOverride', props);
    return resource.getResponseField('authorizerConfig.allowAuthorizerOverride') as unknown as boolean;
  }

}

export class IotResponsesDescribeEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeEndpointRequest) {
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
          endpointType: this.__input.endpointType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.endpointAddress', props);
    return resource.getResponseField('endpointAddress') as unknown as string;
  }

}

export class IotResponsesDescribeEventConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventConfigurations.eventConfigurations', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventConfigurations.creationDate', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventConfigurations.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesDescribeIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeIndexRequest) {
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
          indexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIndex.indexName', props);
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
          indexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIndex.indexStatus', props);
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
          indexName: this.__input.indexName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIndex.schema', props);
    return resource.getResponseField('schema') as unknown as string;
  }

}

export class IotResponsesDescribeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.documentSource', props);
    return resource.getResponseField('documentSource') as unknown as string;
  }

  public get job(): IotResponsesDescribeJobJob {
    return new IotResponsesDescribeJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobArn', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobId', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.targetSelection', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.status', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.forceCanceled', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.reasonCode', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.comment', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.targets', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.description', props);
    return resource.getResponseField('job.description') as unknown as string;
  }

  public get presignedUrlConfig(): IotResponsesDescribeJobJobPresignedUrlConfig {
    return new IotResponsesDescribeJobJobPresignedUrlConfig(this.__scope, this.__resources, this.__input);
  }

  public get jobExecutionsRolloutConfig(): IotResponsesDescribeJobJobJobExecutionsRolloutConfig {
    return new IotResponsesDescribeJobJobJobExecutionsRolloutConfig(this.__scope, this.__resources, this.__input);
  }

  public get abortConfig(): IotResponsesDescribeJobJobAbortConfig {
    return new IotResponsesDescribeJobJobAbortConfig(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.createdAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.lastUpdatedAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.completedAt', props);
    return resource.getResponseField('job.completedAt') as unknown as string;
  }

  public get jobProcessDetails(): IotResponsesDescribeJobJobJobProcessDetails {
    return new IotResponsesDescribeJobJobJobProcessDetails(this.__scope, this.__resources, this.__input);
  }

  public get timeoutConfig(): IotResponsesDescribeJobJobTimeoutConfig {
    return new IotResponsesDescribeJobJobTimeoutConfig(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.namespaceId', props);
    return resource.getResponseField('job.namespaceId') as unknown as string;
  }

}

export class IotResponsesDescribeJobJobPresignedUrlConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.presignedUrlConfig.roleArn', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.presignedUrlConfig.expiresInSec', props);
    return resource.getResponseField('job.presignedUrlConfig.expiresInSec') as unknown as number;
  }

}

export class IotResponsesDescribeJobJobJobExecutionsRolloutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobExecutionsRolloutConfig.maximumPerMinute', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.maximumPerMinute') as unknown as number;
  }

  public get exponentialRate(): IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate {
    return new IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.incrementFactor') as unknown as number;
  }

  public get rateIncreaseCriteria(): IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    return new IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeJobJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings', props);
    return resource.getResponseField('job.jobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings') as unknown as number;
  }

}

export class IotResponsesDescribeJobJobAbortConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.abortConfig.criteriaList', props);
    return resource.getResponseField('job.abortConfig.criteriaList') as unknown as shapes.IotAbortCriteria[];
  }

}

export class IotResponsesDescribeJobJobJobProcessDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.processingTargets', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfCanceledThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfSucceededThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfFailedThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfRejectedThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfQueuedThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfInProgressThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfRemovedThings', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.jobProcessDetails.numberOfTimedOutThings', props);
    return resource.getResponseField('job.jobProcessDetails.numberOfTimedOutThings') as unknown as number;
  }

}

export class IotResponsesDescribeJobJobTimeoutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.job.timeoutConfig.inProgressTimeoutInMinutes', props);
    return resource.getResponseField('job.timeoutConfig.inProgressTimeoutInMinutes') as unknown as number;
  }

}

export class IotResponsesDescribeJobExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobExecutionRequest) {
  }

  public get execution(): IotResponsesDescribeJobExecutionExecution {
    return new IotResponsesDescribeJobExecutionExecution(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeJobExecutionExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobExecutionRequest) {
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.jobId', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.status', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.forceCanceled', props);
    return resource.getResponseField('execution.forceCanceled') as unknown as boolean;
  }

  public get statusDetails(): IotResponsesDescribeJobExecutionExecutionStatusDetails {
    return new IotResponsesDescribeJobExecutionExecutionStatusDetails(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.thingArn', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.queuedAt', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.startedAt', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.lastUpdatedAt', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.executionNumber', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.versionNumber', props);
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.approximateSecondsBeforeTimedOut', props);
    return resource.getResponseField('execution.approximateSecondsBeforeTimedOut') as unknown as number;
  }

}

export class IotResponsesDescribeJobExecutionExecutionStatusDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeJobExecutionRequest) {
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
          jobId: this.__input.jobId,
          thingName: this.__input.thingName,
          executionNumber: this.__input.executionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobExecution.execution.statusDetails.detailsMap', props);
    return resource.getResponseField('execution.statusDetails.detailsMap') as unknown as Record<string, string>;
  }

}

export class IotResponsesDescribeMitigationAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionName', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionType', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionArn', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionId', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.roleArn', props);
    return resource.getResponseField('roleArn') as unknown as string;
  }

  public get actionParams(): IotResponsesDescribeMitigationActionActionParams {
    return new IotResponsesDescribeMitigationActionActionParams(this.__scope, this.__resources, this.__input);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.creationDate', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesDescribeMitigationActionActionParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
  }

  public get updateDeviceCertificateParams(): IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams {
    return new IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams(this.__scope, this.__resources, this.__input);
  }

  public get updateCaCertificateParams(): IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams {
    return new IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams(this.__scope, this.__resources, this.__input);
  }

  public get addThingsToThingGroupParams(): IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams {
    return new IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams(this.__scope, this.__resources, this.__input);
  }

  public get replaceDefaultPolicyVersionParams(): IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
    return new IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams(this.__scope, this.__resources, this.__input);
  }

  public get enableIoTLoggingParams(): IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams {
    return new IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams(this.__scope, this.__resources, this.__input);
  }

  public get publishFindingToSnsParams(): IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams {
    return new IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeMitigationActionActionParamsUpdateDeviceCertificateParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.updateDeviceCertificateParams.action', props);
    return resource.getResponseField('actionParams.updateDeviceCertificateParams.action') as unknown as string;
  }

}

export class IotResponsesDescribeMitigationActionActionParamsUpdateCaCertificateParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.updateCACertificateParams.action', props);
    return resource.getResponseField('actionParams.updateCACertificateParams.action') as unknown as string;
  }

}

export class IotResponsesDescribeMitigationActionActionParamsAddThingsToThingGroupParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.addThingsToThingGroupParams.thingGroupNames', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.addThingsToThingGroupParams.overrideDynamicGroups', props);
    return resource.getResponseField('actionParams.addThingsToThingGroupParams.overrideDynamicGroups') as unknown as boolean;
  }

}

export class IotResponsesDescribeMitigationActionActionParamsReplaceDefaultPolicyVersionParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.replaceDefaultPolicyVersionParams.templateName', props);
    return resource.getResponseField('actionParams.replaceDefaultPolicyVersionParams.templateName') as unknown as string;
  }

}

export class IotResponsesDescribeMitigationActionActionParamsEnableIoTLoggingParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.enableIoTLoggingParams.roleArnForLogging', props);
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.enableIoTLoggingParams.logLevel', props);
    return resource.getResponseField('actionParams.enableIoTLoggingParams.logLevel') as unknown as string;
  }

}

export class IotResponsesDescribeMitigationActionActionParamsPublishFindingToSnsParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeMitigationActionRequest) {
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
          actionName: this.__input.actionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMitigationAction.actionParams.publishFindingToSnsParams.topicArn', props);
    return resource.getResponseField('actionParams.publishFindingToSnsParams.topicArn') as unknown as string;
  }

}

export class IotResponsesDescribeProvisioningTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeProvisioningTemplateRequest) {
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.templateArn', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.templateName', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.description', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.creationDate', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.lastModifiedDate', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.defaultVersionId', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.templateBody', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.enabled', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.provisioningRoleArn', props);
    return resource.getResponseField('provisioningRoleArn') as unknown as string;
  }

  public get preProvisioningHook(): IotResponsesDescribeProvisioningTemplatePreProvisioningHook {
    return new IotResponsesDescribeProvisioningTemplatePreProvisioningHook(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeProvisioningTemplatePreProvisioningHook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeProvisioningTemplateRequest) {
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.preProvisioningHook.payloadVersion', props);
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
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplate.preProvisioningHook.targetArn', props);
    return resource.getResponseField('preProvisioningHook.targetArn') as unknown as string;
  }

}

export class IotResponsesDescribeProvisioningTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeProvisioningTemplateVersionRequest) {
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
          templateName: this.__input.templateName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplateVersion.versionId', props);
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
          templateName: this.__input.templateName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplateVersion.creationDate', props);
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
          templateName: this.__input.templateName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplateVersion.templateBody', props);
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
          templateName: this.__input.templateName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningTemplateVersion.isDefaultVersion', props);
    return resource.getResponseField('isDefaultVersion') as unknown as boolean;
  }

}

export class IotResponsesDescribeRoleAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeRoleAliasRequest) {
  }

  public get roleAliasDescription(): IotResponsesDescribeRoleAliasRoleAliasDescription {
    return new IotResponsesDescribeRoleAliasRoleAliasDescription(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeRoleAliasRoleAliasDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeRoleAliasRequest) {
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.roleAlias', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.roleAliasArn', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.roleArn', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.owner', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.credentialDurationSeconds', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.creationDate', props);
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
          roleAlias: this.__input.roleAlias,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRoleAlias.roleAliasDescription.lastModifiedDate', props);
    return resource.getResponseField('roleAliasDescription.lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesDescribeScheduledAudit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeScheduledAuditRequest) {
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.frequency', props);
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.dayOfMonth', props);
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.dayOfWeek', props);
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.targetCheckNames', props);
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.scheduledAuditName', props);
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
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotResponsesDescribeSecurityProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeSecurityProfileRequest) {
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.securityProfileName', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.securityProfileArn', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.securityProfileDescription', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.behaviors', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.alertTargets', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.additionalMetricsToRetain', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.additionalMetricsToRetainV2', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.version', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.creationDate', props);
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
          securityProfileName: this.__input.securityProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityProfile.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesDescribeStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeStreamRequest) {
  }

  public get streamInfo(): IotResponsesDescribeStreamStreamInfo {
    return new IotResponsesDescribeStreamStreamInfo(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeStreamStreamInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeStreamRequest) {
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.streamId', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.streamArn', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.streamVersion', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.description', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.files', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.createdAt', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.lastUpdatedAt', props);
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
          streamId: this.__input.streamId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStream.streamInfo.roleArn', props);
    return resource.getResponseField('streamInfo.roleArn') as unknown as string;
  }

}

export class IotResponsesDescribeThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingRequest) {
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.defaultClientId', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.thingName', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.thingId', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.thingArn', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.thingTypeName', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.attributes', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.version', props);
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
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThing.billingGroupName', props);
    return resource.getResponseField('billingGroupName') as unknown as string;
  }

}

export class IotResponsesDescribeThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupName', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupId', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupArn', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

  public get thingGroupProperties(): IotResponsesDescribeThingGroupThingGroupProperties {
    return new IotResponsesDescribeThingGroupThingGroupProperties(this.__scope, this.__resources, this.__input);
  }

  public get thingGroupMetadata(): IotResponsesDescribeThingGroupThingGroupMetadata {
    return new IotResponsesDescribeThingGroupThingGroupMetadata(this.__scope, this.__resources, this.__input);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.indexName', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.queryString', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.queryVersion', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class IotResponsesDescribeThingGroupThingGroupProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupProperties.thingGroupDescription', props);
    return resource.getResponseField('thingGroupProperties.thingGroupDescription') as unknown as string;
  }

  public get attributePayload(): IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload {
    return new IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeThingGroupThingGroupPropertiesAttributePayload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupProperties.attributePayload.attributes', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupProperties.attributePayload.merge', props);
    return resource.getResponseField('thingGroupProperties.attributePayload.merge') as unknown as boolean;
  }

}

export class IotResponsesDescribeThingGroupThingGroupMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupMetadata.parentGroupName', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupMetadata.rootToParentThingGroups', props);
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
          thingGroupName: this.__input.thingGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingGroup.thingGroupMetadata.creationDate', props);
    return resource.getResponseField('thingGroupMetadata.creationDate') as unknown as string;
  }

}

export class IotResponsesDescribeThingRegistrationTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingRegistrationTaskRequest) {
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.taskId', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.creationDate', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.lastModifiedDate', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.templateBody', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.inputFileBucket', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.inputFileKey', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.roleArn', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.status', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.message', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.successCount', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.failureCount', props);
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
          taskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingRegistrationTask.percentageProgress', props);
    return resource.getResponseField('percentageProgress') as unknown as number;
  }

}

export class IotResponsesDescribeThingType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingTypeRequest) {
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeName', props);
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeId', props);
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeArn', props);
    return resource.getResponseField('thingTypeArn') as unknown as string;
  }

  public get thingTypeProperties(): IotResponsesDescribeThingTypeThingTypeProperties {
    return new IotResponsesDescribeThingTypeThingTypeProperties(this.__scope, this.__resources, this.__input);
  }

  public get thingTypeMetadata(): IotResponsesDescribeThingTypeThingTypeMetadata {
    return new IotResponsesDescribeThingTypeThingTypeMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesDescribeThingTypeThingTypeProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingTypeRequest) {
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeProperties.thingTypeDescription', props);
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeProperties.searchableAttributes', props);
    return resource.getResponseField('thingTypeProperties.searchableAttributes') as unknown as string[];
  }

}

export class IotResponsesDescribeThingTypeThingTypeMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotDescribeThingTypeRequest) {
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeMetadata.deprecated', props);
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeMetadata.deprecationDate', props);
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
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThingType.thingTypeMetadata.creationDate', props);
    return resource.getResponseField('thingTypeMetadata.creationDate') as unknown as string;
  }

}

export class IotResponsesFetchCardinality {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetCardinalityRequest) {
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCardinality.cardinality', props);
    return resource.getResponseField('cardinality') as unknown as number;
  }

}

export class IotResponsesFetchEffectivePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetEffectivePoliciesRequest) {
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
          principal: this.__input.principal,
          cognitoIdentityPoolId: this.__input.cognitoIdentityPoolId,
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEffectivePolicies.effectivePolicies', props);
    return resource.getResponseField('effectivePolicies') as unknown as shapes.IotEffectivePolicy[];
  }

}

export class IotResponsesFetchIndexingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get thingIndexingConfiguration(): IotResponsesFetchIndexingConfigurationThingIndexingConfiguration {
    return new IotResponsesFetchIndexingConfigurationThingIndexingConfiguration(this.__scope, this.__resources);
  }

  public get thingGroupIndexingConfiguration(): IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration {
    return new IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration(this.__scope, this.__resources);
  }

}

export class IotResponsesFetchIndexingConfigurationThingIndexingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingIndexingConfiguration.thingIndexingMode', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingIndexingConfiguration.thingConnectivityIndexingMode', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingIndexingConfiguration.managedFields', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingIndexingConfiguration.customFields', props);
    return resource.getResponseField('thingIndexingConfiguration.customFields') as unknown as shapes.IotField[];
  }

}

export class IotResponsesFetchIndexingConfigurationThingGroupIndexingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.thingGroupIndexingMode', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.managedFields', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIndexingConfiguration.thingGroupIndexingConfiguration.customFields', props);
    return resource.getResponseField('thingGroupIndexingConfiguration.customFields') as unknown as shapes.IotField[];
  }

}

export class IotResponsesFetchJobDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetJobDocumentRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobDocument.document', props);
    return resource.getResponseField('document') as unknown as string;
  }

}

export class IotResponsesFetchLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingOptions.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoggingOptions.logLevel', props);
    return resource.getResponseField('logLevel') as unknown as string;
  }

}

export class IotResponsesFetchOtaUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
  }

  public get otaUpdateInfo(): IotResponsesFetchOtaUpdateOtaUpdateInfo {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfo(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.otaUpdateId', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.otaUpdateArn', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.creationDate', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.lastModifiedDate', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.description', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.targets', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.protocols', props);
    return resource.getResponseField('otaUpdateInfo.protocols') as unknown as string[];
  }

  public get awsJobExecutionsRolloutConfig(): IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig(this.__scope, this.__resources, this.__input);
  }

  public get awsJobPresignedUrlConfig(): IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig(this.__scope, this.__resources, this.__input);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.targetSelection', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.otaUpdateFiles', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.otaUpdateStatus', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsIotJobId', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsIotJobArn', props);
    return resource.getResponseField('otaUpdateInfo.awsIotJobArn') as unknown as string;
  }

  public get errorInfo(): IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo(this.__scope, this.__resources, this.__input);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.additionalParameters', props);
    return resource.getResponseField('otaUpdateInfo.additionalParameters') as unknown as Record<string, string>;
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.maximumPerMinute') as unknown as number;
  }

  public get exponentialRate(): IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.baseRatePerMinute', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.incrementFactor') as unknown as number;
  }

  public get rateIncreaseCriteria(): IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    return new IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfNotifiedThings', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings', props);
    return resource.getResponseField('otaUpdateInfo.awsJobExecutionsRolloutConfig.exponentialRate.rateIncreaseCriteria.numberOfSucceededThings') as unknown as number;
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfoAwsJobPresignedUrlConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec', props);
    return resource.getResponseField('otaUpdateInfo.awsJobPresignedUrlConfig.expiresInSec') as unknown as number;
  }

}

export class IotResponsesFetchOtaUpdateOtaUpdateInfoErrorInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetOtaUpdateRequest) {
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.errorInfo.code', props);
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
          otaUpdateId: this.__input.otaUpdateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOTAUpdate.otaUpdateInfo.errorInfo.message', props);
    return resource.getResponseField('otaUpdateInfo.errorInfo.message') as unknown as string;
  }

}

export class IotResponsesFetchPercentiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetPercentilesRequest) {
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
          percents: this.__input.percents,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPercentiles.percentiles', props);
    return resource.getResponseField('percentiles') as unknown as shapes.IotPercentPair[];
  }

}

export class IotResponsesFetchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetPolicyRequest) {
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.policyName', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.policyArn', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.policyDocument', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.defaultVersionId', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.creationDate', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.lastModifiedDate', props);
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicy.generationId', props);
    return resource.getResponseField('generationId') as unknown as string;
  }

}

export class IotResponsesFetchPolicyVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetPolicyVersionRequest) {
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.policyArn', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.policyName', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.policyDocument', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.policyVersionId', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.isDefaultVersion', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.creationDate', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.lastModifiedDate', props);
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
          policyName: this.__input.policyName,
          policyVersionId: this.__input.policyVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPolicyVersion.generationId', props);
    return resource.getResponseField('generationId') as unknown as string;
  }

}

export class IotResponsesFetchRegistrationCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistrationCode.registrationCode', props);
    return resource.getResponseField('registrationCode') as unknown as string;
  }

}

export class IotResponsesFetchStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetStatisticsRequest) {
  }

  public get statistics(): IotResponsesFetchStatisticsStatistics {
    return new IotResponsesFetchStatisticsStatistics(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchStatisticsStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetStatisticsRequest) {
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.count', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.average', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.sum', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.minimum', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.maximum', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.sumOfSquares', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.variance', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          aggregationField: this.__input.aggregationField,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatistics.statistics.stdDeviation', props);
    return resource.getResponseField('statistics.stdDeviation') as unknown as number;
  }

}

export class IotResponsesFetchTopicRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.ruleArn', props);
    return resource.getResponseField('ruleArn') as unknown as string;
  }

  public get rule(): IotResponsesFetchTopicRuleRule {
    return new IotResponsesFetchTopicRuleRule(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.ruleName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.sql', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.description', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.createdAt', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.actions', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.ruleDisabled', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.awsIotSqlVersion', props);
    return resource.getResponseField('rule.awsIotSqlVersion') as unknown as string;
  }

  public get errorAction(): IotResponsesFetchTopicRuleRuleErrorAction {
    return new IotResponsesFetchTopicRuleRuleErrorAction(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
  }

  public get dynamoDb(): IotResponsesFetchTopicRuleRuleErrorActionDynamoDb {
    return new IotResponsesFetchTopicRuleRuleErrorActionDynamoDb(this.__scope, this.__resources, this.__input);
  }

  public get dynamoDBv2(): IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2 {
    return new IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2(this.__scope, this.__resources, this.__input);
  }

  public get lambda(): IotResponsesFetchTopicRuleRuleErrorActionLambda {
    return new IotResponsesFetchTopicRuleRuleErrorActionLambda(this.__scope, this.__resources, this.__input);
  }

  public get sns(): IotResponsesFetchTopicRuleRuleErrorActionSns {
    return new IotResponsesFetchTopicRuleRuleErrorActionSns(this.__scope, this.__resources, this.__input);
  }

  public get sqs(): IotResponsesFetchTopicRuleRuleErrorActionSqs {
    return new IotResponsesFetchTopicRuleRuleErrorActionSqs(this.__scope, this.__resources, this.__input);
  }

  public get kinesis(): IotResponsesFetchTopicRuleRuleErrorActionKinesis {
    return new IotResponsesFetchTopicRuleRuleErrorActionKinesis(this.__scope, this.__resources, this.__input);
  }

  public get republish(): IotResponsesFetchTopicRuleRuleErrorActionRepublish {
    return new IotResponsesFetchTopicRuleRuleErrorActionRepublish(this.__scope, this.__resources, this.__input);
  }

  public get s3(): IotResponsesFetchTopicRuleRuleErrorActionS3 {
    return new IotResponsesFetchTopicRuleRuleErrorActionS3(this.__scope, this.__resources, this.__input);
  }

  public get firehose(): IotResponsesFetchTopicRuleRuleErrorActionFirehose {
    return new IotResponsesFetchTopicRuleRuleErrorActionFirehose(this.__scope, this.__resources, this.__input);
  }

  public get cloudwatchMetric(): IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric {
    return new IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric(this.__scope, this.__resources, this.__input);
  }

  public get cloudwatchAlarm(): IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm {
    return new IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm(this.__scope, this.__resources, this.__input);
  }

  public get cloudwatchLogs(): IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs {
    return new IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs(this.__scope, this.__resources, this.__input);
  }

  public get elasticsearch(): IotResponsesFetchTopicRuleRuleErrorActionElasticsearch {
    return new IotResponsesFetchTopicRuleRuleErrorActionElasticsearch(this.__scope, this.__resources, this.__input);
  }

  public get salesforce(): IotResponsesFetchTopicRuleRuleErrorActionSalesforce {
    return new IotResponsesFetchTopicRuleRuleErrorActionSalesforce(this.__scope, this.__resources, this.__input);
  }

  public get iotAnalytics(): IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics {
    return new IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics(this.__scope, this.__resources, this.__input);
  }

  public get iotEvents(): IotResponsesFetchTopicRuleRuleErrorActionIotEvents {
    return new IotResponsesFetchTopicRuleRuleErrorActionIotEvents(this.__scope, this.__resources, this.__input);
  }

  public get iotSiteWise(): IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise {
    return new IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise(this.__scope, this.__resources, this.__input);
  }

  public get stepFunctions(): IotResponsesFetchTopicRuleRuleErrorActionStepFunctions {
    return new IotResponsesFetchTopicRuleRuleErrorActionStepFunctions(this.__scope, this.__resources, this.__input);
  }

  public get timestream(): IotResponsesFetchTopicRuleRuleErrorActionTimestream {
    return new IotResponsesFetchTopicRuleRuleErrorActionTimestream(this.__scope, this.__resources, this.__input);
  }

  public get http(): IotResponsesFetchTopicRuleRuleErrorActionHttp {
    return new IotResponsesFetchTopicRuleRuleErrorActionHttp(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionDynamoDb {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.tableName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.operation', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyField', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyValue', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.hashKeyType', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyField', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyValue', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.rangeKeyType', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDB.payloadField', props);
    return resource.getResponseField('rule.errorAction.dynamoDB.payloadField') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDBv2.roleArn', props);
    return resource.getResponseField('rule.errorAction.dynamoDBv2.roleArn') as unknown as string;
  }

  public get putItem(): IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem {
    return new IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionDynamoDBv2PutItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.dynamoDBv2.putItem.tableName', props);
    return resource.getResponseField('rule.errorAction.dynamoDBv2.putItem.tableName') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.lambda.functionArn', props);
    return resource.getResponseField('rule.errorAction.lambda.functionArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionSns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sns.targetArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sns.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sns.messageFormat', props);
    return resource.getResponseField('rule.errorAction.sns.messageFormat') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionSqs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sqs.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sqs.queueUrl', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.sqs.useBase64', props);
    return resource.getResponseField('rule.errorAction.sqs.useBase64') as unknown as boolean;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionKinesis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.kinesis.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.kinesis.streamName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.kinesis.partitionKey', props);
    return resource.getResponseField('rule.errorAction.kinesis.partitionKey') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionRepublish {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.republish.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.republish.topic', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.republish.qos', props);
    return resource.getResponseField('rule.errorAction.republish.qos') as unknown as number;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.s3.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.s3.bucketName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.s3.key', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.s3.cannedAcl', props);
    return resource.getResponseField('rule.errorAction.s3.cannedAcl') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionFirehose {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.firehose.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.firehose.deliveryStreamName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.firehose.separator', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.firehose.batchMode', props);
    return resource.getResponseField('rule.errorAction.firehose.batchMode') as unknown as boolean;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionCloudwatchMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricNamespace', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricValue', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricUnit', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchMetric.metricTimestamp', props);
    return resource.getResponseField('rule.errorAction.cloudwatchMetric.metricTimestamp') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionCloudwatchAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.alarmName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.stateReason', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchAlarm.stateValue', props);
    return resource.getResponseField('rule.errorAction.cloudwatchAlarm.stateValue') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionCloudwatchLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchLogs.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.cloudwatchLogs.logGroupName', props);
    return resource.getResponseField('rule.errorAction.cloudwatchLogs.logGroupName') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionElasticsearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.elasticsearch.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.elasticsearch.endpoint', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.elasticsearch.index', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.elasticsearch.type', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.elasticsearch.id', props);
    return resource.getResponseField('rule.errorAction.elasticsearch.id') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionSalesforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.salesforce.token', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.salesforce.url', props);
    return resource.getResponseField('rule.errorAction.salesforce.url') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionIotAnalytics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotAnalytics.channelArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotAnalytics.channelName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotAnalytics.batchMode', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotAnalytics.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotAnalytics.roleArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionIotEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotEvents.inputName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotEvents.messageId', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotEvents.batchMode', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotEvents.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotEvents.roleArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionIotSiteWise {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotSiteWise.putAssetPropertyValueEntries', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.iotSiteWise.roleArn', props);
    return resource.getResponseField('rule.errorAction.iotSiteWise.roleArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionStepFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.stepFunctions.executionNamePrefix', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.stepFunctions.stateMachineName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.stepFunctions.roleArn', props);
    return resource.getResponseField('rule.errorAction.stepFunctions.roleArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionTimestream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.roleArn', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.databaseName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.tableName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.dimensions', props);
    return resource.getResponseField('rule.errorAction.timestream.dimensions') as unknown as shapes.IotTimestreamDimension[];
  }

  public get timestamp(): IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp {
    return new IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionTimestreamTimestamp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.timestamp.value', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.timestream.timestamp.unit', props);
    return resource.getResponseField('rule.errorAction.timestream.timestamp.unit') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionHttp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.url', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.confirmationUrl', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.headers', props);
    return resource.getResponseField('rule.errorAction.http.headers') as unknown as shapes.IotHttpActionHeader[];
  }

  public get auth(): IotResponsesFetchTopicRuleRuleErrorActionHttpAuth {
    return new IotResponsesFetchTopicRuleRuleErrorActionHttpAuth(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionHttpAuth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
  }

  public get sigv4(): IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4 {
    return new IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleRuleErrorActionHttpAuthSigv4 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleRequest) {
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.auth.sigv4.signingRegion', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.auth.sigv4.serviceName', props);
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
          ruleName: this.__input.ruleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRule.rule.errorAction.http.auth.sigv4.roleArn', props);
    return resource.getResponseField('rule.errorAction.http.auth.sigv4.roleArn') as unknown as string;
  }

}

export class IotResponsesFetchTopicRuleDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleDestinationRequest) {
  }

  public get topicRuleDestination(): IotResponsesFetchTopicRuleDestinationTopicRuleDestination {
    return new IotResponsesFetchTopicRuleDestinationTopicRuleDestination(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleDestinationTopicRuleDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleDestinationRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRuleDestination.topicRuleDestination.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRuleDestination.topicRuleDestination.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRuleDestination.topicRuleDestination.statusReason', props);
    return resource.getResponseField('topicRuleDestination.statusReason') as unknown as string;
  }

  public get httpUrlProperties(): IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {
    return new IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties(this.__scope, this.__resources, this.__input);
  }

}

export class IotResponsesFetchTopicRuleDestinationTopicRuleDestinationHttpUrlProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotGetTopicRuleDestinationRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTopicRuleDestination.topicRuleDestination.httpUrlProperties.confirmationUrl', props);
    return resource.getResponseField('topicRuleDestination.httpUrlProperties.confirmationUrl') as unknown as string;
  }

}

export class IotResponsesFetchV2LoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetV2LoggingOptions.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetV2LoggingOptions.defaultLogLevel', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetV2LoggingOptions.disableAllLogs', props);
    return resource.getResponseField('disableAllLogs') as unknown as boolean;
  }

}

export class IotResponsesListActiveViolations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListActiveViolationsRequest) {
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
          thingName: this.__input.thingName,
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActiveViolations.activeViolations', props);
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
          thingName: this.__input.thingName,
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListActiveViolations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAttachedPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAttachedPoliciesRequest) {
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
          target: this.__input.target,
          recursive: this.__input.recursive,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedPolicies.policies', props);
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
          target: this.__input.target,
          recursive: this.__input.recursive,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListAuditFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuditFindingsRequest) {
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
          taskId: this.__input.taskId,
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier?.account,
            iamRoleArn: this.__input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier?.roleAliasArn,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          listSuppressedFindings: this.__input.listSuppressedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditFindings.findings', props);
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
          taskId: this.__input.taskId,
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier?.account,
            iamRoleArn: this.__input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier?.roleAliasArn,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          listSuppressedFindings: this.__input.listSuppressedFindings,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAuditMitigationActionsExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuditMitigationActionsExecutionsRequest) {
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
          taskId: this.__input.taskId,
          actionStatus: this.__input.actionStatus,
          findingId: this.__input.findingId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditMitigationActionsExecutions.actionsExecutions', props);
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
          taskId: this.__input.taskId,
          actionStatus: this.__input.actionStatus,
          findingId: this.__input.findingId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditMitigationActionsExecutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAuditMitigationActionsTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuditMitigationActionsTasksRequest) {
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
          auditTaskId: this.__input.auditTaskId,
          findingId: this.__input.findingId,
          taskStatus: this.__input.taskStatus,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditMitigationActionsTasks.tasks', props);
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
          auditTaskId: this.__input.auditTaskId,
          findingId: this.__input.findingId,
          taskStatus: this.__input.taskStatus,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditMitigationActionsTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAuditSuppressions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuditSuppressionsRequest) {
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier?.account,
            iamRoleArn: this.__input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier?.roleAliasArn,
          },
          ascendingOrder: this.__input.ascendingOrder,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditSuppressions.suppressions', props);
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
          checkName: this.__input.checkName,
          resourceIdentifier: {
            deviceCertificateId: this.__input.resourceIdentifier?.deviceCertificateId,
            caCertificateId: this.__input.resourceIdentifier?.caCertificateId,
            cognitoIdentityPoolId: this.__input.resourceIdentifier?.cognitoIdentityPoolId,
            clientId: this.__input.resourceIdentifier?.clientId,
            policyVersionIdentifier: {
              policyName: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyName,
              policyVersionId: this.__input.resourceIdentifier?.policyVersionIdentifier?.policyVersionId,
            },
            account: this.__input.resourceIdentifier?.account,
            iamRoleArn: this.__input.resourceIdentifier?.iamRoleArn,
            roleAliasArn: this.__input.resourceIdentifier?.roleAliasArn,
          },
          ascendingOrder: this.__input.ascendingOrder,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditSuppressions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAuditTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuditTasksRequest) {
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
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          taskType: this.__input.taskType,
          taskStatus: this.__input.taskStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditTasks.tasks', props);
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
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          taskType: this.__input.taskType,
          taskStatus: this.__input.taskStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuditTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListAuthorizers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListAuthorizersRequest) {
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuthorizers.authorizers', props);
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAuthorizers.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListBillingGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListBillingGroupsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namePrefixFilter: this.__input.namePrefixFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBillingGroups.billingGroups', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          namePrefixFilter: this.__input.namePrefixFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBillingGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListCaCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListCaCertificatesRequest) {
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCACertificates.certificates', props);
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCACertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListCertificatesRequest) {
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificates.certificates', props);
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListCertificatesByCa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListCertificatesByCaRequest) {
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
          caCertificateId: this.__input.caCertificateId,
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificatesByCA.certificates', props);
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
          caCertificateId: this.__input.caCertificateId,
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCertificatesByCA.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListDimensions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListDimensionsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDimensions.dimensionNames', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDimensions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListDomainConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListDomainConfigurationsRequest) {
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
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          serviceType: this.__input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainConfigurations.domainConfigurations', props);
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
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          serviceType: this.__input.serviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainConfigurations.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListIndices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListIndicesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIndices.indexNames', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIndices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListJobExecutionsForJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListJobExecutionsForJobRequest) {
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
          jobId: this.__input.jobId,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobExecutionsForJob.executionSummaries', props);
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
          jobId: this.__input.jobId,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobExecutionsForJob.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListJobExecutionsForThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListJobExecutionsForThingRequest) {
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
          thingName: this.__input.thingName,
          status: this.__input.status,
          namespaceId: this.__input.namespaceId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobExecutionsForThing.executionSummaries', props);
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
          thingName: this.__input.thingName,
          status: this.__input.status,
          namespaceId: this.__input.namespaceId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobExecutionsForThing.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListJobsRequest) {
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
          status: this.__input.status,
          targetSelection: this.__input.targetSelection,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          thingGroupName: this.__input.thingGroupName,
          thingGroupId: this.__input.thingGroupId,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.jobs', props);
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
          status: this.__input.status,
          targetSelection: this.__input.targetSelection,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          thingGroupName: this.__input.thingGroupName,
          thingGroupId: this.__input.thingGroupId,
          namespaceId: this.__input.namespaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListMitigationActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListMitigationActionsRequest) {
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
          actionType: this.__input.actionType,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMitigationActions.actionIdentifiers', props);
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
          actionType: this.__input.actionType,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMitigationActions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListOtaUpdates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListOtaUpdatesRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          otaUpdateStatus: this.__input.otaUpdateStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOTAUpdates.otaUpdates', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          otaUpdateStatus: this.__input.otaUpdateStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOTAUpdates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListOutgoingCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListOutgoingCertificatesRequest) {
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutgoingCertificates.outgoingCertificates', props);
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutgoingCertificates.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListPoliciesRequest) {
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
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.policies', props);
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
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListPolicyPrincipals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListPolicyPrincipalsRequest) {
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
          policyName: this.__input.policyName,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyPrincipals.principals', props);
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
          policyName: this.__input.policyName,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyPrincipals.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListPolicyVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListPolicyVersionsRequest) {
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
          policyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyVersions.policyVersions', props);
    return resource.getResponseField('policyVersions') as unknown as shapes.IotPolicyVersion[];
  }

}

export class IotResponsesListPrincipalPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListPrincipalPoliciesRequest) {
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
          principal: this.__input.principal,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalPolicies.policies', props);
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
          principal: this.__input.principal,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalPolicies.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListPrincipalThings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListPrincipalThingsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          principal: this.__input.principal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalThings.things', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          principal: this.__input.principal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListProvisioningTemplateVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListProvisioningTemplateVersionsRequest) {
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
          templateName: this.__input.templateName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningTemplateVersions.versions', props);
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
          templateName: this.__input.templateName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningTemplateVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListProvisioningTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListProvisioningTemplatesRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningTemplates.templates', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListRoleAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListRoleAliasesRequest) {
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoleAliases.roleAliases', props);
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
          pageSize: this.__input.pageSize,
          marker: this.__input.marker,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRoleAliases.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListScheduledAudits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListScheduledAuditsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScheduledAudits.scheduledAudits', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScheduledAudits.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListSecurityProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListSecurityProfilesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          dimensionName: this.__input.dimensionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfiles.securityProfileIdentifiers', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          dimensionName: this.__input.dimensionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListSecurityProfilesForTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListSecurityProfilesForTargetRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          recursive: this.__input.recursive,
          securityProfileTargetArn: this.__input.securityProfileTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfilesForTarget.securityProfileTargetMappings', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          recursive: this.__input.recursive,
          securityProfileTargetArn: this.__input.securityProfileTargetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityProfilesForTarget.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListStreamsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.streams', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          ascendingOrder: this.__input.ascendingOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStreams.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
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
          resourceArn: this.__input.resourceArn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListTargetsForPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListTargetsForPolicyRequest) {
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
          policyName: this.__input.policyName,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForPolicy.targets', props);
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
          policyName: this.__input.policyName,
          marker: this.__input.marker,
          pageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForPolicy.nextMarker', props);
    return resource.getResponseField('nextMarker') as unknown as string;
  }

}

export class IotResponsesListTargetsForSecurityProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListTargetsForSecurityProfileRequest) {
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
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForSecurityProfile.securityProfileTargets', props);
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
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTargetsForSecurityProfile.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingGroupsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          parentGroup: this.__input.parentGroup,
          namePrefixFilter: this.__input.namePrefixFilter,
          recursive: this.__input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingGroups.thingGroups', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          parentGroup: this.__input.parentGroup,
          namePrefixFilter: this.__input.namePrefixFilter,
          recursive: this.__input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingGroupsForThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingGroupsForThingRequest) {
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
          thingName: this.__input.thingName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingGroupsForThing.thingGroups', props);
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
          thingName: this.__input.thingName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingGroupsForThing.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingPrincipals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingPrincipalsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingPrincipals.principals', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          thingName: this.__input.thingName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingPrincipals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingRegistrationTaskReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingRegistrationTaskReportsRequest) {
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
          taskId: this.__input.taskId,
          reportType: this.__input.reportType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingRegistrationTaskReports.resourceLinks', props);
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
          taskId: this.__input.taskId,
          reportType: this.__input.reportType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingRegistrationTaskReports.reportType', props);
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
          taskId: this.__input.taskId,
          reportType: this.__input.reportType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingRegistrationTaskReports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingRegistrationTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingRegistrationTasksRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingRegistrationTasks.taskIds', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingRegistrationTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingTypesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingTypes.thingTypes', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          attributeName: this.__input.attributeName,
          attributeValue: this.__input.attributeValue,
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThings.things', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          attributeName: this.__input.attributeName,
          attributeValue: this.__input.attributeValue,
          thingTypeName: this.__input.thingTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingsInBillingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingsInBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingsInBillingGroup.things', props);
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
          billingGroupName: this.__input.billingGroupName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingsInBillingGroup.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListThingsInThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListThingsInThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
          recursive: this.__input.recursive,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingsInThingGroup.things', props);
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
          thingGroupName: this.__input.thingGroupName,
          recursive: this.__input.recursive,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThingsInThingGroup.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListTopicRuleDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListTopicRuleDestinationsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicRuleDestinations.destinationSummaries', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicRuleDestinations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListTopicRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListTopicRulesRequest) {
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
          topic: this.__input.topic,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          ruleDisabled: this.__input.ruleDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicRules.rules', props);
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
          topic: this.__input.topic,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          ruleDisabled: this.__input.ruleDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTopicRules.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListV2LoggingLevels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListV2LoggingLevelsRequest) {
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
          targetType: this.__input.targetType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListV2LoggingLevels.logTargetConfigurations', props);
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
          targetType: this.__input.targetType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListV2LoggingLevels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesListViolationEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotListViolationEventsRequest) {
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
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          thingName: this.__input.thingName,
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListViolationEvents.violationEvents', props);
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
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          thingName: this.__input.thingName,
          securityProfileName: this.__input.securityProfileName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListViolationEvents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IotResponsesRegisterCaCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotRegisterCaCertificateRequest) {
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
          caCertificate: this.__input.caCertificate,
          verificationCertificate: this.__input.verificationCertificate,
          setAsActive: this.__input.setAsActive,
          allowAutoRegistration: this.__input.allowAutoRegistration,
          registrationConfig: {
            templateBody: this.__input.registrationConfig?.templateBody,
            roleArn: this.__input.registrationConfig?.roleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCACertificate.certificateArn', props);
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
          caCertificate: this.__input.caCertificate,
          verificationCertificate: this.__input.verificationCertificate,
          setAsActive: this.__input.setAsActive,
          allowAutoRegistration: this.__input.allowAutoRegistration,
          registrationConfig: {
            templateBody: this.__input.registrationConfig?.templateBody,
            roleArn: this.__input.registrationConfig?.roleArn,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCACertificate.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotResponsesRegisterCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotRegisterCertificateRequest) {
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
          certificatePem: this.__input.certificatePem,
          caCertificatePem: this.__input.caCertificatePem,
          setAsActive: this.__input.setAsActive,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCertificate.certificateArn', props);
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
          certificatePem: this.__input.certificatePem,
          caCertificatePem: this.__input.caCertificatePem,
          setAsActive: this.__input.setAsActive,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCertificate.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotResponsesRegisterCertificateWithoutCa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotRegisterCertificateWithoutCaRequest) {
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
          certificatePem: this.__input.certificatePem,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCertificateWithoutCA.certificateArn', props);
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
          certificatePem: this.__input.certificatePem,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterCertificateWithoutCA.certificateId', props);
    return resource.getResponseField('certificateId') as unknown as string;
  }

}

export class IotResponsesRegisterThing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotRegisterThingRequest) {
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
          templateBody: this.__input.templateBody,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterThing.certificatePem', props);
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
          templateBody: this.__input.templateBody,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterThing.resourceArns', props);
    return resource.getResponseField('resourceArns') as unknown as Record<string, string>;
  }

}

export class IotResponsesSearchIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotSearchIndexRequest) {
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchIndex.nextToken', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchIndex.things', props);
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
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchIndex.thingGroups', props);
    return resource.getResponseField('thingGroups') as unknown as shapes.IotThingGroupDocument[];
  }

}

export class IotResponsesSetDefaultAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotSetDefaultAuthorizerRequest) {
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetDefaultAuthorizer.authorizerName', props);
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
          authorizerName: this.__input.authorizerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetDefaultAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotResponsesStartAuditMitigationActionsTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotStartAuditMitigationActionsTaskRequest) {
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
          taskId: this.__input.taskId,
          target: {
            auditTaskId: this.__input.target.auditTaskId,
            findingIds: this.__input.target.findingIds,
            auditCheckToReasonCodeFilter: this.__input.target.auditCheckToReasonCodeFilter,
          },
          auditCheckToActionsMapping: this.__input.auditCheckToActionsMapping,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartAuditMitigationActionsTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotResponsesStartOnDemandAuditTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotStartOnDemandAuditTaskRequest) {
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
          targetCheckNames: this.__input.targetCheckNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartOnDemandAuditTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotResponsesStartThingRegistrationTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotStartThingRegistrationTaskRequest) {
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
          templateBody: this.__input.templateBody,
          inputFileBucket: this.__input.inputFileBucket,
          inputFileKey: this.__input.inputFileKey,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartThingRegistrationTask.taskId', props);
    return resource.getResponseField('taskId') as unknown as string;
  }

}

export class IotResponsesTestAuthorization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotTestAuthorizationRequest) {
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
          principal: this.__input.principal,
          cognitoIdentityPoolId: this.__input.cognitoIdentityPoolId,
          authInfos: this.__input.authInfos,
          clientId: this.__input.clientId,
          policyNamesToAdd: this.__input.policyNamesToAdd,
          policyNamesToSkip: this.__input.policyNamesToSkip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestAuthorization.authResults', props);
    return resource.getResponseField('authResults') as unknown as shapes.IotAuthResult[];
  }

}

export class IotResponsesTestInvokeAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotTestInvokeAuthorizerRequest) {
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
          authorizerName: this.__input.authorizerName,
          token: this.__input.token,
          tokenSignature: this.__input.tokenSignature,
          httpContext: {
            headers: this.__input.httpContext?.headers,
            queryString: this.__input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.__input.mqttContext?.username,
            password: {
            },
            clientId: this.__input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.__input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.isAuthenticated', props);
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
          authorizerName: this.__input.authorizerName,
          token: this.__input.token,
          tokenSignature: this.__input.tokenSignature,
          httpContext: {
            headers: this.__input.httpContext?.headers,
            queryString: this.__input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.__input.mqttContext?.username,
            password: {
            },
            clientId: this.__input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.__input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.principalId', props);
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
          authorizerName: this.__input.authorizerName,
          token: this.__input.token,
          tokenSignature: this.__input.tokenSignature,
          httpContext: {
            headers: this.__input.httpContext?.headers,
            queryString: this.__input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.__input.mqttContext?.username,
            password: {
            },
            clientId: this.__input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.__input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.policyDocuments', props);
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
          authorizerName: this.__input.authorizerName,
          token: this.__input.token,
          tokenSignature: this.__input.tokenSignature,
          httpContext: {
            headers: this.__input.httpContext?.headers,
            queryString: this.__input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.__input.mqttContext?.username,
            password: {
            },
            clientId: this.__input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.__input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.refreshAfterInSeconds', props);
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
          authorizerName: this.__input.authorizerName,
          token: this.__input.token,
          tokenSignature: this.__input.tokenSignature,
          httpContext: {
            headers: this.__input.httpContext?.headers,
            queryString: this.__input.httpContext?.queryString,
          },
          mqttContext: {
            username: this.__input.mqttContext?.username,
            password: {
            },
            clientId: this.__input.mqttContext?.clientId,
          },
          tlsContext: {
            serverName: this.__input.tlsContext?.serverName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestInvokeAuthorizer.disconnectAfterInSeconds', props);
    return resource.getResponseField('disconnectAfterInSeconds') as unknown as number;
  }

}

export class IotResponsesTransferCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotTransferCertificateRequest) {
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
          certificateId: this.__input.certificateId,
          targetAwsAccount: this.__input.targetAwsAccount,
          transferMessage: this.__input.transferMessage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransferCertificate.transferredCertificateArn', props);
    return resource.getResponseField('transferredCertificateArn') as unknown as string;
  }

}

export class IotResponsesUpdateAuthorizer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateAuthorizerRequest) {
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
          authorizerName: this.__input.authorizerName,
          authorizerFunctionArn: this.__input.authorizerFunctionArn,
          tokenKeyName: this.__input.tokenKeyName,
          tokenSigningPublicKeys: this.__input.tokenSigningPublicKeys,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authorizerName', props);
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
          authorizerName: this.__input.authorizerName,
          authorizerFunctionArn: this.__input.authorizerFunctionArn,
          tokenKeyName: this.__input.tokenKeyName,
          tokenSigningPublicKeys: this.__input.tokenSigningPublicKeys,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAuthorizer.authorizerArn', props);
    return resource.getResponseField('authorizerArn') as unknown as string;
  }

}

export class IotResponsesUpdateBillingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateBillingGroupRequest) {
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
          billingGroupName: this.__input.billingGroupName,
          billingGroupProperties: {
            billingGroupDescription: this.__input.billingGroupProperties.billingGroupDescription,
          },
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBillingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotResponsesUpdateDimension {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateDimensionRequest) {
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.name', props);
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.arn', props);
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.type', props);
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.stringValues', props);
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.creationDate', props);
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
          name: this.__input.name,
          stringValues: this.__input.stringValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDimension.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesUpdateDomainConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateDomainConfigurationRequest) {
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
          domainConfigurationName: this.__input.domainConfigurationName,
          authorizerConfig: {
            defaultAuthorizerName: this.__input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.__input.authorizerConfig?.allowAuthorizerOverride,
          },
          domainConfigurationStatus: this.__input.domainConfigurationStatus,
          removeAuthorizerConfig: this.__input.removeAuthorizerConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainConfiguration.domainConfigurationName', props);
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
          domainConfigurationName: this.__input.domainConfigurationName,
          authorizerConfig: {
            defaultAuthorizerName: this.__input.authorizerConfig?.defaultAuthorizerName,
            allowAuthorizerOverride: this.__input.authorizerConfig?.allowAuthorizerOverride,
          },
          domainConfigurationStatus: this.__input.domainConfigurationStatus,
          removeAuthorizerConfig: this.__input.removeAuthorizerConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainConfiguration.domainConfigurationArn', props);
    return resource.getResponseField('domainConfigurationArn') as unknown as string;
  }

}

export class IotResponsesUpdateDynamicThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateDynamicThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties.attributePayload?.merge,
            },
          },
          expectedVersion: this.__input.expectedVersion,
          indexName: this.__input.indexName,
          queryString: this.__input.queryString,
          queryVersion: this.__input.queryVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDynamicThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotResponsesUpdateMitigationAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateMitigationActionRequest) {
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
          actionName: this.__input.actionName,
          roleArn: this.__input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.__input.actionParams?.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.__input.actionParams?.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.__input.actionParams?.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.__input.actionParams?.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.__input.actionParams?.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.__input.actionParams?.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.__input.actionParams?.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.__input.actionParams?.publishFindingToSnsParams?.topicArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMitigationAction.actionArn', props);
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
          actionName: this.__input.actionName,
          roleArn: this.__input.roleArn,
          actionParams: {
            updateDeviceCertificateParams: {
              action: this.__input.actionParams?.updateDeviceCertificateParams?.action,
            },
            updateCACertificateParams: {
              action: this.__input.actionParams?.updateCACertificateParams?.action,
            },
            addThingsToThingGroupParams: {
              thingGroupNames: this.__input.actionParams?.addThingsToThingGroupParams?.thingGroupNames,
              overrideDynamicGroups: this.__input.actionParams?.addThingsToThingGroupParams?.overrideDynamicGroups,
            },
            replaceDefaultPolicyVersionParams: {
              templateName: this.__input.actionParams?.replaceDefaultPolicyVersionParams?.templateName,
            },
            enableIoTLoggingParams: {
              roleArnForLogging: this.__input.actionParams?.enableIoTLoggingParams?.roleArnForLogging,
              logLevel: this.__input.actionParams?.enableIoTLoggingParams?.logLevel,
            },
            publishFindingToSnsParams: {
              topicArn: this.__input.actionParams?.publishFindingToSnsParams?.topicArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMitigationAction.actionId', props);
    return resource.getResponseField('actionId') as unknown as string;
  }

}

export class IotResponsesUpdateRoleAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateRoleAliasRequest) {
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
          roleAlias: this.__input.roleAlias,
          roleArn: this.__input.roleArn,
          credentialDurationSeconds: this.__input.credentialDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleAlias.roleAlias', props);
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
          roleAlias: this.__input.roleAlias,
          roleArn: this.__input.roleArn,
          credentialDurationSeconds: this.__input.credentialDurationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRoleAlias.roleAliasArn', props);
    return resource.getResponseField('roleAliasArn') as unknown as string;
  }

}

export class IotResponsesUpdateScheduledAudit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateScheduledAuditRequest) {
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
          frequency: this.__input.frequency,
          dayOfMonth: this.__input.dayOfMonth,
          dayOfWeek: this.__input.dayOfWeek,
          targetCheckNames: this.__input.targetCheckNames,
          scheduledAuditName: this.__input.scheduledAuditName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScheduledAudit.scheduledAuditArn', props);
    return resource.getResponseField('scheduledAuditArn') as unknown as string;
  }

}

export class IotResponsesUpdateSecurityProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateSecurityProfileRequest) {
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.securityProfileName', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.securityProfileArn', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.securityProfileDescription', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.behaviors', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.alertTargets', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.additionalMetricsToRetain', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.additionalMetricsToRetainV2', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.version', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.creationDate', props);
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
          securityProfileName: this.__input.securityProfileName,
          securityProfileDescription: this.__input.securityProfileDescription,
          behaviors: this.__input.behaviors,
          alertTargets: this.__input.alertTargets,
          additionalMetricsToRetain: this.__input.additionalMetricsToRetain,
          additionalMetricsToRetainV2: this.__input.additionalMetricsToRetainV2,
          deleteBehaviors: this.__input.deleteBehaviors,
          deleteAlertTargets: this.__input.deleteAlertTargets,
          deleteAdditionalMetricsToRetain: this.__input.deleteAdditionalMetricsToRetain,
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecurityProfile.lastModifiedDate', props);
    return resource.getResponseField('lastModifiedDate') as unknown as string;
  }

}

export class IotResponsesUpdateStream {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateStreamRequest) {
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStream.streamId', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStream.streamArn', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStream.description', props);
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
          streamId: this.__input.streamId,
          description: this.__input.description,
          files: this.__input.files,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStream.streamVersion', props);
    return resource.getResponseField('streamVersion') as unknown as number;
  }

}

export class IotResponsesUpdateThingGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotUpdateThingGroupRequest) {
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
          thingGroupName: this.__input.thingGroupName,
          thingGroupProperties: {
            thingGroupDescription: this.__input.thingGroupProperties.thingGroupDescription,
            attributePayload: {
              attributes: this.__input.thingGroupProperties.attributePayload?.attributes,
              merge: this.__input.thingGroupProperties.attributePayload?.merge,
            },
          },
          expectedVersion: this.__input.expectedVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThingGroup.version', props);
    return resource.getResponseField('version') as unknown as number;
  }

}

export class IotResponsesValidateSecurityProfileBehaviors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IotValidateSecurityProfileBehaviorsRequest) {
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
          behaviors: this.__input.behaviors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateSecurityProfileBehaviors.valid', props);
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
          behaviors: this.__input.behaviors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateSecurityProfileBehaviors.validationErrors', props);
    return resource.getResponseField('validationErrors') as unknown as shapes.IotValidationError[];
  }

}

