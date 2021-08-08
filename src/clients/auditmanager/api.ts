import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AuditManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAssessmentReportEvidenceFolder(input: shapes.AuditManagerAssociateAssessmentReportEvidenceFolderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAssessmentReportEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.AssociateAssessmentReportEvidenceFolder'),
        parameters: {
          assessmentId: input.assessmentId,
          evidenceFolderId: input.evidenceFolderId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateAssessmentReportEvidenceFolder', props);
  }

  public batchAssociateAssessmentReportEvidence(input: shapes.AuditManagerBatchAssociateAssessmentReportEvidenceRequest): AuditManagerResponsesBatchAssociateAssessmentReportEvidence {
    return new AuditManagerResponsesBatchAssociateAssessmentReportEvidence(this, this.__resources, input);
  }

  public batchCreateDelegationByAssessment(input: shapes.AuditManagerBatchCreateDelegationByAssessmentRequest): AuditManagerResponsesBatchCreateDelegationByAssessment {
    return new AuditManagerResponsesBatchCreateDelegationByAssessment(this, this.__resources, input);
  }

  public batchDeleteDelegationByAssessment(input: shapes.AuditManagerBatchDeleteDelegationByAssessmentRequest): AuditManagerResponsesBatchDeleteDelegationByAssessment {
    return new AuditManagerResponsesBatchDeleteDelegationByAssessment(this, this.__resources, input);
  }

  public batchDisassociateAssessmentReportEvidence(input: shapes.AuditManagerBatchDisassociateAssessmentReportEvidenceRequest): AuditManagerResponsesBatchDisassociateAssessmentReportEvidence {
    return new AuditManagerResponsesBatchDisassociateAssessmentReportEvidence(this, this.__resources, input);
  }

  public batchImportEvidenceToAssessmentControl(input: shapes.AuditManagerBatchImportEvidenceToAssessmentControlRequest): AuditManagerResponsesBatchImportEvidenceToAssessmentControl {
    return new AuditManagerResponsesBatchImportEvidenceToAssessmentControl(this, this.__resources, input);
  }

  public createAssessment(input: shapes.AuditManagerCreateAssessmentRequest): AuditManagerResponsesCreateAssessment {
    return new AuditManagerResponsesCreateAssessment(this, this.__resources, input);
  }

  public createAssessmentFramework(input: shapes.AuditManagerCreateAssessmentFrameworkRequest): AuditManagerResponsesCreateAssessmentFramework {
    return new AuditManagerResponsesCreateAssessmentFramework(this, this.__resources, input);
  }

  public createAssessmentReport(input: shapes.AuditManagerCreateAssessmentReportRequest): AuditManagerResponsesCreateAssessmentReport {
    return new AuditManagerResponsesCreateAssessmentReport(this, this.__resources, input);
  }

  public createControl(input: shapes.AuditManagerCreateControlRequest): AuditManagerResponsesCreateControl {
    return new AuditManagerResponsesCreateControl(this, this.__resources, input);
  }

  public deleteAssessment(input: shapes.AuditManagerDeleteAssessmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeleteAssessment'),
        parameters: {
          assessmentId: input.assessmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessment', props);
  }

  public deleteAssessmentFramework(input: shapes.AuditManagerDeleteAssessmentFrameworkRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeleteAssessmentFramework'),
        parameters: {
          frameworkId: input.frameworkId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessmentFramework', props);
  }

  public deleteAssessmentReport(input: shapes.AuditManagerDeleteAssessmentReportRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeleteAssessmentReport'),
        parameters: {
          assessmentId: input.assessmentId,
          assessmentReportId: input.assessmentReportId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssessmentReport', props);
  }

  public deleteControl(input: shapes.AuditManagerDeleteControlRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeleteControl'),
        parameters: {
          controlId: input.controlId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteControl', props);
  }

  public deregisterAccount(): AuditManagerResponsesDeregisterAccount {
    return new AuditManagerResponsesDeregisterAccount(this, this.__resources);
  }

  public deregisterOrganizationAdminAccount(input: shapes.AuditManagerDeregisterOrganizationAdminAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterOrganizationAdminAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeregisterOrganizationAdminAccount'),
        parameters: {
          adminAccountId: input.adminAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterOrganizationAdminAccount', props);
  }

  public disassociateAssessmentReportEvidenceFolder(input: shapes.AuditManagerDisassociateAssessmentReportEvidenceFolderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAssessmentReportEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DisassociateAssessmentReportEvidenceFolder'),
        parameters: {
          assessmentId: input.assessmentId,
          evidenceFolderId: input.evidenceFolderId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateAssessmentReportEvidenceFolder', props);
  }

  public fetchAccountStatus(): AuditManagerResponsesFetchAccountStatus {
    return new AuditManagerResponsesFetchAccountStatus(this, this.__resources);
  }

  public fetchAssessment(input: shapes.AuditManagerGetAssessmentRequest): AuditManagerResponsesFetchAssessment {
    return new AuditManagerResponsesFetchAssessment(this, this.__resources, input);
  }

  public fetchAssessmentFramework(input: shapes.AuditManagerGetAssessmentFrameworkRequest): AuditManagerResponsesFetchAssessmentFramework {
    return new AuditManagerResponsesFetchAssessmentFramework(this, this.__resources, input);
  }

  public fetchAssessmentReportUrl(input: shapes.AuditManagerGetAssessmentReportUrlRequest): AuditManagerResponsesFetchAssessmentReportUrl {
    return new AuditManagerResponsesFetchAssessmentReportUrl(this, this.__resources, input);
  }

  public fetchChangeLogs(input: shapes.AuditManagerGetChangeLogsRequest): AuditManagerResponsesFetchChangeLogs {
    return new AuditManagerResponsesFetchChangeLogs(this, this.__resources, input);
  }

  public fetchControl(input: shapes.AuditManagerGetControlRequest): AuditManagerResponsesFetchControl {
    return new AuditManagerResponsesFetchControl(this, this.__resources, input);
  }

  public fetchDelegations(input: shapes.AuditManagerGetDelegationsRequest): AuditManagerResponsesFetchDelegations {
    return new AuditManagerResponsesFetchDelegations(this, this.__resources, input);
  }

  public fetchEvidence(input: shapes.AuditManagerGetEvidenceRequest): AuditManagerResponsesFetchEvidence {
    return new AuditManagerResponsesFetchEvidence(this, this.__resources, input);
  }

  public fetchEvidenceByEvidenceFolder(input: shapes.AuditManagerGetEvidenceByEvidenceFolderRequest): AuditManagerResponsesFetchEvidenceByEvidenceFolder {
    return new AuditManagerResponsesFetchEvidenceByEvidenceFolder(this, this.__resources, input);
  }

  public fetchEvidenceFolder(input: shapes.AuditManagerGetEvidenceFolderRequest): AuditManagerResponsesFetchEvidenceFolder {
    return new AuditManagerResponsesFetchEvidenceFolder(this, this.__resources, input);
  }

  public fetchEvidenceFoldersByAssessment(input: shapes.AuditManagerGetEvidenceFoldersByAssessmentRequest): AuditManagerResponsesFetchEvidenceFoldersByAssessment {
    return new AuditManagerResponsesFetchEvidenceFoldersByAssessment(this, this.__resources, input);
  }

  public fetchEvidenceFoldersByAssessmentControl(input: shapes.AuditManagerGetEvidenceFoldersByAssessmentControlRequest): AuditManagerResponsesFetchEvidenceFoldersByAssessmentControl {
    return new AuditManagerResponsesFetchEvidenceFoldersByAssessmentControl(this, this.__resources, input);
  }

  public fetchOrganizationAdminAccount(): AuditManagerResponsesFetchOrganizationAdminAccount {
    return new AuditManagerResponsesFetchOrganizationAdminAccount(this, this.__resources);
  }

  public fetchServicesInScope(): AuditManagerResponsesFetchServicesInScope {
    return new AuditManagerResponsesFetchServicesInScope(this, this.__resources);
  }

  public fetchSettings(input: shapes.AuditManagerGetSettingsRequest): AuditManagerResponsesFetchSettings {
    return new AuditManagerResponsesFetchSettings(this, this.__resources, input);
  }

  public listAssessmentFrameworks(input: shapes.AuditManagerListAssessmentFrameworksRequest): AuditManagerResponsesListAssessmentFrameworks {
    return new AuditManagerResponsesListAssessmentFrameworks(this, this.__resources, input);
  }

  public listAssessmentReports(input: shapes.AuditManagerListAssessmentReportsRequest): AuditManagerResponsesListAssessmentReports {
    return new AuditManagerResponsesListAssessmentReports(this, this.__resources, input);
  }

  public listAssessments(input: shapes.AuditManagerListAssessmentsRequest): AuditManagerResponsesListAssessments {
    return new AuditManagerResponsesListAssessments(this, this.__resources, input);
  }

  public listControls(input: shapes.AuditManagerListControlsRequest): AuditManagerResponsesListControls {
    return new AuditManagerResponsesListControls(this, this.__resources, input);
  }

  public listKeywordsForDataSource(input: shapes.AuditManagerListKeywordsForDataSourceRequest): AuditManagerResponsesListKeywordsForDataSource {
    return new AuditManagerResponsesListKeywordsForDataSource(this, this.__resources, input);
  }

  public listNotifications(input: shapes.AuditManagerListNotificationsRequest): AuditManagerResponsesListNotifications {
    return new AuditManagerResponsesListNotifications(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AuditManagerListTagsForResourceRequest): AuditManagerResponsesListTagsForResource {
    return new AuditManagerResponsesListTagsForResource(this, this.__resources, input);
  }

  public registerAccount(input: shapes.AuditManagerRegisterAccountRequest): AuditManagerResponsesRegisterAccount {
    return new AuditManagerResponsesRegisterAccount(this, this.__resources, input);
  }

  public registerOrganizationAdminAccount(input: shapes.AuditManagerRegisterOrganizationAdminAccountRequest): AuditManagerResponsesRegisterOrganizationAdminAccount {
    return new AuditManagerResponsesRegisterOrganizationAdminAccount(this, this.__resources, input);
  }

  public tagResource(input: shapes.AuditManagerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AuditManagerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAssessment(input: shapes.AuditManagerUpdateAssessmentRequest): AuditManagerResponsesUpdateAssessment {
    return new AuditManagerResponsesUpdateAssessment(this, this.__resources, input);
  }

  public updateAssessmentControl(input: shapes.AuditManagerUpdateAssessmentControlRequest): AuditManagerResponsesUpdateAssessmentControl {
    return new AuditManagerResponsesUpdateAssessmentControl(this, this.__resources, input);
  }

  public updateAssessmentControlSetStatus(input: shapes.AuditManagerUpdateAssessmentControlSetStatusRequest): AuditManagerResponsesUpdateAssessmentControlSetStatus {
    return new AuditManagerResponsesUpdateAssessmentControlSetStatus(this, this.__resources, input);
  }

  public updateAssessmentFramework(input: shapes.AuditManagerUpdateAssessmentFrameworkRequest): AuditManagerResponsesUpdateAssessmentFramework {
    return new AuditManagerResponsesUpdateAssessmentFramework(this, this.__resources, input);
  }

  public updateAssessmentStatus(input: shapes.AuditManagerUpdateAssessmentStatusRequest): AuditManagerResponsesUpdateAssessmentStatus {
    return new AuditManagerResponsesUpdateAssessmentStatus(this, this.__resources, input);
  }

  public updateControl(input: shapes.AuditManagerUpdateControlRequest): AuditManagerResponsesUpdateControl {
    return new AuditManagerResponsesUpdateControl(this, this.__resources, input);
  }

  public updateSettings(input: shapes.AuditManagerUpdateSettingsRequest): AuditManagerResponsesUpdateSettings {
    return new AuditManagerResponsesUpdateSettings(this, this.__resources, input);
  }

  public validateAssessmentReportIntegrity(input: shapes.AuditManagerValidateAssessmentReportIntegrityRequest): AuditManagerResponsesValidateAssessmentReportIntegrity {
    return new AuditManagerResponsesValidateAssessmentReportIntegrity(this, this.__resources, input);
  }

}

export class AuditManagerResponsesBatchAssociateAssessmentReportEvidence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerBatchAssociateAssessmentReportEvidenceRequest) {
  }

  public get evidenceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateAssessmentReportEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchAssociateAssessmentReportEvidence.evidenceIds'),
        outputPath: 'evidenceIds',
        parameters: {
          assessmentId: this.__input.assessmentId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceIds: this.__input.evidenceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateAssessmentReportEvidence.evidenceIds', props);
    return resource.getResponseField('evidenceIds') as unknown as string[];
  }

  public get errors(): shapes.AuditManagerAssessmentReportEvidenceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateAssessmentReportEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchAssociateAssessmentReportEvidence.errors'),
        outputPath: 'errors',
        parameters: {
          assessmentId: this.__input.assessmentId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceIds: this.__input.evidenceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateAssessmentReportEvidence.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AuditManagerAssessmentReportEvidenceError[];
  }

}

export class AuditManagerResponsesBatchCreateDelegationByAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerBatchCreateDelegationByAssessmentRequest) {
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateDelegationByAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchCreateDelegationByAssessment.delegations'),
        outputPath: 'delegations',
        parameters: {
          createDelegationRequests: this.__input.createDelegationRequests,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateDelegationByAssessment.delegations', props);
    return resource.getResponseField('delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get errors(): shapes.AuditManagerBatchCreateDelegationByAssessmentError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateDelegationByAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchCreateDelegationByAssessment.errors'),
        outputPath: 'errors',
        parameters: {
          createDelegationRequests: this.__input.createDelegationRequests,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateDelegationByAssessment.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AuditManagerBatchCreateDelegationByAssessmentError[];
  }

}

export class AuditManagerResponsesBatchDeleteDelegationByAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerBatchDeleteDelegationByAssessmentRequest) {
  }

  public get errors(): shapes.AuditManagerBatchDeleteDelegationByAssessmentError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteDelegationByAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchDeleteDelegationByAssessment.errors'),
        outputPath: 'errors',
        parameters: {
          delegationIds: this.__input.delegationIds,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteDelegationByAssessment.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AuditManagerBatchDeleteDelegationByAssessmentError[];
  }

}

export class AuditManagerResponsesBatchDisassociateAssessmentReportEvidence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerBatchDisassociateAssessmentReportEvidenceRequest) {
  }

  public get evidenceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateAssessmentReportEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchDisassociateAssessmentReportEvidence.evidenceIds'),
        outputPath: 'evidenceIds',
        parameters: {
          assessmentId: this.__input.assessmentId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceIds: this.__input.evidenceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateAssessmentReportEvidence.evidenceIds', props);
    return resource.getResponseField('evidenceIds') as unknown as string[];
  }

  public get errors(): shapes.AuditManagerAssessmentReportEvidenceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateAssessmentReportEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchDisassociateAssessmentReportEvidence.errors'),
        outputPath: 'errors',
        parameters: {
          assessmentId: this.__input.assessmentId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceIds: this.__input.evidenceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateAssessmentReportEvidence.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AuditManagerAssessmentReportEvidenceError[];
  }

}

export class AuditManagerResponsesBatchImportEvidenceToAssessmentControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerBatchImportEvidenceToAssessmentControlRequest) {
  }

  public get errors(): shapes.AuditManagerBatchImportEvidenceToAssessmentControlError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchImportEvidenceToAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.BatchImportEvidenceToAssessmentControl.errors'),
        outputPath: 'errors',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          manualEvidence: this.__input.manualEvidence,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchImportEvidenceToAssessmentControl.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AuditManagerBatchImportEvidenceToAssessmentControlError[];
  }

}

export class AuditManagerResponsesCreateAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get assessment(): AuditManagerResponsesCreateAssessmentAssessment {
    return new AuditManagerResponsesCreateAssessmentAssessment(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesCreateAssessmentAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.arn'),
        outputPath: 'assessment.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.arn', props);
    return resource.getResponseField('assessment.arn') as unknown as string;
  }

  public get awsAccount(): AuditManagerResponsesCreateAssessmentAssessmentAwsAccount {
    return new AuditManagerResponsesCreateAssessmentAssessmentAwsAccount(this.__scope, this.__resources, this.__input);
  }

  public get metadata(): AuditManagerResponsesCreateAssessmentAssessmentMetadata {
    return new AuditManagerResponsesCreateAssessmentAssessmentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get framework(): AuditManagerResponsesCreateAssessmentAssessmentFramework {
    return new AuditManagerResponsesCreateAssessmentAssessmentFramework(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.tags'),
        outputPath: 'assessment.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.tags', props);
    return resource.getResponseField('assessment.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.awsAccount.id'),
        outputPath: 'assessment.awsAccount.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.awsAccount.id', props);
    return resource.getResponseField('assessment.awsAccount.id') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.awsAccount.emailAddress'),
        outputPath: 'assessment.awsAccount.emailAddress',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.awsAccount.emailAddress', props);
    return resource.getResponseField('assessment.awsAccount.emailAddress') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.awsAccount.name'),
        outputPath: 'assessment.awsAccount.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.awsAccount.name', props);
    return resource.getResponseField('assessment.awsAccount.name') as unknown as string;
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.name'),
        outputPath: 'assessment.metadata.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.name', props);
    return resource.getResponseField('assessment.metadata.name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.id'),
        outputPath: 'assessment.metadata.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.id', props);
    return resource.getResponseField('assessment.metadata.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.description'),
        outputPath: 'assessment.metadata.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.description', props);
    return resource.getResponseField('assessment.metadata.description') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.complianceType'),
        outputPath: 'assessment.metadata.complianceType',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.complianceType', props);
    return resource.getResponseField('assessment.metadata.complianceType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.status'),
        outputPath: 'assessment.metadata.status',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.status', props);
    return resource.getResponseField('assessment.metadata.status') as unknown as string;
  }

  public get assessmentReportsDestination(): AuditManagerResponsesCreateAssessmentAssessmentMetadataAssessmentReportsDestination {
    return new AuditManagerResponsesCreateAssessmentAssessmentMetadataAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get scope(): AuditManagerResponsesCreateAssessmentAssessmentMetadataScope {
    return new AuditManagerResponsesCreateAssessmentAssessmentMetadataScope(this.__scope, this.__resources, this.__input);
  }

  public get roles(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.roles'),
        outputPath: 'assessment.metadata.roles',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.roles', props);
    return resource.getResponseField('assessment.metadata.roles') as unknown as shapes.AuditManagerRole[];
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.delegations'),
        outputPath: 'assessment.metadata.delegations',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.delegations', props);
    return resource.getResponseField('assessment.metadata.delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.creationTime'),
        outputPath: 'assessment.metadata.creationTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.creationTime', props);
    return resource.getResponseField('assessment.metadata.creationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.lastUpdated'),
        outputPath: 'assessment.metadata.lastUpdated',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.lastUpdated', props);
    return resource.getResponseField('assessment.metadata.lastUpdated') as unknown as string;
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentMetadataAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.assessmentReportsDestination.destinationType'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destinationType',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.assessmentReportsDestination.destinationType', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.assessmentReportsDestination.destination'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destination',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.assessmentReportsDestination.destination', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentMetadataScope {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get awsAccounts(): shapes.AuditManagerAwsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.scope.awsAccounts'),
        outputPath: 'assessment.metadata.scope.awsAccounts',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.scope.awsAccounts', props);
    return resource.getResponseField('assessment.metadata.scope.awsAccounts') as unknown as shapes.AuditManagerAwsAccount[];
  }

  public get awsServices(): shapes.AuditManagerAwsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.metadata.scope.awsServices'),
        outputPath: 'assessment.metadata.scope.awsServices',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.metadata.scope.awsServices', props);
    return resource.getResponseField('assessment.metadata.scope.awsServices') as unknown as shapes.AuditManagerAwsService[];
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.id'),
        outputPath: 'assessment.framework.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.id', props);
    return resource.getResponseField('assessment.framework.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.arn'),
        outputPath: 'assessment.framework.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.arn', props);
    return resource.getResponseField('assessment.framework.arn') as unknown as string;
  }

  public get metadata(): AuditManagerResponsesCreateAssessmentAssessmentFrameworkMetadata {
    return new AuditManagerResponsesCreateAssessmentAssessmentFrameworkMetadata(this.__scope, this.__resources, this.__input);
  }

  public get controlSets(): shapes.AuditManagerAssessmentControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.controlSets'),
        outputPath: 'assessment.framework.controlSets',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.controlSets', props);
    return resource.getResponseField('assessment.framework.controlSets') as unknown as shapes.AuditManagerAssessmentControlSet[];
  }

}

