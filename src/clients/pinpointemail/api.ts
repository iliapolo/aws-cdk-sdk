import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PinpointEmailClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConfigurationSet(input: shapes.PinpointEmailCreateConfigurationSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateConfigurationSet'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          TrackingOptions: {
            CustomRedirectDomain: input.trackingOptions?.customRedirectDomain,
          },
          DeliveryOptions: {
            TlsPolicy: input.deliveryOptions?.tlsPolicy,
            SendingPoolName: input.deliveryOptions?.sendingPoolName,
          },
          ReputationOptions: {
            ReputationMetricsEnabled: input.reputationOptions?.reputationMetricsEnabled,
            LastFreshStart: input.reputationOptions?.lastFreshStart,
          },
          SendingOptions: {
            SendingEnabled: input.sendingOptions?.sendingEnabled,
          },
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateConfigurationSet', props);
  }

  public createConfigurationSetEventDestination(input: shapes.PinpointEmailCreateConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationSetEventDestination',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateConfigurationSetEventDestination'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          EventDestinationName: input.eventDestinationName,
          EventDestination: {
            Enabled: input.eventDestination.enabled,
            MatchingEventTypes: input.eventDestination.matchingEventTypes,
            KinesisFirehoseDestination: {
              IamRoleArn: input.eventDestination.kinesisFirehoseDestination?.iamRoleArn,
              DeliveryStreamArn: input.eventDestination.kinesisFirehoseDestination?.deliveryStreamArn,
            },
            CloudWatchDestination: {
              DimensionConfigurations: input.eventDestination.cloudWatchDestination?.dimensionConfigurations,
            },
            SnsDestination: {
              TopicArn: input.eventDestination.snsDestination?.topicArn,
            },
            PinpointDestination: {
              ApplicationArn: input.eventDestination.pinpointDestination?.applicationArn,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateConfigurationSetEventDestination', props);
  }

  public createDedicatedIpPool(input: shapes.PinpointEmailCreateDedicatedIpPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDedicatedIpPool',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateDedicatedIpPool'),
        parameters: {
          PoolName: input.poolName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateDedicatedIpPool', props);
  }

  public createDeliverabilityTestReport(input: shapes.PinpointEmailCreateDeliverabilityTestReportRequest): PinpointEmailResponsesCreateDeliverabilityTestReport {
    return new PinpointEmailResponsesCreateDeliverabilityTestReport(this, this.__resources, input);
  }

  public createEmailIdentity(input: shapes.PinpointEmailCreateEmailIdentityRequest): PinpointEmailResponsesCreateEmailIdentity {
    return new PinpointEmailResponsesCreateEmailIdentity(this, this.__resources, input);
  }

  public deleteConfigurationSet(input: shapes.PinpointEmailDeleteConfigurationSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.DeleteConfigurationSet'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationSet', props);
  }

  public deleteConfigurationSetEventDestination(input: shapes.PinpointEmailDeleteConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationSetEventDestination',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.DeleteConfigurationSetEventDestination'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          EventDestinationName: input.eventDestinationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationSetEventDestination', props);
  }

  public deleteDedicatedIpPool(input: shapes.PinpointEmailDeleteDedicatedIpPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDedicatedIpPool',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.DeleteDedicatedIpPool'),
        parameters: {
          PoolName: input.poolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDedicatedIpPool', props);
  }

  public deleteEmailIdentity(input: shapes.PinpointEmailDeleteEmailIdentityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.DeleteEmailIdentity'),
        parameters: {
          EmailIdentity: input.emailIdentity,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEmailIdentity', props);
  }

  public fetchAccount(): PinpointEmailResponsesFetchAccount {
    return new PinpointEmailResponsesFetchAccount(this, this.__resources);
  }

  public fetchBlacklistReports(input: shapes.PinpointEmailGetBlacklistReportsRequest): PinpointEmailResponsesFetchBlacklistReports {
    return new PinpointEmailResponsesFetchBlacklistReports(this, this.__resources, input);
  }

  public fetchConfigurationSet(input: shapes.PinpointEmailGetConfigurationSetRequest): PinpointEmailResponsesFetchConfigurationSet {
    return new PinpointEmailResponsesFetchConfigurationSet(this, this.__resources, input);
  }

  public fetchConfigurationSetEventDestinations(input: shapes.PinpointEmailGetConfigurationSetEventDestinationsRequest): PinpointEmailResponsesFetchConfigurationSetEventDestinations {
    return new PinpointEmailResponsesFetchConfigurationSetEventDestinations(this, this.__resources, input);
  }

  public fetchDedicatedIp(input: shapes.PinpointEmailGetDedicatedIpRequest): PinpointEmailResponsesFetchDedicatedIp {
    return new PinpointEmailResponsesFetchDedicatedIp(this, this.__resources, input);
  }

  public fetchDedicatedIps(input: shapes.PinpointEmailGetDedicatedIpsRequest): PinpointEmailResponsesFetchDedicatedIps {
    return new PinpointEmailResponsesFetchDedicatedIps(this, this.__resources, input);
  }

  public fetchDeliverabilityDashboardOptions(): PinpointEmailResponsesFetchDeliverabilityDashboardOptions {
    return new PinpointEmailResponsesFetchDeliverabilityDashboardOptions(this, this.__resources);
  }

  public fetchDeliverabilityTestReport(input: shapes.PinpointEmailGetDeliverabilityTestReportRequest): PinpointEmailResponsesFetchDeliverabilityTestReport {
    return new PinpointEmailResponsesFetchDeliverabilityTestReport(this, this.__resources, input);
  }

  public fetchDomainDeliverabilityCampaign(input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest): PinpointEmailResponsesFetchDomainDeliverabilityCampaign {
    return new PinpointEmailResponsesFetchDomainDeliverabilityCampaign(this, this.__resources, input);
  }

  public fetchDomainStatisticsReport(input: shapes.PinpointEmailGetDomainStatisticsReportRequest): PinpointEmailResponsesFetchDomainStatisticsReport {
    return new PinpointEmailResponsesFetchDomainStatisticsReport(this, this.__resources, input);
  }

  public fetchEmailIdentity(input: shapes.PinpointEmailGetEmailIdentityRequest): PinpointEmailResponsesFetchEmailIdentity {
    return new PinpointEmailResponsesFetchEmailIdentity(this, this.__resources, input);
  }

  public listConfigurationSets(input: shapes.PinpointEmailListConfigurationSetsRequest): PinpointEmailResponsesListConfigurationSets {
    return new PinpointEmailResponsesListConfigurationSets(this, this.__resources, input);
  }

  public listDedicatedIpPools(input: shapes.PinpointEmailListDedicatedIpPoolsRequest): PinpointEmailResponsesListDedicatedIpPools {
    return new PinpointEmailResponsesListDedicatedIpPools(this, this.__resources, input);
  }

  public listDeliverabilityTestReports(input: shapes.PinpointEmailListDeliverabilityTestReportsRequest): PinpointEmailResponsesListDeliverabilityTestReports {
    return new PinpointEmailResponsesListDeliverabilityTestReports(this, this.__resources, input);
  }

  public listDomainDeliverabilityCampaigns(input: shapes.PinpointEmailListDomainDeliverabilityCampaignsRequest): PinpointEmailResponsesListDomainDeliverabilityCampaigns {
    return new PinpointEmailResponsesListDomainDeliverabilityCampaigns(this, this.__resources, input);
  }

  public listEmailIdentities(input: shapes.PinpointEmailListEmailIdentitiesRequest): PinpointEmailResponsesListEmailIdentities {
    return new PinpointEmailResponsesListEmailIdentities(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.PinpointEmailListTagsForResourceRequest): PinpointEmailResponsesListTagsForResource {
    return new PinpointEmailResponsesListTagsForResource(this, this.__resources, input);
  }

  public putAccountDedicatedIpWarmupAttributes(input: shapes.PinpointEmailPutAccountDedicatedIpWarmupAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountDedicatedIpWarmupAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutAccountDedicatedIpWarmupAttributes'),
        parameters: {
          AutoWarmupEnabled: input.autoWarmupEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountDedicatedIpWarmupAttributes', props);
  }

  public putAccountSendingAttributes(input: shapes.PinpointEmailPutAccountSendingAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSendingAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutAccountSendingAttributes'),
        parameters: {
          SendingEnabled: input.sendingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountSendingAttributes', props);
  }

  public putConfigurationSetDeliveryOptions(input: shapes.PinpointEmailPutConfigurationSetDeliveryOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetDeliveryOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutConfigurationSetDeliveryOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          TlsPolicy: input.tlsPolicy,
          SendingPoolName: input.sendingPoolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetDeliveryOptions', props);
  }

  public putConfigurationSetReputationOptions(input: shapes.PinpointEmailPutConfigurationSetReputationOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetReputationOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutConfigurationSetReputationOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          ReputationMetricsEnabled: input.reputationMetricsEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetReputationOptions', props);
  }

  public putConfigurationSetSendingOptions(input: shapes.PinpointEmailPutConfigurationSetSendingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetSendingOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutConfigurationSetSendingOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          SendingEnabled: input.sendingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetSendingOptions', props);
  }

  public putConfigurationSetTrackingOptions(input: shapes.PinpointEmailPutConfigurationSetTrackingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetTrackingOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutConfigurationSetTrackingOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          CustomRedirectDomain: input.customRedirectDomain,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetTrackingOptions', props);
  }

  public putDedicatedIpInPool(input: shapes.PinpointEmailPutDedicatedIpInPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDedicatedIpInPool',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutDedicatedIpInPool'),
        parameters: {
          Ip: input.ip,
          DestinationPoolName: input.destinationPoolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDedicatedIpInPool', props);
  }

  public putDedicatedIpWarmupAttributes(input: shapes.PinpointEmailPutDedicatedIpWarmupAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDedicatedIpWarmupAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutDedicatedIpWarmupAttributes'),
        parameters: {
          Ip: input.ip,
          WarmupPercentage: input.warmupPercentage,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDedicatedIpWarmupAttributes', props);
  }

  public putDeliverabilityDashboardOption(input: shapes.PinpointEmailPutDeliverabilityDashboardOptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDeliverabilityDashboardOption',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutDeliverabilityDashboardOption'),
        parameters: {
          DashboardEnabled: input.dashboardEnabled,
          SubscribedDomains: input.subscribedDomains,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDeliverabilityDashboardOption', props);
  }

  public putEmailIdentityDkimAttributes(input: shapes.PinpointEmailPutEmailIdentityDkimAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityDkimAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutEmailIdentityDkimAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          SigningEnabled: input.signingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityDkimAttributes', props);
  }

  public putEmailIdentityFeedbackAttributes(input: shapes.PinpointEmailPutEmailIdentityFeedbackAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityFeedbackAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutEmailIdentityFeedbackAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          EmailForwardingEnabled: input.emailForwardingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityFeedbackAttributes', props);
  }

  public putEmailIdentityMailFromAttributes(input: shapes.PinpointEmailPutEmailIdentityMailFromAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityMailFromAttributes',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.PutEmailIdentityMailFromAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          MailFromDomain: input.mailFromDomain,
          BehaviorOnMxFailure: input.behaviorOnMxFailure,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityMailFromAttributes', props);
  }

  public sendEmail(input: shapes.PinpointEmailSendEmailRequest): PinpointEmailResponsesSendEmail {
    return new PinpointEmailResponsesSendEmail(this, this.__resources, input);
  }

  public tagResource(input: shapes.PinpointEmailTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.PinpointEmailUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConfigurationSetEventDestination(input: shapes.PinpointEmailUpdateConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationSetEventDestination',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.UpdateConfigurationSetEventDestination'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          EventDestinationName: input.eventDestinationName,
          EventDestination: {
            Enabled: input.eventDestination.enabled,
            MatchingEventTypes: input.eventDestination.matchingEventTypes,
            KinesisFirehoseDestination: {
              IamRoleArn: input.eventDestination.kinesisFirehoseDestination?.iamRoleArn,
              DeliveryStreamArn: input.eventDestination.kinesisFirehoseDestination?.deliveryStreamArn,
            },
            CloudWatchDestination: {
              DimensionConfigurations: input.eventDestination.cloudWatchDestination?.dimensionConfigurations,
            },
            SnsDestination: {
              TopicArn: input.eventDestination.snsDestination?.topicArn,
            },
            PinpointDestination: {
              ApplicationArn: input.eventDestination.pinpointDestination?.applicationArn,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConfigurationSetEventDestination', props);
  }

}

export class PinpointEmailResponsesCreateDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailCreateDeliverabilityTestReportRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateDeliverabilityTestReport.ReportId'),
        outputPath: 'ReportId',
        parameters: {
          ReportName: this.__input.reportName,
          FromEmailAddress: this.__input.fromEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.__input.content.simple?.subject.data,
                Charset: this.__input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.__input.content.simple?.body.text?.data,
                  Charset: this.__input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.__input.content.simple?.body.html?.data,
                  Charset: this.__input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.__input.content.template?.templateArn,
              TemplateData: this.__input.content.template?.templateData,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeliverabilityTestReport.ReportId', props);
    return resource.getResponseField('ReportId') as unknown as string;
  }

  public get deliverabilityTestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateDeliverabilityTestReport.DeliverabilityTestStatus'),
        outputPath: 'DeliverabilityTestStatus',
        parameters: {
          ReportName: this.__input.reportName,
          FromEmailAddress: this.__input.fromEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.__input.content.simple?.subject.data,
                Charset: this.__input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.__input.content.simple?.body.text?.data,
                  Charset: this.__input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.__input.content.simple?.body.html?.data,
                  Charset: this.__input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.__input.content.template?.templateArn,
              TemplateData: this.__input.content.template?.templateData,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeliverabilityTestReport.DeliverabilityTestStatus', props);
    return resource.getResponseField('DeliverabilityTestStatus') as unknown as string;
  }

}

export class PinpointEmailResponsesCreateEmailIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailCreateEmailIdentityRequest) {
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateEmailIdentity.IdentityType'),
        outputPath: 'IdentityType',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.IdentityType', props);
    return resource.getResponseField('IdentityType') as unknown as string;
  }

  public get verifiedForSendingStatus(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): PinpointEmailResponsesCreateEmailIdentityDkimAttributes {
    return new PinpointEmailResponsesCreateEmailIdentityDkimAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class PinpointEmailResponsesCreateEmailIdentityDkimAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailCreateEmailIdentityRequest) {
  }

  public get signingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateEmailIdentity.DkimAttributes.SigningEnabled'),
        outputPath: 'DkimAttributes.SigningEnabled',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.DkimAttributes.SigningEnabled', props);
    return resource.getResponseField('DkimAttributes.SigningEnabled') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateEmailIdentity.DkimAttributes.Status'),
        outputPath: 'DkimAttributes.Status',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.DkimAttributes.Status', props);
    return resource.getResponseField('DkimAttributes.Status') as unknown as string;
  }

  public get tokens(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.CreateEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

}

export class PinpointEmailResponsesFetchAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get sendQuota(): PinpointEmailResponsesFetchAccountSendQuota {
    return new PinpointEmailResponsesFetchAccountSendQuota(this.__scope, this.__resources);
  }

  public get sendingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.SendingEnabled'),
        outputPath: 'SendingEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendingEnabled', props);
    return resource.getResponseField('SendingEnabled') as unknown as boolean;
  }

  public get dedicatedIpAutoWarmupEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.DedicatedIpAutoWarmupEnabled'),
        outputPath: 'DedicatedIpAutoWarmupEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.DedicatedIpAutoWarmupEnabled', props);
    return resource.getResponseField('DedicatedIpAutoWarmupEnabled') as unknown as boolean;
  }

  public get enforcementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.EnforcementStatus'),
        outputPath: 'EnforcementStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.EnforcementStatus', props);
    return resource.getResponseField('EnforcementStatus') as unknown as string;
  }

  public get productionAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.ProductionAccessEnabled'),
        outputPath: 'ProductionAccessEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.ProductionAccessEnabled', props);
    return resource.getResponseField('ProductionAccessEnabled') as unknown as boolean;
  }

}

