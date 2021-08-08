/**
 * @schema CloudSearchBuildSuggestersRequest
 */
export interface CloudSearchBuildSuggestersRequest {
  /**
   * @schema CloudSearchBuildSuggestersRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CloudSearchBuildSuggestersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchBuildSuggestersRequest(obj: CloudSearchBuildSuggestersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchBuildSuggestersResponse
 */
export interface CloudSearchBuildSuggestersResponse {
  /**
   * @schema CloudSearchBuildSuggestersResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * Converts an object of type 'CloudSearchBuildSuggestersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchBuildSuggestersResponse(obj: CloudSearchBuildSuggestersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldNames': obj.fieldNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchCreateDomainRequest
 */
export interface CloudSearchCreateDomainRequest {
  /**
   * @schema CloudSearchCreateDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CloudSearchCreateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchCreateDomainRequest(obj: CloudSearchCreateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchCreateDomainResponse
 */
export interface CloudSearchCreateDomainResponse {
  /**
   * @schema CloudSearchCreateDomainResponse#DomainStatus
   */
  readonly domainStatus?: CloudSearchDomainStatus;

}

/**
 * Converts an object of type 'CloudSearchCreateDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchCreateDomainResponse(obj: CloudSearchCreateDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatus': toJson_CloudSearchDomainStatus(obj.domainStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineAnalysisSchemeRequest
 */
export interface CloudSearchDefineAnalysisSchemeRequest {
  /**
   * @schema CloudSearchDefineAnalysisSchemeRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDefineAnalysisSchemeRequest#AnalysisScheme
   */
  readonly analysisScheme?: CloudSearchAnalysisScheme;

}

/**
 * Converts an object of type 'CloudSearchDefineAnalysisSchemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineAnalysisSchemeRequest(obj: CloudSearchDefineAnalysisSchemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AnalysisScheme': toJson_CloudSearchAnalysisScheme(obj.analysisScheme),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineAnalysisSchemeResponse
 */
export interface CloudSearchDefineAnalysisSchemeResponse {
  /**
   * @schema CloudSearchDefineAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme?: CloudSearchAnalysisSchemeStatus;

}

/**
 * Converts an object of type 'CloudSearchDefineAnalysisSchemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineAnalysisSchemeResponse(obj: CloudSearchDefineAnalysisSchemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisScheme': toJson_CloudSearchAnalysisSchemeStatus(obj.analysisScheme),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineExpressionRequest
 */
export interface CloudSearchDefineExpressionRequest {
  /**
   * @schema CloudSearchDefineExpressionRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDefineExpressionRequest#Expression
   */
  readonly expression?: CloudSearchExpression;

}

/**
 * Converts an object of type 'CloudSearchDefineExpressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineExpressionRequest(obj: CloudSearchDefineExpressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Expression': toJson_CloudSearchExpression(obj.expression),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineExpressionResponse
 */
export interface CloudSearchDefineExpressionResponse {
  /**
   * @schema CloudSearchDefineExpressionResponse#Expression
   */
  readonly expression?: CloudSearchExpressionStatus;

}

/**
 * Converts an object of type 'CloudSearchDefineExpressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineExpressionResponse(obj: CloudSearchDefineExpressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': toJson_CloudSearchExpressionStatus(obj.expression),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineIndexFieldRequest
 */
export interface CloudSearchDefineIndexFieldRequest {
  /**
   * @schema CloudSearchDefineIndexFieldRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDefineIndexFieldRequest#IndexField
   */
  readonly indexField?: CloudSearchIndexField;

}

/**
 * Converts an object of type 'CloudSearchDefineIndexFieldRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineIndexFieldRequest(obj: CloudSearchDefineIndexFieldRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'IndexField': toJson_CloudSearchIndexField(obj.indexField),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineIndexFieldResponse
 */
export interface CloudSearchDefineIndexFieldResponse {
  /**
   * @schema CloudSearchDefineIndexFieldResponse#IndexField
   */
  readonly indexField?: CloudSearchIndexFieldStatus;

}

/**
 * Converts an object of type 'CloudSearchDefineIndexFieldResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineIndexFieldResponse(obj: CloudSearchDefineIndexFieldResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexField': toJson_CloudSearchIndexFieldStatus(obj.indexField),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineSuggesterRequest
 */
export interface CloudSearchDefineSuggesterRequest {
  /**
   * @schema CloudSearchDefineSuggesterRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDefineSuggesterRequest#Suggester
   */
  readonly suggester?: CloudSearchSuggester;

}

/**
 * Converts an object of type 'CloudSearchDefineSuggesterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineSuggesterRequest(obj: CloudSearchDefineSuggesterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Suggester': toJson_CloudSearchSuggester(obj.suggester),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDefineSuggesterResponse
 */
export interface CloudSearchDefineSuggesterResponse {
  /**
   * @schema CloudSearchDefineSuggesterResponse#Suggester
   */
  readonly suggester?: CloudSearchSuggesterStatus;

}

/**
 * Converts an object of type 'CloudSearchDefineSuggesterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDefineSuggesterResponse(obj: CloudSearchDefineSuggesterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Suggester': toJson_CloudSearchSuggesterStatus(obj.suggester),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteAnalysisSchemeRequest
 */
export interface CloudSearchDeleteAnalysisSchemeRequest {
  /**
   * @schema CloudSearchDeleteAnalysisSchemeRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDeleteAnalysisSchemeRequest#AnalysisSchemeName
   */
  readonly analysisSchemeName?: string;

}

/**
 * Converts an object of type 'CloudSearchDeleteAnalysisSchemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteAnalysisSchemeRequest(obj: CloudSearchDeleteAnalysisSchemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AnalysisSchemeName': obj.analysisSchemeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteAnalysisSchemeResponse
 */
export interface CloudSearchDeleteAnalysisSchemeResponse {
  /**
   * @schema CloudSearchDeleteAnalysisSchemeResponse#AnalysisScheme
   */
  readonly analysisScheme?: CloudSearchAnalysisSchemeStatus;

}

/**
 * Converts an object of type 'CloudSearchDeleteAnalysisSchemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteAnalysisSchemeResponse(obj: CloudSearchDeleteAnalysisSchemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisScheme': toJson_CloudSearchAnalysisSchemeStatus(obj.analysisScheme),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteDomainRequest
 */
export interface CloudSearchDeleteDomainRequest {
  /**
   * @schema CloudSearchDeleteDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CloudSearchDeleteDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteDomainRequest(obj: CloudSearchDeleteDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteDomainResponse
 */
export interface CloudSearchDeleteDomainResponse {
  /**
   * @schema CloudSearchDeleteDomainResponse#DomainStatus
   */
  readonly domainStatus?: CloudSearchDomainStatus;

}

/**
 * Converts an object of type 'CloudSearchDeleteDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteDomainResponse(obj: CloudSearchDeleteDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatus': toJson_CloudSearchDomainStatus(obj.domainStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteExpressionRequest
 */
export interface CloudSearchDeleteExpressionRequest {
  /**
   * @schema CloudSearchDeleteExpressionRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDeleteExpressionRequest#ExpressionName
   */
  readonly expressionName?: string;

}

/**
 * Converts an object of type 'CloudSearchDeleteExpressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteExpressionRequest(obj: CloudSearchDeleteExpressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ExpressionName': obj.expressionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteExpressionResponse
 */
export interface CloudSearchDeleteExpressionResponse {
  /**
   * @schema CloudSearchDeleteExpressionResponse#Expression
   */
  readonly expression?: CloudSearchExpressionStatus;

}

/**
 * Converts an object of type 'CloudSearchDeleteExpressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteExpressionResponse(obj: CloudSearchDeleteExpressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': toJson_CloudSearchExpressionStatus(obj.expression),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteIndexFieldRequest
 */
export interface CloudSearchDeleteIndexFieldRequest {
  /**
   * @schema CloudSearchDeleteIndexFieldRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDeleteIndexFieldRequest#IndexFieldName
   */
  readonly indexFieldName?: string;

}

/**
 * Converts an object of type 'CloudSearchDeleteIndexFieldRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteIndexFieldRequest(obj: CloudSearchDeleteIndexFieldRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'IndexFieldName': obj.indexFieldName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteIndexFieldResponse
 */
export interface CloudSearchDeleteIndexFieldResponse {
  /**
   * @schema CloudSearchDeleteIndexFieldResponse#IndexField
   */
  readonly indexField?: CloudSearchIndexFieldStatus;

}

/**
 * Converts an object of type 'CloudSearchDeleteIndexFieldResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteIndexFieldResponse(obj: CloudSearchDeleteIndexFieldResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexField': toJson_CloudSearchIndexFieldStatus(obj.indexField),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteSuggesterRequest
 */
export interface CloudSearchDeleteSuggesterRequest {
  /**
   * @schema CloudSearchDeleteSuggesterRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDeleteSuggesterRequest#SuggesterName
   */
  readonly suggesterName?: string;

}

/**
 * Converts an object of type 'CloudSearchDeleteSuggesterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteSuggesterRequest(obj: CloudSearchDeleteSuggesterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'SuggesterName': obj.suggesterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDeleteSuggesterResponse
 */
export interface CloudSearchDeleteSuggesterResponse {
  /**
   * @schema CloudSearchDeleteSuggesterResponse#Suggester
   */
  readonly suggester?: CloudSearchSuggesterStatus;

}

/**
 * Converts an object of type 'CloudSearchDeleteSuggesterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDeleteSuggesterResponse(obj: CloudSearchDeleteSuggesterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Suggester': toJson_CloudSearchSuggesterStatus(obj.suggester),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeAnalysisSchemesRequest
 */
export interface CloudSearchDescribeAnalysisSchemesRequest {
  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#AnalysisSchemeNames
   */
  readonly analysisSchemeNames?: string[];

