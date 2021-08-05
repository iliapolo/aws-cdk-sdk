import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudDirectoryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addFacetToObject(input: shapes.CloudDirectoryAddFacetToObjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFacetToObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AddFacetToObject'),
        parameters: {
          DirectoryArn: input.directoryArn,
          SchemaFacet: {
            SchemaArn: input.schemaFacet.schemaArn,
            FacetName: input.schemaFacet.facetName,
          },
          ObjectAttributeList: input.objectAttributeList,
          ObjectReference: {
            Selector: input.objectReference.selector,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddFacetToObject', props);
  }

  public applySchema(input: shapes.CloudDirectoryApplySchemaRequest): CloudDirectoryResponsesApplySchema {
    return new CloudDirectoryResponsesApplySchema(this, this.__resources, input);
  }

  public attachObject(input: shapes.CloudDirectoryAttachObjectRequest): CloudDirectoryResponsesAttachObject {
    return new CloudDirectoryResponsesAttachObject(this, this.__resources, input);
  }

  public attachPolicy(input: shapes.CloudDirectoryAttachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachPolicy',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachPolicy'),
        parameters: {
          DirectoryArn: input.directoryArn,
          PolicyReference: {
            Selector: input.policyReference.selector,
          },
          ObjectReference: {
            Selector: input.objectReference.selector,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachPolicy', props);
  }

  public attachToIndex(input: shapes.CloudDirectoryAttachToIndexRequest): CloudDirectoryResponsesAttachToIndex {
    return new CloudDirectoryResponsesAttachToIndex(this, this.__resources, input);
  }

  public attachTypedLink(input: shapes.CloudDirectoryAttachTypedLinkRequest): CloudDirectoryResponsesAttachTypedLink {
    return new CloudDirectoryResponsesAttachTypedLink(this, this.__resources, input);
  }

  public batchRead(input: shapes.CloudDirectoryBatchReadRequest): CloudDirectoryResponsesBatchRead {
    return new CloudDirectoryResponsesBatchRead(this, this.__resources, input);
  }

  public batchWrite(input: shapes.CloudDirectoryBatchWriteRequest): CloudDirectoryResponsesBatchWrite {
    return new CloudDirectoryResponsesBatchWrite(this, this.__resources, input);
  }

  public createDirectory(input: shapes.CloudDirectoryCreateDirectoryRequest): CloudDirectoryResponsesCreateDirectory {
    return new CloudDirectoryResponsesCreateDirectory(this, this.__resources, input);
  }

  public createFacet(input: shapes.CloudDirectoryCreateFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Name: input.name,
          Attributes: input.attributes,
          ObjectType: input.objectType,
          FacetStyle: input.facetStyle,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateFacet', props);
  }

  public createIndex(input: shapes.CloudDirectoryCreateIndexRequest): CloudDirectoryResponsesCreateIndex {
    return new CloudDirectoryResponsesCreateIndex(this, this.__resources, input);
  }

  public createObject(input: shapes.CloudDirectoryCreateObjectRequest): CloudDirectoryResponsesCreateObject {
    return new CloudDirectoryResponsesCreateObject(this, this.__resources, input);
  }

  public createSchema(input: shapes.CloudDirectoryCreateSchemaRequest): CloudDirectoryResponsesCreateSchema {
    return new CloudDirectoryResponsesCreateSchema(this, this.__resources, input);
  }

  public createTypedLinkFacet(input: shapes.CloudDirectoryCreateTypedLinkFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTypedLinkFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateTypedLinkFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Facet: {
            Name: input.facet.name,
            Attributes: input.facet.attributes,
            IdentityAttributeOrder: input.facet.identityAttributeOrder,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTypedLinkFacet', props);
  }

  public deleteDirectory(input: shapes.CloudDirectoryDeleteDirectoryRequest): CloudDirectoryResponsesDeleteDirectory {
    return new CloudDirectoryResponsesDeleteDirectory(this, this.__resources, input);
  }

  public deleteFacet(input: shapes.CloudDirectoryDeleteFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DeleteFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFacet', props);
  }

  public deleteObject(input: shapes.CloudDirectoryDeleteObjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DeleteObject'),
        parameters: {
          DirectoryArn: input.directoryArn,
          ObjectReference: {
            Selector: input.objectReference.selector,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteObject', props);
  }

  public deleteSchema(input: shapes.CloudDirectoryDeleteSchemaRequest): CloudDirectoryResponsesDeleteSchema {
    return new CloudDirectoryResponsesDeleteSchema(this, this.__resources, input);
  }

  public deleteTypedLinkFacet(input: shapes.CloudDirectoryDeleteTypedLinkFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTypedLinkFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DeleteTypedLinkFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTypedLinkFacet', props);
  }

  public detachFromIndex(input: shapes.CloudDirectoryDetachFromIndexRequest): CloudDirectoryResponsesDetachFromIndex {
    return new CloudDirectoryResponsesDetachFromIndex(this, this.__resources, input);
  }

  public detachObject(input: shapes.CloudDirectoryDetachObjectRequest): CloudDirectoryResponsesDetachObject {
    return new CloudDirectoryResponsesDetachObject(this, this.__resources, input);
  }

  public detachPolicy(input: shapes.CloudDirectoryDetachPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachPolicy',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DetachPolicy'),
        parameters: {
          DirectoryArn: input.directoryArn,
          PolicyReference: {
            Selector: input.policyReference.selector,
          },
          ObjectReference: {
            Selector: input.objectReference.selector,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachPolicy', props);
  }

  public detachTypedLink(input: shapes.CloudDirectoryDetachTypedLinkRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DetachTypedLink'),
        parameters: {
          DirectoryArn: input.directoryArn,
          TypedLinkSpecifier: {
            TypedLinkFacet: {
              SchemaArn: input.typedLinkSpecifier.typedLinkFacet.schemaArn,
              TypedLinkName: input.typedLinkSpecifier.typedLinkFacet.typedLinkName,
            },
            SourceObjectReference: {
              Selector: input.typedLinkSpecifier.sourceObjectReference.selector,
            },
            TargetObjectReference: {
              Selector: input.typedLinkSpecifier.targetObjectReference.selector,
            },
            IdentityAttributeValues: input.typedLinkSpecifier.identityAttributeValues,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachTypedLink', props);
  }

  public disableDirectory(input: shapes.CloudDirectoryDisableDirectoryRequest): CloudDirectoryResponsesDisableDirectory {
    return new CloudDirectoryResponsesDisableDirectory(this, this.__resources, input);
  }

  public enableDirectory(input: shapes.CloudDirectoryEnableDirectoryRequest): CloudDirectoryResponsesEnableDirectory {
    return new CloudDirectoryResponsesEnableDirectory(this, this.__resources, input);
  }

  public fetchAppliedSchemaVersion(input: shapes.CloudDirectoryGetAppliedSchemaVersionRequest): CloudDirectoryResponsesFetchAppliedSchemaVersion {
    return new CloudDirectoryResponsesFetchAppliedSchemaVersion(this, this.__resources, input);
  }

  public fetchDirectory(input: shapes.CloudDirectoryGetDirectoryRequest): CloudDirectoryResponsesFetchDirectory {
    return new CloudDirectoryResponsesFetchDirectory(this, this.__resources, input);
  }

  public fetchFacet(input: shapes.CloudDirectoryGetFacetRequest): CloudDirectoryResponsesFetchFacet {
    return new CloudDirectoryResponsesFetchFacet(this, this.__resources, input);
  }

  public fetchLinkAttributes(input: shapes.CloudDirectoryGetLinkAttributesRequest): CloudDirectoryResponsesFetchLinkAttributes {
    return new CloudDirectoryResponsesFetchLinkAttributes(this, this.__resources, input);
  }

  public fetchObjectAttributes(input: shapes.CloudDirectoryGetObjectAttributesRequest): CloudDirectoryResponsesFetchObjectAttributes {
    return new CloudDirectoryResponsesFetchObjectAttributes(this, this.__resources, input);
  }

  public fetchObjectInformation(input: shapes.CloudDirectoryGetObjectInformationRequest): CloudDirectoryResponsesFetchObjectInformation {
    return new CloudDirectoryResponsesFetchObjectInformation(this, this.__resources, input);
  }

  public fetchSchemaAsJson(input: shapes.CloudDirectoryGetSchemaAsJsonRequest): CloudDirectoryResponsesFetchSchemaAsJson {
    return new CloudDirectoryResponsesFetchSchemaAsJson(this, this.__resources, input);
  }

  public fetchTypedLinkFacetInformation(input: shapes.CloudDirectoryGetTypedLinkFacetInformationRequest): CloudDirectoryResponsesFetchTypedLinkFacetInformation {
    return new CloudDirectoryResponsesFetchTypedLinkFacetInformation(this, this.__resources, input);
  }

  public listAppliedSchemaArns(input: shapes.CloudDirectoryListAppliedSchemaArnsRequest): CloudDirectoryResponsesListAppliedSchemaArns {
    return new CloudDirectoryResponsesListAppliedSchemaArns(this, this.__resources, input);
  }

  public listAttachedIndices(input: shapes.CloudDirectoryListAttachedIndicesRequest): CloudDirectoryResponsesListAttachedIndices {
    return new CloudDirectoryResponsesListAttachedIndices(this, this.__resources, input);
  }

  public listDevelopmentSchemaArns(input: shapes.CloudDirectoryListDevelopmentSchemaArnsRequest): CloudDirectoryResponsesListDevelopmentSchemaArns {
    return new CloudDirectoryResponsesListDevelopmentSchemaArns(this, this.__resources, input);
  }

  public listDirectories(input: shapes.CloudDirectoryListDirectoriesRequest): CloudDirectoryResponsesListDirectories {
    return new CloudDirectoryResponsesListDirectories(this, this.__resources, input);
  }

  public listFacetAttributes(input: shapes.CloudDirectoryListFacetAttributesRequest): CloudDirectoryResponsesListFacetAttributes {
    return new CloudDirectoryResponsesListFacetAttributes(this, this.__resources, input);
  }

  public listFacetNames(input: shapes.CloudDirectoryListFacetNamesRequest): CloudDirectoryResponsesListFacetNames {
    return new CloudDirectoryResponsesListFacetNames(this, this.__resources, input);
  }

  public listIncomingTypedLinks(input: shapes.CloudDirectoryListIncomingTypedLinksRequest): CloudDirectoryResponsesListIncomingTypedLinks {
    return new CloudDirectoryResponsesListIncomingTypedLinks(this, this.__resources, input);
  }

  public listIndex(input: shapes.CloudDirectoryListIndexRequest): CloudDirectoryResponsesListIndex {
    return new CloudDirectoryResponsesListIndex(this, this.__resources, input);
  }

  public listManagedSchemaArns(input: shapes.CloudDirectoryListManagedSchemaArnsRequest): CloudDirectoryResponsesListManagedSchemaArns {
    return new CloudDirectoryResponsesListManagedSchemaArns(this, this.__resources, input);
  }

  public listObjectAttributes(input: shapes.CloudDirectoryListObjectAttributesRequest): CloudDirectoryResponsesListObjectAttributes {
    return new CloudDirectoryResponsesListObjectAttributes(this, this.__resources, input);
  }

  public listObjectChildren(input: shapes.CloudDirectoryListObjectChildrenRequest): CloudDirectoryResponsesListObjectChildren {
    return new CloudDirectoryResponsesListObjectChildren(this, this.__resources, input);
  }

  public listObjectParentPaths(input: shapes.CloudDirectoryListObjectParentPathsRequest): CloudDirectoryResponsesListObjectParentPaths {
    return new CloudDirectoryResponsesListObjectParentPaths(this, this.__resources, input);
  }

  public listObjectParents(input: shapes.CloudDirectoryListObjectParentsRequest): CloudDirectoryResponsesListObjectParents {
    return new CloudDirectoryResponsesListObjectParents(this, this.__resources, input);
  }

  public listObjectPolicies(input: shapes.CloudDirectoryListObjectPoliciesRequest): CloudDirectoryResponsesListObjectPolicies {
    return new CloudDirectoryResponsesListObjectPolicies(this, this.__resources, input);
  }

  public listOutgoingTypedLinks(input: shapes.CloudDirectoryListOutgoingTypedLinksRequest): CloudDirectoryResponsesListOutgoingTypedLinks {
    return new CloudDirectoryResponsesListOutgoingTypedLinks(this, this.__resources, input);
  }

  public listPolicyAttachments(input: shapes.CloudDirectoryListPolicyAttachmentsRequest): CloudDirectoryResponsesListPolicyAttachments {
    return new CloudDirectoryResponsesListPolicyAttachments(this, this.__resources, input);
  }

  public listPublishedSchemaArns(input: shapes.CloudDirectoryListPublishedSchemaArnsRequest): CloudDirectoryResponsesListPublishedSchemaArns {
    return new CloudDirectoryResponsesListPublishedSchemaArns(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CloudDirectoryListTagsForResourceRequest): CloudDirectoryResponsesListTagsForResource {
    return new CloudDirectoryResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTypedLinkFacetAttributes(input: shapes.CloudDirectoryListTypedLinkFacetAttributesRequest): CloudDirectoryResponsesListTypedLinkFacetAttributes {
    return new CloudDirectoryResponsesListTypedLinkFacetAttributes(this, this.__resources, input);
  }

  public listTypedLinkFacetNames(input: shapes.CloudDirectoryListTypedLinkFacetNamesRequest): CloudDirectoryResponsesListTypedLinkFacetNames {
    return new CloudDirectoryResponsesListTypedLinkFacetNames(this, this.__resources, input);
  }

  public lookupPolicy(input: shapes.CloudDirectoryLookupPolicyRequest): CloudDirectoryResponsesLookupPolicy {
    return new CloudDirectoryResponsesLookupPolicy(this, this.__resources, input);
  }

  public publishSchema(input: shapes.CloudDirectoryPublishSchemaRequest): CloudDirectoryResponsesPublishSchema {
    return new CloudDirectoryResponsesPublishSchema(this, this.__resources, input);
  }

  public putSchemaFromJson(input: shapes.CloudDirectoryPutSchemaFromJsonRequest): CloudDirectoryResponsesPutSchemaFromJson {
    return new CloudDirectoryResponsesPutSchemaFromJson(this, this.__resources, input);
  }

  public removeFacetFromObject(input: shapes.CloudDirectoryRemoveFacetFromObjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFacetFromObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.RemoveFacetFromObject'),
        parameters: {
          DirectoryArn: input.directoryArn,
          SchemaFacet: {
            SchemaArn: input.schemaFacet.schemaArn,
            FacetName: input.schemaFacet.facetName,
          },
          ObjectReference: {
            Selector: input.objectReference.selector,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveFacetFromObject', props);
  }

  public tagResource(input: shapes.CloudDirectoryTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CloudDirectoryUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFacet(input: shapes.CloudDirectoryUpdateFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpdateFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Name: input.name,
          AttributeUpdates: input.attributeUpdates,
          ObjectType: input.objectType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFacet', props);
  }

  public updateLinkAttributes(input: shapes.CloudDirectoryUpdateLinkAttributesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLinkAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpdateLinkAttributes'),
        parameters: {
          DirectoryArn: input.directoryArn,
          TypedLinkSpecifier: {
            TypedLinkFacet: {
              SchemaArn: input.typedLinkSpecifier.typedLinkFacet.schemaArn,
              TypedLinkName: input.typedLinkSpecifier.typedLinkFacet.typedLinkName,
            },
            SourceObjectReference: {
              Selector: input.typedLinkSpecifier.sourceObjectReference.selector,
            },
            TargetObjectReference: {
              Selector: input.typedLinkSpecifier.targetObjectReference.selector,
            },
            IdentityAttributeValues: input.typedLinkSpecifier.identityAttributeValues,
          },
          AttributeUpdates: input.attributeUpdates,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLinkAttributes', props);
  }

  public updateObjectAttributes(input: shapes.CloudDirectoryUpdateObjectAttributesRequest): CloudDirectoryResponsesUpdateObjectAttributes {
    return new CloudDirectoryResponsesUpdateObjectAttributes(this, this.__resources, input);
  }

  public updateSchema(input: shapes.CloudDirectoryUpdateSchemaRequest): CloudDirectoryResponsesUpdateSchema {
    return new CloudDirectoryResponsesUpdateSchema(this, this.__resources, input);
  }

  public updateTypedLinkFacet(input: shapes.CloudDirectoryUpdateTypedLinkFacetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTypedLinkFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpdateTypedLinkFacet'),
        parameters: {
          SchemaArn: input.schemaArn,
          Name: input.name,
          AttributeUpdates: input.attributeUpdates,
          IdentityAttributeOrder: input.identityAttributeOrder,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTypedLinkFacet', props);
  }

  public upgradeAppliedSchema(input: shapes.CloudDirectoryUpgradeAppliedSchemaRequest): CloudDirectoryResponsesUpgradeAppliedSchema {
    return new CloudDirectoryResponsesUpgradeAppliedSchema(this, this.__resources, input);
  }

  public upgradePublishedSchema(input: shapes.CloudDirectoryUpgradePublishedSchemaRequest): CloudDirectoryResponsesUpgradePublishedSchema {
    return new CloudDirectoryResponsesUpgradePublishedSchema(this, this.__resources, input);
  }

}

export class CloudDirectoryResponsesApplySchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryApplySchemaRequest) {
  }

  public get appliedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applySchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ApplySchema.AppliedSchemaArn'),
        outputPath: 'AppliedSchemaArn',
        parameters: {
          PublishedSchemaArn: this.__input.publishedSchemaArn,
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplySchema.AppliedSchemaArn', props);
    return resource.getResponseField('AppliedSchemaArn') as unknown as string;
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applySchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ApplySchema.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          PublishedSchemaArn: this.__input.publishedSchemaArn,
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplySchema.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesAttachObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachObjectRequest) {
  }

  public get attachedObjectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachObject.AttachedObjectIdentifier'),
        outputPath: 'AttachedObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ParentReference: {
            Selector: this.__input.parentReference.selector,
          },
          ChildReference: {
            Selector: this.__input.childReference.selector,
          },
          LinkName: this.__input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachObject.AttachedObjectIdentifier', props);
    return resource.getResponseField('AttachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesAttachToIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachToIndexRequest) {
  }

  public get attachedObjectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachToIndex',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachToIndex.AttachedObjectIdentifier'),
        outputPath: 'AttachedObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          IndexReference: {
            Selector: this.__input.indexReference.selector,
          },
          TargetReference: {
            Selector: this.__input.targetReference.selector,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachToIndex.AttachedObjectIdentifier', props);
    return resource.getResponseField('AttachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesAttachTypedLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachTypedLinkRequest) {
  }

  public get typedLinkSpecifier(): CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier {
    return new CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier(this.__scope, this.__resources, this.__input);
  }

}

export class CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachTypedLinkRequest) {
  }

  public get typedLinkFacet(): CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet {
    return new CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet(this.__scope, this.__resources, this.__input);
  }

  public get sourceObjectReference(): CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference {
    return new CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference(this.__scope, this.__resources, this.__input);
  }

  public get targetObjectReference(): CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference {
    return new CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference(this.__scope, this.__resources, this.__input);
  }

  public get identityAttributeValues(): shapes.CloudDirectoryAttributeNameAndValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachTypedLink.TypedLinkSpecifier.IdentityAttributeValues'),
        outputPath: 'TypedLinkSpecifier.IdentityAttributeValues',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SourceObjectReference: {
            Selector: this.__input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.__input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.__input.typedLinkFacet.schemaArn,
            TypedLinkName: this.__input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachTypedLink.TypedLinkSpecifier.IdentityAttributeValues', props);
    return resource.getResponseField('TypedLinkSpecifier.IdentityAttributeValues') as unknown as shapes.CloudDirectoryAttributeNameAndValue[];
  }

}

export class CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTypedLinkFacet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachTypedLinkRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.SchemaArn'),
        outputPath: 'TypedLinkSpecifier.TypedLinkFacet.SchemaArn',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SourceObjectReference: {
            Selector: this.__input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.__input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.__input.typedLinkFacet.schemaArn,
            TypedLinkName: this.__input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.SchemaArn', props);
    return resource.getResponseField('TypedLinkSpecifier.TypedLinkFacet.SchemaArn') as unknown as string;
  }

  public get typedLinkName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.TypedLinkName'),
        outputPath: 'TypedLinkSpecifier.TypedLinkFacet.TypedLinkName',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SourceObjectReference: {
            Selector: this.__input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.__input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.__input.typedLinkFacet.schemaArn,
            TypedLinkName: this.__input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.TypedLinkName', props);
    return resource.getResponseField('TypedLinkSpecifier.TypedLinkFacet.TypedLinkName') as unknown as string;
  }

}

export class CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierSourceObjectReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachTypedLinkRequest) {
  }

  public get selector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachTypedLink.TypedLinkSpecifier.SourceObjectReference.Selector'),
        outputPath: 'TypedLinkSpecifier.SourceObjectReference.Selector',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SourceObjectReference: {
            Selector: this.__input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.__input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.__input.typedLinkFacet.schemaArn,
            TypedLinkName: this.__input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachTypedLink.TypedLinkSpecifier.SourceObjectReference.Selector', props);
    return resource.getResponseField('TypedLinkSpecifier.SourceObjectReference.Selector') as unknown as string;
  }

}

export class CloudDirectoryResponsesAttachTypedLinkTypedLinkSpecifierTargetObjectReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryAttachTypedLinkRequest) {
  }

  public get selector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachTypedLink',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.AttachTypedLink.TypedLinkSpecifier.TargetObjectReference.Selector'),
        outputPath: 'TypedLinkSpecifier.TargetObjectReference.Selector',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SourceObjectReference: {
            Selector: this.__input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.__input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.__input.typedLinkFacet.schemaArn,
            TypedLinkName: this.__input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachTypedLink.TypedLinkSpecifier.TargetObjectReference.Selector', props);
    return resource.getResponseField('TypedLinkSpecifier.TargetObjectReference.Selector') as unknown as string;
  }

}

export class CloudDirectoryResponsesBatchRead {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryBatchReadRequest) {
  }

  public get responses(): shapes.CloudDirectoryBatchReadOperationResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchRead',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.BatchRead.Responses'),
        outputPath: 'Responses',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          Operations: this.__input.operations,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchRead.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.CloudDirectoryBatchReadOperationResponse[];
  }

}