export class AuditManagerResponsesCreateAssessmentAssessmentFrameworkMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.metadata.name'),
        outputPath: 'assessment.framework.metadata.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.metadata.name', props);
    return resource.getResponseField('assessment.framework.metadata.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.metadata.description'),
        outputPath: 'assessment.framework.metadata.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.metadata.description', props);
    return resource.getResponseField('assessment.framework.metadata.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.metadata.logo'),
        outputPath: 'assessment.framework.metadata.logo',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.metadata.logo', props);
    return resource.getResponseField('assessment.framework.metadata.logo') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessment.assessment.framework.metadata.complianceType'),
        outputPath: 'assessment.framework.metadata.complianceType',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination.destinationType,
            destination: this.__input.assessmentReportsDestination.destination,
          },
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          roles: this.__input.roles,
          frameworkId: this.__input.frameworkId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessment.assessment.framework.metadata.complianceType', props);
    return resource.getResponseField('assessment.framework.metadata.complianceType') as unknown as string;
  }

}

export class AuditManagerResponsesCreateAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentFrameworkRequest) {
  }

  public get framework(): AuditManagerResponsesCreateAssessmentFrameworkFramework {
    return new AuditManagerResponsesCreateAssessmentFrameworkFramework(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesCreateAssessmentFrameworkFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentFrameworkRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.arn'),
        outputPath: 'framework.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.arn', props);
    return resource.getResponseField('framework.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.id'),
        outputPath: 'framework.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.id', props);
    return resource.getResponseField('framework.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.name'),
        outputPath: 'framework.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.name', props);
    return resource.getResponseField('framework.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.type'),
        outputPath: 'framework.type',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.type', props);
    return resource.getResponseField('framework.type') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.complianceType'),
        outputPath: 'framework.complianceType',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.complianceType', props);
    return resource.getResponseField('framework.complianceType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.description'),
        outputPath: 'framework.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.description', props);
    return resource.getResponseField('framework.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.logo'),
        outputPath: 'framework.logo',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.logo', props);
    return resource.getResponseField('framework.logo') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.controlSources'),
        outputPath: 'framework.controlSources',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.controlSources', props);
    return resource.getResponseField('framework.controlSources') as unknown as string;
  }

  public get controlSets(): shapes.AuditManagerControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.controlSets'),
        outputPath: 'framework.controlSets',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.controlSets', props);
    return resource.getResponseField('framework.controlSets') as unknown as shapes.AuditManagerControlSet[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.createdAt'),
        outputPath: 'framework.createdAt',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.createdAt', props);
    return resource.getResponseField('framework.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.lastUpdatedAt'),
        outputPath: 'framework.lastUpdatedAt',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.lastUpdatedAt', props);
    return resource.getResponseField('framework.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.createdBy'),
        outputPath: 'framework.createdBy',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.createdBy', props);
    return resource.getResponseField('framework.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.lastUpdatedBy'),
        outputPath: 'framework.lastUpdatedBy',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.lastUpdatedBy', props);
    return resource.getResponseField('framework.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentFramework.framework.tags'),
        outputPath: 'framework.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentFramework.framework.tags', props);
    return resource.getResponseField('framework.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesCreateAssessmentReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentReportRequest) {
  }

  public get assessmentReport(): AuditManagerResponsesCreateAssessmentReportAssessmentReport {
    return new AuditManagerResponsesCreateAssessmentReportAssessmentReport(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesCreateAssessmentReportAssessmentReport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateAssessmentReportRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.id'),
        outputPath: 'assessmentReport.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.id', props);
    return resource.getResponseField('assessmentReport.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.name'),
        outputPath: 'assessmentReport.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.name', props);
    return resource.getResponseField('assessmentReport.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.description'),
        outputPath: 'assessmentReport.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.description', props);
    return resource.getResponseField('assessmentReport.description') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.awsAccountId'),
        outputPath: 'assessmentReport.awsAccountId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.awsAccountId', props);
    return resource.getResponseField('assessmentReport.awsAccountId') as unknown as string;
  }

  public get assessmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.assessmentId'),
        outputPath: 'assessmentReport.assessmentId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.assessmentId', props);
    return resource.getResponseField('assessmentReport.assessmentId') as unknown as string;
  }

  public get assessmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.assessmentName'),
        outputPath: 'assessmentReport.assessmentName',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.assessmentName', props);
    return resource.getResponseField('assessmentReport.assessmentName') as unknown as string;
  }

  public get author(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.author'),
        outputPath: 'assessmentReport.author',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.author', props);
    return resource.getResponseField('assessmentReport.author') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.status'),
        outputPath: 'assessmentReport.status',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.status', props);
    return resource.getResponseField('assessmentReport.status') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssessmentReport',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateAssessmentReport.assessmentReport.creationTime'),
        outputPath: 'assessmentReport.creationTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssessmentReport.assessmentReport.creationTime', props);
    return resource.getResponseField('assessmentReport.creationTime') as unknown as string;
  }

}

export class AuditManagerResponsesCreateControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateControlRequest) {
  }

  public get control(): AuditManagerResponsesCreateControlControl {
    return new AuditManagerResponsesCreateControlControl(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesCreateControlControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerCreateControlRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.arn'),
        outputPath: 'control.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.arn', props);
    return resource.getResponseField('control.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.id'),
        outputPath: 'control.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.id', props);
    return resource.getResponseField('control.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.type'),
        outputPath: 'control.type',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.type', props);
    return resource.getResponseField('control.type') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.name'),
        outputPath: 'control.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.name', props);
    return resource.getResponseField('control.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.description'),
        outputPath: 'control.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.description', props);
    return resource.getResponseField('control.description') as unknown as string;
  }

  public get testingInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.testingInformation'),
        outputPath: 'control.testingInformation',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.testingInformation', props);
    return resource.getResponseField('control.testingInformation') as unknown as string;
  }

  public get actionPlanTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.actionPlanTitle'),
        outputPath: 'control.actionPlanTitle',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.actionPlanTitle', props);
    return resource.getResponseField('control.actionPlanTitle') as unknown as string;
  }

  public get actionPlanInstructions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.actionPlanInstructions'),
        outputPath: 'control.actionPlanInstructions',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.actionPlanInstructions', props);
    return resource.getResponseField('control.actionPlanInstructions') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.controlSources'),
        outputPath: 'control.controlSources',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.controlSources', props);
    return resource.getResponseField('control.controlSources') as unknown as string;
  }

  public get controlMappingSources(): shapes.AuditManagerControlMappingSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.controlMappingSources'),
        outputPath: 'control.controlMappingSources',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.controlMappingSources', props);
    return resource.getResponseField('control.controlMappingSources') as unknown as shapes.AuditManagerControlMappingSource[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.createdAt'),
        outputPath: 'control.createdAt',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.createdAt', props);
    return resource.getResponseField('control.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.lastUpdatedAt'),
        outputPath: 'control.lastUpdatedAt',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.lastUpdatedAt', props);
    return resource.getResponseField('control.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.createdBy'),
        outputPath: 'control.createdBy',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.createdBy', props);
    return resource.getResponseField('control.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.lastUpdatedBy'),
        outputPath: 'control.lastUpdatedBy',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.lastUpdatedBy', props);
    return resource.getResponseField('control.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.CreateControl.control.tags'),
        outputPath: 'control.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateControl.control.tags', props);
    return resource.getResponseField('control.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesDeregisterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.DeregisterAccount.status'),
        outputPath: 'status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterAccount.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAccountStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAccountStatus.status'),
        outputPath: 'status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountStatus.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get assessment(): AuditManagerResponsesFetchAssessmentAssessment {
    return new AuditManagerResponsesFetchAssessmentAssessment(this.__scope, this.__resources, this.__input);
  }

  public get userRole(): AuditManagerResponsesFetchAssessmentUserRole {
    return new AuditManagerResponsesFetchAssessmentUserRole(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchAssessmentAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.arn'),
        outputPath: 'assessment.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.arn', props);
    return resource.getResponseField('assessment.arn') as unknown as string;
  }

  public get awsAccount(): AuditManagerResponsesFetchAssessmentAssessmentAwsAccount {
    return new AuditManagerResponsesFetchAssessmentAssessmentAwsAccount(this.__scope, this.__resources, this.__input);
  }

  public get metadata(): AuditManagerResponsesFetchAssessmentAssessmentMetadata {
    return new AuditManagerResponsesFetchAssessmentAssessmentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get framework(): AuditManagerResponsesFetchAssessmentAssessmentFramework {
    return new AuditManagerResponsesFetchAssessmentAssessmentFramework(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.tags'),
        outputPath: 'assessment.tags',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.tags', props);
    return resource.getResponseField('assessment.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.awsAccount.id'),
        outputPath: 'assessment.awsAccount.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.awsAccount.id', props);
    return resource.getResponseField('assessment.awsAccount.id') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.awsAccount.emailAddress'),
        outputPath: 'assessment.awsAccount.emailAddress',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.awsAccount.emailAddress', props);
    return resource.getResponseField('assessment.awsAccount.emailAddress') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.awsAccount.name'),
        outputPath: 'assessment.awsAccount.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.awsAccount.name', props);
    return resource.getResponseField('assessment.awsAccount.name') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.name'),
        outputPath: 'assessment.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.name', props);
    return resource.getResponseField('assessment.metadata.name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.id'),
        outputPath: 'assessment.metadata.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.id', props);
    return resource.getResponseField('assessment.metadata.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.description'),
        outputPath: 'assessment.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.description', props);
    return resource.getResponseField('assessment.metadata.description') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.complianceType'),
        outputPath: 'assessment.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.complianceType', props);
    return resource.getResponseField('assessment.metadata.complianceType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.status'),
        outputPath: 'assessment.metadata.status',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.status', props);
    return resource.getResponseField('assessment.metadata.status') as unknown as string;
  }

  public get assessmentReportsDestination(): AuditManagerResponsesFetchAssessmentAssessmentMetadataAssessmentReportsDestination {
    return new AuditManagerResponsesFetchAssessmentAssessmentMetadataAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get scope(): AuditManagerResponsesFetchAssessmentAssessmentMetadataScope {
    return new AuditManagerResponsesFetchAssessmentAssessmentMetadataScope(this.__scope, this.__resources, this.__input);
  }

  public get roles(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.roles'),
        outputPath: 'assessment.metadata.roles',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.roles', props);
    return resource.getResponseField('assessment.metadata.roles') as unknown as shapes.AuditManagerRole[];
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.delegations'),
        outputPath: 'assessment.metadata.delegations',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.delegations', props);
    return resource.getResponseField('assessment.metadata.delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.creationTime'),
        outputPath: 'assessment.metadata.creationTime',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.creationTime', props);
    return resource.getResponseField('assessment.metadata.creationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.lastUpdated'),
        outputPath: 'assessment.metadata.lastUpdated',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.lastUpdated', props);
    return resource.getResponseField('assessment.metadata.lastUpdated') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentMetadataAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.assessmentReportsDestination.destinationType'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destinationType',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.assessmentReportsDestination.destinationType', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.assessmentReportsDestination.destination'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destination',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.assessmentReportsDestination.destination', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentMetadataScope {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get awsAccounts(): shapes.AuditManagerAwsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.scope.awsAccounts'),
        outputPath: 'assessment.metadata.scope.awsAccounts',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.scope.awsAccounts', props);
    return resource.getResponseField('assessment.metadata.scope.awsAccounts') as unknown as shapes.AuditManagerAwsAccount[];
  }

  public get awsServices(): shapes.AuditManagerAwsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.metadata.scope.awsServices'),
        outputPath: 'assessment.metadata.scope.awsServices',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.metadata.scope.awsServices', props);
    return resource.getResponseField('assessment.metadata.scope.awsServices') as unknown as shapes.AuditManagerAwsService[];
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.id'),
        outputPath: 'assessment.framework.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.id', props);
    return resource.getResponseField('assessment.framework.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.arn'),
        outputPath: 'assessment.framework.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.arn', props);
    return resource.getResponseField('assessment.framework.arn') as unknown as string;
  }

  public get metadata(): AuditManagerResponsesFetchAssessmentAssessmentFrameworkMetadata {
    return new AuditManagerResponsesFetchAssessmentAssessmentFrameworkMetadata(this.__scope, this.__resources, this.__input);
  }

  public get controlSets(): shapes.AuditManagerAssessmentControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.controlSets'),
        outputPath: 'assessment.framework.controlSets',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.controlSets', props);
    return resource.getResponseField('assessment.framework.controlSets') as unknown as shapes.AuditManagerAssessmentControlSet[];
  }

}