  /**
   * @schema CloudSearchDescribeAnalysisSchemesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeAnalysisSchemesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeAnalysisSchemesRequest(obj: CloudSearchDescribeAnalysisSchemesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AnalysisSchemeNames': obj.analysisSchemeNames?.map(y => y),
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeAnalysisSchemesResponse
 */
export interface CloudSearchDescribeAnalysisSchemesResponse {
  /**
   * @schema CloudSearchDescribeAnalysisSchemesResponse#AnalysisSchemes
   */
  readonly analysisSchemes?: CloudSearchAnalysisSchemeStatus[];

}

/**
 * Converts an object of type 'CloudSearchDescribeAnalysisSchemesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeAnalysisSchemesResponse(obj: CloudSearchDescribeAnalysisSchemesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisSchemes': obj.analysisSchemes?.map(y => toJson_CloudSearchAnalysisSchemeStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeAvailabilityOptionsRequest
 */
export interface CloudSearchDescribeAvailabilityOptionsRequest {
  /**
   * @schema CloudSearchDescribeAvailabilityOptionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeAvailabilityOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeAvailabilityOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeAvailabilityOptionsRequest(obj: CloudSearchDescribeAvailabilityOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeAvailabilityOptionsResponse
 */
export interface CloudSearchDescribeAvailabilityOptionsResponse {
  /**
   * @schema CloudSearchDescribeAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: CloudSearchAvailabilityOptionsStatus;

}

/**
 * Converts an object of type 'CloudSearchDescribeAvailabilityOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeAvailabilityOptionsResponse(obj: CloudSearchDescribeAvailabilityOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityOptions': toJson_CloudSearchAvailabilityOptionsStatus(obj.availabilityOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeDomainEndpointOptionsRequest
 */
export interface CloudSearchDescribeDomainEndpointOptionsRequest {
  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeDomainEndpointOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeDomainEndpointOptionsRequest(obj: CloudSearchDescribeDomainEndpointOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeDomainEndpointOptionsResponse
 */
export interface CloudSearchDescribeDomainEndpointOptionsResponse {
  /**
   * @schema CloudSearchDescribeDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: CloudSearchDomainEndpointOptionsStatus;

}

/**
 * Converts an object of type 'CloudSearchDescribeDomainEndpointOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeDomainEndpointOptionsResponse(obj: CloudSearchDescribeDomainEndpointOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainEndpointOptions': toJson_CloudSearchDomainEndpointOptionsStatus(obj.domainEndpointOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeDomainsRequest
 */
export interface CloudSearchDescribeDomainsRequest {
  /**
   * @schema CloudSearchDescribeDomainsRequest#DomainNames
   */
  readonly domainNames?: string[];

}

/**
 * Converts an object of type 'CloudSearchDescribeDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeDomainsRequest(obj: CloudSearchDescribeDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainNames': obj.domainNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeDomainsResponse
 */
export interface CloudSearchDescribeDomainsResponse {
  /**
   * @schema CloudSearchDescribeDomainsResponse#DomainStatusList
   */
  readonly domainStatusList?: CloudSearchDomainStatus[];

}

/**
 * Converts an object of type 'CloudSearchDescribeDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeDomainsResponse(obj: CloudSearchDescribeDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainStatusList': obj.domainStatusList?.map(y => toJson_CloudSearchDomainStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeExpressionsRequest
 */
export interface CloudSearchDescribeExpressionsRequest {
  /**
   * @schema CloudSearchDescribeExpressionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeExpressionsRequest#ExpressionNames
   */
  readonly expressionNames?: string[];

  /**
   * @schema CloudSearchDescribeExpressionsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeExpressionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeExpressionsRequest(obj: CloudSearchDescribeExpressionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ExpressionNames': obj.expressionNames?.map(y => y),
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeExpressionsResponse
 */
export interface CloudSearchDescribeExpressionsResponse {
  /**
   * @schema CloudSearchDescribeExpressionsResponse#Expressions
   */
  readonly expressions?: CloudSearchExpressionStatus[];

}

/**
 * Converts an object of type 'CloudSearchDescribeExpressionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeExpressionsResponse(obj: CloudSearchDescribeExpressionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expressions': obj.expressions?.map(y => toJson_CloudSearchExpressionStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeIndexFieldsRequest
 */
export interface CloudSearchDescribeIndexFieldsRequest {
  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#FieldNames
   */
  readonly fieldNames?: string[];

  /**
   * @schema CloudSearchDescribeIndexFieldsRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeIndexFieldsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeIndexFieldsRequest(obj: CloudSearchDescribeIndexFieldsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'FieldNames': obj.fieldNames?.map(y => y),
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeIndexFieldsResponse
 */
export interface CloudSearchDescribeIndexFieldsResponse {
  /**
   * @schema CloudSearchDescribeIndexFieldsResponse#IndexFields
   */
  readonly indexFields?: CloudSearchIndexFieldStatus[];

}

/**
 * Converts an object of type 'CloudSearchDescribeIndexFieldsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeIndexFieldsResponse(obj: CloudSearchDescribeIndexFieldsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexFields': obj.indexFields?.map(y => toJson_CloudSearchIndexFieldStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeScalingParametersRequest
 */
export interface CloudSearchDescribeScalingParametersRequest {
  /**
   * @schema CloudSearchDescribeScalingParametersRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CloudSearchDescribeScalingParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeScalingParametersRequest(obj: CloudSearchDescribeScalingParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeScalingParametersResponse
 */
export interface CloudSearchDescribeScalingParametersResponse {
  /**
   * @schema CloudSearchDescribeScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters?: CloudSearchScalingParametersStatus;

}

/**
 * Converts an object of type 'CloudSearchDescribeScalingParametersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeScalingParametersResponse(obj: CloudSearchDescribeScalingParametersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingParameters': toJson_CloudSearchScalingParametersStatus(obj.scalingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeServiceAccessPoliciesRequest
 */
export interface CloudSearchDescribeServiceAccessPoliciesRequest {
  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeServiceAccessPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeServiceAccessPoliciesRequest(obj: CloudSearchDescribeServiceAccessPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeServiceAccessPoliciesResponse
 */
export interface CloudSearchDescribeServiceAccessPoliciesResponse {
  /**
   * @schema CloudSearchDescribeServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies?: CloudSearchAccessPoliciesStatus;

}

/**
 * Converts an object of type 'CloudSearchDescribeServiceAccessPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeServiceAccessPoliciesResponse(obj: CloudSearchDescribeServiceAccessPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPolicies': toJson_CloudSearchAccessPoliciesStatus(obj.accessPolicies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeSuggestersRequest
 */
export interface CloudSearchDescribeSuggestersRequest {
  /**
   * @schema CloudSearchDescribeSuggestersRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDescribeSuggestersRequest#SuggesterNames
   */
  readonly suggesterNames?: string[];

  /**
   * @schema CloudSearchDescribeSuggestersRequest#Deployed
   */
  readonly deployed?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDescribeSuggestersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeSuggestersRequest(obj: CloudSearchDescribeSuggestersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'SuggesterNames': obj.suggesterNames?.map(y => y),
    'Deployed': obj.deployed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDescribeSuggestersResponse
 */
export interface CloudSearchDescribeSuggestersResponse {
  /**
   * @schema CloudSearchDescribeSuggestersResponse#Suggesters
   */
  readonly suggesters?: CloudSearchSuggesterStatus[];

}

/**
 * Converts an object of type 'CloudSearchDescribeSuggestersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDescribeSuggestersResponse(obj: CloudSearchDescribeSuggestersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Suggesters': obj.suggesters?.map(y => toJson_CloudSearchSuggesterStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIndexDocumentsRequest
 */
export interface CloudSearchIndexDocumentsRequest {
  /**
   * @schema CloudSearchIndexDocumentsRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'CloudSearchIndexDocumentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIndexDocumentsRequest(obj: CloudSearchIndexDocumentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIndexDocumentsResponse
 */
export interface CloudSearchIndexDocumentsResponse {
  /**
   * @schema CloudSearchIndexDocumentsResponse#FieldNames
   */
  readonly fieldNames?: string[];

}

/**
 * Converts an object of type 'CloudSearchIndexDocumentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIndexDocumentsResponse(obj: CloudSearchIndexDocumentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FieldNames': obj.fieldNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchListDomainNamesResponse
 */
export interface CloudSearchListDomainNamesResponse {
  /**
   * @schema CloudSearchListDomainNamesResponse#DomainNames
   */
  readonly domainNames?: { [key: string]: string };

}

/**
 * Converts an object of type 'CloudSearchListDomainNamesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchListDomainNamesResponse(obj: CloudSearchListDomainNamesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainNames': ((obj.domainNames) === undefined) ? undefined : (Object.entries(obj.domainNames).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateAvailabilityOptionsRequest
 */
export interface CloudSearchUpdateAvailabilityOptionsRequest {
  /**
   * @schema CloudSearchUpdateAvailabilityOptionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchUpdateAvailabilityOptionsRequest#MultiAZ
   */
  readonly multiAz?: boolean;

}

/**
 * Converts an object of type 'CloudSearchUpdateAvailabilityOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateAvailabilityOptionsRequest(obj: CloudSearchUpdateAvailabilityOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'MultiAZ': obj.multiAz,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateAvailabilityOptionsResponse
 */
export interface CloudSearchUpdateAvailabilityOptionsResponse {
  /**
   * @schema CloudSearchUpdateAvailabilityOptionsResponse#AvailabilityOptions
   */
  readonly availabilityOptions?: CloudSearchAvailabilityOptionsStatus;

}

/**
 * Converts an object of type 'CloudSearchUpdateAvailabilityOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateAvailabilityOptionsResponse(obj: CloudSearchUpdateAvailabilityOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityOptions': toJson_CloudSearchAvailabilityOptionsStatus(obj.availabilityOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateDomainEndpointOptionsRequest
 */
export interface CloudSearchUpdateDomainEndpointOptionsRequest {
  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsRequest#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: CloudSearchDomainEndpointOptions;

}

/**
 * Converts an object of type 'CloudSearchUpdateDomainEndpointOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateDomainEndpointOptionsRequest(obj: CloudSearchUpdateDomainEndpointOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DomainEndpointOptions': toJson_CloudSearchDomainEndpointOptions(obj.domainEndpointOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateDomainEndpointOptionsResponse
 */
export interface CloudSearchUpdateDomainEndpointOptionsResponse {
  /**
   * @schema CloudSearchUpdateDomainEndpointOptionsResponse#DomainEndpointOptions
   */
  readonly domainEndpointOptions?: CloudSearchDomainEndpointOptionsStatus;

}

/**
 * Converts an object of type 'CloudSearchUpdateDomainEndpointOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateDomainEndpointOptionsResponse(obj: CloudSearchUpdateDomainEndpointOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainEndpointOptions': toJson_CloudSearchDomainEndpointOptionsStatus(obj.domainEndpointOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateScalingParametersRequest
 */
export interface CloudSearchUpdateScalingParametersRequest {
  /**
   * @schema CloudSearchUpdateScalingParametersRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchUpdateScalingParametersRequest#ScalingParameters
   */
  readonly scalingParameters?: CloudSearchScalingParameters;

}

/**
 * Converts an object of type 'CloudSearchUpdateScalingParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateScalingParametersRequest(obj: CloudSearchUpdateScalingParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ScalingParameters': toJson_CloudSearchScalingParameters(obj.scalingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateScalingParametersResponse
 */
export interface CloudSearchUpdateScalingParametersResponse {
  /**
   * @schema CloudSearchUpdateScalingParametersResponse#ScalingParameters
   */
  readonly scalingParameters?: CloudSearchScalingParametersStatus;

}

/**
 * Converts an object of type 'CloudSearchUpdateScalingParametersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateScalingParametersResponse(obj: CloudSearchUpdateScalingParametersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScalingParameters': toJson_CloudSearchScalingParametersStatus(obj.scalingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateServiceAccessPoliciesRequest
 */
export interface CloudSearchUpdateServiceAccessPoliciesRequest {
  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesRequest#AccessPolicies
   */
  readonly accessPolicies?: string;

}

/**
 * Converts an object of type 'CloudSearchUpdateServiceAccessPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateServiceAccessPoliciesRequest(obj: CloudSearchUpdateServiceAccessPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'AccessPolicies': obj.accessPolicies,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchUpdateServiceAccessPoliciesResponse
 */
export interface CloudSearchUpdateServiceAccessPoliciesResponse {
  /**
   * @schema CloudSearchUpdateServiceAccessPoliciesResponse#AccessPolicies
   */
  readonly accessPolicies?: CloudSearchAccessPoliciesStatus;

}

/**
 * Converts an object of type 'CloudSearchUpdateServiceAccessPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchUpdateServiceAccessPoliciesResponse(obj: CloudSearchUpdateServiceAccessPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessPolicies': toJson_CloudSearchAccessPoliciesStatus(obj.accessPolicies),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainStatus
 */
export interface CloudSearchDomainStatus {
  /**
   * @schema CloudSearchDomainStatus#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema CloudSearchDomainStatus#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CloudSearchDomainStatus#ARN
   */
  readonly arn?: string;

  /**
   * @schema CloudSearchDomainStatus#Created
   */
  readonly created?: boolean;

  /**
   * @schema CloudSearchDomainStatus#Deleted
   */
  readonly deleted?: boolean;

  /**
   * @schema CloudSearchDomainStatus#DocService
   */
  readonly docService?: CloudSearchServiceEndpoint;

  /**
   * @schema CloudSearchDomainStatus#SearchService
   */
  readonly searchService?: CloudSearchServiceEndpoint;

  /**
   * @schema CloudSearchDomainStatus#RequiresIndexDocuments
   */
  readonly requiresIndexDocuments?: boolean;

  /**
   * @schema CloudSearchDomainStatus#Processing
   */
  readonly processing?: boolean;

  /**
   * @schema CloudSearchDomainStatus#SearchInstanceType
   */
  readonly searchInstanceType?: string;

  /**
   * @schema CloudSearchDomainStatus#SearchPartitionCount
   */
  readonly searchPartitionCount?: number;

  /**
   * @schema CloudSearchDomainStatus#SearchInstanceCount
   */
  readonly searchInstanceCount?: number;

  /**
   * @schema CloudSearchDomainStatus#Limits
   */
  readonly limits?: CloudSearchLimits;

}

/**
 * Converts an object of type 'CloudSearchDomainStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainStatus(obj: CloudSearchDomainStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainId': obj.domainId,
    'DomainName': obj.domainName,
    'ARN': obj.arn,
    'Created': obj.created,
    'Deleted': obj.deleted,
    'DocService': toJson_CloudSearchServiceEndpoint(obj.docService),
    'SearchService': toJson_CloudSearchServiceEndpoint(obj.searchService),
    'RequiresIndexDocuments': obj.requiresIndexDocuments,
    'Processing': obj.processing,
    'SearchInstanceType': obj.searchInstanceType,
    'SearchPartitionCount': obj.searchPartitionCount,
    'SearchInstanceCount': obj.searchInstanceCount,
    'Limits': toJson_CloudSearchLimits(obj.limits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchAnalysisScheme
 */
export interface CloudSearchAnalysisScheme {
  /**
   * @schema CloudSearchAnalysisScheme#AnalysisSchemeName
   */
  readonly analysisSchemeName?: string;

  /**
   * @schema CloudSearchAnalysisScheme#AnalysisSchemeLanguage
   */
  readonly analysisSchemeLanguage?: string;

  /**
   * @schema CloudSearchAnalysisScheme#AnalysisOptions
   */
  readonly analysisOptions?: CloudSearchAnalysisOptions;

}

/**
 * Converts an object of type 'CloudSearchAnalysisScheme' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchAnalysisScheme(obj: CloudSearchAnalysisScheme | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisSchemeName': obj.analysisSchemeName,
    'AnalysisSchemeLanguage': obj.analysisSchemeLanguage,
    'AnalysisOptions': toJson_CloudSearchAnalysisOptions(obj.analysisOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchAnalysisSchemeStatus
 */
export interface CloudSearchAnalysisSchemeStatus {
  /**
   * @schema CloudSearchAnalysisSchemeStatus#Options
   */
  readonly options?: CloudSearchAnalysisScheme;

  /**
   * @schema CloudSearchAnalysisSchemeStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchAnalysisSchemeStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchAnalysisSchemeStatus(obj: CloudSearchAnalysisSchemeStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchAnalysisScheme(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchExpression
 */
export interface CloudSearchExpression {
  /**
   * @schema CloudSearchExpression#ExpressionName
   */
  readonly expressionName?: string;

  /**
   * @schema CloudSearchExpression#ExpressionValue
   */
  readonly expressionValue?: string;

}

/**
 * Converts an object of type 'CloudSearchExpression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchExpression(obj: CloudSearchExpression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExpressionName': obj.expressionName,
    'ExpressionValue': obj.expressionValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchExpressionStatus
 */
export interface CloudSearchExpressionStatus {
  /**
   * @schema CloudSearchExpressionStatus#Options
   */
  readonly options?: CloudSearchExpression;

  /**
   * @schema CloudSearchExpressionStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchExpressionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchExpressionStatus(obj: CloudSearchExpressionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchExpression(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIndexField
 */
export interface CloudSearchIndexField {
  /**
   * @schema CloudSearchIndexField#IndexFieldName
   */
  readonly indexFieldName?: string;

  /**
   * @schema CloudSearchIndexField#IndexFieldType
   */
  readonly indexFieldType?: string;

  /**
   * @schema CloudSearchIndexField#IntOptions
   */
  readonly intOptions?: CloudSearchIntOptions;

  /**
   * @schema CloudSearchIndexField#DoubleOptions
   */
  readonly doubleOptions?: CloudSearchDoubleOptions;

  /**
   * @schema CloudSearchIndexField#LiteralOptions
   */
  readonly literalOptions?: CloudSearchLiteralOptions;

  /**
   * @schema CloudSearchIndexField#TextOptions
   */
  readonly textOptions?: CloudSearchTextOptions;

  /**
   * @schema CloudSearchIndexField#DateOptions
   */
  readonly dateOptions?: CloudSearchDateOptions;

  /**
   * @schema CloudSearchIndexField#LatLonOptions
   */
  readonly latLonOptions?: CloudSearchLatLonOptions;

  /**
   * @schema CloudSearchIndexField#IntArrayOptions
   */
  readonly intArrayOptions?: CloudSearchIntArrayOptions;

  /**
   * @schema CloudSearchIndexField#DoubleArrayOptions
   */
  readonly doubleArrayOptions?: CloudSearchDoubleArrayOptions;

  /**
   * @schema CloudSearchIndexField#LiteralArrayOptions
   */
  readonly literalArrayOptions?: CloudSearchLiteralArrayOptions;

  /**
   * @schema CloudSearchIndexField#TextArrayOptions
   */
  readonly textArrayOptions?: CloudSearchTextArrayOptions;

  /**
   * @schema CloudSearchIndexField#DateArrayOptions
   */
  readonly dateArrayOptions?: CloudSearchDateArrayOptions;

}

/**
 * Converts an object of type 'CloudSearchIndexField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIndexField(obj: CloudSearchIndexField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexFieldName': obj.indexFieldName,
    'IndexFieldType': obj.indexFieldType,
    'IntOptions': toJson_CloudSearchIntOptions(obj.intOptions),
    'DoubleOptions': toJson_CloudSearchDoubleOptions(obj.doubleOptions),
    'LiteralOptions': toJson_CloudSearchLiteralOptions(obj.literalOptions),
    'TextOptions': toJson_CloudSearchTextOptions(obj.textOptions),
    'DateOptions': toJson_CloudSearchDateOptions(obj.dateOptions),
    'LatLonOptions': toJson_CloudSearchLatLonOptions(obj.latLonOptions),
    'IntArrayOptions': toJson_CloudSearchIntArrayOptions(obj.intArrayOptions),
    'DoubleArrayOptions': toJson_CloudSearchDoubleArrayOptions(obj.doubleArrayOptions),
    'LiteralArrayOptions': toJson_CloudSearchLiteralArrayOptions(obj.literalArrayOptions),
    'TextArrayOptions': toJson_CloudSearchTextArrayOptions(obj.textArrayOptions),
    'DateArrayOptions': toJson_CloudSearchDateArrayOptions(obj.dateArrayOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIndexFieldStatus
 */
export interface CloudSearchIndexFieldStatus {
  /**
   * @schema CloudSearchIndexFieldStatus#Options
   */
  readonly options?: CloudSearchIndexField;

  /**
   * @schema CloudSearchIndexFieldStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchIndexFieldStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIndexFieldStatus(obj: CloudSearchIndexFieldStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchIndexField(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchSuggester
 */
export interface CloudSearchSuggester {
  /**
   * @schema CloudSearchSuggester#SuggesterName
   */
  readonly suggesterName?: string;

  /**
   * @schema CloudSearchSuggester#DocumentSuggesterOptions
   */
  readonly documentSuggesterOptions?: CloudSearchDocumentSuggesterOptions;

}

/**
 * Converts an object of type 'CloudSearchSuggester' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchSuggester(obj: CloudSearchSuggester | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuggesterName': obj.suggesterName,
    'DocumentSuggesterOptions': toJson_CloudSearchDocumentSuggesterOptions(obj.documentSuggesterOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchSuggesterStatus
 */
export interface CloudSearchSuggesterStatus {
  /**
   * @schema CloudSearchSuggesterStatus#Options
   */
  readonly options?: CloudSearchSuggester;

  /**
   * @schema CloudSearchSuggesterStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchSuggesterStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchSuggesterStatus(obj: CloudSearchSuggesterStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchSuggester(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchAvailabilityOptionsStatus
 */
export interface CloudSearchAvailabilityOptionsStatus {
  /**
   * @schema CloudSearchAvailabilityOptionsStatus#Options
   */
  readonly options?: boolean;

  /**
   * @schema CloudSearchAvailabilityOptionsStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchAvailabilityOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchAvailabilityOptionsStatus(obj: CloudSearchAvailabilityOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': obj.options,
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainEndpointOptionsStatus
 */
export interface CloudSearchDomainEndpointOptionsStatus {
  /**
   * @schema CloudSearchDomainEndpointOptionsStatus#Options
   */
  readonly options?: CloudSearchDomainEndpointOptions;

  /**
   * @schema CloudSearchDomainEndpointOptionsStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchDomainEndpointOptionsStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainEndpointOptionsStatus(obj: CloudSearchDomainEndpointOptionsStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchDomainEndpointOptions(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchScalingParametersStatus
 */
export interface CloudSearchScalingParametersStatus {
  /**
   * @schema CloudSearchScalingParametersStatus#Options
   */
  readonly options?: CloudSearchScalingParameters;

  /**
   * @schema CloudSearchScalingParametersStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchScalingParametersStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchScalingParametersStatus(obj: CloudSearchScalingParametersStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': toJson_CloudSearchScalingParameters(obj.options),
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchAccessPoliciesStatus
 */
export interface CloudSearchAccessPoliciesStatus {
  /**
   * @schema CloudSearchAccessPoliciesStatus#Options
   */
  readonly options?: string;

  /**
   * @schema CloudSearchAccessPoliciesStatus#Status
   */
  readonly status?: CloudSearchOptionStatus;

}

/**
 * Converts an object of type 'CloudSearchAccessPoliciesStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchAccessPoliciesStatus(obj: CloudSearchAccessPoliciesStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Options': obj.options,
    'Status': toJson_CloudSearchOptionStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDomainEndpointOptions
 */
export interface CloudSearchDomainEndpointOptions {
  /**
   * @schema CloudSearchDomainEndpointOptions#EnforceHTTPS
   */
  readonly enforceHttps?: boolean;

  /**
   * @schema CloudSearchDomainEndpointOptions#TLSSecurityPolicy
   */
  readonly tlsSecurityPolicy?: string;

}

/**
 * Converts an object of type 'CloudSearchDomainEndpointOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDomainEndpointOptions(obj: CloudSearchDomainEndpointOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnforceHTTPS': obj.enforceHttps,
    'TLSSecurityPolicy': obj.tlsSecurityPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchScalingParameters
 */
export interface CloudSearchScalingParameters {
  /**
   * @schema CloudSearchScalingParameters#DesiredInstanceType
   */
  readonly desiredInstanceType?: string;

  /**
   * @schema CloudSearchScalingParameters#DesiredReplicationCount
   */
  readonly desiredReplicationCount?: number;

  /**
   * @schema CloudSearchScalingParameters#DesiredPartitionCount
   */
  readonly desiredPartitionCount?: number;

}

/**
 * Converts an object of type 'CloudSearchScalingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchScalingParameters(obj: CloudSearchScalingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DesiredInstanceType': obj.desiredInstanceType,
    'DesiredReplicationCount': obj.desiredReplicationCount,
    'DesiredPartitionCount': obj.desiredPartitionCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchServiceEndpoint
 */
export interface CloudSearchServiceEndpoint {
  /**
   * @schema CloudSearchServiceEndpoint#Endpoint
   */
  readonly endpoint?: string;

}

/**
 * Converts an object of type 'CloudSearchServiceEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchServiceEndpoint(obj: CloudSearchServiceEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': obj.endpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchLimits
 */
export interface CloudSearchLimits {
  /**
   * @schema CloudSearchLimits#MaximumReplicationCount
   */
  readonly maximumReplicationCount?: number;

  /**
   * @schema CloudSearchLimits#MaximumPartitionCount
   */
  readonly maximumPartitionCount?: number;

}

/**
 * Converts an object of type 'CloudSearchLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchLimits(obj: CloudSearchLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaximumReplicationCount': obj.maximumReplicationCount,
    'MaximumPartitionCount': obj.maximumPartitionCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchAnalysisOptions
 */
export interface CloudSearchAnalysisOptions {
  /**
   * @schema CloudSearchAnalysisOptions#Synonyms
   */
  readonly synonyms?: string;

  /**
   * @schema CloudSearchAnalysisOptions#Stopwords
   */
  readonly stopwords?: string;

  /**
   * @schema CloudSearchAnalysisOptions#StemmingDictionary
   */
  readonly stemmingDictionary?: string;

  /**
   * @schema CloudSearchAnalysisOptions#JapaneseTokenizationDictionary
   */
  readonly japaneseTokenizationDictionary?: string;

  /**
   * @schema CloudSearchAnalysisOptions#AlgorithmicStemming
   */
  readonly algorithmicStemming?: string;

}

/**
 * Converts an object of type 'CloudSearchAnalysisOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchAnalysisOptions(obj: CloudSearchAnalysisOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Synonyms': obj.synonyms,
    'Stopwords': obj.stopwords,
    'StemmingDictionary': obj.stemmingDictionary,
    'JapaneseTokenizationDictionary': obj.japaneseTokenizationDictionary,
    'AlgorithmicStemming': obj.algorithmicStemming,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchOptionStatus
 */
export interface CloudSearchOptionStatus {
  /**
   * @schema CloudSearchOptionStatus#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CloudSearchOptionStatus#UpdateDate
   */
  readonly updateDate?: string;

  /**
   * @schema CloudSearchOptionStatus#UpdateVersion
   */
  readonly updateVersion?: number;

  /**
   * @schema CloudSearchOptionStatus#State
   */
  readonly state?: string;

  /**
   * @schema CloudSearchOptionStatus#PendingDeletion
   */
  readonly pendingDeletion?: boolean;

}

/**
 * Converts an object of type 'CloudSearchOptionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchOptionStatus(obj: CloudSearchOptionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationDate': obj.creationDate,
    'UpdateDate': obj.updateDate,
    'UpdateVersion': obj.updateVersion,
    'State': obj.state,
    'PendingDeletion': obj.pendingDeletion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIntOptions
 */
export interface CloudSearchIntOptions {
  /**
   * @schema CloudSearchIntOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchIntOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchIntOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchIntOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchIntOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIntOptions(obj: CloudSearchIntOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDoubleOptions
 */
export interface CloudSearchDoubleOptions {
  /**
   * @schema CloudSearchDoubleOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchDoubleOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchDoubleOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDoubleOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDoubleOptions(obj: CloudSearchDoubleOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchLiteralOptions
 */
export interface CloudSearchLiteralOptions {
  /**
   * @schema CloudSearchLiteralOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLiteralOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchLiteralOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchLiteralOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchLiteralOptions(obj: CloudSearchLiteralOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchTextOptions
 */
export interface CloudSearchTextOptions {
  /**
   * @schema CloudSearchTextOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchTextOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchTextOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema CloudSearchTextOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * Converts an object of type 'CloudSearchTextOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchTextOptions(obj: CloudSearchTextOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
    'HighlightEnabled': obj.highlightEnabled,
    'AnalysisScheme': obj.analysisScheme,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDateOptions
 */
export interface CloudSearchDateOptions {
  /**
   * @schema CloudSearchDateOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchDateOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchDateOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchDateOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDateOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDateOptions(obj: CloudSearchDateOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchLatLonOptions
 */
export interface CloudSearchLatLonOptions {
  /**
   * @schema CloudSearchLatLonOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLatLonOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchLatLonOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchLatLonOptions#SortEnabled
   */
  readonly sortEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchLatLonOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchLatLonOptions(obj: CloudSearchLatLonOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceField': obj.sourceField,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
    'SortEnabled': obj.sortEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchIntArrayOptions
 */
export interface CloudSearchIntArrayOptions {
  /**
   * @schema CloudSearchIntArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchIntArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchIntArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchIntArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchIntArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchIntArrayOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchIntArrayOptions(obj: CloudSearchIntArrayOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceFields': obj.sourceFields,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDoubleArrayOptions
 */
export interface CloudSearchDoubleArrayOptions {
  /**
   * @schema CloudSearchDoubleArrayOptions#DefaultValue
   */
  readonly defaultValue?: number;

  /**
   * @schema CloudSearchDoubleArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchDoubleArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDoubleArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDoubleArrayOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDoubleArrayOptions(obj: CloudSearchDoubleArrayOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceFields': obj.sourceFields,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchLiteralArrayOptions
 */
export interface CloudSearchLiteralArrayOptions {
  /**
   * @schema CloudSearchLiteralArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchLiteralArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchLiteralArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchLiteralArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchLiteralArrayOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchLiteralArrayOptions(obj: CloudSearchLiteralArrayOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceFields': obj.sourceFields,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchTextArrayOptions
 */
export interface CloudSearchTextArrayOptions {
  /**
   * @schema CloudSearchTextArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchTextArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchTextArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

  /**
   * @schema CloudSearchTextArrayOptions#HighlightEnabled
   */
  readonly highlightEnabled?: boolean;

  /**
   * @schema CloudSearchTextArrayOptions#AnalysisScheme
   */
  readonly analysisScheme?: string;

}

/**
 * Converts an object of type 'CloudSearchTextArrayOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchTextArrayOptions(obj: CloudSearchTextArrayOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceFields': obj.sourceFields,
    'ReturnEnabled': obj.returnEnabled,
    'HighlightEnabled': obj.highlightEnabled,
    'AnalysisScheme': obj.analysisScheme,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDateArrayOptions
 */
export interface CloudSearchDateArrayOptions {
  /**
   * @schema CloudSearchDateArrayOptions#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudSearchDateArrayOptions#SourceFields
   */
  readonly sourceFields?: string;

  /**
   * @schema CloudSearchDateArrayOptions#FacetEnabled
   */
  readonly facetEnabled?: boolean;

  /**
   * @schema CloudSearchDateArrayOptions#SearchEnabled
   */
  readonly searchEnabled?: boolean;

  /**
   * @schema CloudSearchDateArrayOptions#ReturnEnabled
   */
  readonly returnEnabled?: boolean;

}

/**
 * Converts an object of type 'CloudSearchDateArrayOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDateArrayOptions(obj: CloudSearchDateArrayOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultValue': obj.defaultValue,
    'SourceFields': obj.sourceFields,
    'FacetEnabled': obj.facetEnabled,
    'SearchEnabled': obj.searchEnabled,
    'ReturnEnabled': obj.returnEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudSearchDocumentSuggesterOptions
 */
export interface CloudSearchDocumentSuggesterOptions {
  /**
   * @schema CloudSearchDocumentSuggesterOptions#SourceField
   */
  readonly sourceField?: string;

  /**
   * @schema CloudSearchDocumentSuggesterOptions#FuzzyMatching
   */
  readonly fuzzyMatching?: string;

  /**
   * @schema CloudSearchDocumentSuggesterOptions#SortExpression
   */
  readonly sortExpression?: string;

}

/**
 * Converts an object of type 'CloudSearchDocumentSuggesterOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudSearchDocumentSuggesterOptions(obj: CloudSearchDocumentSuggesterOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceField': obj.sourceField,
    'FuzzyMatching': obj.fuzzyMatching,
    'SortExpression': obj.sortExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
