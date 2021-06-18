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

  public createDeliverabilityTestReport(input: shapes.Sesv2CreateDeliverabilityTestReportRequest): SESV2CreateDeliverabilityTestReport {
    return new SESV2CreateDeliverabilityTestReport(this, 'CreateDeliverabilityTestReport', this.__resources, input);
  }

  public createEmailIdentity(input: shapes.Sesv2CreateEmailIdentityRequest): SESV2CreateEmailIdentity {
    return new SESV2CreateEmailIdentity(this, 'CreateEmailIdentity', this.__resources, input);
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

  public createImportJob(input: shapes.Sesv2CreateImportJobRequest): SESV2CreateImportJob {
    return new SESV2CreateImportJob(this, 'CreateImportJob', this.__resources, input);
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

  public fetchAccount(): SESV2FetchAccount {
    return new SESV2FetchAccount(this, 'FetchAccount', this.__resources);
  }

  public fetchBlacklistReports(input: shapes.Sesv2GetBlacklistReportsRequest): SESV2FetchBlacklistReports {
    return new SESV2FetchBlacklistReports(this, 'FetchBlacklistReports', this.__resources, input);
  }

  public fetchConfigurationSet(input: shapes.Sesv2GetConfigurationSetRequest): SESV2FetchConfigurationSet {
    return new SESV2FetchConfigurationSet(this, 'FetchConfigurationSet', this.__resources, input);
  }

  public fetchConfigurationSetEventDestinations(input: shapes.Sesv2GetConfigurationSetEventDestinationsRequest): SESV2FetchConfigurationSetEventDestinations {
    return new SESV2FetchConfigurationSetEventDestinations(this, 'FetchConfigurationSetEventDestinations', this.__resources, input);
  }

  public fetchContact(input: shapes.Sesv2GetContactRequest): SESV2FetchContact {
    return new SESV2FetchContact(this, 'FetchContact', this.__resources, input);
  }

  public fetchContactList(input: shapes.Sesv2GetContactListRequest): SESV2FetchContactList {
    return new SESV2FetchContactList(this, 'FetchContactList', this.__resources, input);
  }

  public fetchCustomVerificationEmailTemplate(input: shapes.Sesv2GetCustomVerificationEmailTemplateRequest): SESV2FetchCustomVerificationEmailTemplate {
    return new SESV2FetchCustomVerificationEmailTemplate(this, 'FetchCustomVerificationEmailTemplate', this.__resources, input);
  }

  public fetchDedicatedIp(input: shapes.Sesv2GetDedicatedIpRequest): SESV2FetchDedicatedIp {
    return new SESV2FetchDedicatedIp(this, 'FetchDedicatedIp', this.__resources, input);
  }

  public fetchDedicatedIps(input: shapes.Sesv2GetDedicatedIpsRequest): SESV2FetchDedicatedIps {
    return new SESV2FetchDedicatedIps(this, 'FetchDedicatedIps', this.__resources, input);
  }

  public fetchDeliverabilityDashboardOptions(): SESV2FetchDeliverabilityDashboardOptions {
    return new SESV2FetchDeliverabilityDashboardOptions(this, 'FetchDeliverabilityDashboardOptions', this.__resources);
  }

  public fetchDeliverabilityTestReport(input: shapes.Sesv2GetDeliverabilityTestReportRequest): SESV2FetchDeliverabilityTestReport {
    return new SESV2FetchDeliverabilityTestReport(this, 'FetchDeliverabilityTestReport', this.__resources, input);
  }

  public fetchDomainDeliverabilityCampaign(input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest): SESV2FetchDomainDeliverabilityCampaign {
    return new SESV2FetchDomainDeliverabilityCampaign(this, 'FetchDomainDeliverabilityCampaign', this.__resources, input);
  }

  public fetchDomainStatisticsReport(input: shapes.Sesv2GetDomainStatisticsReportRequest): SESV2FetchDomainStatisticsReport {
    return new SESV2FetchDomainStatisticsReport(this, 'FetchDomainStatisticsReport', this.__resources, input);
  }

  public fetchEmailIdentity(input: shapes.Sesv2GetEmailIdentityRequest): SESV2FetchEmailIdentity {
    return new SESV2FetchEmailIdentity(this, 'FetchEmailIdentity', this.__resources, input);
  }

  public fetchEmailIdentityPolicies(input: shapes.Sesv2GetEmailIdentityPoliciesRequest): SESV2FetchEmailIdentityPolicies {
    return new SESV2FetchEmailIdentityPolicies(this, 'FetchEmailIdentityPolicies', this.__resources, input);
  }

  public fetchEmailTemplate(input: shapes.Sesv2GetEmailTemplateRequest): SESV2FetchEmailTemplate {
    return new SESV2FetchEmailTemplate(this, 'FetchEmailTemplate', this.__resources, input);
  }

  public fetchImportJob(input: shapes.Sesv2GetImportJobRequest): SESV2FetchImportJob {
    return new SESV2FetchImportJob(this, 'FetchImportJob', this.__resources, input);
  }

  public fetchSuppressedDestination(input: shapes.Sesv2GetSuppressedDestinationRequest): SESV2FetchSuppressedDestination {
    return new SESV2FetchSuppressedDestination(this, 'FetchSuppressedDestination', this.__resources, input);
  }

  public listConfigurationSets(input: shapes.Sesv2ListConfigurationSetsRequest): SESV2ListConfigurationSets {
    return new SESV2ListConfigurationSets(this, 'ListConfigurationSets', this.__resources, input);
  }

  public listContactLists(input: shapes.Sesv2ListContactListsRequest): SESV2ListContactLists {
    return new SESV2ListContactLists(this, 'ListContactLists', this.__resources, input);
  }

  public listContacts(input: shapes.Sesv2ListContactsRequest): SESV2ListContacts {
    return new SESV2ListContacts(this, 'ListContacts', this.__resources, input);
  }

  public listCustomVerificationEmailTemplates(input: shapes.Sesv2ListCustomVerificationEmailTemplatesRequest): SESV2ListCustomVerificationEmailTemplates {
    return new SESV2ListCustomVerificationEmailTemplates(this, 'ListCustomVerificationEmailTemplates', this.__resources, input);
  }

  public listDedicatedIpPools(input: shapes.Sesv2ListDedicatedIpPoolsRequest): SESV2ListDedicatedIpPools {
    return new SESV2ListDedicatedIpPools(this, 'ListDedicatedIpPools', this.__resources, input);
  }

  public listDeliverabilityTestReports(input: shapes.Sesv2ListDeliverabilityTestReportsRequest): SESV2ListDeliverabilityTestReports {
    return new SESV2ListDeliverabilityTestReports(this, 'ListDeliverabilityTestReports', this.__resources, input);
  }

  public listDomainDeliverabilityCampaigns(input: shapes.Sesv2ListDomainDeliverabilityCampaignsRequest): SESV2ListDomainDeliverabilityCampaigns {
    return new SESV2ListDomainDeliverabilityCampaigns(this, 'ListDomainDeliverabilityCampaigns', this.__resources, input);
  }

  public listEmailIdentities(input: shapes.Sesv2ListEmailIdentitiesRequest): SESV2ListEmailIdentities {
    return new SESV2ListEmailIdentities(this, 'ListEmailIdentities', this.__resources, input);
  }

  public listEmailTemplates(input: shapes.Sesv2ListEmailTemplatesRequest): SESV2ListEmailTemplates {
    return new SESV2ListEmailTemplates(this, 'ListEmailTemplates', this.__resources, input);
  }

  public listImportJobs(input: shapes.Sesv2ListImportJobsRequest): SESV2ListImportJobs {
    return new SESV2ListImportJobs(this, 'ListImportJobs', this.__resources, input);
  }

  public listSuppressedDestinations(input: shapes.Sesv2ListSuppressedDestinationsRequest): SESV2ListSuppressedDestinations {
    return new SESV2ListSuppressedDestinations(this, 'ListSuppressedDestinations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.Sesv2ListTagsForResourceRequest): SESV2ListTagsForResource {
    return new SESV2ListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public putEmailIdentityDkimSigningAttributes(input: shapes.Sesv2PutEmailIdentityDkimSigningAttributesRequest): SESV2PutEmailIdentityDkimSigningAttributes {
    return new SESV2PutEmailIdentityDkimSigningAttributes(this, 'PutEmailIdentityDkimSigningAttributes', this.__resources, input);
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

  public sendBulkEmail(input: shapes.Sesv2SendBulkEmailRequest): SESV2SendBulkEmail {
    return new SESV2SendBulkEmail(this, 'SendBulkEmail', this.__resources, input);
  }

  public sendCustomVerificationEmail(input: shapes.Sesv2SendCustomVerificationEmailRequest): SESV2SendCustomVerificationEmail {
    return new SESV2SendCustomVerificationEmail(this, 'SendCustomVerificationEmail', this.__resources, input);
  }

  public sendEmail(input: shapes.Sesv2SendEmailRequest): SESV2SendEmail {
    return new SESV2SendEmail(this, 'SendEmail', this.__resources, input);
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

  public testRenderEmailTemplate(input: shapes.Sesv2TestRenderEmailTemplateRequest): SESV2TestRenderEmailTemplate {
    return new SESV2TestRenderEmailTemplate(this, 'TestRenderEmailTemplate', this.__resources, input);
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

export class SESV2CreateDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2CreateDeliverabilityTestReportRequest) {
    super(scope, id);
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
              TemplateName: this.input.content.template?.templateName,
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateDeliverabilityTestReport.DeliverabilityTestStatus'),
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
              TemplateName: this.input.content.template?.templateName,
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

export class SESV2CreateEmailIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2CreateEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): SESV2CreateEmailIdentityDkimAttributes {
    return new SESV2CreateEmailIdentityDkimAttributes(this, 'DkimAttributes', this.__resources, this.input);
  }

}

export class SESV2CreateEmailIdentityDkimAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2CreateEmailIdentityRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.Status'),
        outputPath: 'DkimAttributes.Status',
        parameters: {
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.CreateEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.DkimAttributes.Tokens', props);
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
          EmailIdentity: this.input.emailIdentity,
          Tags: this.input.tags,
          DkimSigningAttributes: {
            DomainSigningSelector: this.input.dkimSigningAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.dkimSigningAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEmailIdentity.DkimAttributes.SigningAttributesOrigin', props);
    return resource.getResponseField('DkimAttributes.SigningAttributesOrigin') as unknown as string;
  }

}

export class SESV2CreateImportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2CreateImportJobRequest) {
    super(scope, id);
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
              SuppressionListImportAction: this.input.importDestination.suppressionListDestination?.suppressionListImportAction,
            },
            ContactListDestination: {
              ContactListName: this.input.importDestination.contactListDestination?.contactListName,
              ContactListImportAction: this.input.importDestination.contactListDestination?.contactListImportAction,
            },
          },
          ImportDataSource: {
            S3Url: this.input.importDataSource.s3Url,
            DataFormat: this.input.importDataSource.dataFormat,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class SESV2FetchAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.DedicatedIpAutoWarmupEnabled', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.EnforcementStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.ProductionAccessEnabled', props);
    return resource.getResponseField('ProductionAccessEnabled') as unknown as boolean;
  }

  public get sendQuota(): SESV2FetchAccountSendQuota {
    return new SESV2FetchAccountSendQuota(this, 'SendQuota', this.__resources);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendingEnabled', props);
    return resource.getResponseField('SendingEnabled') as unknown as boolean;
  }

  public get suppressionAttributes(): SESV2FetchAccountSuppressionAttributes {
    return new SESV2FetchAccountSuppressionAttributes(this, 'SuppressionAttributes', this.__resources);
  }

  public get details(): SESV2FetchAccountDetails {
    return new SESV2FetchAccountDetails(this, 'Details', this.__resources);
  }

}

export class SESV2FetchAccountSendQuota extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.Max24HourSend', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.MaxSendRate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SendQuota.SentLast24Hours', props);
    return resource.getResponseField('SendQuota.SentLast24Hours') as unknown as number;
  }

}

