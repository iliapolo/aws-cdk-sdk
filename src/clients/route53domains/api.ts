import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53DomainsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptDomainTransferFromAnotherAwsAccount(input: shapes.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest): Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount {
    return new Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount(this, this.__resources, input);
  }

  public cancelDomainTransferToAnotherAwsAccount(input: shapes.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest): Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount {
    return new Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount(this, this.__resources, input);
  }

  public checkDomainAvailability(input: shapes.Route53DomainsCheckDomainAvailabilityRequest): Route53DomainsResponsesCheckDomainAvailability {
    return new Route53DomainsResponsesCheckDomainAvailability(this, this.__resources, input);
  }

  public checkDomainTransferability(input: shapes.Route53DomainsCheckDomainTransferabilityRequest): Route53DomainsResponsesCheckDomainTransferability {
    return new Route53DomainsResponsesCheckDomainTransferability(this, this.__resources, input);
  }

  public deleteTagsForDomain(input: shapes.Route53DomainsDeleteTagsForDomainRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTagsForDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.DeleteTagsForDomain'),
        parameters: {
          DomainName: input.domainName,
          TagsToDelete: input.tagsToDelete,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTagsForDomain', props);
  }

  public disableDomainAutoRenew(input: shapes.Route53DomainsDisableDomainAutoRenewRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableDomainAutoRenew',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.DisableDomainAutoRenew'),
        parameters: {
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableDomainAutoRenew', props);
  }

  public disableDomainTransferLock(input: shapes.Route53DomainsDisableDomainTransferLockRequest): Route53DomainsResponsesDisableDomainTransferLock {
    return new Route53DomainsResponsesDisableDomainTransferLock(this, this.__resources, input);
  }

  public enableDomainAutoRenew(input: shapes.Route53DomainsEnableDomainAutoRenewRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableDomainAutoRenew',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.EnableDomainAutoRenew'),
        parameters: {
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableDomainAutoRenew', props);
  }

  public enableDomainTransferLock(input: shapes.Route53DomainsEnableDomainTransferLockRequest): Route53DomainsResponsesEnableDomainTransferLock {
    return new Route53DomainsResponsesEnableDomainTransferLock(this, this.__resources, input);
  }

  public fetchContactReachabilityStatus(input: shapes.Route53DomainsGetContactReachabilityStatusRequest): Route53DomainsResponsesFetchContactReachabilityStatus {
    return new Route53DomainsResponsesFetchContactReachabilityStatus(this, this.__resources, input);
  }

  public fetchDomainDetail(input: shapes.Route53DomainsGetDomainDetailRequest): Route53DomainsResponsesFetchDomainDetail {
    return new Route53DomainsResponsesFetchDomainDetail(this, this.__resources, input);
  }

  public fetchDomainSuggestions(input: shapes.Route53DomainsGetDomainSuggestionsRequest): Route53DomainsResponsesFetchDomainSuggestions {
    return new Route53DomainsResponsesFetchDomainSuggestions(this, this.__resources, input);
  }

  public fetchOperationDetail(input: shapes.Route53DomainsGetOperationDetailRequest): Route53DomainsResponsesFetchOperationDetail {
    return new Route53DomainsResponsesFetchOperationDetail(this, this.__resources, input);
  }

  public listDomains(input: shapes.Route53DomainsListDomainsRequest): Route53DomainsResponsesListDomains {
    return new Route53DomainsResponsesListDomains(this, this.__resources, input);
  }

  public listOperations(input: shapes.Route53DomainsListOperationsRequest): Route53DomainsResponsesListOperations {
    return new Route53DomainsResponsesListOperations(this, this.__resources, input);
  }

  public listTagsForDomain(input: shapes.Route53DomainsListTagsForDomainRequest): Route53DomainsResponsesListTagsForDomain {
    return new Route53DomainsResponsesListTagsForDomain(this, this.__resources, input);
  }

  public registerDomain(input: shapes.Route53DomainsRegisterDomainRequest): Route53DomainsResponsesRegisterDomain {
    return new Route53DomainsResponsesRegisterDomain(this, this.__resources, input);
  }

  public rejectDomainTransferFromAnotherAwsAccount(input: shapes.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest): Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount {
    return new Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount(this, this.__resources, input);
  }

  public renewDomain(input: shapes.Route53DomainsRenewDomainRequest): Route53DomainsResponsesRenewDomain {
    return new Route53DomainsResponsesRenewDomain(this, this.__resources, input);
  }

  public resendContactReachabilityEmail(input: shapes.Route53DomainsResendContactReachabilityEmailRequest): Route53DomainsResponsesResendContactReachabilityEmail {
    return new Route53DomainsResponsesResendContactReachabilityEmail(this, this.__resources, input);
  }

  public retrieveDomainAuthCode(input: shapes.Route53DomainsRetrieveDomainAuthCodeRequest): Route53DomainsResponsesRetrieveDomainAuthCode {
    return new Route53DomainsResponsesRetrieveDomainAuthCode(this, this.__resources, input);
  }

  public transferDomain(input: shapes.Route53DomainsTransferDomainRequest): Route53DomainsResponsesTransferDomain {
    return new Route53DomainsResponsesTransferDomain(this, this.__resources, input);
  }

  public transferDomainToAnotherAwsAccount(input: shapes.Route53DomainsTransferDomainToAnotherAwsAccountRequest): Route53DomainsResponsesTransferDomainToAnotherAwsAccount {
    return new Route53DomainsResponsesTransferDomainToAnotherAwsAccount(this, this.__resources, input);
  }

  public updateDomainContact(input: shapes.Route53DomainsUpdateDomainContactRequest): Route53DomainsResponsesUpdateDomainContact {
    return new Route53DomainsResponsesUpdateDomainContact(this, this.__resources, input);
  }

  public updateDomainContactPrivacy(input: shapes.Route53DomainsUpdateDomainContactPrivacyRequest): Route53DomainsResponsesUpdateDomainContactPrivacy {
    return new Route53DomainsResponsesUpdateDomainContactPrivacy(this, this.__resources, input);
  }

  public updateDomainNameservers(input: shapes.Route53DomainsUpdateDomainNameserversRequest): Route53DomainsResponsesUpdateDomainNameservers {
    return new Route53DomainsResponsesUpdateDomainNameservers(this, this.__resources, input);
  }

  public updateTagsForDomain(input: shapes.Route53DomainsUpdateTagsForDomainRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagsForDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.UpdateTagsForDomain'),
        parameters: {
          DomainName: input.domainName,
          TagsToUpdate: input.tagsToUpdate,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTagsForDomain', props);
  }

  public viewBilling(input: shapes.Route53DomainsViewBillingRequest): Route53DomainsResponsesViewBilling {
    return new Route53DomainsResponsesViewBilling(this, this.__resources, input);
  }

}

export class Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDomainTransferFromAnotherAwsAccount',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.AcceptDomainTransferFromAnotherAwsAccount.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDomainTransferFromAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelDomainTransferToAnotherAwsAccount',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.CancelDomainTransferToAnotherAwsAccount.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelDomainTransferToAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesCheckDomainAvailability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsCheckDomainAvailabilityRequest) {
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkDomainAvailability',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.CheckDomainAvailability.Availability'),
        outputPath: 'Availability',
        parameters: {
          DomainName: this.__input.domainName,
          IdnLangCode: this.__input.idnLangCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckDomainAvailability.Availability', props);
    return resource.getResponseField('Availability') as unknown as string;
  }

}

