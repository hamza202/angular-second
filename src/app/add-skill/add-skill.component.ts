import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Router } from '@angular/router';
@Component({
    selector: 'app-add-skill',
    templateUrl: './add-skill.component.html',
    styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
    addSkillData = {
        name: '',
        phone: '',
        skill: '',
        province: '',
        price: '' ,
        comment: ''
    };
    itemList: AngularFireList<any>;

    constructor(public db: AngularFireDatabase , public router: Router) {
        this.itemList = db.list('skill');
    }

    ngOnInit() {
    }

    insertSkill() {
        this.itemList.push({
            name: this.addSkillData.name,
            phone: this.addSkillData.phone,
            skill: this.addSkillData.skill,
            province: this.addSkillData.province,
            price: this.addSkillData.price + '$',
            comment: this.addSkillData.comment
        });
        this.addSkillData.name = '';
        this.addSkillData.phone = '';
        this.addSkillData.skill = '';
        this.addSkillData.price = '';
        this.addSkillData.province = '';
        this.addSkillData.comment = '';
        this.router.navigate(['/mySkill']);
    }
}
