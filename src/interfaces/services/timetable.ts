export interface Room {
    room_id: string;
    room_name: string;
    room_latitude: string;
    room_longitude: string;
}

export interface Teacher {
    teacher_id: string;
    teacher_name: string;
    teacher_full_name: string;
    teacher_short_name: string;
    teacher_url: string;
    teacher_rating: string;
}

export namespace Lessons {
    export interface Datum {
        lesson_id: string;
        group_id: string;
        day_number: string;
        day_name: string;
        lesson_name: string;
        lesson_full_name: string;
        lesson_number: string;
        lesson_room: string;
        lesson_type: string;
        teacher_name: string;
        lesson_week: string;
        time_start: string;
        time_end: string;
        rate: string;
        teachers: Teacher[];
        rooms: Room[];
    }

    export interface RootObject {
        statusCode: number;
        timeStamp: number;
        message: string;
        debugInfo: string;
        meta?: any;
        data: Datum[];
    }
}

export namespace Teachers {
    export interface Datum {
        teacher_id: string;
        teacher_name: string;
        teacher_full_name: string;
        teacher_short_name: string;
        teacher_url: string;
        teacher_rating: string;
    }

    export interface RootObject {
        statusCode: number;
        timeStamp: number;
        message: string;
        debugInfo?: any;
        meta?: any;
        data: Datum[];
    }
}

export namespace Timetable {
    export interface Group {
        group_id: number;
        group_full_name: string;
        group_prefix: string;
        group_okr: string;
        group_type: string;
        group_url: string;
    }

    export interface Lesson {
        lesson_id: string;
        group_id: string;
        day_number: string;
        day_name: string;
        lesson_name: string;
        lesson_full_name: string;
        lesson_number: string;
        lesson_room: string;
        lesson_type: string;
        teacher_name: string;
        lesson_week: string;
        time_start: string;
        time_end: string;
        rate: string;
        teachers: Teacher[];
        rooms: Room[];
    }

    export interface Data {
        group: Group;
        weeks: any;
    }

    export interface RootObject {
        statusCode: number;
        timeStamp: number;
        message: string;
        debugInfo?: any;
        meta?: any;
        data: Data;
    }

}
