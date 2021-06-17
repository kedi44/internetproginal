
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Kategori } from 'src/app/models/Kategori';
import { KategoriDialogComponent } from 'src/app/dialogs/kategori-dialog/kategori-dialog.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-kategori',
  templateUrl: './admin-kategori.component.html',
  styleUrls: ['./admin-kategori.component.css']
})
export class AdminKategoriComponent implements OnInit {
  dialogRe!: MatDialogRef<unknown, any> 
  dialogRef!: MatDialogRef<unknown, any> 
  dialogRefConfirm!: MatDialogRef<unknown, any> 
  kategoriler: any;
  dataSource!: MatTableDataSource<unknown>
  sort: any;
  paginator: any;
  alert: any;
 
  constructor(
    public apiServis: ApiService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.KategoriListele();
  }

  KategoriListele() {
    this.apiServis.product() 
      this.kategoriler = d;
      this.dataSource = new MatTableDataSource(this.kategoriler);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    };
  }
  Ekle() {
    var yeniKayit: Kategori = new Kategori();
    this.dialogRe = this.matDialog.open(KategoriDialogComponent, {
      width: '400px',
      data: {
        kayit: yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRe.afterClosed().subscribe(d => {
      if (d) {
        this.apiServis.KategoriEkle(d).subscribe(
            (this.KategoriListele();
          }
        });
      }
    });
  }
  Duzenle(kayit: Kategori) {
    this.dialogRef = this.matDialog.open(KategoriDialogComponent, {
      width: '400px',
      data: {
        kayit: kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRe.afterClosed().subscribe(d => {
      if (d) {
        kayit.KategoriAdi = d.KategoriAdi;
        this.apiServis.KategoriDuzenle(kayit) ;
      }
    });
  }
  Sil(kayit: Kategori) {
    this.dialogRefConfirm = this.matDialog.open(ConfirmDialogComponent, {
      width: '400px'
    });
    this.dialogRefConfirm._containerInstance.dialogMesaj = kayit.KategoriAdi + " Kategorisi Silinecektir onaylıyor musunuz?";

    this.dialogRefConfirm.afterClosed().subscribe(d => {
     
        });
      }

  }
function kayit(kayit: any, _kategori: typeof Kategori) {
  throw new Error('Function not implemented.');
}

function Duzenle(kayit: (kayit: any, Kategori: any) => void, _kategori: typeof Kategori) {
  throw new Error('Function not implemented.');
}

function d(d: any, arg1: never[]) {
  throw new Error('Function not implemented.');
}

function Ekle() {
  throw new Error('Function not implemented.');
}

