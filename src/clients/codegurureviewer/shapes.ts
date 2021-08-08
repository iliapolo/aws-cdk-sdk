/**
 * @schema CodeGuruReviewerAssociateRepositoryRequest
 */
export interface CodeGuruReviewerAssociateRepositoryRequest {
  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#Repository
   */
  readonly repository?: CodeGuruReviewerRepository;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CodeGuruReviewerAssociateRepositoryRequest#KMSKeyDetails
   */
  readonly kmsKeyDetails?: CodeGuruReviewerKmsKeyDetails;

}

/**
 * Converts an object of type 'CodeGuruReviewerAssociateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerAssociateRepositoryRequest(obj: CodeGuruReviewerAssociateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Repository': toJson_CodeGuruReviewerRepository(obj.repository),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KMSKeyDetails': toJson_CodeGuruReviewerKmsKeyDetails(obj.kmsKeyDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerAssociateRepositoryResponse
 */
export interface CodeGuruReviewerAssociateRepositoryResponse {
  /**
   * @schema CodeGuruReviewerAssociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerAssociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruReviewerAssociateRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerAssociateRepositoryResponse(obj: CodeGuruReviewerAssociateRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryAssociation': toJson_CodeGuruReviewerRepositoryAssociation(obj.repositoryAssociation),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCreateCodeReviewRequest
 */
export interface CodeGuruReviewerCreateCodeReviewRequest {
  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#RepositoryAssociationArn
   */
  readonly repositoryAssociationArn?: string;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#Type
   */
  readonly type?: CodeGuruReviewerCodeReviewType;