export class PinpointEmailResponsesFetchAccountSendQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get max24HourSend(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.SendQuota.Max24HourSend'),
        outputPath: 'SendQuota.Max24HourSend',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendQuota.Max24HourSend', props);
    return resource.getResponseField('SendQuota.Max24HourSend') as unknown as number;
  }

  public get maxSendRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.SendQuota.MaxSendRate'),
        outputPath: 'SendQuota.MaxSendRate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendQuota.MaxSendRate', props);
    return resource.getResponseField('SendQuota.MaxSendRate') as unknown as number;
  }

  public get sentLast24Hours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetAccount.SendQuota.SentLast24Hours'),
        outputPath: 'SendQuota.SentLast24Hours',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendQuota.SentLast24Hours', props);
    return resource.getResponseField('SendQuota.SentLast24Hours') as unknown as number;
  }

}

export class PinpointEmailResponsesFetchBlacklistReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetBlacklistReportsRequest) {
  }

  public get blacklistReport(): Record<string, shapes.PinpointEmailBlacklistEntry[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlacklistReports',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetBlacklistReports.BlacklistReport'),
        outputPath: 'BlacklistReport',
        parameters: {
          BlacklistItemNames: this.__input.blacklistItemNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlacklistReports.BlacklistReport', props);
    return resource.getResponseField('BlacklistReport') as unknown as Record<string, shapes.PinpointEmailBlacklistEntry[]>;
  }

}

export class PinpointEmailResponsesFetchConfigurationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetRequest) {
  }

  public get configurationSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.ConfigurationSetName'),
        outputPath: 'ConfigurationSetName',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.ConfigurationSetName', props);
    return resource.getResponseField('ConfigurationSetName') as unknown as string;
  }

  public get trackingOptions(): PinpointEmailResponsesFetchConfigurationSetTrackingOptions {
    return new PinpointEmailResponsesFetchConfigurationSetTrackingOptions(this.__scope, this.__resources, this.__input);
  }

  public get deliveryOptions(): PinpointEmailResponsesFetchConfigurationSetDeliveryOptions {
    return new PinpointEmailResponsesFetchConfigurationSetDeliveryOptions(this.__scope, this.__resources, this.__input);
  }

  public get reputationOptions(): PinpointEmailResponsesFetchConfigurationSetReputationOptions {
    return new PinpointEmailResponsesFetchConfigurationSetReputationOptions(this.__scope, this.__resources, this.__input);
  }

  public get sendingOptions(): PinpointEmailResponsesFetchConfigurationSetSendingOptions {
    return new PinpointEmailResponsesFetchConfigurationSetSendingOptions(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.PinpointEmailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailResponsesFetchConfigurationSetTrackingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetRequest) {
  }

  public get customRedirectDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.TrackingOptions.CustomRedirectDomain'),
        outputPath: 'TrackingOptions.CustomRedirectDomain',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.TrackingOptions.CustomRedirectDomain', props);
    return resource.getResponseField('TrackingOptions.CustomRedirectDomain') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchConfigurationSetDeliveryOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetRequest) {
  }

  public get tlsPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.DeliveryOptions.TlsPolicy'),
        outputPath: 'DeliveryOptions.TlsPolicy',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.DeliveryOptions.TlsPolicy', props);
    return resource.getResponseField('DeliveryOptions.TlsPolicy') as unknown as string;
  }

  public get sendingPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.DeliveryOptions.SendingPoolName'),
        outputPath: 'DeliveryOptions.SendingPoolName',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.DeliveryOptions.SendingPoolName', props);
    return resource.getResponseField('DeliveryOptions.SendingPoolName') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchConfigurationSetReputationOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetRequest) {
  }

  public get reputationMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.ReputationOptions.ReputationMetricsEnabled'),
        outputPath: 'ReputationOptions.ReputationMetricsEnabled',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.ReputationOptions.ReputationMetricsEnabled', props);
    return resource.getResponseField('ReputationOptions.ReputationMetricsEnabled') as unknown as boolean;
  }

  public get lastFreshStart(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.ReputationOptions.LastFreshStart'),
        outputPath: 'ReputationOptions.LastFreshStart',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.ReputationOptions.LastFreshStart', props);
    return resource.getResponseField('ReputationOptions.LastFreshStart') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchConfigurationSetSendingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetRequest) {
  }

  public get sendingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSet.SendingOptions.SendingEnabled'),
        outputPath: 'SendingOptions.SendingEnabled',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.SendingOptions.SendingEnabled', props);
    return resource.getResponseField('SendingOptions.SendingEnabled') as unknown as boolean;
  }

}

