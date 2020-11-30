import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as responses from './responses';
import * as shapes from './shapes';

/**
 * Amazon Elasticsearch Service (apiVersion: 2015-01-01)
 */
export class ES extends cdk.Construct {

  constructor(scope: cdk.Construct, private readonly resources: string[]) {
    super(scope, 'ES');
  }

  /**
   * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.
   * </p>.
   */
  public acceptInboundCrossClusterSearchConnection(input: shapes.AcceptInboundCrossClusterSearchConnectionRequest): responses.AcceptInboundCrossClusterSearchConnectionResponseApi {
    return new responses.AcceptInboundCrossClusterSearchConnectionResponseApi(this, this.resources, input);
  }

  /**
   * <p>Attaches tags to an existing Elasticsearch domain.
   * Tags are a set of case-sensitive key value pairs.
   * An Elasticsearch domain may have up to 10 tags.
   * See <a href="http://docs.
   * aws.
   * amazon.
   * com/elasticsearch-service/latest/developerguide/es-managedomains.
   * html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.
   * </a></p>.
   */
  public addTags(input: shapes.AddTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'addTags',
        service: 'ES',
        physicalResourceId: cr.PhysicalResourceId.of('AddTags.'),
        parameters: {
          ARN: input.arn,
          TagList: input.tagList,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'AddTags', props);
  }

  /**
   * <p>Associates a package with an Amazon ES domain.
   * </p>.
   */
  public associatePackage(input: shapes.AssociatePackageRequest): responses.AssociatePackageResponseApi {
    return new responses.AssociatePackageResponseApi(this, this.resources, input);
  }

  /**
   * <p>Cancels a scheduled service software update for an Amazon ES domain.
   * You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.
   * </p>.
   */
  public cancelElasticsearchServiceSoftwareUpdate(input: shapes.CancelElasticsearchServiceSoftwareUpdateRequest): responses.CancelElasticsearchServiceSoftwareUpdateResponseApi {
    return new responses.CancelElasticsearchServiceSoftwareUpdateResponseApi(this, this.resources, input);
  }

  /**
   * <p>Creates a new Elasticsearch domain.
   * For more information, see <a href="http://docs.
   * aws.
   * amazon.
   * com/elasticsearch-service/latest/developerguide/es-createupdatedomains.
   * html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.
   * </p>.
   */
  public createElasticsearchDomain(input: shapes.CreateElasticsearchDomainRequest): responses.CreateElasticsearchDomainResponseApi {
    return new responses.CreateElasticsearchDomainResponseApi(this, this.resources, input);
  }

  /**
   * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.
   * </p>.
   */
  public createOutboundCrossClusterSearchConnection(input: shapes.CreateOutboundCrossClusterSearchConnectionRequest): responses.CreateOutboundCrossClusterSearchConnectionResponseApi {
    return new responses.CreateOutboundCrossClusterSearchConnectionResponseApi(this, this.resources, input);
  }

  /**
   * <p>Create a package for use with Amazon ES domains.
   * </p>.
   */
  public createPackage(input: shapes.CreatePackageRequest): responses.CreatePackageResponseApi {
    return new responses.CreatePackageResponseApi(this, this.resources, input);
  }

  /**
   * <p>Permanently deletes the specified Elasticsearch domain and all of its data.
   * Once a domain is deleted, it cannot be recovered.
   * </p>.
   */
  public deleteElasticsearchDomain(input: shapes.DeleteElasticsearchDomainRequest): responses.DeleteElasticsearchDomainResponseApi {
    return new responses.DeleteElasticsearchDomainResponseApi(this, this.resources, input);
  }