  /**
   * @schema CodeGuruReviewerCreateCodeReviewRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerCreateCodeReviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCreateCodeReviewRequest(obj: CodeGuruReviewerCreateCodeReviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'RepositoryAssociationArn': obj.repositoryAssociationArn,
    'Type': toJson_CodeGuruReviewerCodeReviewType(obj.type),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCreateCodeReviewResponse
 */
export interface CodeGuruReviewerCreateCodeReviewResponse {
  /**
   * @schema CodeGuruReviewerCreateCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeGuruReviewerCodeReview;

}

/**
 * Converts an object of type 'CodeGuruReviewerCreateCodeReviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCreateCodeReviewResponse(obj: CodeGuruReviewerCreateCodeReviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReview': toJson_CodeGuruReviewerCodeReview(obj.codeReview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeCodeReviewRequest
 */
export interface CodeGuruReviewerDescribeCodeReviewRequest {
  /**
   * @schema CodeGuruReviewerDescribeCodeReviewRequest#CodeReviewArn
   */
  readonly codeReviewArn?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeCodeReviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeCodeReviewRequest(obj: CodeGuruReviewerDescribeCodeReviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReviewArn': obj.codeReviewArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeCodeReviewResponse
 */
export interface CodeGuruReviewerDescribeCodeReviewResponse {
  /**
   * @schema CodeGuruReviewerDescribeCodeReviewResponse#CodeReview
   */
  readonly codeReview?: CodeGuruReviewerCodeReview;

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeCodeReviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeCodeReviewResponse(obj: CodeGuruReviewerDescribeCodeReviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReview': toJson_CodeGuruReviewerCodeReview(obj.codeReview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerDescribeRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeRecommendationFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeRecommendationFeedbackRequest(obj: CodeGuruReviewerDescribeRecommendationFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReviewArn': obj.codeReviewArn,
    'RecommendationId': obj.recommendationId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerDescribeRecommendationFeedbackResponse {
  /**
   * @schema CodeGuruReviewerDescribeRecommendationFeedbackResponse#RecommendationFeedback
   */
  readonly recommendationFeedback?: CodeGuruReviewerRecommendationFeedback;

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeRecommendationFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeRecommendationFeedbackResponse(obj: CodeGuruReviewerDescribeRecommendationFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecommendationFeedback': toJson_CodeGuruReviewerRecommendationFeedback(obj.recommendationFeedback),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeRepositoryAssociationRequest
 */
export interface CodeGuruReviewerDescribeRepositoryAssociationRequest {
  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationRequest#AssociationArn
   */
  readonly associationArn?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeRepositoryAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeRepositoryAssociationRequest(obj: CodeGuruReviewerDescribeRepositoryAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationArn': obj.associationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse
 */
export interface CodeGuruReviewerDescribeRepositoryAssociationResponse {
  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerDescribeRepositoryAssociationResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruReviewerDescribeRepositoryAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDescribeRepositoryAssociationResponse(obj: CodeGuruReviewerDescribeRepositoryAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryAssociation': toJson_CodeGuruReviewerRepositoryAssociation(obj.repositoryAssociation),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDisassociateRepositoryRequest
 */
export interface CodeGuruReviewerDisassociateRepositoryRequest {
  /**
   * @schema CodeGuruReviewerDisassociateRepositoryRequest#AssociationArn
   */
  readonly associationArn?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerDisassociateRepositoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDisassociateRepositoryRequest(obj: CodeGuruReviewerDisassociateRepositoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationArn': obj.associationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerDisassociateRepositoryResponse
 */
export interface CodeGuruReviewerDisassociateRepositoryResponse {
  /**
   * @schema CodeGuruReviewerDisassociateRepositoryResponse#RepositoryAssociation
   */
  readonly repositoryAssociation?: CodeGuruReviewerRepositoryAssociation;

  /**
   * @schema CodeGuruReviewerDisassociateRepositoryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruReviewerDisassociateRepositoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerDisassociateRepositoryResponse(obj: CodeGuruReviewerDisassociateRepositoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryAssociation': toJson_CodeGuruReviewerRepositoryAssociation(obj.repositoryAssociation),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListCodeReviewsRequest
 */
export interface CodeGuruReviewerListCodeReviewsRequest {
  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#RepositoryNames
   */
  readonly repositoryNames?: string[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListCodeReviewsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListCodeReviewsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListCodeReviewsRequest(obj: CodeGuruReviewerListCodeReviewsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderTypes': obj.providerTypes?.map(y => y),
    'States': obj.states?.map(y => y),
    'RepositoryNames': obj.repositoryNames?.map(y => y),
    'Type': obj.type,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListCodeReviewsResponse
 */
export interface CodeGuruReviewerListCodeReviewsResponse {
  /**
   * @schema CodeGuruReviewerListCodeReviewsResponse#CodeReviewSummaries
   */
  readonly codeReviewSummaries?: CodeGuruReviewerCodeReviewSummary[];

  /**
   * @schema CodeGuruReviewerListCodeReviewsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListCodeReviewsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListCodeReviewsResponse(obj: CodeGuruReviewerListCodeReviewsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReviewSummaries': obj.codeReviewSummaries?.map(y => toJson_CodeGuruReviewerCodeReviewSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerListRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackRequest#RecommendationIds
   */
  readonly recommendationIds?: string[];

}

/**
 * Converts an object of type 'CodeGuruReviewerListRecommendationFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRecommendationFeedbackRequest(obj: CodeGuruReviewerListRecommendationFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CodeReviewArn': obj.codeReviewArn,
    'UserIds': obj.userIds?.map(y => y),
    'RecommendationIds': obj.recommendationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerListRecommendationFeedbackResponse {
  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackResponse#RecommendationFeedbackSummaries
   */
  readonly recommendationFeedbackSummaries?: CodeGuruReviewerRecommendationFeedbackSummary[];

  /**
   * @schema CodeGuruReviewerListRecommendationFeedbackResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListRecommendationFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRecommendationFeedbackResponse(obj: CodeGuruReviewerListRecommendationFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecommendationFeedbackSummaries': obj.recommendationFeedbackSummaries?.map(y => toJson_CodeGuruReviewerRecommendationFeedbackSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRecommendationsRequest
 */
export interface CodeGuruReviewerListRecommendationsRequest {
  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRecommendationsRequest#CodeReviewArn
   */
  readonly codeReviewArn?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListRecommendationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRecommendationsRequest(obj: CodeGuruReviewerListRecommendationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CodeReviewArn': obj.codeReviewArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRecommendationsResponse
 */
export interface CodeGuruReviewerListRecommendationsResponse {
  /**
   * @schema CodeGuruReviewerListRecommendationsResponse#RecommendationSummaries
   */
  readonly recommendationSummaries?: CodeGuruReviewerRecommendationSummary[];

  /**
   * @schema CodeGuruReviewerListRecommendationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListRecommendationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRecommendationsResponse(obj: CodeGuruReviewerListRecommendationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecommendationSummaries': obj.recommendationSummaries?.map(y => toJson_CodeGuruReviewerRecommendationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRepositoryAssociationsRequest
 */
export interface CodeGuruReviewerListRepositoryAssociationsRequest {
  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#ProviderTypes
   */
  readonly providerTypes?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#States
   */
  readonly states?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListRepositoryAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRepositoryAssociationsRequest(obj: CodeGuruReviewerListRepositoryAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderTypes': obj.providerTypes?.map(y => y),
    'States': obj.states?.map(y => y),
    'Names': obj.names?.map(y => y),
    'Owners': obj.owners?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListRepositoryAssociationsResponse
 */
export interface CodeGuruReviewerListRepositoryAssociationsResponse {
  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsResponse#RepositoryAssociationSummaries
   */
  readonly repositoryAssociationSummaries?: CodeGuruReviewerRepositoryAssociationSummary[];

  /**
   * @schema CodeGuruReviewerListRepositoryAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListRepositoryAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListRepositoryAssociationsResponse(obj: CodeGuruReviewerListRepositoryAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryAssociationSummaries': obj.repositoryAssociationSummaries?.map(y => toJson_CodeGuruReviewerRepositoryAssociationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListTagsForResourceRequest
 */
export interface CodeGuruReviewerListTagsForResourceRequest {
  /**
   * @schema CodeGuruReviewerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListTagsForResourceRequest(obj: CodeGuruReviewerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerListTagsForResourceResponse
 */
export interface CodeGuruReviewerListTagsForResourceResponse {
  /**
   * @schema CodeGuruReviewerListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruReviewerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerListTagsForResourceResponse(obj: CodeGuruReviewerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerPutRecommendationFeedbackRequest
 */
export interface CodeGuruReviewerPutRecommendationFeedbackRequest {
  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerPutRecommendationFeedbackRequest#Reactions
   */
  readonly reactions?: string[];

}

/**
 * Converts an object of type 'CodeGuruReviewerPutRecommendationFeedbackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerPutRecommendationFeedbackRequest(obj: CodeGuruReviewerPutRecommendationFeedbackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReviewArn': obj.codeReviewArn,
    'RecommendationId': obj.recommendationId,
    'Reactions': obj.reactions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerPutRecommendationFeedbackResponse
 */
export interface CodeGuruReviewerPutRecommendationFeedbackResponse {
}

/**
 * Converts an object of type 'CodeGuruReviewerPutRecommendationFeedbackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerPutRecommendationFeedbackResponse(obj: CodeGuruReviewerPutRecommendationFeedbackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerTagResourceRequest
 */
export interface CodeGuruReviewerTagResourceRequest {
  /**
   * @schema CodeGuruReviewerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruReviewerTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeGuruReviewerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerTagResourceRequest(obj: CodeGuruReviewerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerTagResourceResponse
 */
export interface CodeGuruReviewerTagResourceResponse {
}

/**
 * Converts an object of type 'CodeGuruReviewerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerTagResourceResponse(obj: CodeGuruReviewerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerUntagResourceRequest
 */
export interface CodeGuruReviewerUntagResourceRequest {
  /**
   * @schema CodeGuruReviewerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeGuruReviewerUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CodeGuruReviewerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerUntagResourceRequest(obj: CodeGuruReviewerUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerUntagResourceResponse
 */
export interface CodeGuruReviewerUntagResourceResponse {
}

/**
 * Converts an object of type 'CodeGuruReviewerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerUntagResourceResponse(obj: CodeGuruReviewerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRepository
 */
export interface CodeGuruReviewerRepository {
  /**
   * @schema CodeGuruReviewerRepository#CodeCommit
   */
  readonly codeCommit?: CodeGuruReviewerCodeCommitRepository;

  /**
   * @schema CodeGuruReviewerRepository#Bitbucket
   */
  readonly bitbucket?: CodeGuruReviewerThirdPartySourceRepository;

  /**
   * @schema CodeGuruReviewerRepository#GitHubEnterpriseServer
   */
  readonly gitHubEnterpriseServer?: CodeGuruReviewerThirdPartySourceRepository;

  /**
   * @schema CodeGuruReviewerRepository#S3Bucket
   */
  readonly s3Bucket?: CodeGuruReviewerS3Repository;

}

/**
 * Converts an object of type 'CodeGuruReviewerRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRepository(obj: CodeGuruReviewerRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeCommit': toJson_CodeGuruReviewerCodeCommitRepository(obj.codeCommit),
    'Bitbucket': toJson_CodeGuruReviewerThirdPartySourceRepository(obj.bitbucket),
    'GitHubEnterpriseServer': toJson_CodeGuruReviewerThirdPartySourceRepository(obj.gitHubEnterpriseServer),
    'S3Bucket': toJson_CodeGuruReviewerS3Repository(obj.s3Bucket),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerKmsKeyDetails
 */
export interface CodeGuruReviewerKmsKeyDetails {
  /**
   * @schema CodeGuruReviewerKmsKeyDetails#KMSKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CodeGuruReviewerKmsKeyDetails#EncryptionOption
   */
  readonly encryptionOption?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerKmsKeyDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerKmsKeyDetails(obj: CodeGuruReviewerKmsKeyDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KMSKeyId': obj.kmsKeyId,
    'EncryptionOption': obj.encryptionOption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRepositoryAssociation
 */
export interface CodeGuruReviewerRepositoryAssociation {
  /**
   * @schema CodeGuruReviewerRepositoryAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#KMSKeyDetails
   */
  readonly kmsKeyDetails?: CodeGuruReviewerKmsKeyDetails;

  /**
   * @schema CodeGuruReviewerRepositoryAssociation#S3RepositoryDetails
   */
  readonly s3RepositoryDetails?: CodeGuruReviewerS3RepositoryDetails;

}

/**
 * Converts an object of type 'CodeGuruReviewerRepositoryAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRepositoryAssociation(obj: CodeGuruReviewerRepositoryAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'AssociationArn': obj.associationArn,
    'ConnectionArn': obj.connectionArn,
    'Name': obj.name,
    'Owner': obj.owner,
    'ProviderType': obj.providerType,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'LastUpdatedTimeStamp': obj.lastUpdatedTimeStamp,
    'CreatedTimeStamp': obj.createdTimeStamp,
    'KMSKeyDetails': toJson_CodeGuruReviewerKmsKeyDetails(obj.kmsKeyDetails),
    'S3RepositoryDetails': toJson_CodeGuruReviewerS3RepositoryDetails(obj.s3RepositoryDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCodeReviewType
 */
export interface CodeGuruReviewerCodeReviewType {
  /**
   * @schema CodeGuruReviewerCodeReviewType#RepositoryAnalysis
   */
  readonly repositoryAnalysis?: CodeGuruReviewerRepositoryAnalysis;

  /**
   * @schema CodeGuruReviewerCodeReviewType#AnalysisTypes
   */
  readonly analysisTypes?: string[];

}

/**
 * Converts an object of type 'CodeGuruReviewerCodeReviewType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCodeReviewType(obj: CodeGuruReviewerCodeReviewType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryAnalysis': toJson_CodeGuruReviewerRepositoryAnalysis(obj.repositoryAnalysis),
    'AnalysisTypes': obj.analysisTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCodeReview
 */
export interface CodeGuruReviewerCodeReview {
  /**
   * @schema CodeGuruReviewerCodeReview#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#StateReason
   */
  readonly stateReason?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Type
   */
  readonly type?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#SourceCodeType
   */
  readonly sourceCodeType?: CodeGuruReviewerSourceCodeType;

  /**
   * @schema CodeGuruReviewerCodeReview#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReview#Metrics
   */
  readonly metrics?: CodeGuruReviewerMetrics;

  /**
   * @schema CodeGuruReviewerCodeReview#AnalysisTypes
   */
  readonly analysisTypes?: string[];

}

/**
 * Converts an object of type 'CodeGuruReviewerCodeReview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCodeReview(obj: CodeGuruReviewerCodeReview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CodeReviewArn': obj.codeReviewArn,
    'RepositoryName': obj.repositoryName,
    'Owner': obj.owner,
    'ProviderType': obj.providerType,
    'State': obj.state,
    'StateReason': obj.stateReason,
    'CreatedTimeStamp': obj.createdTimeStamp,
    'LastUpdatedTimeStamp': obj.lastUpdatedTimeStamp,
    'Type': obj.type,
    'PullRequestId': obj.pullRequestId,
    'SourceCodeType': toJson_CodeGuruReviewerSourceCodeType(obj.sourceCodeType),
    'AssociationArn': obj.associationArn,
    'Metrics': toJson_CodeGuruReviewerMetrics(obj.metrics),
    'AnalysisTypes': obj.analysisTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRecommendationFeedback
 */
export interface CodeGuruReviewerRecommendationFeedback {
  /**
   * @schema CodeGuruReviewerRecommendationFeedback#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#UserId
   */
  readonly userId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedback#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRecommendationFeedback' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRecommendationFeedback(obj: CodeGuruReviewerRecommendationFeedback | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeReviewArn': obj.codeReviewArn,
    'RecommendationId': obj.recommendationId,
    'Reactions': obj.reactions?.map(y => y),
    'UserId': obj.userId,
    'CreatedTimeStamp': obj.createdTimeStamp,
    'LastUpdatedTimeStamp': obj.lastUpdatedTimeStamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCodeReviewSummary
 */
export interface CodeGuruReviewerCodeReviewSummary {
  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#CodeReviewArn
   */
  readonly codeReviewArn?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#RepositoryName
   */
  readonly repositoryName?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#State
   */
  readonly state?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#CreatedTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#Type
   */
  readonly type?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#PullRequestId
   */
  readonly pullRequestId?: string;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#MetricsSummary
   */
  readonly metricsSummary?: CodeGuruReviewerMetricsSummary;

  /**
   * @schema CodeGuruReviewerCodeReviewSummary#SourceCodeType
   */
  readonly sourceCodeType?: CodeGuruReviewerSourceCodeType;

}

/**
 * Converts an object of type 'CodeGuruReviewerCodeReviewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCodeReviewSummary(obj: CodeGuruReviewerCodeReviewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CodeReviewArn': obj.codeReviewArn,
    'RepositoryName': obj.repositoryName,
    'Owner': obj.owner,
    'ProviderType': obj.providerType,
    'State': obj.state,
    'CreatedTimeStamp': obj.createdTimeStamp,
    'LastUpdatedTimeStamp': obj.lastUpdatedTimeStamp,
    'Type': obj.type,
    'PullRequestId': obj.pullRequestId,
    'MetricsSummary': toJson_CodeGuruReviewerMetricsSummary(obj.metricsSummary),
    'SourceCodeType': toJson_CodeGuruReviewerSourceCodeType(obj.sourceCodeType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRecommendationFeedbackSummary
 */
export interface CodeGuruReviewerRecommendationFeedbackSummary {
  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#Reactions
   */
  readonly reactions?: string[];

  /**
   * @schema CodeGuruReviewerRecommendationFeedbackSummary#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRecommendationFeedbackSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRecommendationFeedbackSummary(obj: CodeGuruReviewerRecommendationFeedbackSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecommendationId': obj.recommendationId,
    'Reactions': obj.reactions?.map(y => y),
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRecommendationSummary
 */
export interface CodeGuruReviewerRecommendationSummary {
  /**
   * @schema CodeGuruReviewerRecommendationSummary#FilePath
   */
  readonly filePath?: string;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#RecommendationId
   */
  readonly recommendationId?: string;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#StartLine
   */
  readonly startLine?: number;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#EndLine
   */
  readonly endLine?: number;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#Description
   */
  readonly description?: string;

  /**
   * @schema CodeGuruReviewerRecommendationSummary#RecommendationCategory
   */
  readonly recommendationCategory?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRecommendationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRecommendationSummary(obj: CodeGuruReviewerRecommendationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilePath': obj.filePath,
    'RecommendationId': obj.recommendationId,
    'StartLine': obj.startLine,
    'EndLine': obj.endLine,
    'Description': obj.description,
    'RecommendationCategory': obj.recommendationCategory,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRepositoryAssociationSummary
 */
export interface CodeGuruReviewerRepositoryAssociationSummary {
  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#AssociationArn
   */
  readonly associationArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#LastUpdatedTimeStamp
   */
  readonly lastUpdatedTimeStamp?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeGuruReviewerRepositoryAssociationSummary#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRepositoryAssociationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRepositoryAssociationSummary(obj: CodeGuruReviewerRepositoryAssociationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationArn': obj.associationArn,
    'ConnectionArn': obj.connectionArn,
    'LastUpdatedTimeStamp': obj.lastUpdatedTimeStamp,
    'AssociationId': obj.associationId,
    'Name': obj.name,
    'Owner': obj.owner,
    'ProviderType': obj.providerType,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCodeCommitRepository
 */
export interface CodeGuruReviewerCodeCommitRepository {
  /**
   * @schema CodeGuruReviewerCodeCommitRepository#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerCodeCommitRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCodeCommitRepository(obj: CodeGuruReviewerCodeCommitRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerThirdPartySourceRepository
 */
export interface CodeGuruReviewerThirdPartySourceRepository {
  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeGuruReviewerThirdPartySourceRepository#Owner
   */
  readonly owner?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerThirdPartySourceRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerThirdPartySourceRepository(obj: CodeGuruReviewerThirdPartySourceRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ConnectionArn': obj.connectionArn,
    'Owner': obj.owner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerS3Repository
 */
export interface CodeGuruReviewerS3Repository {
  /**
   * @schema CodeGuruReviewerS3Repository#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerS3Repository#BucketName
   */
  readonly bucketName?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerS3Repository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerS3Repository(obj: CodeGuruReviewerS3Repository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'BucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerS3RepositoryDetails
 */
export interface CodeGuruReviewerS3RepositoryDetails {
  /**
   * @schema CodeGuruReviewerS3RepositoryDetails#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema CodeGuruReviewerS3RepositoryDetails#CodeArtifacts
   */
  readonly codeArtifacts?: CodeGuruReviewerCodeArtifacts;

}

/**
 * Converts an object of type 'CodeGuruReviewerS3RepositoryDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerS3RepositoryDetails(obj: CodeGuruReviewerS3RepositoryDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'CodeArtifacts': toJson_CodeGuruReviewerCodeArtifacts(obj.codeArtifacts),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRepositoryAnalysis
 */
export interface CodeGuruReviewerRepositoryAnalysis {
  /**
   * @schema CodeGuruReviewerRepositoryAnalysis#RepositoryHead
   */
  readonly repositoryHead?: CodeGuruReviewerRepositoryHeadSourceCodeType;

  /**
   * @schema CodeGuruReviewerRepositoryAnalysis#SourceCodeType
   */
  readonly sourceCodeType?: CodeGuruReviewerSourceCodeType;

}

/**
 * Converts an object of type 'CodeGuruReviewerRepositoryAnalysis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRepositoryAnalysis(obj: CodeGuruReviewerRepositoryAnalysis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RepositoryHead': toJson_CodeGuruReviewerRepositoryHeadSourceCodeType(obj.repositoryHead),
    'SourceCodeType': toJson_CodeGuruReviewerSourceCodeType(obj.sourceCodeType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerSourceCodeType
 */
export interface CodeGuruReviewerSourceCodeType {
  /**
   * @schema CodeGuruReviewerSourceCodeType#CommitDiff
   */
  readonly commitDiff?: CodeGuruReviewerCommitDiffSourceCodeType;

  /**
   * @schema CodeGuruReviewerSourceCodeType#RepositoryHead
   */
  readonly repositoryHead?: CodeGuruReviewerRepositoryHeadSourceCodeType;

  /**
   * @schema CodeGuruReviewerSourceCodeType#BranchDiff
   */
  readonly branchDiff?: CodeGuruReviewerBranchDiffSourceCodeType;

  /**
   * @schema CodeGuruReviewerSourceCodeType#S3BucketRepository
   */
  readonly s3BucketRepository?: CodeGuruReviewerS3BucketRepository;

  /**
   * @schema CodeGuruReviewerSourceCodeType#RequestMetadata
   */
  readonly requestMetadata?: CodeGuruReviewerRequestMetadata;

}

/**
 * Converts an object of type 'CodeGuruReviewerSourceCodeType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerSourceCodeType(obj: CodeGuruReviewerSourceCodeType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommitDiff': toJson_CodeGuruReviewerCommitDiffSourceCodeType(obj.commitDiff),
    'RepositoryHead': toJson_CodeGuruReviewerRepositoryHeadSourceCodeType(obj.repositoryHead),
    'BranchDiff': toJson_CodeGuruReviewerBranchDiffSourceCodeType(obj.branchDiff),
    'S3BucketRepository': toJson_CodeGuruReviewerS3BucketRepository(obj.s3BucketRepository),
    'RequestMetadata': toJson_CodeGuruReviewerRequestMetadata(obj.requestMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerMetrics
 */
export interface CodeGuruReviewerMetrics {
  /**
   * @schema CodeGuruReviewerMetrics#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema CodeGuruReviewerMetrics#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * Converts an object of type 'CodeGuruReviewerMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerMetrics(obj: CodeGuruReviewerMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeteredLinesOfCodeCount': obj.meteredLinesOfCodeCount,
    'FindingsCount': obj.findingsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerMetricsSummary
 */
export interface CodeGuruReviewerMetricsSummary {
  /**
   * @schema CodeGuruReviewerMetricsSummary#MeteredLinesOfCodeCount
   */
  readonly meteredLinesOfCodeCount?: number;

  /**
   * @schema CodeGuruReviewerMetricsSummary#FindingsCount
   */
  readonly findingsCount?: number;

}

/**
 * Converts an object of type 'CodeGuruReviewerMetricsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerMetricsSummary(obj: CodeGuruReviewerMetricsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MeteredLinesOfCodeCount': obj.meteredLinesOfCodeCount,
    'FindingsCount': obj.findingsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCodeArtifacts
 */
export interface CodeGuruReviewerCodeArtifacts {
  /**
   * @schema CodeGuruReviewerCodeArtifacts#SourceCodeArtifactsObjectKey
   */
  readonly sourceCodeArtifactsObjectKey?: string;

  /**
   * @schema CodeGuruReviewerCodeArtifacts#BuildArtifactsObjectKey
   */
  readonly buildArtifactsObjectKey?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerCodeArtifacts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCodeArtifacts(obj: CodeGuruReviewerCodeArtifacts | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceCodeArtifactsObjectKey': obj.sourceCodeArtifactsObjectKey,
    'BuildArtifactsObjectKey': obj.buildArtifactsObjectKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRepositoryHeadSourceCodeType
 */
export interface CodeGuruReviewerRepositoryHeadSourceCodeType {
  /**
   * @schema CodeGuruReviewerRepositoryHeadSourceCodeType#BranchName
   */
  readonly branchName?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRepositoryHeadSourceCodeType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRepositoryHeadSourceCodeType(obj: CodeGuruReviewerRepositoryHeadSourceCodeType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BranchName': obj.branchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerCommitDiffSourceCodeType
 */
export interface CodeGuruReviewerCommitDiffSourceCodeType {
  /**
   * @schema CodeGuruReviewerCommitDiffSourceCodeType#SourceCommit
   */
  readonly sourceCommit?: string;

  /**
   * @schema CodeGuruReviewerCommitDiffSourceCodeType#DestinationCommit
   */
  readonly destinationCommit?: string;

  /**
   * @schema CodeGuruReviewerCommitDiffSourceCodeType#MergeBaseCommit
   */
  readonly mergeBaseCommit?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerCommitDiffSourceCodeType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerCommitDiffSourceCodeType(obj: CodeGuruReviewerCommitDiffSourceCodeType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceCommit': obj.sourceCommit,
    'DestinationCommit': obj.destinationCommit,
    'MergeBaseCommit': obj.mergeBaseCommit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerBranchDiffSourceCodeType
 */
export interface CodeGuruReviewerBranchDiffSourceCodeType {
  /**
   * @schema CodeGuruReviewerBranchDiffSourceCodeType#SourceBranchName
   */
  readonly sourceBranchName?: string;

  /**
   * @schema CodeGuruReviewerBranchDiffSourceCodeType#DestinationBranchName
   */
  readonly destinationBranchName?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerBranchDiffSourceCodeType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerBranchDiffSourceCodeType(obj: CodeGuruReviewerBranchDiffSourceCodeType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceBranchName': obj.sourceBranchName,
    'DestinationBranchName': obj.destinationBranchName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerS3BucketRepository
 */
export interface CodeGuruReviewerS3BucketRepository {
  /**
   * @schema CodeGuruReviewerS3BucketRepository#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerS3BucketRepository#Details
   */
  readonly details?: CodeGuruReviewerS3RepositoryDetails;

}

/**
 * Converts an object of type 'CodeGuruReviewerS3BucketRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerS3BucketRepository(obj: CodeGuruReviewerS3BucketRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Details': toJson_CodeGuruReviewerS3RepositoryDetails(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerRequestMetadata
 */
export interface CodeGuruReviewerRequestMetadata {
  /**
   * @schema CodeGuruReviewerRequestMetadata#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CodeGuruReviewerRequestMetadata#Requester
   */
  readonly requester?: string;

  /**
   * @schema CodeGuruReviewerRequestMetadata#EventInfo
   */
  readonly eventInfo?: CodeGuruReviewerEventInfo;

  /**
   * @schema CodeGuruReviewerRequestMetadata#VendorName
   */
  readonly vendorName?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerRequestMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerRequestMetadata(obj: CodeGuruReviewerRequestMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Requester': obj.requester,
    'EventInfo': toJson_CodeGuruReviewerEventInfo(obj.eventInfo),
    'VendorName': obj.vendorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeGuruReviewerEventInfo
 */
export interface CodeGuruReviewerEventInfo {
  /**
   * @schema CodeGuruReviewerEventInfo#Name
   */
  readonly name?: string;

  /**
   * @schema CodeGuruReviewerEventInfo#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'CodeGuruReviewerEventInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeGuruReviewerEventInfo(obj: CodeGuruReviewerEventInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