export class AuditManagerResponsesFetchAssessmentAssessmentFrameworkMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.metadata.name'),
        outputPath: 'assessment.framework.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.metadata.name', props);
    return resource.getResponseField('assessment.framework.metadata.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.metadata.description'),
        outputPath: 'assessment.framework.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.metadata.description', props);
    return resource.getResponseField('assessment.framework.metadata.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.metadata.logo'),
        outputPath: 'assessment.framework.metadata.logo',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.metadata.logo', props);
    return resource.getResponseField('assessment.framework.metadata.logo') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.assessment.framework.metadata.complianceType'),
        outputPath: 'assessment.framework.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.assessment.framework.metadata.complianceType', props);
    return resource.getResponseField('assessment.framework.metadata.complianceType') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessmentUserRole {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentRequest) {
  }

  public get roleType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.userRole.roleType'),
        outputPath: 'userRole.roleType',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.userRole.roleType', props);
    return resource.getResponseField('userRole.roleType') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessment.userRole.roleArn'),
        outputPath: 'userRole.roleArn',
        parameters: {
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessment.userRole.roleArn', props);
    return resource.getResponseField('userRole.roleArn') as unknown as string;
  }

}

export class AuditManagerResponsesFetchAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentFrameworkRequest) {
  }

  public get framework(): AuditManagerResponsesFetchAssessmentFrameworkFramework {
    return new AuditManagerResponsesFetchAssessmentFrameworkFramework(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchAssessmentFrameworkFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentFrameworkRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.arn'),
        outputPath: 'framework.arn',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.arn', props);
    return resource.getResponseField('framework.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.id'),
        outputPath: 'framework.id',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.id', props);
    return resource.getResponseField('framework.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.name'),
        outputPath: 'framework.name',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.name', props);
    return resource.getResponseField('framework.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.type'),
        outputPath: 'framework.type',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.type', props);
    return resource.getResponseField('framework.type') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.complianceType'),
        outputPath: 'framework.complianceType',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.complianceType', props);
    return resource.getResponseField('framework.complianceType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.description'),
        outputPath: 'framework.description',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.description', props);
    return resource.getResponseField('framework.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.logo'),
        outputPath: 'framework.logo',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.logo', props);
    return resource.getResponseField('framework.logo') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.controlSources'),
        outputPath: 'framework.controlSources',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.controlSources', props);
    return resource.getResponseField('framework.controlSources') as unknown as string;
  }

  public get controlSets(): shapes.AuditManagerControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.controlSets'),
        outputPath: 'framework.controlSets',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.controlSets', props);
    return resource.getResponseField('framework.controlSets') as unknown as shapes.AuditManagerControlSet[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.createdAt'),
        outputPath: 'framework.createdAt',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.createdAt', props);
    return resource.getResponseField('framework.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.lastUpdatedAt'),
        outputPath: 'framework.lastUpdatedAt',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.lastUpdatedAt', props);
    return resource.getResponseField('framework.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.createdBy'),
        outputPath: 'framework.createdBy',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.createdBy', props);
    return resource.getResponseField('framework.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.lastUpdatedBy'),
        outputPath: 'framework.lastUpdatedBy',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.lastUpdatedBy', props);
    return resource.getResponseField('framework.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentFramework.framework.tags'),
        outputPath: 'framework.tags',
        parameters: {
          frameworkId: this.__input.frameworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentFramework.framework.tags', props);
    return resource.getResponseField('framework.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesFetchAssessmentReportUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentReportUrlRequest) {
  }

  public get preSignedUrl(): AuditManagerResponsesFetchAssessmentReportUrlPreSignedUrl {
    return new AuditManagerResponsesFetchAssessmentReportUrlPreSignedUrl(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchAssessmentReportUrlPreSignedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetAssessmentReportUrlRequest) {
  }

  public get hyperlinkName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentReportUrl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentReportUrl.preSignedUrl.hyperlinkName'),
        outputPath: 'preSignedUrl.hyperlinkName',
        parameters: {
          assessmentReportId: this.__input.assessmentReportId,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentReportUrl.preSignedUrl.hyperlinkName', props);
    return resource.getResponseField('preSignedUrl.hyperlinkName') as unknown as string;
  }

  public get link(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAssessmentReportUrl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetAssessmentReportUrl.preSignedUrl.link'),
        outputPath: 'preSignedUrl.link',
        parameters: {
          assessmentReportId: this.__input.assessmentReportId,
          assessmentId: this.__input.assessmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAssessmentReportUrl.preSignedUrl.link', props);
    return resource.getResponseField('preSignedUrl.link') as unknown as string;
  }

}

export class AuditManagerResponsesFetchChangeLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetChangeLogsRequest) {
  }

  public get changeLogs(): shapes.AuditManagerChangeLog[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeLogs',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetChangeLogs.changeLogs'),
        outputPath: 'changeLogs',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChangeLogs.changeLogs', props);
    return resource.getResponseField('changeLogs') as unknown as shapes.AuditManagerChangeLog[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getChangeLogs',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetChangeLogs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetChangeLogs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesFetchControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetControlRequest) {
  }

  public get control(): AuditManagerResponsesFetchControlControl {
    return new AuditManagerResponsesFetchControlControl(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchControlControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetControlRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.arn'),
        outputPath: 'control.arn',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.arn', props);
    return resource.getResponseField('control.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.id'),
        outputPath: 'control.id',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.id', props);
    return resource.getResponseField('control.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.type'),
        outputPath: 'control.type',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.type', props);
    return resource.getResponseField('control.type') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.name'),
        outputPath: 'control.name',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.name', props);
    return resource.getResponseField('control.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.description'),
        outputPath: 'control.description',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.description', props);
    return resource.getResponseField('control.description') as unknown as string;
  }

  public get testingInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.testingInformation'),
        outputPath: 'control.testingInformation',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.testingInformation', props);
    return resource.getResponseField('control.testingInformation') as unknown as string;
  }

  public get actionPlanTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.actionPlanTitle'),
        outputPath: 'control.actionPlanTitle',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.actionPlanTitle', props);
    return resource.getResponseField('control.actionPlanTitle') as unknown as string;
  }

  public get actionPlanInstructions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.actionPlanInstructions'),
        outputPath: 'control.actionPlanInstructions',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.actionPlanInstructions', props);
    return resource.getResponseField('control.actionPlanInstructions') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.controlSources'),
        outputPath: 'control.controlSources',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.controlSources', props);
    return resource.getResponseField('control.controlSources') as unknown as string;
  }

  public get controlMappingSources(): shapes.AuditManagerControlMappingSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.controlMappingSources'),
        outputPath: 'control.controlMappingSources',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.controlMappingSources', props);
    return resource.getResponseField('control.controlMappingSources') as unknown as shapes.AuditManagerControlMappingSource[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.createdAt'),
        outputPath: 'control.createdAt',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.createdAt', props);
    return resource.getResponseField('control.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.lastUpdatedAt'),
        outputPath: 'control.lastUpdatedAt',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.lastUpdatedAt', props);
    return resource.getResponseField('control.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.createdBy'),
        outputPath: 'control.createdBy',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.createdBy', props);
    return resource.getResponseField('control.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.lastUpdatedBy'),
        outputPath: 'control.lastUpdatedBy',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.lastUpdatedBy', props);
    return resource.getResponseField('control.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetControl.control.tags'),
        outputPath: 'control.tags',
        parameters: {
          controlId: this.__input.controlId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetControl.control.tags', props);
    return resource.getResponseField('control.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesFetchDelegations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetDelegationsRequest) {
  }

  public get delegations(): shapes.AuditManagerDelegationMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDelegations',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetDelegations.delegations'),
        outputPath: 'delegations',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDelegations.delegations', props);
    return resource.getResponseField('delegations') as unknown as shapes.AuditManagerDelegationMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDelegations',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetDelegations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDelegations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesFetchEvidence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceRequest) {
  }

  public get evidence(): AuditManagerResponsesFetchEvidenceEvidence {
    return new AuditManagerResponsesFetchEvidenceEvidence(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchEvidenceEvidence {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceRequest) {
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.dataSource'),
        outputPath: 'evidence.dataSource',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.dataSource', props);
    return resource.getResponseField('evidence.dataSource') as unknown as string;
  }

  public get evidenceAwsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.evidenceAwsAccountId'),
        outputPath: 'evidence.evidenceAwsAccountId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.evidenceAwsAccountId', props);
    return resource.getResponseField('evidence.evidenceAwsAccountId') as unknown as string;
  }

  public get time(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.time'),
        outputPath: 'evidence.time',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.time', props);
    return resource.getResponseField('evidence.time') as unknown as string;
  }

  public get eventSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.eventSource'),
        outputPath: 'evidence.eventSource',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.eventSource', props);
    return resource.getResponseField('evidence.eventSource') as unknown as string;
  }

  public get eventName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.eventName'),
        outputPath: 'evidence.eventName',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.eventName', props);
    return resource.getResponseField('evidence.eventName') as unknown as string;
  }

  public get evidenceByType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.evidenceByType'),
        outputPath: 'evidence.evidenceByType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.evidenceByType', props);
    return resource.getResponseField('evidence.evidenceByType') as unknown as string;
  }

  public get resourcesIncluded(): shapes.AuditManagerResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.resourcesIncluded'),
        outputPath: 'evidence.resourcesIncluded',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.resourcesIncluded', props);
    return resource.getResponseField('evidence.resourcesIncluded') as unknown as shapes.AuditManagerResource[];
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.attributes'),
        outputPath: 'evidence.attributes',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.attributes', props);
    return resource.getResponseField('evidence.attributes') as unknown as Record<string, string>;
  }

  public get iamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.iamId'),
        outputPath: 'evidence.iamId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.iamId', props);
    return resource.getResponseField('evidence.iamId') as unknown as string;
  }

  public get complianceCheck(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.complianceCheck'),
        outputPath: 'evidence.complianceCheck',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.complianceCheck', props);
    return resource.getResponseField('evidence.complianceCheck') as unknown as string;
  }

  public get awsOrganization(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.awsOrganization'),
        outputPath: 'evidence.awsOrganization',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.awsOrganization', props);
    return resource.getResponseField('evidence.awsOrganization') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.awsAccountId'),
        outputPath: 'evidence.awsAccountId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.awsAccountId', props);
    return resource.getResponseField('evidence.awsAccountId') as unknown as string;
  }

  public get evidenceFolderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.evidenceFolderId'),
        outputPath: 'evidence.evidenceFolderId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.evidenceFolderId', props);
    return resource.getResponseField('evidence.evidenceFolderId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.id'),
        outputPath: 'evidence.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.id', props);
    return resource.getResponseField('evidence.id') as unknown as string;
  }

  public get assessmentReportSelection(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidence',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidence.evidence.assessmentReportSelection'),
        outputPath: 'evidence.assessmentReportSelection',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          evidenceId: this.__input.evidenceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidence.evidence.assessmentReportSelection', props);
    return resource.getResponseField('evidence.assessmentReportSelection') as unknown as string;
  }

}