export class PinpointEmailResponsesFetchConfigurationSetEventDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetConfigurationSetEventDestinationsRequest) {
  }

  public get eventDestinations(): shapes.PinpointEmailEventDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSetEventDestinations',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetConfigurationSetEventDestinations.EventDestinations'),
        outputPath: 'EventDestinations',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSetEventDestinations.EventDestinations', props);
    return resource.getResponseField('EventDestinations') as unknown as shapes.PinpointEmailEventDestination[];
  }

}

export class PinpointEmailResponsesFetchDedicatedIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDedicatedIpRequest) {
  }

  public get dedicatedIp(): PinpointEmailResponsesFetchDedicatedIpDedicatedIp {
    return new PinpointEmailResponsesFetchDedicatedIpDedicatedIp(this.__scope, this.__resources, this.__input);
  }

}

export class PinpointEmailResponsesFetchDedicatedIpDedicatedIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDedicatedIpRequest) {
  }

  public get ip(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIp',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIp.DedicatedIp.Ip'),
        outputPath: 'DedicatedIp.Ip',
        parameters: {
          Ip: this.__input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIp.DedicatedIp.Ip', props);
    return resource.getResponseField('DedicatedIp.Ip') as unknown as string;
  }

  public get warmupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIp',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIp.DedicatedIp.WarmupStatus'),
        outputPath: 'DedicatedIp.WarmupStatus',
        parameters: {
          Ip: this.__input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIp.DedicatedIp.WarmupStatus', props);
    return resource.getResponseField('DedicatedIp.WarmupStatus') as unknown as string;
  }

  public get warmupPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIp',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIp.DedicatedIp.WarmupPercentage'),
        outputPath: 'DedicatedIp.WarmupPercentage',
        parameters: {
          Ip: this.__input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIp.DedicatedIp.WarmupPercentage', props);
    return resource.getResponseField('DedicatedIp.WarmupPercentage') as unknown as number;
  }

  public get poolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIp',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIp.DedicatedIp.PoolName'),
        outputPath: 'DedicatedIp.PoolName',
        parameters: {
          Ip: this.__input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIp.DedicatedIp.PoolName', props);
    return resource.getResponseField('DedicatedIp.PoolName') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchDedicatedIps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDedicatedIpsRequest) {
  }

  public get dedicatedIps(): shapes.PinpointEmailDedicatedIp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIps',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIps.DedicatedIps'),
        outputPath: 'DedicatedIps',
        parameters: {
          PoolName: this.__input.poolName,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIps.DedicatedIps', props);
    return resource.getResponseField('DedicatedIps') as unknown as shapes.PinpointEmailDedicatedIp[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIps',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDedicatedIps.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PoolName: this.__input.poolName,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIps.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchDeliverabilityDashboardOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get dashboardEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityDashboardOptions.DashboardEnabled'),
        outputPath: 'DashboardEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.DashboardEnabled', props);
    return resource.getResponseField('DashboardEnabled') as unknown as boolean;
  }

  public get subscriptionExpiryDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityDashboardOptions.SubscriptionExpiryDate'),
        outputPath: 'SubscriptionExpiryDate',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.SubscriptionExpiryDate', props);
    return resource.getResponseField('SubscriptionExpiryDate') as unknown as string;
  }

  public get accountStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityDashboardOptions.AccountStatus'),
        outputPath: 'AccountStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.AccountStatus', props);
    return resource.getResponseField('AccountStatus') as unknown as string;
  }

  public get activeSubscribedDomains(): shapes.PinpointEmailDomainDeliverabilityTrackingOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityDashboardOptions.ActiveSubscribedDomains'),
        outputPath: 'ActiveSubscribedDomains',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.ActiveSubscribedDomains', props);
    return resource.getResponseField('ActiveSubscribedDomains') as unknown as shapes.PinpointEmailDomainDeliverabilityTrackingOption[];
  }

  public get pendingExpirationSubscribedDomains(): shapes.PinpointEmailDomainDeliverabilityTrackingOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains'),
        outputPath: 'PendingExpirationSubscribedDomains',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains', props);
    return resource.getResponseField('PendingExpirationSubscribedDomains') as unknown as shapes.PinpointEmailDomainDeliverabilityTrackingOption[];
  }

}

export class PinpointEmailResponsesFetchDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
  }

  public get deliverabilityTestReport(): PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport {
    return new PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport(this.__scope, this.__resources, this.__input);
  }

  public get overallPlacement(): PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement {
    return new PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement(this.__scope, this.__resources, this.__input);
  }

  public get ispPlacements(): shapes.PinpointEmailIspPlacement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.IspPlacements'),
        outputPath: 'IspPlacements',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.IspPlacements', props);
    return resource.getResponseField('IspPlacements') as unknown as shapes.PinpointEmailIspPlacement[];
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.Message'),
        outputPath: 'Message',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get tags(): shapes.PinpointEmailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.Tags'),
        outputPath: 'Tags',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailResponsesFetchDeliverabilityTestReportDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.ReportId'),
        outputPath: 'DeliverabilityTestReport.ReportId',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.ReportId', props);
    return resource.getResponseField('DeliverabilityTestReport.ReportId') as unknown as string;
  }

  public get reportName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.ReportName'),
        outputPath: 'DeliverabilityTestReport.ReportName',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.ReportName', props);
    return resource.getResponseField('DeliverabilityTestReport.ReportName') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.Subject'),
        outputPath: 'DeliverabilityTestReport.Subject',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.Subject', props);
    return resource.getResponseField('DeliverabilityTestReport.Subject') as unknown as string;
  }

  public get fromEmailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.FromEmailAddress'),
        outputPath: 'DeliverabilityTestReport.FromEmailAddress',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.FromEmailAddress', props);
    return resource.getResponseField('DeliverabilityTestReport.FromEmailAddress') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.CreateDate'),
        outputPath: 'DeliverabilityTestReport.CreateDate',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.CreateDate', props);
    return resource.getResponseField('DeliverabilityTestReport.CreateDate') as unknown as string;
  }

  public get deliverabilityTestStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.DeliverabilityTestReport.DeliverabilityTestStatus'),
        outputPath: 'DeliverabilityTestReport.DeliverabilityTestStatus',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.DeliverabilityTestReport.DeliverabilityTestStatus', props);
    return resource.getResponseField('DeliverabilityTestReport.DeliverabilityTestStatus') as unknown as string;
  }

}