export class CloudDirectoryResponsesBatchWrite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryBatchWriteRequest) {
  }

  public get responses(): shapes.CloudDirectoryBatchWriteOperationResponse[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchWrite',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.BatchWrite.Responses'),
        outputPath: 'Responses',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          Operations: this.__input.operations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchWrite.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.CloudDirectoryBatchWriteOperationResponse[];
  }

}

export class CloudDirectoryResponsesCreateDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryCreateDirectoryRequest) {
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateDirectory.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          Name: this.__input.name,
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateDirectory.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectory.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get objectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateDirectory.ObjectIdentifier'),
        outputPath: 'ObjectIdentifier',
        parameters: {
          Name: this.__input.name,
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectory.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

  public get appliedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateDirectory.AppliedSchemaArn'),
        outputPath: 'AppliedSchemaArn',
        parameters: {
          Name: this.__input.name,
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectory.AppliedSchemaArn', props);
    return resource.getResponseField('AppliedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesCreateIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryCreateIndexRequest) {
  }

  public get objectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIndex',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateIndex.ObjectIdentifier'),
        outputPath: 'ObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          OrderedIndexedAttributeList: this.__input.orderedIndexedAttributeList,
          IsUnique: this.__input.isUnique,
          ParentReference: {
            Selector: this.__input.parentReference?.selector,
          },
          LinkName: this.__input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIndex.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesCreateObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryCreateObjectRequest) {
  }

