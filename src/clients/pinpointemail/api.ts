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

  public createDeliverabilityTestReport(input: shapes.PinpointEmailCreateDeliverabilityTestReportRequest): PinpointEmailCreateDeliverabilityTestReport {
    return new PinpointEmailCreateDeliverabilityTestReport(this, 'CreateDeliverabilityTestReport', this.__resources, input);
  }

  public createEmailIdentity(input: shapes.PinpointEmailCreateEmailIdentityRequest): PinpointEmailCreateEmailIdentity {
    return new PinpointEmailCreateEmailIdentity(this, 'CreateEmailIdentity', this.__resources, input);
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

  public fetchAccount(): PinpointEmailFetchAccount {
    return new PinpointEmailFetchAccount(this, 'FetchAccount', this.__resources);
  }

  public fetchBlacklistReports(input: shapes.PinpointEmailGetBlacklistReportsRequest): PinpointEmailFetchBlacklistReports {
    return new PinpointEmailFetchBlacklistReports(this, 'FetchBlacklistReports', this.__resources, input);
  }

  public fetchConfigurationSet(input: shapes.PinpointEmailGetConfigurationSetRequest): PinpointEmailFetchConfigurationSet {
    return new PinpointEmailFetchConfigurationSet(this, 'FetchConfigurationSet', this.__resources, input);
  }

  public fetchConfigurationSetEventDestinations(input: shapes.PinpointEmailGetConfigurationSetEventDestinationsRequest): PinpointEmailFetchConfigurationSetEventDestinations {
    return new PinpointEmailFetchConfigurationSetEventDestinations(this, 'FetchConfigurationSetEventDestinations', this.__resources, input);
  }

  public fetchDedicatedIp(input: shapes.PinpointEmailGetDedicatedIpRequest): PinpointEmailFetchDedicatedIp {
    return new PinpointEmailFetchDedicatedIp(this, 'FetchDedicatedIp', this.__resources, input);
  }

  public fetchDedicatedIps(input: shapes.PinpointEmailGetDedicatedIpsRequest): PinpointEmailFetchDedicatedIps {
    return new PinpointEmailFetchDedicatedIps(this, 'FetchDedicatedIps', this.__resources, input);
  }

  public fetchDeliverabilityDashboardOptions(): PinpointEmailFetchDeliverabilityDashboardOptions {
    return new PinpointEmailFetchDeliverabilityDashboardOptions(this, 'FetchDeliverabilityDashboardOptions', this.__resources);
  }

  public fetchDeliverabilityTestReport(input: shapes.PinpointEmailGetDeliverabilityTestReportRequest): PinpointEmailFetchDeliverabilityTestReport {
    return new PinpointEmailFetchDeliverabilityTestReport(this, 'FetchDeliverabilityTestReport', this.__resources, input);
  }

  public fetchDomainDeliverabilityCampaign(input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest): PinpointEmailFetchDomainDeliverabilityCampaign {
    return new PinpointEmailFetchDomainDeliverabilityCampaign(this, 'FetchDomainDeliverabilityCampaign', this.__resources, input);
  }

  public fetchDomainStatisticsReport(input: shapes.PinpointEmailGetDomainStatisticsReportRequest): PinpointEmailFetchDomainStatisticsReport {
    return new PinpointEmailFetchDomainStatisticsReport(this, 'FetchDomainStatisticsReport', this.__resources, input);
  }

  public fetchEmailIdentity(input: shapes.PinpointEmailGetEmailIdentityRequest): PinpointEmailFetchEmailIdentity {
    return new PinpointEmailFetchEmailIdentity(this, 'FetchEmailIdentity', this.__resources, input);
  }

  public listConfigurationSets(input: shapes.PinpointEmailListConfigurationSetsRequest): PinpointEmailListConfigurationSets {
    return new PinpointEmailListConfigurationSets(this, 'ListConfigurationSets', this.__resources, input);
  }

  public listDedicatedIpPools(input: shapes.PinpointEmailListDedicatedIpPoolsRequest): PinpointEmailListDedicatedIpPools {
    return new PinpointEmailListDedicatedIpPools(this, 'ListDedicatedIpPools', this.__resources, input);
  }

  public listDeliverabilityTestReports(input: shapes.PinpointEmailListDeliverabilityTestReportsRequest): PinpointEmailListDeliverabilityTestReports {
    return new PinpointEmailListDeliverabilityTestReports(this, 'ListDeliverabilityTestReports', this.__resources, input);
  }

  public listDomainDeliverabilityCampaigns(input: shapes.PinpointEmailListDomainDeliverabilityCampaignsRequest): PinpointEmailListDomainDeliverabilityCampaigns {
    return new PinpointEmailListDomainDeliverabilityCampaigns(this, 'ListDomainDeliverabilityCampaigns', this.__resources, input);
  }

  public listEmailIdentities(input: shapes.PinpointEmailListEmailIdentitiesRequest): PinpointEmailListEmailIdentities {
    return new PinpointEmailListEmailIdentities(this, 'ListEmailIdentities', this.__resources, input);
  }

  public listTagsForResource(input: shapes.PinpointEmailListTagsForResourceRequest): PinpointEmailListTagsForResource {
    return new PinpointEmailListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public sendEmail(input: shapes.PinpointEmailSendEmailRequest): PinpointEmailSendEmail {
    return new PinpointEmailSendEmail(this, 'SendEmail', this.__resources, input);
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

export class PinpointEmailCreateDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailCreateDeliverabilityTestReportRequest) {
    super(scope, id);
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
          ReportName: this.input.reportName,
          FromEmailAddress: this.input.fromEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.input.content.simple?.subject.data,
                Charset: this.input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.input.content.simple?.body.text?.data,
                  Charset: this.input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.input.content.simple?.body.html?.data,
                  Charset: this.input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.input.content.template?.templateArn,
              TemplateData: this.input.content.template?.templateData,
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeliverabilityTestReport.ReportId', props);
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
          ReportName: this.input.reportName,
          FromEmailAddress: this.input.fromEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.input.content.simple?.subject.data,
                Charset: this.input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.input.content.simple?.body.text?.data,
                  Charset: this.input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.input.content.simple?.body.html?.data,
                  Charset: this.input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.input.content.template?.templateArn,
              TemplateData: this.input.content.template?.templateData,
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeliverabilityTestReport.DeliverabilityTestStatus', props);
    return resource.getResponseField('DeliverabilityTestStatus') as unknown as string;
  }

}

export class PinpointEmailCreateEmailIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailCreateEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.IdentityType', props);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): PinpointEmailCreateEmailIdentityDkimAttributes {
    return new PinpointEmailCreateEmailIdentityDkimAttributes(this, 'DkimAttributes', this.__resources, this.input);
  }

}

