import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CustomerProfilesClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addProfileKey(input: shapes.CustomerProfilesAddProfileKeyRequest): CustomerProfilesResponsesAddProfileKey {
    return new CustomerProfilesResponsesAddProfileKey(this, this.__resources, input);
  }

  public createDomain(input: shapes.CustomerProfilesCreateDomainRequest): CustomerProfilesResponsesCreateDomain {
    return new CustomerProfilesResponsesCreateDomain(this, this.__resources, input);
  }

  public createProfile(input: shapes.CustomerProfilesCreateProfileRequest): CustomerProfilesResponsesCreateProfile {
    return new CustomerProfilesResponsesCreateProfile(this, this.__resources, input);
  }

  public deleteDomain(input: shapes.CustomerProfilesDeleteDomainRequest): CustomerProfilesResponsesDeleteDomain {
    return new CustomerProfilesResponsesDeleteDomain(this, this.__resources, input);
  }

  public deleteIntegration(input: shapes.CustomerProfilesDeleteIntegrationRequest): CustomerProfilesResponsesDeleteIntegration {
    return new CustomerProfilesResponsesDeleteIntegration(this, this.__resources, input);
  }

  public deleteProfile(input: shapes.CustomerProfilesDeleteProfileRequest): CustomerProfilesResponsesDeleteProfile {
    return new CustomerProfilesResponsesDeleteProfile(this, this.__resources, input);
  }

  public deleteProfileKey(input: shapes.CustomerProfilesDeleteProfileKeyRequest): CustomerProfilesResponsesDeleteProfileKey {
    return new CustomerProfilesResponsesDeleteProfileKey(this, this.__resources, input);
  }

  public deleteProfileObject(input: shapes.CustomerProfilesDeleteProfileObjectRequest): CustomerProfilesResponsesDeleteProfileObject {
    return new CustomerProfilesResponsesDeleteProfileObject(this, this.__resources, input);
  }

  public deleteProfileObjectType(input: shapes.CustomerProfilesDeleteProfileObjectTypeRequest): CustomerProfilesResponsesDeleteProfileObjectType {
    return new CustomerProfilesResponsesDeleteProfileObjectType(this, this.__resources, input);
  }

  public fetchDomain(input: shapes.CustomerProfilesGetDomainRequest): CustomerProfilesResponsesFetchDomain {
    return new CustomerProfilesResponsesFetchDomain(this, this.__resources, input);
  }

  public fetchIntegration(input: shapes.CustomerProfilesGetIntegrationRequest): CustomerProfilesResponsesFetchIntegration {
    return new CustomerProfilesResponsesFetchIntegration(this, this.__resources, input);
  }

  public fetchMatches(input: shapes.CustomerProfilesGetMatchesRequest): CustomerProfilesResponsesFetchMatches {
    return new CustomerProfilesResponsesFetchMatches(this, this.__resources, input);
  }

  public fetchProfileObjectType(input: shapes.CustomerProfilesGetProfileObjectTypeRequest): CustomerProfilesResponsesFetchProfileObjectType {
    return new CustomerProfilesResponsesFetchProfileObjectType(this, this.__resources, input);
  }

  public fetchProfileObjectTypeTemplate(input: shapes.CustomerProfilesGetProfileObjectTypeTemplateRequest): CustomerProfilesResponsesFetchProfileObjectTypeTemplate {
    return new CustomerProfilesResponsesFetchProfileObjectTypeTemplate(this, this.__resources, input);
  }

  public listAccountIntegrations(input: shapes.CustomerProfilesListAccountIntegrationsRequest): CustomerProfilesResponsesListAccountIntegrations {
    return new CustomerProfilesResponsesListAccountIntegrations(this, this.__resources, input);
  }

  public listDomains(input: shapes.CustomerProfilesListDomainsRequest): CustomerProfilesResponsesListDomains {
    return new CustomerProfilesResponsesListDomains(this, this.__resources, input);
  }

  public listIntegrations(input: shapes.CustomerProfilesListIntegrationsRequest): CustomerProfilesResponsesListIntegrations {
    return new CustomerProfilesResponsesListIntegrations(this, this.__resources, input);
  }

  public listProfileObjectTypeTemplates(input: shapes.CustomerProfilesListProfileObjectTypeTemplatesRequest): CustomerProfilesResponsesListProfileObjectTypeTemplates {
    return new CustomerProfilesResponsesListProfileObjectTypeTemplates(this, this.__resources, input);
  }

  public listProfileObjectTypes(input: shapes.CustomerProfilesListProfileObjectTypesRequest): CustomerProfilesResponsesListProfileObjectTypes {
    return new CustomerProfilesResponsesListProfileObjectTypes(this, this.__resources, input);
  }

  public listProfileObjects(input: shapes.CustomerProfilesListProfileObjectsRequest): CustomerProfilesResponsesListProfileObjects {
    return new CustomerProfilesResponsesListProfileObjects(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CustomerProfilesListTagsForResourceRequest): CustomerProfilesResponsesListTagsForResource {
    return new CustomerProfilesResponsesListTagsForResource(this, this.__resources, input);
  }

  public mergeProfiles(input: shapes.CustomerProfilesMergeProfilesRequest): CustomerProfilesResponsesMergeProfiles {
    return new CustomerProfilesResponsesMergeProfiles(this, this.__resources, input);
  }

  public putIntegration(input: shapes.CustomerProfilesPutIntegrationRequest): CustomerProfilesResponsesPutIntegration {
    return new CustomerProfilesResponsesPutIntegration(this, this.__resources, input);
  }

  public putProfileObject(input: shapes.CustomerProfilesPutProfileObjectRequest): CustomerProfilesResponsesPutProfileObject {
    return new CustomerProfilesResponsesPutProfileObject(this, this.__resources, input);
  }

  public putProfileObjectType(input: shapes.CustomerProfilesPutProfileObjectTypeRequest): CustomerProfilesResponsesPutProfileObjectType {
    return new CustomerProfilesResponsesPutProfileObjectType(this, this.__resources, input);
  }

  public searchProfiles(input: shapes.CustomerProfilesSearchProfilesRequest): CustomerProfilesResponsesSearchProfiles {
    return new CustomerProfilesResponsesSearchProfiles(this, this.__resources, input);
  }

  public tagResource(input: shapes.CustomerProfilesTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CustomerProfilesUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDomain(input: shapes.CustomerProfilesUpdateDomainRequest): CustomerProfilesResponsesUpdateDomain {
    return new CustomerProfilesResponsesUpdateDomain(this, this.__resources, input);
  }

  public updateProfile(input: shapes.CustomerProfilesUpdateProfileRequest): CustomerProfilesResponsesUpdateProfile {
    return new CustomerProfilesResponsesUpdateProfile(this, this.__resources, input);
  }

}

export class CustomerProfilesResponsesAddProfileKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesAddProfileKeyRequest) {
  }

  public get keyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addProfileKey',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.AddProfileKey.KeyName'),
        outputPath: 'KeyName',
        parameters: {
          ProfileId: this.__input.profileId,
          KeyName: this.__input.keyName,
          Values: this.__input.values,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddProfileKey.KeyName', props);
    return resource.getResponseField('KeyName') as unknown as string;
  }

  public get values(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addProfileKey',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.AddProfileKey.Values'),
        outputPath: 'Values',
        parameters: {
          ProfileId: this.__input.profileId,
          KeyName: this.__input.keyName,
          Values: this.__input.values,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddProfileKey.Values', props);
    return resource.getResponseField('Values') as unknown as string[];
  }

}

export class CustomerProfilesResponsesCreateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesCreateDomainRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get defaultExpirationDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.DefaultExpirationDays'),
        outputPath: 'DefaultExpirationDays',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DefaultExpirationDays', props);
    return resource.getResponseField('DefaultExpirationDays') as unknown as number;
  }

  public get defaultEncryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.DefaultEncryptionKey'),
        outputPath: 'DefaultEncryptionKey',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DefaultEncryptionKey', props);
    return resource.getResponseField('DefaultEncryptionKey') as unknown as string;
  }

  public get deadLetterQueueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.DeadLetterQueueUrl'),
        outputPath: 'DeadLetterQueueUrl',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DeadLetterQueueUrl', props);
    return resource.getResponseField('DeadLetterQueueUrl') as unknown as string;
  }

  public get matching(): CustomerProfilesResponsesCreateDomainMatching {
    return new CustomerProfilesResponsesCreateDomainMatching(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesCreateDomainMatching {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesCreateDomainRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateDomain.Matching.Enabled'),
        outputPath: 'Matching.Enabled',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.Matching.Enabled', props);
    return resource.getResponseField('Matching.Enabled') as unknown as boolean;
  }

}

export class CustomerProfilesResponsesCreateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesCreateProfileRequest) {
  }

  public get profileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfile',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.CreateProfile.ProfileId'),
        outputPath: 'ProfileId',
        parameters: {
          DomainName: this.__input.domainName,
          AccountNumber: this.__input.accountNumber,
          AdditionalInformation: this.__input.additionalInformation,
          PartyType: this.__input.partyType,
          BusinessName: this.__input.businessName,
          FirstName: this.__input.firstName,
          MiddleName: this.__input.middleName,
          LastName: this.__input.lastName,
          BirthDate: this.__input.birthDate,
          Gender: this.__input.gender,
          PhoneNumber: this.__input.phoneNumber,
          MobilePhoneNumber: this.__input.mobilePhoneNumber,
          HomePhoneNumber: this.__input.homePhoneNumber,
          BusinessPhoneNumber: this.__input.businessPhoneNumber,
          EmailAddress: this.__input.emailAddress,
          PersonalEmailAddress: this.__input.personalEmailAddress,
          BusinessEmailAddress: this.__input.businessEmailAddress,
          Address: {
            Address1: this.__input.address?.address1,
            Address2: this.__input.address?.address2,
            Address3: this.__input.address?.address3,
            Address4: this.__input.address?.address4,
            City: this.__input.address?.city,
            County: this.__input.address?.county,
            State: this.__input.address?.state,
            Province: this.__input.address?.province,
            Country: this.__input.address?.country,
            PostalCode: this.__input.address?.postalCode,
          },
          ShippingAddress: {
            Address1: this.__input.shippingAddress?.address1,
            Address2: this.__input.shippingAddress?.address2,
            Address3: this.__input.shippingAddress?.address3,
            Address4: this.__input.shippingAddress?.address4,
            City: this.__input.shippingAddress?.city,
            County: this.__input.shippingAddress?.county,
            State: this.__input.shippingAddress?.state,
            Province: this.__input.shippingAddress?.province,
            Country: this.__input.shippingAddress?.country,
            PostalCode: this.__input.shippingAddress?.postalCode,
          },
          MailingAddress: {
            Address1: this.__input.mailingAddress?.address1,
            Address2: this.__input.mailingAddress?.address2,
            Address3: this.__input.mailingAddress?.address3,
            Address4: this.__input.mailingAddress?.address4,
            City: this.__input.mailingAddress?.city,
            County: this.__input.mailingAddress?.county,
            State: this.__input.mailingAddress?.state,
            Province: this.__input.mailingAddress?.province,
            Country: this.__input.mailingAddress?.country,
            PostalCode: this.__input.mailingAddress?.postalCode,
          },
          BillingAddress: {
            Address1: this.__input.billingAddress?.address1,
            Address2: this.__input.billingAddress?.address2,
            Address3: this.__input.billingAddress?.address3,
            Address4: this.__input.billingAddress?.address4,
            City: this.__input.billingAddress?.city,
            County: this.__input.billingAddress?.county,
            State: this.__input.billingAddress?.state,
            Province: this.__input.billingAddress?.province,
            Country: this.__input.billingAddress?.country,
            PostalCode: this.__input.billingAddress?.postalCode,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfile.ProfileId', props);
    return resource.getResponseField('ProfileId') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteDomainRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteDomain.Message'),
        outputPath: 'Message',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteIntegrationRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteIntegration.Message'),
        outputPath: 'Message',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIntegration.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteProfileRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfile',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteProfile.Message'),
        outputPath: 'Message',
        parameters: {
          ProfileId: this.__input.profileId,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProfile.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteProfileKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteProfileKeyRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfileKey',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteProfileKey.Message'),
        outputPath: 'Message',
        parameters: {
          ProfileId: this.__input.profileId,
          KeyName: this.__input.keyName,
          Values: this.__input.values,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProfileKey.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteProfileObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteProfileObjectRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfileObject',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteProfileObject.Message'),
        outputPath: 'Message',
        parameters: {
          ProfileId: this.__input.profileId,
          ProfileObjectUniqueKey: this.__input.profileObjectUniqueKey,
          ObjectTypeName: this.__input.objectTypeName,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProfileObject.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesDeleteProfileObjectType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesDeleteProfileObjectTypeRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.DeleteProfileObjectType.Message'),
        outputPath: 'Message',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProfileObjectType.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesFetchDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetDomainRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get defaultExpirationDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.DefaultExpirationDays'),
        outputPath: 'DefaultExpirationDays',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.DefaultExpirationDays', props);
    return resource.getResponseField('DefaultExpirationDays') as unknown as number;
  }

  public get defaultEncryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.DefaultEncryptionKey'),
        outputPath: 'DefaultEncryptionKey',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.DefaultEncryptionKey', props);
    return resource.getResponseField('DefaultEncryptionKey') as unknown as string;
  }

  public get deadLetterQueueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.DeadLetterQueueUrl'),
        outputPath: 'DeadLetterQueueUrl',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.DeadLetterQueueUrl', props);
    return resource.getResponseField('DeadLetterQueueUrl') as unknown as string;
  }

  public get stats(): CustomerProfilesResponsesFetchDomainStats {
    return new CustomerProfilesResponsesFetchDomainStats(this.__scope, this.__resources, this.__input);
  }

  public get matching(): CustomerProfilesResponsesFetchDomainMatching {
    return new CustomerProfilesResponsesFetchDomainMatching(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesFetchDomainStats {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetDomainRequest) {
  }

  public get profileCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Stats.ProfileCount'),
        outputPath: 'Stats.ProfileCount',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Stats.ProfileCount', props);
    return resource.getResponseField('Stats.ProfileCount') as unknown as number;
  }

  public get meteringProfileCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Stats.MeteringProfileCount'),
        outputPath: 'Stats.MeteringProfileCount',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Stats.MeteringProfileCount', props);
    return resource.getResponseField('Stats.MeteringProfileCount') as unknown as number;
  }

  public get objectCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Stats.ObjectCount'),
        outputPath: 'Stats.ObjectCount',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Stats.ObjectCount', props);
    return resource.getResponseField('Stats.ObjectCount') as unknown as number;
  }

  public get totalSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Stats.TotalSize'),
        outputPath: 'Stats.TotalSize',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Stats.TotalSize', props);
    return resource.getResponseField('Stats.TotalSize') as unknown as number;
  }

}