export class SESV2FetchAccountSuppressionAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.SuppressionAttributes.SuppressedReasons', props);
    return resource.getResponseField('SuppressionAttributes.SuppressedReasons') as unknown as string[];
  }

}

export class SESV2FetchAccountDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.MailType', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.WebsiteURL', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.ContactLanguage', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.UseCaseDescription', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.AdditionalContactEmailAddresses', props);
    return resource.getResponseField('Details.AdditionalContactEmailAddresses') as unknown as string[];
  }

  public get reviewDetails(): SESV2FetchAccountDetailsReviewDetails {
    return new SESV2FetchAccountDetailsReviewDetails(this, 'ReviewDetails', this.__resources);
  }

}

export class SESV2FetchAccountDetailsReviewDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.ReviewDetails.Status', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetAccount.Details.ReviewDetails.CaseId', props);
    return resource.getResponseField('Details.ReviewDetails.CaseId') as unknown as string;
  }

}

export class SESV2FetchBlacklistReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetBlacklistReportsRequest) {
    super(scope, id);
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
          BlacklistItemNames: this.input.blacklistItemNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlacklistReports.BlacklistReport', props);
    return resource.getResponseField('BlacklistReport') as unknown as Record<string, shapes.Sesv2BlacklistEntry[]>;
  }

}

