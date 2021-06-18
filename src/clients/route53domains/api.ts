import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Route53DomainsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptDomainTransferFromAnotherAwsAccount(input: shapes.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest): Route53DomainsAcceptDomainTransferFromAnotherAwsAccount {
    return new Route53DomainsAcceptDomainTransferFromAnotherAwsAccount(this, 'AcceptDomainTransferFromAnotherAwsAccount', this.__resources, input);
  }

  public cancelDomainTransferToAnotherAwsAccount(input: shapes.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest): Route53DomainsCancelDomainTransferToAnotherAwsAccount {
    return new Route53DomainsCancelDomainTransferToAnotherAwsAccount(this, 'CancelDomainTransferToAnotherAwsAccount', this.__resources, input);
  }

  public checkDomainAvailability(input: shapes.Route53DomainsCheckDomainAvailabilityRequest): Route53DomainsCheckDomainAvailability {
    return new Route53DomainsCheckDomainAvailability(this, 'CheckDomainAvailability', this.__resources, input);
  }

  public checkDomainTransferability(input: shapes.Route53DomainsCheckDomainTransferabilityRequest): Route53DomainsCheckDomainTransferability {
    return new Route53DomainsCheckDomainTransferability(this, 'CheckDomainTransferability', this.__resources, input);
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

  public disableDomainTransferLock(input: shapes.Route53DomainsDisableDomainTransferLockRequest): Route53DomainsDisableDomainTransferLock {
    return new Route53DomainsDisableDomainTransferLock(this, 'DisableDomainTransferLock', this.__resources, input);
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

  public enableDomainTransferLock(input: shapes.Route53DomainsEnableDomainTransferLockRequest): Route53DomainsEnableDomainTransferLock {
    return new Route53DomainsEnableDomainTransferLock(this, 'EnableDomainTransferLock', this.__resources, input);
  }

  public fetchContactReachabilityStatus(input: shapes.Route53DomainsGetContactReachabilityStatusRequest): Route53DomainsFetchContactReachabilityStatus {
    return new Route53DomainsFetchContactReachabilityStatus(this, 'FetchContactReachabilityStatus', this.__resources, input);
  }

  public fetchDomainDetail(input: shapes.Route53DomainsGetDomainDetailRequest): Route53DomainsFetchDomainDetail {
    return new Route53DomainsFetchDomainDetail(this, 'FetchDomainDetail', this.__resources, input);
  }

  public fetchDomainSuggestions(input: shapes.Route53DomainsGetDomainSuggestionsRequest): Route53DomainsFetchDomainSuggestions {
    return new Route53DomainsFetchDomainSuggestions(this, 'FetchDomainSuggestions', this.__resources, input);
  }

  public fetchOperationDetail(input: shapes.Route53DomainsGetOperationDetailRequest): Route53DomainsFetchOperationDetail {
    return new Route53DomainsFetchOperationDetail(this, 'FetchOperationDetail', this.__resources, input);
  }

  public listDomains(input: shapes.Route53DomainsListDomainsRequest): Route53DomainsListDomains {
    return new Route53DomainsListDomains(this, 'ListDomains', this.__resources, input);
  }

  public listOperations(input: shapes.Route53DomainsListOperationsRequest): Route53DomainsListOperations {
    return new Route53DomainsListOperations(this, 'ListOperations', this.__resources, input);
  }

  public listTagsForDomain(input: shapes.Route53DomainsListTagsForDomainRequest): Route53DomainsListTagsForDomain {
    return new Route53DomainsListTagsForDomain(this, 'ListTagsForDomain', this.__resources, input);
  }

  public registerDomain(input: shapes.Route53DomainsRegisterDomainRequest): Route53DomainsRegisterDomain {
    return new Route53DomainsRegisterDomain(this, 'RegisterDomain', this.__resources, input);
  }

  public rejectDomainTransferFromAnotherAwsAccount(input: shapes.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest): Route53DomainsRejectDomainTransferFromAnotherAwsAccount {
    return new Route53DomainsRejectDomainTransferFromAnotherAwsAccount(this, 'RejectDomainTransferFromAnotherAwsAccount', this.__resources, input);
  }

  public renewDomain(input: shapes.Route53DomainsRenewDomainRequest): Route53DomainsRenewDomain {
    return new Route53DomainsRenewDomain(this, 'RenewDomain', this.__resources, input);
  }

  public resendContactReachabilityEmail(input: shapes.Route53DomainsResendContactReachabilityEmailRequest): Route53DomainsResendContactReachabilityEmail {
    return new Route53DomainsResendContactReachabilityEmail(this, 'ResendContactReachabilityEmail', this.__resources, input);
  }

  public retrieveDomainAuthCode(input: shapes.Route53DomainsRetrieveDomainAuthCodeRequest): Route53DomainsRetrieveDomainAuthCode {
    return new Route53DomainsRetrieveDomainAuthCode(this, 'RetrieveDomainAuthCode', this.__resources, input);
  }

  public transferDomain(input: shapes.Route53DomainsTransferDomainRequest): Route53DomainsTransferDomain {
    return new Route53DomainsTransferDomain(this, 'TransferDomain', this.__resources, input);
  }

  public transferDomainToAnotherAwsAccount(input: shapes.Route53DomainsTransferDomainToAnotherAwsAccountRequest): Route53DomainsTransferDomainToAnotherAwsAccount {
    return new Route53DomainsTransferDomainToAnotherAwsAccount(this, 'TransferDomainToAnotherAwsAccount', this.__resources, input);
  }

  public updateDomainContact(input: shapes.Route53DomainsUpdateDomainContactRequest): Route53DomainsUpdateDomainContact {
    return new Route53DomainsUpdateDomainContact(this, 'UpdateDomainContact', this.__resources, input);
  }

  public updateDomainContactPrivacy(input: shapes.Route53DomainsUpdateDomainContactPrivacyRequest): Route53DomainsUpdateDomainContactPrivacy {
    return new Route53DomainsUpdateDomainContactPrivacy(this, 'UpdateDomainContactPrivacy', this.__resources, input);
  }

  public updateDomainNameservers(input: shapes.Route53DomainsUpdateDomainNameserversRequest): Route53DomainsUpdateDomainNameservers {
    return new Route53DomainsUpdateDomainNameservers(this, 'UpdateDomainNameservers', this.__resources, input);
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

  public viewBilling(input: shapes.Route53DomainsViewBillingRequest): Route53DomainsViewBilling {
    return new Route53DomainsViewBilling(this, 'ViewBilling', this.__resources, input);
  }

}

export class Route53DomainsAcceptDomainTransferFromAnotherAwsAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDomainTransferFromAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsCancelDomainTransferToAnotherAwsAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelDomainTransferToAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsCheckDomainAvailability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsCheckDomainAvailabilityRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          IdnLangCode: this.input.idnLangCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckDomainAvailability.Availability', props);
    return resource.getResponseField('Availability') as unknown as string;
  }

}

