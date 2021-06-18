import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AcmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToCertificate(input: shapes.AcmAddTagsToCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.AddTagsToCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToCertificate', props);
  }

  public deleteCertificate(input: shapes.AcmDeleteCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DeleteCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCertificate', props);
  }

  public describeCertificate(input: shapes.AcmDescribeCertificateRequest): ACMDescribeCertificate {
    return new ACMDescribeCertificate(this, 'DescribeCertificate', this.__resources, input);
  }

  public exportCertificate(input: shapes.AcmExportCertificateRequest): ACMExportCertificate {
    return new ACMExportCertificate(this, 'ExportCertificate', this.__resources, input);
  }

  public fetchCertificate(input: shapes.AcmGetCertificateRequest): ACMFetchCertificate {
    return new ACMFetchCertificate(this, 'FetchCertificate', this.__resources, input);
  }

  public importCertificate(input: shapes.AcmImportCertificateRequest): ACMImportCertificate {
    return new ACMImportCertificate(this, 'ImportCertificate', this.__resources, input);
  }

  public listCertificates(input: shapes.AcmListCertificatesRequest): ACMListCertificates {
    return new ACMListCertificates(this, 'ListCertificates', this.__resources, input);
  }

  public listTagsForCertificate(input: shapes.AcmListTagsForCertificateRequest): ACMListTagsForCertificate {
    return new ACMListTagsForCertificate(this, 'ListTagsForCertificate', this.__resources, input);
  }

  public removeTagsFromCertificate(input: shapes.AcmRemoveTagsFromCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RemoveTagsFromCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromCertificate', props);
  }

  public renewCertificate(input: shapes.AcmRenewCertificateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RenewCertificate'),
        parameters: {
          CertificateArn: input.certificateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RenewCertificate', props);
  }

  public requestCertificate(input: shapes.AcmRequestCertificateRequest): ACMRequestCertificate {
    return new ACMRequestCertificate(this, 'RequestCertificate', this.__resources, input);
  }

  public resendValidationEmail(input: shapes.AcmResendValidationEmailRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resendValidationEmail',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ResendValidationEmail'),
        parameters: {
          CertificateArn: input.certificateArn,
          Domain: input.domain,
          ValidationDomain: input.validationDomain,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ResendValidationEmail', props);
  }

  public updateCertificateOptions(input: shapes.AcmUpdateCertificateOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCertificateOptions',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.UpdateCertificateOptions'),
        parameters: {
          CertificateArn: input.certificateArn,
          Options: {
            CertificateTransparencyLoggingPreference: input.options.certificateTransparencyLoggingPreference,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCertificateOptions', props);
  }

}

export class ACMDescribeCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmDescribeCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): ACMDescribeCertificateCertificate {
    return new ACMDescribeCertificateCertificate(this, 'Certificate', this.__resources, this.input);
  }

}

