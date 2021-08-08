import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Sesv2Client extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConfigurationSet(input: shapes.Sesv2CreateConfigurationSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateConfigurationSet'),
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
          SuppressionOptions: {
            SuppressedReasons: input.suppressionOptions?.suppressedReasons,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateConfigurationSet', props);
  }

  public createConfigurationSetEventDestination(input: shapes.Sesv2CreateConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationSetEventDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateConfigurationSetEventDestination'),
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

  public createContact(input: shapes.Sesv2CreateContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateContact'),
        parameters: {
          ContactListName: input.contactListName,
          EmailAddress: input.emailAddress,
          TopicPreferences: input.topicPreferences,
          UnsubscribeAll: input.unsubscribeAll,
          AttributesData: input.attributesData,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateContact', props);
  }

  public createContactList(input: shapes.Sesv2CreateContactListRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateContactList'),
        parameters: {
          ContactListName: input.contactListName,
          Topics: input.topics,
          Description: input.description,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateContactList', props);
  }

  public createCustomVerificationEmailTemplate(input: shapes.Sesv2CreateCustomVerificationEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateCustomVerificationEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
          FromEmailAddress: input.fromEmailAddress,
          TemplateSubject: input.templateSubject,
          TemplateContent: input.templateContent,
          SuccessRedirectionURL: input.successRedirectionUrl,
          FailureRedirectionURL: input.failureRedirectionUrl,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateCustomVerificationEmailTemplate', props);
  }

  public createDedicatedIpPool(input: shapes.Sesv2CreateDedicatedIpPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDedicatedIpPool',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateDedicatedIpPool'),
        parameters: {
          PoolName: input.poolName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateDedicatedIpPool', props);
  }

  public createDeliverabilityTestReport(input: shapes.Sesv2CreateDeliverabilityTestReportRequest): SESV2ResponsesCreateDeliverabilityTestReport {
    return new SESV2ResponsesCreateDeliverabilityTestReport(this, this.__resources, input);
  }

  public createEmailIdentity(input: shapes.Sesv2CreateEmailIdentityRequest): SESV2ResponsesCreateEmailIdentity {
    return new SESV2ResponsesCreateEmailIdentity(this, this.__resources, input);
  }

  public createEmailIdentityPolicy(input: shapes.Sesv2CreateEmailIdentityPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentityPolicy',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentityPolicy'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          PolicyName: input.policyName,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateEmailIdentityPolicy', props);
  }

  public createEmailTemplate(input: shapes.Sesv2CreateEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
          TemplateContent: {
            Subject: input.templateContent.subject,
            Text: input.templateContent.text,
            Html: input.templateContent.html,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateEmailTemplate', props);
  }

  public createImportJob(input: shapes.Sesv2CreateImportJobRequest): SESV2ResponsesCreateImportJob {
    return new SESV2ResponsesCreateImportJob(this, this.__resources, input);
  }

  public deleteConfigurationSet(input: shapes.Sesv2DeleteConfigurationSetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteConfigurationSet'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationSet', props);
  }

  public deleteConfigurationSetEventDestination(input: shapes.Sesv2DeleteConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationSetEventDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteConfigurationSetEventDestination'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          EventDestinationName: input.eventDestinationName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationSetEventDestination', props);
  }

  public deleteContact(input: shapes.Sesv2DeleteContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteContact'),
        parameters: {
          ContactListName: input.contactListName,
          EmailAddress: input.emailAddress,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContact', props);
  }

  public deleteContactList(input: shapes.Sesv2DeleteContactListRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteContactList'),
        parameters: {
          ContactListName: input.contactListName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContactList', props);
  }

  public deleteCustomVerificationEmailTemplate(input: shapes.Sesv2DeleteCustomVerificationEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteCustomVerificationEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomVerificationEmailTemplate', props);
  }

  public deleteDedicatedIpPool(input: shapes.Sesv2DeleteDedicatedIpPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDedicatedIpPool',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteDedicatedIpPool'),
        parameters: {
          PoolName: input.poolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDedicatedIpPool', props);
  }

  public deleteEmailIdentity(input: shapes.Sesv2DeleteEmailIdentityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteEmailIdentity'),
        parameters: {
          EmailIdentity: input.emailIdentity,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEmailIdentity', props);
  }

  public deleteEmailIdentityPolicy(input: shapes.Sesv2DeleteEmailIdentityPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEmailIdentityPolicy',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteEmailIdentityPolicy'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          PolicyName: input.policyName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEmailIdentityPolicy', props);
  }

  public deleteEmailTemplate(input: shapes.Sesv2DeleteEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEmailTemplate', props);
  }

  public deleteSuppressedDestination(input: shapes.Sesv2DeleteSuppressedDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.DeleteSuppressedDestination'),
        parameters: {
          EmailAddress: input.emailAddress,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSuppressedDestination', props);
  }

  public fetchAccount(): SESV2ResponsesFetchAccount {
    return new SESV2ResponsesFetchAccount(this, this.__resources);
  }

  public fetchBlacklistReports(input: shapes.Sesv2GetBlacklistReportsRequest): SESV2ResponsesFetchBlacklistReports {
    return new SESV2ResponsesFetchBlacklistReports(this, this.__resources, input);
  }

  public fetchConfigurationSet(input: shapes.Sesv2GetConfigurationSetRequest): SESV2ResponsesFetchConfigurationSet {
    return new SESV2ResponsesFetchConfigurationSet(this, this.__resources, input);
  }

  public fetchConfigurationSetEventDestinations(input: shapes.Sesv2GetConfigurationSetEventDestinationsRequest): SESV2ResponsesFetchConfigurationSetEventDestinations {
    return new SESV2ResponsesFetchConfigurationSetEventDestinations(this, this.__resources, input);
  }

  public fetchContact(input: shapes.Sesv2GetContactRequest): SESV2ResponsesFetchContact {
    return new SESV2ResponsesFetchContact(this, this.__resources, input);
  }

  public fetchContactList(input: shapes.Sesv2GetContactListRequest): SESV2ResponsesFetchContactList {
    return new SESV2ResponsesFetchContactList(this, this.__resources, input);
  }

  public fetchCustomVerificationEmailTemplate(input: shapes.Sesv2GetCustomVerificationEmailTemplateRequest): SESV2ResponsesFetchCustomVerificationEmailTemplate {
    return new SESV2ResponsesFetchCustomVerificationEmailTemplate(this, this.__resources, input);
  }

  public fetchDedicatedIp(input: shapes.Sesv2GetDedicatedIpRequest): SESV2ResponsesFetchDedicatedIp {
    return new SESV2ResponsesFetchDedicatedIp(this, this.__resources, input);
  }

  public fetchDedicatedIps(input: shapes.Sesv2GetDedicatedIpsRequest): SESV2ResponsesFetchDedicatedIps {
    return new SESV2ResponsesFetchDedicatedIps(this, this.__resources, input);
  }

  public fetchDeliverabilityDashboardOptions(): SESV2ResponsesFetchDeliverabilityDashboardOptions {
    return new SESV2ResponsesFetchDeliverabilityDashboardOptions(this, this.__resources);
  }

  public fetchDeliverabilityTestReport(input: shapes.Sesv2GetDeliverabilityTestReportRequest): SESV2ResponsesFetchDeliverabilityTestReport {
    return new SESV2ResponsesFetchDeliverabilityTestReport(this, this.__resources, input);
  }

  public fetchDomainDeliverabilityCampaign(input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest): SESV2ResponsesFetchDomainDeliverabilityCampaign {
    return new SESV2ResponsesFetchDomainDeliverabilityCampaign(this, this.__resources, input);
  }

  public fetchDomainStatisticsReport(input: shapes.Sesv2GetDomainStatisticsReportRequest): SESV2ResponsesFetchDomainStatisticsReport {
    return new SESV2ResponsesFetchDomainStatisticsReport(this, this.__resources, input);
  }

  public fetchEmailIdentity(input: shapes.Sesv2GetEmailIdentityRequest): SESV2ResponsesFetchEmailIdentity {
    return new SESV2ResponsesFetchEmailIdentity(this, this.__resources, input);
  }

  public fetchEmailIdentityPolicies(input: shapes.Sesv2GetEmailIdentityPoliciesRequest): SESV2ResponsesFetchEmailIdentityPolicies {
    return new SESV2ResponsesFetchEmailIdentityPolicies(this, this.__resources, input);
  }

  public fetchEmailTemplate(input: shapes.Sesv2GetEmailTemplateRequest): SESV2ResponsesFetchEmailTemplate {
    return new SESV2ResponsesFetchEmailTemplate(this, this.__resources, input);
  }

  public fetchImportJob(input: shapes.Sesv2GetImportJobRequest): SESV2ResponsesFetchImportJob {
    return new SESV2ResponsesFetchImportJob(this, this.__resources, input);
  }

  public fetchSuppressedDestination(input: shapes.Sesv2GetSuppressedDestinationRequest): SESV2ResponsesFetchSuppressedDestination {
    return new SESV2ResponsesFetchSuppressedDestination(this, this.__resources, input);
  }

  public listConfigurationSets(input: shapes.Sesv2ListConfigurationSetsRequest): SESV2ResponsesListConfigurationSets {
    return new SESV2ResponsesListConfigurationSets(this, this.__resources, input);
  }

  public listContactLists(input: shapes.Sesv2ListContactListsRequest): SESV2ResponsesListContactLists {
    return new SESV2ResponsesListContactLists(this, this.__resources, input);
  }

  public listContacts(input: shapes.Sesv2ListContactsRequest): SESV2ResponsesListContacts {
    return new SESV2ResponsesListContacts(this, this.__resources, input);
  }

  public listCustomVerificationEmailTemplates(input: shapes.Sesv2ListCustomVerificationEmailTemplatesRequest): SESV2ResponsesListCustomVerificationEmailTemplates {
    return new SESV2ResponsesListCustomVerificationEmailTemplates(this, this.__resources, input);
  }

  public listDedicatedIpPools(input: shapes.Sesv2ListDedicatedIpPoolsRequest): SESV2ResponsesListDedicatedIpPools {
    return new SESV2ResponsesListDedicatedIpPools(this, this.__resources, input);
  }

  public listDeliverabilityTestReports(input: shapes.Sesv2ListDeliverabilityTestReportsRequest): SESV2ResponsesListDeliverabilityTestReports {
    return new SESV2ResponsesListDeliverabilityTestReports(this, this.__resources, input);
  }

  public listDomainDeliverabilityCampaigns(input: shapes.Sesv2ListDomainDeliverabilityCampaignsRequest): SESV2ResponsesListDomainDeliverabilityCampaigns {
    return new SESV2ResponsesListDomainDeliverabilityCampaigns(this, this.__resources, input);
  }

  public listEmailIdentities(input: shapes.Sesv2ListEmailIdentitiesRequest): SESV2ResponsesListEmailIdentities {
    return new SESV2ResponsesListEmailIdentities(this, this.__resources, input);
  }

  public listEmailTemplates(input: shapes.Sesv2ListEmailTemplatesRequest): SESV2ResponsesListEmailTemplates {
    return new SESV2ResponsesListEmailTemplates(this, this.__resources, input);
  }

  public listImportJobs(input: shapes.Sesv2ListImportJobsRequest): SESV2ResponsesListImportJobs {
    return new SESV2ResponsesListImportJobs(this, this.__resources, input);
  }

  public listSuppressedDestinations(input: shapes.Sesv2ListSuppressedDestinationsRequest): SESV2ResponsesListSuppressedDestinations {
    return new SESV2ResponsesListSuppressedDestinations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.Sesv2ListTagsForResourceRequest): SESV2ResponsesListTagsForResource {
    return new SESV2ResponsesListTagsForResource(this, this.__resources, input);
  }

  public putAccountDedicatedIpWarmupAttributes(input: shapes.Sesv2PutAccountDedicatedIpWarmupAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountDedicatedIpWarmupAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutAccountDedicatedIpWarmupAttributes'),
        parameters: {
          AutoWarmupEnabled: input.autoWarmupEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountDedicatedIpWarmupAttributes', props);
  }

  public putAccountDetails(input: shapes.Sesv2PutAccountDetailsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountDetails',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutAccountDetails'),
        parameters: {
          MailType: input.mailType,
          WebsiteURL: input.websiteUrl,
          ContactLanguage: input.contactLanguage,
          UseCaseDescription: input.useCaseDescription,
          AdditionalContactEmailAddresses: input.additionalContactEmailAddresses,
          ProductionAccessEnabled: input.productionAccessEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountDetails', props);
  }

  public putAccountSendingAttributes(input: shapes.Sesv2PutAccountSendingAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSendingAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutAccountSendingAttributes'),
        parameters: {
          SendingEnabled: input.sendingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountSendingAttributes', props);
  }

  public putAccountSuppressionAttributes(input: shapes.Sesv2PutAccountSuppressionAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAccountSuppressionAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutAccountSuppressionAttributes'),
        parameters: {
          SuppressedReasons: input.suppressedReasons,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutAccountSuppressionAttributes', props);
  }

  public putConfigurationSetDeliveryOptions(input: shapes.Sesv2PutConfigurationSetDeliveryOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetDeliveryOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutConfigurationSetDeliveryOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          TlsPolicy: input.tlsPolicy,
          SendingPoolName: input.sendingPoolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetDeliveryOptions', props);
  }

  public putConfigurationSetReputationOptions(input: shapes.Sesv2PutConfigurationSetReputationOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetReputationOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutConfigurationSetReputationOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          ReputationMetricsEnabled: input.reputationMetricsEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetReputationOptions', props);
  }

  public putConfigurationSetSendingOptions(input: shapes.Sesv2PutConfigurationSetSendingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetSendingOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutConfigurationSetSendingOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          SendingEnabled: input.sendingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetSendingOptions', props);
  }

  public putConfigurationSetSuppressionOptions(input: shapes.Sesv2PutConfigurationSetSuppressionOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetSuppressionOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutConfigurationSetSuppressionOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          SuppressedReasons: input.suppressedReasons,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetSuppressionOptions', props);
  }

  public putConfigurationSetTrackingOptions(input: shapes.Sesv2PutConfigurationSetTrackingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConfigurationSetTrackingOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutConfigurationSetTrackingOptions'),
        parameters: {
          ConfigurationSetName: input.configurationSetName,
          CustomRedirectDomain: input.customRedirectDomain,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConfigurationSetTrackingOptions', props);
  }

  public putDedicatedIpInPool(input: shapes.Sesv2PutDedicatedIpInPoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDedicatedIpInPool',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutDedicatedIpInPool'),
        parameters: {
          Ip: input.ip,
          DestinationPoolName: input.destinationPoolName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDedicatedIpInPool', props);
  }

  public putDedicatedIpWarmupAttributes(input: shapes.Sesv2PutDedicatedIpWarmupAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDedicatedIpWarmupAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutDedicatedIpWarmupAttributes'),
        parameters: {
          Ip: input.ip,
          WarmupPercentage: input.warmupPercentage,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDedicatedIpWarmupAttributes', props);
  }

  public putDeliverabilityDashboardOption(input: shapes.Sesv2PutDeliverabilityDashboardOptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDeliverabilityDashboardOption',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutDeliverabilityDashboardOption'),
        parameters: {
          DashboardEnabled: input.dashboardEnabled,
          SubscribedDomains: input.subscribedDomains,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDeliverabilityDashboardOption', props);
  }

  public putEmailIdentityConfigurationSetAttributes(input: shapes.Sesv2PutEmailIdentityConfigurationSetAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityConfigurationSetAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityConfigurationSetAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          ConfigurationSetName: input.configurationSetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityConfigurationSetAttributes', props);
  }

  public putEmailIdentityDkimAttributes(input: shapes.Sesv2PutEmailIdentityDkimAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityDkimAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityDkimAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          SigningEnabled: input.signingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityDkimAttributes', props);
  }

  public putEmailIdentityDkimSigningAttributes(input: shapes.Sesv2PutEmailIdentityDkimSigningAttributesRequest): SESV2ResponsesPutEmailIdentityDkimSigningAttributes {
    return new SESV2ResponsesPutEmailIdentityDkimSigningAttributes(this, this.__resources, input);
  }

  public putEmailIdentityFeedbackAttributes(input: shapes.Sesv2PutEmailIdentityFeedbackAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityFeedbackAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityFeedbackAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          EmailForwardingEnabled: input.emailForwardingEnabled,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityFeedbackAttributes', props);
  }

  public putEmailIdentityMailFromAttributes(input: shapes.Sesv2PutEmailIdentityMailFromAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityMailFromAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityMailFromAttributes'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          MailFromDomain: input.mailFromDomain,
          BehaviorOnMxFailure: input.behaviorOnMxFailure,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutEmailIdentityMailFromAttributes', props);
  }

  public putSuppressedDestination(input: shapes.Sesv2PutSuppressedDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutSuppressedDestination'),
        parameters: {
          EmailAddress: input.emailAddress,
          Reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutSuppressedDestination', props);
  }

  public sendBulkEmail(input: shapes.Sesv2SendBulkEmailRequest): SESV2ResponsesSendBulkEmail {
    return new SESV2ResponsesSendBulkEmail(this, this.__resources, input);
  }

  public sendCustomVerificationEmail(input: shapes.Sesv2SendCustomVerificationEmailRequest): SESV2ResponsesSendCustomVerificationEmail {
    return new SESV2ResponsesSendCustomVerificationEmail(this, this.__resources, input);
  }

  public sendEmail(input: shapes.Sesv2SendEmailRequest): SESV2ResponsesSendEmail {
    return new SESV2ResponsesSendEmail(this, this.__resources, input);
  }

  public tagResource(input: shapes.Sesv2TagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testRenderEmailTemplate(input: shapes.Sesv2TestRenderEmailTemplateRequest): SESV2ResponsesTestRenderEmailTemplate {
    return new SESV2ResponsesTestRenderEmailTemplate(this, this.__resources, input);
  }

  public untagResource(input: shapes.Sesv2UntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConfigurationSetEventDestination(input: shapes.Sesv2UpdateConfigurationSetEventDestinationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationSetEventDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateConfigurationSetEventDestination'),
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

  public updateContact(input: shapes.Sesv2UpdateContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateContact'),
        parameters: {
          ContactListName: input.contactListName,
          EmailAddress: input.emailAddress,
          TopicPreferences: input.topicPreferences,
          UnsubscribeAll: input.unsubscribeAll,
          AttributesData: input.attributesData,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContact', props);
  }

  public updateContactList(input: shapes.Sesv2UpdateContactListRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateContactList'),
        parameters: {
          ContactListName: input.contactListName,
          Topics: input.topics,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContactList', props);
  }

  public updateCustomVerificationEmailTemplate(input: shapes.Sesv2UpdateCustomVerificationEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateCustomVerificationEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
          FromEmailAddress: input.fromEmailAddress,
          TemplateSubject: input.templateSubject,
          TemplateContent: input.templateContent,
          SuccessRedirectionURL: input.successRedirectionUrl,
          FailureRedirectionURL: input.failureRedirectionUrl,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCustomVerificationEmailTemplate', props);
  }

  public updateEmailIdentityPolicy(input: shapes.Sesv2UpdateEmailIdentityPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEmailIdentityPolicy',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateEmailIdentityPolicy'),
        parameters: {
          EmailIdentity: input.emailIdentity,
          PolicyName: input.policyName,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEmailIdentityPolicy', props);
  }

  public updateEmailTemplate(input: shapes.Sesv2UpdateEmailTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.UpdateEmailTemplate'),
        parameters: {
          TemplateName: input.templateName,
          TemplateContent: {
            Subject: input.templateContent.subject,
            Text: input.templateContent.text,
            Html: input.templateContent.html,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEmailTemplate', props);
  }

}

export class SESV2ResponsesCreateDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2CreateDeliverabilityTestReportRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateDeliverabilityTestReport.ReportId'),
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
              TemplateName: this.__input.content.template?.templateName,
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateDeliverabilityTestReport.DeliverabilityTestStatus'),
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
              TemplateName: this.__input.content.template?.templateName,
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

export class SESV2ResponsesCreateEmailIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2CreateEmailIdentityRequest) {
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.IdentityType'),
        outputPath: 'IdentityType',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): SESV2ResponsesCreateEmailIdentityDkimAttributes {
    return new SESV2ResponsesCreateEmailIdentityDkimAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesCreateEmailIdentityDkimAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2CreateEmailIdentityRequest) {
  }

  public get signingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.SigningEnabled'),
        outputPath: 'DkimAttributes.SigningEnabled',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.Status'),
        outputPath: 'DkimAttributes.Status',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

  public get signingAttributesOrigin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.SigningAttributesOrigin'),
        outputPath: 'DkimAttributes.SigningAttributesOrigin',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          Tags: this.__input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.__input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEmailIdentity.DkimAttributes.SigningAttributesOrigin', props);
    return resource.getResponseField('DkimAttributes.SigningAttributesOrigin') as unknown as string;
  }

}

export class SESV2ResponsesCreateImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2CreateImportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateImportJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          ImportDestination: {
            SuppressionListDestination: {
              SuppressionListImportAction: this.__input.importDestination.suppressionListDestination?.suppressionListImportAction,
            },
            ContactListDestination: {
              ContactListName: this.__input.importDestination.contactListDestination?.contactListName,
              ContactListImportAction: this.__input.importDestination.contactListDestination?.contactListImportAction,
            },
          },
          ImportDataSource: {
            S3Url: this.__input.importDataSource.s3Url,
            DataFormat: this.__input.importDataSource.dataFormat,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class SESV2ResponsesFetchAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get dedicatedIpAutoWarmupEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.DedicatedIpAutoWarmupEnabled'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.EnforcementStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.ProductionAccessEnabled'),
        outputPath: 'ProductionAccessEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.ProductionAccessEnabled', props);
    return resource.getResponseField('ProductionAccessEnabled') as unknown as boolean;
  }

  public get sendQuota(): SESV2ResponsesFetchAccountSendQuota {
    return new SESV2ResponsesFetchAccountSendQuota(this.__scope, this.__resources);
  }

  public get sendingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.SendingEnabled'),
        outputPath: 'SendingEnabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendingEnabled', props);
    return resource.getResponseField('SendingEnabled') as unknown as boolean;
  }

  public get suppressionAttributes(): SESV2ResponsesFetchAccountSuppressionAttributes {
    return new SESV2ResponsesFetchAccountSuppressionAttributes(this.__scope, this.__resources);
  }

  public get details(): SESV2ResponsesFetchAccountDetails {
    return new SESV2ResponsesFetchAccountDetails(this.__scope, this.__resources);
  }

}

export class SESV2ResponsesFetchAccountSendQuota {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get max24HourSend(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.SendQuota.Max24HourSend'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.SendQuota.MaxSendRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.SendQuota.SentLast24Hours'),
        outputPath: 'SendQuota.SentLast24Hours',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SendQuota.SentLast24Hours', props);
    return resource.getResponseField('SendQuota.SentLast24Hours') as unknown as number;
  }

}

export class SESV2ResponsesFetchAccountSuppressionAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get suppressedReasons(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.SuppressionAttributes.SuppressedReasons'),
        outputPath: 'SuppressionAttributes.SuppressedReasons',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.SuppressionAttributes.SuppressedReasons', props);
    return resource.getResponseField('SuppressionAttributes.SuppressedReasons') as unknown as string[];
  }

}

export class SESV2ResponsesFetchAccountDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get mailType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.MailType'),
        outputPath: 'Details.MailType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.MailType', props);
    return resource.getResponseField('Details.MailType') as unknown as string;
  }

  public get websiteUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.WebsiteURL'),
        outputPath: 'Details.WebsiteURL',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.WebsiteURL', props);
    return resource.getResponseField('Details.WebsiteURL') as unknown as string;
  }

  public get contactLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.ContactLanguage'),
        outputPath: 'Details.ContactLanguage',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.ContactLanguage', props);
    return resource.getResponseField('Details.ContactLanguage') as unknown as string;
  }

  public get useCaseDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.UseCaseDescription'),
        outputPath: 'Details.UseCaseDescription',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.UseCaseDescription', props);
    return resource.getResponseField('Details.UseCaseDescription') as unknown as string;
  }

  public get additionalContactEmailAddresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.AdditionalContactEmailAddresses'),
        outputPath: 'Details.AdditionalContactEmailAddresses',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.AdditionalContactEmailAddresses', props);
    return resource.getResponseField('Details.AdditionalContactEmailAddresses') as unknown as string[];
  }

  public get reviewDetails(): SESV2ResponsesFetchAccountDetailsReviewDetails {
    return new SESV2ResponsesFetchAccountDetailsReviewDetails(this.__scope, this.__resources);
  }

}

export class SESV2ResponsesFetchAccountDetailsReviewDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.ReviewDetails.Status'),
        outputPath: 'Details.ReviewDetails.Status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.ReviewDetails.Status', props);
    return resource.getResponseField('Details.ReviewDetails.Status') as unknown as string;
  }

  public get caseId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccount',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetAccount.Details.ReviewDetails.CaseId'),
        outputPath: 'Details.ReviewDetails.CaseId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccount.Details.ReviewDetails.CaseId', props);
    return resource.getResponseField('Details.ReviewDetails.CaseId') as unknown as string;
  }

}

export class SESV2ResponsesFetchBlacklistReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetBlacklistReportsRequest) {
  }

  public get blacklistReport(): Record<string, shapes.Sesv2BlacklistEntry[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlacklistReports',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetBlacklistReports.BlacklistReport'),
        outputPath: 'BlacklistReport',
        parameters: {
          BlacklistItemNames: this.__input.blacklistItemNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlacklistReports.BlacklistReport', props);
    return resource.getResponseField('BlacklistReport') as unknown as Record<string, shapes.Sesv2BlacklistEntry[]>;
  }

}

export class SESV2ResponsesFetchConfigurationSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get configurationSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.ConfigurationSetName'),
        outputPath: 'ConfigurationSetName',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.ConfigurationSetName', props);
    return resource.getResponseField('ConfigurationSetName') as unknown as string;
  }

  public get trackingOptions(): SESV2ResponsesFetchConfigurationSetTrackingOptions {
    return new SESV2ResponsesFetchConfigurationSetTrackingOptions(this.__scope, this.__resources, this.__input);
  }

  public get deliveryOptions(): SESV2ResponsesFetchConfigurationSetDeliveryOptions {
    return new SESV2ResponsesFetchConfigurationSetDeliveryOptions(this.__scope, this.__resources, this.__input);
  }

  public get reputationOptions(): SESV2ResponsesFetchConfigurationSetReputationOptions {
    return new SESV2ResponsesFetchConfigurationSetReputationOptions(this.__scope, this.__resources, this.__input);
  }

  public get sendingOptions(): SESV2ResponsesFetchConfigurationSetSendingOptions {
    return new SESV2ResponsesFetchConfigurationSetSendingOptions(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.Sesv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

  public get suppressionOptions(): SESV2ResponsesFetchConfigurationSetSuppressionOptions {
    return new SESV2ResponsesFetchConfigurationSetSuppressionOptions(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchConfigurationSetTrackingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get customRedirectDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.TrackingOptions.CustomRedirectDomain'),
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

export class SESV2ResponsesFetchConfigurationSetDeliveryOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get tlsPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.DeliveryOptions.TlsPolicy'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.DeliveryOptions.SendingPoolName'),
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

export class SESV2ResponsesFetchConfigurationSetReputationOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get reputationMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.ReputationOptions.ReputationMetricsEnabled'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.ReputationOptions.LastFreshStart'),
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

export class SESV2ResponsesFetchConfigurationSetSendingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get sendingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.SendingOptions.SendingEnabled'),
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

export class SESV2ResponsesFetchConfigurationSetSuppressionOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetRequest) {
  }

  public get suppressedReasons(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSet',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.SuppressionOptions.SuppressedReasons'),
        outputPath: 'SuppressionOptions.SuppressedReasons',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSet.SuppressionOptions.SuppressedReasons', props);
    return resource.getResponseField('SuppressionOptions.SuppressedReasons') as unknown as string[];
  }

}