export class Route53DomainsCheckDomainTransferability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsCheckDomainTransferabilityRequest) {
    super(scope, id);
  }

  public get transferability(): Route53DomainsCheckDomainTransferabilityTransferability {
    return new Route53DomainsCheckDomainTransferabilityTransferability(this, 'Transferability', this.__resources, this.input);
  }

}

export class Route53DomainsCheckDomainTransferabilityTransferability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsCheckDomainTransferabilityRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          AuthCode: this.input.authCode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckDomainTransferability.Transferability.Transferable', props);
    return resource.getResponseField('Transferability.Transferable') as unknown as string;
  }

}

export class Route53DomainsDisableDomainTransferLock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsDisableDomainTransferLockRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableDomainTransferLock.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsEnableDomainTransferLock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsEnableDomainTransferLockRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableDomainTransferLock.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsFetchContactReachabilityStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetContactReachabilityStatusRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactReachabilityStatus.domainName', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactReachabilityStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class Route53DomainsFetchDomainDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetDomainDetailRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.DomainName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.Nameservers', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AutoRenew', props);
    return resource.getResponseField('AutoRenew') as unknown as boolean;
  }

  public get adminContact(): Route53DomainsFetchDomainDetailAdminContact {
    return new Route53DomainsFetchDomainDetailAdminContact(this, 'AdminContact', this.__resources, this.input);
  }

  public get registrantContact(): Route53DomainsFetchDomainDetailRegistrantContact {
    return new Route53DomainsFetchDomainDetailRegistrantContact(this, 'RegistrantContact', this.__resources, this.input);
  }

  public get techContact(): Route53DomainsFetchDomainDetailTechContact {
    return new Route53DomainsFetchDomainDetailTechContact(this, 'TechContact', this.__resources, this.input);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminPrivacy', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantPrivacy', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechPrivacy', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrarName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.WhoIsServer', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrarUrl', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AbuseContactEmail', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AbuseContactPhone', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistryDomainId', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.CreationDate', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.UpdatedDate', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.ExpirationDate', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.Reseller', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.DnsSec', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.StatusList', props);
    return resource.getResponseField('StatusList') as unknown as string[];
  }

}

