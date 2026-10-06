import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { PeopleModule } from './modules/people/people.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { DailyCareModule } from './modules/daily-care/daily-care.module';
import { CommunicationModule } from './modules/communication/communication.module';
import { BillingModule } from './modules/billing/billing.module';
import { HealthSafetyModule } from './modules/health-safety/health-safety.module';
import { AuditModule } from './modules/audit/audit.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    AuthModule,
    TenancyModule,
    PeopleModule,
    ClassroomModule,
    EnrollmentModule,
    AttendanceModule,
    DailyCareModule,
    CommunicationModule,
    BillingModule,
    HealthSafetyModule,
    AuditModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