  public get objectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateObject.ObjectIdentifier'),
        outputPath: 'ObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SchemaFacets: this.__input.schemaFacets,
          ObjectAttributeList: this.__input.objectAttributeList,
          ParentReference: {
            Selector: this.__input.parentReference?.selector,
          },
          LinkName: this.__input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateObject.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesCreateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryCreateSchemaRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.CreateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesDeleteDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryDeleteDirectoryRequest) {
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DeleteDirectory.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesDeleteSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryDeleteSchemaRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DeleteSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesDetachFromIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryDetachFromIndexRequest) {
  }

  public get detachedObjectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachFromIndex',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DetachFromIndex.DetachedObjectIdentifier'),
        outputPath: 'DetachedObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          IndexReference: {
            Selector: this.__input.indexReference.selector,
          },
          TargetReference: {
            Selector: this.__input.targetReference.selector,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachFromIndex.DetachedObjectIdentifier', props);
    return resource.getResponseField('DetachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesDetachObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryDetachObjectRequest) {
  }

  public get detachedObjectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachObject',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DetachObject.DetachedObjectIdentifier'),
        outputPath: 'DetachedObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ParentReference: {
            Selector: this.__input.parentReference.selector,
          },
          LinkName: this.__input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachObject.DetachedObjectIdentifier', props);
    return resource.getResponseField('DetachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesDisableDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryDisableDirectoryRequest) {
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.DisableDirectory.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesEnableDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryEnableDirectoryRequest) {
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.EnableDirectory.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchAppliedSchemaVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetAppliedSchemaVersionRequest) {
  }

  public get appliedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppliedSchemaVersion',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetAppliedSchemaVersion.AppliedSchemaArn'),
        outputPath: 'AppliedSchemaArn',
        parameters: {
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppliedSchemaVersion.AppliedSchemaArn', props);
    return resource.getResponseField('AppliedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetDirectoryRequest) {
  }

  public get directory(): CloudDirectoryResponsesFetchDirectoryDirectory {
    return new CloudDirectoryResponsesFetchDirectoryDirectory(this.__scope, this.__resources, this.__input);
  }

}

