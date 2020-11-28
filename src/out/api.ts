import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as outputs from './outputs';
import * as shapes from './shapes';
export class ES extends cdk.Construct {
  constructor(scope: cdk.Construct, private readonly resources: string[]) {
    super(scope, 'ES');
  }
  /**
   * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
   */
  public acceptInboundCrossClusterSearchConnection(input: shapes.AcceptInboundCrossClusterSearchConnectionRequest): outputs.AcceptInboundCrossClusterSearchConnectionResponse {
    return new outputs.AcceptInboundCrossClusterSearchConnectionResponse();
  }
  /**
   * <p>Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a></p>
   */
  public addTags(input: shapes.AddTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'addTags',
        service: 'ES',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'AddTags', props);
  }
  /**
   * <p>Associates a package with an Amazon ES domain.</p>
   */
  public associatePackage(input: shapes.AssociatePackageRequest): outputs.AssociatePackageResponse {
    return new outputs.AssociatePackageResponse();
  }
  /**
   * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
   */
  public cancelElasticsearchServiceSoftwareUpdate(input: shapes.CancelElasticsearchServiceSoftwareUpdateRequest): outputs.CancelElasticsearchServiceSoftwareUpdateResponse {
    return new outputs.CancelElasticsearchServiceSoftwareUpdateResponse();
  }
  /**
   * <p>Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   */
  public createElasticsearchDomain(input: shapes.CreateElasticsearchDomainRequest): outputs.CreateElasticsearchDomainResponse {
    return new outputs.CreateElasticsearchDomainResponse();
  }
  /**
   * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
   */
  public createOutboundCrossClusterSearchConnection(input: shapes.CreateOutboundCrossClusterSearchConnectionRequest): outputs.CreateOutboundCrossClusterSearchConnectionResponse {
    return new outputs.CreateOutboundCrossClusterSearchConnectionResponse();
  }
  /**
   * <p>Create a package for use with Amazon ES domains.</p>
   */
  public createPackage(input: shapes.CreatePackageRequest): outputs.CreatePackageResponse {
    return new outputs.CreatePackageResponse();
  }
  /**
   * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
   */
  public deleteElasticsearchDomain(input: shapes.DeleteElasticsearchDomainRequest): outputs.DeleteElasticsearchDomainResponse {
    return new outputs.DeleteElasticsearchDomainResponse();
  }
  /**
   * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>
   */
  public deleteElasticsearchServiceRole(): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteElasticsearchServiceRole',
        service: 'ES',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'DeleteElasticsearchServiceRole', props);
  }
  /**
   * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
   */
  public deleteInboundCrossClusterSearchConnection(input: shapes.DeleteInboundCrossClusterSearchConnectionRequest): outputs.DeleteInboundCrossClusterSearchConnectionResponse {
    return new outputs.DeleteInboundCrossClusterSearchConnectionResponse();
  }
  /**
   * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
   */
  public deleteOutboundCrossClusterSearchConnection(input: shapes.DeleteOutboundCrossClusterSearchConnectionRequest): outputs.DeleteOutboundCrossClusterSearchConnectionResponse {
    return new outputs.DeleteOutboundCrossClusterSearchConnectionResponse();
  }
  /**
   * <p>Delete the package.</p>
   */
  public deletePackage(input: shapes.DeletePackageRequest): outputs.DeletePackageResponse {
    return new outputs.DeletePackageResponse();
  }
  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
   */
  public describeElasticsearchDomain(input: shapes.DescribeElasticsearchDomainRequest): outputs.DescribeElasticsearchDomainResponse {
    return new outputs.DescribeElasticsearchDomainResponse();
  }
  /**
   * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
   */
  public describeElasticsearchDomainConfig(input: shapes.DescribeElasticsearchDomainConfigRequest): outputs.DescribeElasticsearchDomainConfigResponse {
    return new outputs.DescribeElasticsearchDomainConfigResponse();
  }
  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
   */
  public describeElasticsearchDomains(input: shapes.DescribeElasticsearchDomainsRequest): outputs.DescribeElasticsearchDomainsResponse {
    return new outputs.DescribeElasticsearchDomainsResponse();
  }
  /**
   * <p> Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. </p>
   */
  public describeElasticsearchInstanceTypeLimits(input: shapes.DescribeElasticsearchInstanceTypeLimitsRequest): outputs.DescribeElasticsearchInstanceTypeLimitsResponse {
    return new outputs.DescribeElasticsearchInstanceTypeLimitsResponse();
  }
  /**
   * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
   */
  public describeInboundCrossClusterSearchConnections(input: shapes.DescribeInboundCrossClusterSearchConnectionsRequest): outputs.DescribeInboundCrossClusterSearchConnectionsResponse {
    return new outputs.DescribeInboundCrossClusterSearchConnectionsResponse();
  }
  /**
   * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
   */
  public describeOutboundCrossClusterSearchConnections(input: shapes.DescribeOutboundCrossClusterSearchConnectionsRequest): outputs.DescribeOutboundCrossClusterSearchConnectionsResponse {
    return new outputs.DescribeOutboundCrossClusterSearchConnectionsResponse();
  }
  /**
   * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
   */
  public describePackages(input: shapes.DescribePackagesRequest): outputs.DescribePackagesResponse {
    return new outputs.DescribePackagesResponse();
  }
  /**
   * <p>Lists available reserved Elasticsearch instance offerings.</p>
   */
  public describeReservedElasticsearchInstanceOfferings(input: shapes.DescribeReservedElasticsearchInstanceOfferingsRequest): outputs.DescribeReservedElasticsearchInstanceOfferingsResponse {
    return new outputs.DescribeReservedElasticsearchInstanceOfferingsResponse();
  }
  /**
   * <p>Returns information about reserved Elasticsearch instances for this account.</p>
   */
  public describeReservedElasticsearchInstances(input: shapes.DescribeReservedElasticsearchInstancesRequest): outputs.DescribeReservedElasticsearchInstancesResponse {
    return new outputs.DescribeReservedElasticsearchInstancesResponse();
  }
  /**
   * <p>Dissociates a package from the Amazon ES domain.</p>
   */
  public dissociatePackage(input: shapes.DissociatePackageRequest): outputs.DissociatePackageResponse {
    return new outputs.DissociatePackageResponse();
  }
  /**
   * <p> Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain. </p>
   */
  public getCompatibleElasticsearchVersions(input: shapes.GetCompatibleElasticsearchVersionsRequest): outputs.GetCompatibleElasticsearchVersionsResponse {
    return new outputs.GetCompatibleElasticsearchVersionsResponse();
  }
  /**
   * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
   */
  public getPackageVersionHistory(input: shapes.GetPackageVersionHistoryRequest): outputs.GetPackageVersionHistoryResponse {
    return new outputs.GetPackageVersionHistoryResponse();
  }
  /**
   * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
   */
  public getUpgradeHistory(input: shapes.GetUpgradeHistoryRequest): outputs.GetUpgradeHistoryResponse {
    return new outputs.GetUpgradeHistoryResponse();
  }
  /**
   * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
   */
  public getUpgradeStatus(input: shapes.GetUpgradeStatusRequest): outputs.GetUpgradeStatusResponse {
    return new outputs.GetUpgradeStatusResponse();
  }
  /**
   * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
   */
  public listDomainNames(): outputs.ListDomainNamesResponse {
    return new outputs.ListDomainNamesResponse();
  }
  /**
   * <p>Lists all Amazon ES domains associated with the package.</p>
   */
  public listDomainsForPackage(input: shapes.ListDomainsForPackageRequest): outputs.ListDomainsForPackageResponse {
    return new outputs.ListDomainsForPackageResponse();
  }
  /**
   * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
   */
  public listElasticsearchInstanceTypes(input: shapes.ListElasticsearchInstanceTypesRequest): outputs.ListElasticsearchInstanceTypesResponse {
    return new outputs.ListElasticsearchInstanceTypesResponse();
  }
  /**
   * <p>List all supported Elasticsearch versions</p>
   */
  public listElasticsearchVersions(input: shapes.ListElasticsearchVersionsRequest): outputs.ListElasticsearchVersionsResponse {
    return new outputs.ListElasticsearchVersionsResponse();
  }
  /**
   * <p>Lists all packages associated with the Amazon ES domain.</p>
   */
  public listPackagesForDomain(input: shapes.ListPackagesForDomainRequest): outputs.ListPackagesForDomainResponse {
    return new outputs.ListPackagesForDomainResponse();
  }
  /**
   * <p>Returns all tags for the given Elasticsearch domain.</p>
   */
  public listTags(input: shapes.ListTagsRequest): outputs.ListTagsResponse {
    return new outputs.ListTagsResponse();
  }
  /**
   * <p>Allows you to purchase reserved Elasticsearch instances.</p>
   */
  public purchaseReservedElasticsearchInstanceOffering(input: shapes.PurchaseReservedElasticsearchInstanceOfferingRequest): outputs.PurchaseReservedElasticsearchInstanceOfferingResponse {
    return new outputs.PurchaseReservedElasticsearchInstanceOfferingResponse();
  }
  /**
   * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
   */
  public rejectInboundCrossClusterSearchConnection(input: shapes.RejectInboundCrossClusterSearchConnectionRequest): outputs.RejectInboundCrossClusterSearchConnectionResponse {
    return new outputs.RejectInboundCrossClusterSearchConnectionResponse();
  }
  /**
   * <p>Removes the specified set of tags from the specified Elasticsearch domain.</p>
   */
  public removeTags(input: shapes.RemoveTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'removeTags',
        service: 'ES',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'RemoveTags', props);
  }
  /**
   * <p>Schedules a service software update for an Amazon ES domain.</p>
   */
  public startElasticsearchServiceSoftwareUpdate(input: shapes.StartElasticsearchServiceSoftwareUpdateRequest): outputs.StartElasticsearchServiceSoftwareUpdateResponse {
    return new outputs.StartElasticsearchServiceSoftwareUpdateResponse();
  }
  /**
   * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
   */
  public updateElasticsearchDomainConfig(input: shapes.UpdateElasticsearchDomainConfigRequest): outputs.UpdateElasticsearchDomainConfigResponse {
    return new outputs.UpdateElasticsearchDomainConfigResponse();
  }
  /**
   * <p>Updates a package for use with Amazon ES domains.</p>
   */
  public updatePackage(input: shapes.UpdatePackageRequest): outputs.UpdatePackageResponse {
    return new outputs.UpdatePackageResponse();
  }
  /**
   * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
   */
  public upgradeElasticsearchDomain(input: shapes.UpgradeElasticsearchDomainRequest): outputs.UpgradeElasticsearchDomainResponse {
    return new outputs.UpgradeElasticsearchDomainResponse();
  }
}