export class SESV2ResponsesFetchConfigurationSetEventDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetConfigurationSetEventDestinationsRequest) {
  }

  public get eventDestinations(): shapes.Sesv2EventDestination[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationSetEventDestinations',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSetEventDestinations.EventDestinations'),
        outputPath: 'EventDestinations',
        parameters: {
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationSetEventDestinations.EventDestinations', props);
    return resource.getResponseField('EventDestinations') as unknown as shapes.Sesv2EventDestination[];
  }

}

export class SESV2ResponsesFetchContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetContactRequest) {
  }

  public get contactListName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.ContactListName'),
        outputPath: 'ContactListName',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.ContactListName', props);
    return resource.getResponseField('ContactListName') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.EmailAddress'),
        outputPath: 'EmailAddress',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.EmailAddress', props);
    return resource.getResponseField('EmailAddress') as unknown as string;
  }

  public get topicPreferences(): shapes.Sesv2TopicPreference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.TopicPreferences'),
        outputPath: 'TopicPreferences',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.TopicPreferences', props);
    return resource.getResponseField('TopicPreferences') as unknown as shapes.Sesv2TopicPreference[];
  }

  public get topicDefaultPreferences(): shapes.Sesv2TopicPreference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.TopicDefaultPreferences'),
        outputPath: 'TopicDefaultPreferences',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.TopicDefaultPreferences', props);
    return resource.getResponseField('TopicDefaultPreferences') as unknown as shapes.Sesv2TopicPreference[];
  }

  public get unsubscribeAll(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.UnsubscribeAll'),
        outputPath: 'UnsubscribeAll',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.UnsubscribeAll', props);
    return resource.getResponseField('UnsubscribeAll') as unknown as boolean;
  }

  public get attributesData(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.AttributesData'),
        outputPath: 'AttributesData',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.AttributesData', props);
    return resource.getResponseField('AttributesData') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContact.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          ContactListName: this.__input.contactListName,
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

}