export class CloudDirectoryResponsesFetchDirectoryDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetDirectoryRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetDirectory.Directory.Name'),
        outputPath: 'Directory.Name',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDirectory.Directory.Name', props);
    return resource.getResponseField('Directory.Name') as unknown as string;
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetDirectory.Directory.DirectoryArn'),
        outputPath: 'Directory.DirectoryArn',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDirectory.Directory.DirectoryArn', props);
    return resource.getResponseField('Directory.DirectoryArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetDirectory.Directory.State'),
        outputPath: 'Directory.State',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDirectory.Directory.State', props);
    return resource.getResponseField('Directory.State') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDirectory',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetDirectory.Directory.CreationDateTime'),
        outputPath: 'Directory.CreationDateTime',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDirectory.Directory.CreationDateTime', props);
    return resource.getResponseField('Directory.CreationDateTime') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchFacet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetFacetRequest) {
  }

  public get facet(): CloudDirectoryResponsesFetchFacetFacet {
    return new CloudDirectoryResponsesFetchFacetFacet(this.__scope, this.__resources, this.__input);
  }

}

export class CloudDirectoryResponsesFetchFacetFacet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetFacetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetFacet.Facet.Name'),
        outputPath: 'Facet.Name',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFacet.Facet.Name', props);
    return resource.getResponseField('Facet.Name') as unknown as string;
  }

  public get objectType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetFacet.Facet.ObjectType'),
        outputPath: 'Facet.ObjectType',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFacet.Facet.ObjectType', props);
    return resource.getResponseField('Facet.ObjectType') as unknown as string;
  }

  public get facetStyle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getFacet',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetFacet.Facet.FacetStyle'),
        outputPath: 'Facet.FacetStyle',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetFacet.Facet.FacetStyle', props);
    return resource.getResponseField('Facet.FacetStyle') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchLinkAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetLinkAttributesRequest) {
  }

  public get attributes(): shapes.CloudDirectoryAttributeKeyAndValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLinkAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetLinkAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          TypedLinkSpecifier: {
            TypedLinkFacet: {
              SchemaArn: this.__input.typedLinkSpecifier.typedLinkFacet.schemaArn,
              TypedLinkName: this.__input.typedLinkSpecifier.typedLinkFacet.typedLinkName,
            },
            SourceObjectReference: {
              Selector: this.__input.typedLinkSpecifier.sourceObjectReference.selector,
            },
            TargetObjectReference: {
              Selector: this.__input.typedLinkSpecifier.targetObjectReference.selector,
            },
            IdentityAttributeValues: this.__input.typedLinkSpecifier.identityAttributeValues,
          },
          AttributeNames: this.__input.attributeNames,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLinkAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryAttributeKeyAndValue[];
  }

}

export class CloudDirectoryResponsesFetchObjectAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetObjectAttributesRequest) {
  }

  public get attributes(): shapes.CloudDirectoryAttributeKeyAndValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetObjectAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          ConsistencyLevel: this.__input.consistencyLevel,
          SchemaFacet: {
            SchemaArn: this.__input.schemaFacet.schemaArn,
            FacetName: this.__input.schemaFacet.facetName,
          },
          AttributeNames: this.__input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryAttributeKeyAndValue[];
  }

}

export class CloudDirectoryResponsesFetchObjectInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetObjectInformationRequest) {
  }

  public get schemaFacets(): shapes.CloudDirectorySchemaFacet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectInformation',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetObjectInformation.SchemaFacets'),
        outputPath: 'SchemaFacets',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectInformation.SchemaFacets', props);
    return resource.getResponseField('SchemaFacets') as unknown as shapes.CloudDirectorySchemaFacet[];
  }

  public get objectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObjectInformation',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetObjectInformation.ObjectIdentifier'),
        outputPath: 'ObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObjectInformation.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchSchemaAsJson {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetSchemaAsJsonRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaAsJson',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetSchemaAsJson.Name'),
        outputPath: 'Name',
        parameters: {
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaAsJson.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaAsJson',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetSchemaAsJson.Document'),
        outputPath: 'Document',
        parameters: {
          SchemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaAsJson.Document', props);
    return resource.getResponseField('Document') as unknown as string;
  }

}