export class SESV2FetchConfigurationSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.ConfigurationSetName', props);
    return resource.getResponseField('ConfigurationSetName') as unknown as string;
  }

  public get trackingOptions(): SESV2FetchConfigurationSetTrackingOptions {
    return new SESV2FetchConfigurationSetTrackingOptions(this, 'TrackingOptions', this.__resources, this.input);
  }

  public get deliveryOptions(): SESV2FetchConfigurationSetDeliveryOptions {
    return new SESV2FetchConfigurationSetDeliveryOptions(this, 'DeliveryOptions', this.__resources, this.input);
  }

  public get reputationOptions(): SESV2FetchConfigurationSetReputationOptions {
    return new SESV2FetchConfigurationSetReputationOptions(this, 'ReputationOptions', this.__resources, this.input);
  }

  public get sendingOptions(): SESV2FetchConfigurationSetSendingOptions {
    return new SESV2FetchConfigurationSetSendingOptions(this, 'SendingOptions', this.__resources, this.input);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

  public get suppressionOptions(): SESV2FetchConfigurationSetSuppressionOptions {
    return new SESV2FetchConfigurationSetSuppressionOptions(this, 'SuppressionOptions', this.__resources, this.input);
  }

}

export class SESV2FetchConfigurationSetTrackingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.TrackingOptions.CustomRedirectDomain', props);
    return resource.getResponseField('TrackingOptions.CustomRedirectDomain') as unknown as string;
  }

}