export class Route53DomainsFetchDomainDetailAdminContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetDomainDetailRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.FirstName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.LastName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.ContactType', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.OrganizationName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.AddressLine1', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.AddressLine2', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.City', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.State', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.CountryCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.ZipCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.PhoneNumber', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.Email', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.Fax', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.AdminContact.ExtraParams', props);
    return resource.getResponseField('AdminContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsFetchDomainDetailRegistrantContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetDomainDetailRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.FirstName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.LastName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.ContactType', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.OrganizationName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.AddressLine1', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.AddressLine2', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.City', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.State', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.CountryCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.ZipCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.PhoneNumber', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.Email', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.Fax', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.RegistrantContact.ExtraParams', props);
    return resource.getResponseField('RegistrantContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsFetchDomainDetailTechContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetDomainDetailRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.FirstName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.LastName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.ContactType', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.OrganizationName', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.AddressLine1', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.AddressLine2', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.City', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.State', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.CountryCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.ZipCode', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.PhoneNumber', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.Email', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.Fax', props);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainDetail.TechContact.ExtraParams', props);
    return resource.getResponseField('TechContact.ExtraParams') as unknown as shapes.Route53DomainsExtraParam[];
  }

}

export class Route53DomainsFetchDomainSuggestions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetDomainSuggestionsRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          SuggestionCount: this.input.suggestionCount,
          OnlyAvailable: this.input.onlyAvailable,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainSuggestions.SuggestionsList', props);
    return resource.getResponseField('SuggestionsList') as unknown as shapes.Route53DomainsDomainSuggestion[];
  }

}

export class Route53DomainsFetchOperationDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsGetOperationDetailRequest) {
    super(scope, id);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.OperationId', props);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.Status', props);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.Message', props);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.DomainName', props);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.Type', props);
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
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationDetail.SubmittedDate', props);
    return resource.getResponseField('SubmittedDate') as unknown as string;
  }

}

export class Route53DomainsListDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsListDomainsRequest) {
    super(scope, id);
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
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.Domains', props);
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
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.NextPageMarker', props);
    return resource.getResponseField('NextPageMarker') as unknown as string;
  }

}

export class Route53DomainsListOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsListOperationsRequest) {
    super(scope, id);
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
          SubmittedSince: this.input.submittedSince,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOperations.Operations', props);
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
          SubmittedSince: this.input.submittedSince,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOperations.NextPageMarker', props);
    return resource.getResponseField('NextPageMarker') as unknown as string;
  }

}

export class Route53DomainsListTagsForDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsListTagsForDomainRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForDomain.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.Route53DomainsTag[];
  }

}