export class CloudDirectoryResponsesFetchTypedLinkFacetInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryGetTypedLinkFacetInformationRequest) {
  }

  public get identityAttributeOrder(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTypedLinkFacetInformation',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.GetTypedLinkFacetInformation.IdentityAttributeOrder'),
        outputPath: 'IdentityAttributeOrder',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTypedLinkFacetInformation.IdentityAttributeOrder', props);
    return resource.getResponseField('IdentityAttributeOrder') as unknown as string[];
  }

}

export class CloudDirectoryResponsesListAppliedSchemaArns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListAppliedSchemaArnsRequest) {
  }

  public get schemaArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppliedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListAppliedSchemaArns.SchemaArns'),
        outputPath: 'SchemaArns',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppliedSchemaArns.SchemaArns', props);
    return resource.getResponseField('SchemaArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppliedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListAppliedSchemaArns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppliedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListAttachedIndices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListAttachedIndicesRequest) {
  }

  public get indexAttachments(): shapes.CloudDirectoryIndexAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedIndices',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListAttachedIndices.IndexAttachments'),
        outputPath: 'IndexAttachments',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          TargetReference: {
            Selector: this.__input.targetReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedIndices.IndexAttachments', props);
    return resource.getResponseField('IndexAttachments') as unknown as shapes.CloudDirectoryIndexAttachment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttachedIndices',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListAttachedIndices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          TargetReference: {
            Selector: this.__input.targetReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttachedIndices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListDevelopmentSchemaArns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListDevelopmentSchemaArnsRequest) {
  }

  public get schemaArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevelopmentSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListDevelopmentSchemaArns.SchemaArns'),
        outputPath: 'SchemaArns',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevelopmentSchemaArns.SchemaArns', props);
    return resource.getResponseField('SchemaArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevelopmentSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListDevelopmentSchemaArns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevelopmentSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListDirectories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListDirectoriesRequest) {
  }

  public get directories(): shapes.CloudDirectoryDirectory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDirectories',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListDirectories.Directories'),
        outputPath: 'Directories',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          state: this.__input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDirectories.Directories', props);
    return resource.getResponseField('Directories') as unknown as shapes.CloudDirectoryDirectory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDirectories',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListDirectories.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          state: this.__input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDirectories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListFacetAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListFacetAttributesRequest) {
  }

  public get attributes(): shapes.CloudDirectoryFacetAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFacetAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListFacetAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFacetAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryFacetAttribute[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFacetAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListFacetAttributes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFacetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListFacetNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListFacetNamesRequest) {
  }

  public get facetNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFacetNames',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListFacetNames.FacetNames'),
        outputPath: 'FacetNames',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFacetNames.FacetNames', props);
    return resource.getResponseField('FacetNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFacetNames',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListFacetNames.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFacetNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListIncomingTypedLinks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListIncomingTypedLinksRequest) {
  }

  public get linkSpecifiers(): shapes.CloudDirectoryTypedLinkSpecifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIncomingTypedLinks',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListIncomingTypedLinks.LinkSpecifiers'),
        outputPath: 'LinkSpecifiers',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          FilterAttributeRanges: this.__input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.__input.filterTypedLink?.schemaArn,
            TypedLinkName: this.__input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIncomingTypedLinks.LinkSpecifiers', props);
    return resource.getResponseField('LinkSpecifiers') as unknown as shapes.CloudDirectoryTypedLinkSpecifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIncomingTypedLinks',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListIncomingTypedLinks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          FilterAttributeRanges: this.__input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.__input.filterTypedLink?.schemaArn,
            TypedLinkName: this.__input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIncomingTypedLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListIndex {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListIndexRequest) {
  }

  public get indexAttachments(): shapes.CloudDirectoryIndexAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIndex',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListIndex.IndexAttachments'),
        outputPath: 'IndexAttachments',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          RangesOnIndexedValues: this.__input.rangesOnIndexedValues,
          IndexReference: {
            Selector: this.__input.indexReference.selector,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIndex.IndexAttachments', props);
    return resource.getResponseField('IndexAttachments') as unknown as shapes.CloudDirectoryIndexAttachment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIndex',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListIndex.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          RangesOnIndexedValues: this.__input.rangesOnIndexedValues,
          IndexReference: {
            Selector: this.__input.indexReference.selector,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIndex.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListManagedSchemaArns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListManagedSchemaArnsRequest) {
  }

  public get schemaArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListManagedSchemaArns.SchemaArns'),
        outputPath: 'SchemaArns',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedSchemaArns.SchemaArns', props);
    return resource.getResponseField('SchemaArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListManagedSchemaArns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListObjectAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListObjectAttributesRequest) {
  }

  public get attributes(): shapes.CloudDirectoryAttributeKeyAndValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
          FacetFilter: {
            SchemaArn: this.__input.facetFilter?.schemaArn,
            FacetName: this.__input.facetFilter?.facetName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryAttributeKeyAndValue[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectAttributes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
          FacetFilter: {
            SchemaArn: this.__input.facetFilter?.schemaArn,
            FacetName: this.__input.facetFilter?.facetName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListObjectChildren {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListObjectChildrenRequest) {
  }

  public get children(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectChildren',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectChildren.Children'),
        outputPath: 'Children',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectChildren.Children', props);
    return resource.getResponseField('Children') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectChildren',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectChildren.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectChildren.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListObjectParentPaths {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListObjectParentPathsRequest) {
  }

  public get pathToObjectIdentifiersList(): shapes.CloudDirectoryPathToObjectIdentifiers[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectParentPaths',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectParentPaths.PathToObjectIdentifiersList'),
        outputPath: 'PathToObjectIdentifiersList',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectParentPaths.PathToObjectIdentifiersList', props);
    return resource.getResponseField('PathToObjectIdentifiersList') as unknown as shapes.CloudDirectoryPathToObjectIdentifiers[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectParentPaths',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectParentPaths.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectParentPaths.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListObjectParents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListObjectParentsRequest) {
  }

  public get parents(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectParents',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectParents.Parents'),
        outputPath: 'Parents',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
          IncludeAllLinksToEachParent: this.__input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectParents.Parents', props);
    return resource.getResponseField('Parents') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectParents',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectParents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
          IncludeAllLinksToEachParent: this.__input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectParents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get parentLinks(): shapes.CloudDirectoryObjectIdentifierAndLinkNameTuple[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectParents',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectParents.ParentLinks'),
        outputPath: 'ParentLinks',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
          IncludeAllLinksToEachParent: this.__input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectParents.ParentLinks', props);
    return resource.getResponseField('ParentLinks') as unknown as shapes.CloudDirectoryObjectIdentifierAndLinkNameTuple[];
  }

}

export class CloudDirectoryResponsesListObjectPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListObjectPoliciesRequest) {
  }

  public get attachedPolicyIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectPolicies',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectPolicies.AttachedPolicyIds'),
        outputPath: 'AttachedPolicyIds',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectPolicies.AttachedPolicyIds', props);
    return resource.getResponseField('AttachedPolicyIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listObjectPolicies',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListObjectPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListObjectPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListOutgoingTypedLinks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListOutgoingTypedLinksRequest) {
  }

  public get typedLinkSpecifiers(): shapes.CloudDirectoryTypedLinkSpecifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutgoingTypedLinks',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListOutgoingTypedLinks.TypedLinkSpecifiers'),
        outputPath: 'TypedLinkSpecifiers',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          FilterAttributeRanges: this.__input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.__input.filterTypedLink?.schemaArn,
            TypedLinkName: this.__input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutgoingTypedLinks.TypedLinkSpecifiers', props);
    return resource.getResponseField('TypedLinkSpecifiers') as unknown as shapes.CloudDirectoryTypedLinkSpecifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutgoingTypedLinks',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListOutgoingTypedLinks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          FilterAttributeRanges: this.__input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.__input.filterTypedLink?.schemaArn,
            TypedLinkName: this.__input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutgoingTypedLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListPolicyAttachments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListPolicyAttachmentsRequest) {
  }

  public get objectIdentifiers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyAttachments',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListPolicyAttachments.ObjectIdentifiers'),
        outputPath: 'ObjectIdentifiers',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          PolicyReference: {
            Selector: this.__input.policyReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyAttachments.ObjectIdentifiers', props);
    return resource.getResponseField('ObjectIdentifiers') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPolicyAttachments',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListPolicyAttachments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          PolicyReference: {
            Selector: this.__input.policyReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ConsistencyLevel: this.__input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPolicyAttachments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListPublishedSchemaArns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListPublishedSchemaArnsRequest) {
  }

  public get schemaArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublishedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListPublishedSchemaArns.SchemaArns'),
        outputPath: 'SchemaArns',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublishedSchemaArns.SchemaArns', props);
    return resource.getResponseField('SchemaArns') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPublishedSchemaArns',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListPublishedSchemaArns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPublishedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListTagsForResourceRequest) {
  }

  public get tags(): shapes.CloudDirectoryTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CloudDirectoryTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListTypedLinkFacetAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListTypedLinkFacetAttributesRequest) {
  }

  public get attributes(): shapes.CloudDirectoryTypedLinkAttributeDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypedLinkFacetAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTypedLinkFacetAttributes.Attributes'),
        outputPath: 'Attributes',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypedLinkFacetAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryTypedLinkAttributeDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypedLinkFacetAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTypedLinkFacetAttributes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypedLinkFacetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesListTypedLinkFacetNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryListTypedLinkFacetNamesRequest) {
  }

  public get facetNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypedLinkFacetNames',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTypedLinkFacetNames.FacetNames'),
        outputPath: 'FacetNames',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypedLinkFacetNames.FacetNames', props);
    return resource.getResponseField('FacetNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypedLinkFacetNames',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.ListTypedLinkFacetNames.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypedLinkFacetNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesLookupPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryLookupPolicyRequest) {
  }

  public get policyToPathList(): shapes.CloudDirectoryPolicyToPath[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupPolicy',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.LookupPolicy.PolicyToPathList'),
        outputPath: 'PolicyToPathList',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupPolicy.PolicyToPathList', props);
    return resource.getResponseField('PolicyToPathList') as unknown as shapes.CloudDirectoryPolicyToPath[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupPolicy',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.LookupPolicy.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupPolicy.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryResponsesPublishSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryPublishSchemaRequest) {
  }

  public get publishedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.PublishSchema.PublishedSchemaArn'),
        outputPath: 'PublishedSchemaArn',
        parameters: {
          DevelopmentSchemaArn: this.__input.developmentSchemaArn,
          Version: this.__input.version,
          MinorVersion: this.__input.minorVersion,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishSchema.PublishedSchemaArn', props);
    return resource.getResponseField('PublishedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesPutSchemaFromJson {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryPutSchemaFromJsonRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaFromJson',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.PutSchemaFromJson.Arn'),
        outputPath: 'Arn',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Document: this.__input.document,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaFromJson.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CloudDirectoryResponsesUpdateObjectAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryUpdateObjectAttributesRequest) {
  }

  public get objectIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateObjectAttributes',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpdateObjectAttributes.ObjectIdentifier'),
        outputPath: 'ObjectIdentifier',
        parameters: {
          DirectoryArn: this.__input.directoryArn,
          ObjectReference: {
            Selector: this.__input.objectReference.selector,
          },
          AttributeUpdates: this.__input.attributeUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateObjectAttributes.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryResponsesUpdateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryUpdateSchemaRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpdateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaArn: this.__input.schemaArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesUpgradeAppliedSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryUpgradeAppliedSchemaRequest) {
  }

  public get upgradedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'upgradeAppliedSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpgradeAppliedSchema.UpgradedSchemaArn'),
        outputPath: 'UpgradedSchemaArn',
        parameters: {
          PublishedSchemaArn: this.__input.publishedSchemaArn,
          DirectoryArn: this.__input.directoryArn,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpgradeAppliedSchema.UpgradedSchemaArn', props);
    return resource.getResponseField('UpgradedSchemaArn') as unknown as string;
  }

  public get directoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'upgradeAppliedSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpgradeAppliedSchema.DirectoryArn'),
        outputPath: 'DirectoryArn',
        parameters: {
          PublishedSchemaArn: this.__input.publishedSchemaArn,
          DirectoryArn: this.__input.directoryArn,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpgradeAppliedSchema.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryResponsesUpgradePublishedSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudDirectoryUpgradePublishedSchemaRequest) {
  }

  public get upgradedSchemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'upgradePublishedSchema',
        service: 'CloudDirectory',
        physicalResourceId: cr.PhysicalResourceId.of('CloudDirectory.UpgradePublishedSchema.UpgradedSchemaArn'),
        outputPath: 'UpgradedSchemaArn',
        parameters: {
          DevelopmentSchemaArn: this.__input.developmentSchemaArn,
          PublishedSchemaArn: this.__input.publishedSchemaArn,
          MinorVersion: this.__input.minorVersion,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpgradePublishedSchema.UpgradedSchemaArn', props);
    return resource.getResponseField('UpgradedSchemaArn') as unknown as string;
  }

}