export class Route53DomainsResponsesCheckDomainTransferability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsCheckDomainTransferabilityRequest) {
  }

  public get transferability(): Route53DomainsResponsesCheckDomainTransferabilityTransferability {
    return new Route53DomainsResponsesCheckDomainTransferabilityTransferability(this.__scope, this.__resources, this.__input);
  }

}

export class Route53DomainsResponsesCheckDomainTransferabilityTransferability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsCheckDomainTransferabilityRequest) {
  }

  public get transferable(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkDomainTransferability',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.CheckDomainTransferability.Transferability.Transferable'),
        outputPath: 'Transferability.Transferable',
        parameters: {
          DomainName: this.__input.domainName,
          AuthCode: this.__input.authCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckDomainTransferability.Transferability.Transferable', props);
    return resource.getResponseField('Transferability.Transferable') as unknown as string;
  }

}

export class Route53DomainsResponsesDisableDomainTransferLock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsDisableDomainTransferLockRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableDomainTransferLock',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.DisableDomainTransferLock.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableDomainTransferLock.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesEnableDomainTransferLock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsEnableDomainTransferLockRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableDomainTransferLock',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.EnableDomainTransferLock.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableDomainTransferLock.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesFetchContactReachabilityStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetContactReachabilityStatusRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactReachabilityStatus',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetContactReachabilityStatus.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactReachabilityStatus.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactReachabilityStatus',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetContactReachabilityStatus.status'),
        outputPath: 'status',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactReachabilityStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class Route53DomainsResponsesFetchDomainDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetDomainDetailRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get nameservers(): shapes.Route53DomainsNameserver[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.Nameservers'),
        outputPath: 'Nameservers',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.Nameservers', props);
    return resource.getResponseField('Nameservers') as unknown as shapes.Route53DomainsNameserver[];
  }

  public get autoRenew(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AutoRenew'),
        outputPath: 'AutoRenew',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AutoRenew', props);
    return resource.getResponseField('AutoRenew') as unknown as boolean;
  }

  public get adminContact(): Route53DomainsResponsesFetchDomainDetailAdminContact {
    return new Route53DomainsResponsesFetchDomainDetailAdminContact(this.__scope, this.__resources, this.__input);
  }

  public get registrantContact(): Route53DomainsResponsesFetchDomainDetailRegistrantContact {
    return new Route53DomainsResponsesFetchDomainDetailRegistrantContact(this.__scope, this.__resources, this.__input);
  }

  public get techContact(): Route53DomainsResponsesFetchDomainDetailTechContact {
    return new Route53DomainsResponsesFetchDomainDetailTechContact(this.__scope, this.__resources, this.__input);
  }

  public get adminPrivacy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminPrivacy'),
        outputPath: 'AdminPrivacy',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminPrivacy', props);
    return resource.getResponseField('AdminPrivacy') as unknown as boolean;
  }

  public get registrantPrivacy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantPrivacy'),
        outputPath: 'RegistrantPrivacy',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantPrivacy', props);
    return resource.getResponseField('RegistrantPrivacy') as unknown as boolean;
  }

  public get techPrivacy(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechPrivacy'),
        outputPath: 'TechPrivacy',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechPrivacy', props);
    return resource.getResponseField('TechPrivacy') as unknown as boolean;
  }

  public get registrarName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrarName'),
        outputPath: 'RegistrarName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrarName', props);
    return resource.getResponseField('RegistrarName') as unknown as string;
  }

  public get whoIsServer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.WhoIsServer'),
        outputPath: 'WhoIsServer',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.WhoIsServer', props);
    return resource.getResponseField('WhoIsServer') as unknown as string;
  }

  public get registrarUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrarUrl'),
        outputPath: 'RegistrarUrl',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrarUrl', props);
    return resource.getResponseField('RegistrarUrl') as unknown as string;
  }

  public get abuseContactEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AbuseContactEmail'),
        outputPath: 'AbuseContactEmail',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AbuseContactEmail', props);
    return resource.getResponseField('AbuseContactEmail') as unknown as string;
  }

  public get abuseContactPhone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AbuseContactPhone'),
        outputPath: 'AbuseContactPhone',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AbuseContactPhone', props);
    return resource.getResponseField('AbuseContactPhone') as unknown as string;
  }

  public get registryDomainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistryDomainId'),
        outputPath: 'RegistryDomainId',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistryDomainId', props);
    return resource.getResponseField('RegistryDomainId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get updatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.UpdatedDate'),
        outputPath: 'UpdatedDate',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.UpdatedDate', props);
    return resource.getResponseField('UpdatedDate') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.ExpirationDate'),
        outputPath: 'ExpirationDate',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.ExpirationDate', props);
    return resource.getResponseField('ExpirationDate') as unknown as string;
  }

  public get reseller(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.Reseller'),
        outputPath: 'Reseller',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.Reseller', props);
    return resource.getResponseField('Reseller') as unknown as string;
  }

  public get dnsSec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.DnsSec'),
        outputPath: 'DnsSec',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.DnsSec', props);
    return resource.getResponseField('DnsSec') as unknown as string;
  }

  public get statusList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.StatusList'),
        outputPath: 'StatusList',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.StatusList', props);
    return resource.getResponseField('StatusList') as unknown as string[];
  }

}