export class Route53DomainsRegisterDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsRegisterDomainRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          IdnLangCode: this.input.idnLangCode,
          DurationInYears: this.input.durationInYears,
          AutoRenew: this.input.autoRenew,
          AdminContact: {
            FirstName: this.input.adminContact.firstName,
            LastName: this.input.adminContact.lastName,
            ContactType: this.input.adminContact.contactType,
            OrganizationName: this.input.adminContact.organizationName,
            AddressLine1: this.input.adminContact.addressLine1,
            AddressLine2: this.input.adminContact.addressLine2,
            City: this.input.adminContact.city,
            State: this.input.adminContact.state,
            CountryCode: this.input.adminContact.countryCode,
            ZipCode: this.input.adminContact.zipCode,
            PhoneNumber: this.input.adminContact.phoneNumber,
            Email: this.input.adminContact.email,
            Fax: this.input.adminContact.fax,
            ExtraParams: this.input.adminContact.extraParams,
          },
          RegistrantContact: {
            FirstName: this.input.registrantContact.firstName,
            LastName: this.input.registrantContact.lastName,
            ContactType: this.input.registrantContact.contactType,
            OrganizationName: this.input.registrantContact.organizationName,
            AddressLine1: this.input.registrantContact.addressLine1,
            AddressLine2: this.input.registrantContact.addressLine2,
            City: this.input.registrantContact.city,
            State: this.input.registrantContact.state,
            CountryCode: this.input.registrantContact.countryCode,
            ZipCode: this.input.registrantContact.zipCode,
            PhoneNumber: this.input.registrantContact.phoneNumber,
            Email: this.input.registrantContact.email,
            Fax: this.input.registrantContact.fax,
            ExtraParams: this.input.registrantContact.extraParams,
          },
          TechContact: {
            FirstName: this.input.techContact.firstName,
            LastName: this.input.techContact.lastName,
            ContactType: this.input.techContact.contactType,
            OrganizationName: this.input.techContact.organizationName,
            AddressLine1: this.input.techContact.addressLine1,
            AddressLine2: this.input.techContact.addressLine2,
            City: this.input.techContact.city,
            State: this.input.techContact.state,
            CountryCode: this.input.techContact.countryCode,
            ZipCode: this.input.techContact.zipCode,
            PhoneNumber: this.input.techContact.phoneNumber,
            Email: this.input.techContact.email,
            Fax: this.input.techContact.fax,
            ExtraParams: this.input.techContact.extraParams,
          },
          PrivacyProtectAdminContact: this.input.privacyProtectAdminContact,
          PrivacyProtectRegistrantContact: this.input.privacyProtectRegistrantContact,
          PrivacyProtectTechContact: this.input.privacyProtectTechContact,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsRejectDomainTransferFromAnotherAwsAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RejectDomainTransferFromAnotherAwsAccount.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsRenewDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsRenewDomainRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          DurationInYears: this.input.durationInYears,
          CurrentExpiryYear: this.input.currentExpiryYear,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsResendContactReachabilityEmail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsResendContactReachabilityEmailRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResendContactReachabilityEmail.domainName', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResendContactReachabilityEmail.emailAddress', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResendContactReachabilityEmail.isAlreadyVerified', props);
    return resource.getResponseField('isAlreadyVerified') as unknown as boolean;
  }

}

export class Route53DomainsRetrieveDomainAuthCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsRetrieveDomainAuthCodeRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RetrieveDomainAuthCode.AuthCode', props);
    return resource.getResponseField('AuthCode') as unknown as string;
  }

}

export class Route53DomainsTransferDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsTransferDomainRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          IdnLangCode: this.input.idnLangCode,
          DurationInYears: this.input.durationInYears,
          Nameservers: this.input.nameservers,
          AuthCode: this.input.authCode,
          AutoRenew: this.input.autoRenew,
          AdminContact: {
            FirstName: this.input.adminContact.firstName,
            LastName: this.input.adminContact.lastName,
            ContactType: this.input.adminContact.contactType,
            OrganizationName: this.input.adminContact.organizationName,
            AddressLine1: this.input.adminContact.addressLine1,
            AddressLine2: this.input.adminContact.addressLine2,
            City: this.input.adminContact.city,
            State: this.input.adminContact.state,
            CountryCode: this.input.adminContact.countryCode,
            ZipCode: this.input.adminContact.zipCode,
            PhoneNumber: this.input.adminContact.phoneNumber,
            Email: this.input.adminContact.email,
            Fax: this.input.adminContact.fax,
            ExtraParams: this.input.adminContact.extraParams,
          },
          RegistrantContact: {
            FirstName: this.input.registrantContact.firstName,
            LastName: this.input.registrantContact.lastName,
            ContactType: this.input.registrantContact.contactType,
            OrganizationName: this.input.registrantContact.organizationName,
            AddressLine1: this.input.registrantContact.addressLine1,
            AddressLine2: this.input.registrantContact.addressLine2,
            City: this.input.registrantContact.city,
            State: this.input.registrantContact.state,
            CountryCode: this.input.registrantContact.countryCode,
            ZipCode: this.input.registrantContact.zipCode,
            PhoneNumber: this.input.registrantContact.phoneNumber,
            Email: this.input.registrantContact.email,
            Fax: this.input.registrantContact.fax,
            ExtraParams: this.input.registrantContact.extraParams,
          },
          TechContact: {
            FirstName: this.input.techContact.firstName,
            LastName: this.input.techContact.lastName,
            ContactType: this.input.techContact.contactType,
            OrganizationName: this.input.techContact.organizationName,
            AddressLine1: this.input.techContact.addressLine1,
            AddressLine2: this.input.techContact.addressLine2,
            City: this.input.techContact.city,
            State: this.input.techContact.state,
            CountryCode: this.input.techContact.countryCode,
            ZipCode: this.input.techContact.zipCode,
            PhoneNumber: this.input.techContact.phoneNumber,
            Email: this.input.techContact.email,
            Fax: this.input.techContact.fax,
            ExtraParams: this.input.techContact.extraParams,
          },
          PrivacyProtectAdminContact: this.input.privacyProtectAdminContact,
          PrivacyProtectRegistrantContact: this.input.privacyProtectRegistrantContact,
          PrivacyProtectTechContact: this.input.privacyProtectTechContact,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransferDomain.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsTransferDomainToAnotherAwsAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsTransferDomainToAnotherAwsAccountRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransferDomainToAnotherAwsAccount.OperationId', props);
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
          DomainName: this.input.domainName,
          AccountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TransferDomainToAnotherAwsAccount.Password', props);
    return resource.getResponseField('Password') as unknown as string;
  }

}