export class SESV2FetchConfigurationSetDeliveryOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.DeliveryOptions.SendingPoolName'),
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

export class SESV2FetchConfigurationSetReputationOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetConfigurationSet.ReputationOptions.LastFreshStart'),
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

export class SESV2FetchConfigurationSetSendingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.SendingOptions.SendingEnabled', props);
    return resource.getResponseField('SendingOptions.SendingEnabled') as unknown as boolean;
  }

}

export class SESV2FetchConfigurationSetSuppressionOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSet.SuppressionOptions.SuppressedReasons', props);
    return resource.getResponseField('SuppressionOptions.SuppressedReasons') as unknown as string[];
  }

}

export class SESV2FetchConfigurationSetEventDestinations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetConfigurationSetEventDestinationsRequest) {
    super(scope, id);
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
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationSetEventDestinations.EventDestinations', props);
    return resource.getResponseField('EventDestinations') as unknown as shapes.Sesv2EventDestination[];
  }

}

export class SESV2FetchContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetContactRequest) {
    super(scope, id);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.ContactListName', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.EmailAddress', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.TopicPreferences', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.TopicDefaultPreferences', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.UnsubscribeAll', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.AttributesData', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.CreatedTimestamp', props);
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
          ContactListName: this.input.contactListName,
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContact.LastUpdatedTimestamp', props);
    return resource.getResponseField('LastUpdatedTimestamp') as unknown as string;
  }

}

export class SESV2FetchContactList extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetContactListRequest) {
    super(scope, id);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.ContactListName', props);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.Topics', props);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.Description', props);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.CreatedTimestamp', props);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.LastUpdatedTimestamp', props);
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
          ContactListName: this.input.contactListName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactList.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2FetchCustomVerificationEmailTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetCustomVerificationEmailTemplateRequest) {
    super(scope, id);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.TemplateName', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.FromEmailAddress', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.TemplateSubject', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.TemplateContent', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.SuccessRedirectionURL', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomVerificationEmailTemplate.FailureRedirectionURL', props);
    return resource.getResponseField('FailureRedirectionURL') as unknown as string;
  }

}

export class SESV2FetchDedicatedIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDedicatedIpRequest) {
    super(scope, id);
  }

  public get dedicatedIp(): SESV2FetchDedicatedIpDedicatedIp {
    return new SESV2FetchDedicatedIpDedicatedIp(this, 'DedicatedIp', this.__resources, this.input);
  }

}