export class Route53DomainsResponsesFetchDomainDetailAdminContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetDomainDetailRequest) {
  }

  public get firstName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.FirstName'),
        outputPath: 'AdminContact.FirstName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.FirstName', props);
    return resource.getResponseField('AdminContact.FirstName') as unknown as string;
  }

  public get lastName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.LastName'),
        outputPath: 'AdminContact.LastName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.LastName', props);
    return resource.getResponseField('AdminContact.LastName') as unknown as string;
  }

  public get contactType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.ContactType'),
        outputPath: 'AdminContact.ContactType',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.ContactType', props);
    return resource.getResponseField('AdminContact.ContactType') as unknown as string;
  }

  public get organizationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.OrganizationName'),
        outputPath: 'AdminContact.OrganizationName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.OrganizationName', props);
    return resource.getResponseField('AdminContact.OrganizationName') as unknown as string;
  }

  public get addressLine1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.AddressLine1'),
        outputPath: 'AdminContact.AddressLine1',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.AddressLine1', props);
    return resource.getResponseField('AdminContact.AddressLine1') as unknown as string;
  }

  public get addressLine2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.AddressLine2'),
        outputPath: 'AdminContact.AddressLine2',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.AddressLine2', props);
    return resource.getResponseField('AdminContact.AddressLine2') as unknown as string;
  }

  public get city(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.City'),
        outputPath: 'AdminContact.City',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.City', props);
    return resource.getResponseField('AdminContact.City') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.State'),
        outputPath: 'AdminContact.State',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.State', props);
    return resource.getResponseField('AdminContact.State') as unknown as string;
  }

  public get countryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.CountryCode'),
        outputPath: 'AdminContact.CountryCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.CountryCode', props);
    return resource.getResponseField('AdminContact.CountryCode') as unknown as string;
  }

  public get zipCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.ZipCode'),
        outputPath: 'AdminContact.ZipCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.ZipCode', props);
    return resource.getResponseField('AdminContact.ZipCode') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.PhoneNumber'),
        outputPath: 'AdminContact.PhoneNumber',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.PhoneNumber', props);
    return resource.getResponseField('AdminContact.PhoneNumber') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.Email'),
        outputPath: 'AdminContact.Email',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.Email', props);
    return resource.getResponseField('AdminContact.Email') as unknown as string;
  }

  public get fax(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.Fax'),
        outputPath: 'AdminContact.Fax',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.Fax', props);
    return resource.getResponseField('AdminContact.Fax') as unknown as string;
  }

  public get extraParams(): shapes.Route53DomainsExtraParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.AdminContact.ExtraParams'),
        outputPath: 'AdminContact.ExtraParams',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.AdminContact.ExtraParams', props);
    return resource.getResponseField('AdminContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsResponsesFetchDomainDetailRegistrantContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetDomainDetailRequest) {
  }

  public get firstName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.FirstName'),
        outputPath: 'RegistrantContact.FirstName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.FirstName', props);
    return resource.getResponseField('RegistrantContact.FirstName') as unknown as string;
  }

  public get lastName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.LastName'),
        outputPath: 'RegistrantContact.LastName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.LastName', props);
    return resource.getResponseField('RegistrantContact.LastName') as unknown as string;
  }

  public get contactType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.ContactType'),
        outputPath: 'RegistrantContact.ContactType',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.ContactType', props);
    return resource.getResponseField('RegistrantContact.ContactType') as unknown as string;
  }

  public get organizationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.OrganizationName'),
        outputPath: 'RegistrantContact.OrganizationName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.OrganizationName', props);
    return resource.getResponseField('RegistrantContact.OrganizationName') as unknown as string;
  }

  public get addressLine1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.AddressLine1'),
        outputPath: 'RegistrantContact.AddressLine1',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.AddressLine1', props);
    return resource.getResponseField('RegistrantContact.AddressLine1') as unknown as string;
  }

  public get addressLine2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.AddressLine2'),
        outputPath: 'RegistrantContact.AddressLine2',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.AddressLine2', props);
    return resource.getResponseField('RegistrantContact.AddressLine2') as unknown as string;
  }

  public get city(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.City'),
        outputPath: 'RegistrantContact.City',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.City', props);
    return resource.getResponseField('RegistrantContact.City') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.State'),
        outputPath: 'RegistrantContact.State',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.State', props);
    return resource.getResponseField('RegistrantContact.State') as unknown as string;
  }

  public get countryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.CountryCode'),
        outputPath: 'RegistrantContact.CountryCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.CountryCode', props);
    return resource.getResponseField('RegistrantContact.CountryCode') as unknown as string;
  }

  public get zipCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.ZipCode'),
        outputPath: 'RegistrantContact.ZipCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.ZipCode', props);
    return resource.getResponseField('RegistrantContact.ZipCode') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.PhoneNumber'),
        outputPath: 'RegistrantContact.PhoneNumber',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.PhoneNumber', props);
    return resource.getResponseField('RegistrantContact.PhoneNumber') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.Email'),
        outputPath: 'RegistrantContact.Email',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.Email', props);
    return resource.getResponseField('RegistrantContact.Email') as unknown as string;
  }

  public get fax(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.Fax'),
        outputPath: 'RegistrantContact.Fax',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.Fax', props);
    return resource.getResponseField('RegistrantContact.Fax') as unknown as string;
  }

  public get extraParams(): shapes.Route53DomainsExtraParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.RegistrantContact.ExtraParams'),
        outputPath: 'RegistrantContact.ExtraParams',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.RegistrantContact.ExtraParams', props);
    return resource.getResponseField('RegistrantContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsResponsesFetchDomainDetailTechContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetDomainDetailRequest) {
  }

  public get firstName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.FirstName'),
        outputPath: 'TechContact.FirstName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.FirstName', props);
    return resource.getResponseField('TechContact.FirstName') as unknown as string;
  }

  public get lastName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.LastName'),
        outputPath: 'TechContact.LastName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.LastName', props);
    return resource.getResponseField('TechContact.LastName') as unknown as string;
  }

  public get contactType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.ContactType'),
        outputPath: 'TechContact.ContactType',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.ContactType', props);
    return resource.getResponseField('TechContact.ContactType') as unknown as string;
  }

  public get organizationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.OrganizationName'),
        outputPath: 'TechContact.OrganizationName',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.OrganizationName', props);
    return resource.getResponseField('TechContact.OrganizationName') as unknown as string;
  }

  public get addressLine1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.AddressLine1'),
        outputPath: 'TechContact.AddressLine1',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.AddressLine1', props);
    return resource.getResponseField('TechContact.AddressLine1') as unknown as string;
  }

  public get addressLine2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.AddressLine2'),
        outputPath: 'TechContact.AddressLine2',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.AddressLine2', props);
    return resource.getResponseField('TechContact.AddressLine2') as unknown as string;
  }

  public get city(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.City'),
        outputPath: 'TechContact.City',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.City', props);
    return resource.getResponseField('TechContact.City') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.State'),
        outputPath: 'TechContact.State',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.State', props);
    return resource.getResponseField('TechContact.State') as unknown as string;
  }

  public get countryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.CountryCode'),
        outputPath: 'TechContact.CountryCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.CountryCode', props);
    return resource.getResponseField('TechContact.CountryCode') as unknown as string;
  }

  public get zipCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.ZipCode'),
        outputPath: 'TechContact.ZipCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.ZipCode', props);
    return resource.getResponseField('TechContact.ZipCode') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.PhoneNumber'),
        outputPath: 'TechContact.PhoneNumber',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.PhoneNumber', props);
    return resource.getResponseField('TechContact.PhoneNumber') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.Email'),
        outputPath: 'TechContact.Email',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.Email', props);
    return resource.getResponseField('TechContact.Email') as unknown as string;
  }

  public get fax(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.Fax'),
        outputPath: 'TechContact.Fax',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.Fax', props);
    return resource.getResponseField('TechContact.Fax') as unknown as string;
  }

  public get extraParams(): shapes.Route53DomainsExtraParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainDetail.TechContact.ExtraParams'),
        outputPath: 'TechContact.ExtraParams',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainDetail.TechContact.ExtraParams', props);
    return resource.getResponseField('TechContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsResponsesFetchDomainSuggestions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetDomainSuggestionsRequest) {
  }

  public get suggestionsList(): shapes.Route53DomainsDomainSuggestion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainSuggestions',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetDomainSuggestions.SuggestionsList'),
        outputPath: 'SuggestionsList',
        parameters: {
          DomainName: this.__input.domainName,
          SuggestionCount: this.__input.suggestionCount,
          OnlyAvailable: this.__input.onlyAvailable,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainSuggestions.SuggestionsList', props);
    return resource.getResponseField('SuggestionsList') as unknown as shapes.Route53DomainsDomainSuggestion[];
  }

}

export class Route53DomainsResponsesFetchOperationDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsGetOperationDetailRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.Status'),
        outputPath: 'Status',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.Message'),
        outputPath: 'Message',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.Type'),
        outputPath: 'Type',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get submittedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationDetail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.GetOperationDetail.SubmittedDate'),
        outputPath: 'SubmittedDate',
        parameters: {
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationDetail.SubmittedDate', props);
    return resource.getResponseField('SubmittedDate') as unknown as string;
  }

}

export class Route53DomainsResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsListDomainsRequest) {
  }

  public get domains(): shapes.Route53DomainsDomainSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ListDomains.Domains'),
        outputPath: 'Domains',
        parameters: {
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.Domains', props);
    return resource.getResponseField('Domains') as unknown as shapes.Route53DomainsDomainSummary[];
  }

  public get nextPageMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ListDomains.NextPageMarker'),
        outputPath: 'NextPageMarker',
        parameters: {
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.NextPageMarker', props);
    return resource.getResponseField('NextPageMarker') as unknown as string;
  }

}

export class Route53DomainsResponsesListOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsListOperationsRequest) {
  }

  public get operations(): shapes.Route53DomainsOperationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ListOperations.Operations'),
        outputPath: 'Operations',
        parameters: {
          SubmittedSince: this.__input.submittedSince,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.Operations', props);
    return resource.getResponseField('Operations') as unknown as shapes.Route53DomainsOperationSummary[];
  }

  public get nextPageMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ListOperations.NextPageMarker'),
        outputPath: 'NextPageMarker',
        parameters: {
          SubmittedSince: this.__input.submittedSince,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.NextPageMarker', props);
    return resource.getResponseField('NextPageMarker') as unknown as string;
  }

}

export class Route53DomainsResponsesListTagsForDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsListTagsForDomainRequest) {
  }

  public get tagList(): shapes.Route53DomainsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ListTagsForDomain.TagList'),
        outputPath: 'TagList',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForDomain.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.Route53DomainsTag[];
  }

}

export class Route53DomainsResponsesRegisterDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsRegisterDomainRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.RegisterDomain.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          IdnLangCode: this.__input.idnLangCode,
          DurationInYears: this.__input.durationInYears,
          AutoRenew: this.__input.autoRenew,
          AdminContact: {
            FirstName: this.__input.adminContact.firstName,
            LastName: this.__input.adminContact.lastName,
            ContactType: this.__input.adminContact.contactType,
            OrganizationName: this.__input.adminContact.organizationName,
            AddressLine1: this.__input.adminContact.addressLine1,
            AddressLine2: this.__input.adminContact.addressLine2,
            City: this.__input.adminContact.city,
            State: this.__input.adminContact.state,
            CountryCode: this.__input.adminContact.countryCode,
            ZipCode: this.__input.adminContact.zipCode,
            PhoneNumber: this.__input.adminContact.phoneNumber,
            Email: this.__input.adminContact.email,
            Fax: this.__input.adminContact.fax,
            ExtraParams: this.__input.adminContact.extraParams,
          },
          RegistrantContact: {
            FirstName: this.__input.registrantContact.firstName,
            LastName: this.__input.registrantContact.lastName,
            ContactType: this.__input.registrantContact.contactType,
            OrganizationName: this.__input.registrantContact.organizationName,
            AddressLine1: this.__input.registrantContact.addressLine1,
            AddressLine2: this.__input.registrantContact.addressLine2,
            City: this.__input.registrantContact.city,
            State: this.__input.registrantContact.state,
            CountryCode: this.__input.registrantContact.countryCode,
            ZipCode: this.__input.registrantContact.zipCode,
            PhoneNumber: this.__input.registrantContact.phoneNumber,
            Email: this.__input.registrantContact.email,
            Fax: this.__input.registrantContact.fax,
            ExtraParams: this.__input.registrantContact.extraParams,
          },
          TechContact: {
            FirstName: this.__input.techContact.firstName,
            LastName: this.__input.techContact.lastName,
            ContactType: this.__input.techContact.contactType,
            OrganizationName: this.__input.techContact.organizationName,
            AddressLine1: this.__input.techContact.addressLine1,
            AddressLine2: this.__input.techContact.addressLine2,
            City: this.__input.techContact.city,
            State: this.__input.techContact.state,
            CountryCode: this.__input.techContact.countryCode,
            ZipCode: this.__input.techContact.zipCode,
            PhoneNumber: this.__input.techContact.phoneNumber,
            Email: this.__input.techContact.email,
            Fax: this.__input.techContact.fax,
            ExtraParams: this.__input.techContact.extraParams,
          },
          PrivacyProtectAdminContact: this.__input.privacyProtectAdminContact,
          PrivacyProtectRegistrantContact: this.__input.privacyProtectRegistrantContact,
          PrivacyProtectTechContact: this.__input.privacyProtectTechContact,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectDomainTransferFromAnotherAwsAccount',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.RejectDomainTransferFromAnotherAwsAccount.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectDomainTransferFromAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesRenewDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsRenewDomainRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.RenewDomain.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          DurationInYears: this.__input.durationInYears,
          CurrentExpiryYear: this.__input.currentExpiryYear,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesResendContactReachabilityEmail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsResendContactReachabilityEmailRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resendContactReachabilityEmail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ResendContactReachabilityEmail.domainName'),
        outputPath: 'domainName',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResendContactReachabilityEmail.domainName', props);
    return resource.getResponseField('domainName') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resendContactReachabilityEmail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ResendContactReachabilityEmail.emailAddress'),
        outputPath: 'emailAddress',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResendContactReachabilityEmail.emailAddress', props);
    return resource.getResponseField('emailAddress') as unknown as string;
  }

  public get isAlreadyVerified(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resendContactReachabilityEmail',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ResendContactReachabilityEmail.isAlreadyVerified'),
        outputPath: 'isAlreadyVerified',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResendContactReachabilityEmail.isAlreadyVerified', props);
    return resource.getResponseField('isAlreadyVerified') as unknown as boolean;
  }

}