export class SESV2ResponsesFetchContactList {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetContactListRequest) {
  }

  public get contactListName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.ContactListName'),
        outputPath: 'ContactListName',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.ContactListName', props);
    return resource.getResponseField('ContactListName') as unknown as string;
  }

  public get topics(): shapes.Sesv2Topic[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.Topics'),
        outputPath: 'Topics',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.Topics', props);
    return resource.getResponseField('Topics') as unknown as shapes.Sesv2Topic[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.Description'),
        outputPath: 'Description',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.LastUpdatedTimestamp'),
        outputPath: 'LastUpdatedTimestamp',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

  public get tags(): shapes.Sesv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactList',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetContactList.Tags'),
        outputPath: 'Tags',
        parameters: {
          ContactListName: this.__input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactList.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2ResponsesFetchCustomVerificationEmailTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetCustomVerificationEmailTemplateRequest) {
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get fromEmailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.FromEmailAddress'),
        outputPath: 'FromEmailAddress',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.FromEmailAddress', props);
    return resource.getResponseField('FromEmailAddress') as unknown as string;
  }

  public get templateSubject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.TemplateSubject'),
        outputPath: 'TemplateSubject',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.TemplateSubject', props);
    return resource.getResponseField('TemplateSubject') as unknown as string;
  }

  public get templateContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.TemplateContent'),
        outputPath: 'TemplateContent',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.TemplateContent', props);
    return resource.getResponseField('TemplateContent') as unknown as string;
  }

  public get successRedirectionUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.SuccessRedirectionURL'),
        outputPath: 'SuccessRedirectionURL',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.SuccessRedirectionURL', props);
    return resource.getResponseField('SuccessRedirectionURL') as unknown as string;
  }

  public get failureRedirectionUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomVerificationEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetCustomVerificationEmailTemplate.FailureRedirectionURL'),
        outputPath: 'FailureRedirectionURL',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomVerificationEmailTemplate.FailureRedirectionURL', props);
    return resource.getResponseField('FailureRedirectionURL') as unknown as string;
  }

}

export class SESV2ResponsesFetchDedicatedIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDedicatedIpRequest) {
  }

  public get dedicatedIp(): SESV2ResponsesFetchDedicatedIpDedicatedIp {
    return new SESV2ResponsesFetchDedicatedIpDedicatedIp(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchDedicatedIpDedicatedIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDedicatedIpRequest) {
  }

  public get ip(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIp',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.Ip'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.WarmupStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.WarmupPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.PoolName'),
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

export class SESV2ResponsesFetchDedicatedIps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDedicatedIpsRequest) {
  }

  public get dedicatedIps(): shapes.Sesv2DedicatedIp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIps',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIps.DedicatedIps'),
        outputPath: 'DedicatedIps',
        parameters: {
          PoolName: this.__input.poolName,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDedicatedIps.DedicatedIps', props);
    return resource.getResponseField('DedicatedIps') as unknown as shapes.Sesv2DedicatedIp[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDedicatedIps',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIps.NextToken'),
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

export class SESV2ResponsesFetchDeliverabilityDashboardOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get dashboardEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityDashboardOptions.DashboardEnabled'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityDashboardOptions.SubscriptionExpiryDate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityDashboardOptions.AccountStatus'),
        outputPath: 'AccountStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.AccountStatus', props);
    return resource.getResponseField('AccountStatus') as unknown as string;
  }

  public get activeSubscribedDomains(): shapes.Sesv2DomainDeliverabilityTrackingOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityDashboardOptions.ActiveSubscribedDomains'),
        outputPath: 'ActiveSubscribedDomains',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.ActiveSubscribedDomains', props);
    return resource.getResponseField('ActiveSubscribedDomains') as unknown as shapes.Sesv2DomainDeliverabilityTrackingOption[];
  }

  public get pendingExpirationSubscribedDomains(): shapes.Sesv2DomainDeliverabilityTrackingOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityDashboardOptions',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains'),
        outputPath: 'PendingExpirationSubscribedDomains',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains', props);
    return resource.getResponseField('PendingExpirationSubscribedDomains') as unknown as shapes.Sesv2DomainDeliverabilityTrackingOption[];
  }

}

export class SESV2ResponsesFetchDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
  }

  public get deliverabilityTestReport(): SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport {
    return new SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport(this.__scope, this.__resources, this.__input);
  }

  public get overallPlacement(): SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement {
    return new SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement(this.__scope, this.__resources, this.__input);
  }

  public get ispPlacements(): shapes.Sesv2IspPlacement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.IspPlacements'),
        outputPath: 'IspPlacements',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.IspPlacements', props);
    return resource.getResponseField('IspPlacements') as unknown as shapes.Sesv2IspPlacement[];
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.Message'),
        outputPath: 'Message',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get tags(): shapes.Sesv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.Tags'),
        outputPath: 'Tags',
        parameters: {
          ReportId: this.__input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeliverabilityTestReport.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2ResponsesFetchDeliverabilityTestReportDeliverabilityTestReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
  }

  public get reportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.ReportId'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.ReportName'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.Subject'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.FromEmailAddress'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.CreateDate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.DeliverabilityTestStatus'),
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

export class SESV2ResponsesFetchDeliverabilityTestReportOverallPlacement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
  }

  public get inboxPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeliverabilityTestReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.InboxPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.SpamPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.MissingPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.SpfPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.DkimPercentage'),
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

export class SESV2ResponsesFetchDomainDeliverabilityCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest) {
  }

  public get domainDeliverabilityCampaign(): SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {
    return new SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest) {
  }

  public get campaignId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDeliverabilityCampaign',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.CampaignId'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ImageUrl'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Subject'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FromAddress'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SendingIps'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FirstSeenDateTime'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.LastSeenDateTime'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.InboxCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SpamCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.DeleteRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadDeleteRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ProjectedVolume'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Esps'),
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

export class SESV2ResponsesFetchDomainStatisticsReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDomainStatisticsReportRequest) {
  }

  public get overallVolume(): SESV2ResponsesFetchDomainStatisticsReportOverallVolume {
    return new SESV2ResponsesFetchDomainStatisticsReportOverallVolume(this.__scope, this.__resources, this.__input);
  }

  public get dailyVolumes(): shapes.Sesv2DailyVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.DailyVolumes'),
        outputPath: 'DailyVolumes',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.DailyVolumes', props);
    return resource.getResponseField('DailyVolumes') as unknown as shapes.Sesv2DailyVolume[];
  }

}

export class SESV2ResponsesFetchDomainStatisticsReportOverallVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDomainStatisticsReportRequest) {
  }

  public get volumeStatistics(): SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics {
    return new SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics(this.__scope, this.__resources, this.__input);
  }

  public get readRatePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.ReadRatePercent'),
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

  public get domainIspPlacements(): shapes.Sesv2DomainIspPlacement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.DomainIspPlacements'),
        outputPath: 'OverallVolume.DomainIspPlacements',
        parameters: {
          Domain: this.__input.domain,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainStatisticsReport.OverallVolume.DomainIspPlacements', props);
    return resource.getResponseField('OverallVolume.DomainIspPlacements') as unknown as shapes.Sesv2DomainIspPlacement[];
  }

}

export class SESV2ResponsesFetchDomainStatisticsReportOverallVolumeVolumeStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetDomainStatisticsReportRequest) {
  }

  public get inboxRawCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainStatisticsReport',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.InboxRawCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.SpamRawCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedInbox'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedSpam'),
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

export class SESV2ResponsesFetchEmailIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailIdentityRequest) {
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.IdentityType'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.FeedbackForwardingStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): SESV2ResponsesFetchEmailIdentityDkimAttributes {
    return new SESV2ResponsesFetchEmailIdentityDkimAttributes(this.__scope, this.__resources, this.__input);
  }

  public get mailFromAttributes(): SESV2ResponsesFetchEmailIdentityMailFromAttributes {
    return new SESV2ResponsesFetchEmailIdentityMailFromAttributes(this.__scope, this.__resources, this.__input);
  }

  public get policies(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.Policies'),
        outputPath: 'Policies',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.Policies', props);
    return resource.getResponseField('Policies') as unknown as Record<string, string>;
  }

  public get tags(): shapes.Sesv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.Tags'),
        outputPath: 'Tags',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

  public get configurationSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.ConfigurationSetName'),
        outputPath: 'ConfigurationSetName',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.ConfigurationSetName', props);
    return resource.getResponseField('ConfigurationSetName') as unknown as string;
  }

}

export class SESV2ResponsesFetchEmailIdentityDkimAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailIdentityRequest) {
  }

  public get signingEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.SigningEnabled'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.Status'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.DkimAttributes.Tokens', props);
    return resource.getResponseField('DkimAttributes.Tokens') as unknown as string[];
  }

  public get signingAttributesOrigin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.SigningAttributesOrigin'),
        outputPath: 'DkimAttributes.SigningAttributesOrigin',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentity.DkimAttributes.SigningAttributesOrigin', props);
    return resource.getResponseField('DkimAttributes.SigningAttributesOrigin') as unknown as string;
  }

}

export class SESV2ResponsesFetchEmailIdentityMailFromAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailIdentityRequest) {
  }

  public get mailFromDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentity',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.MailFromAttributes.MailFromDomain'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.MailFromAttributes.MailFromDomainStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.MailFromAttributes.BehaviorOnMxFailure'),
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

export class SESV2ResponsesFetchEmailIdentityPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailIdentityPoliciesRequest) {
  }

  public get policies(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailIdentityPolicies',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentityPolicies.Policies'),
        outputPath: 'Policies',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailIdentityPolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as Record<string, string>;
  }

}

export class SESV2ResponsesFetchEmailTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailTemplateRequest) {
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailTemplate.TemplateName'),
        outputPath: 'TemplateName',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailTemplate.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get templateContent(): SESV2ResponsesFetchEmailTemplateTemplateContent {
    return new SESV2ResponsesFetchEmailTemplateTemplateContent(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchEmailTemplateTemplateContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetEmailTemplateRequest) {
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailTemplate.TemplateContent.Subject'),
        outputPath: 'TemplateContent.Subject',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailTemplate.TemplateContent.Subject', props);
    return resource.getResponseField('TemplateContent.Subject') as unknown as string;
  }

  public get text(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailTemplate.TemplateContent.Text'),
        outputPath: 'TemplateContent.Text',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailTemplate.TemplateContent.Text', props);
    return resource.getResponseField('TemplateContent.Text') as unknown as string;
  }

  public get html(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailTemplate.TemplateContent.Html'),
        outputPath: 'TemplateContent.Html',
        parameters: {
          TemplateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEmailTemplate.TemplateContent.Html', props);
    return resource.getResponseField('TemplateContent.Html') as unknown as string;
  }

}

export class SESV2ResponsesFetchImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get importDestination(): SESV2ResponsesFetchImportJobImportDestination {
    return new SESV2ResponsesFetchImportJobImportDestination(this.__scope, this.__resources, this.__input);
  }

  public get importDataSource(): SESV2ResponsesFetchImportJobImportDataSource {
    return new SESV2ResponsesFetchImportJobImportDataSource(this.__scope, this.__resources, this.__input);
  }

  public get failureInfo(): SESV2ResponsesFetchImportJobFailureInfo {
    return new SESV2ResponsesFetchImportJobFailureInfo(this.__scope, this.__resources, this.__input);
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.JobStatus'),
        outputPath: 'JobStatus',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.JobStatus', props);
    return resource.getResponseField('JobStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get completedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.CompletedTimestamp'),
        outputPath: 'CompletedTimestamp',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.CompletedTimestamp', props);
    return resource.getResponseField('CompletedTimestamp') as unknown as string;
  }

  public get processedRecordsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ProcessedRecordsCount'),
        outputPath: 'ProcessedRecordsCount',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ProcessedRecordsCount', props);
    return resource.getResponseField('ProcessedRecordsCount') as unknown as number;
  }

  public get failedRecordsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.FailedRecordsCount'),
        outputPath: 'FailedRecordsCount',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.FailedRecordsCount', props);
    return resource.getResponseField('FailedRecordsCount') as unknown as number;
  }

}

export class SESV2ResponsesFetchImportJobImportDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get suppressionListDestination(): SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination {
    return new SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination(this.__scope, this.__resources, this.__input);
  }

  public get contactListDestination(): SESV2ResponsesFetchImportJobImportDestinationContactListDestination {
    return new SESV2ResponsesFetchImportJobImportDestinationContactListDestination(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchImportJobImportDestinationSuppressionListDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get suppressionListImportAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ImportDestination.SuppressionListDestination.SuppressionListImportAction'),
        outputPath: 'ImportDestination.SuppressionListDestination.SuppressionListImportAction',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ImportDestination.SuppressionListDestination.SuppressionListImportAction', props);
    return resource.getResponseField('ImportDestination.SuppressionListDestination.SuppressionListImportAction') as unknown as string;
  }

}

export class SESV2ResponsesFetchImportJobImportDestinationContactListDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get contactListName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ImportDestination.ContactListDestination.ContactListName'),
        outputPath: 'ImportDestination.ContactListDestination.ContactListName',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ImportDestination.ContactListDestination.ContactListName', props);
    return resource.getResponseField('ImportDestination.ContactListDestination.ContactListName') as unknown as string;
  }

  public get contactListImportAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ImportDestination.ContactListDestination.ContactListImportAction'),
        outputPath: 'ImportDestination.ContactListDestination.ContactListImportAction',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ImportDestination.ContactListDestination.ContactListImportAction', props);
    return resource.getResponseField('ImportDestination.ContactListDestination.ContactListImportAction') as unknown as string;
  }

}

export class SESV2ResponsesFetchImportJobImportDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get s3Url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ImportDataSource.S3Url'),
        outputPath: 'ImportDataSource.S3Url',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ImportDataSource.S3Url', props);
    return resource.getResponseField('ImportDataSource.S3Url') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.ImportDataSource.DataFormat'),
        outputPath: 'ImportDataSource.DataFormat',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.ImportDataSource.DataFormat', props);
    return resource.getResponseField('ImportDataSource.DataFormat') as unknown as string;
  }

}

export class SESV2ResponsesFetchImportJobFailureInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetImportJobRequest) {
  }

  public get failedRecordsS3Url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.FailureInfo.FailedRecordsS3Url'),
        outputPath: 'FailureInfo.FailedRecordsS3Url',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.FailureInfo.FailedRecordsS3Url', props);
    return resource.getResponseField('FailureInfo.FailedRecordsS3Url') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getImportJob',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetImportJob.FailureInfo.ErrorMessage'),
        outputPath: 'FailureInfo.ErrorMessage',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetImportJob.FailureInfo.ErrorMessage', props);
    return resource.getResponseField('FailureInfo.ErrorMessage') as unknown as string;
  }

}

export class SESV2ResponsesFetchSuppressedDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetSuppressedDestinationRequest) {
  }

  public get suppressedDestination(): SESV2ResponsesFetchSuppressedDestinationSuppressedDestination {
    return new SESV2ResponsesFetchSuppressedDestinationSuppressedDestination(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchSuppressedDestinationSuppressedDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetSuppressedDestinationRequest) {
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetSuppressedDestination.SuppressedDestination.EmailAddress'),
        outputPath: 'SuppressedDestination.EmailAddress',
        parameters: {
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuppressedDestination.SuppressedDestination.EmailAddress', props);
    return resource.getResponseField('SuppressedDestination.EmailAddress') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetSuppressedDestination.SuppressedDestination.Reason'),
        outputPath: 'SuppressedDestination.Reason',
        parameters: {
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuppressedDestination.SuppressedDestination.Reason', props);
    return resource.getResponseField('SuppressedDestination.Reason') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetSuppressedDestination.SuppressedDestination.LastUpdateTime'),
        outputPath: 'SuppressedDestination.LastUpdateTime',
        parameters: {
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuppressedDestination.SuppressedDestination.LastUpdateTime', props);
    return resource.getResponseField('SuppressedDestination.LastUpdateTime') as unknown as string;
  }

  public get attributes(): SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes {
    return new SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class SESV2ResponsesFetchSuppressedDestinationSuppressedDestinationAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2GetSuppressedDestinationRequest) {
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetSuppressedDestination.SuppressedDestination.Attributes.MessageId'),
        outputPath: 'SuppressedDestination.Attributes.MessageId',
        parameters: {
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuppressedDestination.SuppressedDestination.Attributes.MessageId', props);
    return resource.getResponseField('SuppressedDestination.Attributes.MessageId') as unknown as string;
  }

  public get feedbackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuppressedDestination',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetSuppressedDestination.SuppressedDestination.Attributes.FeedbackId'),
        outputPath: 'SuppressedDestination.Attributes.FeedbackId',
        parameters: {
          EmailAddress: this.__input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuppressedDestination.SuppressedDestination.Attributes.FeedbackId', props);
    return resource.getResponseField('SuppressedDestination.Attributes.FeedbackId') as unknown as string;
  }

}

export class SESV2ResponsesListConfigurationSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListConfigurationSetsRequest) {
  }

  public get configurationSets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationSets',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListConfigurationSets.ConfigurationSets'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListConfigurationSets.NextToken'),
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

export class SESV2ResponsesListContactLists {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListContactListsRequest) {
  }

  public get contactLists(): shapes.Sesv2ContactList[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactLists',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListContactLists.ContactLists'),
        outputPath: 'ContactLists',
        parameters: {
          PageSize: this.__input.pageSize,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactLists.ContactLists', props);
    return resource.getResponseField('ContactLists') as unknown as shapes.Sesv2ContactList[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContactLists',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListContactLists.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PageSize: this.__input.pageSize,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContactLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListContacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListContactsRequest) {
  }

  public get contacts(): shapes.Sesv2Contact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListContacts.Contacts'),
        outputPath: 'Contacts',
        parameters: {
          ContactListName: this.__input.contactListName,
          Filter: {
            FilteredStatus: this.__input.filter?.filteredStatus,
            TopicFilter: {
              TopicName: this.__input.filter?.topicFilter?.topicName,
              UseDefaultIfPreferenceUnavailable: this.__input.filter?.topicFilter?.useDefaultIfPreferenceUnavailable,
            },
          },
          PageSize: this.__input.pageSize,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.Contacts', props);
    return resource.getResponseField('Contacts') as unknown as shapes.Sesv2Contact[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listContacts',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListContacts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ContactListName: this.__input.contactListName,
          Filter: {
            FilteredStatus: this.__input.filter?.filteredStatus,
            TopicFilter: {
              TopicName: this.__input.filter?.topicFilter?.topicName,
              UseDefaultIfPreferenceUnavailable: this.__input.filter?.topicFilter?.useDefaultIfPreferenceUnavailable,
            },
          },
          PageSize: this.__input.pageSize,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListContacts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListCustomVerificationEmailTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListCustomVerificationEmailTemplatesRequest) {
  }

  public get customVerificationEmailTemplates(): shapes.Sesv2CustomVerificationEmailTemplateMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomVerificationEmailTemplates',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListCustomVerificationEmailTemplates.CustomVerificationEmailTemplates'),
        outputPath: 'CustomVerificationEmailTemplates',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomVerificationEmailTemplates.CustomVerificationEmailTemplates', props);
    return resource.getResponseField('CustomVerificationEmailTemplates') as unknown as shapes.Sesv2CustomVerificationEmailTemplateMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCustomVerificationEmailTemplates',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListCustomVerificationEmailTemplates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCustomVerificationEmailTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListDedicatedIpPools {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListDedicatedIpPoolsRequest) {
  }

  public get dedicatedIpPools(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDedicatedIpPools',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDedicatedIpPools.DedicatedIpPools'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDedicatedIpPools.NextToken'),
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

export class SESV2ResponsesListDeliverabilityTestReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListDeliverabilityTestReportsRequest) {
  }

  public get deliverabilityTestReports(): shapes.Sesv2DeliverabilityTestReport[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliverabilityTestReports',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDeliverabilityTestReports.DeliverabilityTestReports'),
        outputPath: 'DeliverabilityTestReports',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeliverabilityTestReports.DeliverabilityTestReports', props);
    return resource.getResponseField('DeliverabilityTestReports') as unknown as shapes.Sesv2DeliverabilityTestReport[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeliverabilityTestReports',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDeliverabilityTestReports.NextToken'),
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

export class SESV2ResponsesListDomainDeliverabilityCampaigns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListDomainDeliverabilityCampaignsRequest) {
  }

  public get domainDeliverabilityCampaigns(): shapes.Sesv2DomainDeliverabilityCampaign[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainDeliverabilityCampaigns',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDomainDeliverabilityCampaigns.DomainDeliverabilityCampaigns'),
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
    return resource.getResponseField('DomainDeliverabilityCampaigns') as unknown as shapes.Sesv2DomainDeliverabilityCampaign[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainDeliverabilityCampaigns',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDomainDeliverabilityCampaigns.NextToken'),
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

export class SESV2ResponsesListEmailIdentities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListEmailIdentitiesRequest) {
  }

  public get emailIdentities(): shapes.Sesv2IdentityInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailIdentities',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListEmailIdentities.EmailIdentities'),
        outputPath: 'EmailIdentities',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEmailIdentities.EmailIdentities', props);
    return resource.getResponseField('EmailIdentities') as unknown as shapes.Sesv2IdentityInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailIdentities',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListEmailIdentities.NextToken'),
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