export class AuditManagerResponsesFetchEvidenceByEvidenceFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceByEvidenceFolderRequest) {
  }

  public get evidence(): shapes.AuditManagerEvidence[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceByEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceByEvidenceFolder.evidence'),
        outputPath: 'evidence',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceByEvidenceFolder.evidence', props);
    return resource.getResponseField('evidence') as unknown as shapes.AuditManagerEvidence[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceByEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceByEvidenceFolder.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceByEvidenceFolder.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesFetchEvidenceFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceFolderRequest) {
  }

  public get evidenceFolder(): AuditManagerResponsesFetchEvidenceFolderEvidenceFolder {
    return new AuditManagerResponsesFetchEvidenceFolderEvidenceFolder(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchEvidenceFolderEvidenceFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceFolderRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.name'),
        outputPath: 'evidenceFolder.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.name', props);
    return resource.getResponseField('evidenceFolder.name') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.date'),
        outputPath: 'evidenceFolder.date',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.date', props);
    return resource.getResponseField('evidenceFolder.date') as unknown as string;
  }

  public get assessmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.assessmentId'),
        outputPath: 'evidenceFolder.assessmentId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.assessmentId', props);
    return resource.getResponseField('evidenceFolder.assessmentId') as unknown as string;
  }

  public get controlSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.controlSetId'),
        outputPath: 'evidenceFolder.controlSetId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.controlSetId', props);
    return resource.getResponseField('evidenceFolder.controlSetId') as unknown as string;
  }

  public get controlId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.controlId'),
        outputPath: 'evidenceFolder.controlId',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.controlId', props);
    return resource.getResponseField('evidenceFolder.controlId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.id'),
        outputPath: 'evidenceFolder.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.id', props);
    return resource.getResponseField('evidenceFolder.id') as unknown as string;
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.dataSource'),
        outputPath: 'evidenceFolder.dataSource',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.dataSource', props);
    return resource.getResponseField('evidenceFolder.dataSource') as unknown as string;
  }

  public get author(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.author'),
        outputPath: 'evidenceFolder.author',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.author', props);
    return resource.getResponseField('evidenceFolder.author') as unknown as string;
  }

  public get totalEvidence(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.totalEvidence'),
        outputPath: 'evidenceFolder.totalEvidence',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.totalEvidence', props);
    return resource.getResponseField('evidenceFolder.totalEvidence') as unknown as number;
  }

  public get assessmentReportSelectionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.assessmentReportSelectionCount'),
        outputPath: 'evidenceFolder.assessmentReportSelectionCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.assessmentReportSelectionCount', props);
    return resource.getResponseField('evidenceFolder.assessmentReportSelectionCount') as unknown as number;
  }

  public get controlName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.controlName'),
        outputPath: 'evidenceFolder.controlName',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.controlName', props);
    return resource.getResponseField('evidenceFolder.controlName') as unknown as string;
  }

  public get evidenceResourcesIncludedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceResourcesIncludedCount'),
        outputPath: 'evidenceFolder.evidenceResourcesIncludedCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceResourcesIncludedCount', props);
    return resource.getResponseField('evidenceFolder.evidenceResourcesIncludedCount') as unknown as number;
  }

  public get evidenceByTypeConfigurationDataCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceByTypeConfigurationDataCount'),
        outputPath: 'evidenceFolder.evidenceByTypeConfigurationDataCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceByTypeConfigurationDataCount', props);
    return resource.getResponseField('evidenceFolder.evidenceByTypeConfigurationDataCount') as unknown as number;
  }

  public get evidenceByTypeManualCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceByTypeManualCount'),
        outputPath: 'evidenceFolder.evidenceByTypeManualCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceByTypeManualCount', props);
    return resource.getResponseField('evidenceFolder.evidenceByTypeManualCount') as unknown as number;
  }

  public get evidenceByTypeComplianceCheckCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceByTypeComplianceCheckCount'),
        outputPath: 'evidenceFolder.evidenceByTypeComplianceCheckCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceByTypeComplianceCheckCount', props);
    return resource.getResponseField('evidenceFolder.evidenceByTypeComplianceCheckCount') as unknown as number;
  }

  public get evidenceByTypeComplianceCheckIssuesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceByTypeComplianceCheckIssuesCount'),
        outputPath: 'evidenceFolder.evidenceByTypeComplianceCheckIssuesCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceByTypeComplianceCheckIssuesCount', props);
    return resource.getResponseField('evidenceFolder.evidenceByTypeComplianceCheckIssuesCount') as unknown as number;
  }

  public get evidenceByTypeUserActivityCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceByTypeUserActivityCount'),
        outputPath: 'evidenceFolder.evidenceByTypeUserActivityCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceByTypeUserActivityCount', props);
    return resource.getResponseField('evidenceFolder.evidenceByTypeUserActivityCount') as unknown as number;
  }

  public get evidenceAwsServiceSourceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFolder',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFolder.evidenceFolder.evidenceAwsServiceSourceCount'),
        outputPath: 'evidenceFolder.evidenceAwsServiceSourceCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          evidenceFolderId: this.__input.evidenceFolderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFolder.evidenceFolder.evidenceAwsServiceSourceCount', props);
    return resource.getResponseField('evidenceFolder.evidenceAwsServiceSourceCount') as unknown as number;
  }

}

export class AuditManagerResponsesFetchEvidenceFoldersByAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceFoldersByAssessmentRequest) {
  }

  public get evidenceFolders(): shapes.AuditManagerAssessmentEvidenceFolder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFoldersByAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFoldersByAssessment.evidenceFolders'),
        outputPath: 'evidenceFolders',
        parameters: {
          assessmentId: this.__input.assessmentId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFoldersByAssessment.evidenceFolders', props);
    return resource.getResponseField('evidenceFolders') as unknown as shapes.AuditManagerAssessmentEvidenceFolder[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFoldersByAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFoldersByAssessment.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentId: this.__input.assessmentId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFoldersByAssessment.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesFetchEvidenceFoldersByAssessmentControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetEvidenceFoldersByAssessmentControlRequest) {
  }

  public get evidenceFolders(): shapes.AuditManagerAssessmentEvidenceFolder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFoldersByAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFoldersByAssessmentControl.evidenceFolders'),
        outputPath: 'evidenceFolders',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFoldersByAssessmentControl.evidenceFolders', props);
    return resource.getResponseField('evidenceFolders') as unknown as shapes.AuditManagerAssessmentEvidenceFolder[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvidenceFoldersByAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetEvidenceFoldersByAssessmentControl.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvidenceFoldersByAssessmentControl.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesFetchOrganizationAdminAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get adminAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationAdminAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetOrganizationAdminAccount.adminAccountId'),
        outputPath: 'adminAccountId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationAdminAccount.adminAccountId', props);
    return resource.getResponseField('adminAccountId') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOrganizationAdminAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetOrganizationAdminAccount.organizationId'),
        outputPath: 'organizationId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOrganizationAdminAccount.organizationId', props);
    return resource.getResponseField('organizationId') as unknown as string;
  }

}

export class AuditManagerResponsesFetchServicesInScope {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get serviceMetadata(): shapes.AuditManagerServiceMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServicesInScope',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetServicesInScope.serviceMetadata'),
        outputPath: 'serviceMetadata',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServicesInScope.serviceMetadata', props);
    return resource.getResponseField('serviceMetadata') as unknown as shapes.AuditManagerServiceMetadata[];
  }

}

export class AuditManagerResponsesFetchSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetSettingsRequest) {
  }

  public get settings(): AuditManagerResponsesFetchSettingsSettings {
    return new AuditManagerResponsesFetchSettingsSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesFetchSettingsSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetSettingsRequest) {
  }

  public get isAwsOrgEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.isAwsOrgEnabled'),
        outputPath: 'settings.isAwsOrgEnabled',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.isAwsOrgEnabled', props);
    return resource.getResponseField('settings.isAwsOrgEnabled') as unknown as boolean;
  }

  public get snsTopic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.snsTopic'),
        outputPath: 'settings.snsTopic',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.snsTopic', props);
    return resource.getResponseField('settings.snsTopic') as unknown as string;
  }

  public get defaultAssessmentReportsDestination(): AuditManagerResponsesFetchSettingsSettingsDefaultAssessmentReportsDestination {
    return new AuditManagerResponsesFetchSettingsSettingsDefaultAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get defaultProcessOwners(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.defaultProcessOwners'),
        outputPath: 'settings.defaultProcessOwners',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.defaultProcessOwners', props);
    return resource.getResponseField('settings.defaultProcessOwners') as unknown as shapes.AuditManagerRole[];
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.kmsKey'),
        outputPath: 'settings.kmsKey',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.kmsKey', props);
    return resource.getResponseField('settings.kmsKey') as unknown as string;
  }

}

export class AuditManagerResponsesFetchSettingsSettingsDefaultAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerGetSettingsRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.defaultAssessmentReportsDestination.destinationType'),
        outputPath: 'settings.defaultAssessmentReportsDestination.destinationType',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.defaultAssessmentReportsDestination.destinationType', props);
    return resource.getResponseField('settings.defaultAssessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.GetSettings.settings.defaultAssessmentReportsDestination.destination'),
        outputPath: 'settings.defaultAssessmentReportsDestination.destination',
        parameters: {
          attribute: this.__input.attribute,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSettings.settings.defaultAssessmentReportsDestination.destination', props);
    return resource.getResponseField('settings.defaultAssessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesListAssessmentFrameworks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListAssessmentFrameworksRequest) {
  }

  public get frameworkMetadataList(): shapes.AuditManagerAssessmentFrameworkMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentFrameworks',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessmentFrameworks.frameworkMetadataList'),
        outputPath: 'frameworkMetadataList',
        parameters: {
          frameworkType: this.__input.frameworkType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentFrameworks.frameworkMetadataList', props);
    return resource.getResponseField('frameworkMetadataList') as unknown as shapes.AuditManagerAssessmentFrameworkMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentFrameworks',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessmentFrameworks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          frameworkType: this.__input.frameworkType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentFrameworks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListAssessmentReports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListAssessmentReportsRequest) {
  }

  public get assessmentReports(): shapes.AuditManagerAssessmentReportMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentReports',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessmentReports.assessmentReports'),
        outputPath: 'assessmentReports',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentReports.assessmentReports', props);
    return resource.getResponseField('assessmentReports') as unknown as shapes.AuditManagerAssessmentReportMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessmentReports',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessmentReports.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessmentReports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListAssessments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListAssessmentsRequest) {
  }

  public get assessmentMetadata(): shapes.AuditManagerAssessmentMetadataItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessments',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessments.assessmentMetadata'),
        outputPath: 'assessmentMetadata',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessments.assessmentMetadata', props);
    return resource.getResponseField('assessmentMetadata') as unknown as shapes.AuditManagerAssessmentMetadataItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssessments',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListAssessments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssessments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListControls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListControlsRequest) {
  }

  public get controlMetadataList(): shapes.AuditManagerControlMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listControls',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListControls.controlMetadataList'),
        outputPath: 'controlMetadataList',
        parameters: {
          controlType: this.__input.controlType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListControls.controlMetadataList', props);
    return resource.getResponseField('controlMetadataList') as unknown as shapes.AuditManagerControlMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listControls',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListControls.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          controlType: this.__input.controlType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListControls.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListKeywordsForDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListKeywordsForDataSourceRequest) {
  }

  public get keywords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeywordsForDataSource',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListKeywordsForDataSource.keywords'),
        outputPath: 'keywords',
        parameters: {
          source: this.__input.source,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeywordsForDataSource.keywords', props);
    return resource.getResponseField('keywords') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeywordsForDataSource',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListKeywordsForDataSource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          source: this.__input.source,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeywordsForDataSource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListNotificationsRequest) {
  }

  public get notifications(): shapes.AuditManagerNotification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotifications',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListNotifications.notifications'),
        outputPath: 'notifications',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotifications.notifications', props);
    return resource.getResponseField('notifications') as unknown as shapes.AuditManagerNotification[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotifications',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListNotifications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotifications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class AuditManagerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ListTagsForResource.tags'),
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

export class AuditManagerResponsesRegisterAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerRegisterAccountRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.RegisterAccount.status'),
        outputPath: 'status',
        parameters: {
          kmsKey: this.__input.kmsKey,
          delegatedAdminAccount: this.__input.delegatedAdminAccount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterAccount.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class AuditManagerResponsesRegisterOrganizationAdminAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerRegisterOrganizationAdminAccountRequest) {
  }

  public get adminAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerOrganizationAdminAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.RegisterOrganizationAdminAccount.adminAccountId'),
        outputPath: 'adminAccountId',
        parameters: {
          adminAccountId: this.__input.adminAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterOrganizationAdminAccount.adminAccountId', props);
    return resource.getResponseField('adminAccountId') as unknown as string;
  }

  public get organizationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerOrganizationAdminAccount',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.RegisterOrganizationAdminAccount.organizationId'),
        outputPath: 'organizationId',
        parameters: {
          adminAccountId: this.__input.adminAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterOrganizationAdminAccount.organizationId', props);
    return resource.getResponseField('organizationId') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get assessment(): AuditManagerResponsesUpdateAssessmentAssessment {
    return new AuditManagerResponsesUpdateAssessmentAssessment(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.arn'),
        outputPath: 'assessment.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.arn', props);
    return resource.getResponseField('assessment.arn') as unknown as string;
  }

  public get awsAccount(): AuditManagerResponsesUpdateAssessmentAssessmentAwsAccount {
    return new AuditManagerResponsesUpdateAssessmentAssessmentAwsAccount(this.__scope, this.__resources, this.__input);
  }

  public get metadata(): AuditManagerResponsesUpdateAssessmentAssessmentMetadata {
    return new AuditManagerResponsesUpdateAssessmentAssessmentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get framework(): AuditManagerResponsesUpdateAssessmentAssessmentFramework {
    return new AuditManagerResponsesUpdateAssessmentAssessmentFramework(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.tags'),
        outputPath: 'assessment.tags',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.tags', props);
    return resource.getResponseField('assessment.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.awsAccount.id'),
        outputPath: 'assessment.awsAccount.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.awsAccount.id', props);
    return resource.getResponseField('assessment.awsAccount.id') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.awsAccount.emailAddress'),
        outputPath: 'assessment.awsAccount.emailAddress',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.awsAccount.emailAddress', props);
    return resource.getResponseField('assessment.awsAccount.emailAddress') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.awsAccount.name'),
        outputPath: 'assessment.awsAccount.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.awsAccount.name', props);
    return resource.getResponseField('assessment.awsAccount.name') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.name'),
        outputPath: 'assessment.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.name', props);
    return resource.getResponseField('assessment.metadata.name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.id'),
        outputPath: 'assessment.metadata.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.id', props);
    return resource.getResponseField('assessment.metadata.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.description'),
        outputPath: 'assessment.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.description', props);
    return resource.getResponseField('assessment.metadata.description') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.complianceType'),
        outputPath: 'assessment.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.complianceType', props);
    return resource.getResponseField('assessment.metadata.complianceType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.status'),
        outputPath: 'assessment.metadata.status',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.status', props);
    return resource.getResponseField('assessment.metadata.status') as unknown as string;
  }

  public get assessmentReportsDestination(): AuditManagerResponsesUpdateAssessmentAssessmentMetadataAssessmentReportsDestination {
    return new AuditManagerResponsesUpdateAssessmentAssessmentMetadataAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get scope(): AuditManagerResponsesUpdateAssessmentAssessmentMetadataScope {
    return new AuditManagerResponsesUpdateAssessmentAssessmentMetadataScope(this.__scope, this.__resources, this.__input);
  }

  public get roles(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.roles'),
        outputPath: 'assessment.metadata.roles',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.roles', props);
    return resource.getResponseField('assessment.metadata.roles') as unknown as shapes.AuditManagerRole[];
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.delegations'),
        outputPath: 'assessment.metadata.delegations',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.delegations', props);
    return resource.getResponseField('assessment.metadata.delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.creationTime'),
        outputPath: 'assessment.metadata.creationTime',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.creationTime', props);
    return resource.getResponseField('assessment.metadata.creationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.lastUpdated'),
        outputPath: 'assessment.metadata.lastUpdated',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.lastUpdated', props);
    return resource.getResponseField('assessment.metadata.lastUpdated') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentMetadataAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.assessmentReportsDestination.destinationType'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destinationType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.assessmentReportsDestination.destinationType', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.assessmentReportsDestination.destination'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destination',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.assessmentReportsDestination.destination', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentMetadataScope {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get awsAccounts(): shapes.AuditManagerAwsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.scope.awsAccounts'),
        outputPath: 'assessment.metadata.scope.awsAccounts',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.scope.awsAccounts', props);
    return resource.getResponseField('assessment.metadata.scope.awsAccounts') as unknown as shapes.AuditManagerAwsAccount[];
  }

  public get awsServices(): shapes.AuditManagerAwsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.metadata.scope.awsServices'),
        outputPath: 'assessment.metadata.scope.awsServices',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.metadata.scope.awsServices', props);
    return resource.getResponseField('assessment.metadata.scope.awsServices') as unknown as shapes.AuditManagerAwsService[];
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.id'),
        outputPath: 'assessment.framework.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.id', props);
    return resource.getResponseField('assessment.framework.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.arn'),
        outputPath: 'assessment.framework.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.arn', props);
    return resource.getResponseField('assessment.framework.arn') as unknown as string;
  }

  public get metadata(): AuditManagerResponsesUpdateAssessmentAssessmentFrameworkMetadata {
    return new AuditManagerResponsesUpdateAssessmentAssessmentFrameworkMetadata(this.__scope, this.__resources, this.__input);
  }

  public get controlSets(): shapes.AuditManagerAssessmentControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.controlSets'),
        outputPath: 'assessment.framework.controlSets',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.controlSets', props);
    return resource.getResponseField('assessment.framework.controlSets') as unknown as shapes.AuditManagerAssessmentControlSet[];
  }

}