export class CustomerProfilesResponsesFetchDomainMatching {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetDomainRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetDomain.Matching.Enabled'),
        outputPath: 'Matching.Enabled',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.Matching.Enabled', props);
    return resource.getResponseField('Matching.Enabled') as unknown as boolean;
  }

}

export class CustomerProfilesResponsesFetchIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetIntegrationRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.Uri'),
        outputPath: 'Uri',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.Uri', props);
    return resource.getResponseField('Uri') as unknown as string;
  }

  public get objectTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.ObjectTypeName'),
        outputPath: 'ObjectTypeName',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.ObjectTypeName', props);
    return resource.getResponseField('ObjectTypeName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetIntegration.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIntegration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesFetchMatches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetMatchesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMatches',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetMatches.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMatches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get matchGenerationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMatches',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetMatches.MatchGenerationDate'),
        outputPath: 'MatchGenerationDate',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMatches.MatchGenerationDate', props);
    return resource.getResponseField('MatchGenerationDate') as unknown as string;
  }

  public get potentialMatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMatches',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetMatches.PotentialMatches'),
        outputPath: 'PotentialMatches',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMatches.PotentialMatches', props);
    return resource.getResponseField('PotentialMatches') as unknown as number;
  }

  public get matches(): shapes.CustomerProfilesMatchItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMatches',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetMatches.Matches'),
        outputPath: 'Matches',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMatches.Matches', props);
    return resource.getResponseField('Matches') as unknown as shapes.CustomerProfilesMatchItem[];
  }

}