export class SESV2FetchDedicatedIpDedicatedIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDedicatedIpRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.WarmupStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.WarmupPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDedicatedIp.DedicatedIp.PoolName'),
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

export class SESV2FetchDedicatedIps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDedicatedIpsRequest) {
    super(scope, id);
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
          PoolName: this.input.poolName,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDedicatedIps.DedicatedIps', props);
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

export class SESV2FetchDeliverabilityDashboardOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.DashboardEnabled', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.SubscriptionExpiryDate', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.AccountStatus', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.ActiveSubscribedDomains', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityDashboardOptions.PendingExpirationSubscribedDomains', props);
    return resource.getResponseField('PendingExpirationSubscribedDomains') as unknown as shapes.Sesv2DomainDeliverabilityTrackingOption[];
  }

}

export class SESV2FetchDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
    super(scope, id);
  }

  public get deliverabilityTestReport(): SESV2FetchDeliverabilityTestReportDeliverabilityTestReport {
    return new SESV2FetchDeliverabilityTestReportDeliverabilityTestReport(this, 'DeliverabilityTestReport', this.__resources, this.input);
  }

  public get overallPlacement(): SESV2FetchDeliverabilityTestReportOverallPlacement {
    return new SESV2FetchDeliverabilityTestReportOverallPlacement(this, 'OverallPlacement', this.__resources, this.input);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.IspPlacements', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.Message', props);
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
          ReportId: this.input.reportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeliverabilityTestReport.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2FetchDeliverabilityTestReportDeliverabilityTestReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.ReportName'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.Subject'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.FromEmailAddress'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.CreateDate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.DeliverabilityTestReport.DeliverabilityTestStatus'),
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

export class SESV2FetchDeliverabilityTestReportOverallPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDeliverabilityTestReportRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.SpamPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.MissingPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.SpfPercentage'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDeliverabilityTestReport.OverallPlacement.DkimPercentage'),
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

export class SESV2FetchDomainDeliverabilityCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest) {
    super(scope, id);
  }

  public get domainDeliverabilityCampaign(): SESV2FetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign {
    return new SESV2FetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign(this, 'DomainDeliverabilityCampaign', this.__resources, this.input);
  }

}

export class SESV2FetchDomainDeliverabilityCampaignDomainDeliverabilityCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDomainDeliverabilityCampaignRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ImageUrl'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Subject'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FromAddress'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SendingIps'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.FirstSeenDateTime'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.LastSeenDateTime'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.InboxCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.SpamCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.DeleteRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ReadDeleteRate'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.ProjectedVolume'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainDeliverabilityCampaign.DomainDeliverabilityCampaign.Esps'),
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

export class SESV2FetchDomainStatisticsReport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDomainStatisticsReportRequest) {
    super(scope, id);
  }

  public get overallVolume(): SESV2FetchDomainStatisticsReportOverallVolume {
    return new SESV2FetchDomainStatisticsReportOverallVolume(this, 'OverallVolume', this.__resources, this.input);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.DailyVolumes', props);
    return resource.getResponseField('DailyVolumes') as unknown as shapes.Sesv2DailyVolume[];
  }

}

export class SESV2FetchDomainStatisticsReportOverallVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDomainStatisticsReportRequest) {
    super(scope, id);
  }

  public get volumeStatistics(): SESV2FetchDomainStatisticsReportOverallVolumeVolumeStatistics {
    return new SESV2FetchDomainStatisticsReportOverallVolumeVolumeStatistics(this, 'VolumeStatistics', this.__resources, this.input);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.ReadRatePercent', props);
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
          Domain: this.input.domain,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainStatisticsReport.OverallVolume.DomainIspPlacements', props);
    return resource.getResponseField('OverallVolume.DomainIspPlacements') as unknown as shapes.Sesv2DomainIspPlacement[];
  }

}

export class SESV2FetchDomainStatisticsReportOverallVolumeVolumeStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetDomainStatisticsReportRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.SpamRawCount'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedInbox'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetDomainStatisticsReport.OverallVolume.VolumeStatistics.ProjectedSpam'),
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