export class AuditManagerResponsesUpdateAssessmentAssessmentFrameworkMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.metadata.name'),
        outputPath: 'assessment.framework.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.metadata.name', props);
    return resource.getResponseField('assessment.framework.metadata.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.metadata.description'),
        outputPath: 'assessment.framework.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.metadata.description', props);
    return resource.getResponseField('assessment.framework.metadata.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.metadata.logo'),
        outputPath: 'assessment.framework.metadata.logo',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.metadata.logo', props);
    return resource.getResponseField('assessment.framework.metadata.logo') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessment',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessment.assessment.framework.metadata.complianceType'),
        outputPath: 'assessment.framework.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          assessmentName: this.__input.assessmentName,
          assessmentDescription: this.__input.assessmentDescription,
          scope: {
            awsAccounts: this.__input.scope.awsAccounts,
            awsServices: this.__input.scope.awsServices,
          },
          assessmentReportsDestination: {
            destinationType: this.__input.assessmentReportsDestination?.destinationType,
            destination: this.__input.assessmentReportsDestination?.destination,
          },
          roles: this.__input.roles,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessment.assessment.framework.metadata.complianceType', props);
    return resource.getResponseField('assessment.framework.metadata.complianceType') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentControlRequest) {
  }

  public get control(): AuditManagerResponsesUpdateAssessmentControlControl {
    return new AuditManagerResponsesUpdateAssessmentControlControl(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateAssessmentControlControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentControlRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.id'),
        outputPath: 'control.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.id', props);
    return resource.getResponseField('control.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.name'),
        outputPath: 'control.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.name', props);
    return resource.getResponseField('control.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.description'),
        outputPath: 'control.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.description', props);
    return resource.getResponseField('control.description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.status'),
        outputPath: 'control.status',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.status', props);
    return resource.getResponseField('control.status') as unknown as string;
  }

  public get response(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.response'),
        outputPath: 'control.response',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.response', props);
    return resource.getResponseField('control.response') as unknown as string;
  }

  public get comments(): shapes.AuditManagerControlComment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.comments'),
        outputPath: 'control.comments',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.comments', props);
    return resource.getResponseField('control.comments') as unknown as shapes.AuditManagerControlComment[];
  }

  public get evidenceSources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.evidenceSources'),
        outputPath: 'control.evidenceSources',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.evidenceSources', props);
    return resource.getResponseField('control.evidenceSources') as unknown as string[];
  }

  public get evidenceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.evidenceCount'),
        outputPath: 'control.evidenceCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.evidenceCount', props);
    return resource.getResponseField('control.evidenceCount') as unknown as number;
  }

  public get assessmentReportEvidenceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControl.control.assessmentReportEvidenceCount'),
        outputPath: 'control.assessmentReportEvidenceCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          controlId: this.__input.controlId,
          controlStatus: this.__input.controlStatus,
          commentBody: this.__input.commentBody,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControl.control.assessmentReportEvidenceCount', props);
    return resource.getResponseField('control.assessmentReportEvidenceCount') as unknown as number;
  }

}

export class AuditManagerResponsesUpdateAssessmentControlSetStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentControlSetStatusRequest) {
  }

  public get controlSet(): AuditManagerResponsesUpdateAssessmentControlSetStatusControlSet {
    return new AuditManagerResponsesUpdateAssessmentControlSetStatusControlSet(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateAssessmentControlSetStatusControlSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentControlSetStatusRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.id'),
        outputPath: 'controlSet.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.id', props);
    return resource.getResponseField('controlSet.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.description'),
        outputPath: 'controlSet.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.description', props);
    return resource.getResponseField('controlSet.description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.status'),
        outputPath: 'controlSet.status',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.status', props);
    return resource.getResponseField('controlSet.status') as unknown as string;
  }

  public get roles(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.roles'),
        outputPath: 'controlSet.roles',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.roles', props);
    return resource.getResponseField('controlSet.roles') as unknown as shapes.AuditManagerRole[];
  }

  public get controls(): shapes.AuditManagerAssessmentControl[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.controls'),
        outputPath: 'controlSet.controls',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.controls', props);
    return resource.getResponseField('controlSet.controls') as unknown as shapes.AuditManagerAssessmentControl[];
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.delegations'),
        outputPath: 'controlSet.delegations',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.delegations', props);
    return resource.getResponseField('controlSet.delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get systemEvidenceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.systemEvidenceCount'),
        outputPath: 'controlSet.systemEvidenceCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.systemEvidenceCount', props);
    return resource.getResponseField('controlSet.systemEvidenceCount') as unknown as number;
  }

  public get manualEvidenceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentControlSetStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentControlSetStatus.controlSet.manualEvidenceCount'),
        outputPath: 'controlSet.manualEvidenceCount',
        parameters: {
          assessmentId: this.__input.assessmentId,
          controlSetId: this.__input.controlSetId,
          status: this.__input.status,
          comment: this.__input.comment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentControlSetStatus.controlSet.manualEvidenceCount', props);
    return resource.getResponseField('controlSet.manualEvidenceCount') as unknown as number;
  }

}

export class AuditManagerResponsesUpdateAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentFrameworkRequest) {
  }

  public get framework(): AuditManagerResponsesUpdateAssessmentFrameworkFramework {
    return new AuditManagerResponsesUpdateAssessmentFrameworkFramework(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateAssessmentFrameworkFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentFrameworkRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.arn'),
        outputPath: 'framework.arn',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.arn', props);
    return resource.getResponseField('framework.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.id'),
        outputPath: 'framework.id',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.id', props);
    return resource.getResponseField('framework.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.name'),
        outputPath: 'framework.name',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.name', props);
    return resource.getResponseField('framework.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.type'),
        outputPath: 'framework.type',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.type', props);
    return resource.getResponseField('framework.type') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.complianceType'),
        outputPath: 'framework.complianceType',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.complianceType', props);
    return resource.getResponseField('framework.complianceType') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.description'),
        outputPath: 'framework.description',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.description', props);
    return resource.getResponseField('framework.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.logo'),
        outputPath: 'framework.logo',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.logo', props);
    return resource.getResponseField('framework.logo') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.controlSources'),
        outputPath: 'framework.controlSources',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.controlSources', props);
    return resource.getResponseField('framework.controlSources') as unknown as string;
  }

  public get controlSets(): shapes.AuditManagerControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.controlSets'),
        outputPath: 'framework.controlSets',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.controlSets', props);
    return resource.getResponseField('framework.controlSets') as unknown as shapes.AuditManagerControlSet[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.createdAt'),
        outputPath: 'framework.createdAt',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.createdAt', props);
    return resource.getResponseField('framework.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.lastUpdatedAt'),
        outputPath: 'framework.lastUpdatedAt',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.lastUpdatedAt', props);
    return resource.getResponseField('framework.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.createdBy'),
        outputPath: 'framework.createdBy',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.createdBy', props);
    return resource.getResponseField('framework.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.lastUpdatedBy'),
        outputPath: 'framework.lastUpdatedBy',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.lastUpdatedBy', props);
    return resource.getResponseField('framework.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentFramework',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentFramework.framework.tags'),
        outputPath: 'framework.tags',
        parameters: {
          frameworkId: this.__input.frameworkId,
          name: this.__input.name,
          description: this.__input.description,
          complianceType: this.__input.complianceType,
          controlSets: this.__input.controlSets,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentFramework.framework.tags', props);
    return resource.getResponseField('framework.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesUpdateAssessmentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get assessment(): AuditManagerResponsesUpdateAssessmentStatusAssessment {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessment(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.arn'),
        outputPath: 'assessment.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.arn', props);
    return resource.getResponseField('assessment.arn') as unknown as string;
  }

  public get awsAccount(): AuditManagerResponsesUpdateAssessmentStatusAssessmentAwsAccount {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentAwsAccount(this.__scope, this.__resources, this.__input);
  }

  public get metadata(): AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadata {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadata(this.__scope, this.__resources, this.__input);
  }

  public get framework(): AuditManagerResponsesUpdateAssessmentStatusAssessmentFramework {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentFramework(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.tags'),
        outputPath: 'assessment.tags',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.tags', props);
    return resource.getResponseField('assessment.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentAwsAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.awsAccount.id'),
        outputPath: 'assessment.awsAccount.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.awsAccount.id', props);
    return resource.getResponseField('assessment.awsAccount.id') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.awsAccount.emailAddress'),
        outputPath: 'assessment.awsAccount.emailAddress',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.awsAccount.emailAddress', props);
    return resource.getResponseField('assessment.awsAccount.emailAddress') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.awsAccount.name'),
        outputPath: 'assessment.awsAccount.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.awsAccount.name', props);
    return resource.getResponseField('assessment.awsAccount.name') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.name'),
        outputPath: 'assessment.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.name', props);
    return resource.getResponseField('assessment.metadata.name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.id'),
        outputPath: 'assessment.metadata.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.id', props);
    return resource.getResponseField('assessment.metadata.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.description'),
        outputPath: 'assessment.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.description', props);
    return resource.getResponseField('assessment.metadata.description') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.complianceType'),
        outputPath: 'assessment.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.complianceType', props);
    return resource.getResponseField('assessment.metadata.complianceType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.status'),
        outputPath: 'assessment.metadata.status',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.status', props);
    return resource.getResponseField('assessment.metadata.status') as unknown as string;
  }

  public get assessmentReportsDestination(): AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataAssessmentReportsDestination {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get scope(): AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataScope {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataScope(this.__scope, this.__resources, this.__input);
  }

  public get roles(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.roles'),
        outputPath: 'assessment.metadata.roles',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.roles', props);
    return resource.getResponseField('assessment.metadata.roles') as unknown as shapes.AuditManagerRole[];
  }

  public get delegations(): shapes.AuditManagerDelegation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.delegations'),
        outputPath: 'assessment.metadata.delegations',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.delegations', props);
    return resource.getResponseField('assessment.metadata.delegations') as unknown as shapes.AuditManagerDelegation[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.creationTime'),
        outputPath: 'assessment.metadata.creationTime',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.creationTime', props);
    return resource.getResponseField('assessment.metadata.creationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.lastUpdated'),
        outputPath: 'assessment.metadata.lastUpdated',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.lastUpdated', props);
    return resource.getResponseField('assessment.metadata.lastUpdated') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.assessmentReportsDestination.destinationType'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destinationType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.assessmentReportsDestination.destinationType', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.assessmentReportsDestination.destination'),
        outputPath: 'assessment.metadata.assessmentReportsDestination.destination',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.assessmentReportsDestination.destination', props);
    return resource.getResponseField('assessment.metadata.assessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentMetadataScope {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get awsAccounts(): shapes.AuditManagerAwsAccount[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.scope.awsAccounts'),
        outputPath: 'assessment.metadata.scope.awsAccounts',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.scope.awsAccounts', props);
    return resource.getResponseField('assessment.metadata.scope.awsAccounts') as unknown as shapes.AuditManagerAwsAccount[];
  }

  public get awsServices(): shapes.AuditManagerAwsService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.metadata.scope.awsServices'),
        outputPath: 'assessment.metadata.scope.awsServices',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.metadata.scope.awsServices', props);
    return resource.getResponseField('assessment.metadata.scope.awsServices') as unknown as shapes.AuditManagerAwsService[];
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentFramework {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.id'),
        outputPath: 'assessment.framework.id',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.id', props);
    return resource.getResponseField('assessment.framework.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.arn'),
        outputPath: 'assessment.framework.arn',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.arn', props);
    return resource.getResponseField('assessment.framework.arn') as unknown as string;
  }

  public get metadata(): AuditManagerResponsesUpdateAssessmentStatusAssessmentFrameworkMetadata {
    return new AuditManagerResponsesUpdateAssessmentStatusAssessmentFrameworkMetadata(this.__scope, this.__resources, this.__input);
  }

  public get controlSets(): shapes.AuditManagerAssessmentControlSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.controlSets'),
        outputPath: 'assessment.framework.controlSets',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.controlSets', props);
    return resource.getResponseField('assessment.framework.controlSets') as unknown as shapes.AuditManagerAssessmentControlSet[];
  }

}