export class CustomerProfilesResponsesFetchProfileObjectType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetProfileObjectTypeRequest) {
  }

  public get objectTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.ObjectTypeName'),
        outputPath: 'ObjectTypeName',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.ObjectTypeName', props);
    return resource.getResponseField('ObjectTypeName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.Description'),
        outputPath: 'Description',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get expirationDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.ExpirationDays'),
        outputPath: 'ExpirationDays',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.ExpirationDays', props);
    return resource.getResponseField('ExpirationDays') as unknown as number;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.EncryptionKey'),
        outputPath: 'EncryptionKey',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.EncryptionKey', props);
    return resource.getResponseField('EncryptionKey') as unknown as string;
  }

  public get allowProfileCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.AllowProfileCreation'),
        outputPath: 'AllowProfileCreation',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.AllowProfileCreation', props);
    return resource.getResponseField('AllowProfileCreation') as unknown as boolean;
  }

  public get fields(): Record<string, shapes.CustomerProfilesObjectTypeField> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.Fields'),
        outputPath: 'Fields',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.Fields', props);
    return resource.getResponseField('Fields') as unknown as Record<string, shapes.CustomerProfilesObjectTypeField>;
  }

  public get keys(): Record<string, shapes.CustomerProfilesObjectTypeKey[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.Keys'),
        outputPath: 'Keys',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.Keys', props);
    return resource.getResponseField('Keys') as unknown as Record<string, shapes.CustomerProfilesObjectTypeKey[]>;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectType.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectType.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesFetchProfileObjectTypeTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesGetProfileObjectTypeTemplateRequest) {
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get sourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.SourceName'),
        outputPath: 'SourceName',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.SourceName', props);
    return resource.getResponseField('SourceName') as unknown as string;
  }

  public get sourceObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.SourceObject'),
        outputPath: 'SourceObject',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.SourceObject', props);
    return resource.getResponseField('SourceObject') as unknown as string;
  }

  public get allowProfileCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.AllowProfileCreation'),
        outputPath: 'AllowProfileCreation',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.AllowProfileCreation', props);
    return resource.getResponseField('AllowProfileCreation') as unknown as boolean;
  }

  public get fields(): Record<string, shapes.CustomerProfilesObjectTypeField> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.Fields'),
        outputPath: 'Fields',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.Fields', props);
    return resource.getResponseField('Fields') as unknown as Record<string, shapes.CustomerProfilesObjectTypeField>;
  }

  public get keys(): Record<string, shapes.CustomerProfilesObjectTypeKey[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfileObjectTypeTemplate',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.GetProfileObjectTypeTemplate.Keys'),
        outputPath: 'Keys',
        parameters: {
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfileObjectTypeTemplate.Keys', props);
    return resource.getResponseField('Keys') as unknown as Record<string, shapes.CustomerProfilesObjectTypeKey[]>;
  }

}

export class CustomerProfilesResponsesListAccountIntegrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListAccountIntegrationsRequest) {
  }

  public get items(): shapes.CustomerProfilesListIntegrationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountIntegrations',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListAccountIntegrations.Items'),
        outputPath: 'Items',
        parameters: {
          Uri: this.__input.uri,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountIntegrations.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListIntegrationItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccountIntegrations',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListAccountIntegrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Uri: this.__input.uri,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccountIntegrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListDomainsRequest) {
  }

  public get items(): shapes.CustomerProfilesListDomainItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListDomains.Items'),
        outputPath: 'Items',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListDomainItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListDomains.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListIntegrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListIntegrationsRequest) {
  }

  public get items(): shapes.CustomerProfilesListIntegrationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIntegrations',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListIntegrations.Items'),
        outputPath: 'Items',
        parameters: {
          DomainName: this.__input.domainName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIntegrations.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListIntegrationItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIntegrations',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListIntegrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DomainName: this.__input.domainName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIntegrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListProfileObjectTypeTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListProfileObjectTypeTemplatesRequest) {
  }

  public get items(): shapes.CustomerProfilesListProfileObjectTypeTemplateItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjectTypeTemplates',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjectTypeTemplates.Items'),
        outputPath: 'Items',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjectTypeTemplates.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListProfileObjectTypeTemplateItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjectTypeTemplates',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjectTypeTemplates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjectTypeTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListProfileObjectTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListProfileObjectTypesRequest) {
  }

  public get items(): shapes.CustomerProfilesListProfileObjectTypeItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjectTypes',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjectTypes.Items'),
        outputPath: 'Items',
        parameters: {
          DomainName: this.__input.domainName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjectTypes.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListProfileObjectTypeItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjectTypes',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjectTypes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DomainName: this.__input.domainName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjectTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListProfileObjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListProfileObjectsRequest) {
  }

  public get items(): shapes.CustomerProfilesListProfileObjectsItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjects',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjects.Items'),
        outputPath: 'Items',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          ProfileId: this.__input.profileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjects.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesListProfileObjectsItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfileObjects',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListProfileObjects.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          ProfileId: this.__input.profileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfileObjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesMergeProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesMergeProfilesRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeProfiles',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.MergeProfiles.Message'),
        outputPath: 'Message',
        parameters: {
          DomainName: this.__input.domainName,
          MainProfileId: this.__input.mainProfileId,
          ProfileIdsToBeMerged: this.__input.profileIdsToBeMerged,
          FieldSourceProfileIds: {
            AccountNumber: this.__input.fieldSourceProfileIds?.accountNumber,
            AdditionalInformation: this.__input.fieldSourceProfileIds?.additionalInformation,
            PartyType: this.__input.fieldSourceProfileIds?.partyType,
            BusinessName: this.__input.fieldSourceProfileIds?.businessName,
            FirstName: this.__input.fieldSourceProfileIds?.firstName,
            MiddleName: this.__input.fieldSourceProfileIds?.middleName,
            LastName: this.__input.fieldSourceProfileIds?.lastName,
            BirthDate: this.__input.fieldSourceProfileIds?.birthDate,
            Gender: this.__input.fieldSourceProfileIds?.gender,
            PhoneNumber: this.__input.fieldSourceProfileIds?.phoneNumber,
            MobilePhoneNumber: this.__input.fieldSourceProfileIds?.mobilePhoneNumber,
            HomePhoneNumber: this.__input.fieldSourceProfileIds?.homePhoneNumber,
            BusinessPhoneNumber: this.__input.fieldSourceProfileIds?.businessPhoneNumber,
            EmailAddress: this.__input.fieldSourceProfileIds?.emailAddress,
            PersonalEmailAddress: this.__input.fieldSourceProfileIds?.personalEmailAddress,
            BusinessEmailAddress: this.__input.fieldSourceProfileIds?.businessEmailAddress,
            Address: this.__input.fieldSourceProfileIds?.address,
            ShippingAddress: this.__input.fieldSourceProfileIds?.shippingAddress,
            MailingAddress: this.__input.fieldSourceProfileIds?.mailingAddress,
            BillingAddress: this.__input.fieldSourceProfileIds?.billingAddress,
            Attributes: this.__input.fieldSourceProfileIds?.attributes,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeProfiles.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class CustomerProfilesResponsesPutIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesPutIntegrationRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.Uri'),
        outputPath: 'Uri',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.Uri', props);
    return resource.getResponseField('Uri') as unknown as string;
  }

  public get objectTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.ObjectTypeName'),
        outputPath: 'ObjectTypeName',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.ObjectTypeName', props);
    return resource.getResponseField('ObjectTypeName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putIntegration',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutIntegration.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          Uri: this.__input.uri,
          ObjectTypeName: this.__input.objectTypeName,
          Tags: this.__input.tags,
          FlowDefinition: {
            Description: this.__input.flowDefinition?.description,
            FlowName: this.__input.flowDefinition?.flowName,
            KmsArn: this.__input.flowDefinition?.kmsArn,
            SourceFlowConfig: {
              ConnectorProfileName: this.__input.flowDefinition?.sourceFlowConfig.connectorProfileName,
              ConnectorType: this.__input.flowDefinition?.sourceFlowConfig.connectorType,
              IncrementalPullConfig: {
                DatetimeTypeFieldName: this.__input.flowDefinition?.sourceFlowConfig.incrementalPullConfig?.datetimeTypeFieldName,
              },
              SourceConnectorProperties: {
                Marketo: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.marketo?.object,
                },
                S3: {
                  BucketName: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketName,
                  BucketPrefix: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.s3?.bucketPrefix,
                },
                Salesforce: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.object,
                  EnableDynamicFieldUpdate: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.enableDynamicFieldUpdate,
                  IncludeDeletedRecords: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.salesforce?.includeDeletedRecords,
                },
                ServiceNow: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.serviceNow?.object,
                },
                Zendesk: {
                  Object: this.__input.flowDefinition?.sourceFlowConfig.sourceConnectorProperties.zendesk?.object,
                },
              },
            },
            Tasks: this.__input.flowDefinition?.tasks,
            TriggerConfig: {
              TriggerType: this.__input.flowDefinition?.triggerConfig.triggerType,
              TriggerProperties: {
                Scheduled: {
                  ScheduleExpression: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleExpression,
                  DataPullMode: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.dataPullMode,
                  ScheduleStartTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleStartTime,
                  ScheduleEndTime: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleEndTime,
                  Timezone: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.timezone,
                  ScheduleOffset: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.scheduleOffset,
                  FirstExecutionFrom: this.__input.flowDefinition?.triggerConfig.triggerProperties?.scheduled?.firstExecutionFrom,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutIntegration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesPutProfileObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesPutProfileObjectRequest) {
  }

  public get profileObjectUniqueKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObject',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObject.ProfileObjectUniqueKey'),
        outputPath: 'ProfileObjectUniqueKey',
        parameters: {
          ObjectTypeName: this.__input.objectTypeName,
          Object: this.__input.object,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObject.ProfileObjectUniqueKey', props);
    return resource.getResponseField('ProfileObjectUniqueKey') as unknown as string;
  }

}

