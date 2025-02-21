/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SYSTEM_PERMISSION} from '../permission/permission';
import {CommonUtil} from '../util/common.util';

@Injectable()
export class WorkspaceAdminGuard implements CanActivate {
  constructor() {
  }

  canActivate(_next: ActivatedRouteSnapshot,
              _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // 로그인 사용자 판별 후 권한 체크
    return CommonUtil.isValidPermissions([SYSTEM_PERMISSION.MANAGE_SYSTEM, SYSTEM_PERMISSION.MANAGE_SHARED_WORKSPACE]);
  }
}