export class ACMDescribeCertificateCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmDescribeCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CertificateArn'),
        outputPath: 'Certificate.CertificateArn',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.CertificateArn', props);
    return resource.getResponseField('Certificate.CertificateArn') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.DomainName'),
        outputPath: 'Certificate.DomainName',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.DomainName', props);
    return resource.getResponseField('Certificate.DomainName') as unknown as string;
  }

  public get subjectAlternativeNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.SubjectAlternativeNames'),
        outputPath: 'Certificate.SubjectAlternativeNames',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.SubjectAlternativeNames', props);
    return resource.getResponseField('Certificate.SubjectAlternativeNames') as unknown as string[];
  }

  public get domainValidationOptions(): shapes.AcmDomainValidation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.DomainValidationOptions'),
        outputPath: 'Certificate.DomainValidationOptions',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.DomainValidationOptions', props);
    return resource.getResponseField('Certificate.DomainValidationOptions') as unknown as shapes.AcmDomainValidation[];
  }

  public get serial(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Serial'),
        outputPath: 'Certificate.Serial',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Serial', props);
    return resource.getResponseField('Certificate.Serial') as unknown as string;
  }

  public get subject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Subject'),
        outputPath: 'Certificate.Subject',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Subject', props);
    return resource.getResponseField('Certificate.Subject') as unknown as string;
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Issuer'),
        outputPath: 'Certificate.Issuer',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Issuer', props);
    return resource.getResponseField('Certificate.Issuer') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CreatedAt'),
        outputPath: 'Certificate.CreatedAt',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.CreatedAt', props);
    return resource.getResponseField('Certificate.CreatedAt') as unknown as string;
  }

  public get issuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.IssuedAt'),
        outputPath: 'Certificate.IssuedAt',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.IssuedAt', props);
    return resource.getResponseField('Certificate.IssuedAt') as unknown as string;
  }

  public get importedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.ImportedAt'),
        outputPath: 'Certificate.ImportedAt',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.ImportedAt', props);
    return resource.getResponseField('Certificate.ImportedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Status'),
        outputPath: 'Certificate.Status',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Status', props);
    return resource.getResponseField('Certificate.Status') as unknown as string;
  }

  public get revokedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RevokedAt'),
        outputPath: 'Certificate.RevokedAt',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RevokedAt', props);
    return resource.getResponseField('Certificate.RevokedAt') as unknown as string;
  }

  public get revocationReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RevocationReason'),
        outputPath: 'Certificate.RevocationReason',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RevocationReason', props);
    return resource.getResponseField('Certificate.RevocationReason') as unknown as string;
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.NotBefore'),
        outputPath: 'Certificate.NotBefore',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.NotBefore', props);
    return resource.getResponseField('Certificate.NotBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.NotAfter'),
        outputPath: 'Certificate.NotAfter',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.NotAfter', props);
    return resource.getResponseField('Certificate.NotAfter') as unknown as string;
  }

  public get keyAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.KeyAlgorithm'),
        outputPath: 'Certificate.KeyAlgorithm',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.KeyAlgorithm', props);
    return resource.getResponseField('Certificate.KeyAlgorithm') as unknown as string;
  }

  public get signatureAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.SignatureAlgorithm'),
        outputPath: 'Certificate.SignatureAlgorithm',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.SignatureAlgorithm', props);
    return resource.getResponseField('Certificate.SignatureAlgorithm') as unknown as string;
  }

  public get inUseBy(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.InUseBy'),
        outputPath: 'Certificate.InUseBy',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.InUseBy', props);
    return resource.getResponseField('Certificate.InUseBy') as unknown as string[];
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.FailureReason'),
        outputPath: 'Certificate.FailureReason',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.FailureReason', props);
    return resource.getResponseField('Certificate.FailureReason') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Type'),
        outputPath: 'Certificate.Type',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Type', props);
    return resource.getResponseField('Certificate.Type') as unknown as string;
  }

  public get renewalSummary(): ACMDescribeCertificateCertificateRenewalSummary {
    return new ACMDescribeCertificateCertificateRenewalSummary(this, 'RenewalSummary', this.__resources, this.input);
  }

  public get keyUsages(): shapes.AcmKeyUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.KeyUsages'),
        outputPath: 'Certificate.KeyUsages',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.KeyUsages', props);
    return resource.getResponseField('Certificate.KeyUsages') as unknown as shapes.AcmKeyUsage[];
  }

  public get extendedKeyUsages(): shapes.AcmExtendedKeyUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.ExtendedKeyUsages'),
        outputPath: 'Certificate.ExtendedKeyUsages',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.ExtendedKeyUsages', props);
    return resource.getResponseField('Certificate.ExtendedKeyUsages') as unknown as shapes.AcmExtendedKeyUsage[];
  }

  public get certificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.CertificateAuthorityArn'),
        outputPath: 'Certificate.CertificateAuthorityArn',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.CertificateAuthorityArn', props);
    return resource.getResponseField('Certificate.CertificateAuthorityArn') as unknown as string;
  }

  public get renewalEligibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalEligibility'),
        outputPath: 'Certificate.RenewalEligibility',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RenewalEligibility', props);
    return resource.getResponseField('Certificate.RenewalEligibility') as unknown as string;
  }

  public get options(): ACMDescribeCertificateCertificateOptions {
    return new ACMDescribeCertificateCertificateOptions(this, 'Options', this.__resources, this.input);
  }

}

export class ACMDescribeCertificateCertificateRenewalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmDescribeCertificateRequest) {
    super(scope, id);
  }

  public get renewalStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.RenewalStatus'),
        outputPath: 'Certificate.RenewalSummary.RenewalStatus',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RenewalSummary.RenewalStatus', props);
    return resource.getResponseField('Certificate.RenewalSummary.RenewalStatus') as unknown as string;
  }

  public get domainValidationOptions(): shapes.AcmDomainValidation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.DomainValidationOptions'),
        outputPath: 'Certificate.RenewalSummary.DomainValidationOptions',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RenewalSummary.DomainValidationOptions', props);
    return resource.getResponseField('Certificate.RenewalSummary.DomainValidationOptions') as unknown as shapes.AcmDomainValidation[];
  }

  public get renewalStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.RenewalStatusReason'),
        outputPath: 'Certificate.RenewalSummary.RenewalStatusReason',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RenewalSummary.RenewalStatusReason', props);
    return resource.getResponseField('Certificate.RenewalSummary.RenewalStatusReason') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.RenewalSummary.UpdatedAt'),
        outputPath: 'Certificate.RenewalSummary.UpdatedAt',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.RenewalSummary.UpdatedAt', props);
    return resource.getResponseField('Certificate.RenewalSummary.UpdatedAt') as unknown as string;
  }

}

export class ACMDescribeCertificateCertificateOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmDescribeCertificateRequest) {
    super(scope, id);
  }

  public get certificateTransparencyLoggingPreference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.DescribeCertificate.Certificate.Options.CertificateTransparencyLoggingPreference'),
        outputPath: 'Certificate.Options.CertificateTransparencyLoggingPreference',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificate.Certificate.Options.CertificateTransparencyLoggingPreference', props);
    return resource.getResponseField('Certificate.Options.CertificateTransparencyLoggingPreference') as unknown as string;
  }

}

export class ACMExportCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmExportCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateArn: this.input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateArn: this.input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ExportCertificate.PrivateKey'),
        outputPath: 'PrivateKey',
        parameters: {
          CertificateArn: this.input.certificateArn,
          Passphrase: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportCertificate.PrivateKey', props);
    return resource.getResponseField('PrivateKey') as unknown as string;
  }

}

export class ACMFetchCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmGetCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.GetCertificate.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificate.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get certificateChain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.GetCertificate.CertificateChain'),
        outputPath: 'CertificateChain',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificate.CertificateChain', props);
    return resource.getResponseField('CertificateChain') as unknown as string;
  }

}

export class ACMImportCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmImportCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ImportCertificate.CertificateArn'),
        outputPath: 'CertificateArn',
        parameters: {
          CertificateArn: this.input.certificateArn,
          Certificate: {
          },
          PrivateKey: {
          },
          CertificateChain: {
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportCertificate.CertificateArn', props);
    return resource.getResponseField('CertificateArn') as unknown as string;
  }

}

export class ACMListCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmListCertificatesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListCertificates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CertificateStatuses: this.input.certificateStatuses,
          Includes: {
            extendedKeyUsage: this.input.includes?.extendedKeyUsage,
            keyUsage: this.input.includes?.keyUsage,
            keyTypes: this.input.includes?.keyTypes,
          },
          NextToken: this.input.nextToken,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get certificateSummaryList(): shapes.AcmCertificateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCertificates',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListCertificates.CertificateSummaryList'),
        outputPath: 'CertificateSummaryList',
        parameters: {
          CertificateStatuses: this.input.certificateStatuses,
          Includes: {
            extendedKeyUsage: this.input.includes?.extendedKeyUsage,
            keyUsage: this.input.includes?.keyUsage,
            keyTypes: this.input.includes?.keyTypes,
          },
          NextToken: this.input.nextToken,
          MaxItems: this.input.maxItems,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCertificates.CertificateSummaryList', props);
    return resource.getResponseField('CertificateSummaryList') as unknown as shapes.AcmCertificateSummary[];
  }

}

export class ACMListTagsForCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmListTagsForCertificateRequest) {
    super(scope, id);
  }

  public get tags(): shapes.AcmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.ListTagsForCertificate.Tags'),
        outputPath: 'Tags',
        parameters: {
          CertificateArn: this.input.certificateArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForCertificate.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AcmTag[];
  }

}

export class ACMRequestCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AcmRequestCertificateRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'requestCertificate',
        service: 'ACM',
        physicalResourceId: cr.PhysicalResourceId.of('ACM.RequestCertificate.CertificateArn'),
        outputPath: 'CertificateArn',
        parameters: {
          DomainName: this.input.domainName,
          ValidationMethod: this.input.validationMethod,
          SubjectAlternativeNames: this.input.subjectAlternativeNames,
          IdempotencyToken: this.input.idempotencyToken,
          DomainValidationOptions: this.input.domainValidationOptions,
          Options: {
            CertificateTransparencyLoggingPreference: this.input.options?.certificateTransparencyLoggingPreference,
          },
          CertificateAuthorityArn: this.input.certificateAuthorityArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RequestCertificate.CertificateArn', props);
    return resource.getResponseField('CertificateArn') as unknown as string;
  }

}

