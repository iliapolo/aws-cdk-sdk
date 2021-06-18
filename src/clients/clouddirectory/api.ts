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

  public applySchema(input: shapes.CloudDirectoryApplySchemaRequest): CloudDirectoryApplySchema {
    return new CloudDirectoryApplySchema(this, 'ApplySchema', this.__resources, input);
  }

  public attachObject(input: shapes.CloudDirectoryAttachObjectRequest): CloudDirectoryAttachObject {
    return new CloudDirectoryAttachObject(this, 'AttachObject', this.__resources, input);
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

  public attachToIndex(input: shapes.CloudDirectoryAttachToIndexRequest): CloudDirectoryAttachToIndex {
    return new CloudDirectoryAttachToIndex(this, 'AttachToIndex', this.__resources, input);
  }

  public attachTypedLink(input: shapes.CloudDirectoryAttachTypedLinkRequest): CloudDirectoryAttachTypedLink {
    return new CloudDirectoryAttachTypedLink(this, 'AttachTypedLink', this.__resources, input);
  }

  public batchRead(input: shapes.CloudDirectoryBatchReadRequest): CloudDirectoryBatchRead {
    return new CloudDirectoryBatchRead(this, 'BatchRead', this.__resources, input);
  }

  public batchWrite(input: shapes.CloudDirectoryBatchWriteRequest): CloudDirectoryBatchWrite {
    return new CloudDirectoryBatchWrite(this, 'BatchWrite', this.__resources, input);
  }

  public createDirectory(input: shapes.CloudDirectoryCreateDirectoryRequest): CloudDirectoryCreateDirectory {
    return new CloudDirectoryCreateDirectory(this, 'CreateDirectory', this.__resources, input);
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

  public createIndex(input: shapes.CloudDirectoryCreateIndexRequest): CloudDirectoryCreateIndex {
    return new CloudDirectoryCreateIndex(this, 'CreateIndex', this.__resources, input);
  }

  public createObject(input: shapes.CloudDirectoryCreateObjectRequest): CloudDirectoryCreateObject {
    return new CloudDirectoryCreateObject(this, 'CreateObject', this.__resources, input);
  }

  public createSchema(input: shapes.CloudDirectoryCreateSchemaRequest): CloudDirectoryCreateSchema {
    return new CloudDirectoryCreateSchema(this, 'CreateSchema', this.__resources, input);
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

  public deleteDirectory(input: shapes.CloudDirectoryDeleteDirectoryRequest): CloudDirectoryDeleteDirectory {
    return new CloudDirectoryDeleteDirectory(this, 'DeleteDirectory', this.__resources, input);
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

  public deleteSchema(input: shapes.CloudDirectoryDeleteSchemaRequest): CloudDirectoryDeleteSchema {
    return new CloudDirectoryDeleteSchema(this, 'DeleteSchema', this.__resources, input);
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

  public detachFromIndex(input: shapes.CloudDirectoryDetachFromIndexRequest): CloudDirectoryDetachFromIndex {
    return new CloudDirectoryDetachFromIndex(this, 'DetachFromIndex', this.__resources, input);
  }

  public detachObject(input: shapes.CloudDirectoryDetachObjectRequest): CloudDirectoryDetachObject {
    return new CloudDirectoryDetachObject(this, 'DetachObject', this.__resources, input);
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

  public disableDirectory(input: shapes.CloudDirectoryDisableDirectoryRequest): CloudDirectoryDisableDirectory {
    return new CloudDirectoryDisableDirectory(this, 'DisableDirectory', this.__resources, input);
  }

  public enableDirectory(input: shapes.CloudDirectoryEnableDirectoryRequest): CloudDirectoryEnableDirectory {
    return new CloudDirectoryEnableDirectory(this, 'EnableDirectory', this.__resources, input);
  }

  public fetchAppliedSchemaVersion(input: shapes.CloudDirectoryGetAppliedSchemaVersionRequest): CloudDirectoryFetchAppliedSchemaVersion {
    return new CloudDirectoryFetchAppliedSchemaVersion(this, 'FetchAppliedSchemaVersion', this.__resources, input);
  }

  public fetchDirectory(input: shapes.CloudDirectoryGetDirectoryRequest): CloudDirectoryFetchDirectory {
    return new CloudDirectoryFetchDirectory(this, 'FetchDirectory', this.__resources, input);
  }

  public fetchFacet(input: shapes.CloudDirectoryGetFacetRequest): CloudDirectoryFetchFacet {
    return new CloudDirectoryFetchFacet(this, 'FetchFacet', this.__resources, input);
  }

  public fetchLinkAttributes(input: shapes.CloudDirectoryGetLinkAttributesRequest): CloudDirectoryFetchLinkAttributes {
    return new CloudDirectoryFetchLinkAttributes(this, 'FetchLinkAttributes', this.__resources, input);
  }

  public fetchObjectAttributes(input: shapes.CloudDirectoryGetObjectAttributesRequest): CloudDirectoryFetchObjectAttributes {
    return new CloudDirectoryFetchObjectAttributes(this, 'FetchObjectAttributes', this.__resources, input);
  }

  public fetchObjectInformation(input: shapes.CloudDirectoryGetObjectInformationRequest): CloudDirectoryFetchObjectInformation {
    return new CloudDirectoryFetchObjectInformation(this, 'FetchObjectInformation', this.__resources, input);
  }

  public fetchSchemaAsJson(input: shapes.CloudDirectoryGetSchemaAsJsonRequest): CloudDirectoryFetchSchemaAsJson {
    return new CloudDirectoryFetchSchemaAsJson(this, 'FetchSchemaAsJson', this.__resources, input);
  }

  public fetchTypedLinkFacetInformation(input: shapes.CloudDirectoryGetTypedLinkFacetInformationRequest): CloudDirectoryFetchTypedLinkFacetInformation {
    return new CloudDirectoryFetchTypedLinkFacetInformation(this, 'FetchTypedLinkFacetInformation', this.__resources, input);
  }

  public listAppliedSchemaArns(input: shapes.CloudDirectoryListAppliedSchemaArnsRequest): CloudDirectoryListAppliedSchemaArns {
    return new CloudDirectoryListAppliedSchemaArns(this, 'ListAppliedSchemaArns', this.__resources, input);
  }

  public listAttachedIndices(input: shapes.CloudDirectoryListAttachedIndicesRequest): CloudDirectoryListAttachedIndices {
    return new CloudDirectoryListAttachedIndices(this, 'ListAttachedIndices', this.__resources, input);
  }

  public listDevelopmentSchemaArns(input: shapes.CloudDirectoryListDevelopmentSchemaArnsRequest): CloudDirectoryListDevelopmentSchemaArns {
    return new CloudDirectoryListDevelopmentSchemaArns(this, 'ListDevelopmentSchemaArns', this.__resources, input);
  }

  public listDirectories(input: shapes.CloudDirectoryListDirectoriesRequest): CloudDirectoryListDirectories {
    return new CloudDirectoryListDirectories(this, 'ListDirectories', this.__resources, input);
  }

  public listFacetAttributes(input: shapes.CloudDirectoryListFacetAttributesRequest): CloudDirectoryListFacetAttributes {
    return new CloudDirectoryListFacetAttributes(this, 'ListFacetAttributes', this.__resources, input);
  }

  public listFacetNames(input: shapes.CloudDirectoryListFacetNamesRequest): CloudDirectoryListFacetNames {
    return new CloudDirectoryListFacetNames(this, 'ListFacetNames', this.__resources, input);
  }

  public listIncomingTypedLinks(input: shapes.CloudDirectoryListIncomingTypedLinksRequest): CloudDirectoryListIncomingTypedLinks {
    return new CloudDirectoryListIncomingTypedLinks(this, 'ListIncomingTypedLinks', this.__resources, input);
  }

  public listIndex(input: shapes.CloudDirectoryListIndexRequest): CloudDirectoryListIndex {
    return new CloudDirectoryListIndex(this, 'ListIndex', this.__resources, input);
  }

  public listManagedSchemaArns(input: shapes.CloudDirectoryListManagedSchemaArnsRequest): CloudDirectoryListManagedSchemaArns {
    return new CloudDirectoryListManagedSchemaArns(this, 'ListManagedSchemaArns', this.__resources, input);
  }

  public listObjectAttributes(input: shapes.CloudDirectoryListObjectAttributesRequest): CloudDirectoryListObjectAttributes {
    return new CloudDirectoryListObjectAttributes(this, 'ListObjectAttributes', this.__resources, input);
  }

  public listObjectChildren(input: shapes.CloudDirectoryListObjectChildrenRequest): CloudDirectoryListObjectChildren {
    return new CloudDirectoryListObjectChildren(this, 'ListObjectChildren', this.__resources, input);
  }

  public listObjectParentPaths(input: shapes.CloudDirectoryListObjectParentPathsRequest): CloudDirectoryListObjectParentPaths {
    return new CloudDirectoryListObjectParentPaths(this, 'ListObjectParentPaths', this.__resources, input);
  }

  public listObjectParents(input: shapes.CloudDirectoryListObjectParentsRequest): CloudDirectoryListObjectParents {
    return new CloudDirectoryListObjectParents(this, 'ListObjectParents', this.__resources, input);
  }

  public listObjectPolicies(input: shapes.CloudDirectoryListObjectPoliciesRequest): CloudDirectoryListObjectPolicies {
    return new CloudDirectoryListObjectPolicies(this, 'ListObjectPolicies', this.__resources, input);
  }

  public listOutgoingTypedLinks(input: shapes.CloudDirectoryListOutgoingTypedLinksRequest): CloudDirectoryListOutgoingTypedLinks {
    return new CloudDirectoryListOutgoingTypedLinks(this, 'ListOutgoingTypedLinks', this.__resources, input);
  }

  public listPolicyAttachments(input: shapes.CloudDirectoryListPolicyAttachmentsRequest): CloudDirectoryListPolicyAttachments {
    return new CloudDirectoryListPolicyAttachments(this, 'ListPolicyAttachments', this.__resources, input);
  }

  public listPublishedSchemaArns(input: shapes.CloudDirectoryListPublishedSchemaArnsRequest): CloudDirectoryListPublishedSchemaArns {
    return new CloudDirectoryListPublishedSchemaArns(this, 'ListPublishedSchemaArns', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CloudDirectoryListTagsForResourceRequest): CloudDirectoryListTagsForResource {
    return new CloudDirectoryListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTypedLinkFacetAttributes(input: shapes.CloudDirectoryListTypedLinkFacetAttributesRequest): CloudDirectoryListTypedLinkFacetAttributes {
    return new CloudDirectoryListTypedLinkFacetAttributes(this, 'ListTypedLinkFacetAttributes', this.__resources, input);
  }

  public listTypedLinkFacetNames(input: shapes.CloudDirectoryListTypedLinkFacetNamesRequest): CloudDirectoryListTypedLinkFacetNames {
    return new CloudDirectoryListTypedLinkFacetNames(this, 'ListTypedLinkFacetNames', this.__resources, input);
  }

  public lookupPolicy(input: shapes.CloudDirectoryLookupPolicyRequest): CloudDirectoryLookupPolicy {
    return new CloudDirectoryLookupPolicy(this, 'LookupPolicy', this.__resources, input);
  }

  public publishSchema(input: shapes.CloudDirectoryPublishSchemaRequest): CloudDirectoryPublishSchema {
    return new CloudDirectoryPublishSchema(this, 'PublishSchema', this.__resources, input);
  }

  public putSchemaFromJson(input: shapes.CloudDirectoryPutSchemaFromJsonRequest): CloudDirectoryPutSchemaFromJson {
    return new CloudDirectoryPutSchemaFromJson(this, 'PutSchemaFromJson', this.__resources, input);
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

  public updateObjectAttributes(input: shapes.CloudDirectoryUpdateObjectAttributesRequest): CloudDirectoryUpdateObjectAttributes {
    return new CloudDirectoryUpdateObjectAttributes(this, 'UpdateObjectAttributes', this.__resources, input);
  }

  public updateSchema(input: shapes.CloudDirectoryUpdateSchemaRequest): CloudDirectoryUpdateSchema {
    return new CloudDirectoryUpdateSchema(this, 'UpdateSchema', this.__resources, input);
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

  public upgradeAppliedSchema(input: shapes.CloudDirectoryUpgradeAppliedSchemaRequest): CloudDirectoryUpgradeAppliedSchema {
    return new CloudDirectoryUpgradeAppliedSchema(this, 'UpgradeAppliedSchema', this.__resources, input);
  }

  public upgradePublishedSchema(input: shapes.CloudDirectoryUpgradePublishedSchemaRequest): CloudDirectoryUpgradePublishedSchema {
    return new CloudDirectoryUpgradePublishedSchema(this, 'UpgradePublishedSchema', this.__resources, input);
  }

}

export class CloudDirectoryApplySchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryApplySchemaRequest) {
    super(scope, id);
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
          PublishedSchemaArn: this.input.publishedSchemaArn,
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplySchema.AppliedSchemaArn', props);
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
          PublishedSchemaArn: this.input.publishedSchemaArn,
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplySchema.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryAttachObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachObjectRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ParentReference: {
            Selector: this.input.parentReference.selector,
          },
          ChildReference: {
            Selector: this.input.childReference.selector,
          },
          LinkName: this.input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachObject.AttachedObjectIdentifier', props);
    return resource.getResponseField('AttachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryAttachToIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachToIndexRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          IndexReference: {
            Selector: this.input.indexReference.selector,
          },
          TargetReference: {
            Selector: this.input.targetReference.selector,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachToIndex.AttachedObjectIdentifier', props);
    return resource.getResponseField('AttachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryAttachTypedLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachTypedLinkRequest) {
    super(scope, id);
  }

  public get typedLinkSpecifier(): CloudDirectoryAttachTypedLinkTypedLinkSpecifier {
    return new CloudDirectoryAttachTypedLinkTypedLinkSpecifier(this, 'TypedLinkSpecifier', this.__resources, this.input);
  }

}

export class CloudDirectoryAttachTypedLinkTypedLinkSpecifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachTypedLinkRequest) {
    super(scope, id);
  }

  public get typedLinkFacet(): CloudDirectoryAttachTypedLinkTypedLinkSpecifierTypedLinkFacet {
    return new CloudDirectoryAttachTypedLinkTypedLinkSpecifierTypedLinkFacet(this, 'TypedLinkFacet', this.__resources, this.input);
  }

  public get sourceObjectReference(): CloudDirectoryAttachTypedLinkTypedLinkSpecifierSourceObjectReference {
    return new CloudDirectoryAttachTypedLinkTypedLinkSpecifierSourceObjectReference(this, 'SourceObjectReference', this.__resources, this.input);
  }

  public get targetObjectReference(): CloudDirectoryAttachTypedLinkTypedLinkSpecifierTargetObjectReference {
    return new CloudDirectoryAttachTypedLinkTypedLinkSpecifierTargetObjectReference(this, 'TargetObjectReference', this.__resources, this.input);
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
          DirectoryArn: this.input.directoryArn,
          SourceObjectReference: {
            Selector: this.input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.input.typedLinkFacet.schemaArn,
            TypedLinkName: this.input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachTypedLink.TypedLinkSpecifier.IdentityAttributeValues', props);
    return resource.getResponseField('TypedLinkSpecifier.IdentityAttributeValues') as unknown as shapes.CloudDirectoryAttributeNameAndValue[];
  }

}

export class CloudDirectoryAttachTypedLinkTypedLinkSpecifierTypedLinkFacet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachTypedLinkRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          SourceObjectReference: {
            Selector: this.input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.input.typedLinkFacet.schemaArn,
            TypedLinkName: this.input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.SchemaArn', props);
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
          DirectoryArn: this.input.directoryArn,
          SourceObjectReference: {
            Selector: this.input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.input.typedLinkFacet.schemaArn,
            TypedLinkName: this.input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachTypedLink.TypedLinkSpecifier.TypedLinkFacet.TypedLinkName', props);
    return resource.getResponseField('TypedLinkSpecifier.TypedLinkFacet.TypedLinkName') as unknown as string;
  }

}

export class CloudDirectoryAttachTypedLinkTypedLinkSpecifierSourceObjectReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachTypedLinkRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          SourceObjectReference: {
            Selector: this.input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.input.typedLinkFacet.schemaArn,
            TypedLinkName: this.input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachTypedLink.TypedLinkSpecifier.SourceObjectReference.Selector', props);
    return resource.getResponseField('TypedLinkSpecifier.SourceObjectReference.Selector') as unknown as string;
  }

}

export class CloudDirectoryAttachTypedLinkTypedLinkSpecifierTargetObjectReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryAttachTypedLinkRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          SourceObjectReference: {
            Selector: this.input.sourceObjectReference.selector,
          },
          TargetObjectReference: {
            Selector: this.input.targetObjectReference.selector,
          },
          TypedLinkFacet: {
            SchemaArn: this.input.typedLinkFacet.schemaArn,
            TypedLinkName: this.input.typedLinkFacet.typedLinkName,
          },
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachTypedLink.TypedLinkSpecifier.TargetObjectReference.Selector', props);
    return resource.getResponseField('TypedLinkSpecifier.TargetObjectReference.Selector') as unknown as string;
  }

}

export class CloudDirectoryBatchRead extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryBatchReadRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          Operations: this.input.operations,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchRead.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.CloudDirectoryBatchReadOperationResponse[];
  }

}

export class CloudDirectoryBatchWrite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryBatchWriteRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          Operations: this.input.operations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchWrite.Responses', props);
    return resource.getResponseField('Responses') as unknown as shapes.CloudDirectoryBatchWriteOperationResponse[];
  }

}

export class CloudDirectoryCreateDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryCreateDirectoryRequest) {
    super(scope, id);
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
          Name: this.input.name,
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectory.DirectoryArn', props);
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
          Name: this.input.name,
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectory.Name', props);
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
          Name: this.input.name,
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectory.ObjectIdentifier', props);
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
          Name: this.input.name,
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectory.AppliedSchemaArn', props);
    return resource.getResponseField('AppliedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryCreateIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryCreateIndexRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          OrderedIndexedAttributeList: this.input.orderedIndexedAttributeList,
          IsUnique: this.input.isUnique,
          ParentReference: {
            Selector: this.input.parentReference?.selector,
          },
          LinkName: this.input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIndex.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryCreateObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryCreateObjectRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          SchemaFacets: this.input.schemaFacets,
          ObjectAttributeList: this.input.objectAttributeList,
          ParentReference: {
            Selector: this.input.parentReference?.selector,
          },
          LinkName: this.input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateObject.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryCreateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryCreateSchemaRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryDeleteDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryDeleteDirectoryRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryDeleteSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryDeleteSchemaRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryDetachFromIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryDetachFromIndexRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          IndexReference: {
            Selector: this.input.indexReference.selector,
          },
          TargetReference: {
            Selector: this.input.targetReference.selector,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachFromIndex.DetachedObjectIdentifier', props);
    return resource.getResponseField('DetachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryDetachObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryDetachObjectRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ParentReference: {
            Selector: this.input.parentReference.selector,
          },
          LinkName: this.input.linkName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachObject.DetachedObjectIdentifier', props);
    return resource.getResponseField('DetachedObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryDisableDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryDisableDirectoryRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryEnableDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryEnableDirectoryRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableDirectory.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryFetchAppliedSchemaVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetAppliedSchemaVersionRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAppliedSchemaVersion.AppliedSchemaArn', props);
    return resource.getResponseField('AppliedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryFetchDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetDirectoryRequest) {
    super(scope, id);
  }

  public get directory(): CloudDirectoryFetchDirectoryDirectory {
    return new CloudDirectoryFetchDirectoryDirectory(this, 'Directory', this.__resources, this.input);
  }

}

export class CloudDirectoryFetchDirectoryDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetDirectoryRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDirectory.Directory.Name', props);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDirectory.Directory.DirectoryArn', props);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDirectory.Directory.State', props);
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
          DirectoryArn: this.input.directoryArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDirectory.Directory.CreationDateTime', props);
    return resource.getResponseField('Directory.CreationDateTime') as unknown as string;
  }

}