export class PinpointEmailResponsesFetchDeliverabilityTestReportOverallPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
  }

  public get inboxPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.OverallPlacement.InboxPercentage'),
        outputPath: 'OverallPlacement.InboxPercentage',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.OverallPlacement.InboxPercentage', props);
    return resource.getResponseField('OverallPlacement.InboxPercentage') as unknown as number;
  }

  public get spamPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.OverallPlacement.SpamPercentage'),
        outputPath: 'OverallPlacement.SpamPercentage',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.OverallPlacement.SpamPercentage', props);
    return resource.getResponseField('OverallPlacement.SpamPercentage') as unknown as number;
  }

  public get missingPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.OverallPlacement.MissingPercentage'),
        outputPath: 'OverallPlacement.MissingPercentage',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.OverallPlacement.MissingPercentage', props);
    return resource.getResponseField('OverallPlacement.MissingPercentage') as unknown as number;
  }

  public get spfPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.OverallPlacement.SpfPercentage'),
        outputPath: 'OverallPlacement.SpfPercentage',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.OverallPlacement.SpfPercentage', props);
    return resource.getResponseField('OverallPlacement.SpfPercentage') as unknown as number;
  }

  public get dkimPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDeliverabilityTestReport.OverallPlacement.DkimPercentage'),
        outputPath: 'OverallPlacement.DkimPercentage',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.OverallPlacement.DkimPercentage', props);
    return resource.getResponseField('OverallPlacement.DkimPercentage') as unknown as number;
  }

}

export class PinpointEmailResponsesFetchDomainDeliverabilityCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest) {
  }

  public get domainDeliverabilityCampaign(): PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {
    return new PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(this.__scope, this.__resources, this.__input);
  }

}

export class PinpointEmailResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest) {
  }

  public get campaignId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.CampaignId'),
        outputPath: 'DomainDeliverabilityCampaign.CampaignId',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.CampaignId', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.CampaignId') as unknown as string;
  }

  public get imageUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ImageUrl'),
        outputPath: 'DomainDeliverabilityCampaign.ImageUrl',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ImageUrl', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.ImageUrl') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Subject'),
        outputPath: 'DomainDeliverabilityCampaign.Subject',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Subject', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.Subject') as unknown as string;
  }

  public get fromAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FromAddress'),
        outputPath: 'DomainDeliverabilityCampaign.FromAddress',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FromAddress', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.FromAddress') as unknown as string;
  }

  public get sendingIps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SendingIps'),
        outputPath: 'DomainDeliverabilityCampaign.SendingIps',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SendingIps', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.SendingIps') as unknown as string[];
  }

  public get firstSeenDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FirstSeenDateTime'),
        outputPath: 'DomainDeliverabilityCampaign.FirstSeenDateTime',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FirstSeenDateTime', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.FirstSeenDateTime') as unknown as string;
  }

  public get lastSeenDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.LastSeenDateTime'),
        outputPath: 'DomainDeliverabilityCampaign.LastSeenDateTime',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.LastSeenDateTime', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.LastSeenDateTime') as unknown as string;
  }

  public get inboxCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.InboxCount'),
        outputPath: 'DomainDeliverabilityCampaign.InboxCount',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.InboxCount', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.InboxCount') as unknown as number;
  }

  public get spamCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SpamCount'),
        outputPath: 'DomainDeliverabilityCampaign.SpamCount',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SpamCount', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.SpamCount') as unknown as number;
  }

  public get readRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadRate'),
        outputPath: 'DomainDeliverabilityCampaign.ReadRate',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadRate', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.ReadRate') as unknown as number;
  }

  public get deleteRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.DeleteRate'),
        outputPath: 'DomainDeliverabilityCampaign.DeleteRate',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.DeleteRate', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.DeleteRate') as unknown as number;
  }

  public get readDeleteRate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadDeleteRate'),
        outputPath: 'DomainDeliverabilityCampaign.ReadDeleteRate',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadDeleteRate', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.ReadDeleteRate') as unknown as number;
  }

  public get projectedVolume(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ProjectedVolume'),
        outputPath: 'DomainDeliverabilityCampaign.ProjectedVolume',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ProjectedVolume', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.ProjectedVolume') as unknown as number;
  }

  public get esps(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Esps'),
        outputPath: 'DomainDeliverabilityCampaign.Esps',
        parameters: {
          CampaignId: this.__input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Esps', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.Esps') as unknown as string[];
  }

}