export class PinpointEmailCreateEmailIdentityDkimAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailCreateEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.DkimAttributes.SigningEnabled', props);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.DkimAttributes.Status', props);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

}

export class PinpointEmailFetchAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get sendQuota(): PinpointEmailFetchAccountSendQuota {
    return new PinpointEmailFetchAccountSendQuota(this, 'SendQuota', this.__resources);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendingEnabled', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.DedicatedIpAutoWarmupEnabled', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.EnforcementStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.ProductionAccessEnabled', props);
    return resource.getResponseField('ProductionAccessEnabled') as unknown as boolean;
  }

}

export class PinpointEmailFetchAccountSendQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.Max24HourSend', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.MaxSendRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.SentLast24Hours', props);
    return resource.getResponseField('SendQuota.SentLast24Hours') as unknown as number;
  }

}

export class PinpointEmailFetchBlacklistReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetBlacklistReportsRequest) {
    super(scope, id);
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
          BlacklistItemNames: this.input.blacklistItemNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlacklistReports.BlacklistReport', props);
    return resource.getResponseField('BlacklistReport') as unknown as Record<string, shapes.PinpointEmailBlacklistEntry[]>;
  }

}

export class PinpointEmailFetchConfigurationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.ConfigurationSetName', props);
    return resource.getResponseField('ConfigurationSetName') as unknown as string;
  }

  public get trackingOptions(): PinpointEmailFetchConfigurationSetTrackingOptions {
    return new PinpointEmailFetchConfigurationSetTrackingOptions(this, 'TrackingOptions', this.__resources, this.input);
  }

  public get deliveryOptions(): PinpointEmailFetchConfigurationSetDeliveryOptions {
    return new PinpointEmailFetchConfigurationSetDeliveryOptions(this, 'DeliveryOptions', this.__resources, this.input);
  }

  public get reputationOptions(): PinpointEmailFetchConfigurationSetReputationOptions {
    return new PinpointEmailFetchConfigurationSetReputationOptions(this, 'ReputationOptions', this.__resources, this.input);
  }

  public get sendingOptions(): PinpointEmailFetchConfigurationSetSendingOptions {
    return new PinpointEmailFetchConfigurationSetSendingOptions(this, 'SendingOptions', this.__resources, this.input);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailFetchConfigurationSetTrackingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.TrackingOptions.CustomRedirectDomain', props);
    return resource.getResponseField('TrackingOptions.CustomRedirectDomain') as unknown as string;
  }

}