  /**
   * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains.
   * Role deletion will fail if any existing VPC domains use the role.
   * You must delete any such Elasticsearch domains before deleting the role.
   * See <a href="http://docs.
   * aws.
   * amazon.
   * com/elasticsearch-service/latest/developerguide/es-vpc.
   * html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.
   * </p>.
   */
  public deleteElasticsearchServiceRole(): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteElasticsearchServiceRole',
        service: 'ES',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteElasticsearchServiceRole.'),
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'DeleteElasticsearchServiceRole', props);
  }

  /**
   * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.
   * </p>.
   */
  public deleteInboundCrossClusterSearchConnection(input: shapes.DeleteInboundCrossClusterSearchConnectionRequest): responses.DeleteInboundCrossClusterSearchConnectionResponseApi {
    return new responses.DeleteInboundCrossClusterSearchConnectionResponseApi(this, this.resources, input);
  }

  /**
   * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.
   * </p>.
   */
  public deleteOutboundCrossClusterSearchConnection(input: shapes.DeleteOutboundCrossClusterSearchConnectionRequest): responses.DeleteOutboundCrossClusterSearchConnectionResponseApi {
    return new responses.DeleteOutboundCrossClusterSearchConnectionResponseApi(this, this.resources, input);
  }

  /**
   * <p>Delete the package.
   * </p>.
   */
  public deletePackage(input: shapes.DeletePackageRequest): responses.DeletePackageResponseApi {
    return new responses.DeletePackageResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
   * </p>.
   */
  public describeElasticsearchDomain(input: shapes.DescribeElasticsearchDomainRequest): responses.DescribeElasticsearchDomainResponseApi {
    return new responses.DescribeElasticsearchDomainResponseApi(this, this.resources, input);
  }

  /**
   * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
   * </p>.
   */
  public describeElasticsearchDomainConfig(input: shapes.DescribeElasticsearchDomainConfigRequest): responses.DescribeElasticsearchDomainConfigResponseApi {
    return new responses.DescribeElasticsearchDomainConfigResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
   * </p>.
   */
  public describeElasticsearchDomains(input: shapes.DescribeElasticsearchDomainsRequest): responses.DescribeElasticsearchDomainsResponseApi {
    return new responses.DescribeElasticsearchDomainsResponseApi(this, this.resources, input);
  }

  /**
   * <p> Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
   * When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying.
   * </p>.
   */
  public describeElasticsearchInstanceTypeLimits(input: shapes.DescribeElasticsearchInstanceTypeLimitsRequest): responses.DescribeElasticsearchInstanceTypeLimitsResponseApi {
    return new responses.DescribeElasticsearchInstanceTypeLimitsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Lists all the inbound cross-cluster search connections for a destination domain.
   * </p>.
   */
  public describeInboundCrossClusterSearchConnections(input: shapes.DescribeInboundCrossClusterSearchConnectionsRequest): responses.DescribeInboundCrossClusterSearchConnectionsResponseApi {
    return new responses.DescribeInboundCrossClusterSearchConnectionsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Lists all the outbound cross-cluster search connections for a source domain.
   * </p>.
   */
  public describeOutboundCrossClusterSearchConnections(input: shapes.DescribeOutboundCrossClusterSearchConnectionsRequest): responses.DescribeOutboundCrossClusterSearchConnectionsResponseApi {
    return new responses.DescribeOutboundCrossClusterSearchConnectionsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Describes all packages available to Amazon ES.
   * Includes options for filtering, limiting the number of results, and pagination.
   * </p>.
   */
  public describePackages(input: shapes.DescribePackagesRequest): responses.DescribePackagesResponseApi {
    return new responses.DescribePackagesResponseApi(this, this.resources, input);
  }

  /**
   * <p>Lists available reserved Elasticsearch instance offerings.
   * </p>.
   */
  public describeReservedElasticsearchInstanceOfferings(input: shapes.DescribeReservedElasticsearchInstanceOfferingsRequest): responses.DescribeReservedElasticsearchInstanceOfferingsResponseApi {
    return new responses.DescribeReservedElasticsearchInstanceOfferingsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns information about reserved Elasticsearch instances for this account.
   * </p>.
   */
  public describeReservedElasticsearchInstances(input: shapes.DescribeReservedElasticsearchInstancesRequest): responses.DescribeReservedElasticsearchInstancesResponseApi {
    return new responses.DescribeReservedElasticsearchInstancesResponseApi(this, this.resources, input);
  }

  /**
   * <p>Dissociates a package from the Amazon ES domain.
   * </p>.
   */
  public dissociatePackage(input: shapes.DissociatePackageRequest): responses.DissociatePackageResponseApi {
    return new responses.DissociatePackageResponseApi(this, this.resources, input);
  }

  /**
   * <p> Returns a list of upgrade compatible Elastisearch versions.
   * You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain.
   * </p>.
   */
  public getCompatibleElasticsearchVersions(input: shapes.GetCompatibleElasticsearchVersionsRequest): responses.GetCompatibleElasticsearchVersionsResponseApi {
    return new responses.GetCompatibleElasticsearchVersionsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns a list of versions of the package, along with their creation time and commit message.
   * </p>.
   */
  public getPackageVersionHistory(input: shapes.GetPackageVersionHistoryRequest): responses.GetPackageVersionHistoryResponseApi {
    return new responses.GetPackageVersionHistoryResponseApi(this, this.resources, input);
  }

  /**
   * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.
   * </p>.
   */
  public getUpgradeHistory(input: shapes.GetUpgradeHistoryRequest): responses.GetUpgradeHistoryResponseApi {
    return new responses.GetUpgradeHistoryResponseApi(this, this.resources, input);
  }

  /**
   * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.
   * </p>.
   */
  public getUpgradeStatus(input: shapes.GetUpgradeStatusRequest): responses.GetUpgradeStatusResponseApi {
    return new responses.GetUpgradeStatusResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns the name of all Elasticsearch domains owned by the current user's account.
   * </p>.
   */
  public listDomainNames(): responses.ListDomainNamesResponseApi {
    return new responses.ListDomainNamesResponseApi(this, this.resources);
  }

  /**
   * <p>Lists all Amazon ES domains associated with the package.
   * </p>.
   */
  public listDomainsForPackage(input: shapes.ListDomainsForPackageRequest): responses.ListDomainsForPackageResponseApi {
    return new responses.ListDomainsForPackageResponseApi(this, this.resources, input);
  }

  /**
   * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>.
   */
  public listElasticsearchInstanceTypes(input: shapes.ListElasticsearchInstanceTypesRequest): responses.ListElasticsearchInstanceTypesResponseApi {
    return new responses.ListElasticsearchInstanceTypesResponseApi(this, this.resources, input);
  }

  /**
   * <p>List all supported Elasticsearch versions</p>.
   */
  public listElasticsearchVersions(input: shapes.ListElasticsearchVersionsRequest): responses.ListElasticsearchVersionsResponseApi {
    return new responses.ListElasticsearchVersionsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Lists all packages associated with the Amazon ES domain.
   * </p>.
   */
  public listPackagesForDomain(input: shapes.ListPackagesForDomainRequest): responses.ListPackagesForDomainResponseApi {
    return new responses.ListPackagesForDomainResponseApi(this, this.resources, input);
  }

  /**
   * <p>Returns all tags for the given Elasticsearch domain.
   * </p>.
   */
  public listTags(input: shapes.ListTagsRequest): responses.ListTagsResponseApi {
    return new responses.ListTagsResponseApi(this, this.resources, input);
  }

  /**
   * <p>Allows you to purchase reserved Elasticsearch instances.
   * </p>.
   */
  public purchaseReservedElasticsearchInstanceOffering(input: shapes.PurchaseReservedElasticsearchInstanceOfferingRequest): responses.PurchaseReservedElasticsearchInstanceOfferingResponseApi {
    return new responses.PurchaseReservedElasticsearchInstanceOfferingResponseApi(this, this.resources, input);
  }

  /**
   * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.
   * </p>.
   */
  public rejectInboundCrossClusterSearchConnection(input: shapes.RejectInboundCrossClusterSearchConnectionRequest): responses.RejectInboundCrossClusterSearchConnectionResponseApi {
    return new responses.RejectInboundCrossClusterSearchConnectionResponseApi(this, this.resources, input);
  }

  /**
   * <p>Removes the specified set of tags from the specified Elasticsearch domain.
   * </p>.
   */
  public removeTags(input: shapes.RemoveTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'removeTags',
        service: 'ES',
        physicalResourceId: cr.PhysicalResourceId.of('RemoveTags.'),
        parameters: {
          ARN: input.arn,
          TagKeys: input.tagKeys,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    new cr.AwsCustomResource(this, 'RemoveTags', props);
  }

  /**
   * <p>Schedules a service software update for an Amazon ES domain.
   * </p>.
   */
  public startElasticsearchServiceSoftwareUpdate(input: shapes.StartElasticsearchServiceSoftwareUpdateRequest): responses.StartElasticsearchServiceSoftwareUpdateResponseApi {
    return new responses.StartElasticsearchServiceSoftwareUpdateResponseApi(this, this.resources, input);
  }

  /**
   * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.
   * </p>.
   */
  public updateElasticsearchDomainConfig(input: shapes.UpdateElasticsearchDomainConfigRequest): responses.UpdateElasticsearchDomainConfigResponseApi {
    return new responses.UpdateElasticsearchDomainConfigResponseApi(this, this.resources, input);
  }

  /**
   * <p>Updates a package for use with Amazon ES domains.
   * </p>.
   */
  public updatePackage(input: shapes.UpdatePackageRequest): responses.UpdatePackageResponseApi {
    return new responses.UpdatePackageResponseApi(this, this.resources, input);
  }

  /**
   * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.
   * </p>.
   */
  public upgradeElasticsearchDomain(input: shapes.UpgradeElasticsearchDomainRequest): responses.UpgradeElasticsearchDomainResponseApi {
    return new responses.UpgradeElasticsearchDomainResponseApi(this, this.resources, input);
  }

}
