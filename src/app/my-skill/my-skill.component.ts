import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Component({
    selector: 'app-my-skill',
    templateUrl: './my-skill.component.html',
    styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent implements OnInit {
    itemList: AngularFireList<any>;
    itemArray = [];
    updateData = {
        $key: '',
        name: '',
        phone: '',
        skill: '',
        province: '',
        price: '',
        comment: ''
    };

    constructor(public db: AngularFireDatabase) {
        this.itemList = db.list('skill');
        this.itemList.snapshotChanges().subscribe(actions => {
            actions.forEach(action => {
                const y = action.payload.toJSON();
                y['$key'] = action.key;
                this.itemArray.push(y as listItemCLass);
            });
        });
        console.log(this.itemArray);
    }

    ngOnInit() {
    }

    clickEdit(key, name, phone, skill, province, price, comment) {
        this.updateData.$key = key;
        this.updateData.name = name;
        this.updateData.phone = phone;
        this.updateData.skill = skill;
        this.updateData.province = province;
        this.updateData.price = price;
        this.updateData.comment = comment;
        console.log(this.updateData);
    }

    saveEdit() {
        this.itemList.set(this.updateData.$key, {
            name: this.updateData.name,
            phone: this.updateData.phone,
            skill: this.updateData.skill,
            province: this.updateData.province,
            price: this.updateData.price + '$',
            comment: this.updateData.comment
        });
        console.log(this.updateData.name);
        this.itemArray = [];

    }

    clickDelete(key) {
        this.itemList.remove(key);
        this.itemArray = [];
    }
}

export class listItemCLass {
    $key: string;
    name: string;
    phone: string;
    skill: string;
    province: string;
    price: string;
    comment: string;
}