export class SESV2ResponsesListEmailTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListEmailTemplatesRequest) {
  }

  public get templatesMetadata(): shapes.Sesv2EmailTemplateMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailTemplates',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListEmailTemplates.TemplatesMetadata'),
        outputPath: 'TemplatesMetadata',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEmailTemplates.TemplatesMetadata', props);
    return resource.getResponseField('TemplatesMetadata') as unknown as shapes.Sesv2EmailTemplateMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEmailTemplates',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListEmailTemplates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEmailTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListImportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListImportJobsRequest) {
  }

  public get importJobs(): shapes.Sesv2ImportJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImportJobs',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListImportJobs.ImportJobs'),
        outputPath: 'ImportJobs',
        parameters: {
          ImportDestinationType: this.__input.importDestinationType,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImportJobs.ImportJobs', props);
    return resource.getResponseField('ImportJobs') as unknown as shapes.Sesv2ImportJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImportJobs',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListImportJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ImportDestinationType: this.__input.importDestinationType,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListSuppressedDestinations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListSuppressedDestinationsRequest) {
  }

  public get suppressedDestinationSummaries(): shapes.Sesv2SuppressedDestinationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuppressedDestinations',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListSuppressedDestinations.SuppressedDestinationSummaries'),
        outputPath: 'SuppressedDestinationSummaries',
        parameters: {
          Reasons: this.__input.reasons,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuppressedDestinations.SuppressedDestinationSummaries', props);
    return resource.getResponseField('SuppressedDestinationSummaries') as unknown as shapes.Sesv2SuppressedDestinationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuppressedDestinations',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListSuppressedDestinations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Reasons: this.__input.reasons,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          NextToken: this.__input.nextToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuppressedDestinations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2ListTagsForResourceRequest) {
  }

  public get tags(): shapes.Sesv2Tag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2ResponsesPutEmailIdentityDkimSigningAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2PutEmailIdentityDkimSigningAttributesRequest) {
  }

  public get dkimStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityDkimSigningAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityDkimSigningAttributes.DkimStatus'),
        outputPath: 'DkimStatus',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          SigningAttributesOrigin: this.__input.signingAttributesOrigin,
          SigningAttributes: {
            DomainSigningSelector: this.__input.signingAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.signingAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEmailIdentityDkimSigningAttributes.DkimStatus', props);
    return resource.getResponseField('DkimStatus') as unknown as string;
  }

  public get dkimTokens(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putEmailIdentityDkimSigningAttributes',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.PutEmailIdentityDkimSigningAttributes.DkimTokens'),
        outputPath: 'DkimTokens',
        parameters: {
          EmailIdentity: this.__input.emailIdentity,
          SigningAttributesOrigin: this.__input.signingAttributesOrigin,
          SigningAttributes: {
            DomainSigningSelector: this.__input.signingAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.__input.signingAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutEmailIdentityDkimSigningAttributes.DkimTokens', props);
    return resource.getResponseField('DkimTokens') as unknown as string[];
  }

}

export class SESV2ResponsesSendBulkEmail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2SendBulkEmailRequest) {
  }

  public get bulkEmailEntryResults(): shapes.Sesv2BulkEmailEntryResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendBulkEmail',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.SendBulkEmail.BulkEmailEntryResults'),
        outputPath: 'BulkEmailEntryResults',
        parameters: {
          FromEmailAddress: this.__input.fromEmailAddress,
          FromEmailAddressIdentityArn: this.__input.fromEmailAddressIdentityArn,
          ReplyToAddresses: this.__input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.__input.feedbackForwardingEmailAddress,
          FeedbackForwardingEmailAddressIdentityArn: this.__input.feedbackForwardingEmailAddressIdentityArn,
          DefaultEmailTags: this.__input.defaultEmailTags,
          DefaultContent: {
            Template: {
              TemplateName: this.__input.defaultContent.template?.templateName,
              TemplateArn: this.__input.defaultContent.template?.templateArn,
              TemplateData: this.__input.defaultContent.template?.templateData,
            },
          },
          BulkEmailEntries: this.__input.bulkEmailEntries,
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendBulkEmail.BulkEmailEntryResults', props);
    return resource.getResponseField('BulkEmailEntryResults') as unknown as shapes.Sesv2BulkEmailEntryResult[];
  }

}

export class SESV2ResponsesSendCustomVerificationEmail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2SendCustomVerificationEmailRequest) {
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCustomVerificationEmail',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.SendCustomVerificationEmail.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          EmailAddress: this.__input.emailAddress,
          TemplateName: this.__input.templateName,
          ConfigurationSetName: this.__input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCustomVerificationEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class SESV2ResponsesSendEmail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2SendEmailRequest) {
  }

  public get messageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendEmail',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.SendEmail.MessageId'),
        outputPath: 'MessageId',
        parameters: {
          FromEmailAddress: this.__input.fromEmailAddress,
          FromEmailAddressIdentityArn: this.__input.fromEmailAddressIdentityArn,
          Destination: {
            ToAddresses: this.__input.destination?.toAddresses,
            CcAddresses: this.__input.destination?.ccAddresses,
            BccAddresses: this.__input.destination?.bccAddresses,
          },
          ReplyToAddresses: this.__input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.__input.feedbackForwardingEmailAddress,
          FeedbackForwardingEmailAddressIdentityArn: this.__input.feedbackForwardingEmailAddressIdentityArn,
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
              TemplateName: this.__input.content.template?.templateName,
              TemplateArn: this.__input.content.template?.templateArn,
              TemplateData: this.__input.content.template?.templateData,
            },
          },
          EmailTags: this.__input.emailTags,
          ConfigurationSetName: this.__input.configurationSetName,
          ListManagementOptions: {
            ContactListName: this.__input.listManagementOptions?.contactListName,
            TopicName: this.__input.listManagementOptions?.topicName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class SESV2ResponsesTestRenderEmailTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Sesv2TestRenderEmailTemplateRequest) {
  }

  public get renderedTemplate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testRenderEmailTemplate',
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.TestRenderEmailTemplate.RenderedTemplate'),
        outputPath: 'RenderedTemplate',
        parameters: {
          TemplateName: this.__input.templateName,
          TemplateData: this.__input.templateData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestRenderEmailTemplate.RenderedTemplate', props);
    return resource.getResponseField('RenderedTemplate') as unknown as string;
  }

}