export class CustomerProfilesResponsesPutProfileObjectType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesPutProfileObjectTypeRequest) {
  }

  public get objectTypeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.ObjectTypeName'),
        outputPath: 'ObjectTypeName',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.ObjectTypeName', props);
    return resource.getResponseField('ObjectTypeName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.Description'),
        outputPath: 'Description',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get expirationDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.ExpirationDays'),
        outputPath: 'ExpirationDays',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.ExpirationDays', props);
    return resource.getResponseField('ExpirationDays') as unknown as number;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.EncryptionKey'),
        outputPath: 'EncryptionKey',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.EncryptionKey', props);
    return resource.getResponseField('EncryptionKey') as unknown as string;
  }

  public get allowProfileCreation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.AllowProfileCreation'),
        outputPath: 'AllowProfileCreation',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.AllowProfileCreation', props);
    return resource.getResponseField('AllowProfileCreation') as unknown as boolean;
  }

  public get fields(): Record<string, shapes.CustomerProfilesObjectTypeField> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.Fields'),
        outputPath: 'Fields',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.Fields', props);
    return resource.getResponseField('Fields') as unknown as Record<string, shapes.CustomerProfilesObjectTypeField>;
  }

  public get keys(): Record<string, shapes.CustomerProfilesObjectTypeKey[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.Keys'),
        outputPath: 'Keys',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.Keys', props);
    return resource.getResponseField('Keys') as unknown as Record<string, shapes.CustomerProfilesObjectTypeKey[]>;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putProfileObjectType',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.PutProfileObjectType.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          ObjectTypeName: this.__input.objectTypeName,
          Description: this.__input.description,
          TemplateId: this.__input.templateId,
          ExpirationDays: this.__input.expirationDays,
          EncryptionKey: this.__input.encryptionKey,
          AllowProfileCreation: this.__input.allowProfileCreation,
          Fields: this.__input.fields,
          Keys: this.__input.keys,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutProfileObjectType.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesSearchProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesSearchProfilesRequest) {
  }

  public get items(): shapes.CustomerProfilesProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProfiles',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.SearchProfiles.Items'),
        outputPath: 'Items',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
          KeyName: this.__input.keyName,
          Values: this.__input.values,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProfiles.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.CustomerProfilesProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProfiles',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.SearchProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          DomainName: this.__input.domainName,
          KeyName: this.__input.keyName,
          Values: this.__input.values,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CustomerProfilesResponsesUpdateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesUpdateDomainRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get defaultExpirationDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.DefaultExpirationDays'),
        outputPath: 'DefaultExpirationDays',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.DefaultExpirationDays', props);
    return resource.getResponseField('DefaultExpirationDays') as unknown as number;
  }

  public get defaultEncryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.DefaultEncryptionKey'),
        outputPath: 'DefaultEncryptionKey',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.DefaultEncryptionKey', props);
    return resource.getResponseField('DefaultEncryptionKey') as unknown as string;
  }

  public get deadLetterQueueUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.DeadLetterQueueUrl'),
        outputPath: 'DeadLetterQueueUrl',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.DeadLetterQueueUrl', props);
    return resource.getResponseField('DeadLetterQueueUrl') as unknown as string;
  }

  public get matching(): CustomerProfilesResponsesUpdateDomainMatching {
    return new CustomerProfilesResponsesUpdateDomainMatching(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.Tags'),
        outputPath: 'Tags',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CustomerProfilesResponsesUpdateDomainMatching {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesUpdateDomainRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateDomain.Matching.Enabled'),
        outputPath: 'Matching.Enabled',
        parameters: {
          DomainName: this.__input.domainName,
          DefaultExpirationDays: this.__input.defaultExpirationDays,
          DefaultEncryptionKey: this.__input.defaultEncryptionKey,
          DeadLetterQueueUrl: this.__input.deadLetterQueueUrl,
          Matching: {
            Enabled: this.__input.matching?.enabled,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.Matching.Enabled', props);
    return resource.getResponseField('Matching.Enabled') as unknown as boolean;
  }

}

export class CustomerProfilesResponsesUpdateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CustomerProfilesUpdateProfileRequest) {
  }

  public get profileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfile',
        service: 'CustomerProfiles',
        physicalResourceId: cr.PhysicalResourceId.of('CustomerProfiles.UpdateProfile.ProfileId'),
        outputPath: 'ProfileId',
        parameters: {
          DomainName: this.__input.domainName,
          ProfileId: this.__input.profileId,
          AdditionalInformation: this.__input.additionalInformation,
          AccountNumber: this.__input.accountNumber,
          PartyType: this.__input.partyType,
          BusinessName: this.__input.businessName,
          FirstName: this.__input.firstName,
          MiddleName: this.__input.middleName,
          LastName: this.__input.lastName,
          BirthDate: this.__input.birthDate,
          Gender: this.__input.gender,
          PhoneNumber: this.__input.phoneNumber,
          MobilePhoneNumber: this.__input.mobilePhoneNumber,
          HomePhoneNumber: this.__input.homePhoneNumber,
          BusinessPhoneNumber: this.__input.businessPhoneNumber,
          EmailAddress: this.__input.emailAddress,
          PersonalEmailAddress: this.__input.personalEmailAddress,
          BusinessEmailAddress: this.__input.businessEmailAddress,
          Address: {
            Address1: this.__input.address?.address1,
            Address2: this.__input.address?.address2,
            Address3: this.__input.address?.address3,
            Address4: this.__input.address?.address4,
            City: this.__input.address?.city,
            County: this.__input.address?.county,
            State: this.__input.address?.state,
            Province: this.__input.address?.province,
            Country: this.__input.address?.country,
            PostalCode: this.__input.address?.postalCode,
          },
          ShippingAddress: {
            Address1: this.__input.shippingAddress?.address1,
            Address2: this.__input.shippingAddress?.address2,
            Address3: this.__input.shippingAddress?.address3,
            Address4: this.__input.shippingAddress?.address4,
            City: this.__input.shippingAddress?.city,
            County: this.__input.shippingAddress?.county,
            State: this.__input.shippingAddress?.state,
            Province: this.__input.shippingAddress?.province,
            Country: this.__input.shippingAddress?.country,
            PostalCode: this.__input.shippingAddress?.postalCode,
          },
          MailingAddress: {
            Address1: this.__input.mailingAddress?.address1,
            Address2: this.__input.mailingAddress?.address2,
            Address3: this.__input.mailingAddress?.address3,
            Address4: this.__input.mailingAddress?.address4,
            City: this.__input.mailingAddress?.city,
            County: this.__input.mailingAddress?.county,
            State: this.__input.mailingAddress?.state,
            Province: this.__input.mailingAddress?.province,
            Country: this.__input.mailingAddress?.country,
            PostalCode: this.__input.mailingAddress?.postalCode,
          },
          BillingAddress: {
            Address1: this.__input.billingAddress?.address1,
            Address2: this.__input.billingAddress?.address2,
            Address3: this.__input.billingAddress?.address3,
            Address4: this.__input.billingAddress?.address4,
            City: this.__input.billingAddress?.city,
            County: this.__input.billingAddress?.county,
            State: this.__input.billingAddress?.state,
            Province: this.__input.billingAddress?.province,
            Country: this.__input.billingAddress?.country,
            PostalCode: this.__input.billingAddress?.postalCode,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfile.ProfileId', props);
    return resource.getResponseField('ProfileId') as unknown as string;
  }

}