export class PinpointEmailResponsesFetchDomainStatisticsReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
  }

  public get overallVolume(): PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume {
    return new PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume(this.__scope, this.__resources, this.__input);
  }

  public get dailyVolumes(): shapes.PinpointEmailDailyVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.DailyVolumes'),
        outputPath: 'DailyVolumes',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.DailyVolumes', props);
    return resource.getResponseField('DailyVolumes') as unknown as shapes.PinpointEmailDailyVolume[];
  }

}

export class PinpointEmailResponsesFetchDomainStatisticsReportOverallVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
  }

  public get volumeStatistics(): PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics {
    return new PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics(this.__scope, this.__resources, this.__input);
  }

  public get readRatePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.ReadRatePercent'),
        outputPath: 'OverallVolume.ReadRatePercent',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.ReadRatePercent', props);
    return resource.getResponseField('OverallVolume.ReadRatePercent') as unknown as number;
  }

  public get domainIspPlacements(): shapes.PinpointEmailDomainIspPlacement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.DomainIspPlacements'),
        outputPath: 'OverallVolume.DomainIspPlacements',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.DomainIspPlacements', props);
    return resource.getResponseField('OverallVolume.DomainIspPlacements') as unknown as shapes.PinpointEmailDomainIspPlacement[];
  }

}

export class PinpointEmailResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
  }

  public get inboxRawCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.InboxRawCount'),
        outputPath: 'OverallVolume.VolumeStatistics.InboxRawCount',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.InboxRawCount', props);
    return resource.getResponseField('OverallVolume.VolumeStatistics.InboxRawCount') as unknown as number;
  }

  public get spamRawCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.SpamRawCount'),
        outputPath: 'OverallVolume.VolumeStatistics.SpamRawCount',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.SpamRawCount', props);
    return resource.getResponseField('OverallVolume.VolumeStatistics.SpamRawCount') as unknown as number;
  }

  public get projectedInbox(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedInbox'),
        outputPath: 'OverallVolume.VolumeStatistics.ProjectedInbox',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedInbox', props);
    return resource.getResponseField('OverallVolume.VolumeStatistics.ProjectedInbox') as unknown as number;
  }

  public get projectedSpam(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedSpam'),
        outputPath: 'OverallVolume.VolumeStatistics.ProjectedSpam',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedSpam', props);
    return resource.getResponseField('OverallVolume.VolumeStatistics.ProjectedSpam') as unknown as number;
  }

}

export class PinpointEmailResponsesFetchEmailIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetEmailIdentityRequest) {
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.IdentityType'),
        outputPath: 'IdentityType',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.IdentityType', props);
    return resource.getResponseField('IdentityType') as unknown as string;
  }

  public get feedbackForwardingStatus(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.FeedbackForwardingStatus'),
        outputPath: 'FeedbackForwardingStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.FeedbackForwardingStatus', props);
    return resource.getResponseField('FeedbackForwardingStatus') as unknown as boolean;
  }

  public get verifiedForSendingStatus(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): PinpointEmailResponsesFetchEmailIdentityDkimAttributes {
    return new PinpointEmailResponsesFetchEmailIdentityDkimAttributes(this.__scope, this.__resources, this.__input);
  }

  public get mailFromAttributes(): PinpointEmailResponsesFetchEmailIdentityMailFromAttributes {
    return new PinpointEmailResponsesFetchEmailIdentityMailFromAttributes(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.PinpointEmailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.Tags'),
        outputPath: 'Tags',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailResponsesFetchEmailIdentityDkimAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetEmailIdentityRequest) {
  }

  public get signingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.DkimAttributes.SigningEnabled'),
        outputPath: 'DkimAttributes.SigningEnabled',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.DkimAttributes.SigningEnabled', props);
    return resource.getResponseField('DkimAttributes.SigningEnabled') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.DkimAttributes.Status'),
        outputPath: 'DkimAttributes.Status',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.DkimAttributes.Status', props);
    return resource.getResponseField('DkimAttributes.Status') as unknown as string;
  }

  public get tokens(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

}