export class Route53DomainsUpdateDomainContact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsUpdateDomainContactRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          AdminContact: {
            FirstName: this.input.adminContact?.firstName,
            LastName: this.input.adminContact?.lastName,
            ContactType: this.input.adminContact?.contactType,
            OrganizationName: this.input.adminContact?.organizationName,
            AddressLine1: this.input.adminContact?.addressLine1,
            AddressLine2: this.input.adminContact?.addressLine2,
            City: this.input.adminContact?.city,
            State: this.input.adminContact?.state,
            CountryCode: this.input.adminContact?.countryCode,
            ZipCode: this.input.adminContact?.zipCode,
            PhoneNumber: this.input.adminContact?.phoneNumber,
            Email: this.input.adminContact?.email,
            Fax: this.input.adminContact?.fax,
            ExtraParams: this.input.adminContact?.extraParams,
          },
          RegistrantContact: {
            FirstName: this.input.registrantContact?.firstName,
            LastName: this.input.registrantContact?.lastName,
            ContactType: this.input.registrantContact?.contactType,
            OrganizationName: this.input.registrantContact?.organizationName,
            AddressLine1: this.input.registrantContact?.addressLine1,
            AddressLine2: this.input.registrantContact?.addressLine2,
            City: this.input.registrantContact?.city,
            State: this.input.registrantContact?.state,
            CountryCode: this.input.registrantContact?.countryCode,
            ZipCode: this.input.registrantContact?.zipCode,
            PhoneNumber: this.input.registrantContact?.phoneNumber,
            Email: this.input.registrantContact?.email,
            Fax: this.input.registrantContact?.fax,
            ExtraParams: this.input.registrantContact?.extraParams,
          },
          TechContact: {
            FirstName: this.input.techContact?.firstName,
            LastName: this.input.techContact?.lastName,
            ContactType: this.input.techContact?.contactType,
            OrganizationName: this.input.techContact?.organizationName,
            AddressLine1: this.input.techContact?.addressLine1,
            AddressLine2: this.input.techContact?.addressLine2,
            City: this.input.techContact?.city,
            State: this.input.techContact?.state,
            CountryCode: this.input.techContact?.countryCode,
            ZipCode: this.input.techContact?.zipCode,
            PhoneNumber: this.input.techContact?.phoneNumber,
            Email: this.input.techContact?.email,
            Fax: this.input.techContact?.fax,
            ExtraParams: this.input.techContact?.extraParams,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainContact.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsUpdateDomainContactPrivacy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsUpdateDomainContactPrivacyRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          AdminPrivacy: this.input.adminPrivacy,
          RegistrantPrivacy: this.input.registrantPrivacy,
          TechPrivacy: this.input.techPrivacy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainContactPrivacy.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsUpdateDomainNameservers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsUpdateDomainNameserversRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          FIAuthKey: this.input.fiAuthKey,
          Nameservers: this.input.nameservers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainNameservers.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class Route53DomainsViewBilling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.Route53DomainsViewBillingRequest) {
    super(scope, id);
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
          Start: this.input.start,
          End: this.input.end,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ViewBilling.NextPageMarker', props);
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
          Start: this.input.start,
          End: this.input.end,
          Marker: this.input.marker,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ViewBilling.BillingRecords', props);
    return resource.getResponseField('BillingRecords') as unknown as shapes.Route53DomainsBillingRecord[];
  }

}