export class SESV2FetchEmailIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailIdentityRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.FeedbackForwardingStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.VerifiedForSendingStatus'),
        outputPath: 'VerifiedForSendingStatus',
        parameters: {
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.VerifiedForSendingStatus', props);
    return resource.getResponseField('VerifiedForSendingStatus') as unknown as boolean;
  }

  public get dkimAttributes(): SESV2FetchEmailIdentityDkimAttributes {
    return new SESV2FetchEmailIdentityDkimAttributes(this, 'DkimAttributes', this.__resources, this.input);
  }

  public get mailFromAttributes(): SESV2FetchEmailIdentityMailFromAttributes {
    return new SESV2FetchEmailIdentityMailFromAttributes(this, 'MailFromAttributes', this.__resources, this.input);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.Policies', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2FetchEmailIdentityDkimAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailIdentityRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.Status'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.DkimAttributes.Tokens'),
        outputPath: 'DkimAttributes.Tokens',
        parameters: {
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.DkimAttributes.Tokens', props);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentity.DkimAttributes.SigningAttributesOrigin', props);
    return resource.getResponseField('DkimAttributes.SigningAttributesOrigin') as unknown as string;
  }

}

export class SESV2FetchEmailIdentityMailFromAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailIdentityRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.MailFromAttributes.MailFromDomainStatus'),
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.GetEmailIdentity.MailFromAttributes.BehaviorOnMxFailure'),
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

export class SESV2FetchEmailIdentityPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailIdentityPoliciesRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailIdentityPolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as Record<string, string>;
  }

}

export class SESV2FetchEmailTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailTemplateRequest) {
    super(scope, id);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailTemplate.TemplateName', props);
    return resource.getResponseField('TemplateName') as unknown as string;
  }

  public get templateContent(): SESV2FetchEmailTemplateTemplateContent {
    return new SESV2FetchEmailTemplateTemplateContent(this, 'TemplateContent', this.__resources, this.input);
  }

}

export class SESV2FetchEmailTemplateTemplateContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetEmailTemplateRequest) {
    super(scope, id);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailTemplate.TemplateContent.Subject', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailTemplate.TemplateContent.Text', props);
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
          TemplateName: this.input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEmailTemplate.TemplateContent.Html', props);
    return resource.getResponseField('TemplateContent.Html') as unknown as string;
  }

}

export class SESV2FetchImportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get importDestination(): SESV2FetchImportJobImportDestination {
    return new SESV2FetchImportJobImportDestination(this, 'ImportDestination', this.__resources, this.input);
  }

  public get importDataSource(): SESV2FetchImportJobImportDataSource {
    return new SESV2FetchImportJobImportDataSource(this, 'ImportDataSource', this.__resources, this.input);
  }

  public get failureInfo(): SESV2FetchImportJobFailureInfo {
    return new SESV2FetchImportJobFailureInfo(this, 'FailureInfo', this.__resources, this.input);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.JobStatus', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.CreatedTimestamp', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.CompletedTimestamp', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ProcessedRecordsCount', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.FailedRecordsCount', props);
    return resource.getResponseField('FailedRecordsCount') as unknown as number;
  }

}

export class SESV2FetchImportJobImportDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
  }

  public get suppressionListDestination(): SESV2FetchImportJobImportDestinationSuppressionListDestination {
    return new SESV2FetchImportJobImportDestinationSuppressionListDestination(this, 'SuppressionListDestination', this.__resources, this.input);
  }

  public get contactListDestination(): SESV2FetchImportJobImportDestinationContactListDestination {
    return new SESV2FetchImportJobImportDestinationContactListDestination(this, 'ContactListDestination', this.__resources, this.input);
  }

}

export class SESV2FetchImportJobImportDestinationSuppressionListDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ImportDestination.SuppressionListDestination.SuppressionListImportAction', props);
    return resource.getResponseField('ImportDestination.SuppressionListDestination.SuppressionListImportAction') as unknown as string;
  }

}

export class SESV2FetchImportJobImportDestinationContactListDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ImportDestination.ContactListDestination.ContactListName', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ImportDestination.ContactListDestination.ContactListImportAction', props);
    return resource.getResponseField('ImportDestination.ContactListDestination.ContactListImportAction') as unknown as string;
  }

}

export class SESV2FetchImportJobImportDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ImportDataSource.S3Url', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.ImportDataSource.DataFormat', props);
    return resource.getResponseField('ImportDataSource.DataFormat') as unknown as string;
  }

}