export class Route53DomainsResponsesRetrieveDomainAuthCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsRetrieveDomainAuthCodeRequest) {
  }

  public get authCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retrieveDomainAuthCode',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.RetrieveDomainAuthCode.AuthCode'),
        outputPath: 'AuthCode',
        parameters: {
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetrieveDomainAuthCode.AuthCode', props);
    return resource.getResponseField('AuthCode') as unknown as string;
  }

}

export class Route53DomainsResponsesTransferDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsTransferDomainRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transferDomain',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.TransferDomain.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          IdnLangCode: this.__input.idnLangCode,
          DurationInYears: this.__input.durationInYears,
          Nameservers: this.__input.nameservers,
          AuthCode: this.__input.authCode,
          AutoRenew: this.__input.autoRenew,
          AdminContact: {
            FirstName: this.__input.adminContact.firstName,
            LastName: this.__input.adminContact.lastName,
            ContactType: this.__input.adminContact.contactType,
            OrganizationName: this.__input.adminContact.organizationName,
            AddressLine1: this.__input.adminContact.addressLine1,
            AddressLine2: this.__input.adminContact.addressLine2,
            City: this.__input.adminContact.city,
            State: this.__input.adminContact.state,
            CountryCode: this.__input.adminContact.countryCode,
            ZipCode: this.__input.adminContact.zipCode,
            PhoneNumber: this.__input.adminContact.phoneNumber,
            Email: this.__input.adminContact.email,
            Fax: this.__input.adminContact.fax,
            ExtraParams: this.__input.adminContact.extraParams,
          },
          RegistrantContact: {
            FirstName: this.__input.registrantContact.firstName,
            LastName: this.__input.registrantContact.lastName,
            ContactType: this.__input.registrantContact.contactType,
            OrganizationName: this.__input.registrantContact.organizationName,
            AddressLine1: this.__input.registrantContact.addressLine1,
            AddressLine2: this.__input.registrantContact.addressLine2,
            City: this.__input.registrantContact.city,
            State: this.__input.registrantContact.state,
            CountryCode: this.__input.registrantContact.countryCode,
            ZipCode: this.__input.registrantContact.zipCode,
            PhoneNumber: this.__input.registrantContact.phoneNumber,
            Email: this.__input.registrantContact.email,
            Fax: this.__input.registrantContact.fax,
            ExtraParams: this.__input.registrantContact.extraParams,
          },
          TechContact: {
            FirstName: this.__input.techContact.firstName,
            LastName: this.__input.techContact.lastName,
            ContactType: this.__input.techContact.contactType,
            OrganizationName: this.__input.techContact.organizationName,
            AddressLine1: this.__input.techContact.addressLine1,
            AddressLine2: this.__input.techContact.addressLine2,
            City: this.__input.techContact.city,
            State: this.__input.techContact.state,
            CountryCode: this.__input.techContact.countryCode,
            ZipCode: this.__input.techContact.zipCode,
            PhoneNumber: this.__input.techContact.phoneNumber,
            Email: this.__input.techContact.email,
            Fax: this.__input.techContact.fax,
            ExtraParams: this.__input.techContact.extraParams,
          },
          PrivacyProtectAdminContact: this.__input.privacyProtectAdminContact,
          PrivacyProtectRegistrantContact: this.__input.privacyProtectRegistrantContact,
          PrivacyProtectTechContact: this.__input.privacyProtectTechContact,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransferDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesTransferDomainToAnotherAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsTransferDomainToAnotherAwsAccountRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transferDomainToAnotherAwsAccount',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.TransferDomainToAnotherAwsAccount.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransferDomainToAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

  public get password(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'transferDomainToAnotherAwsAccount',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.TransferDomainToAnotherAwsAccount.Password'),
        outputPath: 'Password',
        parameters: {
          DomainName: this.__input.domainName,
          AccountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TransferDomainToAnotherAwsAccount.Password', props);
    return resource.getResponseField('Password') as unknown as string;
  }

}

export class Route53DomainsResponsesUpdateDomainContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsUpdateDomainContactRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainContact',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.UpdateDomainContact.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          AdminContact: {
            FirstName: this.__input.adminContact?.firstName,
            LastName: this.__input.adminContact?.lastName,
            ContactType: this.__input.adminContact?.contactType,
            OrganizationName: this.__input.adminContact?.organizationName,
            AddressLine1: this.__input.adminContact?.addressLine1,
            AddressLine2: this.__input.adminContact?.addressLine2,
            City: this.__input.adminContact?.city,
            State: this.__input.adminContact?.state,
            CountryCode: this.__input.adminContact?.countryCode,
            ZipCode: this.__input.adminContact?.zipCode,
            PhoneNumber: this.__input.adminContact?.phoneNumber,
            Email: this.__input.adminContact?.email,
            Fax: this.__input.adminContact?.fax,
            ExtraParams: this.__input.adminContact?.extraParams,
          },
          RegistrantContact: {
            FirstName: this.__input.registrantContact?.firstName,
            LastName: this.__input.registrantContact?.lastName,
            ContactType: this.__input.registrantContact?.contactType,
            OrganizationName: this.__input.registrantContact?.organizationName,
            AddressLine1: this.__input.registrantContact?.addressLine1,
            AddressLine2: this.__input.registrantContact?.addressLine2,
            City: this.__input.registrantContact?.city,
            State: this.__input.registrantContact?.state,
            CountryCode: this.__input.registrantContact?.countryCode,
            ZipCode: this.__input.registrantContact?.zipCode,
            PhoneNumber: this.__input.registrantContact?.phoneNumber,
            Email: this.__input.registrantContact?.email,
            Fax: this.__input.registrantContact?.fax,
            ExtraParams: this.__input.registrantContact?.extraParams,
          },
          TechContact: {
            FirstName: this.__input.techContact?.firstName,
            LastName: this.__input.techContact?.lastName,
            ContactType: this.__input.techContact?.contactType,
            OrganizationName: this.__input.techContact?.organizationName,
            AddressLine1: this.__input.techContact?.addressLine1,
            AddressLine2: this.__input.techContact?.addressLine2,
            City: this.__input.techContact?.city,
            State: this.__input.techContact?.state,
            CountryCode: this.__input.techContact?.countryCode,
            ZipCode: this.__input.techContact?.zipCode,
            PhoneNumber: this.__input.techContact?.phoneNumber,
            Email: this.__input.techContact?.email,
            Fax: this.__input.techContact?.fax,
            ExtraParams: this.__input.techContact?.extraParams,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainContact.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesUpdateDomainContactPrivacy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsUpdateDomainContactPrivacyRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainContactPrivacy',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.UpdateDomainContactPrivacy.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          AdminPrivacy: this.__input.adminPrivacy,
          RegistrantPrivacy: this.__input.registrantPrivacy,
          TechPrivacy: this.__input.techPrivacy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainContactPrivacy.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesUpdateDomainNameservers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsUpdateDomainNameserversRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainNameservers',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.UpdateDomainNameservers.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          DomainName: this.__input.domainName,
          FIAuthKey: this.__input.fiAuthKey,
          Nameservers: this.__input.nameservers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainNameservers.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResponsesViewBilling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Route53DomainsViewBillingRequest) {
  }

  public get nextPageMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'viewBilling',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ViewBilling.NextPageMarker'),
        outputPath: 'NextPageMarker',
        parameters: {
          Start: this.__input.start,
          End: this.__input.end,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ViewBilling.NextPageMarker', props);
    return resource.getResponseField('NextPageMarker') as unknown as string;
  }

  public get billingRecords(): shapes.Route53DomainsBillingRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'viewBilling',
        service: 'Route53Domains',
        physicalResourceId: cr.PhysicalResourceId.of('Route53Domains.ViewBilling.BillingRecords'),
        outputPath: 'BillingRecords',
        parameters: {
          Start: this.__input.start,
          End: this.__input.end,
          Marker: this.__input.marker,
          MaxItems: this.__input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ViewBilling.BillingRecords', props);
    return resource.getResponseField('BillingRecords') as unknown as shapes.Route53DomainsBillingRecord[];
  }

}