export class PinpointEmailFetchConfigurationSetDeliveryOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.DeliveryOptions.TlsPolicy', props);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.DeliveryOptions.SendingPoolName', props);
    return resource.getResponseField('DeliveryOptions.SendingPoolName') as unknown as string;
  }

}

export class PinpointEmailFetchConfigurationSetReputationOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.ReputationOptions.ReputationMetricsEnabled', props);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.ReputationOptions.LastFreshStart', props);
    return resource.getResponseField('ReputationOptions.LastFreshStart') as unknown as string;
  }

}

export class PinpointEmailFetchConfigurationSetSendingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.SendingOptions.SendingEnabled', props);
    return resource.getResponseField('SendingOptions.SendingEnabled') as unknown as boolean;
  }

}

export class PinpointEmailFetchConfigurationSetEventDestinations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetConfigurationSetEventDestinationsRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSetEventDestinations.EventDestinations', props);
    return resource.getResponseField('EventDestinations') as unknown as shapes.PinpointEmailEventDestination[];
  }

}

export class PinpointEmailFetchDedicatedIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDedicatedIpRequest) {
    super(scope, id);
  }

  public get dedicatedIp(): PinpointEmailFetchDedicatedIpDedicatedIp {
    return new PinpointEmailFetchDedicatedIpDedicatedIp(this, 'DedicatedIp', this.__resources, this.input);
  }

}

export class PinpointEmailFetchDedicatedIpDedicatedIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDedicatedIpRequest) {
    super(scope, id);
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
          Ip: this.input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIp.DedicatedIp.Ip', props);
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
          Ip: this.input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIp.DedicatedIp.WarmupStatus', props);
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
          Ip: this.input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIp.DedicatedIp.WarmupPercentage', props);
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
          Ip: this.input.ip,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIp.DedicatedIp.PoolName', props);
    return resource.getResponseField('DedicatedIp.PoolName') as unknown as string;
  }

}

export class PinpointEmailFetchDedicatedIps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDedicatedIpsRequest) {
    super(scope, id);
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
          PoolName: this.input.poolName,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIps.DedicatedIps', props);
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
          PoolName: this.input.poolName,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIps.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailFetchDeliverabilityDashboardOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.DashboardEnabled', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.SubscriptionExpiryDate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.AccountStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.ActiveSubscribedDomains', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains', props);
    return resource.getResponseField('PendingExpirationSubscribedDomains') as unknown as shapes.PinpointEmailDomainDeliverabilityTrackingOption[];
  }

}

export class PinpointEmailFetchDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
    super(scope, id);
  }

  public get deliverabilityTestReport(): PinpointEmailFetchDeliverabilityTestReportDeliverabilityTestReport {
    return new PinpointEmailFetchDeliverabilityTestReportDeliverabilityTestReport(this, 'DeliverabilityTestReport', this.__resources, this.input);
  }

  public get overallPlacement(): PinpointEmailFetchDeliverabilityTestReportOverallPlacement {
    return new PinpointEmailFetchDeliverabilityTestReportOverallPlacement(this, 'OverallPlacement', this.__resources, this.input);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.IspPlacements', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.Message', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailFetchDeliverabilityTestReportDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
    super(scope, id);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.ReportId', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.ReportName', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.Subject', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.FromEmailAddress', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.CreateDate', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.DeliverabilityTestReport.DeliverabilityTestStatus', props);
    return resource.getResponseField('DeliverabilityTestReport.DeliverabilityTestStatus') as unknown as string;
  }

}

export class PinpointEmailFetchDeliverabilityTestReportOverallPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDeliverabilityTestReportRequest) {
    super(scope, id);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.OverallPlacement.InboxPercentage', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.OverallPlacement.SpamPercentage', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.OverallPlacement.MissingPercentage', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.OverallPlacement.SpfPercentage', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.OverallPlacement.DkimPercentage', props);
    return resource.getResponseField('OverallPlacement.DkimPercentage') as unknown as number;
  }

}

export class PinpointEmailFetchDomainDeliverabilityCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest) {
    super(scope, id);
  }

  public get domainDeliverabilityCampaign(): PinpointEmailFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {
    return new PinpointEmailFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(this, 'DomainDeliverabilityCampaign', this.__resources, this.input);
  }

}

export class PinpointEmailFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDomainDeliverabilityCampaignRequest) {
    super(scope, id);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.CampaignId', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ImageUrl', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Subject', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FromAddress', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SendingIps', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FirstSeenDateTime', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.LastSeenDateTime', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.InboxCount', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SpamCount', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadRate', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.DeleteRate', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadDeleteRate', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ProjectedVolume', props);
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
          CampaignId: this.input.campaignId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Esps', props);
    return resource.getResponseField('DomainDeliverabilityCampaign.Esps') as unknown as string[];
  }

}

export class PinpointEmailFetchDomainStatisticsReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
    super(scope, id);
  }

  public get overallVolume(): PinpointEmailFetchDomainStatisticsReportOverallVolume {
    return new PinpointEmailFetchDomainStatisticsReportOverallVolume(this, 'OverallVolume', this.__resources, this.input);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.DailyVolumes', props);
    return resource.getResponseField('DailyVolumes') as unknown as shapes.PinpointEmailDailyVolume[];
  }

}

export class PinpointEmailFetchDomainStatisticsReportOverallVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
    super(scope, id);
  }

  public get volumeStatistics(): PinpointEmailFetchDomainStatisticsReportOverallVolumeVolumeStatistics {
    return new PinpointEmailFetchDomainStatisticsReportOverallVolumeVolumeStatistics(this, 'VolumeStatistics', this.__resources, this.input);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.ReadRatePercent', props);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.DomainIspPlacements', props);
    return resource.getResponseField('OverallVolume.DomainIspPlacements') as unknown as shapes.PinpointEmailDomainIspPlacement[];
  }

}

export class PinpointEmailFetchDomainStatisticsReportOverallVolumeVolumeStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetDomainStatisticsReportRequest) {
    super(scope, id);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.InboxRawCount', props);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.SpamRawCount', props);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedInbox', props);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedSpam', props);
    return resource.getResponseField('OverallVolume.VolumeStatistics.ProjectedSpam') as unknown as number;
  }

}

export class PinpointEmailFetchEmailIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.IdentityType', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.FeedbackForwardingStatus', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): PinpointEmailFetchEmailIdentityDkimAttributes {
    return new PinpointEmailFetchEmailIdentityDkimAttributes(this, 'DkimAttributes', this.__resources, this.input);
  }

  public get mailFromAttributes(): PinpointEmailFetchEmailIdentityMailFromAttributes {
    return new PinpointEmailFetchEmailIdentityMailFromAttributes(this, 'MailFromAttributes', this.__resources, this.input);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailFetchEmailIdentityDkimAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.DkimAttributes.SigningEnabled', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.DkimAttributes.Status', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

}

export class PinpointEmailFetchEmailIdentityMailFromAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailGetEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.MailFromAttributes.MailFromDomain', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.MailFromAttributes.MailFromDomainStatus', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.MailFromAttributes.BehaviorOnMxFailure', props);
    return resource.getResponseField('MailFromAttributes.BehaviorOnMxFailure') as unknown as string;
  }

}

export class PinpointEmailListConfigurationSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListConfigurationSetsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationSets.ConfigurationSets', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailListDedicatedIpPools extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListDedicatedIpPoolsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDedicatedIpPools.DedicatedIpPools', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDedicatedIpPools.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailListDeliverabilityTestReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListDeliverabilityTestReportsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliverabilityTestReports.DeliverabilityTestReports', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliverabilityTestReports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailListDomainDeliverabilityCampaigns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListDomainDeliverabilityCampaignsRequest) {
    super(scope, id);
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
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          SubscribedDomain: this.input.subscribedDomain,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainDeliverabilityCampaigns.DomainDeliverabilityCampaigns', props);
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
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          SubscribedDomain: this.input.subscribedDomain,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainDeliverabilityCampaigns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailListEmailIdentities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListEmailIdentitiesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailIdentities.EmailIdentities', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailIdentities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PinpointEmailListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.PinpointEmailTag[];
  }

}

export class PinpointEmailSendEmail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PinpointEmailSendEmailRequest) {
    super(scope, id);
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
          FromEmailAddress: this.input.fromEmailAddress,
          Destination: {
            ToAddresses: this.input.destination.toAddresses,
            CcAddresses: this.input.destination.ccAddresses,
            BccAddresses: this.input.destination.bccAddresses,
          },
          ReplyToAddresses: this.input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.input.feedbackForwardingEmailAddress,
          Content: {
            Simple: {
              Subject: {
                Data: this.input.content.simple?.subject.data,
                Charset: this.input.content.simple?.subject.charset,
              },
              Body: {
                Text: {
                  Data: this.input.content.simple?.body.text?.data,
                  Charset: this.input.content.simple?.body.text?.charset,
                },
                Html: {
                  Data: this.input.content.simple?.body.html?.data,
                  Charset: this.input.content.simple?.body.html?.charset,
                },
              },
            },
            Raw: {
              Data: {
              },
            },
            Template: {
              TemplateArn: this.input.content.template?.templateArn,
              TemplateData: this.input.content.template?.templateData,
            },
          },
          EmailTags: this.input.emailTags,
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

