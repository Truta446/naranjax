import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { UserModel } from '../../../shared/models/user/user.model';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-workspace',
  imports: [NzTableModule, TranslateModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent implements OnInit {
  public total: number = 1;
  public listOfRandomUser: UserModel[] = [];
  public loading: boolean = true;
  public pageSize: number = 10;
  public pageIndex: number = 1;
  public filterGender: any = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' },
  ];

  private $user: UserService = inject(UserService);

  public loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;

    this.$user.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe((data) => {
      this.loading = false;
      this.total = 200;
      this.listOfRandomUser = data.results;
    });
  }

  public onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;

    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  public ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }
}