export class CloudDirectoryFetchFacet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetFacetRequest) {
    super(scope, id);
  }

  public get facet(): CloudDirectoryFetchFacetFacet {
    return new CloudDirectoryFetchFacetFacet(this, 'Facet', this.__resources, this.input);
  }

}

export class CloudDirectoryFetchFacetFacet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetFacetRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFacet.Facet.Name', props);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFacet.Facet.ObjectType', props);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetFacet.Facet.FacetStyle', props);
    return resource.getResponseField('Facet.FacetStyle') as unknown as string;
  }

}

export class CloudDirectoryFetchLinkAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetLinkAttributesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          TypedLinkSpecifier: {
            TypedLinkFacet: {
              SchemaArn: this.input.typedLinkSpecifier.typedLinkFacet.schemaArn,
              TypedLinkName: this.input.typedLinkSpecifier.typedLinkFacet.typedLinkName,
            },
            SourceObjectReference: {
              Selector: this.input.typedLinkSpecifier.sourceObjectReference.selector,
            },
            TargetObjectReference: {
              Selector: this.input.typedLinkSpecifier.targetObjectReference.selector,
            },
            IdentityAttributeValues: this.input.typedLinkSpecifier.identityAttributeValues,
          },
          AttributeNames: this.input.attributeNames,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLinkAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryAttributeKeyAndValue[];
  }

}

export class CloudDirectoryFetchObjectAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetObjectAttributesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          ConsistencyLevel: this.input.consistencyLevel,
          SchemaFacet: {
            SchemaArn: this.input.schemaFacet.schemaArn,
            FacetName: this.input.schemaFacet.facetName,
          },
          AttributeNames: this.input.attributeNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectAttributes.Attributes', props);
    return resource.getResponseField('Attributes') as unknown as shapes.CloudDirectoryAttributeKeyAndValue[];
  }

}

export class CloudDirectoryFetchObjectInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetObjectInformationRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectInformation.SchemaFacets', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObjectInformation.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryFetchSchemaAsJson extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetSchemaAsJsonRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaAsJson.Name', props);
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
          SchemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaAsJson.Document', props);
    return resource.getResponseField('Document') as unknown as string;
  }

}

export class CloudDirectoryFetchTypedLinkFacetInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryGetTypedLinkFacetInformationRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTypedLinkFacetInformation.IdentityAttributeOrder', props);
    return resource.getResponseField('IdentityAttributeOrder') as unknown as string[];
  }

}

export class CloudDirectoryListAppliedSchemaArns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListAppliedSchemaArnsRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppliedSchemaArns.SchemaArns', props);
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
          DirectoryArn: this.input.directoryArn,
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppliedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListAttachedIndices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListAttachedIndicesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          TargetReference: {
            Selector: this.input.targetReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedIndices.IndexAttachments', props);
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
          DirectoryArn: this.input.directoryArn,
          TargetReference: {
            Selector: this.input.targetReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttachedIndices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListDevelopmentSchemaArns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListDevelopmentSchemaArnsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevelopmentSchemaArns.SchemaArns', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevelopmentSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListDirectories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListDirectoriesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          state: this.input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDirectories.Directories', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          state: this.input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDirectories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListFacetAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListFacetAttributesRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFacetAttributes.Attributes', props);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFacetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListFacetNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListFacetNamesRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFacetNames.FacetNames', props);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFacetNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListIncomingTypedLinks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListIncomingTypedLinksRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          FilterAttributeRanges: this.input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.input.filterTypedLink?.schemaArn,
            TypedLinkName: this.input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIncomingTypedLinks.LinkSpecifiers', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          FilterAttributeRanges: this.input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.input.filterTypedLink?.schemaArn,
            TypedLinkName: this.input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIncomingTypedLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListIndex extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListIndexRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          RangesOnIndexedValues: this.input.rangesOnIndexedValues,
          IndexReference: {
            Selector: this.input.indexReference.selector,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIndex.IndexAttachments', props);
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
          DirectoryArn: this.input.directoryArn,
          RangesOnIndexedValues: this.input.rangesOnIndexedValues,
          IndexReference: {
            Selector: this.input.indexReference.selector,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIndex.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListManagedSchemaArns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListManagedSchemaArnsRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListManagedSchemaArns.SchemaArns', props);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListManagedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListObjectAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListObjectAttributesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
          FacetFilter: {
            SchemaArn: this.input.facetFilter?.schemaArn,
            FacetName: this.input.facetFilter?.facetName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectAttributes.Attributes', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
          FacetFilter: {
            SchemaArn: this.input.facetFilter?.schemaArn,
            FacetName: this.input.facetFilter?.facetName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListObjectChildren extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListObjectChildrenRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectChildren.Children', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectChildren.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListObjectParentPaths extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListObjectParentPathsRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectParentPaths.PathToObjectIdentifiersList', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectParentPaths.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListObjectParents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListObjectParentsRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
          IncludeAllLinksToEachParent: this.input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectParents.Parents', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
          IncludeAllLinksToEachParent: this.input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectParents.NextToken', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
          IncludeAllLinksToEachParent: this.input.includeAllLinksToEachParent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectParents.ParentLinks', props);
    return resource.getResponseField('ParentLinks') as unknown as shapes.CloudDirectoryObjectIdentifierAndLinkNameTuple[];
  }

}

export class CloudDirectoryListObjectPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListObjectPoliciesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectPolicies.AttachedPolicyIds', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListObjectPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListOutgoingTypedLinks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListOutgoingTypedLinksRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          FilterAttributeRanges: this.input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.input.filterTypedLink?.schemaArn,
            TypedLinkName: this.input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutgoingTypedLinks.TypedLinkSpecifiers', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          FilterAttributeRanges: this.input.filterAttributeRanges,
          FilterTypedLink: {
            SchemaArn: this.input.filterTypedLink?.schemaArn,
            TypedLinkName: this.input.filterTypedLink?.typedLinkName,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutgoingTypedLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListPolicyAttachments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListPolicyAttachmentsRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          PolicyReference: {
            Selector: this.input.policyReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyAttachments.ObjectIdentifiers', props);
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
          DirectoryArn: this.input.directoryArn,
          PolicyReference: {
            Selector: this.input.policyReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ConsistencyLevel: this.input.consistencyLevel,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPolicyAttachments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListPublishedSchemaArns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListPublishedSchemaArnsRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublishedSchemaArns.SchemaArns', props);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPublishedSchemaArns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListTypedLinkFacetAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListTypedLinkFacetAttributesRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypedLinkFacetAttributes.Attributes', props);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypedLinkFacetAttributes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryListTypedLinkFacetNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryListTypedLinkFacetNamesRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypedLinkFacetNames.FacetNames', props);
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
          SchemaArn: this.input.schemaArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypedLinkFacetNames.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryLookupPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryLookupPolicyRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupPolicy.PolicyToPathList', props);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupPolicy.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudDirectoryPublishSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryPublishSchemaRequest) {
    super(scope, id);
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
          DevelopmentSchemaArn: this.input.developmentSchemaArn,
          Version: this.input.version,
          MinorVersion: this.input.minorVersion,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishSchema.PublishedSchemaArn', props);
    return resource.getResponseField('PublishedSchemaArn') as unknown as string;
  }

}

export class CloudDirectoryPutSchemaFromJson extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryPutSchemaFromJsonRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Document: this.input.document,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaFromJson.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

}

export class CloudDirectoryUpdateObjectAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryUpdateObjectAttributesRequest) {
    super(scope, id);
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
          DirectoryArn: this.input.directoryArn,
          ObjectReference: {
            Selector: this.input.objectReference.selector,
          },
          AttributeUpdates: this.input.attributeUpdates,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateObjectAttributes.ObjectIdentifier', props);
    return resource.getResponseField('ObjectIdentifier') as unknown as string;
  }

}

export class CloudDirectoryUpdateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryUpdateSchemaRequest) {
    super(scope, id);
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
          SchemaArn: this.input.schemaArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

}

export class CloudDirectoryUpgradeAppliedSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryUpgradeAppliedSchemaRequest) {
    super(scope, id);
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
          PublishedSchemaArn: this.input.publishedSchemaArn,
          DirectoryArn: this.input.directoryArn,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpgradeAppliedSchema.UpgradedSchemaArn', props);
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
          PublishedSchemaArn: this.input.publishedSchemaArn,
          DirectoryArn: this.input.directoryArn,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpgradeAppliedSchema.DirectoryArn', props);
    return resource.getResponseField('DirectoryArn') as unknown as string;
  }

}

export class CloudDirectoryUpgradePublishedSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudDirectoryUpgradePublishedSchemaRequest) {
    super(scope, id);
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
          DevelopmentSchemaArn: this.input.developmentSchemaArn,
          PublishedSchemaArn: this.input.publishedSchemaArn,
          MinorVersion: this.input.minorVersion,
          DryRun: this.input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpgradePublishedSchema.UpgradedSchemaArn', props);
    return resource.getResponseField('UpgradedSchemaArn') as unknown as string;
  }

}