export class SESV2FetchImportJobFailureInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetImportJobRequest) {
    super(scope, id);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.FailureInfo.FailedRecordsS3Url', props);
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
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetImportJob.FailureInfo.ErrorMessage', props);
    return resource.getResponseField('FailureInfo.ErrorMessage') as unknown as string;
  }

}

export class SESV2FetchSuppressedDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetSuppressedDestinationRequest) {
    super(scope, id);
  }

  public get suppressedDestination(): SESV2FetchSuppressedDestinationSuppressedDestination {
    return new SESV2FetchSuppressedDestinationSuppressedDestination(this, 'SuppressedDestination', this.__resources, this.input);
  }

}

export class SESV2FetchSuppressedDestinationSuppressedDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetSuppressedDestinationRequest) {
    super(scope, id);
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
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuppressedDestination.SuppressedDestination.EmailAddress', props);
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
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuppressedDestination.SuppressedDestination.Reason', props);
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
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuppressedDestination.SuppressedDestination.LastUpdateTime', props);
    return resource.getResponseField('SuppressedDestination.LastUpdateTime') as unknown as string;
  }

  public get attributes(): SESV2FetchSuppressedDestinationSuppressedDestinationAttributes {
    return new SESV2FetchSuppressedDestinationSuppressedDestinationAttributes(this, 'Attributes', this.__resources, this.input);
  }

}

export class SESV2FetchSuppressedDestinationSuppressedDestinationAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2GetSuppressedDestinationRequest) {
    super(scope, id);
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
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuppressedDestination.SuppressedDestination.Attributes.MessageId', props);
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
          EmailAddress: this.input.emailAddress,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuppressedDestination.SuppressedDestination.Attributes.FeedbackId', props);
    return resource.getResponseField('SuppressedDestination.Attributes.FeedbackId') as unknown as string;
  }

}

export class SESV2ListConfigurationSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListConfigurationSetsRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListConfigurationSets.NextToken'),
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

export class SESV2ListContactLists extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListContactListsRequest) {
    super(scope, id);
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
          PageSize: this.input.pageSize,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContactLists.ContactLists', props);
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
          PageSize: this.input.pageSize,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContactLists.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListContacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListContactsRequest) {
    super(scope, id);
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
          ContactListName: this.input.contactListName,
          Filter: {
            FilteredStatus: this.input.filter?.filteredStatus,
            TopicFilter: {
              TopicName: this.input.filter?.topicFilter?.topicName,
              UseDefaultIfPreferenceUnavailable: this.input.filter?.topicFilter?.useDefaultIfPreferenceUnavailable,
            },
          },
          PageSize: this.input.pageSize,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContacts.Contacts', props);
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
          ContactListName: this.input.contactListName,
          Filter: {
            FilteredStatus: this.input.filter?.filteredStatus,
            TopicFilter: {
              TopicName: this.input.filter?.topicFilter?.topicName,
              UseDefaultIfPreferenceUnavailable: this.input.filter?.topicFilter?.useDefaultIfPreferenceUnavailable,
            },
          },
          PageSize: this.input.pageSize,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListContacts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListCustomVerificationEmailTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListCustomVerificationEmailTemplatesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCustomVerificationEmailTemplates.CustomVerificationEmailTemplates', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCustomVerificationEmailTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListDedicatedIpPools extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListDedicatedIpPoolsRequest) {
    super(scope, id);
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
        service: 'SESV2',
        physicalResourceId: cr.PhysicalResourceId.of('SESV2.ListDedicatedIpPools.NextToken'),
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

export class SESV2ListDeliverabilityTestReports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListDeliverabilityTestReportsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliverabilityTestReports.DeliverabilityTestReports', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeliverabilityTestReports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListDomainDeliverabilityCampaigns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListDomainDeliverabilityCampaignsRequest) {
    super(scope, id);
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
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          SubscribedDomain: this.input.subscribedDomain,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainDeliverabilityCampaigns.DomainDeliverabilityCampaigns', props);
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

export class SESV2ListEmailIdentities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListEmailIdentitiesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailIdentities.EmailIdentities', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailIdentities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListEmailTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListEmailTemplatesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailTemplates.TemplatesMetadata', props);
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
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEmailTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListImportJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListImportJobsRequest) {
    super(scope, id);
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
          ImportDestinationType: this.input.importDestinationType,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImportJobs.ImportJobs', props);
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
          ImportDestinationType: this.input.importDestinationType,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImportJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListSuppressedDestinations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListSuppressedDestinationsRequest) {
    super(scope, id);
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
          Reasons: this.input.reasons,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSuppressedDestinations.SuppressedDestinationSummaries', props);
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
          Reasons: this.input.reasons,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          NextToken: this.input.nextToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSuppressedDestinations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SESV2ListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2ListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.Sesv2Tag[];
  }

}