export class PinpointEmailResponsesFetchEmailIdentityMailFromAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailGetEmailIdentityRequest) {
  }

  public get mailFromDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.MailFromAttributes.MailFromDomain'),
        outputPath: 'MailFromAttributes.MailFromDomain',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.MailFromAttributes.MailFromDomain', props);
    return resource.getResponseField('MailFromAttributes.MailFromDomain') as unknown as string;
  }

  public get mailFromDomainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.MailFromAttributes.MailFromDomainStatus'),
        outputPath: 'MailFromAttributes.MailFromDomainStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.MailFromAttributes.MailFromDomainStatus', props);
    return resource.getResponseField('MailFromAttributes.MailFromDomainStatus') as unknown as string;
  }

  public get behaviorOnMxFailure(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.GetEmailIdentity.MailFromAttributes.BehaviorOnMxFailure'),
        outputPath: 'MailFromAttributes.BehaviorOnMxFailure',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.MailFromAttributes.BehaviorOnMxFailure', props);
    return resource.getResponseField('MailFromAttributes.BehaviorOnMxFailure') as unknown as string;
  }

}

export class PinpointEmailResponsesListConfigurationSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListConfigurationSetsRequest) {
  }

  public get configurationSets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationSets',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListConfigurationSets.ConfigurationSets'),
        outputPath: 'ConfigurationSets',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationSets.ConfigurationSets', props);
    return resource.getResponseField('ConfigurationSets') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationSets',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListConfigurationSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesListDedicatedIpPools {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListDedicatedIpPoolsRequest) {
  }

  public get dedicatedIpPools(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDedicatedIpPools',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDedicatedIpPools.DedicatedIpPools'),
        outputPath: 'DedicatedIpPools',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDedicatedIpPools.DedicatedIpPools', props);
    return resource.getResponseField('DedicatedIpPools') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDedicatedIpPools',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDedicatedIpPools.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDedicatedIpPools.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesListDeliverabilityTestReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListDeliverabilityTestReportsRequest) {
  }

  public get deliverabilityTestReports(): shapes.PinpointEmailDeliverabilityTestReport[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliverabilityTestReports',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDeliverabilityTestReports.DeliverabilityTestReports'),
        outputPath: 'DeliverabilityTestReports',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeliverabilityTestReports.DeliverabilityTestReports', props);
    return resource.getResponseField('DeliverabilityTestReports') as unknown as shapes.PinpointEmailDeliverabilityTestReport[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliverabilityTestReports',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDeliverabilityTestReports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeliverabilityTestReports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesListDomainDeliverabilityCampaigns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListDomainDeliverabilityCampaignsRequest) {
  }

  public get domainDeliverabilityCampaigns(): shapes.PinpointEmailDomainDeliverabilityCampaign[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainDeliverabilityCampaigns',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDomainDeliverabilityCampaigns.DomainDeliverabilityCampaigns'),
        outputPath: 'DomainDeliverabilityCampaigns',
        parameters: {
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          SubscribedDomain: this.__input.subscribedDomain,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainDeliverabilityCampaigns.DomainDeliverabilityCampaigns', props);
    return resource.getResponseField('DomainDeliverabilityCampaigns') as unknown as shapes.PinpointEmailDomainDeliverabilityCampaign[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainDeliverabilityCampaigns',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListDomainDeliverabilityCampaigns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          SubscribedDomain: this.__input.subscribedDomain,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainDeliverabilityCampaigns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesListEmailIdentities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListEmailIdentitiesRequest) {
  }

  public get emailIdentities(): shapes.PinpointEmailIdentityInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailIdentities',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListEmailIdentities.EmailIdentities'),
        outputPath: 'EmailIdentities',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEmailIdentities.EmailIdentities', props);
    return resource.getResponseField('EmailIdentities') as unknown as shapes.PinpointEmailIdentityInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailIdentities',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListEmailIdentities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEmailIdentities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailListTagsForResourceRequest) {
  }

  public get tags(): shapes.PinpointEmailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailResponsesSendEmail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PinpointEmailSendEmailRequest) {
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendEmail',
        service: 'PinpointEmail',
        physicalResourceId: cr.PhysicalResourceId.of('PinpointEmail.SendEmail.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          FromEmailAddress: this.__input.fromEmailAddress,
          Destination: {
            ToAddresses: this.__input.destination.toAddresses,
            CcAddresses: this.__input.destination.ccAddresses,
            BccAddresses: this.__input.destination.bccAddresses,
          },
          ReplyToAddresses: this.__input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.__input.feedbackForwardingEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.__input.content.simple?.subject.data,
                Charset: this.__input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.__input.content.simple?.body.text?.data,
                  Charset: this.__input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.__input.content.simple?.body.html?.data,
                  Charset: this.__input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.__input.content.template?.templateArn,
              TemplateData: this.__input.content.template?.templateData,
            },
          },
          EmailTags: this.__input.emailTags,
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

