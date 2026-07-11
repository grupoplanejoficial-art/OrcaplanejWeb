import { ApprovalStatus, IntegrationStatus, MaterialType, PdfType, PieceShape, PricingSource, ProjectStatus, UnitOfMeasure, UserRole } from './enums';

export type ID = string;
export type ISODateTime = string;

export interface Tenant { id: ID; name: string; document?: string; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface User { id: ID; tenantId: ID; name: string; email: string; role: UserRole; isActive: boolean; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Client { id: ID; tenantId: ID; name: string; document?: string; email?: string; phone?: string; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Project { id: ID; tenantId: ID; clientId: ID; name: string; status: ProjectStatus; promobXmlImportId?: ID; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Environment { id: ID; tenantId: ID; projectId: ID; name: string; description?: string; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Module { id: ID; tenantId: ID; environmentId: ID; name: string; widthMm?: number; heightMm?: number; depthMm?: number; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Piece { id: ID; tenantId: ID; moduleId: ID; materialId?: ID; name: string; shape: PieceShape; widthMm?: number; heightMm?: number; quantity: number; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Material { id: ID; tenantId: ID; name: string; type: MaterialType; unit: UnitOfMeasure; price: number; pricingSource: PricingSource; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface CalculationRecord { id: ID; tenantId: ID; projectId: ID; category: MaterialType | 'production_time' | 'financial'; total: number; metadata?: Record<string, unknown>; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface Approval { id: ID; tenantId: ID; projectId: ID; requestedBy: ID; reviewedBy?: ID; status: ApprovalStatus; notes?: string; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface GeneratedPdf { id: ID; tenantId: ID; projectId: ID; type: PdfType; fileUrl?: string; createdAt: ISODateTime; }
export interface Integration { id: ID; tenantId: ID; provider: 'google_sheets' | 'parceiros_planej' | 'promob' | 'price_ai'; status: IntegrationStatus; settings?: Record<string, unknown>; createdAt: ISODateTime; updatedAt: ISODateTime; }
export interface PromobXmlImport { id: ID; tenantId: ID; projectId?: ID; fileName: string; rawStoragePath?: string; createdAt: ISODateTime; }