export class SESV2PutEmailIdentityDkimSigningAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2PutEmailIdentityDkimSigningAttributesRequest) {
    super(scope, id);
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
          EmailIdentity: this.input.emailIdentity,
          SigningAttributesOrigin: this.input.signingAttributesOrigin,
          SigningAttributes: {
            DomainSigningSelector: this.input.signingAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.signingAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEmailIdentityDkimSigningAttributes.DkimStatus', props);
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
          EmailIdentity: this.input.emailIdentity,
          SigningAttributesOrigin: this.input.signingAttributesOrigin,
          SigningAttributes: {
            DomainSigningSelector: this.input.signingAttributes?.domainSigningSelector,
            DomainSigningPrivateKey: this.input.signingAttributes?.domainSigningPrivateKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutEmailIdentityDkimSigningAttributes.DkimTokens', props);
    return resource.getResponseField('DkimTokens') as unknown as string[];
  }

}

export class SESV2SendBulkEmail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2SendBulkEmailRequest) {
    super(scope, id);
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
          FromEmailAddress: this.input.fromEmailAddress,
          FromEmailAddressIdentityArn: this.input.fromEmailAddressIdentityArn,
          ReplyToAddresses: this.input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.input.feedbackForwardingEmailAddress,
          FeedbackForwardingEmailAddressIdentityArn: this.input.feedbackForwardingEmailAddressIdentityArn,
          DefaultEmailTags: this.input.defaultEmailTags,
          DefaultContent: {
            Template: {
              TemplateName: this.input.defaultContent.template?.templateName,
              TemplateArn: this.input.defaultContent.template?.templateArn,
              TemplateData: this.input.defaultContent.template?.templateData,
            },
          },
          BulkEmailEntries: this.input.bulkEmailEntries,
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendBulkEmail.BulkEmailEntryResults', props);
    return resource.getResponseField('BulkEmailEntryResults') as unknown as shapes.Sesv2BulkEmailEntryResult[];
  }

}

export class SESV2SendCustomVerificationEmail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2SendCustomVerificationEmailRequest) {
    super(scope, id);
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
          EmailAddress: this.input.emailAddress,
          TemplateName: this.input.templateName,
          ConfigurationSetName: this.input.configurationSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCustomVerificationEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class SESV2SendEmail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2SendEmailRequest) {
    super(scope, id);
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
          FromEmailAddress: this.input.fromEmailAddress,
          FromEmailAddressIdentityArn: this.input.fromEmailAddressIdentityArn,
          Destination: {
            ToAddresses: this.input.destination?.toAddresses,
            CcAddresses: this.input.destination?.ccAddresses,
            BccAddresses: this.input.destination?.bccAddresses,
          },
          ReplyToAddresses: this.input.replyToAddresses,
          FeedbackForwardingEmailAddress: this.input.feedbackForwardingEmailAddress,
          FeedbackForwardingEmailAddressIdentityArn: this.input.feedbackForwardingEmailAddressIdentityArn,
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
              TemplateName: this.input.content.template?.templateName,
              TemplateArn: this.input.content.template?.templateArn,
              TemplateData: this.input.content.template?.templateData,
            },
          },
          EmailTags: this.input.emailTags,
          ConfigurationSetName: this.input.configurationSetName,
          ListManagementOptions: {
            ContactListName: this.input.listManagementOptions?.contactListName,
            TopicName: this.input.listManagementOptions?.topicName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendEmail.MessageId', props);
    return resource.getResponseField('MessageId') as unknown as string;
  }

}

export class SESV2TestRenderEmailTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Sesv2TestRenderEmailTemplateRequest) {
    super(scope, id);
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
          TemplateName: this.input.templateName,
          TemplateData: this.input.templateData,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestRenderEmailTemplate.RenderedTemplate', props);
    return resource.getResponseField('RenderedTemplate') as unknown as string;
  }

}