export class AuditManagerResponsesUpdateAssessmentStatusAssessmentFrameworkMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateAssessmentStatusRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.metadata.name'),
        outputPath: 'assessment.framework.metadata.name',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.metadata.name', props);
    return resource.getResponseField('assessment.framework.metadata.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.metadata.description'),
        outputPath: 'assessment.framework.metadata.description',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.metadata.description', props);
    return resource.getResponseField('assessment.framework.metadata.description') as unknown as string;
  }

  public get logo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.metadata.logo'),
        outputPath: 'assessment.framework.metadata.logo',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.metadata.logo', props);
    return resource.getResponseField('assessment.framework.metadata.logo') as unknown as string;
  }

  public get complianceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssessmentStatus',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateAssessmentStatus.assessment.framework.metadata.complianceType'),
        outputPath: 'assessment.framework.metadata.complianceType',
        parameters: {
          assessmentId: this.__input.assessmentId,
          status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssessmentStatus.assessment.framework.metadata.complianceType', props);
    return resource.getResponseField('assessment.framework.metadata.complianceType') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateControlRequest) {
  }

  public get control(): AuditManagerResponsesUpdateControlControl {
    return new AuditManagerResponsesUpdateControlControl(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateControlControl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateControlRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.arn'),
        outputPath: 'control.arn',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.arn', props);
    return resource.getResponseField('control.arn') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.id'),
        outputPath: 'control.id',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.id', props);
    return resource.getResponseField('control.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.type'),
        outputPath: 'control.type',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.type', props);
    return resource.getResponseField('control.type') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.name'),
        outputPath: 'control.name',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.name', props);
    return resource.getResponseField('control.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.description'),
        outputPath: 'control.description',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.description', props);
    return resource.getResponseField('control.description') as unknown as string;
  }

  public get testingInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.testingInformation'),
        outputPath: 'control.testingInformation',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.testingInformation', props);
    return resource.getResponseField('control.testingInformation') as unknown as string;
  }

  public get actionPlanTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.actionPlanTitle'),
        outputPath: 'control.actionPlanTitle',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.actionPlanTitle', props);
    return resource.getResponseField('control.actionPlanTitle') as unknown as string;
  }

  public get actionPlanInstructions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.actionPlanInstructions'),
        outputPath: 'control.actionPlanInstructions',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.actionPlanInstructions', props);
    return resource.getResponseField('control.actionPlanInstructions') as unknown as string;
  }

  public get controlSources(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.controlSources'),
        outputPath: 'control.controlSources',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.controlSources', props);
    return resource.getResponseField('control.controlSources') as unknown as string;
  }

  public get controlMappingSources(): shapes.AuditManagerControlMappingSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.controlMappingSources'),
        outputPath: 'control.controlMappingSources',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.controlMappingSources', props);
    return resource.getResponseField('control.controlMappingSources') as unknown as shapes.AuditManagerControlMappingSource[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.createdAt'),
        outputPath: 'control.createdAt',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.createdAt', props);
    return resource.getResponseField('control.createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.lastUpdatedAt'),
        outputPath: 'control.lastUpdatedAt',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.lastUpdatedAt', props);
    return resource.getResponseField('control.lastUpdatedAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.createdBy'),
        outputPath: 'control.createdBy',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.createdBy', props);
    return resource.getResponseField('control.createdBy') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.lastUpdatedBy'),
        outputPath: 'control.lastUpdatedBy',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.lastUpdatedBy', props);
    return resource.getResponseField('control.lastUpdatedBy') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateControl',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateControl.control.tags'),
        outputPath: 'control.tags',
        parameters: {
          controlId: this.__input.controlId,
          name: this.__input.name,
          description: this.__input.description,
          testingInformation: this.__input.testingInformation,
          actionPlanTitle: this.__input.actionPlanTitle,
          actionPlanInstructions: this.__input.actionPlanInstructions,
          controlMappingSources: this.__input.controlMappingSources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateControl.control.tags', props);
    return resource.getResponseField('control.tags') as unknown as Record<string, string>;
  }

}

export class AuditManagerResponsesUpdateSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateSettingsRequest) {
  }

  public get settings(): AuditManagerResponsesUpdateSettingsSettings {
    return new AuditManagerResponsesUpdateSettingsSettings(this.__scope, this.__resources, this.__input);
  }

}

export class AuditManagerResponsesUpdateSettingsSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateSettingsRequest) {
  }

  public get isAwsOrgEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.isAwsOrgEnabled'),
        outputPath: 'settings.isAwsOrgEnabled',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.isAwsOrgEnabled', props);
    return resource.getResponseField('settings.isAwsOrgEnabled') as unknown as boolean;
  }

  public get snsTopic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.snsTopic'),
        outputPath: 'settings.snsTopic',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.snsTopic', props);
    return resource.getResponseField('settings.snsTopic') as unknown as string;
  }

  public get defaultAssessmentReportsDestination(): AuditManagerResponsesUpdateSettingsSettingsDefaultAssessmentReportsDestination {
    return new AuditManagerResponsesUpdateSettingsSettingsDefaultAssessmentReportsDestination(this.__scope, this.__resources, this.__input);
  }

  public get defaultProcessOwners(): shapes.AuditManagerRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.defaultProcessOwners'),
        outputPath: 'settings.defaultProcessOwners',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.defaultProcessOwners', props);
    return resource.getResponseField('settings.defaultProcessOwners') as unknown as shapes.AuditManagerRole[];
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.kmsKey'),
        outputPath: 'settings.kmsKey',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.kmsKey', props);
    return resource.getResponseField('settings.kmsKey') as unknown as string;
  }

}

export class AuditManagerResponsesUpdateSettingsSettingsDefaultAssessmentReportsDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerUpdateSettingsRequest) {
  }

  public get destinationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.defaultAssessmentReportsDestination.destinationType'),
        outputPath: 'settings.defaultAssessmentReportsDestination.destinationType',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.defaultAssessmentReportsDestination.destinationType', props);
    return resource.getResponseField('settings.defaultAssessmentReportsDestination.destinationType') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSettings',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.UpdateSettings.settings.defaultAssessmentReportsDestination.destination'),
        outputPath: 'settings.defaultAssessmentReportsDestination.destination',
        parameters: {
          snsTopic: this.__input.snsTopic,
          defaultAssessmentReportsDestination: {
            destinationType: this.__input.defaultAssessmentReportsDestination?.destinationType,
            destination: this.__input.defaultAssessmentReportsDestination?.destination,
          },
          defaultProcessOwners: this.__input.defaultProcessOwners,
          kmsKey: this.__input.kmsKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSettings.settings.defaultAssessmentReportsDestination.destination', props);
    return resource.getResponseField('settings.defaultAssessmentReportsDestination.destination') as unknown as string;
  }

}

export class AuditManagerResponsesValidateAssessmentReportIntegrity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AuditManagerValidateAssessmentReportIntegrityRequest) {
  }

  public get signatureValid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateAssessmentReportIntegrity',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ValidateAssessmentReportIntegrity.signatureValid'),
        outputPath: 'signatureValid',
        parameters: {
          s3RelativePath: this.__input.s3RelativePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateAssessmentReportIntegrity.signatureValid', props);
    return resource.getResponseField('signatureValid') as unknown as boolean;
  }

  public get signatureAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateAssessmentReportIntegrity',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ValidateAssessmentReportIntegrity.signatureAlgorithm'),
        outputPath: 'signatureAlgorithm',
        parameters: {
          s3RelativePath: this.__input.s3RelativePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateAssessmentReportIntegrity.signatureAlgorithm', props);
    return resource.getResponseField('signatureAlgorithm') as unknown as string;
  }

  public get signatureDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateAssessmentReportIntegrity',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ValidateAssessmentReportIntegrity.signatureDateTime'),
        outputPath: 'signatureDateTime',
        parameters: {
          s3RelativePath: this.__input.s3RelativePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateAssessmentReportIntegrity.signatureDateTime', props);
    return resource.getResponseField('signatureDateTime') as unknown as string;
  }

  public get signatureKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateAssessmentReportIntegrity',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ValidateAssessmentReportIntegrity.signatureKeyId'),
        outputPath: 'signatureKeyId',
        parameters: {
          s3RelativePath: this.__input.s3RelativePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateAssessmentReportIntegrity.signatureKeyId', props);
    return resource.getResponseField('signatureKeyId') as unknown as string;
  }

  public get validationErrors(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateAssessmentReportIntegrity',
        service: 'AuditManager',
        physicalResourceId: cr.PhysicalResourceId.of('AuditManager.ValidateAssessmentReportIntegrity.validationErrors'),
        outputPath: 'validationErrors',
        parameters: {
          s3RelativePath: this.__input.s3RelativePath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateAssessmentReportIntegrity.validationErrors', props);
    return resource.getResponseField('validationErrors') as unknown as string[];
  }

}

